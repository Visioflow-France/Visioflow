import Head from 'next/head';

const canonicalUrl = "https://visioflow.fr/cgu";

export default function CGU() {
  return (
    <>
      <Head>
        <title>Conditions Générales d'Utilisation | VisioFlow</title>
        <meta
          name="description"
          content="Conditions générales d'utilisation de VisioFlow. Règles d'utilisation du site web, obligations des utilisateurs et clauses de responsabilité."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Conditions Générales d'Utilisation | VisioFlow" />
        <meta property="og:description" content="Conditions générales d'utilisation de VisioFlow." />
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
          #vflp .section ol{margin:16px 0;padding-left:24px}
          #vflp .section ol li{color:#475569;margin-bottom:10px;line-height:1.8}
          #vflp .article-title{font-family:'Fraunces',sans-serif;font-size:20px;font-weight:600;color:#0f172a;margin:24px 0 12px;padding-left:12px;border-left:3px solid #0071E3}
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
          @media(max-width:768px){#vflp .nav-links{display:none}}
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
            <a href="/a-propos">À propos</a>
          </div>
          <a href="/paiement" className="nav-cta">Commencer →</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-content">
          <h1 className="hero-title">Conditions Générales d'Utilisation</h1>
          <p className="hero-sub">
            Règles régissant l'utilisation du site web visioflow.fr et des services proposés par VisioFlow.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <div className="container content">
        {/* Introduction */}
        <div className="section">
          <h2 className="section-title">
            <div className="section-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
            </div>
            Préambule
          </h2>
          <p>
            Les présentes Conditions Générales d'Utilisation (ci-après dénommées "CGU") régissent
            l'utilisation du site web <strong>visioflow.fr</strong> et des services proposés par
            <strong>Christian Micillo</strong>, auto-entrepreneur, éditeur du site VisioFlow
            (ci-après dénommé "le Prestataire").
          </p>
          <p>
            L'accès et l'utilisation du site impliquent l'acceptation pleine et entière de ces CGU.
            Si vous n'acceptez pas ces conditions, vous devez vous abstenir d'utiliser le site.
          </p>
          <p>
            VisioFlow se réserve le droit de modifier ces CGU à tout moment. Les modifications entreront
            en vigueur dès leur mise en ligne sur le site. Nous vous invitons donc à consulter régulièrement
            cette page.
          </p>
        </div>

        {/* Article 1 - Définitions */}
        <div className="section">
          <h2 className="section-title">
            <div className="section-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
            </div>
            Article 1 - Définitions
          </h2>
          <p>
            Dans le cadre des présentes CGU, les termes suivants ont la signification suivante :
          </p>
          <ul>
            <li>
              <strong>Site</strong> : Désigne l'ensemble des pages et services accessibles via l'URL
              <a href="https://visioflow.fr" style={{color:'#0071E3'}}>https://visioflow.fr</a>
            </li>
            <li>
              <strong>Utilisateur</strong> : Désigne toute personne physique ou morale qui accède
              au Site et utilise les Services
            </li>
            <li>
              <strong>Client</strong> : Désigne un Utilisateur qui a passé une commande auprès du Prestataire
            </li>
            <li>
              <strong>Compte</strong> : Désigne l'espace personnel de l'Utilisateur sur le Site
            </li>
            <li>
              <strong>Services</strong> : Désigne l'ensemble des services proposés par le Prestataire
              sur le Site (création de sites web, hébergement, support, etc.)
            </li>
            <li>
              <strong>Contenu</strong> : Désigne l'ensemble des éléments présents sur le Site
              (textes, images, vidéos, logos, etc.)
            </li>
          </ul>
        </div>

        {/* Article 2 - Objet */}
        <div className="section">
          <h2 className="section-title">
            <div className="section-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            </div>
            Article 2 - Objet
          </h2>
          <p>
            Les présentes CGU ont pour objet de définir les conditions dans lesquelles le Prestataire
            met à la disposition des Utilisateurs le Site et les Services.
          </p>
          <p>
            Elles définissent également les droits et obligations des parties dans le cadre de
            l'utilisation du Site et des Services.
          </p>
        </div>

        {/* Article 3 - Accès au site */}
        <div className="section">
          <h2 className="section-title">
            <div className="section-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            </div>
            Article 3 - Accès au site
          </h2>
          <h3 className="article-title">3.1 Disponibilité du site</h3>
          <p>
            Le Site est accessible gratuitement à tout Utilisateur disposant d'un accès à Internet.
            L'accès aux Services payants nécessite la souscription à un abonnement ou le paiement
            d'un forfait.
          </p>
          <p>
            Le Prestataire s'efforce de maintenir le Site accessible 24h/24 et 7j/7, mais ne peut
            garantir cette accessibilité continue. Des interruptions peuvent survenir pour cause de
            maintenance, de mise à jour ou de cas de force majeure.
          </p>

          <h3 className="article-title">3.2 Conditions techniques</h3>
          <p>
            L'Utilisateur reconnaît disposer des compétences et moyens nécessaires pour accéder
            et utiliser le Site. Il est notamment responsable de :
          </p>
          <ul>
            <li>La configuration de son matériel informatique</li>
            <li>La performance de sa connexion Internet</li>
            <li>La compatibilité de son navigateur web</li>
            <li>La mise à jour de ses logiciels de sécurité</li>
          </ul>

          <h3 className="article-title">3.3 Restrictions d'accès</h3>
          <p>
            Le Prestataire se réserve le droit de refuser ou de suspendre l'accès au Site à tout
            Utilisateur qui :
          </p>
          <ul>
            <li>Ne respecte pas les présentes CGU</li>
            <li>Fournit des informations fausses ou inexactes</li>
            <li>Utilise le Site à des fins illicites ou frauduleuses</li>
            <li>Porte atteinte aux droits du Prestataire ou d'autres Utilisateurs</li>
          </ul>
        </div>

        {/* Article 4 - Création de compte */}
        <div className="section">
          <h2 className="section-title">
            <div className="section-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </div>
            Article 4 - Création de compte
          </h2>
          <h3 className="article-title">4.1 Obligation de fourniture d'informations exactes</h3>
          <p>
            Pour créer un Compte, l'Utilisateur doit fournir des informations personnelles exactes,
            complètes et à jour. Toute fausse déclaration peut entraîner la suspension ou la
            suppression du Compte.
          </p>

          <h3 className="article-title">4.2 Sécurité du compte</h3>
          <p>
            L'Utilisateur est responsable de la confidentialité de ses identifiants de connexion.
            Il s'engage à ne pas les communiquer à des tiers et à informer immédiatement le Prestataire
            en cas d'utilisation non autorisée de son Compte.
          </p>
          <p>
            Le Prestataire ne pourra être tenu responsable des dommages résultant de l'utilisation
            frauduleuse du Compte de l'Utilisateur.
          </p>

          <h3 className="article-title">4.3 Unicité du compte</h3>
          <p>
            Chaque Utilisateur ne peut créer qu'un seul Compte. La création de comptes multiples
            est interdite et peut entraîner la suppression de tous les comptes concernés.
          </p>
        </div>

        {/* Article 5 - Utilisation du site */}
        <div className="section">
          <h2 className="section-title">
            <div className="section-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            </div>
            Article 5 - Utilisation du site
          </h2>
          <h3 className="article-title">5.1 Utilisation conforme</h3>
          <p>
            L'Utilisateur s'engage à utiliser le Site de manière conforme aux présentes CGU,
            aux lois et réglementations en vigueur, et aux règles de l'art.
          </p>

          <h3 className="article-title">5.2 Utilisations interdites</h3>
          <p>
            Il est interdit à l'Utilisateur de :
          </p>
          <ul>
            <li>Utiliser le Site à des fins frauduleuses, illégales ou abusives</li>
            <li>Tenter de compromettre la sécurité du Site ou d'accéder à des zones non autorisées</li>
            <li>Introduire des virus, malwares ou tout code nuisible</li>
            <li>Reproduire, modifier ou exploiter le Contenu sans autorisation</li>
            <li>Envoyer des messages non sollicités (spam) ou des contenus inappropriés</li>
            <li>Porter atteinte aux droits d'autrui (propriété intellectuelle, vie privée, etc.)</li>
            <li>Contrefaire la marque ou l'identité du Prestataire</li>
            <li>Utiliser des robots ou scripts pour automatiser l'accès au Site</li>
          </ul>

          <h3 className="article-title">5.3 Contenu publié par les utilisateurs</h3>
          <p>
            L'Utilisateur reste propriétaire du contenu qu'il publie sur le Site. Il garantit
            disposer de tous les droits nécessaires sur ce contenu et autorise le Prestataire à
            l'utiliser dans le cadre de la prestation des Services.
          </p>
          <p>
            L'Utilisateur s'engage à ne pas publier de contenu :
          </p>
          <ul>
            <li>Illicite, diffamatoire, injurieux ou pornographique</li>
            <li>Portant atteinte aux droits de tiers</li>
            <li>Incitant à la haine, à la violence ou à la discrimination</li>
            <li>Violant la législation en vigueur</li>
          </ul>
        </div>

        {/* Article 6 - Données personnelles */}
        <div className="section">
          <h2 className="section-title">
            <div className="section-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            </div>
            Article 6 - Données personnelles
          </h2>
          <p>
            Le Prestataire collecte et traite les données personnelles des Utilisateurs conformément
            au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.
          </p>
          <p>
            Pour plus d'informations sur la collecte, l'utilisation et la protection de vos données
            personnelles, nous vous invitons à consulter notre
            <a href="/politique-confidentialite" style={{color:'#0071E3'}}>Politique de confidentialité</a>.
          </p>
        </div>

        {/* Article 7 - Propriété intellectuelle */}
        <div className="section">
          <h2 className="section-title">
            <div className="section-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            Article 7 - Propriété intellectuelle
          </h2>
          <h3 className="article-title">7.1 Contenu du site</h3>
          <p>
            L'ensemble du Contenu du Site est protégé par le droit d'auteur et les droits de
            propriété intellectuelle. Ces droits appartiennent au Prestataire ou à ses partenaires.
          </p>
          <p>
            Toute reproduction, représentation, modification, diffusion ou exploitation du Contenu,
            même partielle, est interdite sans l'autorisation écrite préalable du Prestataire.
          </p>

          <h3 className="article-title">7.2 Marques et logos</h3>
          <p>
            Les marques, logos et signes distinctifs figurant sur le Site sont des marques déposées
            du Prestataire ou de ses partenaires. Toute utilisation non autorisée constitue une
            contrefaçon passible de sanctions pénales et civiles.
          </p>

          <h3 className="article-title">7.3 Sites créés pour les clients</h3>
          <p>
            Les sites web créés par le Prestataire pour ses Clients demeurent la propriété du Prestataire
            jusqu'au paiement intégral de la commande. Une fois le paiement effectué, le Client acquiert
            les droits d'utilisation du site créé conformément aux Conditions Générales de Vente.
          </p>

          <h3 className="article-title">7.4 Signalement de contenu illicite (article 6 I-5 de la LCEN)</h3>
          <p>
            Le Prestataire, en qualité d'hébergeur des sites créés pour ses Clients, met à disposition
            un dispositif facilement accessible permettant à toute personne de signaler un contenu
            manifestement illicite (notamment atteinte aux droits de la personne, apologie des crimes
            contre l'humanité, incitation à la haine, contenus pédopornographiques, contrefaçon).
          </p>
          <p>
            Tout signalement doit être adressé à l'adresse <a href="mailto:contact@visioflow.fr" style={{color:'#0071E3'}}>contact@visioflow.fr</a>,
            en précisant : l'identité du notifiant, la description des faits litigieux et leur localisation
            sur le site, les motifs pour lesquels le contenu doit être retiré, ainsi que les copies des
            échanges éventuels avec l'auteur du contenu. Le Prestataire procédera, le cas échéant, au
            retrait rapide du contenu manifestement illicite dans les conditions prévues par la loi.
          </p>
        </div>

        {/* Article 8 - Responsabilité */}
        <div className="section">
          <h2 className="section-title">
            <div className="section-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            </div>
            Article 8 - Responsabilité
          </h2>
          <h3 className="article-title">8.1 Responsabilité du Prestataire</h3>
          <p>
            Le Prestataire s'engage à fournir les Services avec diligence et selon les règles de l'art.
            Sa responsabilité ne pourra être engagée que pour :
          </p>
          <ul>
            <li>Les dommages directs résultant d'une faute prouvée du Prestataire</li>
            <li>Le non-respect des obligations légales et contractuelles</li>
          </ul>
          <p>
            Le Prestataire ne pourra être tenu responsable des dommages indirects, immatériels ou
            imprévisibles.
          </p>

          <h3 className="article-title">8.2 Limitations de responsabilité</h3>
          <p>
            Le Prestataire ne pourra être tenu responsable :
          </p>
          <ul>
            <li>Des pertes de données ou dysfonctionnements liés à la connexion Internet</li>
            <li>Des dommages causés par l'utilisation du Site contraire aux CGU</li>
            <li>Des contenus publiés par les Utilisateurs</li>
            <li>Des liens hypertextes vers des sites tiers</li>
            <li>Des cas de force majeure ou de faits d'un tiers</li>
          </ul>

          <h3 className="article-title">8.3 Responsabilité de l'Utilisateur</h3>
          <p>
            L'Utilisateur est seul responsable de l'utilisation qu'il fait du Site et des conséquences
            qui en découlent. Il s'engage à indemniser le Prestataire contre toute réclamation résultant
            de l'utilisation non conforme du Site.
          </p>
        </div>

        {/* Article 9 - Cookies */}
        <div className="section">
          <h2 className="section-title">
            <div className="section-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
            </div>
            Article 9 - Cookies
          </h2>
          <p>
            Le Site utilise des cookies et technologies similaires pour améliorer l'expérience de
            navigation et analyser l'audience.
          </p>
          <p>
            Pour plus d'informations sur les cookies utilisés et vos options de paramétrage,
            consultez notre <a href="/politique-cookies" style={{color:'#0071E3'}}>Politique de cookies</a>.
          </p>
        </div>

        {/* Article 10 - Modification des CGU */}
        <div className="section">
          <h2 className="section-title">
            <div className="section-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>
            </div>
            Article 10 - Modification des CGU
          </h2>
          <p>
            Le Prestataire se réserve le droit de modifier les présentes CGU à tout moment.
            Les modifications seront publiées sur le Site et entreront en vigueur dès leur mise en ligne.
          </p>
          <p>
            L'Utilisateur est invité à consulter régulièrement les CGU. L'utilisation continue du
            Site après modification des CGU vaut acceptation des nouvelles conditions.
          </p>
        </div>

        {/* Article 11 - Durée et résiliation */}
        <div className="section">
          <h2 className="section-title">
            <div className="section-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            Article 11 - Durée et résiliation
          </h2>
          <p>
            Les présentes CGU sont conclues pour une durée indéterminée. L'Utilisateur peut résilier
            son Compte à tout moment en contactant le service client ou via son espace personnel.
          </p>
          <p>
            Le Prestataire se réserve le droit de résilier le Compte de l'Utilisateur en cas de
            non-respect des présentes CGU, sans préavis ni indemnité.
          </p>
        </div>

        {/* Article 12 - Litiges et loi applicable */}
        <div className="section">
          <h2 className="section-title">
            <div className="section-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>
            </div>
            Article 12 - Litiges et loi applicable
          </h2>
          <p>
            Les présentes CGU sont régies par le droit français. En cas de litige, les parties
            s'efforceront de trouver une solution amiable.
          </p>
          <p>
            Conformément aux articles L. 612-1 et L. 616-3 du Code de la consommation, le Client
            consommateur peut recourir gratuitement à un médiateur de la consommation (le
            <strong> Médiateur des entreprises</strong>, <a href="https://www.mediateurdesentreprises.fr" target="_blank" rel="noopener noreferrer" style={{color:'#0071E3'}}>www.mediateurdesentreprises.fr</a>)
            ou saisir la plateforme européenne de règlement en ligne des litiges (RLL) :
            <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" style={{color:'#0071E3'}}>https://ec.europa.eu/consumers/odr</a>.
          </p>
          <p>
            À défaut d'accord amiable, tout litige relatif à l'interprétation ou à l'exécution des
            présentes CGU sera soumis aux juridictions françaises compétentes. Pour les
            consommateurs, les juridictions du lieu de résidence du consommateur restent
            compétentes conformément aux dispositions du Code de la consommation.
          </p>
        </div>

        {/* Article 13 - Contact */}
        <div className="section">
          <h2 className="section-title">
            <div className="section-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </div>
            Article 13 - Contact
          </h2>
          <p>
            Pour toute question relative aux présentes CGU ou au fonctionnement du Site,
            vous pouvez nous contacter :
          </p>
          <ul>
            <li>Par email : <a href="mailto:contact@visioflow.fr" style={{color:'#0071E3'}}>contact@visioflow.fr</a></li>
            <li>Par téléphone : +33 6 11 04 58 29</li>
            <li>Par courrier : Christian Micillo, 6 rue Lacretelle, 77340 Pontault-Combault</li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p style={{fontFamily:'Outfit, sans-serif',fontSize:'22px',fontWeight:900,color:'#0f172a',marginBottom:'8px'}}>
            Visio<span style={{color:'#0071E3'}}>flow</span>
          </p>
          <p style={{color:'#475569',marginBottom:'24px'}}>
            Création de sites web pour restaurateurs avec commandes en ligne, livrés en quelques semaines.
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