import Head from 'next/head';
import Footer from '../components/Footer';

const canonicalUrl = "https://visioflow.fr/tarifs";

export default function Tarifs() {
  return (
    <>
      <Head>
        <title>Tarifs Création Site Restaurant | Pack Essentiel 150€ ou Premium 490€</title>
        <meta
          name="description"
          content="Découvrez les tarifs Visioflow pour créer votre site web de restaurant. Pack Essentiel 150€ ou Pack Premium 490€, livré en 48 heures. Sans abonnement, hébergement à vie inclus."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Tarifs Création Site Restaurant | Pack Essentiel 150€ ou Premium 490€" />
        <meta property="og:description" content="Découvrez les tarifs Visioflow pour créer votre site web de restaurant. Pack Essentiel 150€ ou Pack Premium 490€, livré en 48 heures. Sans abonnement." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="VisioFlow" />

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Combien coûte un site web de restaurant chez Visioflow ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Chez Visioflow, un site web de restaurant coûte 150€ pour le Pack Essentiel (site vitrine professionnel) ou 490€ pour le Pack Premium (site avec commandes en ligne, panier et paiement intégré). Tous nos packs sont en paiement unique, sans abonnement, et incluent l'hébergement à vie."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Y a-t-il des frais mensuels ou d'abonnement ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Non, il n'y a aucun frais mensuel ni abonnement chez Visioflow. Tous nos packs sont en paiement unique. L'hébergement, le support technique et les mises à jour sont inclus à vie dans le prix initial de 150€ ou 490€."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Quelle est la différence entre le Pack Essentiel et le Pack Premium ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Le Pack Essentiel (150€) inclut un site vitrine professionnel avec menu digital, horaires et photos. Le Pack Premium (490€) ajoute les commandes en ligne, un panier fonctionnel, le paiement intégré via Stripe et un panel admin restaurant pour gérer vos commandes. Les deux packs sont livrés en 48 heures avec hébergement à vie inclus."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Combien de temps pour recevoir mon site web de restaurant ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Votre site web de restaurant est livré en 48 heures après confirmation de votre commande et réception de vos informations (menu, horaires, photos, etc.). Notre processus optimisé garantit une livraison rapide sans compromis sur la qualité."
                  }
                },
                {
                  "@type": "Question",
                  "name": "L'hébergement est-il inclus dans le prix ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Oui, l'hébergement web est inclus à vie dans tous nos packs Essentiel et Premium. Nous nous chargeons de la configuration, de la maintenance et des mises à jour techniques. Aucun frais d'hébergement mensuel n'est à prévoir."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Puis-je modifier mon site web après la livraison ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Oui, vous pouvez modifier votre site web après la livraison. Le Pack Premium inclut un panel admin restaurant pour modifier votre menu, vos horaires et vos photos en toute autonomie. Pour le Pack Essentiel, notre support technique effectue les modifications simples gratuitement dans un délai de 24 heures."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Les paiements en ligne sont-ils sécurisés ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Oui, les paiements en ligne sont entièrement sécurisés via Stripe, leader mondial des paiements en ligne. Stripe est conforme à la norme PCI DSS (Payment Card Industry Data Security Standard) et garantit la sécurité de toutes les transactions. Vos clients paient en toute confiance."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Visioflow travaille-t-elle avec des petits restaurants ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Oui, Visioflow travaille avec tous les types de restaurants, des petits bistrots aux grandes brasseries. Nos packs sont adaptés aux besoins des restaurateurs indépendants. Le Pack Essentiel (150€) est particulièrement adapté aux petits restaurants qui souhaitent un site vitrine professionnel, tandis que le Pack Premium (490€) convient aux restaurants qui veulent accepter des commandes en ligne."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Y a-t-il des frais supplémentaires cachés ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Non, il n'y a aucun frais supplémentaire caché chez Visioflow. Le prix indiqué (150€ ou 490€) est le prix final. L'hébergement, le support technique, les mises à jour et les modifications simples sont inclus. Les seuls frais supplémentaires éventuels sont pour des modifications majeures ou des ajouts de fonctionnalités personnalisées sur devis."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Puis-je changer de pack après la création de mon site ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Oui, vous pouvez changer de pack à tout moment après la création de votre site. Si vous avez choisi le Pack Essentiel (150€) et souhaitez passer au Pack Premium (490€), nous vous proposons une évolution à prix réduit. Contactez notre support pour discuter de vos besoins et obtenir un devis personnalisé."
                  }
                }
              ]
            })
          }}
        />

        {/* Offer Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Offer",
                "name": "Pack Essentiel - Site Vitrine Restaurant",
                "price": "150",
                "priceCurrency": "EUR",
                "description": "Site vitrine professionnel pour restaurant avec menu digital, horaires et photos. Livré en 48 heures. Hébergement à vie inclus.",
                "availability": "https://schema.org/InStock",
                "url": "https://visioflow.fr/tarifs",
                "seller": {
                  "@type": "Organization",
                  "name": "VisioFlow",
                  "url": "https://visioflow.fr"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "Offer",
                "name": "Pack Premium - Site Restaurant avec Commandes en Ligne",
                "price": "490",
                "priceCurrency": "EUR",
                "description": "Site complet avec commandes en ligne, panier, paiement intégré et panel admin restaurant. Livré en 48 heures. Hébergement à vie inclus.",
                "availability": "https://schema.org/InStock",
                "url": "https://visioflow.fr/tarifs",
                "seller": {
                  "@type": "Organization",
                  "name": "VisioFlow",
                  "url": "https://visioflow.fr"
                }
              }
            ])
          }}
        />

        <style>{`
          *{box-sizing:border-box;margin:0;padding:0}
          body{font-family:'Inter',-apple-system,BlinkMacSystemFont,sans-serif;background:#0f172a;color:#f1f5f9;line-height:1.6}
          .container{max-width:1200px;margin:0 auto;padding:0 20px}
          .hero{min-height:80vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:100px 20px 60px;position:relative}
          .hero-bg{position:absolute;inset:0;background:linear-gradient(135deg,#0f172a 0%,#1e3a5f 50%,#0f172a 100%);opacity:.3}
          .hero-content{position:relative;z-index:1;max-width:900px}
          .hero-badge{display:inline-flex;align-items:center;gap:8px;background:rgba(0,113,227,.15);border:1px solid rgba(0,113,227,.3);padding:8px 20px;border-radius:50px;color:#0071E3;font-size:13px;font-weight:600;margin-bottom:24px}
          .hero-title{font-family:'Outfit',sans-serif;font-size:clamp(40px,7vw,64px);font-weight:900;color:#fff;line-height:1.1;margin-bottom:20px;letter-spacing:-2px}
          .hero-sub{font-size:18px;color:#94a3b8;margin-bottom:40px;max-width:700px;margin-left:auto;margin-right:auto}
          .section{padding:100px 20px}
          .pricing{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:32px;max-width:900px;margin:0 auto}
          .pricing-card{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:28px;padding:40px;position:relative;transition:all .3s}
          .pricing-card.featured{border-color:#0071E3;box-shadow:0 20px 60px rgba(0,113,227,.2)}
          .pricing-card:hover{transform:translateY(-8px)}
          .pricing-badge{position:absolute;top:-14px;left:50%;transform:translateX(-50%);background:#0071E3;color:#fff;padding:6px 20px;border-radius:50px;font-size:12px;font-weight:700}
          .pricing-name{font-family:'Outfit',sans-serif;font-size:28px;font-weight:900;color:#fff;margin-bottom:8px}
          .pricing-desc{color:#94a3b8;font-size:15px;margin-bottom:24px;line-height:1.6}
          .pricing-price{font-family:'Outfit',sans-serif;font-size:56px;font-weight:900;color:#fff;margin-bottom:20px}
          .pricing-price span{font-size:18px;color:#94a3b8;font-weight:500}
          .pricing-features{margin-bottom:32px}
          .pricing-feature{display:flex;align-items:center;gap:12px;margin-bottom:14px;color:#cbd5e1;font-size:15px}
          .pricing-feature svg{color:#34d399;flex-shrink:0}
          .pricing-btn{width:100%;padding:18px;border-radius:16px;background:#0071E3;color:#fff;font-size:16px;font-weight:700;border:none;cursor:pointer;transition:all .3s;font-family:'Inter',sans-serif;text-decoration:none;display:block;text-align:center}
          .pricing-btn:hover{background:#0056b3;transform:translateY(-2px)}
          .pricing-btn.secondary{background:rgba(255,255,255,.1);color:#fff;border:2px solid rgba(255,255,255,.2)}
          .pricing-btn.secondary:hover{background:rgba(255,255,255,.15)}
          .faq{max-width:800px;margin:0 auto}
          .faq-item{border-bottom:1px solid rgba(255,255,255,.1);padding:24px 0}
          .faq-question{font-size:18px;font-weight:700;color:#fff;margin-bottom:8px}
          .faq-answer{color:#94a3b8;line-height:1.7;font-size:15px}
          .cta{background:linear-gradient(135deg,#0071E3 0%,#38bdf8 100%);border-radius:32px;padding:80px 20px;text-align:center;margin:100px 20px 0}
          .cta h2{font-family:'Outfit',sans-serif;font-size:clamp(32px,5vw,48px);font-weight:900;color:#fff;margin-bottom:16px}
          .cta p{color:rgba(255,255,255,.8);font-size:18px;margin-bottom:32px;max-width:700px;margin-left:auto;margin-right:auto}
          .footer{background:#0f172a;padding:60px 20px;border-top:1px solid rgba(255,255,255,.1);text-align:center;color:#64748b;font-size:13px}
          .nav{background:rgba(15,23,42,.9);backdrop-filter:blur(10px);position:fixed;top:0;left:0;right:0;z-index:100;padding:16px 0;border-bottom:1px solid rgba(255,255,255,.1)}
          .nav-content{display:flex;justify-content:space-between;align-items:center}
          .logo{font-family:'Outfit',sans-serif;font-size:28px;font-weight:900;color:#fff;display:flex;align-items:center;gap:10px}
          .logo span{color:#0071E3}
          .nav-links{display:flex;gap:32px}
          .nav-links a{color:#94a3b8;font-size:14px;font-weight:500;text-decoration:none;transition:all .2s}
          .nav-links a:hover{color:#fff}
          .nav-cta{background:#0071E3;color:#fff;padding:10px 24px;border-radius:50px;font-weight:600;font-size:14px;text-decoration:none;transition:all .2s}
          .nav-cta:hover{background:#0056b3;transform:translateY(-2px)}
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
          <div className="hero-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            Prix sans abonnement
          </div>
          <h1 className="hero-title">
            Tarifs création site web restaurant<br />
            Essentiel 150€ ou Premium 490€
          </h1>
          <p className="hero-sub">
            Créez votre site web de restaurant professionnel en 48 heures.
            Choisissez le pack adapté à vos besoins. Hébergement à vie inclus.
            Pas de frais mensuels, paiement unique.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section">
        <div className="container">
          <div className="pricing">
            <div className="pricing-card">
              <div className="pricing-name">Pack Essentiel</div>
              <div className="pricing-desc">
                Site vitrine professionnel pour votre restaurant avec menu digital,
                horaires et photos. Idéal pour présenter votre établissement.
              </div>
              <div className="pricing-price">150€ <span>/ unique</span></div>
              <div className="pricing-features">
                <div className="pricing-feature">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  Site vitrine professionnel
                </div>
                <div className="pricing-feature">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  Menu digital complet
                </div>
                <div className="pricing-feature">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  Horaires d'ouverture
                </div>
                <div className="pricing-feature">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  Photos et galerie
                </div>
                <div className="pricing-feature">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  Responsive mobile
                </div>
                <div className="pricing-feature">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  Livré en 48 heures
                </div>
                <div className="pricing-feature">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  Hébergement à vie inclus
                </div>
                <div className="pricing-feature">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  Support technique 24/7
                </div>
                <div className="pricing-feature">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  Sans abonnement
                </div>
              </div>
              <a href="/paiement?pack=essentiel" className="pricing-btn secondary">Choisir ce pack</a>
              <div style={{textAlign:'center',marginTop:'16px'}}>
                <a href="/vitrine" style={{color:'#94a3b8',fontSize:'13px',textDecoration:'none'}}>Voir un exemple →</a>
              </div>
            </div>

            <div className="pricing-card featured">
              <div className="pricing-badge">Recommandé</div>
              <div className="pricing-name">Pack Premium</div>
              <div className="pricing-desc">
                Site complet avec commandes en ligne, panier fonctionnel, paiement
                intégré via Stripe et panel admin restaurant pour gérer vos commandes.
              </div>
              <div className="pricing-price">490€ <span>/ unique</span></div>
              <div className="pricing-features">
                <div className="pricing-feature">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  Tout le Pack Essentiel
                </div>
                <div className="pricing-feature">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  Commandes en ligne
                </div>
                <div className="pricing-feature">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  Panier fonctionnel
                </div>
                <div className="pricing-feature">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  Paiement Stripe sécurisé
                </div>
                <div className="pricing-feature">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  Panel admin restaurant
                </div>
                <div className="pricing-feature">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  Gestion des commandes
                </div>
                <div className="pricing-feature">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  Intégration UberEats/Deliveroo
                </div>
                <div className="pricing-feature">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  Notifications client
                </div>
                <div className="pricing-feature">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  Analytics avancés
                </div>
                <div className="pricing-feature">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  Sans abonnement
                </div>
              </div>
              <a href="/paiement?pack=premium" className="pricing-btn">Choisir ce pack</a>
              <div style={{textAlign:'center',marginTop:'16px'}}>
                <a href="/vitrine" style={{color:'#94a3b8',fontSize:'13px',textDecoration:'none'}}>Voir une démo complète →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section" style={{background:'rgba(255,255,255,.02)'}}>
        <div className="container">
          <h2 style={{fontFamily:'Outfit, sans-serif',fontSize:'clamp(28px,5vw,44px)',fontWeight:800,color:'#fff',textAlign:'center',marginBottom:'16px',letterSpacing:'-1px'}}>Questions fréquentes</h2>
          <p style={{color:'#94a3b8',textAlign:'center',maxWidth:'700px',margin:'0 auto 60px',fontSize:'18px'}}>
            Tout savoir sur nos tarifs et nos packs de création de site web pour restaurant.
          </p>
          <div className="faq">
            <div className="faq-item">
              <h3 className="faq-question">Combien coûte un site web de restaurant chez Visioflow ?</h3>
              <p className="faq-answer">
                Chez Visioflow, un site web de restaurant coûte 150€ pour le Pack Essentiel (site vitrine professionnel)
                ou 490€ pour le Pack Premium (site avec commandes en ligne, panier et paiement intégré).
                Tous nos packs sont en paiement unique, sans abonnement, et incluent l'hébergement à vie.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Y a-t-il des frais mensuels ou d'abonnement ?</h3>
              <p className="faq-answer">
                Non, il n'y a aucun frais mensuel ni abonnement chez Visioflow. Tous nos packs sont en paiement unique.
                L'hébergement, le support technique et les mises à jour sont inclus à vie dans le prix initial de 150€ ou 490€.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Quelle est la différence entre le Pack Essentiel et le Pack Premium ?</h3>
              <p className="faq-answer">
                Le Pack Essentiel (150€) inclut un site vitrine professionnel avec menu digital, horaires et photos.
                Le Pack Premium (490€) ajoute les commandes en ligne, un panier fonctionnel, le paiement intégré via Stripe
                et un panel admin restaurant pour gérer vos commandes. Les deux packs sont livrés en 48 heures avec hébergement à vie inclus.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Combien de temps pour recevoir mon site web de restaurant ?</h3>
              <p className="faq-answer">
                Votre site web de restaurant est livré en 48 heures après confirmation de votre commande et réception de
                vos informations (menu, horaires, photos, etc.). Notre processus optimisé garantit une livraison rapide
                sans compromis sur la qualité.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">L'hébergement est-il inclus dans le prix ?</h3>
              <p className="faq-answer">
                Oui, l'hébergement web est inclus à vie dans tous nos packs Essentiel et Premium. Nous nous chargeons de la
                configuration, de la maintenance et des mises à jour techniques. Aucun frais d'hébergement mensuel n'est à prévoir.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Puis-je modifier mon site web après la livraison ?</h3>
              <p className="faq-answer">
                Oui, vous pouvez modifier votre site web après la livraison. Le Pack Premium inclut un panel admin restaurant
                pour modifier votre menu, vos horaires et vos photos en toute autonomie. Pour le Pack Essentiel, notre support
                technique effectue les modifications simples gratuitement dans un délai de 24 heures.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Les paiements en ligne sont-ils sécurisés ?</h3>
              <p className="faq-answer">
                Oui, les paiements en ligne sont entièrement sécurisés via Stripe, leader mondial des paiements en ligne.
                Stripe est conforme à la norme PCI DSS (Payment Card Industry Data Security Standard) et garantit la sécurité
                de toutes les transactions. Vos clients paient en toute confiance.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Visioflow travaille-t-elle avec des petits restaurants ?</h3>
              <p className="faq-answer">
                Oui, Visioflow travaille avec tous les types de restaurants, des petits bistrots aux grandes brasseries.
                Nos packs sont adaptés aux besoins des restaurateurs indépendants. Le Pack Essentiel (150€) est particulièrement
                adapté aux petits restaurants qui souhaitent un site vitrine professionnel, tandis que le Pack Premium (490€)
                convient aux restaurants qui veulent accepter des commandes en ligne.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Y a-t-il des frais supplémentaires cachés ?</h3>
              <p className="faq-answer">
                Non, il n'y a aucun frais supplémentaire caché chez Visioflow. Le prix indiqué (150€ ou 490€) est le prix final.
                L'hébergement, le support technique, les mises à jour et les modifications simples sont inclus. Les seuls frais
                supplémentaires éventuels sont pour des modifications majeures ou des ajouts de fonctionnalités personnalisées sur devis.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Puis-je changer de pack après la création de mon site ?</h3>
              <p className="faq-answer">
                Oui, vous pouvez changer de pack à tout moment après la création de votre site. Si vous avez choisi le Pack
                Essentiel (150€) et souhaitez passer au Pack Premium (490€), nous vous proposons une évolution à prix réduit.
                Contactez notre support pour discuter de vos besoins et obtenir un devis personnalisé.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="cta">
        <h2>Prêt à créer votre site web de restaurant ?</h2>
        <p>
          Choisissez votre pack et recevez votre site professionnel en 48 heures.
          Hébergement à vie inclus, sans abonnement. Commencez maintenant.
        </p>
        <div style={{display:'flex',gap:'16px',justifyContent:'center',flexWrap:'wrap'}}>
          <a href="/paiement?pack=premium" style={{padding:'16px 40px',borderRadius:'50px',background:'#fff',color:'#0071E3',fontSize:'16px',fontWeight:700,textDecoration:'none',display:'inline-block',transition:'all .3s'}}>
            Créer mon site (Pack Premium)
          </a>
          <a href="/paiement?pack=essentiel" style={{padding:'16px 40px',borderRadius:'50px',background:'rgba(255,255,255,.2)',color:'#fff',border:'2px solid rgba(255,255,255,.3)',fontSize:'16px',fontWeight:700,textDecoration:'none',display:'inline-block',transition:'all .3s'}}>
            Créer mon site (Pack Essentiel)
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
}