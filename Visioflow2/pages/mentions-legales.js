import Head from 'next/head';

const canonicalUrl = "https://visioflow.fr/mentions-legales";

// ============================================================
// À REMPLIR AVEC LES VRAIES INFORMATIONS UNE FOIS LE SIRET OBTENU
// ============================================================
const LEGAL_INFO = {
  // Raison sociale (nom de l'auto-entreprise)
  companyName: "Christian Micillo",  // Ex: "Jean Dupont"

  // Forme juridique (auto-entrepreneur)
  legalForm: "Auto-entrepreneur (micro-entreprise)",

  // SIRET (14 chiffres) - à recevoir par email après inscription
  siret: "101 079 366 00015",  // Ex: "123 456 789 00012"

  // SIREN (9 premiers chiffres du SIRET)
  siren: "101 079 366",  // Ex: "123 456 789"

  // Code APE / NAF (activité principale)
  apeCode: "62 01 Z — Programmation informatique",

  // Numéro de gestion CMA / CCI (répertoire des métiers / greffe)
  rmNumber: "À compléter (RCS de Meaux)",

  // Capital social (non applicable pour une auto-entreprise)
  capital: "Non applicable (auto-entrepreneur)",

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
          #vflp .info-list{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:20px;margin:20px 0}
          #vflp .info-item{background:rgba(0,113,227,.08);border-radius:12px;padding:20px;border:1px solid rgba(0,113,227,.2)}
          #vflp .info-label{color:#0071E3;font-size:13px;font-weight:600;margin-bottom:6px;text-transform:uppercase;letter-spacing:0.5px}
          #vflp .info-value{color:#0f172a;font-size:15px}
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
          @media(max-width:768px){#vflp .nav-links{display:none} #vflp .info-list{grid-template-columns:1fr}}
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
            <div className="info-item">
              <div className="info-label">Code APE / NAF</div>
              <div className="info-value">{LEGAL_INFO.apeCode}</div>
            </div>
            <div className="info-item">
              <div className="info-label">Immatriculation (RCS / RM)</div>
              <div className="info-value">{LEGAL_INFO.rmNumber}</div>
            </div>
            <div className="info-item">
              <div className="info-label">Capital social</div>
              <div className="info-value">{LEGAL_INFO.capital}</div>
            </div>
            {LEGAL_INFO.tvaNumber && LEGAL_INFO.tvaNumber !== "FRXXXXXXXXXXXXXXXXXXXXXXXX" && (
              <div className="info-item">
                <div className="info-label">Numéro TVA intracommunautaire</div>
                <div className="info-value">{LEGAL_INFO.tvaNumber}</div>
              </div>
            )}
            <div className="info-item">
              <div className="info-label">Régime TVA</div>
              <div className="info-value">Franchise en base de TVA (art. 293 B du CGI)</div>
            </div>
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
            <strong>dpo@visioflow.fr</strong> ou par courrier à l'adresse postale de l'éditeur.
          </p>
          <p>
            Vous avez également la possibilité d'introduire une réclamation auprès de l'autorité française
            de protection des données, la <strong>CNIL</strong> (3 place de Fontenoy — TSA 80715 —
            75334 Paris Cedex 07 ; <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" style={{color:'#0071E3'}}>www.cnil.fr</a>).
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
            Litiges, médiation et réclamations
          </h2>
          <p>
            En cas de litige, vous êtes invité à contacter en premier lieu notre service client à
            l'adresse <strong>{LEGAL_INFO.email}</strong>.
          </p>
          <p>
            Conformément aux articles L. 612-1 et suivants du Code de la consommation, le Client
            consommateur peut recourir gratuitement à un médiateur de la consommation en vue de la
            résolution amiable d'un litige l'opposant à VisioFlow.
          </p>
          <p>
            Le médiateur de la consommation compétent est :
            <strong> Médiateur des entreprises</strong> — 12 square Desnouettes, 75015 Paris.
            Site web : <a href="https://www.mediateurdesentreprises.fr" target="_blank" rel="noopener noreferrer" style={{color:'#0071E3'}}>www.mediateurdesentreprises.fr</a>.
            La saisine s'effectue en ligne, après une tentative de résolution préalable auprès de
            notre service client.
          </p>
          <p>
            Conformément à l'article L. 616-3 du Code de la consommation, vous pouvez également
            utiliser la <strong>plateforme européenne de règlement en ligne des litiges (RLL)</strong>,
            accessible à l'adresse :
            <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" style={{color:'#0071E3'}}>https://ec.europa.eu/consumers/odr</a>.
          </p>
          <p>
            En l'absence de résolution amiable, le litige sera porté devant les tribunaux français
            compétents.
          </p>
        </div>

        {/* Indication professionnelle */}
        <div className="section">
          <h2 className="section-title">
            <div className="section-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
            </div>
            Indications professionnelles
          </h2>
          <p>
            L'éditeur exerce l'activité de conception et de développement de sites internet sous le
            statut d'auto-entrepreneur (micro-entreprise). Il est immatriculé sous le SIRET
            {LEGAL_INFO.siret} et relève du régime de la micro-entreprise, placé en franchise en
            base de TVA (article 293 B du Code général des impôts).
          </p>
          <p>
            Le professionnel est couvert par une assurance responsabilité civile professionnelle (RC Pro)
            adaptée à son activité. Le détail des garanties peut être communiqué sur simple demande.
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
