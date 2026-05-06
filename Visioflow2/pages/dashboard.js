import { useState, useEffect, useRef } from 'react'
import Head from 'next/head'

/* ================================================================
   IDENTIFIANTS ADMINISTRATEUR — MODIFIEZ CES DEUX LIGNES
   ================================================================ */
const ADMIN_EMAIL    = 'visioflow77@gmail.com'
const ADMIN_PASSWORD = 'Visioflow2024!'
/* ================================================================ */

const FB_CONFIG = {
  apiKey:            'AIzaSyD2R3SfaC6ifiA_juCfM_1q7SRaAm-G1gY',
  authDomain:        'visioflow-cb6eb.firebaseapp.com',
  projectId:         'visioflow-cb6eb',
  storageBucket:     'visioflow-cb6eb.firebasestorage.app',
  messagingSenderId: '208625257783',
  appId:             '1:208625257783:web:903429389d81159833deb2'
}

const PACK_COLOR = { essentiel: '#6b7280', premium: '#0071E3' }
const PACK_LABEL = { essentiel: 'Essentiel', premium: 'Premium' }
const PACK_PRICE = { essentiel: 150, premium: 490 }

const DEFAULT_CFG = {
  exampleUrls: { essentiel: '', premium: '' },
  packs: {
    essentiel: { price: '150€', desc: 'Site vitrine + gestion autonome' },
    premium:   { price: '490€', desc: 'Commandes en ligne & livraison' },
  },
  hero: {
    title:    'Votre restaurant en ligne en 5 jours',
    subtitle: 'Site vitrine ou commandes en ligne — livré clé en main, zéro abonnement.',
    ctaText:  'Créer mon site →'
  },
  payment: {
    essentiel: { stripe: 'https://buy.stripe.com/8x228kbpzaHz8CHajjdUY07', paypal: 'https://paypal.me/AdelinaLallinaj/150EUR' },
    premium:   { stripe: 'https://buy.stripe.com/7sYbIUfFPdTL1afdvvdUY06', paypal: 'https://paypal.me/AdelinaLallinaj/490EUR' },
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
  const [authed, setAuthed]         = useState(false)
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPass, setLoginPass]   = useState('')
  const [loginErr, setLoginErr]     = useState('')
  const [dbReady, setDbReady]       = useState(false)
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
  const dbRef = useRef(null)
  const unsubRef = useRef([])

  useEffect(() => {
    if (typeof sessionStorage !== 'undefined' && sessionStorage.getItem('vf_admin') === 'ok') {
      setAuthed(true)
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    if (!authed) return
    const tryInit = () => {
      if (typeof window === 'undefined' || !window.firebase) { setTimeout(tryInit, 300); return }
      try {
        if (!window.firebase.apps?.length) window.firebase.initializeApp(FB_CONFIG)
        dbRef.current = window.firebase.firestore()
        setDbReady(true)
      } catch (e) { console.error('Firebase dashboard:', e) }
    }
    tryInit()
    return () => { unsubRef.current.forEach(fn => fn()); unsubRef.current = [] }
  }, [authed])

  useEffect(() => {
    if (!dbReady) return
    const db = dbRef.current
    if (!db) return

    // Config : lecture unique
    db.collection('site_config').doc('main').get()
      .then(doc => { if (doc.exists) setCfg(deepMerge(DEFAULT_CFG, doc.data())) })
      .catch(e => console.error('config:', e))

    // Submissions : listener temps réel
    const u1 = db.collection('submissions').orderBy('timestamp', 'desc').limit(200)
      .onSnapshot(snap => {
        const arr = []; snap.forEach(d => arr.push({ id: d.id, ...d.data() }))
        setSubs(arr); setLive(true)
      }, e => { console.error('subs:', e); setLive(false) })

    // Formulaires : listener temps réel
    const u2 = db.collection('form_submissions').orderBy('timestamp', 'desc').limit(200)
      .onSnapshot(snap => {
        const arr = []; snap.forEach(d => arr.push({ id: d.id, ...d.data() }))
        setForms(arr); setLive(true)
      }, e => { console.error('forms:', e); setLive(false) })

    unsubRef.current = [u1, u2]
    return () => { u1(); u2(); unsubRef.current = [] }
  }, [dbReady])

  function login(e) {
    e.preventDefault()
    if (loginEmail.trim() === ADMIN_EMAIL && loginPass.trim() === ADMIN_PASSWORD) {
      sessionStorage.setItem('vf_admin', 'ok')
      setAuthed(true)
      setLoginErr('')
    } else {
      setLoginErr('Email ou mot de passe incorrect.')
    }
  }

  function logout() {
    sessionStorage.removeItem('vf_admin')
    setAuthed(false)
    setDbReady(false)
    dbRef.current = null
  }

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
    const db = dbRef.current
    if (!db) return
    setSaving(true)
    try {
      await db.collection('site_config').doc('main').set(cfg, { merge: true })
      setDirty(false)
      showToast('Configuration sauvegardée ✓')
    } catch (e) { showToast('Erreur : ' + e.message) }
    setSaving(false)
  }

  async function updateStatus(collection, id, status) {
    const db = dbRef.current
    if (!db) return
    try {
      await db.collection(collection).doc(id).update({ status })
      if (collection === 'submissions') setSubs(p => p.map(s => s.id === id ? { ...s, status } : s))
      else setForms(p => p.map(s => s.id === id ? { ...s, status } : s))
      showToast('Statut mis à jour')
    } catch (e) { showToast('Erreur') }
  }

  async function deleteEntry(collection, id) {
    const db = dbRef.current
    if (!db || !confirm('Supprimer définitivement cette entrée ?')) return
    try {
      await db.collection(collection).doc(id).delete()
      if (collection === 'submissions') setSubs(p => p.filter(s => s.id !== id))
      else setForms(p => p.filter(s => s.id !== id))
      if (detail?.id === id) setDetail(null)
      showToast('Entrée supprimée')
    } catch (e) { showToast('Erreur') }
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

      {!loading && !authed && (
        <LoginPage email={loginEmail} setEmail={setLoginEmail} pass={loginPass} setPass={setLoginPass} err={loginErr} onSubmit={login} />
      )}

      {!loading && authed && <div className="db">
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
            <a href="/" target="_blank" rel="noreferrer" className="db-nav-btn db-nav-link" onClick={() => setMobileOpen(false)}>
              <span className="db-nav-icon">🌐</span>Voir le site
            </a>
            <button onClick={logout} className="db-nav-btn db-nav-logout">
              <span className="db-nav-icon">🚪</span>Déconnexion
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
   LOGIN
   ════════════════════════════════════════════════════════════════ */
function LoginPage({ email, setEmail, pass, setPass, err, onSubmit }) {
  const [showPass, setShowPass] = useState(false)
  return (
    <div className="db-login-wrap">
      <div className="db-login-box">
        <div className="db-login-logo">Visio<span style={{ color: '#0071E3' }}>Flow</span></div>
        <p className="db-login-sub">Tableau de bord administrateur</p>
        <form onSubmit={onSubmit}>
          <div className="db-field">
            <label>Email</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)}
              placeholder="admin@visioflow.fr" required autoFocus />
          </div>
          <div className="db-field">
            <label>Mot de passe</label>
            <div style={{ position: 'relative', width: '100%' }}>
              <input type={showPass ? 'text' : 'password'} value={pass} onChange={e => setPass(e.target.value)}
                placeholder="••••••••" required style={{ width: '100%', boxSizing: 'border-box', paddingRight: 44 }} />
              <button
                type="button"
                onClick={() => setShowPass(v => !v)}
                style={{
                  position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)',
                  background: 'none', border: 'none', cursor: 'pointer', padding: 4,
                  color: '#6b7280', fontSize: 18, lineHeight: 1, zIndex: 2
                }}
                title={showPass ? 'Masquer' : 'Afficher'}
              >
                {showPass ? '🙈' : '👁️'}
              </button>
            </div>
          </div>
          {err && <p className="db-login-err">{err}</p>}
          <button type="submit" className="db-btn-primary db-btn-block">Se connecter →</button>
        </form>
      </div>
    </div>
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
    { id: 'urls',    label: '🔗 URLs d\'exemple' },
    { id: 'packs',   label: '💰 Tarifs & packs' },
    { id: 'hero',    label: '🏠 Page d\'accueil' },
    { id: 'payment', label: '💳 Liens de paiement' },
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
                <input type="url" value={cfg.exampleUrls?.[pack] || ''} onChange={e => update('exampleUrls.' + pack, e.target.value)}
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
          <div className="db-card-head">Liens de paiement Stripe & PayPal</div>
          <p style={{ fontSize: 13, color: '#6b7280', marginBottom: 20 }}>Mettez à jour vos liens de paiement pour chaque pack. Ces liens sont utilisés lors du passage à la caisse.</p>
          {['essentiel', 'premium'].map(pack => (
            <div key={pack} style={{ marginBottom: 24, paddingBottom: 20, borderBottom: '1px solid #f1f5f9' }}>
              <h3 style={{ fontSize: 13, fontWeight: 700, color: PACK_COLOR[pack], marginBottom: 12 }}>{PACK_LABEL[pack]} — {PACK_PRICE[pack]} €</h3>
              <div className="db-field">
                <label>🔵 Lien Stripe</label>
                <input type="url" value={cfg.payment?.[pack]?.stripe || ''} onChange={e => update('payment.' + pack + '.stripe', e.target.value)} placeholder="https://buy.stripe.com/..." />
              </div>
              <div className="db-field">
                <label>🟡 Lien PayPal</label>
                <input type="url" value={cfg.payment?.[pack]?.paypal || ''} onChange={e => update('payment.' + pack + '.paypal', e.target.value)} placeholder="https://paypal.me/..." />
              </div>
            </div>
          ))}
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
const ADMIN_EMAIL    = 'admin@visioflow.fr'
const ADMIN_PASSWORD = 'Visioflow2024!'`}</pre>
      </div>

      <div className="db-card" style={{ marginBottom: 16 }}>
        <div className="db-card-head">📥 Export des données</div>
        <p style={{ fontSize: 13, color: '#6b7280', marginBottom: 16 }}>
          Téléchargez toutes vos données clients en JSON ({subsCount} configuration{subsCount !== 1 ? 's' : ''} builder, {formsCount} formulaire{formsCount !== 1 ? 's' : ''} complet{formsCount !== 1 ? 's' : ''}).
        </p>
        <button onClick={onExport} className="db-btn-primary">Exporter toutes les données →</button>
      </div>

      <div className="db-card">
        <div className="db-card-head">🔥 Firebase</div>
        <div className="db-kv"><span>Projet</span><span style={{ fontWeight: 600 }}>visioflow-cb6eb</span></div>
        <div className="db-kv"><span>Collections utilisées</span><span style={{ textAlign: 'right', fontSize: 12 }}>submissions · form_submissions · site_config</span></div>
        <div className="db-kv"><span>SDK</span><span>v10.12.0 (CDN compat)</span></div>
        <div className="db-kv"><span>URL du dashboard</span><a href="/dashboard" style={{ color: '#0071E3', fontSize: 12 }}>/dashboard</a></div>
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
  const lines = []

  lines.push(`# BRIEF CLIENT — CRÉATION SITE RESTAURANT`)
  lines.push(`Pack : ${PACK_LABEL[pack] || pack} (${PACK_PRICE[pack] || '?'}€)`)
  lines.push(`Généré le : ${new Date().toLocaleDateString('fr-FR')}`)
  lines.push('')

  if (form?.cities?.length > 0) {
    const c = form.cities[0]
    lines.push('## INFORMATIONS RESTAURANT')
    if (c.name)     lines.push(`- Nom du restaurant : ${c.name}`)
    if (c.address)  lines.push(`- Adresse : ${c.address}`)
    if (c.tel)      lines.push(`- Téléphone : ${c.tel}`)
    if (c.email)    lines.push(`- Email contact : ${c.email}`)
    if (c.horaires) lines.push(`- Horaires : ${c.horaires}`)
    if (form.cuisine) lines.push(`- Type de cuisine : ${form.cuisine}`)
    lines.push('')
  }

  if (form?.cities?.length > 1) {
    lines.push('## ÉTABLISSEMENTS MULTIPLES')
    form.cities.forEach((c, i) => {
      lines.push(`### Établissement ${i + 1}`)
      if (c.name)    lines.push(`- Nom : ${c.name}`)
      if (c.address) lines.push(`- Adresse : ${c.address}`)
      if (c.tel)     lines.push(`- Tél : ${c.tel}`)
      if (c.email)   lines.push(`- Email : ${c.email}`)
    })
    lines.push('')
  }

  if (builder) {
    lines.push('## PRÉFÉRENCES DESIGN (Builder)')
    if (builder.cuisine)       lines.push(`- Type de cuisine : ${builder.cuisine}`)
    if (builder.color)         lines.push(`- Couleur principale : ${builder.color}`)
    if (builder.layout)        lines.push(`- Mise en page : ${builder.layout}`)
    if (builder.paymentMethod) lines.push(`- Mode de paiement en ligne : ${builder.paymentMethod}`)
    lines.push('')
  }

  if (form?.menuItems && Object.keys(form.menuItems).length > 0) {
    lines.push('## MENU')
    Object.entries(form.menuItems).forEach(([cat, items]) => {
      if (Array.isArray(items) && items.length > 0) {
        lines.push(`### ${cat}`)
        items.forEach(it => {
          if (it.name) lines.push(`- ${it.name}${it.price ? ' — ' + it.price : ''}${it.desc ? ' : ' + it.desc : ''}`)
        })
      }
    })
    lines.push('')
  }

  lines.push('## TÂCHE')
  lines.push('Crée un site web complet pour ce restaurant. Le site doit inclure :')
  lines.push("- Page d'accueil : hero, présentation du restaurant, menu, contact")
  if (pack === 'premium') lines.push('- Système de commandes en ligne avec panier')
  lines.push('- Design moderne, responsive (mobile-first), couleurs selon les préférences')
  lines.push('- Formulaire de contact ou réservation')
  lines.push('- SEO de base (title, meta description, og:image)')
  lines.push('')
  lines.push('Stack recommandée : Next.js + Tailwind CSS')

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
              <button onClick={copyPrompt} className="db-btn-primary" style={{ fontSize: 12, padding: '6px 16px' }}>
                {copied ? '✓ Copié !' : 'Copier le prompt'}
              </button>
            </div>
            <textarea readOnly value={prompt}
              style={{
                width: '100%', minHeight: 480, fontFamily: 'monospace', fontSize: 12,
                border: '1.5px solid #e5e7eb', borderRadius: 8, padding: 12,
                resize: 'vertical', color: '#111827', background: '#f9fafb', lineHeight: 1.65,
                boxSizing: 'border-box', marginTop: 12
              }}
            />
            <div style={{ marginTop: 10, padding: '10px 14px', background: '#eff6ff', borderRadius: 8, fontSize: 12, color: '#1d4ed8', lineHeight: 1.5 }}>
              💡 Copiez ce prompt → ouvrez Claude AI → collez-le. Claude génèrera le site complet du client automatiquement.
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
.db-nav-link { color: rgba(255,255,255,.35) !important; font-size: 13px; }
.db-nav-logout { color: rgba(255,255,255,.3) !important; font-size: 13px; }
.db-nav-logout:hover { color: #f87171 !important; background: rgba(239,68,68,.1) !important; }
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

/* ── LOGIN ── */
.db-login-wrap { min-height: 100vh; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #0f172a 0%, #1a3557 100%); font-family: 'Inter', sans-serif; padding: 16px; }
.db-login-box { background: #fff; border-radius: 20px; padding: 40px 40px 36px; width: 100%; max-width: 400px; box-shadow: 0 32px 80px rgba(0,0,0,.3); }
.db-login-logo { font-size: 28px; font-weight: 800; color: #111827; font-family: 'Outfit', sans-serif; text-align: center; margin-bottom: 6px; }
.db-login-sub { font-size: 13px; color: #9ca3af; text-align: center; margin-bottom: 30px; }
.db-login-err { font-size: 12.5px; color: #dc2626; background: #fef2f2; border: .5px solid #fecaca; padding: 10px 14px; border-radius: 8px; margin-bottom: 14px; }

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

  /* Login */
  .db-login-box { padding: 28px 20px; border-radius: 16px; }
  .db-login-logo { font-size: 24px; }
}

/* ── TRÈS PETIT (≤400px) ── */
@media (max-width: 400px) {
  .db-stats { grid-template-columns: 1fr 1fr; gap: 8px; }
  .db-stat-val { font-size: 20px; }
  .db-stat-lbl { font-size: 11px; }
  .db-filter-btn { font-size: 11.5px; padding: 5px 10px; }
  .db-main { padding: 66px 10px 24px; }
}
`
