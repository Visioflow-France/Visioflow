import { useState, useEffect } from 'react'
import Head from 'next/head'

function adminFetch(path, body) {
  const opts = {
    headers: { 'content-type': 'application/json' },
    credentials: 'same-origin',
  }
  if (body) { opts.method = 'POST'; opts.body = JSON.stringify(body) }
  else opts.method = 'GET'
  return fetch(path, opts).then(r => r.json())
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

export default function Dashboard() {
  const [forms, setForms] = useState([])
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('forms')
  const [selectedForm, setSelectedForm] = useState(null)
  const [generatedPrompt, setGeneratedPrompt] = useState('')
  const [copied, setCopied] = useState(false)

  // États pour l'ajout de projet
  const [showAddProject, setShowAddProject] = useState(false)
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    image: '',
    tags: '',
    link: ''
  })

  useEffect(() => {
    loadData()
  }, [])

  async function loadData() {
    try {
      const data = await adminFetch('/api/admin/data')
      setForms(data?.forms || [])
      setProjects(data?.projects || [])
    } catch (err) {
      console.error('Erreur chargement données:', err)
    } finally {
      setLoading(false)
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
      await adminFetch('/api/admin/delete', { id: formId, col: 'form_submissions' })
      setForms(forms.filter(f => f.id !== formId))
      if (selectedForm?.id === formId) {
        setSelectedForm(null)
        setGeneratedPrompt('')
      }
    } catch (err) {
      console.error('Erreur suppression:', err)
    }
  }

  const handleAddProject = async () => {
    if (!newProject.title || !newProject.description) {
      alert('Veuillez remplir au moins le titre et la description')
      return
    }

    try {
      const projectData = {
        ...newProject,
        tags: newProject.tags.split(',').map(t => t.trim()).filter(Boolean),
        published: true,
        createdAt: new Date()
      }

      await adminFetch('/api/admin/save', {
        col: 'projects',
        data: projectData
      })

      setProjects([...projects, { ...projectData, id: Date.now().toString() }])
      setNewProject({ title: '', description: '', image: '', tags: '', link: '' })
      setShowAddProject(false)
      alert('Projet ajouté avec succès !')
    } catch (err) {
      console.error('Erreur ajout projet:', err)
      alert('Erreur lors de l\'ajout du projet')
    }
  }

  const handleDeleteProject = async (projectId) => {
    if (!confirm('Supprimer ce projet ?')) return
    try {
      await adminFetch('/api/admin/delete', { id: projectId, col: 'projects' })
      setProjects(projects.filter(p => p.id !== projectId))
    } catch (err) {
      console.error('Erreur suppression projet:', err)
    }
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
            <p style={{ fontSize: '13px', color: '#64748b', margin: '4px 0 0 0' }}>Formulaires clients & Projets</p>
          </div>
          <a href="/" style={{ padding: '8px 16px', background: '#0071E3', color: '#fff', borderRadius: '8px', textDecoration: 'none', fontSize: '13px', fontWeight: 600 }}>
            ← Retour site
          </a>
        </div>

        {/* Tabs */}
        <div style={{ background: '#fff', borderBottom: '1px solid #e2e8f0', padding: '0 24px' }}>
          <div style={{ display: 'flex', gap: '24px' }}>
            <button
              onClick={() => setActiveTab('forms')}
              style={{ padding: '12px 0', background: 'none', border: 'none', borderBottom: activeTab === 'forms' ? '2px solid #0071E3' : '2px solid transparent', color: activeTab === 'forms' ? '#0071E3' : '#64748b', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}
            >
              📝 Formulaires ({forms.length})
            </button>
            <button
              onClick={() => setActiveTab('projects')}
              style={{ padding: '12px 0', background: 'none', border: 'none', borderBottom: activeTab === 'projects' ? '2px solid #0071E3' : '2px solid transparent', color: activeTab === 'projects' ? '#0071E3' : '#64748b', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}
            >
              🚀 Projets ({projects.length})
            </button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: selectedForm && activeTab === 'forms' ? '1fr 1fr' : '1fr', gap: 0, maxHeight: 'calc(100vh - 140px)' }}>
          {/* Contenu principal */}
          <div style={{ overflowY: 'auto', padding: '24px' }}>
            {loading ? (
              <div style={{ textAlign: 'center', padding: '40px', color: '#64748b' }}>
                Chargement...
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
                    <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#0f172a', marginBottom: '16px' }}>Nouveau projet</h3>

                    <div style={{ display: 'grid', gap: '16px' }}>
                      <div>
                        <label style={{ fontSize: '13px', fontWeight: 600, color: '#0f172a', marginBottom: '4px', display: 'block' }}>Titre *</label>
                        <input
                          type="text"
                          value={newProject.title}
                          onChange={(e) => setNewProject({...newProject, title: e.target.value})}
                          placeholder="Site E-commerce Mode"
                          style={{ width: '100%', padding: '10px 12px', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '14px' }}
                        />
                      </div>

                      <div>
                        <label style={{ fontSize: '13px', fontWeight: 600, color: '#0f172a', marginBottom: '4px', display: 'block' }}>Description *</label>
                        <textarea
                          value={newProject.description}
                          onChange={(e) => setNewProject({...newProject, description: e.target.value})}
                          placeholder="Boutique en ligne complète avec paiement..."
                          style={{ width: '100%', padding: '10px 12px', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '14px', minHeight: '80px', resize: 'vertical' }}
                        />
                      </div>

                      <div>
                        <label style={{ fontSize: '13px', fontWeight: 600, color: '#0f172a', marginBottom: '4px', display: 'block' }}>URL image</label>
                        <input
                          type="url"
                          value={newProject.image}
                          onChange={(e) => setNewProject({...newProject, image: e.target.value})}
                          placeholder="https://..."
                          style={{ width: '100%', padding: '10px 12px', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '14px' }}
                        />
                      </div>

                      <div>
                        <label style={{ fontSize: '13px', fontWeight: 600, color: '#0f172a', marginBottom: '4px', display: 'block' }}>Tags (séparés par virgules)</label>
                        <input
                          type="text"
                          value={newProject.tags}
                          onChange={(e) => setNewProject({...newProject, tags: e.target.value})}
                          placeholder="E-commerce, Stripe, Next.js"
                          style={{ width: '100%', padding: '10px 12px', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '14px' }}
                        />
                      </div>

                      <div>
                        <label style={{ fontSize: '13px', fontWeight: 600, color: '#0f172a', marginBottom: '4px', display: 'block' }}>Lien (optionnel)</label>
                        <input
                          type="url"
                          value={newProject.link}
                          onChange={(e) => setNewProject({...newProject, link: e.target.value})}
                          placeholder="https://..."
                          style={{ width: '100%', padding: '10px 12px', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '14px' }}
                        />
                      </div>

                      <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                        <button
                          onClick={() => { setShowAddProject(false); setNewProject({ title: '', description: '', image: '', tags: '', link: '' }) }}
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
                      <div key={project.id} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '16px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                          <h4 style={{ fontSize: '15px', fontWeight: 600, color: '#0f172a', margin: 0, flex: 1 }}>{project.title}</h4>
                          <button
                            onClick={() => handleDeleteProject(project.id)}
                            style={{ padding: '4px 8px', background: '#fee2e2', color: '#dc2626', border: 'none', borderRadius: '4px', fontSize: '11px', fontWeight: 600, cursor: 'pointer' }}
                          >
                            🗑
                          </button>
                        </div>
                        <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.5', marginBottom: '12px', maxHeight: '60px', overflow: 'hidden' }}>
                          {project.description}
                        </p>
                        {project.tags && project.tags.length > 0 && (
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '8px' }}>
                            {project.tags.map((tag, i) => (
                              <span key={i} style={{ fontSize: '11px', padding: '2px 8px', background: '#f1f5f9', color: '#64748b', borderRadius: '12px' }}>
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                        <div style={{ fontSize: '11px', color: '#94a3b8' }}>
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