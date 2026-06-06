import Head from 'next/head';

const canonicalUrl = "https://visioflow.fr/mentions-legales";

// ============================================================
// À REMPLIR AVEC LES VRAIES INFORMATIONS UNE FOIS LE SIRET OBTENU
// ============================================================const LEGAL_INFO = {
  // Raison sociale (nom de l'auto-entreprise)
  companyName: "Christian Micillo",  // Ex: "Jean Dupont"

  // Forme juridique (auto-entrepreneur)
  legalForm: "Auto-entrepreneur",

  // SIRET (14 chiffres) - à recevoir par email après inscription
  siret: "101 079 366 00015",  // Ex: "123 456 789 00012"

  // SIREN (9 premiers chiffres du SIRET)
  siren: "101 079 366",  // Ex: "123 456 789"

  // Numéro TVA (auto-entrepreneur en franchise de base = pas de numéro)
  tvaNumber: "FRXXXXXXXXXXXXXXXXXXXXXXXX",  // Laisser tel quel si franchise de TVA

  // Adresse professionnelle
  address: "6 rue Lacretelle, 77340 Pontault-Combault",  // Ex: "12 Rue de la Paix, 75001 Paris"

  // Téléphone
  phone: "+33 6 11 04 58 29",  // Ex: "+33 6 12 34 56 78"

  // Email de contact
  email: "contact@visioflow.fr",

  // Nom du directeur de publication (votre frère)
  directorName: "Christian Micillo",  // Ex: "Jean Dupont"

  // Titre du directeur (fondateur/gérant)
  directorTitle: "Fondateur et gérant",
};

// ============================================================

export default function MentionsLegales() {
  return (
    <>
      <Head>
        <title>Mentions Légales | VisioFlow</title>
        <meta
          name="description"
          content="Mentions légales de VisioFlow - Informations légales conformes à la LCEN et au Code de commerce. Éditeur, hébergeur, propriété intellectuelle, protection des données personnelles."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Mentions Légales | VisioFlow" />
        <meta property="og:description" content="Mentions légales de VisioFlow - Informations légales conformes à la LCEN et au Code de commerce." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="VisioFlow" />

        <style>{`
          *{box-sizing:border-box;margin:0;padding:0}
          body{font-family:'Inter',-apple-system,BlinkMacSystemFont,sans-serif;background:#0f172a;color:#f1f5f9;line-height:1.6}
          .container{max-width:1000px;margin:0 auto;padding:0 20px}
          .hero{min-height:50vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:80px 20px 40px;position:relative}
          .hero-bg{position:absolute;inset:0;background:linear-gradient(135deg,#0f172a 0%,#1e3a5f 50%,#0f172a 100%);opacity:.3}
          .hero-content{position:relative;z-index:1;max-width:800px}
          .hero-title{font-family:'Outfit',sans-serif;font-size:clamp(36px,6vw,56px);font-weight:900;color:#fff;line-height:1.1;margin-bottom:20px;letter-spacing:-2px}
          .hero-sub{font-size:16px;color:#94a3b8;margin-bottom:30px;max-width:600px;margin-left:auto;margin-right:auto}
          .content{padding:60px 20px}
          .section{background:rgba(255,255,255,.02);border-radius:20px;padding:40px;margin-bottom:24px;border:1px solid rgba(255,255,255,.05)}
          .section-title{font-family:'Outfit',sans-serif;font-size:24px;font-weight:700;color:#fff;margin-bottom:20px;display:flex;align-items:center;gap:12px}
          .section-icon{width:32px;height:32px;background:rgba(0,113,227,.15);border-radius:10px;display:flex;align-items:center;justify-content:center;color:#0071E3}
          .section p{color:#94a3b8;margin-bottom:16px;line-height:1.8}
          .section p:last-child{margin-bottom:0}
          .section strong{color:#f1f5f9;font-weight:600}
          .info-list{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:20px;margin:20px 0}
          .info-item{background:rgba(0,113,227,.08);border-radius:12px;padding:20px;border:1px solid rgba(0,113,227,.2)}
          .info-label{color:#0071E3;font-size:13px;font-weight:600;margin-bottom:6px;text-transform:uppercase;letter-spacing:0.5px}
          .info-value{color:#f1f5f9;font-size:15px}
          .nav{background:rgba(15,23,42,.9);backdrop-filter:blur(10px);position:fixed;top:0;left:0;right:0;z-index:100;padding:16px 0;border-bottom:1px solid rgba(255,255,255,.1)}
          .nav-content{display:flex;justify-content:space-between;align-items:center}
          .logo{font-family:'Outfit',sans-serif;font-size:28px;font-weight:900;color:#fff;display:flex;align-items:center;gap:10px;text-decoration:none}
          .logo span{color:#0071E3}
          .nav-links{display:flex;gap:32px}
          .nav-links a{color:#94a3b8;font-size:14px;font-weight:500;text-decoration:none;transition:all .2s}
          .nav-links a:hover{color:#fff}
          .nav-cta{background:#0071E3;color:#fff;padding:10px 24px;border-radius:50px;font-weight:600;font-size:14px;text-decoration:none;transition:all .2s}
          .nav-cta:hover{background:#0056b3;transform:translateY(-2px)}
          .footer{background:#0f172a;padding:60px 20px;border-top:1px solid rgba(255,255,255,.1);text-align:center;color:#64748b;font-size:13px}
          .legal-links{display:flex;gap:20px;justify-content:center;flexWrap:'wrap',marginBottom:'20px'}
          .legal-links a{color:rgba(255,255,255,.5);text-decoration:none;font-size:13px;transition:color .2s}
          .legal-links a:hover{color:#0071E3}
          @media(max-width:768px){.nav-links{display:none}.info-list{grid-template-columns:1fr}}
        `}</style>
      </Head>

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
          <h1 className="hero-title">Mentions Légales</h1>
          <p className="hero-sub">
            Informations légales conformes à la Loi pour la Confiance dans l'Économie Numérique (LCEN)
            et au Code de commerce français.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <div className="container content">
        {/* Éditeur du site */}
        <div className="section">
          <h2 className="section-title">
            <div className="section-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </div>
            Éditeur du site
          </h2>
          <p>
            Le présent site est édité par <strong>{LEGAL_INFO.companyName}</strong>, {LEGAL_INFO.legalForm}.
          </p>
          <div className="info-list">
            <div className="info-item">
              <div className="info-label">Raison sociale / Nom</div>
              <div className="info-value">{LEGAL_INFO.companyName}</div>
            </div>
            <div className="info-item">
              <div className="info-label">Forme juridique</div>
              <div className="info-value">{LEGAL_INFO.legalForm}</div>
            </div>
            <div className="info-item">
              <div className="info-label">SIRET</div>
              <div className="info-value">{LEGAL_INFO.siret}</div>
            </div>
            <div className="info-item">
              <div className="info-label">SIREN</div>
              <div className="info-value">{LEGAL_INFO.siren}</div>
            </div>
            {LEGAL_INFO.tvaNumber && LEGAL_INFO.tvaNumber !== "FRXXXXXXXXXXXXXXXXXXXXXXXX" && (
              <div className="info-item">
                <div className="info-label">Numéro TVA intracommunautaire</div>
                <div className="info-value">{LEGAL_INFO.tvaNumber}</div>
              </div>
            )}
            <div className="info-item">
              <div className="info-label">Adresse</div>
              <div className="info-value">{LEGAL_INFO.address}</div>
            </div>
            <div className="info-item">
              <div className="info-label">Téléphone</div>
              <div className="info-value">{LEGAL_INFO.phone}</div>
            </div>
            <div className="info-item">
              <div className="info-label">Email</div>
              <div className="info-value">{LEGAL_INFO.email}</div>
            </div>
          </div>
        </div>

        {/* Directeur de la publication */}
        <div className="section">
          <h2 className="section-title">
            <div className="section-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            Directeur de la publication
          </h2>
          <p>
            Le directeur de la publication du site visioflow.fr est <strong>{LEGAL_INFO.directorName}</strong>,
            {LEGAL_INFO.directorTitle}.
          </p>
          <p>
            En qualité de responsable de la rédaction, il s'engage à respecter les obligations légales
            et déontologiques inhérentes à la publication en ligne.
          </p>
        </div>

        {/* Hébergeur */}
        <div className="section">
          <h2 className="section-title">
            <div className="section-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8m-4-4v4"/></svg>
            </div>
            Hébergeur du site
          </h2>
          <p>
            Le présent site est hébergé par <strong>Vercel Inc.</strong>, société de droit américain.
          </p>
          <div className="info-list">
            <div className="info-item">
              <div className="info-label">Raison sociale</div>
              <div className="info-value">Vercel Inc.</div>
            </div>
            <div className="info-item">
              <div className="info-label">Adresse</div>
              <div className="info-value">340 S Lemon Ave #4133, Walnut, CA 91789, USA</div>
            </div>
            <div className="info-item">
              <div className="info-label">Contact</div>
              <div className="info-value">support@vercel.com</div>
            </div>
            <div className="info-item">
              <div className="info-label">Site web</div>
              <div className="info-value">https://vercel.com</div>
            </div>
          </div>
        </div>

        {/* Propriété intellectuelle */}
        <div className="section">
          <h2 className="section-title">
            <div className="section-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            Propriété intellectuelle
          </h2>
          <p>
            L'ensemble du contenu de ce site (textes, images, vidéos, logos, graphismes, structure, etc.)
            est protégé par le droit d'auteur et les droits de propriété intellectuelle.
          </p>
          <p>
            Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments
            du site, quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation écrite préalable
            de VisioFlow.
          </p>
          <p>
            Les marques, logos et signes distinctifs figurant sur le site sont déposés par VisioFlow ou ses partenaires.
            Toute reproduction non autorisée constitue une contrefaçon passible de sanctions pénales.
          </p>
        </div>

        {/* Protection des données */}
        <div className="section">
          <h2 className="section-title">
            <div className="section-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            </div>
            Protection des données personnelles
          </h2>
          <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD) du 27 avril 2016
            et à la loi Informatique et Libertés du 6 janvier 1978 modifiée, vous disposez d'un droit d'accès,
            de rectification, de suppression, de limitation, d'opposition et de portabilité de vos données.
          </p>
          <p>
            Pour exercer ces droits, vous pouvez nous contacter à l'adresse email :
            <strong>dpo@visioflow.fr</strong>
          </p>
          <p>
            Les données collectées sur ce site font l'objet d'un traitement informatique dans le but de gérer
            votre relation client, de traiter vos commandes et de vous envoyer des communications commerciales
            (avec votre consentement préalable).
          </p>
          <p>
            Pour plus d'informations, nous vous invitons à consulter notre
            <a href="/politique-confidentialite" style={{color:'#0071E3'}}>Politique de confidentialité</a>.
          </p>
        </div>

        {/* Cookies */}
        <div className="section">
          <h2 className="section-title">
            <div className="section-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
            </div>
            Cookies et traceurs
          </h2>
          <p>
            Le site visioflow.fr utilise des cookies et technologies similaires pour améliorer votre expérience
            de navigation, analyser l'audience du site et vous proposer des services personnalisés.
          </p>
          <p>
            Vous pouvez paramétrer vos préférences en matière de cookies via notre
            <a href="/politique-cookies" style={{color:'#0071E3'}}>Politique de cookies</a>
            et le bandeau de consentement présent sur le site.
          </p>
          <p>
            Conformément à la réglementation, votre consentement est recueilli avant le dépôt de cookies
            non strictement nécessaires au fonctionnement du site.
          </p>
        </div>

        {/* Liens hypertextes */}
        <div className="section">
          <h2 className="section-title">
            <div className="section-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
            </div>
            Liens hypertextes
          </h2>
          <p>
            Ce site contient des liens hypertextes vers d'autres sites internet. VisioFlow ne peut être tenu
            responsable du contenu de ces sites externes, ni des modifications qu'ils pourraient subir.
          </p>
          <p>
            L'utilisateur qui consulte ces sites le fait sous sa seule responsabilité. VisioFlow ne garantit
            pas la disponibilité, l'exactitude ou l'exhaustivité des informations accessibles via ces liens.
          </p>
        </div>

        {/* Litiges */}
        <div className="section">
          <h2 className="section-title">
            <div className="section-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            </div>
            Litiges et médiation
          </h2>
          <p>
            En cas de litige lié à l'utilisation de ce site ou aux services proposés, vous êtes invité
            à contacter en premier lieu notre service client à l'adresse <strong>{LEGAL_INFO.email}</strong>.
          </p>
          <p>
            Si le litige ne peut être résolu à l'amiable, vous avez la possibilité de saisir le tribunal
            compétent conformément aux dispositions du Code de commerce et du Code de consommation.
          </p>
          <p>
            En cas de litige de consommation, vous pouvez également recourir à un médiateur de la consommation
            conforme aux dispositions de l'article L. 616-1 du Code de consommation.
          </p>
        </div>

        {/* Dernière mise à jour */}
        <div className="section">
          <h2 className="section-title">
            <div className="section-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            Dernière mise à jour
          </h2>
          <p>
            Les présentes mentions légales ont été mises à jour le <strong>{new Date().toLocaleDateString('fr-FR', {day: 'numeric', month: 'long', year: 'numeric'})}</strong>.
            VisioFlow se réserve le droit de modifier ces mentions à tout moment. Nous vous invitons
            à les consulter régulièrement.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p style={{fontFamily:'Outfit, sans-serif',fontSize:'22px',fontWeight:900,color:'#fff',marginBottom:'8px'}}>
            Visio<span style={{color:'#0071E3'}}>flow</span>
          </p>
          <p style={{color:'rgba(255,255,255,.6)',marginBottom:'24px'}}>
            Création de sites web pour restaurateurs avec commandes en ligne, livrés en 48 heures.
          </p>
          <div className="legal-links">
            <a href="/mentions-legales">Mentions légales</a>
            <a href="/politique-confidentialite">Politique de confidentialité</a>
            <a href="/cgu">Conditions générales d'utilisation</a>
            <a href="/politique-cookies">Politique de cookies</a>
            <a href="/cgv">Conditions générales de vente</a>
          </div>
          <p style={{color:'rgba(255,255,255,.3)'}}>© {new Date().getFullYear()} VisioFlow — Tous droits réservés.</p>
        </div>
      </footer>
    </>
  );
}
