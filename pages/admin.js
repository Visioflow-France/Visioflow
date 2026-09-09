import { useState, useEffect } from 'react'
import Head from 'next/head'

async function adminFetch(path, body) {
  const opts = {
    headers: { 'content-type': 'application/json' },
    credentials: 'same-origin',
  }
  if (body) { opts.method = 'POST'; opts.body = JSON.stringify(body) }
  else opts.method = 'GET'
  const r = await fetch(path, opts)
  let data = null
  try { data = await r.json() } catch { /* réponse non JSON (erreur serveur) */ }
  if (!r.ok || data?.error) throw new Error(data?.error || `Erreur ${r.status} sur ${path}`)
  return data
}

export async function getServerSideProps({ req }) {
  const cookies = Object.fromEntries(
    (req.headers.cookie || '').split(';').map(c => {
      const [k, ...v] = c.trim().split('=')
      return [k.trim(), v.join('=').trim()]
    }).filter(([k]) => k)
  )
  if (!process.env.ADMIN_TOKEN || cookies.vf_admin !== process.env.ADMIN_TOKEN) {
    return { redirect: { destination: '/login-admin', permanent: false } }
  }
  return { props: {} }
}

function fmtDate(ts) {
  if (!ts) return '—'
  try {
    const d = ts.toDate ? ts.toDate() : new Date(ts)
    return d.toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })
  } catch { return '—' }
}

const SITE_LABELS = { vitrine: 'Site vitrine', ecommerce: 'Boutique e-commerce', aucun: 'Autre' }

function estimateSummary(est) {
  if (!est || est.custom) return 'Sur devis'
  let txt = `à partir de ${est.oneLow} €`
  if (est.monthly > 0) txt += ` + à partir de ${est.monthly} €/mois`
  return txt
}

function estimateTags(f) {
  const tags = []
  if (f.siteType && f.siteType !== 'aucun') tags.push(`🌐 ${SITE_LABELS[f.siteType] || f.siteType}`)
  if (f.googleBusiness) tags.push(`📍 Google Business${(f.gbOptions || []).length ? ` (${f.gbOptions.join(', ')})` : ''}`)
  if (f.networks) tags.push(`📱 Réseaux${(f.platforms || []).length ? ` : ${(f.platforms || []).join(', ')}` : ''}`)
  if (f.urgent) tags.push('⚡ Urgent')
  return tags
}

function generateAIPrompt(formData) {
  const lines = []
  const timestamp = new Date().toLocaleDateString('fr-FR')

  const services = []
  const project = formData.project || ''

  if (project.toLowerCase().includes('e-commerce') || project.toLowerCase().includes('boutique')) {
    services.push({ name: 'E-commerce', price: '500-800€', features: ['Panier', 'Paiement', 'Gestion produits'] })
  }
  if (project.toLowerCase().includes('vitrine') || project.toLowerCase().includes('présentation') || project.toLowerCase().includes('site web')) {
    services.push({ name: 'Site Vitrine', price: '200-400€', features: ['Design responsive', 'Pages présentation', 'Contact'] })
  }
  if (project.toLowerCase().includes('réseaux sociaux') || project.toLowerCase().includes('social') || project.toLowerCase().includes('instagram') || project.toLowerCase().includes('facebook')) {
    services.push({ name: 'Réseaux Sociaux', price: '100-200€', features: ['Gestion', 'Contenu', 'Publications'] })
  }
  if (project.toLowerCase().includes('google') || project.toLowerCase().includes('seo') || project.toLowerCase().includes('my business') || project.toLowerCase().includes('local')) {
    services.push({ name: 'Google Business', price: '50-100€', features: ['Optimisation', 'SEO local', 'Visibilité'] })
  }

  if (services.length === 0) {
    services.push({ name: 'Site Web', price: '200-400€', features: ['Design responsive', 'Pages présentation', 'Contact'] })
  }

  lines.push(`Tu es un développeur web expert en Next.js. Crée un PROJET Next.js COMPLET et FONCTIONNEL à 100% pour ce client.`)
  lines.push('')
  lines.push(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`)
  lines.push(`BRIEF CLIENT — ${timestamp}`)
  lines.push(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`)
  lines.push('')

  lines.push(`## 1. INFORMATIONS CLIENT`)
  lines.push(`- Nom : **${formData.name || 'Non renseigné'}**`)
  lines.push(`- Email : **${formData.email || 'Non renseigné'}**`)
  if (formData.phone) lines.push(`- Téléphone : **${formData.phone}**`)

  lines.push('')
  lines.push(`## 2. PROJET`)
  lines.push(`**Description du besoin :**`)
  lines.push(formData.project || 'Non renseigné')
  lines.push('')

  if (services.length > 0) {
    lines.push(`**Services identifiés :**`)
    services.forEach(service => {
      lines.push(`- **${service.name}** (${service.price})`)
      service.features.forEach(feat => {
        lines.push(`  - ${feat}`)
      })
    })
    lines.push('')
  }

  lines.push(`## 3. SPÉCIFICATIONS TECHNIQUES`)
  lines.push(`- **Framework** : Next.js (Pages Router)`)
  lines.push(`- **Styling** : Tailwind CSS ou CSS-in-JS`)
  lines.push(`- **Performance** : ISR, optimisation images, lazy loading`)
  lines.push(`- **SEO** : Meta tags, Open Graph, structuration sémantique`)
  lines.push(`- **Responsive** : Mobile-first, parfait sur tous les appareils`)
  lines.push(`- **Accessibilité** : Contrastes, navigation clavier, ARIA`)
  lines.push('')
  lines.push(`## 4. STRUCTURE DU SITE`)
  lines.push(`**Pages obligatoires :**`)
  lines.push(`- Page d'accueil (hero, services, avantages, contact)`)
  lines.push(`- Page "À propos" (présentation, équipe, valeurs)`)
  lines.push(`- Page contact (formulaire + coordoonnées)`)
  lines.push('')

  if (services.some(s => s.name === 'E-commerce')) {
    lines.push(`**Pages E-commerce :**`)
    lines.push(`- Catalogue produits (filtres, tri, recherche)`)
    lines.push(`- Fiche produit détaillée (images, descriptions, add to cart)`)
    lines.push(`- Panier (récap, modifications, quantités)`)
    lines.push(`- Checkout (infos client, paiement, confirmation)`)
    lines.push(`- Dashboard client (commandes, profil)`)
    lines.push('')
  }

  lines.push(`## 5. DESIGN & UX`)
  lines.push(`- **Style** : Moderne, épuré, professionnel`)
  lines.push(`- **Couleurs** : Palette cohérente avec contraste WCAG AA`)
  lines.push(`- **Typographie** : Hiérarchie claire, lisible sur mobile`)
  lines.push(`- **Animations** : Subtiles, pertinentes, performantes`)
  lines.push(`- **Images** : Optimisées (WebP), lazy loading, placeholders`)
  lines.push('')
  lines.push(`## 6. FONCTIONNALITÉS CLÉS`)
  lines.push(`- Navigation fixe avec smooth scroll`)
  lines.push(`- Formulaire contact avec validation`)
  lines.push(`- Intégration réseaux sociaux (liens, partage)`)
  lines.push(`- Google Maps (si adresse renseignée)`)
  lines.push(`- Analytics (GA4 ou alternative)`)
  lines.push('')
  lines.push(`## 7. LIVRABLES ATTENDUS`)
  lines.push(`- Code complet et commenté`)
  lines.push(`- Structure de dossiers organisée`)
  lines.push(`- Composants réutilisables`)
  lines.push(`- Données structurées (JSON)`)
  lines.push(`- Documentation README`)
  lines.push(`- Instructions de déploiement`)
  lines.push('')
  lines.push(`## 8. BONNES PRATIQUES`)
  lines.push(`- Code propre (linter, formatting)`)
  lines.push(`- Performance (Lighthouse 90+)`)
  lines.push(`- SEO (meta tags, sitemap, robots.txt)`)
  lines.push(`- Sécurité (sanitization inputs, HTTPS)`)
  lines.push(`- Accessibilité (WCAG 2.1 AA)`)
  lines.push('')
  lines.push(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`)
  lines.push(`FIN DU BRIEF — Crée maintenant le site Next.js parfait pour ce client !`)
  lines.push(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`)

  return lines.join('\n')
}

/* Valeurs par défaut de la configuration publique (contact + réseaux) */
const DEFAULT_CONFIG = {
  contact: { email: 'contact@visioflow.fr', phone: '+33611045829' },
  social: {
    instagram: 'https://instagram.com/visioflow',
    linkedin: 'https://linkedin.com/company/visioflow',
    twitter: 'https://twitter.com/visioflow',
    facebook: '',
    tiktok: '',
  },
}

const SOCIAL_FIELDS = [
  { key: 'instagram', label: 'Instagram', placeholder: 'https://instagram.com/visioflow' },
  { key: 'facebook', label: 'Facebook', placeholder: 'https://facebook.com/visioflow' },
  { key: 'tiktok', label: 'TikTok', placeholder: 'https://tiktok.com/@visioflow' },
  { key: 'linkedin', label: 'LinkedIn', placeholder: 'https://linkedin.com/company/visioflow' },
  { key: 'twitter', label: 'Twitter / X', placeholder: 'https://x.com/visioflow' },
]

export default function Dashboard() {
  const [forms, setForms] = useState([])
  const [projects, setProjects] = useState([])
  const [estimates, setEstimates] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('estimates')
  const [selectedForm, setSelectedForm] = useState(null)
  const [generatedPrompt, setGeneratedPrompt] = useState('')
  const [copied, setCopied] = useState(false)
  const [loadError, setLoadError] = useState(null)
  const [diag, setDiag] = useState(null)

  // Configuration publique (contact + réseaux sociaux)
  const [siteConfig, setSiteConfig] = useState(DEFAULT_CONFIG)
  const [configSaving, setConfigSaving] = useState(false)
  const [configSaved, setConfigSaved] = useState(false)
  const [configError, setConfigError] = useState(null)

  // États pour l'ajout de projet
  const [showAddProject, setShowAddProject] = useState(false)
  const [newProject, setNewProject] = useState({
    url: '',
    title: '',
    category: 'vitrine'
  })

  useEffect(() => {
    loadData()
  }, [])

  async function loadData() {
    try {
      setLoadError(null)
      const data = await adminFetch('/api/admin/data')
      setForms(data?.forms || [])
      setProjects(data?.projects || [])
      setEstimates(data?.estimates || [])
      if (data?.config) {
        setSiteConfig({
          contact: { ...DEFAULT_CONFIG.contact, ...(data.config.contact || {}) },
          social: { ...DEFAULT_CONFIG.social, ...(data.config.social || {}) },
        })
      }
    } catch (err) {
      console.error('Erreur chargement données:', err)
      setLoadError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const runDiagnostic = async () => {
    setDiag('Diagnostic en cours...')
    try {
      setDiag(await adminFetch('/api/admin/diag'))
    } catch (err) {
      setDiag({ error: err.message })
    }
  }

  const handleGeneratePrompt = (form) => {
    setSelectedForm(form)
    const prompt = generateAIPrompt(form)
    setGeneratedPrompt(prompt)
    setCopied(false)
  }

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(generatedPrompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleDeleteForm = async (formId) => {
    if (!confirm('Supprimer ce formulaire ?')) return
    try {
      await adminFetch('/api/admin/delete', { id: formId, collection: 'form_submissions' })
      setForms(forms.filter(f => f.id !== formId))
      if (selectedForm?.id === formId) {
        setSelectedForm(null)
        setGeneratedPrompt('')
      }
    } catch (err) {
      console.error('Erreur suppression:', err)
      alert('Erreur lors de la suppression : ' + (err?.message || 'erreur inconnue'))
    }
  }

  /* ── Demandes d'estimation ── */
  const toggleEstimateStatus = async (est) => {
    const next = est.status === 'contacted' ? 'new' : 'contacted'
    try {
      await adminFetch('/api/admin/update', {
        collection: 'estimate_requests',
        id: est.id,
        data: { status: next },
      })
      setEstimates(estimates.map(e => e.id === est.id ? { ...e, status: next } : e))
    } catch (err) {
      console.error('Erreur statut:', err)
      alert('Erreur lors de la mise à jour : ' + (err?.message || 'erreur inconnue'))
    }
  }

  const handleDeleteEstimate = async (estId) => {
    if (!confirm('Supprimer cette demande d\'estimation ?')) return
    try {
      await adminFetch('/api/admin/delete', { id: estId, collection: 'estimate_requests' })
      setEstimates(estimates.filter(e => e.id !== estId))
    } catch (err) {
      console.error('Erreur suppression estimation:', err)
      alert('Erreur lors de la suppression : ' + (err?.message || 'erreur inconnue'))
    }
  }

  /* ── Configuration publique ── */
  const setCfg = (section, key, value) =>
    setSiteConfig(c => ({ ...c, [section]: { ...c[section], [key]: value } }))

  const saveConfig = async () => {
    setConfigSaving(true)
    setConfigError(null)
    setConfigSaved(false)
    try {
      const cleanSocial = {}
      for (const [k, v] of Object.entries(siteConfig.social)) {
        let url = String(v || '').trim()
        if (url && !/^https?:\/\//i.test(url)) url = 'https://' + url
        cleanSocial[k] = url
      }
      const cfg = {
        contact: {
          email: String(siteConfig.contact.email || '').trim(),
          phone: String(siteConfig.contact.phone || '').trim(),
        },
        social: cleanSocial,
      }
      await adminFetch('/api/admin/config', { cfg })
      setSiteConfig(c => ({ ...c, social: cleanSocial }))
      setConfigSaved(true)
      setTimeout(() => setConfigSaved(false), 2500)
    } catch (err) {
      console.error('Erreur configuration:', err)
      setConfigError(err?.message || 'erreur inconnue')
    } finally {
      setConfigSaving(false)
    }
  }

  const CATEGORIES = {
    vitrine: { label: 'Site Vitrine', emoji: '🌐' },
    ecommerce: { label: 'Vente en ligne', emoji: '🛒' },
    google: { label: 'Page Google', emoji: '📍' },
    reseaux: { label: 'Gestion réseaux', emoji: '📱' },
  }

  const handleAddProject = async () => {
    if (!newProject.url) {
      alert('Veuillez renseigner le lien du site')
      return
    }

    try {
      const projectData = {
        url: newProject.url,
        title: newProject.title,
        category: newProject.category,
        published: true,
        createdAt: new Date().toISOString()
      }

      const saved = await adminFetch('/api/admin/save', {
        col: 'projects',
        data: projectData
      })
      if (saved?.error) throw new Error(saved.error)

      setProjects([{ ...projectData, id: saved.id || Date.now().toString() }, ...projects])
      setNewProject({ url: '', title: '', category: 'vitrine' })
      setShowAddProject(false)
      alert('Lien ajouté avec succès !')
    } catch (err) {
      console.error('Erreur ajout projet:', err)
      alert('Erreur lors de l\'ajout : ' + (err?.message || 'erreur inconnue'))
    }
  }

  const handleDeleteProject = async (projectId) => {
    if (!confirm('Supprimer ce projet ?')) return
    try {
      await adminFetch('/api/admin/delete', { id: projectId, collection: 'projects' })
      setProjects(projects.filter(p => p.id !== projectId))
    } catch (err) {
      console.error('Erreur suppression projet:', err)
      alert('Erreur lors de la suppression : ' + (err?.message || 'erreur inconnue'))
    }
  }

  const TABS = [
    { key: 'estimates', label: `📣 Estimations (${estimates.length})` },
    { key: 'forms', label: `📝 Formulaires (${forms.length})` },
    { key: 'projects', label: `🚀 Projets (${projects.length})` },
    { key: 'config', label: '⚙️ Configuration' },
  ]

  const inputStyle = {
    width: '100%', padding: '10px 12px', border: '1px solid #e2e8f0',
    borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box',
  }

  return (
    <>
      <Head>
        <title>Admin — Visioflow</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div style={{ minHeight: '100vh', background: '#f8fafc', fontFamily: 'Inter, -apple-system, sans-serif' }}>
        {/* Header */}
        <div style={{ background: '#fff', borderBottom: '1px solid #e2e8f0', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 style={{ fontSize: '20px', fontWeight: 700, color: '#0f172a', margin: 0 }}>Dashboard Visioflow</h1>
            <p style={{ fontSize: '13px', color: '#64748b', margin: '4px 0 0 0' }}>Estimations, formulaires clients, projets & configuration du site</p>
          </div>
          <a href="/" style={{ padding: '8px 16px', background: '#0071E3', color: '#fff', borderRadius: '8px', textDecoration: 'none', fontSize: '13px', fontWeight: 600 }}>
            ← Retour site
          </a>
        </div>

        {/* Tabs */}
        <div style={{ background: '#fff', borderBottom: '1px solid #e2e8f0', padding: '0 24px', position: 'sticky', top: 0, zIndex: 20 }}>
          <div style={{ display: 'flex', gap: '24px', overflowX: 'auto' }}>
            {TABS.map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                style={{ padding: '12px 0', background: 'none', border: 'none', borderBottom: activeTab === tab.key ? '2px solid #0071E3' : '2px solid transparent', color: activeTab === tab.key ? '#0071E3' : '#64748b', fontSize: '14px', fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap' }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: selectedForm && activeTab === 'forms' ? '1fr 1fr' : '1fr', gap: 0, maxHeight: 'calc(100vh - 140px)' }}>
          {/* Contenu principal */}
          <div style={{ overflowY: 'auto', padding: '24px' }}>
            {loadError && (
              <div style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '12px', padding: '16px', marginBottom: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <span style={{ fontSize: '20px' }}>⚠️</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#b91c1c', marginBottom: '6px' }}>
                      Impossible de charger ou d'enregistrer les données
                    </div>
                    <div style={{ fontSize: '13px', color: '#7f1d1d', lineHeight: 1.5, marginBottom: '12px', wordBreak: 'break-word' }}>
                      {loadError}
                    </div>
                    <button
                      onClick={runDiagnostic}
                      style={{ padding: '6px 12px', background: '#b91c1c', color: '#fff', border: 'none', borderRadius: '6px', fontSize: '12px', fontWeight: 600, cursor: 'pointer' }}
                    >
                      🔧 Diagnostiquer
                    </button>
                    {diag && (
                      <pre style={{ marginTop: '12px', padding: '10px', background: '#fff', border: '1px solid #fecaca', borderRadius: '6px', fontSize: '11px', color: '#7f1d1d', whiteSpace: 'pre-wrap', wordBreak: 'break-word', fontFamily: 'Monaco, Consolas, monospace' }}>
                        {typeof diag === 'string' ? diag : JSON.stringify(diag, null, 2)}
                      </pre>
                    )}
                  </div>
                </div>
              </div>
            )}
            {loading ? (
              <div style={{ textAlign: 'center', padding: '40px', color: '#64748b' }}>
                Chargement...
              </div>
            ) : activeTab === 'estimates' ? (
              /* ── Onglet : demandes d'estimation ── */
              estimates.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '60px 20px', background: '#fff', borderRadius: '12px', border: '2px dashed #e2e8f0' }}>
                  <div style={{ fontSize: '48px', marginBottom: '16px' }}>📭</div>
                  <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#0f172a', marginBottom: '8px' }}>Aucune demande d&apos;estimation</h3>
                  <p style={{ fontSize: '14px', color: '#64748b' }}>
                    Les demandes envoyées depuis la page « Estimer ma demande » apparaîtront ici,
                    avec les coordonnées pour recontacter le client.
                  </p>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {estimates.map(est => {
                    const f = est.form || {}
                    const contacted = est.status === 'contacted'
                    return (
                      <div key={est.id} style={{
                        background: '#fff',
                        border: `1px solid ${contacted ? '#bbf7d0' : '#e2e8f0'}`,
                        borderRadius: '12px',
                        padding: '20px',
                      }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px', gap: '10px', flexWrap: 'wrap' }}>
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{ fontSize: '16px', fontWeight: 600, color: '#0f172a', marginBottom: '4px' }}>
                              {`${f.firstName || ''} ${f.lastName || ''}`.trim() || 'Nom non renseigné'}
                            </div>
                            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
                              <span style={{ fontSize: '11px', padding: '4px 8px', background: '#f1f5f9', borderRadius: '6px', color: '#64748b', whiteSpace: 'nowrap' }}>
                                {fmtDate(est.createdAt || est.timestamp)}
                              </span>
                              <span style={{ fontSize: '11px', padding: '4px 8px', borderRadius: '6px', fontWeight: 700, whiteSpace: 'nowrap', background: contacted ? '#f0fdf4' : '#fef9c3', color: contacted ? '#15803d' : '#a16207' }}>
                                {contacted ? '✓ Recontacté' : '● Nouveau'}
                              </span>
                            </div>
                          </div>
                          <div style={{ fontSize: '15px', fontWeight: 800, color: '#0071E3', whiteSpace: 'nowrap' }}>
                            {estimateSummary(est.estimate)}
                          </div>
                        </div>

                        {/* Coordonnées pour recontacter */}
                        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '12px' }}>
                          {f.phone && (
                            <a href={`tel:${String(f.phone).replace(/\s/g, '')}`} style={{ padding: '7px 14px', background: '#0071E3', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '13px', fontWeight: 600, cursor: 'pointer', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                              📞 {f.phone}
                            </a>
                          )}
                          {f.email && (
                            <a href={`mailto:${f.email}?subject=${encodeURIComponent('Votre estimation Visioflow')}`} style={{ padding: '7px 14px', background: '#f1f5f9', color: '#0f172a', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '13px', fontWeight: 600, cursor: 'pointer', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                              ✉️ {f.email}
                            </a>
                          )}
                        </div>

                        {/* Détail de la demande */}
                        {estimateTags(f).length > 0 && (
                          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '12px' }}>
                            {estimateTags(f).map((t, i) => (
                              <span key={i} style={{ fontSize: '11.5px', padding: '4px 10px', background: '#eff6ff', color: '#1e40af', borderRadius: '999px', fontWeight: 600 }}>
                                {t}
                              </span>
                            ))}
                          </div>
                        )}

                        {f.description && (
                          <div style={{ fontSize: '13.5px', color: '#475569', lineHeight: 1.55, marginBottom: '12px', padding: '10px 12px', background: '#f8fafc', borderRadius: '8px', whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
                            {f.description}
                          </div>
                        )}

                        <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
                          <button
                            onClick={() => toggleEstimateStatus(est)}
                            style={{ padding: '6px 12px', background: contacted ? '#f1f5f9' : '#dcfce7', color: contacted ? '#64748b' : '#15803d', border: 'none', borderRadius: '6px', fontSize: '12px', fontWeight: 600, cursor: 'pointer' }}
                          >
                            {contacted ? '↩ Marquer non traité' : '✓ Marquer recontacté'}
                          </button>
                          <button
                            onClick={() => handleDeleteEstimate(est.id)}
                            style={{ padding: '6px 12px', background: '#fee2e2', color: '#dc2626', border: 'none', borderRadius: '6px', fontSize: '12px', fontWeight: 600, cursor: 'pointer' }}
                          >
                            🗑
                          </button>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )
            ) : activeTab === 'config' ? (
              /* ── Onglet : configuration du site (contact + réseaux) ── */
              <div style={{ maxWidth: '640px' }}>
                <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', marginBottom: '20px' }}>
                  <h2 style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a', margin: '0 0 4px 0' }}>Informations de contact</h2>
                  <p style={{ fontSize: '13px', color: '#64748b', margin: '0 0 18px 0' }}>
                    Affichées sur la page Contact et dans le pied de page du site.
                  </p>

                  <div style={{ display: 'grid', gap: '16px' }}>
                    <div>
                      <label style={{ fontSize: '13px', fontWeight: 600, color: '#0f172a', marginBottom: '4px', display: 'block' }}>Email de contact</label>
                      <input
                        type="email"
                        value={siteConfig.contact.email}
                        onChange={(e) => setCfg('contact', 'email', e.target.value)}
                        placeholder="contact@visioflow.fr"
                        style={inputStyle}
                      />
                    </div>

                    <div>
                      <label style={{ fontSize: '13px', fontWeight: 600, color: '#0f172a', marginBottom: '4px', display: 'block' }}>Téléphone</label>
                      <input
                        type="tel"
                        value={siteConfig.contact.phone}
                        onChange={(e) => setCfg('contact', 'phone', e.target.value)}
                        placeholder="+33 6 11 04 58 29"
                        style={inputStyle}
                      />
                      <p style={{ fontSize: '12px', color: '#94a3b8', margin: '6px 0 0 0' }}>
                        Format international recommandé (ex : +33611045829) pour que les liens d&apos;appel fonctionnent.
                      </p>
                    </div>
                  </div>
                </div>

                <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', marginBottom: '20px' }}>
                  <h2 style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a', margin: '0 0 4px 0' }}>Réseaux sociaux</h2>
                  <p style={{ fontSize: '13px', color: '#64748b', margin: '0 0 18px 0' }}>
                    Laissez un champ vide pour masquer le réseau correspondant sur le site.
                  </p>

                  <div style={{ display: 'grid', gap: '14px' }}>
                    {SOCIAL_FIELDS.map(field => (
                      <div key={field.key}>
                        <label style={{ fontSize: '13px', fontWeight: 600, color: '#0f172a', marginBottom: '4px', display: 'block' }}>{field.label}</label>
                        <input
                          type="url"
                          value={siteConfig.social[field.key]}
                          onChange={(e) => setCfg('social', field.key, e.target.value)}
                          placeholder={field.placeholder}
                          style={inputStyle}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {configError && (
                  <div style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '10px', padding: '12px 16px', marginBottom: '16px', fontSize: '13px', color: '#b91c1c' }}>
                    {configError}
                  </div>
                )}

                <button
                  onClick={saveConfig}
                  disabled={configSaving}
                  style={{ padding: '11px 22px', background: configSaved ? '#10b981' : '#0071E3', color: '#fff', border: 'none', borderRadius: '10px', fontSize: '14px', fontWeight: 700, cursor: configSaving ? 'wait' : 'pointer', opacity: configSaving ? 0.7 : 1 }}
                >
                  {configSaving ? 'Enregistrement…' : configSaved ? '✓ Enregistré !' : '💾 Enregistrer la configuration'}
                </button>
              </div>
            ) : activeTab === 'forms' ? (
              forms.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '60px 20px', background: '#fff', borderRadius: '12px', border: '2px dashed #e2e8f0' }}>
                  <div style={{ fontSize: '48px', marginBottom: '16px' }}>📭</div>
                  <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#0f172a', marginBottom: '8px' }}>Aucun formulaire</h3>
                  <p style={{ fontSize: '14px', color: '#64748b' }}>Les formulaires clients apparaîtront ici</p>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {forms.map(form => (
                    <div key={form.id} style={{
                      background: '#fff',
                      border: '1px solid #e2e8f0',
                      borderRadius: '12px',
                      padding: '20px',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      ...(selectedForm?.id === form.id ? { borderColor: '#0071E3', boxShadow: '0 4px 12px rgba(0,113,227,0.1)' } : {})
                    }}
                    onClick={() => handleGeneratePrompt(form)}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: '16px', fontWeight: 600, color: '#0f172a', marginBottom: '4px' }}>
                            {form.name || 'Nom non renseigné'}
                          </div>
                          <div style={{ fontSize: '13px', color: '#64748b' }}>
                            {form.email || 'Email non renseigné'}
                          </div>
                        </div>
                        <div style={{ fontSize: '11px', padding: '4px 8px', background: '#f1f5f9', borderRadius: '6px', color: '#64748b', whiteSpace: 'nowrap' }}>
                          {fmtDate(form.timestamp)}
                        </div>
                      </div>

                      <div style={{ fontSize: '14px', color: '#475569', lineHeight: '1.5', marginBottom: '12px', maxHeight: '60px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {form.project || 'Pas de description'}
                      </div>

                      <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                        <button
                          onClick={(e) => { e.stopPropagation(); handleGeneratePrompt(form) }}
                          style={{ padding: '6px 12px', background: '#0071E3', color: '#fff', border: 'none', borderRadius: '6px', fontSize: '12px', fontWeight: 600, cursor: 'pointer' }}
                        >
                          ⚡ Générer prompt
                        </button>
                        <button
                          onClick={(e) => { e.stopPropagation(); handleDeleteForm(form.id) }}
                          style={{ padding: '6px 12px', background: '#fee2e2', color: '#dc2626', border: 'none', borderRadius: '6px', fontSize: '12px', fontWeight: 600, cursor: 'pointer' }}
                        >
                          🗑
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )
            ) : (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                  <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a', margin: 0 }}>Projets publiés</h2>
                  <button
                    onClick={() => setShowAddProject(!showAddProject)}
                    style={{ padding: '8px 16px', background: '#0071E3', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '13px', fontWeight: 600, cursor: 'pointer' }}
                  >
                    + Ajouter un projet
                  </button>
                </div>

                {showAddProject && (
                  <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px', marginBottom: '24px' }}>
                    <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#0f172a', marginBottom: '16px' }}>Nouveau lien</h3>

                    <div style={{ display: 'grid', gap: '16px' }}>
                      <div>
                        <label style={{ fontSize: '13px', fontWeight: 600, color: '#0f172a', marginBottom: '4px', display: 'block' }}>Lien du site *</label>
                        <input
                          type="text"
                          value={newProject.url}
                          onChange={(e) => setNewProject({...newProject, url: e.target.value})}
                          placeholder="https://monclient.fr"
                          style={inputStyle}
                        />
                      </div>

                      <div>
                        <label style={{ fontSize: '13px', fontWeight: 600, color: '#0f172a', marginBottom: '4px', display: 'block' }}>Titre (optionnel — nom du client par défaut)</label>
                        <input
                          type="text"
                          value={newProject.title}
                          onChange={(e) => setNewProject({...newProject, title: e.target.value})}
                          placeholder="Ex : Le Petit Bistrot"
                          style={inputStyle}
                        />
                      </div>

                      <div>
                        <label style={{ fontSize: '13px', fontWeight: 600, color: '#0f172a', marginBottom: '4px', display: 'block' }}>Catégorie</label>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                          {Object.entries(CATEGORIES).map(([key, { label, emoji }]) => (
                            <button
                              key={key}
                              type="button"
                              onClick={() => setNewProject({...newProject, category: key})}
                              style={{
                                padding: '8px 14px',
                                background: newProject.category === key ? '#0071E3' : '#f1f5f9',
                                color: newProject.category === key ? '#fff' : '#475569',
                                border: newProject.category === key ? '1px solid #0071E3' : '1px solid #e2e8f0',
                                borderRadius: '999px',
                                fontSize: '13px',
                                fontWeight: 600,
                                cursor: 'pointer'
                              }}
                            >
                              {emoji} {label}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                        <button
                          onClick={() => { setShowAddProject(false); setNewProject({ url: '', title: '', category: 'vitrine' }) }}
                          style={{ padding: '8px 16px', background: '#f1f5f9', color: '#64748b', border: 'none', borderRadius: '8px', fontSize: '13px', fontWeight: 600, cursor: 'pointer' }}
                        >
                          Annuler
                        </button>
                        <button
                          onClick={handleAddProject}
                          style={{ padding: '8px 16px', background: '#0071E3', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '13px', fontWeight: 600, cursor: 'pointer' }}
                        >
                          Ajouter
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {projects.length === 0 ? (
                  <div style={{ textAlign: 'center', padding: '60px 20px', background: '#fff', borderRadius: '12px', border: '2px dashed #e2e8f0' }}>
                    <div style={{ fontSize: '48px', marginBottom: '16px' }}>🚧</div>
                    <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#0f172a', marginBottom: '8px' }}>Aucun projet publié</h3>
                    <p style={{ fontSize: '14px', color: '#64748b' }}>Ajoutez vos premières réalisations pour les afficher sur la page "Nos projets"</p>
                  </div>
                ) : (
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px' }}>
                    {projects.map(project => (
                      <div key={project.id} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '16px', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                          <span style={{ fontSize: '11px', padding: '3px 10px', background: '#eff6ff', color: '#0071E3', borderRadius: '999px', fontWeight: 600, whiteSpace: 'nowrap' }}>
                            {CATEGORIES[project.category]?.emoji} {CATEGORIES[project.category]?.label || project.category}
                          </span>
                          <button
                            onClick={() => handleDeleteProject(project.id)}
                            style={{ padding: '4px 8px', background: '#fee2e2', color: '#dc2626', border: 'none', borderRadius: '4px', fontSize: '11px', fontWeight: 600, cursor: 'pointer' }}
                          >
                            🗑
                          </button>
                        </div>
                        <h4 style={{ fontSize: '15px', fontWeight: 600, color: '#0f172a', margin: '0 0 4px 0' }}>{project.title}</h4>
                        <a href={project.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: '13px', color: '#0071E3', textDecoration: 'none', wordBreak: 'break-all', marginBottom: '12px' }}>
                          {project.url}
                        </a>
                        <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: 'auto' }}>
                          {fmtDate(project.createdAt)}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Panneau Prompt IA (forms only) */}
          {selectedForm && activeTab === 'forms' && (
            <div style={{ overflowY: 'auto', padding: '24px', borderLeft: '1px solid #e2e8f0', background: '#fff' }}>
              <div style={{ marginBottom: '20px' }}>
                <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                  Prompt IA pour {selectedForm.name}
                </h2>
                <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '16px' }}>
                  Ce prompt génère un site Next.js complet adapté aux besoins du client
                </p>
                <button
                  onClick={handleCopyPrompt}
                  style={{ padding: '8px 16px', background: copied ? '#10b981' : '#0071E3', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '13px', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  {copied ? '✅ Copié !' : '📋 Copier le prompt'}
                </button>
              </div>

              <div style={{
                background: '#1e293b',
                color: '#e2e8f0',
                padding: '20px',
                borderRadius: '12px',
                fontFamily: 'Monaco, Consolas, monospace',
                fontSize: '12px',
                lineHeight: '1.6',
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word',
                border: '1px solid #334155',
                maxHeight: 'calc(100vh - 260px)',
                overflowY: 'auto'
              }}>
                {generatedPrompt}
              </div>

              <div style={{ marginTop: '16px', padding: '12px', background: '#dbeafe', borderRadius: '8px', border: '1px solid #93c5fd' }}>
                <div style={{ fontSize: '12px', color: '#1e40af', fontWeight: 600, marginBottom: '4px' }}>💡 Instructions</div>
                <div style={{ fontSize: '11px', color: '#1e40af', lineHeight: '1.5' }}>
                  Copiez ce prompt et collez-le dans votre IA préférée (ChatGPT, Claude, etc.) pour générer un site Next.js complet et personnalisé pour ce client.
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx global>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { margin: 0; font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; }
      `}</style>
    </>
  )
}
