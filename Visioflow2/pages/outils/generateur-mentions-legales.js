import { useState, useMemo } from 'react'
import Head from 'next/head'
import Footer from '../../components/Footer'

/* ════════════════════════════════════════════════════════════════
   GÉNÉRATEUR DE PAGES LÉGALES — VisioFlow
   Outil interne : remplit les infos d'un client restaurateur et
   génère le HTML conforme des 4 pages légales (mentions, CGV,
   confidentialité, cookies), prêt à coller dans son site (hébergé sur Vercel).
   Aucune donnée n'est envoyée — tout est calculé dans le navigateur.
   ════════════════════════════════════════════════════════════════ */

const VERCEL = {
  raison: 'Vercel Inc.',
  forme: 'Société de droit américain (Inc.)',
  adresse: '340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis',
  capital: '—',
  rcs: '—',
  email: 'support@vercel.com',
  site: 'https://vercel.com',
  privacy: 'https://vercel.com/legal/privacy-policy',
}

const FORMES = [
  'Auto-entrepreneur (micro-entreprise)',
  'Entreprise individuelle (EI)',
  'EIRL',
  'EURL',
  'SARL',
  'SAS',
  'SASU',
  'SA',
  'SCI',
  'Association',
  'Autre',
]

const EMPTY = {
  nomSite: '',
  urlSite: '',
  activite: 'Restaurant',
  raisonSociale: '',
  forme: 'SARL',
  gerant: '',
  siret: '',
  rcsRm: '',
  capital: '',
  tva: '',
  adresse: '',
  cp: '',
  ville: '',
  telephone: '',
  email: '',
  hebergeurPerso: false,
  hebRaison: VERCEL.raison,
  hebForme: VERCEL.forme,
  hebAdresse: VERCEL.adresse,
  hebEmail: VERCEL.email,
  hebSite: VERCEL.site,
  livraison: false, // vrai si commandes en ligne
  alcool: false,
}

const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))

function sirenFromSiret(siret) {
  const d = (siret || '').replace(/\s/g, '')
  return d.length >= 9 ? d.slice(0, 9) : ''
}

/* ── Template commun (head + styles clairs, fond blanc) ── */
function shell({ nomSite, urlSite, title, bodyInner }) {
  return `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)} | ${esc(nomSite || 'Restaurant')}</title>
<meta name="description" content="${esc(title)} de ${esc(nomSite || 'notre établissement')} — conformité LCEN / RGPD.">
<meta name="robots" content="index, follow">
<link rel="canonical" href="${esc(urlSite || '/')}">
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#fff;color:#1e293b;line-height:1.7;font-size:16px}
.wrap{max-width:840px;margin:0 auto;padding:40px 20px 80px}
h1{font-size:30px;margin:0 0 8px;color:#0f172a}
.lead{color:#64748b;margin-bottom:32px}
h2{font-size:21px;margin:32px 0 12px;color:#0f172a;border-bottom:2px solid #e2e8f0;padding-bottom:6px}
h3{font-size:17px;margin:20px 0 8px;color:#0f172a}
p{margin:0 0 14px}
ul,ol{margin:0 0 14px;padding-left:24px}
li{margin-bottom:8px}
strong{color:#0f172a}
a{color:#0071E3}
table{width:100%;border-collapse:collapse;margin:14px 0;font-size:14px}
th{background:#f1f5f9;text-align:left;padding:10px;border:1px solid #e2e8f0}
td{padding:10px;border:1px solid #e2e8f0}
.small{font-size:13px;color:#94a3b8;margin-top:40px;border-top:1px solid #e2e8f0;padding-top:16px}
.updated{font-style:italic;color:#94a3b8}
.topnav{border-bottom:1px solid #e2e8f0;padding:16px 20px}
.topnav .in{max-width:840px;margin:0 auto;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px}
.topnav a{color:#475569;text-decoration:none;font-size:14px;margin-left:14px}
.topnav .brand{font-weight:700;color:#0f172a;font-size:18px}
@media(max-width:600px){h1{font-size:24px}.topnav a{margin-left:0;margin-right:12px}}
</style>
</head>
<body>
<nav class="topnav"><div class="in">
<span class="brand">${esc(nomSite || 'Restaurant')}</span>
<span><a href="${esc(urlSite || '/')}">← Retour au site</a></span>
</div></nav>
<main class="wrap">
<h1>${esc(title)}</h1>
<p class="lead">${esc(nomSite || '')}</p>
${bodyInner}
<p class="updated">Page mise à jour le [DATE].</p>
</main>
</body>
</html>`
}

/* ── 1. MENTIONS LÉGALES ── */
function mentions(d) {
  const siren = sirenFromSiret(d.siret)
  const isAuto = /auto-entrepreneur|micro-entreprise/i.test(d.forme)
  const tvaLine = d.tva
    ? `<li><strong>Numéro de TVA intracommunautaire&nbsp;:</strong> ${esc(d.tva)}</li>`
    : (isAuto ? `<li><strong>TVA&nbsp;:</strong> Franchise en base (art. 293 B du CGI)</li>` : '')
  const capitalLine = (d.capital && !isAuto) ? `<li><strong>Capital social&nbsp;:</strong> ${esc(d.capital)}</li>` : ''

  const body = `
<h2>1. Éditeur du site</h2>
<p>Le présent site est édité par&nbsp;:</p>
<ul>
<li><strong>Raison sociale&nbsp;:</strong> ${esc(d.raisonSociale || d.nomSite)}</li>
<li><strong>Forme juridique&nbsp;:</strong> ${esc(d.forme)}</li>
<li><strong>Dirigeant / Directeur de la publication&nbsp;:</strong> ${esc(d.gerant)}</li>
<li><strong>SIRET&nbsp;:</strong> ${esc(d.siret)}${siren ? ` — SIREN&nbsp;: ${esc(siren)}` : ''}</li>
${d.rcsRm ? `<li><strong>Immatriculation (RCS / RM)&nbsp;:</strong> ${esc(d.rcsRm)}</li>` : ''}
${capitalLine}
${tvaLine}
<li><strong>Adresse du siège&nbsp;:</strong> ${esc(d.adresse)}, ${esc(d.cp)} ${esc(d.ville)}</li>
${d.telephone ? `<li><strong>Téléphone&nbsp;:</strong> ${esc(d.telephone)}</li>` : ''}
<li><strong>Email&nbsp;:</strong> <a href="mailto:${esc(d.email)}">${esc(d.email)}</a></li>
</ul>

<h2>2. Hébergeur du site</h2>
<p>Le site est hébergé par&nbsp;:</p>
<ul>
<li><strong>Raison sociale&nbsp;:</strong> ${esc(d.hebRaison)}</li>
<li><strong>Forme&nbsp;:</strong> ${esc(d.hebForme)}</li>
<li><strong>Adresse&nbsp;:</strong> ${esc(d.hebAdresse)}</li>
<li><strong>Contact&nbsp;:</strong> <a href="mailto:${esc(d.hebEmail)}">${esc(d.hebEmail)}</a></li>
<li><strong>Site web&nbsp;:</strong> <a href="${esc(d.hebSite)}" target="_blank" rel="noopener">${esc(d.hebSite)}</a></li>
</ul>

<h2>3. Propriété intellectuelle</h2>
<p>L'ensemble du contenu du site (textes, images, logos, photographies, éléments graphiques, mise en page, structure) est protégé par le droit français et international de la propriété intellectuelle. Sauf autorisation écrite préalable, toute reproduction, représentation, modification ou exploitation, totale ou partielle, est interdite et constitue une contrefaçon sanctionnée par le Code de la propriété intellectuelle.</p>

<h2>4. Données personnelles</h2>
<p>Le site est susceptible de traiter des données personnelles (notamment lors d'une commande, d'une réservation ou d'un contact). Conformément au Règlement (UE) 2016/679 (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, d'effacement, d'opposition, de limitation et de portabilité de vos données.</p>
<p>Pour exercer ces droits, écrivez à <a href="mailto:${esc(d.email)}">${esc(d.email)}</a> ou par courrier à l'adresse de l'éditeur. Vous pouvez également introduire une réclamation auprès de la <strong>CNIL</strong> (<a href="https://www.cnil.fr" target="_blank" rel="noopener">www.cnil.fr</a>).</p>

<h2>5. Cookies</h2>
<p>Le site peut déposer des cookies. Le consentement aux cookies non strictement nécessaires est recueilli préalablement à leur dépôt. Pour plus d'information, consultez notre <a href="${esc(d.urlSite || '/')}/politique-cookies.html">politique de cookies</a>.</p>

<h2>6. Liens hypertextes</h2>
<p>Le site peut contenir des liens vers des sites tiers. L'éditeur n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.</p>

<h2>7. Litiges, médiation et loi applicable</h2>
<p>Le site et les présentes mentions sont régis par le droit français. En cas de litige, nous vous invitons à contacter d'abord l'éditeur à <a href="mailto:${esc(d.email)}">${esc(d.email)}</a>.</p>
<p>Conformément aux articles L. 612-1 et suivants du Code de la consommation, le client consommateur peut recourir gratuitement à un <strong>médiateur de la consommation</strong> en vue de la résolution amiable d'un litige (plateforme&nbsp;: <a href="https://www.mediateurdesentreprises.fr" target="_blank" rel="noopener">www.mediateurdesentreprises.fr</a>).</p>
<p>Vous pouvez également saisir la <strong>plateforme européenne de règlement en ligne des litiges (RLL)</strong>&nbsp;: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener">https://ec.europa.eu/consumers/odr</a>.</p>`
  return shell({ nomSite: d.nomSite, urlSite: d.urlSite, title: 'Mentions légales', bodyInner: body })
}

/* ── 2. CGV (commandes en ligne) ── */
function cgv(d) {
  const body = `
<h2>Article 1 — Objet</h2>
<p>Les présentes conditions générales de vente (CGV) régissent les relations entre <strong>${esc(d.raisonSociale || d.nomSite)}</strong> (« l'établissement ») et tout client (« le Client ») pour la vente de produits et services de restauration proposés sur le site <a href="${esc(d.urlSite || '/')}">${esc(d.urlSite || '')}</a>. Toute commande implique l'acceptation pleine et entière des présentes CGV.</p>

<h2>Article 2 — Produits et prix</h2>
<p>Les produits proposés, leurs descriptions et leurs prix sont indiqués en euros (€), taxes comprises, sur le site. Les prix peuvent être modifiés à tout moment ; le prix applicable est celui en vigueur au jour de la commande. Les produits sont proposés dans la limite des stocks disponibles.</p>
${d.alcool ? '<p>La vente d\'alcool est strictement réservée aux personnes majeures. En commandant, le Client confirme avoir l\'âge légal (18 ans).</p>' : ''}

<h2>Article 3 — Commande</h2>
<p>Le Client passe commande via le site. Les informations communiquées lors de la commande (coordonnées, retrait ou livraison) doivent être exactes. L'établissement se réserve le droit de refuser une commande pour motif légitime.</p>

<h2>Article 4 — Paiement</h2>
<p>Le paiement s'effectue en ligne au moment de la commande, par carte bancaire via un prestataire de paiement sécurisé. Les données bancaires ne sont pas stockées par l'établissement.</p>

<h2>Article 5 — ${d.livraison ? 'Livraison' : 'Retrait'}</h2>
<p>${d.livraison ? 'Les délais de livraison sont indiqués à titre estimatif. La livraison s\'effectue à l\'adresse communiquée par le Client. Tout retard ne peut engager la responsabilité de l\'établissement au-delà du prix de la commande.' : 'Le Client retire sa commande à l\'adresse de l\'établissement, aux horaires d\'ouverture.'}</p>

<h2>Article 6 — Droit de rétractation</h2>
<p>Conformément à l'article L. 221-18 du Code de la consommation, le Client dispose d'un délai de 14 jours pour exercer son droit de rétractation. <strong>Toutefois, pour les denrées périssables (produits alimentaires), ce droit ne s'applique pas pleinement dès lors que les produits ont été descellés ou sont susceptibles de se détériorer rapidement (art. L. 221-28 du Code de la consommation).</strong></p>

<h2>Article 7 — Réclamations et garantie</h2>
<p>Toute réclamation doit être adressée à <a href="mailto:${esc(d.email)}">${esc(d.email)}</a> sans délai. Les produits livrés bénéficient des garanties légales de conformité (art. L. 217-4 et s. du Code de la consommation) et des vices cachés (art. 1641 et s. du Code civil).</p>

<h2>Article 8 — Médiation et litiges</h2>
<p>En cas de litige non résolu, le Client consommateur peut recourir à un <strong>médiateur de la consommation</strong> (<a href="https://www.mediateurdesentreprises.fr" target="_blank" rel="noopener">www.mediateurdesentreprises.fr</a>) ou saisir la plateforme européenne de règlement en ligne des litiges (RLL)&nbsp;: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener">https://ec.europa.eu/consumers/odr</a>. Les tribunaux français sont compétents.</p>`
  return shell({ nomSite: d.nomSite, urlSite: d.urlSite, title: 'Conditions générales de vente', bodyInner: body })
}

/* ── 3. POLITIQUE DE CONFIDENTIALITÉ ── */
function confidentialite(d) {
  const body = `
<h2>1. Responsable du traitement</h2>
<p>Le responsable du traitement des données est <strong>${esc(d.raisonSociale || d.nomSite)}</strong>, ${esc(d.forme)}, ${esc(d.adresse)} ${esc(d.cp)} ${esc(d.ville)}, joignable à <a href="mailto:${esc(d.email)}">${esc(d.email)}</a>.</p>

<h2>2. Données collectées</h2>
<ul>
<li>Identité et coordonnées (nom, prénom, téléphone, email, adresse de livraison) lors d'une commande ou réservation&nbsp;;</li>
<li>Données de paiement (traitées par notre prestataire de paiement, non stockées)&nbsp;;</li>
<li>Données de navigation (adresse IP, navigateur) à des fins techniques.</li>
</ul>

<h2>3. Finalités et base légale</h2>
<table>
<tr><th>Finalité</th><th>Base légale</th><th>Conservation</th></tr>
<tr><td>Gestion des commandes et réservations</td><td>Exécution du contrat</td><td>3 ans</td></tr>
<tr><td>Paiement</td><td>Exécution du contrat</td><td>10 ans (obligation comptable)</td></tr>
<tr><td>Service client</td><td>Intérêt légitime</td><td>3 ans</td></tr>
<tr><td>Newsletter (le cas échéant)</td><td>Consentement</td><td>Jusqu'au retrait</td></tr>
<tr><td>Obligations comptables et fiscales</td><td>Obligation légale</td><td>10 ans</td></tr>
</table>

<h2>4. Destinataires</h2>
<p>Les données sont destinées à l'établissement et, le cas échéant, à ses prestataires (paiement, hébergement) agissant en qualité de sous-traitants, ainsi qu'aux autorités sur demande légale.</p>

<h2>5. Vos droits</h2>
<p>Vous disposez d'un droit d'accès, de rectification, d'effacement, d'opposition, de limitation et de portabilité. Exercez-les à <a href="mailto:${esc(d.email)}">${esc(d.email)}</a>. Vous pouvez introduire une réclamation auprès de la <strong>CNIL</strong> (<a href="https://www.cnil.fr" target="_blank" rel="noopener">www.cnil.fr</a>).</p>`
  return shell({ nomSite: d.nomSite, urlSite: d.urlSite, title: 'Politique de confidentialité', bodyInner: body })
}

/* ── 4. POLITIQUE DE COOKIES ── */
function cookies(d) {
  const body = `
<h2>1. Qu'est-ce qu'un cookie&nbsp;?</h2>
<p>Un cookie est un petit fichier déposé sur votre terminal lors de votre visite. Il permet de mémoriser des informations relatives à votre navigation.</p>

<h2>2. Cookies utilisés</h2>
<table>
<tr><th>Catégorie</th><th>Finalité</th><th>Consentement</th></tr>
<tr><td>Cookies strictement nécessaires</td><td>Fonctionnement du site (panier, session)</td><td>Non requis</td></tr>
<tr><td>Cookies de mesure d'audience</td><td>Statistiques de visite (le cas échéant)</td><td>Requis</td></tr>
<tr><td>Cookies tiers (paiement)</td><td>Sécurisation des paiements</td><td>Non requis</td></tr>
</table>

<h2>3. Gestion de votre consentement</h2>
<p>Lors de votre première visite, un bandeau vous permet d'accepter ou de refuser les cookies non strictement nécessaires. Vous pouvez modifier ce choix à tout moment via le lien « Gérer les cookies ».</p>

<h2>4. Paramétrage du navigateur</h2>
<p>Vous pouvez également configurer votre navigateur pour bloquer les cookies&nbsp;: Chrome, Firefox, Safari et Edge disposent tous d'une option de blocage dans leurs paramètres de confidentialité.</p>`
  return shell({ nomSite: d.nomSite, urlSite: d.urlSite, title: 'Politique de cookies', bodyInner: body })
}

/* ── Composant champ ── */
function Field({ label, hint, children }) {
  return (
    <label style={{ display: 'block', marginBottom: 14 }}>
      <span style={{ display: 'block', fontSize: 13.5, fontWeight: 600, color: '#0f172a', marginBottom: 4 }}>{label}</span>
      {hint && <span style={{ display: 'block', fontSize: 12, color: '#94a3b8', marginBottom: 5 }}>{hint}</span>}
      {children}
    </label>
  )
}

const inputStyle = {
  width: '100%', padding: '10px 12px', borderRadius: 8, border: '1px solid #cbd5e1',
  fontSize: 14, fontFamily: 'inherit', color: '#0f172a', background: '#fff',
}

const PAGES = [
  { key: 'mentions', label: 'Mentions légales', fn: mentions, file: 'mentions-legales.html' },
  { key: 'cgv', label: 'CGV', fn: cgv, file: 'cgv.html' },
  { key: 'confidentialite', label: 'Confidentialité', fn: confidentialite, file: 'politique-confidentialite.html' },
  { key: 'cookies', label: 'Cookies', fn: cookies, file: 'politique-cookies.html' },
]

export default function Generateur() {
  const [d, setD] = useState(EMPTY)
  const [active, setActive] = useState('mentions')
  const [copied, setCopied] = useState(false)

  const set = (k, v) => setD((prev) => ({ ...prev, [k]: v }))

  const toggleHebergeur = () => {
    setD((prev) => ({
      ...prev,
      hebergeurPerso: !prev.hebergeurPerso,
      ...(prev.hebergeurPerso
        ? { hebRaison: VERCEL.raison, hebForme: VERCEL.forme, hebAdresse: VERCEL.adresse, hebEmail: VERCEL.email, hebSite: VERCEL.site }
        : { hebRaison: '', hebForme: '', hebAdresse: '', hebEmail: '', hebSite: '' }),
    }))
  }

  const current = PAGES.find((p) => p.key === active)
  const html = useMemo(() => current.fn(d), [current, d])

  const copy = async () => {
    try { await navigator.clipboard.writeText(html); setCopied(true); setTimeout(() => setCopied(false), 2000) } catch (_) {}
  }

  const download = () => {
    const blob = new Blob([html], { type: 'text/html' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url; a.download = current.file; a.click()
    URL.revokeObjectURL(url)
  }

  const downloadAll = () => {
    PAGES.forEach((p, i) => {
      setTimeout(() => {
        const blob = new Blob([p.fn(d)], { type: 'text/html' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url; a.download = p.file; a.click()
        URL.revokeObjectURL(url)
      }, i * 400)
    })
  }

  return (
    <>
      <Head>
        <title>Générateur de pages légales | VisioFlow — Outil</title>
        <meta name="description" content="Outil VisioFlow : générez les mentions légales, CGV, politique de confidentialité et cookies conformes pour un site restaurant en quelques secondes." />
        <meta name="robots" content="noindex, follow" />
      </Head>

      <div style={{ minHeight: '100vh', background: '#f8fafc', color: '#1e293b', fontFamily: "'Inter Tight',sans-serif" }}>
        {/* Header */}
        <header style={{ background: '#fff', borderBottom: '1px solid #e2e8f0', padding: '18px 24px', position: 'sticky', top: 0, zIndex: 10 }}>
          <div style={{ maxWidth: 1300, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
            <div>
              <div style={{ fontFamily: 'Fraunces,sans-serif', fontSize: 22, fontWeight: 900 }}>Visio<span style={{ color: '#0071E3' }}>flow</span></div>
              <div style={{ fontSize: 13, color: '#64748b' }}>Générateur de pages légales</div>
            </div>
            <a href="/" style={{ color: '#0071E3', textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>← Retour au site</a>
          </div>
        </header>

        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '28px 24px', display: 'grid', gridTemplateColumns: 'minmax(0,420px) minmax(0,1fr)', gap: 28, alignItems: 'start' }}>
          {/* ── FORM ── */}
          <section style={{ background: '#fff', borderRadius: 16, padding: 24, border: '1px solid #e2e8f0' }}>
            <h2 style={{ fontSize: 17, marginBottom: 4, color: '#0f172a' }}>Informations du client</h2>
            <p style={{ fontSize: 12.5, color: '#94a3b8', marginBottom: 20 }}>Renseignez les infos du restaurateur. Le HTML se génère automatiquement à droite. Aucune donnée n'est envoyée.</p>

            <h3 style={secTitle}>Établissement</h3>
            <Field label="Nom du site / restaurant" hint="Ex : Le Bistro Gourmet"><input style={inputStyle} value={d.nomSite} onChange={(e) => set('nomSite', e.target.value)} placeholder="Le Bistro Gourmet" /></Field>
            <Field label="URL du site" hint="Ex : https://lebistrogourmet.fr"><input style={inputStyle} value={d.urlSite} onChange={(e) => set('urlSite', e.target.value)} placeholder="https://..." /></Field>
            <Field label="Activité"><input style={inputStyle} value={d.activite} onChange={(e) => set('activite', e.target.value)} /></Field>

            <h3 style={secTitle}>Identité légale (figurant sur le Kbis / avis de situation INSEE)</h3>
            <Field label="Raison sociale" hint="Nom officiel de l'entreprise"><input style={inputStyle} value={d.raisonSociale} onChange={(e) => set('raisonSociale', e.target.value)} placeholder="ex : SARL Le Bistro Gourmet" /></Field>
            <Field label="Forme juridique">
              <select style={inputStyle} value={d.forme} onChange={(e) => set('forme', e.target.value)}>
                {FORMES.map((f) => <option key={f} value={f}>{f}</option>)}
              </select>
            </Field>
            <Field label="Nom et prénom du dirigeant" hint="Directeur de la publication"><input style={inputStyle} value={d.gerant} onChange={(e) => set('gerant', e.target.value)} placeholder="Jean Dupont" /></Field>
            <Field label="SIRET (14 chiffres)" hint="Disponible sur le Kbis ou l'avis INSEE (annuaire-entreprises.data.gouv.fr)"><input style={inputStyle} value={d.siret} onChange={(e) => set('siret', e.target.value)} placeholder="123 456 789 00012" /></Field>
            <Field label="N° RCS ou RM" hint="N° d'immatriculation au Registre du Commerce ou des Métiers"><input style={inputStyle} value={d.rcsRm} onChange={(e) => set('rcsRm', e.target.value)} placeholder="RCS Paris 123 456 789" /></Field>
            {!/auto-entrepreneur|micro-entreprise/i.test(d.forme) && (
              <Field label="Capital social"><input style={inputStyle} value={d.capital} onChange={(e) => set('capital', e.target.value)} placeholder="5 000 €" /></Field>
            )}
            <Field label="N° TVA intracommunautaire" hint="Optionnel (laisser vide si franchise en base de TVA)"><input style={inputStyle} value={d.tva} onChange={(e) => set('tva', e.target.value)} placeholder="FR12345678901" /></Field>

            <h3 style={secTitle}>Coordonnées</h3>
            <Field label="Adresse du siège"><input style={inputStyle} value={d.adresse} onChange={(e) => set('adresse', e.target.value)} placeholder="12 rue des Lilas" /></Field>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 10 }}>
              <Field label="Code postal"><input style={inputStyle} value={d.cp} onChange={(e) => set('cp', e.target.value)} placeholder="75001" /></Field>
              <Field label="Ville"><input style={inputStyle} value={d.ville} onChange={(e) => set('ville', e.target.value)} placeholder="Paris" /></Field>
            </div>
            <Field label="Téléphone"><input style={inputStyle} value={d.telephone} onChange={(e) => set('telephone', e.target.value)} placeholder="+33 1 23 45 67 89" /></Field>
            <Field label="Email"><input style={inputStyle} value={d.email} onChange={(e) => set('email', e.target.value)} placeholder="contact@..." /></Field>

            <h3 style={secTitle}>Hébergeur</h3>
            <label style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14, fontSize: 13, cursor: 'pointer' }}>
              <input type="checkbox" checked={!d.hebergeurPerso} onChange={toggleHebergeur} style={{ width: 16, height: 16, accentColor: '#0071E3' }} />
              Hébergé chez Vercel (pré-rempli)
            </label>
            {d.hebergeurPerso && (
              <>
                <Field label="Raison sociale de l'hébergeur"><input style={inputStyle} value={d.hebRaison} onChange={(e) => set('hebRaison', e.target.value)} /></Field>
                <Field label="Forme"><input style={inputStyle} value={d.hebForme} onChange={(e) => set('hebForme', e.target.value)} /></Field>
                <Field label="Adresse"><input style={inputStyle} value={d.hebAdresse} onChange={(e) => set('hebAdresse', e.target.value)} /></Field>
                <Field label="Email contact"><input style={inputStyle} value={d.hebEmail} onChange={(e) => set('hebEmail', e.target.value)} /></Field>
                <Field label="Site web"><input style={inputStyle} value={d.hebSite} onChange={(e) => set('hebSite', e.target.value)} /></Field>
              </>
            )}

            <h3 style={secTitle}>Options du site</h3>
            <label style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10, fontSize: 13, cursor: 'pointer' }}>
              <input type="checkbox" checked={d.livraison} onChange={(e) => set('livraison', e.target.checked)} style={{ width: 16, height: 16, accentColor: '#0071E3' }} />
              Le site propose la livraison (sinon : retrait sur place)
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10, fontSize: 13, cursor: 'pointer' }}>
              <input type="checkbox" checked={d.alcool} onChange={(e) => set('alcool', e.target.checked)} style={{ width: 16, height: 16, accentColor: '#0071E3' }} />
              Vente d'alcool (clause mineurs requise)
            </label>
          </section>

          {/* ── OUTPUT ── */}
          <section style={{ position: 'sticky', top: 90 }}>
            <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #e2e8f0', overflow: 'hidden' }}>
              <div style={{ display: 'flex', borderBottom: '1px solid #e2e8f0', flexWrap: 'wrap' }}>
                {PAGES.map((p) => (
                  <button key={p.key} onClick={() => setActive(p.key)} style={{
                    flex: 1, minWidth: 110, padding: '14px 8px', border: 'none', cursor: 'pointer', fontSize: 13.5, fontWeight: 600,
                    background: active === p.key ? '#0071E3' : 'transparent',
                    color: active === p.key ? '#fff' : '#475569',
                    fontFamily: 'inherit',
                  }}>{p.label}</button>
                ))}
              </div>
              <div style={{ display: 'flex', gap: 10, padding: 12, borderBottom: '1px solid #e2e8f0', background: '#f8fafc', flexWrap: 'wrap', alignItems: 'center' }}>
                <span style={{ fontSize: 12.5, color: '#64748b', marginRight: 'auto' }}>Fichier&nbsp;: <code style={{ background: '#e2e8f0', padding: '2px 6px', borderRadius: 4 }}>{current.file}</code></span>
                <button onClick={copy} style={btn('#0071E3')}>{copied ? '✓ Copié' : 'Copier le HTML'}</button>
                <button onClick={download} style={btn('#0f172a')}>Télécharger</button>
                <button onClick={downloadAll} style={btn('ghost')}>Tout télécharger (4)</button>
              </div>
              <iframe title="aperçu" srcDoc={html} style={{ width: '100%', height: 560, border: 'none', background: '#fff' }} />
            </div>
            <p style={{ fontSize: 12, color: '#94a3b8', marginTop: 12, lineHeight: 1.6 }}>
              ⚠️ Vérifiez les infos avant publication. Remplacez <code>[DATE]</code> par la date du jour. Pensez à créer les liens depuis le pied de page du site vers les 4 pages. Cet outil ne remplace pas un conseil juridique ; en cas de doute, consultez un professionnel.
            </p>
          </section>
        </div>

        <Footer />
      </div>
    </>
  )
}

const secTitle = { fontSize: 14, fontWeight: 700, color: '#0071E3', textTransform: 'uppercase', letterSpacing: '.5px', margin: '20px 0 12px', paddingBottom: 6, borderBottom: '1px solid #e2e8f0' }

function btn(primary) {
  if (primary === 'ghost') return { padding: '9px 14px', borderRadius: 8, border: '1px solid #cbd5e1', background: '#fff', color: '#475569', fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }
  return { padding: '9px 14px', borderRadius: 8, border: 'none', background: primary, color: '#fff', fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }
}
