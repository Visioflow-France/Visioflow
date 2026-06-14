import Head from 'next/head';

const canonicalUrl = "https://visioflow.fr/politique-confidentialite";

export default function PolitiqueConfidentialite() {
  return (
    <>
      <Head>
        <title>Politique de Confidentialité | VisioFlow</title>
        <meta
          name="description"
          content="Politique de confidentialité de VisioFlow conformément au RGPD. Découvrez comment nous collectons, utilisons et protégeons vos données personnelles."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Politique de Confidentialité | VisioFlow" />
        <meta property="og:description" content="Politique de confidentialité de VisioFlow conformément au RGPD." />
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
          #vflp .data-table{width:100%;border-collapse:collapse;margin:20px 0;background:rgba(0,113,227,.05);border-radius:12px;overflow:hidden}
          #vflp .data-table th{background:rgba(0,113,227,.1);color:#0f172a;padding:16px;text-align:left;font-weight:600;border-bottom:1px solid rgba(0,113,227,.2)}
          #vflp .data-table td{padding:16px;color:#475569;border-bottom:1px solid rgba(15,23,42,.06)}
          #vflp .data-table tr:last-child td{border-bottom:none}
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
          @media(max-width:768px){#vflp .nav-links{display:none} #vflp .data-table{font-size:13px} #vflp .data-table th,#vflp .data-table td{padding:12px}}
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
          <h1 className="hero-title">Politique de Confidentialité</h1>
          <p className="hero-sub">
            Notre engagement envers la protection de vos données personnelles conformément au RGPD.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <div className="container content">
        {/* Introduction */}
        <div className="section">
          <h2 className="section-title">
            <div className="section-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            Introduction
          </h2>
          <p>
            La présente politique de confidentialité a pour but de vous informer sur la manière dont
            <strong>VisioFlow</strong> collecte, utilise, stocke et protège vos données personnelles
            lorsque vous utilisez notre site web visioflow.fr et nos services.
          </p>
          <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD) n° 2016/679 du Parlement
            européen et du Conseil du 27 avril 2016, et à la loi française Informatique et Libertés du 6 janvier 1978
            modifiée, nous nous engageons à respecter votre vie privée et à protéger vos données personnelles.
          </p>
          <p>
            Cette politique s'applique à toutes les personnes qui consultent ou utilisent notre site web,
            nos services, ou qui nous communiquent leurs données personnelles.
          </p>
        </div>

        {/* Responsable du traitement */}
        <div className="section">
          <h2 className="section-title">
            <div className="section-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </div>
            Responsable du traitement
          </h2>
          <p>
            Le responsable du traitement de vos données personnelles est :
          </p>
          <p>
            <strong>Christian Micillo</strong>, agissant en qualité d'auto-entrepreneur, éditant le
            site VisioFlow<br />
            6 rue Lacretelle, 77340 Pontault-Combault<br />
            SIRET : 101 079 366 00015<br />
            Téléphone : +33 6 11 04 58 29<br />
            Email : <a href="mailto:contact@visioflow.fr" style={{color:'#0071E3'}}>contact@visioflow.fr</a>
          </p>
          <p>
            Pour toute question relative à la protection de vos données personnelles, vous pouvez
            contacter le responsable du traitement à l'adresse email
            <a href="mailto:dpo@visioflow.fr" style={{color:'#0071E3'}}>dpo@visioflow.fr</a> ou par
            courrier à l'adresse postale ci-dessus. La structure étant une micro-entreprise, la
            fonction de Délégué à la Protection des Données n'est pas légalement obligatoire ; le
            responsable du traitement assure directement cette mission.
          </p>
          <p>
            Les traitements de données personnelles mis en œuvre dans le cadre de la gestion de la
            clientèle et des prospects font l'objet d'une déclaration conforme aux formalités prévues
            par la CNIL.
          </p>
        </div>

        {/* Données collectées */}
        <div className="section">
          <h2 className="section-title">
            <div className="section-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
            </div>
            Données personnelles collectées
          </h2>
          <p>
            Nous collectons uniquement les données personnelles qui sont nécessaires à la prestation
            de nos services et au bon fonctionnement de notre site web.
          </p>

          <h3 style={{fontFamily:'Outfit, sans-serif',fontSize:'18px',fontWeight:700,color:'#0f172a',margin:'24px 0 16px'}}>1. Données collectées lors de la création de compte</h3>
          <p>
            Lorsque vous créez un compte sur notre site, nous collectons les données suivantes :
          </p>
          <ul>
            <li>Nom et prénom</li>
            <li>Adresse email</li>
            <li>Numéro de téléphone</li>
            <li>Mot de passe (stocké de manière sécurisée et chiffrée)</li>
            <li>Nom de votre restaurant</li>
            <li>Adresse de votre établissement</li>
          </ul>

          <h3 style={{fontFamily:'Outfit, sans-serif',fontSize:'18px',fontWeight:700,color:'#0f172a',margin:'24px 0 16px'}}>2. Données collectées lors d'une commande de site</h3>
          <p>
            Lorsque vous commandez la création d'un site web, nous collectons également :
          </p>
          <ul>
            <li>Adresse de facturation</li>
            <li>Informations nécessaires à la facturation (SIRET du client professionnel le cas échéant)</li>
            <li>Éléments de contenu du futur site (logo, photos, menus, horaires, coordonnées du restaurant)</li>
            <li>Données de paiement (traitées de manière sécurisée par notre prestataire de paiement ; nous ne stockons jamais les données bancaires)</li>
            <li>Historique des échanges et des commandes</li>
          </ul>

          <h3 style={{fontFamily:'Outfit, sans-serif',fontSize:'18px',fontWeight:700,color:'#0f172a',margin:'24px 0 16px'}}>3. Données collectées automatiquement</h3>
          <p>
            Lorsque vous naviguez sur notre site, certaines données sont collectées automatiquement :
          </p>
          <ul>
            <li>Adresse IP</li>
            <li>Type de navigateur et version</li>
            <li>Système d'exploitation</li>
            <li>Pages consultées et durée de visite</li>
            <li>Site de provenance (référant)</li>
            <li>Données de localisation approximative</li>
          </ul>

          <h3 style={{fontFamily:'Outfit, sans-serif',fontSize:'18px',fontWeight:700,color:'#0f172a',margin:'24px 0 16px'}}>4. Données collectées via les cookies</h3>
          <p>
            Nous utilisons des cookies pour collecter des informations sur votre navigation.
            Pour plus de détails, consultez notre <a href="/politique-cookies" style={{color:'#0071E3'}}>Politique de cookies</a>.
          </p>
        </div>

        {/* Finalités du traitement */}
        <div className="section">
          <h2 className="section-title">
            <div className="section-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
            </div>
            Finalités du traitement
          </h2>
          <p>
            Vos données personnelles sont traitées pour les finalités suivantes :
          </p>

          <table className="data-table">
            <thead>
              <tr>
                <th>Finalité</th>
                <th>Base légale</th>
                <th>Conservation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Gestion de votre compte et authentification</td>
                <td>Exécution du contrat</td>
                <td>Durée du compte + 3 ans</td>
              </tr>
              <tr>
                <td>Traitement de vos commandes</td>
                <td>Exécution du contrat</td>
                <td>5 ans (comptabilité)</td>
              </tr>
              <tr>
                <td>Paiement sécurisé</td>
                <td>Exécution du contrat</td>
                <td>5 ans (comptabilité)</td>
              </tr>
              <tr>
                <td>Service client et support</td>
                <td>Intérêt légitime</td>
                <td>2 ans après dernier contact</td>
              </tr>
              <tr>
                <td>Gestion des prospects et demandes de devis</td>
                <td>Intérêt légitime (relation précontractuelle)</td>
                <td>3 ans à compter du dernier contact</td>
              </tr>
              <tr>
                <td>Amélioration de nos services</td>
                <td>Intérêt légitime</td>
                <td>2 ans</td>
              </tr>
              <tr>
                <td>Marketing / newsletter (avec consentement)</td>
                <td>Consentement</td>
                <td>Jusqu'au retrait du consentement</td>
              </tr>
              <tr>
                <td>Respect des obligations légales (facturation, comptabilité, lutte anti-fraude)</td>
                <td>Obligation légale</td>
                <td>Durée requise par la loi (10 ans comptables)</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Destinataires des données */}
        <div className="section">
          <h2 className="section-title">
            <div className="section-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            Destinataires des données
          </h2>
          <p>
            Vos données personnelles peuvent être communiquées aux destinataires suivants :
          </p>
          <ul>
            <li>
              <strong>Notre personnel habilité</strong> : Les membres de notre équipe qui ont besoin d'accéder
              à vos données pour accomplir leurs missions (service client, support technique, etc.)
            </li>
            <li>
              <strong>Prestataires de services</strong> : Les tiers qui nous assistent dans la prestation
              de nos services, notamment :
              <ul>
                <li>Prestataire de paiement (Stripe Payments Europe) — traitement des transactions ;</li>
                <li>Hébergeur du site (Vercel Inc.) — stockage et mise en ligne du site ;</li>
                <li>Fournisseur d'infrastructure applicative et d'authentification (Google / Firebase) ;</li>
                <li>Service d'envoi d'emails transactionnels (Resend) ;</li>
                <li>Toute autre prestation technique strictement nécessaire à l'exécution de nos services.</li>
              </ul>
            </li>
            <li>
              <strong>Autorités compétentes</strong> : Dans le cadre d'une obligation légale ou d'une
              demande judiciaire, nous pouvons être tenus de communiquer vos données aux autorités.
            </li>
          </ul>
          <p>
            Tous nos prestataires sont soumis à des obligations de confidentialité et de sécurité strictes,
            et interviennent en qualité de sous-traitants au sens du RGPD.
          </p>
        </div>

        {/* Transferts hors UE */}
        <div className="section">
          <h2 className="section-title">
            <div className="section-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            </div>
            Transferts de données hors de l'Union européenne
          </h2>
          <p>
            Certaines données peuvent être traitées par nos prestataires situés en dehors de l'Union
            européenne, notamment aux États-Unis (Vercel Inc. et Google / Firebase pour
            l'hébergement et l'infrastructure, et Stripe pour le paiement).
          </p>
          <p>
            Ces transferts sont encadrés conformément au RGPD, soit sur la base d'une décision d'adéquation,
            soit au moyen de garanties appropriées telles que les <strong>clauses contractuelles types</strong>
            adoptées par la Commission européenne, complétées le cas échéant de mesures techniques et
            organisationnelles supplémentaires. Les données transférées sont limitées au strict nécessaire
            à la fourniture du service.
          </p>
        </div>

        {/* Sécurité des données */}
        <div className="section">
          <h2 className="section-title">
            <div className="section-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            </div>
            Sécurité des données
          </h2>
          <p>
            Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger
            vos données personnelles contre tout accès non autorisé, modification, divulgation ou destruction.
          </p>
          <ul>
            <li>Chiffrement des données sensibles (SSL/TLS)</li>
            <li>Contrôle d'accès basé sur les rôles</li>
            <li>Sauvegardes régulières et sécurisées</li>
            <li>Tests de sécurité réguliers</li>
            <li>Formation du personnel à la protection des données</li>
            <li>Procédures de réponse aux incidents</li>
          </ul>
          <p>
            Malgré nos efforts, aucune transmission de données sur Internet n'est totalement sécurisée.
            Nous ne pouvons donc pas garantir une sécurité absolue.
          </p>
        </div>

        {/* Vos droits */}
        <div className="section">
          <h2 className="section-title">
            <div className="section-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
            </div>
            Vos droits RGPD
          </h2>
          <p>
            Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles :
          </p>
          <ul>
            <li>
              <strong>Droit d'accès</strong> : Vous pouvez demander l'accès à vos données personnelles
              et savoir comment elles sont utilisées.
            </li>
            <li>
              <strong>Droit de rectification</strong> : Vous pouvez demander la correction de données
              inexactes ou incomplètes.
            </li>
            <li>
              <strong>Droit à l'effacement</strong> : Vous pouvez demander la suppression de vos données
              dans certaines conditions.
            </li>
            <li>
              <strong>Droit à la limitation</strong> : Vous pouvez demander la limitation du traitement
              de vos données dans certaines conditions.
            </li>
            <li>
              <strong>Droit à la portabilité</strong> : Vous pouvez demander à recevoir vos données
              dans un format structuré et couramment utilisé.
            </li>
            <li>
              <strong>Droit d'opposition</strong> : Vous pouvez vous opposer au traitement de vos données
              pour certains motifs.
            </li>
            <li>
              <strong>Droit de retirer votre consentement</strong> : Lorsque le traitement est basé sur
              votre consentement, vous pouvez le retirer à tout moment.
            </li>
            <li>
              <strong>Droit d'introduire une réclamation</strong> : Vous avez le droit de déposer une
              réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés)
              si vous estimez que vos droits ne sont pas respectés.
            </li>
          </ul>
          <p>
            <strong>Pour exercer vos droits</strong>, contactez-nous à l'adresse :
            <a href="mailto:dpo@visioflow.fr" style={{color:'#0071E3'}}>dpo@visioflow.fr</a>
            en joignant une copie d'un justificatif d'identité. Vous pouvez également exercer l'ensemble
            de ces droits directement depuis votre espace personnel.
          </p>
          <p>
            Nous répondrons à votre demande dans un délai d'un mois à compter de sa réception.
            Ce délai peut être prolongé de deux mois supplémentaires si nécessaire, compte tenu de
            la complexité et du nombre de demandes.
          </p>
          <p>
            Si vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés, vous
            pouvez introduire une réclamation auprès de l'autorité de contrôle compétente :
          </p>
          <p>
            <strong>CNIL (Commission Nationale de l'Informatique et des Libertés)</strong><br />
            3 place de Fontenoy — TSA 80715 — 75334 PARIS CEDEX 07<br />
            Téléphone : 01 53 73 22 22 — Site web :
            <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" style={{color:'#0071E3'}}>www.cnil.fr</a>
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
            Notre site utilise des cookies et technologies similaires pour améliorer votre expérience
            de navigation et analyser l'audience.
          </p>
          <p>
            Pour plus d'informations sur les cookies que nous utilisons et vos options,
            consultez notre <a href="/politique-cookies" style={{color:'#0071E3'}}>Politique de cookies</a>.
          </p>
        </div>

        {/* Mineurs */}
        <div className="section">
          <h2 className="section-title">
            <div className="section-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            Protection des mineurs
          </h2>
          <p>
            Notre site n'est pas destiné aux personnes de moins de 16 ans. Nous ne collectons pas
            sciemment de données personnelles concernant des mineurs sans le consentement préalable
            de leurs parents ou tuteurs légaux.
          </p>
          <p>
            Si nous apprenons que des données personnelles d'un mineur ont été collectées sans ce
            consentement, nous prendrons les mesures nécessaires pour supprimer ces informations
            rapidement.
          </p>
        </div>

        {/* Modifications */}
        <div className="section">
          <h2 className="section-title">
            <div className="section-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>
            </div>
            Modifications de la politique
          </h2>
          <p>
            Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment
            afin de refléter les changements dans nos pratiques ou pour nous conformer aux évolutions
            légales et réglementaires.
          </p>
          <p>
            En cas de modification importante, nous en informerons les utilisateurs par voie d'email
            ou via une notification sur notre site. Nous vous invitons à consulter régulièrement cette
            page pour prendre connaissance des éventuelles modifications.
          </p>
        </div>

        {/* Entrée en vigueur */}
        <div className="section">
          <h2 className="section-title">
            <div className="section-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            Entrée en vigueur
          </h2>
          <p>
            La présente politique de confidentialité est entrée en vigueur le
            <strong>{new Date().toLocaleDateString('fr-FR', {day: 'numeric', month: 'long', year: 'numeric'})}</strong>.
          </p>
          <p>
            Pour toute question relative à cette politique ou à la protection de vos données personnelles,
            n'hésitez pas à nous contacter à l'adresse : <a href="mailto:dpo@visioflow.fr" style={{color:'#0071E3'}}>dpo@visioflow.fr</a>
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