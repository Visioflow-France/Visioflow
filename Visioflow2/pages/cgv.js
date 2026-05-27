import Head from 'next/head';

const canonicalUrl = "https://visioflow.fr/cgv";

export default function CGV() {
  return (
    <>
      <Head>
        <title>Conditions Générales de Vente | VisioFlow</title>
        <meta
          name="description"
          content="Conditions générales de vente de VisioFlow. Prix, paiement, livraison, garanties et conditions de remboursement."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Conditions Générales de Vente | VisioFlow" />
        <meta property="og:description" content="Conditions générales de vente de VisioFlow." />
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
          .section ul{margin:16px 0;padding-left:24px}
          .section li{color:#94a3b8;margin-bottom:10px;line-height:1.8}
          .article-title{font-family:'Outfit',sans-serif;font-size:20px;font-weight:600;color:#f1f5f9;margin:24px 0 12px;padding-left:12px;border-left:3px solid #0071E3}
          .price-table{width:100%;border-collapse:collapse;margin:20px 0;background:rgba(0,113,227,.05);border-radius:12px;overflow:hidden}
          .price-table th{background:rgba(0,113,227,.15);color:#f1f5f9;padding:16px;text-align:left;font-weight:600;border-bottom:1px solid rgba(0,113,227,.2)}
          .price-table td{padding:16px;color:#94a3b8;border-bottom:1px solid rgba(255,255,255,.05)}
          .price-table tr:last-child td{border-bottom:none}
          .price-highlight{color:#0071E3;font-weight:600;font-family:'Outfit',sans-serif}
          .nav{background:rgba(15,23,42,.9);backdrop-filter:blur(10px);position:fixed;top:0;left:0;right:0;z-index:100;padding:16px 0;border-bottom:1px solid rgba(255,255,255,.1)}
          .nav-content{display:flex;justify-content:space-between;align-items:center}
          .logo{font-family:'Outfit',sans-serif;font-size:28px;font-weight:900;color:#fff;display:flex;align-items:center;gap:10px;text-decoration:none}
          .logo span{color:#0071E3}
          .nav-links{display:flex;gap:32px}
          .nav-links a{color:#94a3b8;font-size:14px;font-weight:500;text-decoration:none;transition:all .2s}
          .nav-links a:hover{color:#fff}
          .nav-cta{background:#0071E3;color:#fff;padding:10px 24px;border-radius:50px;font-weight:600;font-size:14px;text-decoration:none;transition:all .2s}
          .nav-cta:hover{background:#0056b3;transform:translateY(-2px}
          .footer{background:#0f172a;padding:60px 20px;border-top:1px solid rgba(255,255,255,.1);text-align:center;color:#64748b;font-size:13px}
          .legal-links{display:flex;gap:20px;justifyContent:center;flexWrap:wrap;marginBottom:20px}
          .legal-links a{color:rgba(255,255,255,.5);text-decoration:none;font-size:13px;transition:color .2s}
          .legal-links a:hover{color:#0071E3}
          @media(max-width:768px){.nav-links{display:none}.price-table{font-size:13px}.price-table th,.price-table td{padding:12px}}
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
          <h1 className="hero-title">Conditions Générales de Vente</h1>
          <p className="hero-sub">
            Nos conditions de vente pour la création de sites web pour restaurateurs.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <div className="container content">
        {/* Préambule */}
        <div className="section">
          <h2 className="section-title">
            <div className="section-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
            </div>
            Préambule
          </h2>
          <p>
            Les présentes Conditions Générales de Vente (ci-après dénommées "CGV") régissent la
            vente des services proposés par la société <strong>VisioFlow</strong> (ci-après dénommée
            "le Vendeur") à ses clients (ci-après dénommés "le Client" ou "l'Acheteur").
          </p>
          <p>
            Toute commande passée sur le site visioflow.fr vaut acceptation pleine et entière des
            présentes CGV. Le Client reconnaît avoir pris connaissance des CGV avant toute commande.
          </p>
          <p>
            Le Vendeur se réserve le droit de modifier ses CGV à tout moment. Dans ce cas, les CGV
            applicables seront celles en vigueur au jour de la commande.
          </p>
        </div>

        {/* Article 1 - Produits et services */}
        <div className="section">
          <h2 className="section-title">
            <div className="section-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            Article 1 - Produits et services
          </h2>
          <p>
            Le Vendeur propose des services de création de sites web pour restaurateurs,
            incluant :
          </p>
          <ul>
            <li>Conception et développement de sites web</li>
            <li>Mise en place de systèmes de commande en ligne</li>
            <li>Création de menus digitaux</li>
            <li>Optimisation pour les moteurs de recherche (SEO)</li>
            <li>Hébergement du site</li>
            <li>Maintenance et support technique</li>
          </ul>

          <h3 className="article-title">1.1 Packs proposés</h3>
          <table className="price-table">
            <thead>
              <tr>
                <th>Pack</th>
                <th>Description</th>
                <th>Prix</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Pack Essentiel</strong></td>
                <td>Site vitrine professionnel avec menu digital, horaires, photos. Livré en 48h.</td>
                <td className="price-highlight">150 € HT</td>
              </tr>
              <tr>
                <td><strong>Pack Premium</strong></td>
                <td>Site complet avec commandes en ligne, panier, paiement intégré, panel admin. Livré en 48h.</td>
                <td className="price-highlight">490 € HT</td>
              </tr>
              <tr>
                <td><strong>Pack Personnalisé</strong></td>
                <td>Solution sur mesure selon les besoins spécifiques du restaurant.</td>
                <td className="price-highlight">Sur devis</td>
              </tr>
            </tbody>
          </table>

          <h3 className="article-title">1.2 Caractéristiques des services</h3>
          <p>
            Les caractéristiques détaillées de chaque pack sont présentées sur la page
            <a href="/tarifs" style={{color:'#0071E3'}}>tarifs</a> de notre site. Le Client est
            invité à les consulter attentivement avant toute commande.
          </p>
        </div>

        {/* Article 2 - Prix */}
        <div className="section">
          <h2 className="section-title">
            <div className="section-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            Article 2 - Prix
          </h2>
          <h3 className="article-title">2.1 Tarification</h3>
          <p>
            Les prix des services sont indiqués en euros hors taxes (HT). La TVA est applicable
            selon le taux en vigueur au jour de la commande.
          </p>
          <p>
            Pour les professionnels assujettis à la TVA, le prix s'entend HT. Pour les consommateurs,
            le prix inclut la TVA.
          </p>

          <h3 className="article-title">2.2 Hébergement inclus</h3>
          <p>
            L'hébergement du site web est <strong>inclus à vie</strong> dans le prix de nos packs.
            Aucun frais d'hébergement mensuel ou annuel n'est demandé au-delà du prix initial.
          </p>

          <h3 className="article-title">2.3 Paiement unique</h3>
          <p>
            Nos forfaits sont payés en une seule fois, sans abonnement ni engagement de durée.
            Une fois le paiement effectué, le Client est propriétaire de son site web sans frais
            supplémentaires.
          </p>

          <h3 className="article-title">2.4 Frais supplémentaires</h3>
          <p>
            Des frais supplémentaires pourront être appliqués dans les cas suivants :
          </p>
          <ul>
            <li>Demandes de modifications non prévues dans le devis initial</li>
            <li>Ajout de fonctionnalités hors du pack commandé</li>
            <li>Services additionnels (formation avancée, maintenance premium, etc.)</li>
            <li>Prestations d'accompagnement personnalisé</li>
          </ul>
          <p>
            Ces frais seront systématiquement communiqués au Client pour validation avant toute
            prestation.
          </p>
        </div>

        {/* Article 3 - Commande */}
        <div className="section">
          <h2 className="section-title">
            <div className="section-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
            </div>
            Article 3 - Commande
          </h2>
          <h3 className="article-title">3.1 Processus de commande</h3>
          <p>
            Le Client peut passer commande en ligne via le formulaire de commande sur notre site
            ou en contactant notre service commercial.
          </p>

          <h3 className="article-title">3.2 Informations requises</h3>
          <p>
            Pour valider sa commande, le Client doit fournir :
          </p>
          <ul>
            <li>Ses coordonnées complètes (nom, prénom, email, téléphone)</li>
            <li>Les informations sur son restaurant (nom, adresse, spécialité)</li>
            <li>Le pack choisi et les options souhaitées</li>
            <li>Les éléments de son menu et ses photos</li>
            <li>Toute information nécessaire à la réalisation du projet</li>
          </ul>

          <h3 className="article-title">3.3 Confirmation de commande</h3>
          <p>
            La commande ne sera définitivement validée qu'après réception intégrale du paiement.
            Le Client recevra une confirmation de commande par email récapitulant :
          </p>
          <ul>
            <li>Les détails de la commande</li>
            <li>Le prix payé</li>
            <li>Les délais de livraison</li>
            <li>Les modalités de suivi</li>
          </ul>

          <h3 className="article-title">3.4 Droit de rétractation (consommateurs uniquement)</h3>
          <p>
            Conformément au Code de consommation, le Client consommateur dispose d'un délai de
            <strong>14 jours</strong> à compter de la conclusion du contrat pour se rétracter,
            sans avoir à justifier de motifs ni à payer de pénalités.
          </p>
          <p>
            Toutefois, le droit de rétractation ne s'applique pas aux prestations de services
            entièrement exécutées avant l'expiration du délai de rétractation, avec l'accord
            exprès du Client.
          </p>
          <p>
            Pour exercer son droit de rétractation, le Client doit nous informer de sa décision
            par écrit (email ou courrier) à l'adresse : contact@visioflow.fr
          </p>
        </div>

        {/* Article 4 - Paiement */}
        <div className="section">
          <h2 className="section-title">
            <div className="section-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
            </div>
            Article 4 - Paiement
          </h2>
          <h3 className="article-title">4.1 Modalités de paiement</h3>
          <p>
            Le paiement s'effectue en ligne au moment de la commande, par carte bancaire via
            notre prestataire de paiement sécurisé Stripe.
          </p>

          <h3 className="article-title">4.2 Sécurité des paiements</h3>
          <p>
            Les transactions sont sécurisées selon les standards bancaires en vigueur (SSL 3D Secure).
            Le Vendeur ne stocke jamais les informations bancaires du Client, qui sont traitées
            exclusivement par Stripe.
          </p>

          <h3 className="article-title">4.3 Modalités pour les professionnels</h3>
          <p>
            Pour les professionnels, un paiement en plusieurs fois ou par virement bancaire peut
            être proposé sous conditions. Cette modalité doit faire l'objet d'un accord préalable
            avec notre service commercial.
          </p>

          <h3 className="article-title">4.4 Facturation</h3>
          <p>
            Une facture est émise dès le paiement effectif de la commande et envoyée au Client
            par email. Elle mentionne le montant payé, les détails de la prestation et le numéro
            de TVA intracommunautaire si applicable.
          </p>
        </div>

        {/* Article 5 - Délais de livraison */}
        <div className="section">
          <h2 className="section-title">
            <div className="section-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
            </div>
            Article 5 - Délais de livraison
          </h2>
          <h3 className="article-title">5.1 Délai annoncé</h3>
          <p>
            Le Vendeur s'engage à livrer le site web dans un délai de <strong>48 heures</strong>
            à compter de la réception de toutes les informations nécessaires et des éléments
            fournis par le Client (photos, menu, informations restaurant).
          </p>

          <h3 className="article-title">5.2 Conditions de validité du délai</h3>
          <p>
            Le délai de livraison s'entend à condition que le Client fournisse tous les éléments
            nécessaires dans les délais convenus. Tout retard dans la transmission des informations
            par le Client entraîne une prolongation du délai de livraison équivalente.
          </p>

          <h3 className="article-title">5.3 Livraison partielle</h3>
          <p>
            Le Vendeur peut effectuer des livraisons partielles (maquettes, fonctionnalités
            principales) dans le cadre du processus de développement. Ces livraisons partielles
            n'exonèrent pas le Vendeur de son obligation de livrer la prestation complète.
          </p>

          <h3 className="article-title">5.4 Retard de livraison</h3>
          <p>
            En cas de retard de livraison imputable au Vendeur, le Client peut :
          </p>
          <ul>
            <li>Exiger l'exécution forcée du contrat</li>
            <li>Résilier le contrat si le retard excède 30 jours</li>
            <li>Réclamer des dommages-intérêts dans la limite du prix payé</li>
          </ul>
          <p>
            Le Vendeur ne pourra être tenu responsable des retards causés par des cas de force
            majeure, des événements imprévisibles ou hors de son contrôle.
          </p>
        </div>

        {/* Article 6 - Réception et validation */}
        <div className="section">
          <h2 className="section-title">
            <div className="section-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            </div>
            Article 6 - Réception et validation
          </h2>
          <h3 className="article-title">6.1 Mise à disposition</h3>
          <p>
            La prestation est réputée livrée lorsque le site web est mis à disposition du Client
            et accessible via son nom de domaine.
          </p>

          <h3 className="article-title">6.2 Période de validation</h3>
          <p>
            Le Client dispose d'un délai de <strong>7 jours</strong> à compter de la livraison
            pour valider la prestation ou demander des corrections.
          </p>

          <h3 className="article-title">6.3 Corrections</h3>
          <p>
            Durant la période de validation, le Client peut demander des corrections gratuites
            dans la limite des fonctionnalités prévues au contrat. Les demandes de corrections
            non conformes au devis initial ou excédant les prévisions pourront faire l'objet
            de frais supplémentaires.
          </p>

          <h3 className="article-title">6.4 Validation implicite</h3>
          <p>
            À défaut de demande de correction ou de contestation dans le délai de 7 jours,
            la prestation est réputée acceptée par le Client. Cette validation vaut reconnaissance
            de conformité et libère le Vendeur de toute obligation de correction sans frais.
          </p>
        </div>

        {/* Article 7 - Garanties */}
        <div className="section">
          <h2 className="section-title">
            <div className="section-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
            </div>
            Article 7 - Garanties
          </h2>
          <h3 className="article-title">7.1 Garantie de conformité</h3>
          <p>
            Le Vendeur garantit que le site web livré est conforme aux spécifications convenues
            dans le devis ou le contrat, et exempt de défauts cachés.
          </p>

          <h3 className="article-title">7.2 Garantie légale de conformité (consommateurs)</h3>
          <p>
            Pour les consommateurs, le Vendeur garantit la conformité du bien aux spécifications
            convenues pendant une durée de <strong>2 ans</strong> à compter de la livraison,
            conformément aux articles L. 217-4 et suivants du Code de consommation.
          </p>

          <h3 className="article-title">7.3 Garantie des vices cachés</h3>
          <p>
            Conformément aux articles 1641 et suivants du Code civil, le Vendeur garantit que le
            site web est exempt de vices cachés qui le rendraient impropre à son usage. Cette
            garantie s'applique pendant une durée de <strong>2 ans</strong> à compter de la découverte
            du vice.
          </p>

          <h3 className="article-title">7.4 Garantie de performance</h3>
          <p>
            Le Vendeur garantit que le site web respecte les standards techniques en vigueur,
            notamment en matière de :
          </p>
          <ul>
            <li>Compatibilité avec les navigateurs modernes (Chrome, Firefox, Safari, Edge)</li>
            <li>Adaptation mobile (responsive design)</li>
            <li>Performance (Core Web Vitals)</li>
            <li>Sécurité (HTTPS, protection contre les attaques courantes)</li>
          </ul>

          <h3 className="article-title">7.5 Maintenance corrective</h3>
          <p>
            Le Vendeur s'engage à corriger gratuitement les bugs et dysfonctionnements
            constatés sur le site web pendant une durée de <strong>30 jours</strong> à compter
            de la validation finale, dans la limite des fonctionnalités livrées.
          </p>
        </div>

        {/* Article 8 - Hébergement et maintenance */}
        <div className="section">
          <h2 className="section-title">
            <div className="section-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
            </div>
            Article 8 - Hébergement et maintenance
          </h2>
          <h3 className="article-title">8.1 Hébergement à vie</h3>
          <p>
            L'hébergement du site web est inclus à vie dans le prix des packs. Le Vendeur s'engage
            à maintenir le site accessible en ligne sans frais supplémentaires.
          </p>

          <h3 className="article-title">8.2 Conditions de l'hébergement</h3>
          <p>
            L'hébergement est fourni dans les limites suivantes :
          </p>
          <ul>
            <li>Respect des conditions d'utilisation du Vendeur</li>
            <li>Absence de contenu illégal ou frauduleux</li>
            <li>Conformité aux lois et réglementations en vigueur</li>
            <li>Utilisation normale du site (sans surcharge abusive)</li>
          </ul>

          <h3 className="article-title">8.3 Sauvegardes</h3>
          <p>
            Le Vendeur effectue des sauvegardes régulières du site web et de ses données. Cependant,
            le Client est responsable de la sauvegarde de ses propres données (contenu, menu,
            photos, etc.).
          </p>

          <h3 className="article-title">8.4 Mises à jour</h3>
          <p>
            Le Vendeur s'engage à effectuer les mises à jour de sécurité et de maintenance
            nécessaires au bon fonctionnement du site. Les mises à jour fonctionnelles
            nécessitant des modifications importantes seront communiquées au Client.
          </p>
        </div>

        {/* Article 9 - Propriété intellectuelle */}
        <div className="section">
          <h2 className="section-title">
            <div className="section-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            Article 9 - Propriété intellectuelle
          </h2>
          <h3 className="article-title">9.1 Contenu fourni par le Client</h3>
          <p>
            Le Client garantit disposer de tous les droits nécessaires sur le contenu qu'il
            fournit (textes, photos, logo, menu, etc.). Il s'engage à indemniser le Vendeur
            contre toute réclamation liée à ce contenu.
          </p>

          <h3 className="article-title">9.2 Code et design</h3>
          <p>
            Le code source et le design du site web réalisés par le Vendeur sont sa propriété
            exclusive. Le Client acquiert un droit d'utilisation non exclusif et non transférable
            pour son propre site web.
          </p>

          <h3 className="article-title">9.3 Droits après paiement</h3>
          <p>
            Après paiement intégral de la commande, le Client acquiert les droits d'utilisation
            suivants :
          </p>
          <ul>
            <li>Utilisation du site web pour son activité commerciale</li>
            <li>Modification du contenu (textes, photos, menu)</li>
            <li>Accès au panel administratif</li>
            <li>Bénéfice des mises à jour de sécurité</li>
          </ul>

          <h3 className="article-title">9.4 Restrictions</h3>
          <p>
            Le Client ne peut pas :
          </p>
          <ul>
            <li>Revendre ou redistribuer le code source du site</li>
            <li>Utiliser le design pour d'autres projets</li>
            <li>Supprimer les mentions de copyright du Vendeur</li>
            <li>Modifier le code source de manière non conforme</li>
          </ul>
        </div>

        {/* Article 10 - Support technique */}
        <div className="section">
          <h2 className="section-title">
            <div className="section-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </div>
            Article 10 - Support technique
          </h2>
          <h3 className="article-title">10.1 Support inclus</h3>
          <p>
            Le Vendeur propose un support technique inclus pour répondre aux questions relatives
            au fonctionnement du site et à l'utilisation du panel administratif.
          </p>

          <h3 className="article-title">10.2 Modalités</h3>
          <p>
            Le support est accessible :
          </p>
          <ul>
            <li>Par email : support@visioflow.fr</li>
            <li>Par téléphone : +33 1 23 45 67 89 (du lundi au vendredi, 9h-18h)</li>
            <li>Via le formulaire de contact sur le site</li>
          </ul>

          <h3 className="article-title">10.3 Délai de réponse</h3>
          <p>
            Le Vendeur s'engage à répondre aux demandes de support dans un délai de
            <strong>48 heures</strong> ouvrées. Pour les urgences, un délai plus court sera
            visé autant que possible.
          </p>

          <h3 className="article-title">10.4 Services hors support</h3>
          <p>
            Les services suivants ne sont pas inclus dans le support standard et nécessitent
            un devis spécifique :
          </p>
          <ul>
            <li>Formation avancée ou personnalisée</li>
            <li>Modifications structurelles du site</li>
            <li>Ajout de nouvelles fonctionnalités</li>
            <li>Optimisation SEO avancée</li>
            <li>Création de contenu (textes, photos, vidéos)</li>
          </ul>
        </div>

        {/* Article 11 - Résiliation */}
        <div className="section">
          <h2 className="section-title">
            <div className="section-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18.36 6.64a9 9 0 1 1-12.73 0"/><line x1="12" y1="2" x2="12" y2="12"/></svg>
            </div>
            Article 11 - Résiliation
          </h2>
          <h3 className="article-title">11.1 Résiliation par le Client</h3>
          <p>
            Le Client peut résilier le contrat à tout moment avant le début de l'exécution de la
            prestation, sous réserve de respecter les conditions prévues à l'article 3.4 (droit
            de rétractation).
          </p>
          <p>
            En cas de résiliation après le début de l'exécution, le Client sera redevable du
            prix des prestations déjà effectuées.
          </p>

          <h3 className="article-title">11.2 Résiliation par le Vendeur</h3>
          <p>
            Le Vendeur peut résilier le contrat dans les cas suivants :
          </p>
          <ul>
            <li>Non-payment des sommes dues</li>
            <li>Violation des présentes CGV</li>
            <li>Fourniture de faux documents ou informations</li>
            <li>Utilisation du site à des fins illicites</li>
            <li>Comportement frauduleux ou abusif du Client</li>
          </ul>

          <h3 className="article-title">11.3 Remboursement</h3>
          <p>
            En cas de résiliation conformément aux CGV, le Vendeur procèdera au remboursement
            des sommes correspondantes aux prestations non exécutées, dans un délai de
            <strong>14 jours</strong> suivant la résiliation.
          </p>
        </div>

        {/* Article 12 - Force majeure */}
        <div className="section">
          <h2 className="section-title">
            <div className="section-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            </div>
            Article 12 - Force majeure
          </h2>
          <p>
            Le Vendeur ne pourra être tenu responsable de l'inexécution ou du retard dans l'exécution
            de ses obligations si ce retard ou cette inexécution résulte d'un cas de force majeure
            au sens de l'article 1218 du Code civil.
          </p>
          <p>
            Sont notamment considérés comme cas de force majeure : guerres, émeutes, grèves
            totales ou partielles, catastrophes naturelles, incendies, pandémies, interruptions
            des télécommunications, ainsi que tout événement échappant au contrôle du Vendeur.
          </p>
        </div>

        {/* Article 13 - Litiges et loi applicable */}
        <div className="section">
          <h2 className="section-title">
            <div className="section-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>
            </div>
            Article 13 - Litiges et loi applicable
          </h2>
          <h3 className="article-title">13.1 Loi applicable</h3>
          <p>
            Les présentes CGV sont régies par le droit français.
          </p>

          <h3 className="article-title">13.2 Médiation (consommateurs)</h3>
          <p>
            En cas de litige avec un consommateur, le Client peut recourir à un médiateur de
            la consommation conforme aux dispositions de l'article L. 616-1 du Code de consommation.
            Les coordonnées du médiateur seront communiquées sur demande.
          </p>

          <h3 className="article-title">13.3 Compétence juridictionnelle</h3>
          <p>
            Tout litige relatif à l'interprétation ou à l'exécution des présentes CGU sera soumis
            à la compétence exclusive des tribunaux de Paris.
          </p>
          <p>
            Pour les consommateurs, les juridictions du lieu de résidence du consommateur restent
            compétentes conformément aux dispositions du Code de consommation.
          </p>
        </div>

        {/* Article 14 - Contact */}
        <div className="section">
          <h2 className="section-title">
            <div className="section-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </div>
            Article 14 - Contact
          </h2>
          <p>
            Pour toute question relative aux présentes CGV ou à vos commandes,
            vous pouvez nous contacter :
          </p>
          <ul>
            <li>Par email : <a href="mailto:contact@visioflow.fr" style={{color:'#0071E3'}}>contact@visioflow.fr</a></li>
            <li>Par téléphone : +33 1 23 45 67 89</li>
            <li>Par courrier : VisioFlow, 12 Rue de la Paix, 75001 Paris</li>
          </ul>
          <p>
            Les présentes Conditions Générales de Vente sont entrées en vigueur le
            <strong>{new Date().toLocaleDateString('fr-FR', {day: 'numeric', month: 'long', year: 'numeric'})}</strong>.
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