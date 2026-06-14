import Head from 'next/head';

const canonicalUrl = "https://visioflow.fr/politique-cookies";

export default function PolitiqueCookies() {
  return (
    <>
      <Head>
        <title>Politique de Cookies | VisioFlow</title>
        <meta
          name="description"
          content="Politique de cookies de VisioFlow. Découvrez les cookies que nous utilisons, leurs finalités et comment configurer vos préférences."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Politique de Cookies | VisioFlow" />
        <meta property="og:description" content="Politique de cookies de VisioFlow." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="VisioFlow" />

        <style>{`
          #vflp, #vflp *{box-sizing:border-box;margin:0;padding:0}
          #vflp{min-height:100vh;font-family:'Inter Tight',-apple-system,BlinkMacSystemFont,sans-serif;background:#ffffff;color:#1e293b;line-height:1.6}
          #vflp .container{max-width:1000px;margin:0 auto;padding:0 20px}
          #vflp .hero{min-height:50vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:80px 20px 40px;position:relative;background:#ffffff;overflow:hidden}
          #vflp .hero-bg{position:absolute;inset:0;background:linear-gradient(135deg,#ffffff 0%,#dbeafe 50%,#ffffff 100%);opacity:1}
          #vflp .hero-content{position:relative;z-index:1;max-width:800px}
          #vflp .hero-title{font-family:'Fraunces',sans-serif;font-size:clamp(36px,6vw,56px);font-weight:900;color:#0f172a;line-height:1.1;margin-bottom:20px;letter-spacing:-2px}
          #vflp .hero-sub{font-size:16px;color:#475569;margin-bottom:30px;max-width:600px;margin-left:auto;margin-right:auto}
          #vflp .content{padding:60px 20px}
          #vflp .section{background:rgba(15,23,42,.025);border-radius:20px;padding:40px;margin-bottom:24px;border:1px solid rgba(15,23,42,.08)}
          #vflp .section-title{font-family:'Fraunces',sans-serif;font-size:24px;font-weight:700;color:#0f172a;margin-bottom:20px;display:flex;align-items:center;gap:12px}
          #vflp .section-icon{width:32px;height:32px;background:rgba(0,113,227,.15);border-radius:10px;display:flex;align-items:center;justify-content:center;color:#0071E3}
          #vflp .section p{color:#475569;margin-bottom:16px;line-height:1.8}
          #vflp .section p:last-child{margin-bottom:0}
          #vflp .section strong{color:#0f172a;font-weight:600}
          #vflp .section ul{margin:16px 0;padding-left:24px}
          #vflp .section li{color:#475569;margin-bottom:10px;line-height:1.8}
          #vflp .cookie-table{width:100%;border-collapse:collapse;margin:20px 0;background:rgba(0,113,227,.05);border-radius:12px;overflow:hidden}
          #vflp .cookie-table th{background:rgba(0,113,227,.1);color:#0f172a;padding:16px;text-align:left;font-weight:600;border-bottom:1px solid rgba(0,113,227,.2)}
          #vflp .cookie-table td{padding:16px;color:#475569;border-bottom:1px solid rgba(15,23,42,.06)}
          #vflp .cookie-table tr:last-child td{border-bottom:none}
          #vflp .cookie-category{background:rgba(0,113,227,.1);color:#0071E3;font-weight:600;padding:20px;margin:24px 0 16px;border-radius:10px;font-family:'Fraunces',sans-serif;font-size:18px}
          #vflp .nav{height:auto;background:rgba(255,255,255,.85);backdrop-filter:blur(10px);position:fixed;top:0;left:0;right:0;z-index:100;padding:16px 0;border-bottom:1px solid rgba(15,23,42,.08)}
          #vflp .nav-content{display:flex;justify-content:space-between;align-items:center}
          #vflp .logo{font-family:'Fraunces',sans-serif;font-size:28px;font-weight:900;color:#0f172a;display:flex;align-items:center;gap:10px;text-decoration:none}
          #vflp .logo span{color:#0071E3}
          #vflp .nav-links{display:flex;gap:32px}
          #vflp .nav-links a{color:#475569;font-size:14px;font-weight:500;text-decoration:none;transition:all .2s}
          #vflp .nav-links a:hover{color:#0f172a}
          #vflp .nav-cta{background:#0071E3;color:#fff;padding:10px 24px;border-radius:50px;font-weight:600;font-size:14px;text-decoration:none;transition:all .2s}
          #vflp .nav-cta:hover{background:#0056b3;transform:translateY(-2px)}
          #vflp .footer{background:#f8fafc;padding:60px 20px;border-top:1px solid rgba(15,23,42,.08);text-align:center;color:#64748b;font-size:13px}
          #vflp .legal-links{display:flex;gap:20px;justify-content:center;flex-wrap:wrap;margin-bottom:20px}
          #vflp .legal-links a{color:#64748b;text-decoration:none;font-size:13px;transition:color .2s}
          #vflp .legal-links a:hover{color:#0071E3}
          @media(max-width:768px){#vflp .nav-links{display:none} #vflp .cookie-table{font-size:13px} #vflp .cookie-table th,#vflp .cookie-table td{padding:12px}}
        `}</style>
      </Head>


      <div id="vflp">
      {/* Navigation */}
      <nav className="nav">
        <div className="container nav-content">
          <a href="/" className="logo"><img src="/logo.svg" alt="VisioFlow" width="32" height="32" />Visio<span>flow</span></a>
          <div className="nav-links">
            <a href="/landing">Comment ça marche</a>
            <a href="/tarifs">Tarifs</a>
            <a href="/temoignages">Témoignages</a>
            <a href="/a-propos">À propos</a>
          </div>
          <a href="/paiement" className="nav-cta">Commencer →</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-content">
          <h1 className="hero-title">Politique de Cookies</h1>
          <p className="hero-sub">
            Découvrez les cookies que nous utilisons sur notre site et comment configurer vos préférences.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <div className="container content">
        {/* Qu'est-ce qu'un cookie */}
        <div className="section">
          <h2 className="section-title">
            <div className="section-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg>
            </div>
            Qu'est-ce qu'un cookie ?
          </h2>
          <p>
            Un cookie est un petit fichier texte stocké sur votre terminal (ordinateur, tablette,
            mobile) lorsque vous visitez un site web. Il permet au site de mémoriser vos actions
            et préférences (identifiant de connexion, langue, choix de police, etc.) pendant une
            durée déterminée.
          </p>
          <p>
            Les cookies sont gérés par votre navigateur web et peuvent être supprimés ou bloqués
            à tout moment via les paramètres de votre navigateur.
          </p>
          <p>
            Conformément à la réglementation française et européenne (RGPD et ePrivacy Directive),
            nous vous informons sur l'utilisation des cookies sur notre site et vous offrons
            la possibilité de les gérer.
          </p>
        </div>

        {/* Types de cookies */}
        <div className="section">
          <h2 className="section-title">
            <div className="section-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
            </div>
            Types de cookies utilisés
          </h2>

          <div className="cookie-category">Cookies strictement nécessaires</div>
          <p>
            Ces cookies sont indispensables au bon fonctionnement du site. Ils permettent notamment
            de naviguer sur le site et d'en utiliser les fonctionnalités essentielles. Ils ne
            nécessitent pas votre consentement préalable conformément à la réglementation.
          </p>

          <table className="cookie-table">
            <thead>
              <tr>
                <th>Nom du cookie</th>
                <th>Finalité</th>
                <th>Durée</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>firebase:authUser<br />Firebase LocalStorage / IndexedDB</td>
                <td>Maintien de la session d'authentification (Firebase Auth) — nécessaire pour accéder à votre espace client et à votre tableau de bord</td>
                <td>Session / 1 an</td>
              </tr>
              <tr>
                <td>vf-theme</td>
                <td>Mémorisation de votre préférence d'affichage (thème clair/sombre) — déposé via le stockage local du navigateur</td>
                <td>Persistant (localStorage)</td>
              </tr>
              <tr>
                <td>cookie_consent</td>
                <td>Mémorisation de votre choix en matière de consentement aux cookies</td>
                <td>13 mois</td>
              </tr>
              <tr>
                <td>Cookies techniques de session</td>
                <td>Reconnaissance du visiteur d'une page à l'autre, sécurisation des formulaires et maintien du panier</td>
                <td>Session</td>
              </tr>
            </tbody>
          </table>

          <div className="cookie-category">Cookies de mesure d'audience et de publicité</div>
          <p>
            À ce jour, notre site <strong>n'utilise pas de cookies de mesure d'audience, de
            publicité ou de ciblage</strong> tiers (type Google Analytics, Google Ads, Meta Pixel,
            LinkedIn Insight Tag, etc.). Le cas échéant, ces traceurs ne seraient déposés qu'après
            recueil de votre consentement exprès via notre bandeau de gestion des cookies, et la
            présente politique serait mise à jour en conséquence.
          </p>
        </div>

        {/* Gestion des cookies */}
        <div className="section">
          <h2 className="section-title">
            <div className="section-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
            </div>
            Gestion de votre consentement
          </h2>
          <p>
            Lors de votre première visite sur notre site, un bandeau de consentement apparaît
            et vous invite à accepter ou refuser les cookies non strictement nécessaires.
          </p>
          <p>
            Vous pouvez à tout moment modifier vos préférences en matière de cookies en cliquant
            sur le lien "Gérer les cookies" présent en bas de chaque page ou via les paramètres
            de votre compte.
          </p>
          <p>
            Votre choix sera conservé pendant une durée d'un an. Passé ce délai, nous vous
            demanderons à nouveau votre consentement.
          </p>
        </div>

        {/* Paramétrage du navigateur */}
        <div className="section">
          <h2 className="section-title">
            <div className="section-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
            </div>
            Paramétrage de votre navigateur
          </h2>
          <p>
            Vous pouvez également configurer votre navigateur pour refuser ou supprimer les cookies.
            Les procédures varient selon les navigateurs :
          </p>

          <h3 style={{fontFamily:'Outfit, sans-serif',fontSize:'18px',fontWeight:700,color:'#0f172a',margin:'24px 0 12px'}}>Google Chrome</h3>
          <ul>
            <li>Menu → Paramètres → Confidentialité et sécurité → Cookies et autres données des sites</li>
            <li>Vous pouvez choisir de bloquer les cookies de tiers ou tous les cookies</li>
          </ul>

          <h3 style={{fontFamily:'Outfit, sans-serif',fontSize:'18px',fontWeight:700,color:'#0f172a',margin:'24px 0 12px'}}>Mozilla Firefox</h3>
          <ul>
            <li>Menu → Options → Vie privée et sécurité → Cookies et données de site</li>
            <li>Cochez "Bloquer les cookies et les données de site" pour désactiver les cookies</li>
          </ul>

          <h3 style={{fontFamily:'Outfit, sans-serif',fontSize:'18px',fontWeight:700,color:'#0f172a',margin:'24px 0 12px'}}>Safari</h3>
          <ul>
            <li>Menu Safari → Préférences → Confidentialité</li>
            <li>Cochez "Bloquer les cookies" pour désactiver les cookies</li>
          </ul>

          <h3 style={{fontFamily:'Outfit, sans-serif',fontSize:'18px',fontWeight:700,color:'#0f172a',margin:'24px 0 12px'}}>Microsoft Edge</h3>
          <ul>
            <li>Menu → Paramètres → Cookies et autorisations de site</li>
            <li>Gérez vos préférences en matière de cookies</li>
          </ul>

          <p style={{margin:'24px 0 0',padding:'16px',background:'rgba(0,113,227,.1)',borderLeft:'3px solid #0071E3',borderRadius:'0 10px 10px 0'}}>
            <strong>Attention :</strong> La désactivation des cookies peut affecter le bon fonctionnement
            de certaines fonctionnalités de notre site (connexion, panier, personnalisation, etc.).
          </p>
        </div>

        {/* Tiers */}
        <div className="section">
          <h2 className="section-title">
            <div className="section-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/><path d="M2 14h20"/><path d="M6 18h12"/><path d="M2 22h20"/></svg>
            </div>
            Cookies et services déposés par des tiers
          </h2>
          <p>
            Certains éléments techniques strictement nécessaires au fonctionnement du site font
            appel à des tiers agissant pour notre compte :
          </p>
          <ul>
            <li>
              <strong>Google / Firebase</strong> : infrastructure d'authentification et de base de
              données nécessaire au fonctionnement de votre espace client. Politique de confidentialité :
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{color:'#0071E3'}}>policies.google.com/privacy</a>
            </li>
            <li>
              <strong>Stripe</strong> : prestataire de paiement sécurisé. Politique de confidentialité :
              <a href="https://stripe.com/fr/privacy" target="_blank" rel="noopener noreferrer" style={{color:'#0071E3'}}>stripe.com/fr/privacy</a>
            </li>
            <li>
              <strong>Vercel</strong> : hébergeur du site. Politique de confidentialité :
              <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" style={{color:'#0071E3'}}>vercel.com/legal/privacy-policy</a>
            </li>
          </ul>
          <p>
            Ces prestataires interviennent en qualité de sous-traitants et n'utilisent les données
            que pour les finalités que nous leur assignons. Le site n'utilise pas de traceurs
            publicitaires ou de mesure d'audience tiers soumis à consentement.
          </p>
        </div>

        {/* Évolution */}
        <div className="section">
          <h2 className="section-title">
            <div className="section-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>
            </div>
            Évolution de la politique
          </h2>
          <p>
            Nous nous réservons le droit de modifier cette politique de cookies à tout moment afin
            de tenir compte des évolutions technologiques, réglementaires ou de l'ajout de nouveaux
            services sur notre site.
          </p>
          <p>
            En cas de modification importante, nous en informerons les utilisateurs via une
            notification sur le site. Nous vous invitons à consulter régulièrement cette page.
          </p>
        </div>

        {/* Contact */}
        <div className="section">
          <h2 className="section-title">
            <div className="section-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </div>
            Contact
          </h2>
          <p>
            Pour toute question relative à l'utilisation des cookies sur notre site, vous pouvez
            nous contacter à l'adresse :
            <a href="mailto:dpo@visioflow.fr" style={{color:'#0071E3'}}>dpo@visioflow.fr</a>
          </p>
          <p>
            La présente politique de cookies a été mise à jour le
            <strong>{new Date().toLocaleDateString('fr-FR', {day: 'numeric', month: 'long', year: 'numeric'})}</strong>.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p style={{fontFamily:'Outfit, sans-serif',fontSize:'22px',fontWeight:900,color:'#0f172a',marginBottom:'8px'}}>
            Visio<span style={{color:'#0071E3'}}>flow</span>
          </p>
          <p style={{color:'#475569',marginBottom:'24px'}}>
            Création de sites web pour restaurateurs avec commandes en ligne, livrés en 48 heures.
          </p>
          <div className="legal-links">
            <a href="/mentions-legales">Mentions légales</a>
            <a href="/politique-confidentialite">Politique de confidentialité</a>
            <a href="/cgu">Conditions générales d'utilisation</a>
            <a href="/politique-cookies">Politique de cookies</a>
            <a href="/cgv">Conditions générales de vente</a>
          </div>
          <p style={{color:'#94a3b8'}}>© {new Date().getFullYear()} VisioFlow — Tous droits réservés.</p>
        </div>
      </footer>
      </div>
    </>
  );
}