import { useState, useEffect, useRef } from 'react'
import Head from 'next/head'

const ADMIN_TOKEN = process.env.NEXT_PUBLIC_ADMIN_TOKEN || ''

function adminFetch(path, body) {
  const opts = {
    headers: { 'x-admin-token': ADMIN_TOKEN, 'content-type': 'application/json' },
  }
  if (body) { opts.method = 'POST'; opts.body = JSON.stringify(body) }
  else opts.method = 'GET'
  return fetch(path, opts).then(r => r.json())
}

const PACK_COLOR = { essentiel: '#6b7280', premium: '#0071E3' }
const PACK_LABEL = { essentiel: 'Essentiel', premium: 'Premium' }
const PACK_PRICE = { essentiel: 150, premium: 490 }

const DEFAULT_CFG = {
  exampleUrls: { essentiel: '', premium: '' },
  packs: {
    essentiel: { price: '150€', desc: 'Site vitrine + gestion autonome' },
    premium:   { price: '490€', desc: 'Commandes en ligne & livréison' },
  },
  hero: {
    title:    '',
    subtitle: '',
    ctaText:  ''
  },
  payment: {
    essentiel: { stripe: 'https://buy.stripe.com/8x228kbpzaHz8CHajjdUY07' },
    premium:   { stripe: 'https://buy.stripe.com/7sYbIUfFPdTL1afdvvdUY06' },
  },
  assistance: {
    label:  'Besoin d\'aide ?',
    phone1: '',
    phone2: '',
  }
}

function fmtDate(ts) {
  if (!ts) return '—'
  try {
    const d = ts.toDate ? ts.toDate() : new Date(ts)
    return d.toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })
  } catch { return '—' }
}

function deepMerge(base, override) {
  if (!override) return base
  const result = { ...base }
  for (const k in override) {
    if (override[k] && typeof override[k] === 'object' && !Array.isArray(override[k])) {
      result[k] = deepMerge(base[k] || {}, override[k])
    } else {
      result[k] = override[k]
    }
  }
  return result
}

function StatusBadge({ status }) {
  const colors = { new: '#0071E3', viewed: '#f59e0b', contacted: '#10b981', completed: '#6b7280' }
  const labels = { new: 'Nouveau', viewed: 'Vu', contacted: 'Contacté', completed: 'Terminé' }
  const c = colors[status] || '#9ca3af'
  return (
    <span style={{ padding: '2px 10px', borderRadius: 980, fontSize: 11, fontWeight: 700, background: c + '22', color: c, whiteSpace: 'nowrap' }}>
      {labels[status] || status || 'Nouveau'}
    </span>
  )
}

/* ════════════════════════════════════════════════════════════════
   DASHBOARD PRINCIPAL
   ════════════════════════════════════════════════════════════════ */
export default function Dashboard() {
  const [tab, setTab]               = useState('overview')
  const [subs, setSubs]             = useState([])
  const [forms, setForms]           = useState([])
  const [cfg, setCfg]               = useState(DEFAULT_CFG)
  const [dirty, setDirty]           = useState(false)
  const [saving, setSaving]         = useState(false)
  const [toast, setToast]           = useState('')
  const [detail, setDetail]         = useState(null)
  const [loading, setLoading]       = useState(true)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [live, setLive]             = useState(false)

  async function loadData() {
    try {
      const data = await adminFetch('/api/admin/data')
      if (data.error) { setLive(false); return }
      if (data.config) setCfg(deepMerge(DEFAULT_CFG, data.config))
      setSubs(data.submissions || [])
      setForms(data.forms || [])
      setLive(true)
    } catch { setLive(false) }
  }

  useEffect(() => {
    loadData().finally(() => setLoading(false))
    const interval = setInterval(loadData, 15000)
    return () => clearInterval(interval)
  }, [])

  
  function showToast(msg) {
    setToast(msg)
    setTimeout(() => setToast(''), 3000)
  }

  function updateCfg(path, value) {
    const keys = path.split('.')
    setCfg(prev => {
      const next = JSON.parse(JSON.stringify(prev))
      let o = next
      for (let i = 0; i < keys.length - 1; i++) o = o[keys[i]]
      o[keys[keys.length - 1]] = value
      return next
    })
    setDirty(true)
  }

  async function saveCfg() {
    setSaving(true)
    try {
      const res = await adminFetch('/api/admin/config', { cfg })
      if (res.error) throw new Error(res.error)
      setDirty(false)
      showToast('Configuration sauvegardée ✓')
    } catch (e) { showToast('Erreur : ' + e.message) }
    setSaving(false)
  }

  async function updateStatus(collection, id, status) {
    try {
      const res = await adminFetch('/api/admin/status', { collection, id, status })
      if (res.error) throw new Error(res.error)
      if (collection === 'submissions') setSubs(p => p.map(s => s.id === id ? { ...s, status } : s))
      else setForms(p => p.map(s => s.id === id ? { ...s, status } : s))
      showToast('Statut mis à jour')
    } catch { showToast('Erreur') }
  }

  async function deleteEntry(collection, id) {
    if (!confirm('Supprimer définitivement cette entrée ?')) return
    try {
      const res = await adminFetch('/api/admin/delete', { collection, id })
      if (res.error) throw new Error(res.error)
      if (collection === 'submissions') setSubs(p => p.filter(s => s.id !== id))
      else setForms(p => p.filter(s => s.id !== id))
      if (detail?.id === id) setDetail(null)
      showToast('Entrée supprimée')
    } catch { showToast('Erreur') }
  }

  function exportJSON() {
    const blob = new Blob([JSON.stringify({ submissions: subs, forms, exportedAt: new Date().toISOString() }, null, 2)], { type: 'application/json' })
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = `visioflow-${new Date().toISOString().slice(0, 10)}.json`
    a.click()
  }

  const allCount = subs.length + forms.length
  const newCount = [...subs, ...forms].filter(x => !x.status || x.status === 'new').length
  const revenue  = [...subs, ...forms].reduce((a, s) => a + (PACK_PRICE[s.pack] || 0), 0)

  const TABS = [
    { id: 'overview', icon: '📊', label: "Vue d'ensemble" },
    { id: 'clients',  icon: '👥', label: 'Clients', badge: newCount || null },
    { id: 'ai',       icon: '🤖', label: 'Prompt IA' },
    { id: 'edit',     icon: '✏️',  label: 'Modifier le site' },
    { id: 'settings', icon: '⚙️',  label: 'Paramètres' },
  ]

  // Le Head + CSS est TOUJOURS rendu en premier (loading, login, ou dashboard)
  return (
    <>
      <Head>
        <title>Dashboard — Visioflow</title>
        <meta name="robots" content="noindex,nofollow" />
        <style>{DASHBOARD_CSS}</style>
      </Head>

      {loading && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', fontFamily: 'Inter,sans-serif', color: '#6b7280', background: '#f8fafc' }}>
          Chargement…
        </div>
      )}

      {!loading && <div className="db">
        <div className={'db-overlay' + (mobileOpen ? ' open' : '')} onClick={() => setMobileOpen(false)} />

        <div className="db-topbar">
          <button className="db-hamburger" onClick={() => setMobileOpen(v => !v)} aria-label="Menu">
            <span /><span /><span />
          </button>
          <span className="db-topbar-logo">Visio<span className="db-logo-blue">Flow</span></span>
          <span className="db-logo-tag" style={{ marginLeft: 6 }}>Admin</span>
          <span className={'db-live-dot' + (live ? ' on' : '')} title={live ? 'Connecté en temps réel' : 'Connexion…'} style={{ marginLeft: 'auto' }} />
          {newCount > 0 && <span className="db-nav-badge">{newCount}</span>}
        </div>

        <aside className={'db-side' + (mobileOpen ? ' open' : '')}>
          <div className="db-logo">
            <span className="db-logo-text">Visio<span className="db-logo-blue">Flow</span></span>
            <span className="db-logo-tag">Admin</span>
          </div>
          <nav className="db-nav">
            {TABS.map(t => (
              <button key={t.id} onClick={() => { setTab(t.id); setDetail(null); setMobileOpen(false) }}
                className={'db-nav-btn' + (tab === t.id ? ' active' : '')}>
                <span className="db-nav-icon">{t.icon}</span>
                <span>{t.label}</span>
                {t.badge ? <span className="db-nav-badge">{t.badge}</span> : null}
              </button>
            ))}
          </nav>
          <div className="db-side-foot">
            <div style={{ padding: '6px 12px 10px', display: 'flex', alignItems: 'center', gap: 7, fontSize: 11, color: live ? '#34d399' : '#fbbf24' }}>
              <span className={'db-live-dot' + (live ? ' on' : '')} />
              {live ? 'Données en direct' : 'Connexion…'}
            </div>
            <a href="/" target="_blank" rel="noreferrer" className="db-nav-btn" onClick={() => setMobileOpen(false)} style={{ color: 'rgba(255,255,255,.35)', fontSize: 13 }}>
              <span className="db-nav-icon">🌐</span>Voir le site
            </a>
            <button className="db-nav-btn" onClick={async () => { await fetch('/api/admin/logout'); window.location.href = '/login-admin' }} style={{ color: 'rgba(255,255,255,.35)', fontSize: 13, width: '100%', textAlign: 'left' }}>
              <span className="db-nav-icon">🔒</span>Se déconnecter
            </button>
          </div>
        </aside>

        <main className="db-main">
          {tab === 'overview' && <OverviewTab subs={subs} forms={forms} allCount={allCount} newCount={newCount} revenue={revenue} live={live} onGoClients={() => { setTab('clients'); setDetail(null) }} />}
          {tab === 'clients'  && <ClientsTab subs={subs} forms={forms} detail={detail} setDetail={setDetail} onStatus={updateStatus} onDelete={deleteEntry} />}
          {tab === 'ai'       && <AiTab subs={subs} forms={forms} cfg={cfg} />}
          {tab === 'edit'     && <EditTab cfg={cfg} update={updateCfg} save={saveCfg} dirty={dirty} saving={saving} />}
          {tab === 'settings' && <SettingsTab onExport={exportJSON} subsCount={subs.length} formsCount={forms.length} />}
        </main>

        {toast && <div className="db-toast">{toast}</div>}
      </div>}

    </>
  )
}

/* ════════════════════════════════════════════════════════════════
   VUE D'ENSEMBLE
   ════════════════════════════════════════════════════════════════ */
function OverviewTab({ subs, forms, allCount, newCount, revenue, live, onGoClients }) {
  const packCounts = {}
  ;[...subs, ...forms].forEach(s => { if (s.pack) packCounts[s.pack] = (packCounts[s.pack] || 0) + 1 })
  const topPack = Object.entries(packCounts).sort((a, b) => b[1] - a[1])[0]
  const recent  = [...subs.map(s => ({ ...s, _type: 'config' })), ...forms.map(s => ({ ...s, _type: 'form' }))]
    .sort((a, b) => (b.timestamp?.seconds || 0) - (a.timestamp?.seconds || 0))
    .slice(0, 8)

  return (
    <div>
      <div className="db-page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 10 }}>
        <div>
          <h1 className="db-h1">Vue d'ensemble</h1>
          <p className="db-sub">Résumé de l'activité Visioflow</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '5px 12px', borderRadius: 980, fontSize: 11, fontWeight: 700, background: live ? 'rgba(52,211,153,.1)' : 'rgba(251,191,36,.1)', color: live ? '#34d399' : '#fbbf24', border: '.5px solid ' + (live ? 'rgba(52,211,153,.25)' : 'rgba(251,191,36,.25)') }}>
          <span className={'db-live-dot' + (live ? ' on' : '')} />
          {live ? 'Temps réel actif' : 'Connexion…'}
        </div>
      </div>

      <div className="db-stats">
        <div className="db-stat">
          <div className="db-stat-val">{allCount}</div>
          <div className="db-stat-lbl">Clients au total</div>
        </div>
        <div className="db-stat db-stat-blue">
          <div className="db-stat-val">{newCount}</div>
          <div className="db-stat-lbl">Nouveaux à traiter</div>
        </div>
        <div className="db-stat">
          <div className="db-stat-val">{subs.length}</div>
          <div className="db-stat-lbl">Configs builder</div>
        </div>
        <div className="db-stat">
          <div className="db-stat-val">{forms.length}</div>
          <div className="db-stat-lbl">Formulaires complets</div>
        </div>
        <div className="db-stat db-stat-green">
          <div className="db-stat-val">{revenue.toLocaleString('fr-FR')} €</div>
          <div className="db-stat-lbl">Revenus potentiels</div>
        </div>
        <div className="db-stat">
          <div className="db-stat-val">{topPack ? (PACK_LABEL[topPack[0]] || topPack[0]) : '—'}</div>
          <div className="db-stat-lbl">Pack le + choisi</div>
        </div>
      </div>

      <div className="db-card" style={{ marginTop: 24 }}>
        <div className="db-card-head">Activité récente</div>
        {recent.length === 0 ? (
          <div className="db-empty">
            <div style={{ fontSize: 36, marginBottom: 12 }}>📭</div>
            Aucune activité pour le moment.<br />
            Les configurations et formulaires apparaîtront ici dès qu'un client interagit avec le site.
          </div>
        ) : (
          <div className="db-table-wrap">
            <table className="db-table">
              <thead>
                <tr><th>Type</th><th>Pack</th><th>Restaurant / Cuisine</th><th>Date</th><th>Statut</th></tr>
              </thead>
              <tbody>
                {recent.map(r => (
                  <tr key={r.id} onClick={onGoClients} style={{ cursor: 'pointer' }}>
                    <td><span className={'db-type-badge db-type-' + r._type}>{r._type === 'config' ? 'Configuration' : 'Formulaire'}</span></td>
                    <td><span style={{ color: PACK_COLOR[r.pack] || '#6b7280', fontWeight: 600, fontSize: 12 }}>{PACK_LABEL[r.pack] || r.pack || '—'}</span></td>
                    <td>{r.restaurantName || r.cities?.[0]?.name || r.cuisine || '—'}</td>
                    <td style={{ color: '#9ca3af', fontSize: 12 }}>{fmtDate(r.timestamp)}</td>
                    <td><StatusBadge status={r.status || 'new'} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

/* ════════════════════════════════════════════════════════════════
   CLIENTS
   ════════════════════════════════════════════════════════════════ */
function ClientsTab({ subs, forms, detail, setDetail, onStatus, onDelete }) {
  const [filter, setFilter] = useState('all')

  const allItems = [
    ...subs.map(s => ({ ...s, _type: 'config', _col: 'submissions' })),
    ...forms.map(s => ({ ...s, _type: 'form', _col: 'form_submissions' }))
  ].sort((a, b) => (b.timestamp?.seconds || 0) - (a.timestamp?.seconds || 0))

  const filtered = filter === 'all'       ? allItems
    : filter === 'config'                 ? allItems.filter(x => x._type === 'config')
    : filter === 'form'                   ? allItems.filter(x => x._type === 'form')
    : allItems.filter(x => (x.status || 'new') === filter)

  if (detail) {
    return <DetailPanel item={detail} onClose={() => setDetail(null)} onStatus={onStatus} onDelete={onDelete} />
  }

  return (
    <div>
      <div className="db-page-header">
        <h1 className="db-h1">Clients</h1>
        <p className="db-sub">{allItems.length} entrée{allItems.length !== 1 ? 's' : ''} au total</p>
      </div>

      <div className="db-filters">
        {[['all', 'Tous'], ['config', 'Configurations builder'], ['form', 'Formulaires complets'], ['new', 'Nouveaux'], ['contacted', 'Contactés'], ['completed', 'Terminés']].map(([v, l]) => (
          <button key={v} onClick={() => setFilter(v)} className={'db-filter-btn' + (filter === v ? ' active' : '')}>{l}</button>
        ))}
      </div>

      <div className="db-card">
        {filtered.length === 0 ? (
          <div className="db-empty">Aucune entrée pour ce filtre.</div>
        ) : (
          <div className="db-table-wrap">
            <table className="db-table">
              <thead>
                <tr><th>Type</th><th>Pack</th><th>Restaurant / Cuisine</th><th>Email</th><th>Date</th><th>Statut</th><th></th></tr>
              </thead>
              <tbody>
                {filtered.map(item => (
                  <tr key={item.id}>
                    <td><span className={'db-type-badge db-type-' + item._type}>{item._type === 'config' ? 'Config' : 'Formulaire'}</span></td>
                    <td><span style={{ color: PACK_COLOR[item.pack] || '#6b7280', fontWeight: 700, fontSize: 12 }}>{PACK_LABEL[item.pack] || item.pack || '—'}</span></td>
                    <td>{item.restaurantName || item.cities?.[0]?.name || item.cuisine || '—'}</td>
                    <td style={{ color: '#6b7280', fontSize: 12 }}>{item.email || item.cities?.[0]?.email || '—'}</td>
                    <td style={{ color: '#9ca3af', fontSize: 11 }}>{fmtDate(item.timestamp)}</td>
                    <td><StatusBadge status={item.status || 'new'} /></td>
                    <td><button className="db-btn-ghost" onClick={() => setDetail(item)}>Voir →</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

/* ════════════════════════════════════════════════════════════════
   DÉTAIL CLIENT
   ════════════════════════════════════════════════════════════════ */
function DetailPanel({ item, onClose, onStatus, onDelete }) {
  const isForm = item._type === 'form'
  const col = item._col
  const [selStatus, setSelStatus] = useState(item.status || 'new')

  function handleStatus(e) {
    const v = e.target.value
    setSelStatus(v)
    onStatus(col, item.id, v)
  }

  return (
    <div>
      <div className="db-page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1 className="db-h1">{isForm ? '📝 Formulaire complet' : '⚙️ Configuration builder'}</h1>
          <p className="db-sub">{fmtDate(item.timestamp)} · ID : {item.id}</p>
        </div>
        <button onClick={onClose} className="db-btn-ghost">← Retour</button>
      </div>

      <div className="db-card" style={{ marginBottom: 14 }}>
        <div className="db-card-head">Informations générales</div>
        <div className="db-detail-grid">
          <div>
            <div className="db-kv"><span>Pack</span><span style={{ color: PACK_COLOR[item.pack] || '#6b7280', fontWeight: 700 }}>{PACK_LABEL[item.pack] || item.pack || '—'}</span></div>
            {item.email       && <div className="db-kv"><span>Email</span><a href={'mailto:' + item.email} style={{ color: '#0071E3' }}>{item.email}</a></div>}
            {item.cuisine     && <div className="db-kv"><span>Type de cuisine</span><span style={{ textTransform: 'capitalize' }}>{item.cuisine}</span></div>}
            {item.color       && <div className="db-kv"><span>Couleur</span><span style={{ display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ width: 14, height: 14, borderRadius: 4, background: item.color, display: 'inline-block', border: '1px solid rgba(0,0,0,.1)' }} />{item.color}</span></div>}
            {item.layout      && <div className="db-kv"><span>Mise en page</span><span style={{ textTransform: 'capitalize' }}>{item.layout}</span></div>}
            {item.paymentMethod && <div className="db-kv"><span>Mode paiement</span><span style={{ textTransform: 'capitalize' }}>{item.paymentMethod}</span></div>}
          </div>
          <div>
            <div className="db-kv"><span>Statut actuel</span><StatusBadge status={selStatus} /></div>
            <div className="db-kv" style={{ alignItems: 'flex-start', paddingTop: 10 }}>
              <span>Changer le statut</span>
              <select className="db-select-sm" value={selStatus} onChange={handleStatus}>
                <option value="new">Nouveau</option>
                <option value="viewed">Vu</option>
                <option value="contacted">Contacté</option>
                <option value="completed">Terminé</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {isForm && item.cities && item.cities.length > 0 && (
        <div className="db-card" style={{ marginBottom: 14 }}>
          <div className="db-card-head">Établissement{item.cities.length > 1 ? 's' : ''} ({item.cities.length})</div>
          <div className="db-detail-grid">
            {item.cities.map((c, i) => (
              <div key={i} style={{ background: '#f9fafb', borderRadius: 10, padding: '14px 16px' }}>
                <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.06em', color: '#9ca3af', marginBottom: 10 }}>Établissement {i + 1}</div>
                {c.name     && <div className="db-kv"><span>Nom</span><span style={{ fontWeight: 600 }}>{c.name}</span></div>}
                {c.address  && <div className="db-kv"><span>Adresse</span><span>{c.address}</span></div>}
                {c.tel      && <div className="db-kv"><span>Téléphone</span><span>{c.tel}</span></div>}
                {c.email    && <div className="db-kv"><span>Email</span><a href={'mailto:' + c.email} style={{ color: '#0071E3' }}>{c.email}</a></div>}
                {c.horaires && <div className="db-kv"><span>Horaires</span><span style={{ textAlign: 'right', fontSize: 12 }}>{c.horaires}</span></div>}
              </div>
            ))}
          </div>
        </div>
      )}

      {isForm && item.menuItems && (
        <div className="db-card" style={{ marginBottom: 14 }}>
          <div className="db-card-head">Menu soumis</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
            {Object.entries(item.menuItems).map(([cat, items]) => (
              Array.isArray(items) && items.length > 0 ? (
                <div key={cat}>
                  <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.06em', color: '#9ca3af', marginBottom: 8 }}>{cat}</div>
                  {items.map((it, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0', borderBottom: '1px solid #f1f5f9', fontSize: 13 }}>
                      <span style={{ color: '#374151' }}>{it.name || '—'}</span>
                      <span style={{ color: '#0071E3', fontWeight: 600 }}>{it.price || '—'}</span>
                    </div>
                  ))}
                </div>
              ) : null
            ))}
          </div>
        </div>
      )}

      {/* Stripe Connect */}
      {item.pack === 'premium' && (
        <div className="db-card" style={{ marginBottom: 14 }}>
          <div className="db-card-head">💳 Stripe Connect — Paiements restaurant</div>
          <div style={{ padding: '14px 16px' }}>
            {item.stripeAccountId ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#22c55e', flexShrink: 0, display: 'inline-block' }} />
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14 }}>Compte Stripe connecté</div>
                  <div style={{ fontSize: 12, color: '#6b7280', marginTop: 2 }}>ID : {item.stripeAccountId}</div>
                </div>
              </div>
            ) : (
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4 }}>Aucun compte Stripe connecté</div>
                  <div style={{ fontSize: 12, color: '#6b7280' }}>Le restaurant doit connecter son compte pour recevoir les paiements de ses clients.</div>
                </div>
                <a
                  href={`/api/stripe-connect-init?projectId=${item.id}`}
                  className="db-btn-primary"
                  style={{ whiteSpace: 'nowrap', flexShrink: 0 }}
                >
                  🔗 Connecter Stripe
                </a>
              </div>
            )}
          </div>
        </div>
      )}

      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        {(item.email || item.cities?.[0]?.email) && (
          <a href={'mailto:' + (item.email || item.cities[0].email)} className="db-btn-primary">
            ✉️ Envoyer un email
          </a>
        )}
        <button onClick={() => onDelete(col, item.id)} className="db-btn-danger">🗑 Supprimer</button>
      </div>
    </div>
  )
}

/* ════════════════════════════════════════════════════════════════
   MODIFIER LE SITE
   ════════════════════════════════════════════════════════════════ */
function EditTab({ cfg, update, save, dirty, saving }) {
  const [section, setSection] = useState('urls')

  const sections = [
    { id: 'urls',       label: '🔗 URLs d\'exemple' },
    { id: 'packs',      label: '💰 Tarifs & packs' },
    { id: 'payment',    label: '💳 Liens de paiement' },
    { id: 'assistance', label: '📞 Assistance' },
  ]

  return (
    <div>
      <div className="db-page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1 className="db-h1">Modifier le site</h1>
          <p className="db-sub">Les changements sont appliqués en temps réel sur le site dès sauvegarde.</p>
        </div>
        <button onClick={save} disabled={!dirty || saving} className="db-btn-primary" style={{ opacity: dirty ? 1 : 0.4 }}>
          {saving ? 'Sauvegarde…' : dirty ? 'Sauvegarder ✓' : 'Aucune modification'}
        </button>
      </div>

      <div className="db-edit-nav">
        {sections.map(s => (
          <button key={s.id} onClick={() => setSection(s.id)} className={'db-edit-tab' + (section === s.id ? ' active' : '')}>
            {s.label}
          </button>
        ))}
      </div>

      {section === 'urls' && (
        <div className="db-card">
          <div className="db-card-head">URLs d'exemple — boutons "Voir un site exemple complet"</div>
          <p style={{ fontSize: 13, color: '#6b7280', marginBottom: 20, lineHeight: 1.65 }}>
            Renseignez une URL pour chaque pack. Un bouton "Voir un exemple de site complet" apparaîtra sur la carte tarifaire correspondante et s'ouvrira dans un nouvel onglet.
          </p>
          {['essentiel', 'premium'].map(pack => (
            <div key={pack} className="db-field">
              <label>
                <span style={{ color: PACK_COLOR[pack], fontWeight: 700 }}>{PACK_LABEL[pack]}</span> — URL de démo
              </label>
              <div style={{ display: 'flex', gap: 8 }}>
                <input type="url" value={cfg.exampleUrls?.[pack] || ''} onChange={e => {
                    let v = e.target.value.trim()
                    if (v && !/^https?:\/\//i.test(v)) v = 'https://' + v
                    update('exampleUrls.' + pack, v)
                  }}
                  placeholder={'https://demo-' + pack + '.visioflow.fr'} style={{ flex: 1 }} />
                {cfg.exampleUrls?.[pack] && (
                  <a href={cfg.exampleUrls[pack]} target="_blank" rel="noreferrer" className="db-btn-ghost" style={{ whiteSpace: 'nowrap', display: 'flex', alignItems: 'center' }}>Tester →</a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {section === 'packs' && (
        <div className="db-card">
          <div className="db-card-head">Tarifs et descriptions des packs</div>
          {['essentiel', 'premium'].map(pack => (
            <div key={pack} style={{ marginBottom: 28, paddingBottom: 24, borderBottom: '1px solid #f1f5f9' }}>
              <h3 style={{ fontSize: 13, fontWeight: 700, color: PACK_COLOR[pack], marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: PACK_COLOR[pack], display: 'inline-block' }} />
                {PACK_LABEL[pack]}
              </h3>
              <div className="db-field-row">
                <div className="db-field" style={{ flex: 1 }}>
                  <label>Prix</label>
                  <input value={cfg.packs?.[pack]?.price || ''} onChange={e => update('packs.' + pack + '.price', e.target.value)} placeholder="150€" />
                </div>
                <div className="db-field" style={{ flex: 3 }}>
                  <label>Description courte</label>
                  <input value={cfg.packs?.[pack]?.desc || ''} onChange={e => update('packs.' + pack + '.desc', e.target.value)} placeholder="Site vitrine + gestion autonome" />
                </div>
              </div>
            </div>
          ))}
          <div className="db-info-box">
            💡 Les prix et descriptions mis à jour s'appliquent automatiquement sur les cartes tarifaires lors du chargement de la page.
          </div>
        </div>
      )}

      {section === 'hero' && (
        <div className="db-card">
          <div className="db-card-head">Textes de la page d'accueil (section héros)</div>
          <div className="db-field">
            <label>Titre principal</label>
            <input value={cfg.hero?.title || ''} onChange={e => update('hero.title', e.target.value)} placeholder="Votre restaurant en ligne en 5 jours" />
          </div>
          <div className="db-field">
            <label>Sous-titre</label>
            <textarea rows={3} value={cfg.hero?.subtitle || ''} onChange={e => update('hero.subtitle', e.target.value)} placeholder="Site vitrine ou commandes en ligne — livré clé en main, zéro abonnement." />
          </div>
          <div className="db-field">
            <label>Texte du bouton principal (CTA)</label>
            <input value={cfg.hero?.ctaText || ''} onChange={e => update('hero.ctaText', e.target.value)} placeholder="Créer mon site →" />
          </div>
          <div className="db-info-box">
            💡 Les modifications s'appliquent sur le site après sauvegarde et rechargement de la page d'accueil.
          </div>
        </div>
      )}

      {section === 'payment' && (
        <div className="db-card">
          <div className="db-card-head">Liens de paiement</div>
          <p style={{ fontSize: 13, color: '#6b7280', marginBottom: 20 }}>Les modifications s'appliquent immédiatement sur le site (temps réel). Le prix affiché se met à jour depuis l'onglet "Tarifs & packs".</p>
          {['essentiel', 'premium'].map(pack => (
            <div key={pack} style={{ marginBottom: 28, paddingBottom: 24, borderBottom: '1px solid #f1f5f9' }}>
              <h3 style={{ fontSize: 13, fontWeight: 700, color: PACK_COLOR[pack], marginBottom: 12 }}>
                {PACK_LABEL[pack]} — {cfg.packs?.[pack]?.price || (PACK_PRICE[pack] + ' €')}
              </h3>
              <div className="db-field">
                <label>Lien Stripe</label>
                <input type="url" value={cfg.payment?.[pack]?.stripe || ''} onChange={e => update('payment.' + pack + '.stripe', e.target.value)} placeholder="https://buy.stripe.com/..." />
              </div>
            </div>
          ))}
          <div className="db-info-box">
            💡 Les liens Stripe et PayPal sont utilisés automatiquement lors du paiement selon le choix du client.
          </div>
        </div>
      )}

      {section === 'assistance' && (
        <div className="db-card">
          <div className="db-card-head">Widget d'assistance — pages formulaire</div>
          <p style={{ fontSize: 13, color: '#6b7280', marginBottom: 20, lineHeight: 1.65 }}>
            Un encadré flottant apparaît en bas à droite des pages formulaire avec les numéros renseignés.
            Laissez les deux champs vides pour masquer le widget.
          </p>
          <div className="db-field">
            <label>Titre du widget</label>
            <input
              value={cfg.assistance?.label || ''}
              onChange={e => update('assistance.label', e.target.value)}
              placeholder="Besoin d'aide ?"
            />
          </div>
          <div className="db-field-row">
            <div className="db-field" style={{ flex: 1 }}>
              <label>Numéro 1</label>
              <input
                type="tel"
                value={cfg.assistance?.phone1 || ''}
                onChange={e => update('assistance.phone1', e.target.value)}
                placeholder="06 12 34 56 78"
              />
            </div>
            <div className="db-field" style={{ flex: 1 }}>
              <label>Numéro 2</label>
              <input
                type="tel"
                value={cfg.assistance?.phone2 || ''}
                onChange={e => update('assistance.phone2', e.target.value)}
                placeholder="07 98 76 54 32"
              />
            </div>
          </div>
          {(cfg.assistance?.phone1 || cfg.assistance?.phone2) && (
            <div style={{ marginTop: 16, background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 10, padding: '12px 16px', fontSize: 13, color: '#166534', display: 'flex', gap: 8, alignItems: 'center' }}>
              ✓ Le widget sera visible sur les pages formulaire et paiement.
            </div>
          )}
          <div className="db-info-box" style={{ marginTop: 12 }}>
            💡 Les visiteurs peuvent cliquer sur les numéros pour appeler directement depuis mobile.
          </div>
        </div>
      )}
    </div>
  )
}

/* ════════════════════════════════════════════════════════════════
   PARAMÈTRES
   ════════════════════════════════════════════════════════════════ */
function SettingsTab({ onExport, subsCount, formsCount }) {
  return (
    <div>
      <div className="db-page-header">
        <h1 className="db-h1">Paramètres</h1>
        <p className="db-sub">Configuration et export des données</p>
      </div>

      <div className="db-card" style={{ marginBottom: 16 }}>
        <div className="db-card-head">🔐 Identifiants d'accès</div>
        <p style={{ fontSize: 13, color: '#6b7280', marginBottom: 16, lineHeight: 1.65 }}>
          Pour modifier l'email ou le mot de passe du dashboard, éditez les deux constantes tout en haut du fichier <code>pages/dashboard.js</code> :
        </p>
        <pre className="db-code-block">{`/* ================================================================
   IDENTIFIANTS ADMINISTRATEUR — MODIFIEZ CES DEUX LIGNES
   ================================================================ */
const ADMIN_EMAIL    = 'visioflow77@gmail.com'
const ADMIN_PASSWORD = 'Visioflow2024!'`}</pre>
      </div>

      <div className="db-card" style={{ marginBottom: 16 }}>
        <div className="db-card-head">📥 Export des données</div>
        <p style={{ fontSize: 13, color: '#6b7280', marginBottom: 16 }}>
          Téléchargez toutes vos données clients en JSON ({subsCount} configuration{subsCount !== 1 ? 's' : ''} builder, {formsCount} formulaire{formsCount !== 1 ? 's' : ''} complet{formsCount !== 1 ? 's' : ''}).
        </p>
        <button onClick={onExport} className="db-btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Exporter toutes les données →</button>
      </div>

      <div className="db-card">
        <div className="db-card-head">🔥 Firebase</div>
        <div className="db-kv"><span>Projet</span><span style={{ fontWeight: 600 }}>visioflow-cb6eb</span></div>
        <div className="db-kv" style={{ flexWrap: 'wrap', gap: 4 }}><span>Collections</span><span style={{ fontSize: 12, wordBreak: 'break-word' }}>submissions · form_submissions · site_config</span></div>
        <div className="db-kv"><span>SDK</span><span>v10.12.0 (CDN compat)</span></div>
        <div className="db-kv"><span style={{ flexShrink: 0 }}>Console</span><a href="https://console.firebase.google.com/project/visioflow-cb6eb" target="_blank" rel="noreferrer" style={{ color: '#0071E3', fontSize: 12, wordBreak: 'break-word' }}>Ouvrir Firebase →</a></div>
        <div className="db-info-box" style={{ marginTop: 14 }}>
          🔒 Le dashboard n'est jamais indexé par les moteurs de recherche (<code>noindex, nofollow</code>).
        </div>
      </div>
    </div>
  )
}

/* ════════════════════════════════════════════════════════════════
   PROMPT IA
   ════════════════════════════════════════════════════════════════ */
function buildAIPrompt(group, cfg) {
  const { builder, form } = group
  const pack = builder?.pack || form?.pack || 'essentiel'
  const isPremium = pack === 'premium'
  const city = form?.cities?.[0] || {}
  const restaurantName = city.name || builder?.restaurantName || 'Le Restaurant'
  const cuisine = form?.cuisine || builder?.cuisine || ''
  const color = builder?.color || '#0071E3'
  const layout = builder?.layout || 'liste'
  const logoUrl = form?.logoUrl || ''
  const menuCardPhotoUrl = form?.menuCardPhotoUrl || ''

  // Livraison (Premium + Essentiel pour les plateformes)
  const deliveryMode = city.deliveryMode || 'internal'
  const ubereatsUrl  = city.ubereatsUrl  || form?.ubereatsUrl  || ''
  const deliverooUrl = city.deliverooUrl || form?.deliverooUrl || ''
  const justEatUrl   = city.justEatUrl   || form?.justEatUrl   || ''
  const otherUrl     = city.otherDeliveryUrl || form?.otherDeliveryUrl || ''
  const deliveryEta  = city.deliveryEta  || '30-45 min'
  const hasPlateforms = ubereatsUrl || deliverooUrl || justEatUrl || otherUrl

  // Réseaux sociaux & contact
  const instagram = form?.instagram || builder?.instagram || ''
  const facebook  = form?.facebook  || builder?.facebook  || ''
  const tiktok    = form?.tiktok    || builder?.tiktok    || ''
  const website   = form?.website   || ''
  const phone     = form?.phone     || city?.tel          || ''
  const address   = form?.address   || city?.address      || ''
  const email     = form?.email     || city?.email        || ''
  const horaires  = form?.horaires  || city?.horaires     || ''
  const slogan    = form?.slogan    || ''
  const remarks   = form?.remarks   || ''

  // Photos galerie restaurant
  const restaurantPhotos = form?.restaurantPhotos || []

  // Photos menu avec contexte
  const photosMenu = []
  if (form?.menuItems) {
    Object.entries(form.menuItems).forEach(([cat, items]) => {
      if (Array.isArray(items)) {
        items.forEach(it => {
          if (it.photoUrl && it.name) {
            photosMenu.push({ name: it.name, cat, url: it.photoUrl })
          }
        })
      }
    })
  }

  const lines = []
  let s = 1 // numéro de section

  // ── EN-TÊTE ──────────────────────────────────────────────────
  lines.push(`Tu es un développeur web expert. Crée le site web COMPLET et FONCTIONNEL à 100% pour ce restaurant en un seul fichier HTML (HTML + CSS + JS tout inline). Utilise EXACTEMENT les vraies informations et photos fournies ci-dessous.`)
  lines.push('')
  lines.push(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`)
  lines.push(`BRIEF CLIENT — ${restaurantName.toUpperCase()}`)
  lines.push(`Pack : ${PACK_LABEL[pack] || pack} (${PACK_PRICE[pack] || '?'}€) | ${new Date().toLocaleDateString('fr-FR')}`)
  lines.push(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`)
  lines.push('')

  // ── SECTION 1 : INFOS ────────────────────────────────────────
  lines.push(`## ${s++}. INFORMATIONS DU RESTAURANT`)
  lines.push(`- Nom : **${restaurantName}**`)
  if (cuisine)   lines.push(`- Type de cuisine : ${cuisine}`)
  if (slogan)    lines.push(`- Slogan / accroche : "${slogan}"`)
  if (address)   lines.push(`- Adresse : ${address}`)
  if (phone)     lines.push(`- Téléphone : ${phone}`)
  if (email)     lines.push(`- Email : ${email}`)
  if (horaires)  lines.push(`- Horaires : ${horaires}`)
  if (website)   lines.push(`- Site existant : ${website}`)
  if (instagram) lines.push(`- Instagram : ${instagram}`)
  if (facebook)  lines.push(`- Facebook : ${facebook}`)
  if (tiktok)    lines.push(`- TikTok : ${tiktok}`)
  if (remarks)   lines.push(`\n### Remarques du client\n${remarks}`)
  lines.push('')

  // ── SECTION 2 : DESIGN & PHOTOS ──────────────────────────────
  lines.push(`## ${s++}. IDENTITÉ VISUELLE & PHOTOS`)
  lines.push(`- Couleur principale (brand) : **${color}** — utiliser partout (boutons, prix, accents, hover)`)
  lines.push(`- Police : Playfair Display (titres, logo) + Inter (corps de texte)`)
  lines.push(`- Ambiance : moderne, premium, épurée, digne d'un vrai restaurant gastronomique`)
  lines.push(`- Layout menu : ${layout === 'grille' ? 'grille de cartes avec photos' : 'liste élégante avec séparateurs'}`)
  lines.push('')

  if (logoUrl) {
    lines.push(`### LOGO DU RESTAURANT`)
    lines.push(`URL : ${logoUrl}`)
    lines.push(`→ Intègre ce logo en tant que <img> dans la NAVIGATION (height: 40px) et dans le FOOTER`)
    lines.push(`→ Ne crée PAS de logo texte, utilise cette image`)
  } else {
    lines.push(`### LOGO`)
    lines.push(`→ Pas de logo fourni. Crée un logo texte stylé "**${restaurantName}**" en Playfair Display dans la nav et footer`)
  }
  lines.push('')

  if (restaurantPhotos.length > 0) {
    lines.push(`### PHOTOS DU RESTAURANT (galerie)`)
    lines.push(`Utilise ces photos dans la galerie, la section hero et la section "À propos". Chaque URL est une vraie photo du restaurant.`)
    restaurantPhotos.forEach((url, i) => {
      lines.push(`- Photo ${i+1} : ${url}`)
    })
    lines.push(`→ Photo 1 : utiliser en arrière-plan du hero (avec overlay sombre)`)
    if (restaurantPhotos.length > 1) lines.push(`→ Photos suivantes : galerie / section ambiance`)
    lines.push('')
  }

  if (photosMenu.length > 0) {
    lines.push(`### PHOTOS DES PLATS`)
    lines.push(`IMPORTANT : chaque URL ci-dessous correspond EXACTEMENT au plat mentionné. Utilise-la uniquement pour ce plat dans sa carte menu.`)
    lines.push('')
    photosMenu.forEach(p => {
      lines.push(`- Plat : **"${p.name}"** (${p.cat})`)
      lines.push(`  → Photo : ${p.url}`)
      lines.push(`  → À utiliser UNIQUEMENT dans la carte du plat "${p.name}", nulle part ailleurs`)
    })
    const platsWithoutPhoto = []
    if (form?.menuItems) {
      Object.entries(form.menuItems).forEach(([cat, items]) => {
        if (Array.isArray(items)) items.forEach(it => {
          if (it.name && !it.photoUrl) platsWithoutPhoto.push(`"${it.name}"`)
        })
      })
    }
    if (platsWithoutPhoto.length > 0) {
      lines.push('')
      lines.push(`- Plats SANS photo (${platsWithoutPhoto.join(', ')}) : utilise un dégradé CSS de la couleur brand comme placeholder`)
    }
  } else {
    lines.push(`### PHOTOS`)
    lines.push(`→ Pas de photos fournies. Utilise des dégradés CSS brand comme placeholders pour les cartes menu`)
  }
  lines.push('')

  // ── SECTION 3 : ÉTABLISSEMENTS ───────────────────────────────
  if (form?.cities?.length > 1) {
    lines.push(`## ${s++}. ÉTABLISSEMENTS (${form.cities.length} adresses)`)
    form.cities.forEach((c, i) => {
      lines.push(`### Établissement ${i + 1}${c.name ? ' — ' + c.name : ''}`)
      if (c.address)  lines.push(`  - Adresse : ${c.address}`)
      if (c.tel)      lines.push(`  - Tél : ${c.tel}`)
      if (c.email)    lines.push(`  - Email : ${c.email}`)
      if (c.horaires) lines.push(`  - Horaires : ${c.horaires}`)
    })
    lines.push('')
  }

  // ── SECTION 4 : MENU ─────────────────────────────────────────
  // Photo de la carte entière (mode "photo de carte")
  if (menuCardPhotoUrl) {
    lines.push(`## ${s++}. PHOTO DE LA CARTE COMPLÈTE`)
    lines.push(`Le client a uploadé une photo de sa carte entière. Lis cette image et extrais TOUS les plats, catégories, prix et descriptions visibles.`)
    lines.push(`URL de la photo : ${menuCardPhotoUrl}`)
    lines.push(`→ Utilise ces informations comme menu complet du site`)
    lines.push('')
  } else if (form?.menuItems && Object.keys(form.menuItems).length > 0) {
    lines.push(`## ${s++}. CARTE / MENU COMPLET`)
    lines.push(`Intègre ces plats exactement tels quels. Pour chaque plat avec une photo (voir section 2), utilise l'URL fournie.`)
    lines.push('')
    Object.entries(form.menuItems).forEach(([cat, items]) => {
      if (Array.isArray(items) && items.length > 0) {
        lines.push(`### ${cat}`)
        items.forEach(it => {
          if (it.name) {
            lines.push(`- **${it.name}**${it.price ? ' — ' + it.price : ''}${it.photoUrl ? ' ✅ photo fournie' : ' (placeholder)'}`)
            if (it.desc) lines.push(`  _${it.desc}_`)
          }
        })
        lines.push('')
      }
    })
  } else if (!menuCardPhotoUrl) {
    lines.push(`## ${s++}. MENU`)
    lines.push(`Aucun menu fourni. Invente des plats cohérents avec le type de cuisine "${cuisine || 'restaurant'}". Indique clairement "(exemple)" sur chaque plat.`)
    lines.push('')
  }

  // ── SECTION 5 : PLATEFORMES DE LIVRAISON (ESSENTIEL) ─────────
  if (!isPremium && hasPlateforms) {
    lines.push(`## ${s++}. PLATEFORMES DE LIVRAISON`)
    lines.push(`Crée une section visuellement soignée "Commander via" placée juste après la carte menu.`)
    lines.push(`Affiche les boutons suivants avec le **vrai logo officiel** et la **couleur de marque** de chaque plateforme :`)
    lines.push('')
    if (ubereatsUrl)  lines.push(`- **Uber Eats** (fond noir #000, logo blanc) → ${ubereatsUrl}`)
    if (deliverooUrl) lines.push(`- **Deliveroo** (fond #00CCBC, logo blanc) → ${deliverooUrl}`)
    if (justEatUrl)   lines.push(`- **Just Eat** (fond #FF8000, logo blanc) → ${justEatUrl}`)
    if (otherUrl)     lines.push(`- **Autre plateforme** → ${otherUrl}`)
    lines.push(`Chaque bouton : padding 14px 28px, border-radius 12px, font-weight 700, ouvre dans un nouvel onglet (target="_blank").`)
    lines.push(`Pas de panier ni de commande directe pour ce pack.`)
    lines.push('')
  }

  // ── SECTION 5 : LIVRAISON & COMMANDES STRIPE CONNECT + FIREBASE (PREMIUM) ──
  if (isPremium) {
    const slug = restaurantName.toLowerCase().replace(/\s+/g,'-').replace(/[^a-z0-9-]/g,'')
    lines.push(`## ${s++}. PACK PREMIUM — Commandes en ligne + Dashboard admin`)
    lines.push('')
    lines.push(`### Architecture globale`)
    lines.push(`Ce site est généré par VisioFlow. Il s'intègre dans l'infrastructure suivante :`)
    lines.push(`- **Firebase partagé** : projet visioflow-cb6eb-9d051 (toutes données isolées sous restaurants/${slug}/)`)
    lines.push(`- **Stripe Connect** : VisioFlow est la plateforme, ce restaurant est un compte connecté (stripeAccountId fourni à la livraison)`)
    lines.push(`- **Emails** : via Resend (API VisioFlow)`)
    lines.push(`- **API routes** : hébergées sur le projet Next.js VisioFlow (visioflow.fr/api/...)`)
    lines.push('')
    lines.push(`### Configuration (objet CFG dans le script)`)
    lines.push(`\`\`\`js`)
    lines.push(`const CFG = {`)
    lines.push(`  restaurantId:   "${slug}",`)
    lines.push(`  restaurantName: "${restaurantName}",`)
    lines.push(`  stripeAccountId: "acct_XXXXXXXX", // compte Stripe Connect du restaurant — fourni à la livraison`)
    lines.push(`  firebase: {`)
    lines.push(`    apiKey:            "AIzaSyD2R3SfaC6ifiA_juCfM_1q7SRaAm-G1gY",`)
    lines.push(`    authDomain:        "visioflow-cb6eb.firebaseapp.com",`)
    lines.push(`    projectId:         "visioflow-cb6eb-9d051",`)
    lines.push(`    storageBucket:     "visioflow-cb6eb.firebasestorage.app",`)
    lines.push(`    messagingSenderId: "208625257783",`)
    lines.push(`    appId:             "1:208625257783:web:903429389d81159833deb2"`)
    lines.push(`  },`)
    lines.push(`  apiBase: "https://visioflow.fr/api"`)
    lines.push(`}`)
    lines.push(`\`\`\``)
    lines.push('')

    lines.push(`### Structure Firebase`)
    lines.push(`\`\`\``)
    lines.push(`restaurants/${slug}/`)
    lines.push(`  config/          → infos, horaires, couleurs`)
    lines.push(`  menu/            → plats (nom, prix, description, photo, catégorie, actif)`)
    lines.push(`  commandes/       → une commande par document :`)
    lines.push(`    {`)
    lines.push(`      plats: [{ nom, quantite, prix }],`)
    lines.push(`      total: number,`)
    lines.push(`      statut: "en_attente" | "confirme" | "livre" | "annule",`)
    lines.push(`      clientNom, clientEmail, clientAdresse: string,`)
    lines.push(`      stripeSessionId: string,`)
    lines.push(`      createdAt: timestamp`)
    lines.push(`    }`)
    lines.push(`\`\`\``)
    lines.push('')

    if (deliveryMode === 'internal' || deliveryMode === 'both') {
      lines.push(`### Flux de commande (Stripe Connect)`)
      lines.push(`**Étape 1 — Panier**`)
      lines.push(`- Bouton panier flottant bas-droite (icône + badge compteur)`)
      lines.push(`- Chaque plat : bouton "+" pour ajouter`)
      lines.push(`- Panier latéral : articles, quantités +/−, sous-total, bouton "Commander →"`)
      lines.push('')
      lines.push(`**Étape 2 — Infos client**`)
      lines.push(`- Nom complet*, Email*, Téléphone*, Adresse de livraison*`)
      lines.push(`- Délai estimé : "${deliveryEta}"`)
      lines.push('')
      lines.push(`**Étape 3 — Paiement via Stripe Connect**`)
      lines.push(`- Appel POST \`${CFG?.apiBase ?? 'https://visioflow.fr/api'}/commandes/checkout\` avec :`)
      lines.push(`  { restaurantId, items, customer, stripeAccountId }`)
      lines.push(`- Le backend VisioFlow crée une Checkout Session Stripe sur le compte connecté du restaurant`)
      lines.push(`- Redirect vers la page Stripe hébergée (stripe.redirectToCheckout)`)
      lines.push(`- L'argent va directement sur le compte Stripe du restaurant`)
      lines.push(`- VisioFlow peut prélever une commission automatique (application_fee_amount)`)
      lines.push('')
      lines.push(`**Étape 4 — Webhook Stripe → Firebase + Emails**`)
      lines.push(`- L'événement checkout.session.completed déclenche POST \`/api/webhooks/stripe\``)
      lines.push(`- Le backend VisioFlow :`)
      lines.push(`  1. Crée la commande dans Firebase (restaurants/${slug}/commandes/)`)
      lines.push(`  2. Envoie un email au restaurateur (via Resend) : plats, total, adresse client`)
      lines.push(`  3. Envoie un email de confirmation au client : récap commande, montant, délai`)
      lines.push(`- Page de confirmation affichée au client`)
      lines.push('')
    }

    if ((deliveryMode === 'platforms' || deliveryMode === 'both') && hasPlateforms) {
      lines.push(`### Plateformes de livraison partenaires`)
      if (ubereatsUrl)  lines.push(`- **Uber Eats** → ${ubereatsUrl}`)
      if (deliverooUrl) lines.push(`- **Deliveroo** → ${deliverooUrl}`)
      if (justEatUrl)   lines.push(`- **Just Eat** → ${justEatUrl}`)
      if (otherUrl)     lines.push(`- **Autre** → ${otherUrl}`)
      lines.push(`Chaque bouton ouvre dans un nouvel onglet (target="_blank").`)
      lines.push('')
    }

    lines.push(`### Page /admin — Dashboard restaurateur`)
    lines.push(`Accessible via bouton "⚙" discret dans le footer. Login Firebase Auth (email + mot de passe).`)
    lines.push(`Le restaurateur ne voit que ses propres données (restaurantId = ${slug}).`)
    lines.push('')
    lines.push(`**Onglet Commandes** :`)
    lines.push(`- Commandes en temps réel via onSnapshot(restaurants/${slug}/commandes)`)
    lines.push(`- Notification sonore à chaque nouvelle commande`)
    lines.push(`- Afficher : plats, quantités, total, adresse client, heure`)
    lines.push(`- Boutons "Confirmer" / "Annuler" → met à jour statut dans Firebase → email au client`)
    lines.push(`- Stats du jour : nb commandes, CA, commandes en attente`)
    lines.push('')
    lines.push(`**Onglet Menu** :`)
    lines.push(`- Ajouter / modifier / supprimer des plats`)
    lines.push(`- Upload photo via Firebase Storage`)
    lines.push(`- Activer / désactiver un plat (rupture de stock)`)
    lines.push(`- Changements instantanément visibles sur le site public (onSnapshot)`)
    lines.push('')
    lines.push(`**Onglet Horaires** :`)
    lines.push(`- Modifier les horaires jour par jour`)
    lines.push(`- Toggle "Fermé aujourd'hui"`)
    lines.push('')
    lines.push(`**Onglet Infos** :`)
    lines.push(`- Modifier adresse, téléphone, email, réseaux sociaux, slogan`)
    lines.push('')
    lines.push(`**Onglet Photos** :`)
    lines.push(`- Ajouter / supprimer des photos de la galerie via Firebase Storage`)
    lines.push('')
  }

  // ── SECTION : STRUCTURE SITE ─────────────────────────────────
  lines.push(`## ${s++}. STRUCTURE DU SITE (sections obligatoires dans l'ordre)`)
  lines.push('')
  lines.push(`**1. Navigation fixe** — logo${logoUrl ? ' (image fournie section 2)' : ' texte'}, liens sections, ${isPremium ? 'bouton "Commander →"' : 'bouton "Réserver →"'}`)
  lines.push(`**2. Hero** — fond sombre avec overlay, nom du restaurant en grand (Playfair Display), tagline, CTA "Voir la carte" + ${isPremium ? '"Commander"' : '"Réserver une table"'}`)
  lines.push(`**3. Menu** — onglets par catégorie, ${layout === 'grille' ? 'grille de cartes avec photos (vraies ou placeholder)' : 'liste élégante'}, ${isPremium ? 'bouton "+" sur chaque plat' : 'prix en couleur brand'}`)
  if (isPremium) {
    lines.push(`**4. Commande / Livraison** — ${deliveryMode !== 'internal' && hasPlateforms ? 'boutons plateformes ' + [ubereatsUrl && 'UberEats', deliverooUrl && 'Deliveroo', justEatUrl && 'Just Eat'].filter(Boolean).join(', ') : ''}${deliveryMode !== 'platforms' ? ' + formulaire commande directe' : ''}`)
    lines.push(`**5. À propos** — histoire du restaurant, stats, ambiance`)
    lines.push(`**6. Infos pratiques** — horaires tableau, adresse cliquable Google Maps, tél cliquable, email cliquable`)
    lines.push(`**7. Réservation** — section épurée avec uniquement le numéro de téléphone du restaurant (${phone || 'numéro fourni'}), grand et cliquable (tel:). Texte : "Pour réserver une table, appelez-nous". Pas de formulaire.`)
    lines.push(`**8. Réseaux sociaux** — section dédiée avec icônes et liens vers ${[instagram && 'Instagram', facebook && 'Facebook', tiktok && 'TikTok'].filter(Boolean).join(', ') || 'les réseaux du restaurant'}. Grandes icônes rondes colorées, effet hover. Si aucun réseau fourni, ne pas afficher la section.`)
    lines.push(`**9. Footer** — logo, liens, réseaux sociaux, copyright, bouton admin discret`)
  } else {
    lines.push(`**4. ${hasPlateforms ? 'Plateformes de livraison' : 'À propos'}** — ${hasPlateforms ? 'boutons Uber Eats / Deliveroo / Just Eat avec vrais logos' : 'histoire du restaurant, stats, ambiance'}`)
    if (hasPlateforms) lines.push(`**5. À propos** — histoire du restaurant, stats, ambiance`)
    const n = hasPlateforms ? 6 : 5
    lines.push(`**${n}. Infos pratiques** — horaires tableau, adresse cliquable, tél, email`)
    lines.push(`**${n+1}. Réservation** — section épurée avec uniquement le numéro de téléphone du restaurant (${phone || 'numéro fourni'}), grand et cliquable (tel:). Texte : "Pour réserver une table, appelez-nous". Pas de formulaire.`)
    lines.push(`**${n+2}. Réseaux sociaux** — section dédiée avec icônes et liens vers ${[instagram && 'Instagram', facebook && 'Facebook', tiktok && 'TikTok'].filter(Boolean).join(', ') || 'les réseaux du restaurant'}. Grandes icônes rondes colorées, effet hover. Si aucun réseau fourni, ne pas afficher la section.`)
    lines.push(`**${n+3}. Footer** — logo, liens, réseaux sociaux, copyright, bouton admin discret "⚙"`)
    lines.push('')
    lines.push(`### Dashboard admin — Gestion en autonomie (Essentiel)`)
    lines.push(`Le restaurateur doit pouvoir gérer son site entièrement seul, sans contacter VisioFlow.`)
    lines.push(`- Bouton "⚙ Espace admin" discret dans le footer → login avec mot de passe (CFG.adminPassword)`)
    lines.push(`- Interface claire avec onglets :`)
    lines.push(`  **Onglet Menu** :`)
    lines.push(`  - Ajouter / modifier / supprimer des plats (nom, description, prix, photo, catégorie)`)
    lines.push(`  - Activer / désactiver un plat (rupture de stock)`)
    lines.push(`  - Réordonner les catégories`)
    lines.push(`  **Onglet Horaires** :`)
    lines.push(`  - Modifier les horaires jour par jour`)
    lines.push(`  - Fermeture exceptionnelle (toggle "Fermé aujourd'hui")`)
    lines.push(`  **Onglet Infos** :`)
    lines.push(`  - Modifier adresse, téléphone, email, réseaux sociaux`)
    lines.push(`  - Modifier le slogan / texte de présentation`)
    lines.push(`  **Onglet Photos** :`)
    lines.push(`  - Ajouter / supprimer des photos de la galerie`)
    lines.push(`- Chaque modification écrit dans Firebase (collection restaurants/${restaurantName.toLowerCase().replace(/\s+/g,'-').replace(/[^a-z0-9-]/g,'')}/config)`)
    lines.push(`- Le site public lit Firebase en temps réel (onSnapshot) → les changements sont instantanés`)
    lines.push(`- Pas de rechargement de page nécessaire`)
    lines.push(`- Architecture Firebase partagée : même projet VisioFlow, données isolées par restaurant`)
  }
  lines.push('')

  // ── SECTION : TECHNIQUE ──────────────────────────────────────
  lines.push(`## ${s++}. EXIGENCES TECHNIQUES`)
  lines.push(`- 1 seul fichier HTML, tout inline (CSS dans <style>, JS dans <script>)`)
  lines.push(`- CSS variables : --brand: ${color}; --brand-dark; --text; --bg; --bg-alt`)
  lines.push(`- Responsive : mobile 320px+, tablette 768px+, desktop 1200px+`)
  lines.push(`- Navigation fixe avec backdrop-filter: blur`)
  lines.push(`- Smooth scroll natif`)
  lines.push(`- Animations CSS subtiles au scroll (opacity + translateY)`)
  lines.push(`- SEO : <title>${restaurantName}${cuisine ? ' — ' + cuisine : ''} | Restaurant</title>, meta description, Schema.org Restaurant JSON-LD`)
  lines.push(`- Pas de framework JS externe (vanilla uniquement)`)
  lines.push(`- Google Fonts CDN : Playfair Display + Inter`)
  lines.push('')

  // ── INSTRUCTION FINALE ────────────────────────────────────────
  lines.push(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`)
  lines.push(`INSTRUCTION FINALE`)
  lines.push(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`)
  lines.push(`Livre le code en UN SEUL BLOC HTML complet, prêt à enregistrer en index.html et ouvrir dans un navigateur.`)
  lines.push(`Utilise les VRAIES informations fournies. Les photos doivent être placées exactement aux bons endroits.`)
  lines.push(`Le site doit être visuellement impressionnant et refléter l'identité de ${restaurantName}.`)
  if (isPremium) {
    lines.push(`Pack Premium : le système de commande (panier → livraison → paiement Stripe → Firebase) ET le panel admin doivent être 100% fonctionnels.`)
    lines.push(`Stripe : utilise stripe.confirmCardPayment() avec un PaymentIntent. Si pas de backend, utilise stripe.redirectToCheckout() en mode client-only avec un price_id Stripe.`)
  }
  if (!isPremium && hasPlateforms) lines.push(`Pack Essentiel : les boutons de livraison (Uber Eats / Deliveroo / Just Eat) doivent être bien visibles et fonctionnels. Aucun système de panier ni de commande directe.`)
  lines.push(`COMMENCE DIRECTEMENT PAR <!DOCTYPE html> — aucun texte avant ou après le code.`)

  return lines.join('\n')
}

function AiTab({ subs, forms, cfg }) {
  const [selected, setSelected] = useState(null)
  const [copied, setCopied] = useState(false)

  const groups = {}
  subs.forEach(s => {
    const key = s.email || s.cities?.[0]?.email || `__b_${s.id}`
    if (!groups[key]) groups[key] = { key, builder: null, form: null, ts: 0 }
    groups[key].builder = s
    groups[key].ts = Math.max(groups[key].ts, s.timestamp?.seconds || 0)
  })
  forms.forEach(f => {
    const key = f.email || f.cities?.[0]?.email || `__f_${f.id}`
    if (!groups[key]) groups[key] = { key, builder: null, form: null, ts: 0 }
    groups[key].form = f
    groups[key].ts = Math.max(groups[key].ts, f.timestamp?.seconds || 0)
  })
  const list = Object.values(groups).sort((a, b) => b.ts - a.ts)

  const prompt = selected ? buildAIPrompt(selected, cfg) : ''

  function copyPrompt() {
    navigator.clipboard.writeText(prompt).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    })
  }

  return (
    <div>
      <div className="db-page-header">
        <h1 className="db-h1">Prompt IA</h1>
        <p className="db-sub">Sélectionnez un client pour générer le brief complet à envoyer à Claude.</p>
      </div>

      <div className="db-ai-layout" style={{ gridTemplateColumns: selected ? '340px 1fr' : '1fr' }}>
        <div className="db-card">
          <div className="db-card-head">Clients regroupés ({list.length})</div>
          {list.length === 0 ? (
            <div className="db-empty">Aucune donnée client pour le moment.</div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {list.map((g, i) => {
                const name = g.form?.cities?.[0]?.name || g.builder?.restaurantName || (g.key.startsWith('__') ? '— sans nom —' : g.key)
                const pack = g.builder?.pack || g.form?.pack
                const isSelected = selected?.key === g.key
                return (
                  <div key={i} onClick={() => { setSelected(g); setCopied(false) }}
                    style={{
                      padding: '12px 14px', borderRadius: 10, cursor: 'pointer',
                      border: isSelected ? '2px solid #0071E3' : '1.5px solid #e5e7eb',
                      background: isSelected ? '#eff6ff' : '#fff', transition: 'all .15s'
                    }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
                      <div style={{ minWidth: 0 }}>
                        <div style={{ fontWeight: 600, fontSize: 13, color: '#111827', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{name}</div>
                        <div style={{ fontSize: 11, color: '#9ca3af', marginTop: 2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{g.key.startsWith('__') ? '—' : g.key}</div>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 3, flexShrink: 0 }}>
                        {pack && <span style={{ fontSize: 10, fontWeight: 700, padding: '2px 7px', borderRadius: 980, background: (PACK_COLOR[pack] || '#6b7280') + '22', color: PACK_COLOR[pack] || '#6b7280', textAlign: 'center' }}>{PACK_LABEL[pack] || pack}</span>}
                        <div style={{ display: 'flex', gap: 3 }}>
                          {g.builder && <span style={{ fontSize: 9, padding: '1px 6px', borderRadius: 980, background: '#dcfce7', color: '#16a34a' }}>Builder</span>}
                          {g.form    && <span style={{ fontSize: 9, padding: '1px 6px', borderRadius: 980, background: '#dbeafe', color: '#1d4ed8' }}>Form</span>}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {selected && (
          <div className="db-card">
            <div className="db-card-head" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>Brief complet pour Claude</span>
              <div style={{ display: 'flex', gap: 8 }}>
                <span style={{ fontSize: 11, color: '#6b7280', alignSelf: 'center' }}>{prompt.length} caractères</span>
                <button onClick={copyPrompt} className="db-btn-primary" style={{ fontSize: 12, padding: '6px 16px' }}>
                  {copied ? '✓ Copié !' : 'Copier le prompt'}
                </button>
              </div>
            </div>
            <div style={{ marginTop: 12, padding: '12px 16px', background: 'linear-gradient(135deg,#0071E322,#5b5ef422)', border: '1px solid #bfdbfe', borderRadius: 10, fontSize: 12.5, color: '#1e40af', lineHeight: 1.7 }}>
              <strong>Comment utiliser :</strong> Copie le prompt ci-dessous → ouvre{' '}
              <a href="https://claude.ai" target="_blank" rel="noreferrer" style={{ color: '#0071E3', fontWeight: 700 }}>claude.ai</a>
              {' '}→ colle le prompt → Claude crée le site HTML complet en une seule réponse, prêt à livrér.
            </div>
            <textarea readOnly value={prompt}
              style={{
                width: '100%', minHeight: 520, fontFamily: 'monospace', fontSize: 11.5,
                border: '1.5px solid #e5e7eb', borderRadius: 8, padding: 14,
                resize: 'vertical', color: '#111827', background: '#f9fafb', lineHeight: 1.7,
                boxSizing: 'border-box', marginTop: 12
              }}
            />
            <div style={{ marginTop: 10, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <button onClick={copyPrompt} className="db-btn-primary" style={{ flex: 1, justifyContent: 'center' }}>
                {copied ? '✓ Prompt copié !' : 'Copier le prompt complet'}
              </button>
              <a href="https://claude.ai" target="_blank" rel="noreferrer" className="db-btn-ghost" style={{ flex: 1, justifyContent: 'center', textAlign: 'center' }}>
                Ouvrir Claude AI →
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

/* ════════════════════════════════════════════════════════════════
   CSS
   ════════════════════════════════════════════════════════════════ */
const DASHBOARD_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800&family=Inter:wght@400;500;600;700&display=swap');

.db * { box-sizing: border-box; margin: 0; padding: 0; }
.db { display: flex; min-height: 100vh; background: #f8fafc; font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; font-size: 14px; color: #111827; -webkit-font-smoothing: antialiased; }

/* ── SIDEBAR ── */
.db-side { width: 240px; min-height: 100vh; background: #0f172a; display: flex; flex-direction: column; position: fixed; top: 0; left: 0; bottom: 0; z-index: 200; overflow-y: auto; transition: transform .25s cubic-bezier(.4,0,.2,1); }
.db-logo { padding: 20px 18px 16px; border-bottom: 1px solid rgba(255,255,255,.07); display: flex; align-items: baseline; gap: 6px; flex-shrink: 0; }
.db-logo-text { font-size: 20px; font-weight: 800; color: #fff; font-family: 'Outfit', sans-serif; }
.db-logo-blue { color: #60a5fa; }
.db-logo-tag { font-size: 10px; color: rgba(255,255,255,.3); font-weight: 600; background: rgba(255,255,255,.08); padding: 2px 7px; border-radius: 6px; }
.db-nav { flex: 1; padding: 10px 10px; }
.db-nav-btn { display: flex; align-items: center; gap: 10px; width: 100%; padding: 9px 12px; border-radius: 8px; border: none; background: none; color: rgba(255,255,255,.5); font-size: 13.5px; font-weight: 500; cursor: pointer; transition: all .15s; text-align: left; font-family: inherit; text-decoration: none; white-space: nowrap; }
.db-nav-btn:hover { background: rgba(255,255,255,.07); color: rgba(255,255,255,.85); }
.db-nav-btn.active { background: rgba(0,113,227,.2); color: #60a5fa; border-left: 3px solid #3b82f6; padding-left: 9px; }
.db-nav-icon { font-size: 16px; flex-shrink: 0; }
.db-nav-badge { margin-left: auto; background: #ef4444; color: #fff; font-size: 10px; font-weight: 800; padding: 1px 6px; border-radius: 980px; min-width: 18px; text-align: center; }
.db-side-foot { padding: 8px 10px 20px; border-top: 1px solid rgba(255,255,255,.07); flex-shrink: 0; }

/* ── OVERLAY & TOPBAR (mobile) ── */
.db-overlay { display: none; position: fixed; inset: 0; background: rgba(0,0,0,.45); z-index: 150; }
.db-overlay.open { display: block; }
.db-topbar { display: none; }
.db-topbar-logo { font-size: 18px; font-weight: 800; color: #fff; font-family: 'Outfit', sans-serif; }
.db-hamburger { display: flex; flex-direction: column; justify-content: center; gap: 5px; width: 36px; height: 36px; background: none; border: none; cursor: pointer; padding: 6px; flex-shrink: 0; }
.db-hamburger span { display: block; height: 2px; width: 100%; background: #fff; border-radius: 2px; transition: all .2s; }

/* ── MAIN ── */
.db-main { margin-left: 240px; flex: 1; padding: 36px 40px; min-height: 100vh; }
.db-page-header { margin-bottom: 28px; }
.db-h1 { font-size: 26px; font-weight: 800; color: #111827; font-family: 'Outfit', sans-serif; line-height: 1.2; }
.db-sub { font-size: 13px; color: #6b7280; margin-top: 5px; }

/* ── STATS ── */
.db-stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 14px; }
.db-stat { background: #fff; border-radius: 14px; padding: 20px 20px 16px; border: .5px solid rgba(0,0,30,.08); box-shadow: 0 1px 3px rgba(0,0,30,.04); }
.db-stat-val { font-size: 28px; font-weight: 800; color: #111827; font-family: 'Outfit', sans-serif; line-height: 1; }
.db-stat-lbl { font-size: 12px; color: #6b7280; margin-top: 6px; line-height: 1.4; }
.db-stat-blue .db-stat-val { color: #0071E3; }
.db-stat-blue { border-color: rgba(0,113,227,.2); }
.db-stat-green .db-stat-val { color: #10b981; }
.db-stat-green { border-color: rgba(16,185,129,.2); }

/* ── CARDS ── */
.db-card { background: #fff; border-radius: 16px; padding: 26px; border: .5px solid rgba(0,0,30,.08); box-shadow: 0 1px 4px rgba(0,0,30,.04); margin-bottom: 16px; }
.db-card-head { font-size: 15px; font-weight: 700; color: #111827; margin-bottom: 18px; padding-bottom: 14px; border-bottom: 1px solid #f1f5f9; }

/* ── TABLE ── */
.db-table-wrap { overflow-x: auto; -webkit-overflow-scrolling: touch; }
.db-table { width: 100%; border-collapse: collapse; font-size: 13px; min-width: 520px; }
.db-table th { text-align: left; font-size: 10.5px; font-weight: 700; text-transform: uppercase; letter-spacing: .07em; color: #9ca3af; padding: 0 14px 10px 0; white-space: nowrap; }
.db-table td { padding: 12px 14px 12px 0; border-bottom: 1px solid #f9fafb; vertical-align: middle; white-space: nowrap; }
.db-table tr:last-child td { border-bottom: none; }
.db-table tbody tr:hover td { background: rgba(248,250,252,.7); }

/* ── BADGES ── */
.db-type-badge { padding: 2px 8px; border-radius: 6px; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: .04em; white-space: nowrap; }
.db-type-config { background: #eff6ff; color: #0071E3; }
.db-type-form   { background: #f0fdf4; color: #16a34a; }

/* ── FILTERS ── */
.db-filters { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 16px; }
.db-filter-btn { padding: 6px 14px; border-radius: 980px; border: .5px solid rgba(0,0,30,.13); background: #fff; color: #6b7280; font-size: 12.5px; font-weight: 500; cursor: pointer; transition: all .15s; font-family: inherit; }
.db-filter-btn:hover { border-color: #0071E3; color: #0071E3; }
.db-filter-btn.active { background: #0071E3; border-color: #0071E3; color: #fff; }

/* ── DETAIL ── */
.db-detail-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.db-kv { display: flex; justify-content: space-between; align-items: center; padding: 7px 0; border-bottom: 1px solid #f1f5f9; font-size: 13px; gap: 12px; }
.db-kv:last-child { border-bottom: none; }
.db-kv > span:first-child { color: #6b7280; flex-shrink: 0; }
.db-kv > span:last-child, .db-kv a { text-align: right; word-break: break-all; }

/* ── EDIT NAV ── */
.db-edit-nav { display: flex; gap: 4px; margin-bottom: 20px; background: #f1f5f9; padding: 4px; border-radius: 12px; overflow-x: auto; -webkit-overflow-scrolling: touch; }
.db-edit-tab { flex: 1; padding: 8px 14px; border-radius: 9px; border: none; background: none; color: #6b7280; font-size: 13px; font-weight: 500; cursor: pointer; transition: all .15s; font-family: inherit; white-space: nowrap; }
.db-edit-tab.active { background: #fff; color: #111827; font-weight: 600; box-shadow: 0 1px 4px rgba(0,0,30,.1); }

/* ── FIELDS ── */
.db-field { margin-bottom: 14px; }
.db-field label { display: block; font-size: 12px; font-weight: 600; color: #374151; margin-bottom: 5px; }
.db-field input, .db-field textarea { width: 100%; padding: 9px 12px; border-radius: 9px; border: .5px solid rgba(0,0,30,.18); background: #fff; color: #111827; font-size: 13.5px; font-family: inherit; outline: none; transition: border-color .15s; resize: vertical; }
.db-field input:focus, .db-field textarea:focus { border-color: #0071E3; box-shadow: 0 0 0 3px rgba(0,113,227,.08); }
.db-field-row { display: flex; gap: 12px; }
.db-select-sm { padding: 6px 10px; border-radius: 8px; border: .5px solid rgba(0,0,30,.18); background: #fff; color: #111827; font-size: 13px; font-family: inherit; cursor: pointer; outline: none; }

/* ── BUTTONS ── */
.db-btn-primary { display: inline-flex; align-items: center; gap: 6px; padding: 9px 18px; border-radius: 980px; border: none; background: #0071E3; color: #fff; font-size: 13.5px; font-weight: 600; cursor: pointer; transition: background .15s; font-family: inherit; text-decoration: none; white-space: nowrap; }
.db-btn-primary:hover { background: #005bb5; }
.db-btn-primary:disabled { opacity: .55; cursor: not-allowed; }
.db-btn-primary.db-btn-block { width: 100%; justify-content: center; padding: 12px; font-size: 15px; margin-top: 6px; }
.db-btn-ghost { display: inline-flex; align-items: center; padding: 7px 14px; border-radius: 8px; border: .5px solid rgba(0,0,30,.13); background: none; color: #6b7280; font-size: 12.5px; cursor: pointer; transition: all .15s; font-family: inherit; text-decoration: none; white-space: nowrap; }
.db-btn-ghost:hover { background: #f8fafc; color: #111827; border-color: rgba(0,0,30,.22); }
.db-btn-danger { display: inline-flex; align-items: center; gap: 6px; padding: 9px 16px; border-radius: 980px; border: none; background: #fee2e2; color: #dc2626; font-size: 13px; font-weight: 600; cursor: pointer; font-family: inherit; transition: all .15s; }
.db-btn-danger:hover { background: #fecaca; }

/* ── INFO BOX ── */
.db-info-box { padding: 12px 14px; background: #eff6ff; border: .5px solid #bfdbfe; border-radius: 10px; font-size: 12.5px; color: #1e40af; line-height: 1.65; }

/* ── CODE BLOCK ── */
.db-code-block { background: #0f172a; color: #94a3b8; padding: 18px 20px; border-radius: 12px; font-size: 12px; line-height: 1.9; overflow-x: auto; font-family: 'Courier New', monospace; white-space: pre; }

/* ── AI LAYOUT ── */
.db-ai-layout { display: grid; gap: 20px; align-items: start; }

/* ── LIVE DOT ── */
.db-live-dot { display: inline-block; width: 7px; height: 7px; border-radius: 50%; background: #fbbf24; flex-shrink: 0; }
.db-live-dot.on { background: #34d399; animation: dbPulse 2s infinite; }
@keyframes dbPulse { 0%,100% { opacity: 1; } 50% { opacity: .45; } }

/* ── TOAST ── */
.db-toast { position: fixed; bottom: 28px; right: 28px; background: #0f172a; color: #fff; padding: 12px 20px; border-radius: 12px; font-size: 13.5px; font-weight: 500; box-shadow: 0 8px 32px rgba(0,0,0,.2); z-index: 9999; animation: dbSlideUp .2s ease; }

/* ── EMPTY ── */
.db-empty { text-align: center; padding: 48px 24px; color: #9ca3af; font-size: 13.5px; line-height: 1.8; }

code { background: #f1f5f9; padding: 1px 6px; border-radius: 4px; font-family: 'Courier New', monospace; font-size: 12px; color: #374151; }

@keyframes dbSlideUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

/* ── TABLETTE (≤960px) ── */
@media (max-width: 960px) {
  .db-side  { width: 220px; }
  .db-main  { margin-left: 220px; padding: 28px 22px; }
  .db-stats { grid-template-columns: repeat(3, 1fr); }
  .db-detail-grid { grid-template-columns: 1fr; }
  .db-edit-nav { gap: 2px; }
  .db-edit-tab { font-size: 12px; padding: 7px 10px; }
}

/* ── MOBILE (≤768px) ── */
@media (max-width: 768px) {
  /* Sidebar devient un panel slide-in */
  .db-side { width: 260px; transform: translateX(-100%); top: 0; }
  .db-side.open { transform: translateX(0); box-shadow: 8px 0 32px rgba(0,0,0,.3); }

  /* Topbar fixe en haut */
  .db-topbar {
    display: flex;
    align-items: center;
    position: fixed;
    top: 0; left: 0; right: 0;
    height: 54px;
    background: #0f172a;
    z-index: 100;
    padding: 0 14px;
    gap: 10px;
    border-bottom: 1px solid rgba(255,255,255,.06);
  }

  /* Main s'ajuste sous la topbar */
  .db-main { margin-left: 0; padding: 72px 14px 32px; }

  /* Stats en 2 colonnes */
  .db-stats { grid-template-columns: repeat(2, 1fr); gap: 10px; }
  .db-stat { padding: 14px 14px 12px; }
  .db-stat-val { font-size: 22px; }

  /* Cards */
  .db-card { padding: 16px 14px; border-radius: 12px; }
  .db-card-head { font-size: 14px; margin-bottom: 14px; padding-bottom: 10px; }

  /* H1 */
  .db-h1 { font-size: 20px; }

  /* Page header avec bouton : empile verticalement */
  .db-page-header { margin-bottom: 18px; }

  /* Detail grid 1 col */
  .db-detail-grid { grid-template-columns: 1fr; }

  /* Edit tabs plus petits */
  .db-edit-tab { font-size: 11.5px; padding: 7px 8px; }

  /* Field row passe en colonne */
  .db-field-row { flex-direction: column; gap: 0; }

  /* AI layout : 1 colonne */
  .db-ai-layout { grid-template-columns: 1fr !important; }

  /* Toast en bas, pleine largeur sur mobile */
  .db-toast { bottom: 16px; right: 14px; left: 14px; text-align: center; font-size: 13px; }
}

/* ── TRÈS PETIT (≤400px) ── */
@media (max-width: 400px) {
  .db-stats { grid-template-columns: 1fr 1fr; gap: 8px; }
  .db-stat-val { font-size: 20px; }
  .db-stat-lbl { font-size: 11px; }
  .db-filter-btn { font-size: 11.5px; padding: 5px 10px; }
  .db-main { padding: 66px 10px 24px; }
}

/* ── CORRECTIONS MOBILE COMPLÈTES ── */
@media (max-width: 768px) {
  /* Page headers : empiler titre + bouton */
  .db-page-header { display: flex; flex-direction: column; gap: 12px; align-items: flex-start; }

  /* Boutons dans les headers */
  .db-btn-primary, .db-btn-ghost { white-space: normal; }

  /* Champs URL avec bouton : empiler */
  .db-field-row { flex-direction: column; gap: 8px; }
  .db-field-row .db-field { flex: none !important; width: 100%; }
  .db-field-row .db-btn-primary,
  .db-field-row .db-btn-ghost { width: 100%; justify-content: center; }

  /* Filters : scroll horizontal */
  .db-filters { flex-wrap: nowrap; overflow-x: auto; padding-bottom: 4px; scrollbar-width: none; }
  .db-filters::-webkit-scrollbar { display: none; }
  .db-filter-btn { flex-shrink: 0; }

  /* Edit tabs : scroll horizontal */
  .db-edit-nav { flex-wrap: nowrap; overflow-x: auto; }
  .db-edit-tab { flex-shrink: 0; flex: none; }

  /* AI layout : toujours 1 col */
  .db-ai-layout { grid-template-columns: 1fr !important; }

  /* Empêcher zoom iOS sur les inputs */
  .db-field input, .db-field textarea, .db-field select { font-size: 16px; }

  /* Carte avec flex en-tête : wrap */
  .db-card-head { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; }

  /* Boutons action côte à côte → pleine largeur */
  .db-btn-primary.db-btn-block { width: 100%; }

  /* Toast : centré */
  .db-toast { left: 12px; right: 12px; text-align: center; }
}

@media (max-width: 480px) {
  .db-stats { grid-template-columns: 1fr; }
  .db-h1 { font-size: 18px; }
  .db-card { padding: 14px 12px; }
  .db-table { min-width: 400px; }
  .db-table th, .db-table td { font-size: 11px; padding: 9px 8px 9px 0; }
}

/* ── ANTI-OVERFLOW GLOBAL MOBILE ── */
@media (max-width: 768px) {
  /* Racine : jamais de scroll horizontal sur la page */
  html, body { overflow-x: hidden; max-width: 100vw; }

  /* Flex root : min-width:0 force le main à ne pas dépasser le viewport */
  .db { overflow-x: hidden; }
  .db-main { min-width: 0; max-width: 100%; overflow-x: hidden; }

  /* Bloc de code (pre) : scrollable EN INTERNE, ne fait plus déborder la page */
  .db-code-block {
    max-width: 100%;
    overflow-x: auto;
    font-size: 11px;
    padding: 12px 14px;
    -webkit-overflow-scrolling: touch;
    /* white-space: pre conservé pour l'affichage du code */
  }

  /* Code inline : wrap plutôt que déborder */
  code { word-break: break-all; overflow-wrap: anywhere; }

  /* KV rows : valeur droite se wrap si trop longue */
  .db-kv { align-items: flex-start; }
  .db-kv > span:last-child, .db-kv a {
    word-break: break-word;
    overflow-wrap: anywhere;
    min-width: 0;
  }

  /* Cartes : pas de min-width implicite */
  .db-card { overflow: hidden; }

  /* Page Paramètres : bouton export pleine largeur */
  .db-btn-primary { max-width: 100%; box-sizing: border-box; }

  /* Infos Firebase : URL lien wrap */
  .db-info-box { word-break: break-word; overflow-wrap: anywhere; }

  /* Textarea du prompt IA : contenue dans la carte */
  textarea { max-width: 100%; box-sizing: border-box; }

  /* Detail grid : toujours 1 colonne */
  .db-detail-grid { grid-template-columns: 1fr !important; }

  /* Header overview avec badge live : passe en colonne si petit */
  .db-page-header > div { min-width: 0; }
}

@media (max-width: 390px) {
  .db-main { padding: 62px 10px 24px; }
  .db-card { padding: 12px 10px; border-radius: 10px; }
  .db-h1 { font-size: 17px; }
  .db-sub { font-size: 12px; }
  .db-stat { padding: 12px 10px; }
  .db-stat-val { font-size: 20px; }
  .db-filter-btn { font-size: 11px; padding: 5px 9px; }
  .db-btn-primary { font-size: 13px; padding: 9px 14px; }
  .db-code-block { font-size: 10.5px; padding: 10px 12px; }
  .db-kv { font-size: 12px; }
}
`
