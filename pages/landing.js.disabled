import Head from "next/head";
import { useEffect } from "react";
import Footer from "../components/Footer";

export default function LandingPage() {
  useEffect(() => {
    // Smooth scroll for anchor links
    const anchors = document.querySelectorAll('a[href^="#"]');
    const handlers = new Map();
    anchors.forEach(anchor => {
      const handler = function (e) {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      };
      anchor.addEventListener('click', handler);
      handlers.set(anchor, handler);
    });
    return () => {
      handlers.forEach((handler, anchor) => {
        anchor.removeEventListener('click', handler);
      });
    };
  }, []);

  const canonicalUrl = "https://visioflow.fr/landing";

  return (
    <>
      <Head>
        <title>Créer un site web pour votre restaurant — Visioflow | Site vitrine &amp; commandes en ligne</title>
        <meta
          name="description"
          content="Votre site restaurant professionnel avec menu en ligne, commandes et paiement intégré. Pack Essentiel 150€ ou Premium 490€ — livré en 5 jours, hébergement à vie inclus."
        />
        <meta name="keywords" content="créer site restaurant, site restaurant commandes en ligne, site vitrine restaurant pas cher, site web restaurant rapide, faire site internet restaurant, site restaurant menu en ligne, prise de commande en ligne restaurant" />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:title" content="Créer un site web pour votre restaurant — Visioflow" />
        <meta property="og:description" content="Votre site restaurant professionnel avec menu en ligne, commandes et paiement intégré. Pack Essentiel 150€ ou Premium 490€ — livré en 5 jours, hébergement à vie inclus." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:image" content="https://visioflow.fr/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Visioflow — Créer un site web pour votre restaurant" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Créer un site web pour votre restaurant — Visioflow" />
        <meta name="twitter:description" content="Votre site restaurant professionnel avec menu en ligne, commandes et paiement intégré. Pack Essentiel 150€ ou Premium 490€ — livré en 5 jours, hébergement à vie inclus." />
        <meta name="twitter:image" content="https://visioflow.fr/og-image.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Visioflow — Création site web restaurant professionnel",
              "description": "Service de création de sites web professionnels pour restaurants : site vitrine ou commandes en ligne, design sur mesure, hébergement inclus, livré en 5 jours maximum.",
              "provider": {
                "@type": "Organization",
                "name": "Visioflow",
                "url": "https://visioflow.fr"
              },
              "offers": [
                {
                  "@type": "Offer",
                  "name": "Pack Essentiel — Site vitrine restaurant",
                  "price": "150",
                  "priceCurrency": "EUR",
                  "description": "Site vitrine professionnel pour restaurant, design sur mesure, responsive mobile, hébergement à vie inclus. Livré en 5 jours."
                },
                {
                  "@type": "Offer",
                  "name": "Pack Premium — Site restaurant avec commandes en ligne",
                  "price": "490",
                  "priceCurrency": "EUR",
                  "description": "Site restaurant complet avec commandes en ligne, panier, paiement intégré Stripe et panel admin. Livré en 5 jours."
                }
              ],
              "areaServed": {
                "@type": "Country",
                "name": "France"
              },
              "availableLanguage": ["French"],
              "url": canonicalUrl
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Combien de temps pour recevoir mon site restaurant ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Votre site est livré en 5 jours maximum. Nos packs incluent design sur mesure, hébergement et mise en ligne complète."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Quel est le prix pour créer un site web de restaurant ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Visioflow propose deux packs : le Pack Essentiel à 150€ (site vitrine professionnel) et le Pack Premium à 490€ (site avec commandes en ligne, panier et paiement intégré). Paiement unique, sans abonnement."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Y a-t-il des frais mensuels pour le site de mon restaurant ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Non. Tous nos packs sont en paiement unique. L'hébergement est inclus à vie, sans abonnement caché."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Mon site restaurant sera-t-il visible sur mobile ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Oui. Tous nos sites sont conçus Mobile First : parfaitement optimisés pour smartphone, tablette et ordinateur."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Puis-je accepter des commandes en ligne sur mon site restaurant ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Oui, avec le Pack Premium à 490€. Il inclut un système de commandes en ligne, panier, paiement sécurisé via Stripe et un panel admin pour gérer votre menu."
                  }
                }
              ]
            })
          }}
        />
        <style>{`
          #vflp,#vflp *{box-sizing:border-box;margin:0;padding:0}
          #vflp{min-height:100vh;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif;background:#ffffff;color:#1e293b;line-height:1.6}
          #vflp a{text-decoration:none;transition:all .2s}
          #vflp .container{max-width:1200px;margin:0 auto;padding:0 20px}
          @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
          @keyframes pulse{0%,100%{opacity:1}50%{opacity:.5}}
          #vflp .nav{height:auto;background:rgba(255,255,255,.85);backdrop-filter:blur(10px);position:fixed;top:0;left:0;right:0;z-index:100;padding:16px 0;border-bottom:1px solid rgba(15,23,42,.08)}
          #vflp .nav-content{display:flex;justify-content:space-between;align-items:center}
          #vflp .logo{font-family:Outfit,sans-serif;font-size:28px;font-weight:900;color:#0f172a;display:flex;align-items:center;gap:10px}
          #vflp .logo span{color:#0071E3}
          #vflp .nav-links{display:flex;gap:32px}
          #vflp .nav-links a{color:#475569;font-size:14px;font-weight:500}
          #vflp .nav-links a:hover{color:#0f172a}
          #vflp .nav-cta{background:#0071E3;color:#fff;padding:10px 24px;border-radius:50px;font-weight:600;font-size:14px}
          #vflp .nav-cta:hover{background:#0056b3;transform:translateY(-2px)}
          #vflp .hero{min-height:100dvh;display:flex;align-items:center;justify-content:center;text-align:center;padding:120px 20px 80px;position:relative;overflow:hidden;background:#ffffff}
          #vflp .hero-bg{position:absolute;inset:0;background:linear-gradient(135deg,#ffffff 0%,#dbeafe 50%,#ffffff 100%);opacity:1}
          #vflp .hero-content{position:relative;z-index:1;max-width:900px}
          #vflp .hero-badge{display:inline-flex;align-items:center;gap:8px;background:rgba(0,113,227,.15);border:1px solid rgba(0,113,227,.3);padding:8px 20px;border-radius:50px;color:#0071E3;font-size:13px;font-weight:600;margin-bottom:24px}
          #vflp .hero-title{font-family:Outfit,sans-serif;font-size:clamp(42px,8vw,72px);font-weight:900;color:#0f172a;line-height:1.1;margin-bottom:20px;letter-spacing:-2px}
          #vflp .hero-sub{font-size:18px;color:#475569;margin-bottom:40px;max-width:700px;margin-left:auto;margin-right:auto}
          #vflp .hero-actions{display:flex;gap:16px;justify-content:center;flex-wrap:wrap}
          #vflp .hero-btn{padding:16px 40px;border-radius:50px;font-size:16px;font-weight:700;cursor:pointer;transition:all .3s;display:inline-flex;align-items:center;gap:8px}
          #vflp .hero-btn.primary{background:#0071E3;color:#fff;box-shadow:0 10px 40px rgba(0,113,227,.3)}
          #vflp .hero-btn.primary:hover{background:#0056b3;transform:translateY(-3px);box-shadow:0 15px 50px rgba(0,113,227,.4)}
          #vflp .hero-btn.secondary{background:rgba(15,23,42,.05);color:#0f172a;border:2px solid rgba(15,23,42,.15)}
          #vflp .hero-btn.secondary:hover{background:rgba(15,23,42,.08)}
          #vflp .section{padding:100px 20px}
          #vflp .section-title{font-family:Outfit,sans-serif;font-size:clamp(32px,5vw,48px);font-weight:900;color:#0f172a;text-align:center;margin-bottom:16px;letter-spacing:-1px}
          #vflp .section-sub{color:#475569;text-align:center;max-width:700px;margin:0 auto 60px;font-size:18px}
          #vflp .steps{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:32px;margin-top:60px}
          #vflp .step-card{background:#f8fafc;border:1px solid rgba(15,23,42,.08);border-radius:24px;padding:32px;transition:all .3s;box-shadow:0 2px 10px rgba(15,23,42,.04)}
          #vflp .step-card:hover{transform:translateY(-5px);border-color:rgba(0,113,227,.3);box-shadow:0 20px 60px rgba(0,113,227,.15)}
          #vflp .step-number{width:56px;height:56px;background:linear-gradient(135deg,#0071E3,#38bdf8);border-radius:16px;display:flex;align-items:center;justify-content:center;font-family:Outfit,sans-serif;font-size:24px;font-weight:900;color:#fff;margin-bottom:20px}
          #vflp .step-title{font-size:20px;font-weight:700;color:#0f172a;margin-bottom:12px}
          #vflp .step-desc{color:#475569;font-size:15px;line-height:1.7}
          #vflp .features{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px}
          #vflp .feature-card{background:#f8fafc;border:1px solid rgba(15,23,42,.08);border-radius:20px;padding:28px;transition:all .3s;box-shadow:0 2px 10px rgba(15,23,42,.04)}
          #vflp .feature-card:hover{background:#ffffff;border-color:rgba(0,113,227,.3)}
          #vflp .feature-icon{width:48px;height:48px;background:rgba(0,113,227,.15);border-radius:14px;display:flex;align-items:center;justify-content:center;color:#0071E3;margin-bottom:16px}
          #vflp .feature-title{font-size:18px;font-weight:700;color:#0f172a;margin-bottom:8px}
          #vflp .feature-desc{color:#475569;font-size:14px;line-height:1.6}
          #vflp .feature-link{display:inline-flex;align-items:center;gap:6px;margin-top:16px;color:#0071E3;font-size:14px;font-weight:600}
          #vflp .feature-link:hover{gap:10px}
          #vflp .pricing{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:32px;max-width:900px;margin:0 auto}
          #vflp .pricing-card{background:#f8fafc;border:1px solid rgba(15,23,42,.08);border-radius:28px;padding:40px;position:relative;transition:all .3s;box-shadow:0 2px 10px rgba(15,23,42,.04)}
          #vflp .pricing-card.featured{border-color:#0071E3;box-shadow:0 20px 60px rgba(0,113,227,.2)}
          #vflp .pricing-card:hover{transform:translateY(-8px)}
          #vflp .pricing-badge{position:absolute;top:-14px;left:50%;transform:translateX(-50%);background:#0071E3;color:#fff;padding:6px 20px;border-radius:50px;font-size:12px;font-weight:700}
          #vflp .pricing-name{font-family:Outfit,sans-serif;font-size:28px;font-weight:900;color:#0f172a;margin-bottom:8px}
          #vflp .pricing-desc{color:#475569;font-size:15px;margin-bottom:24px;line-height:1.6}
          #vflp .pricing-price{font-family:Outfit,sans-serif;font-size:56px;font-weight:900;color:#0f172a;margin-bottom:20px}
          #vflp .pricing-price span{font-size:18px;color:#475569;font-weight:500}
          #vflp .pricing-features{margin-bottom:32px}
          #vflp .pricing-feature{display:flex;align-items:center;gap:12px;margin-bottom:14px;color:#475569;font-size:15px}
          #vflp .pricing-feature svg{color:#34d399;flex-shrink:0}
          #vflp .pricing-btn{width:100%;padding:18px;border-radius:16px;background:#0071E3;color:#fff;font-size:16px;font-weight:700;border:none;cursor:pointer;transition:all .3s;font-family:Inter,sans-serif}
          #vflp .pricing-btn:hover{background:#0056b3;transform:translateY(-2px)}
          #vflp .pricing-btn.secondary{background:rgba(15,23,42,.05);color:#0f172a;border:2px solid rgba(15,23,42,.15)}
          #vflp .pricing-btn.secondary:hover{background:rgba(15,23,42,.08)}
          #vflp .faq{max-width:800px;margin:0 auto}
          #vflp .faq-item{border-bottom:1px solid rgba(15,23,42,.08);padding:24px 0}
          #vflp .faq-question{font-size:18px;font-weight:700;color:#0f172a;margin-bottom:8px;cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:16px}
          #vflp .faq-question:hover{color:#0071E3}
          #vflp .faq-answer{color:#475569;line-height:1.7;font-size:15px}
          #vflp .cta{background:linear-gradient(135deg,#0071E3 0%,#38bdf8 100%);border-radius:32px;padding:80px 20px;text-align:center;margin:100px 20px 0}
          #vflp .cta h2{font-family:Outfit,sans-serif;font-size:clamp(32px,5vw,48px);font-weight:900;color:#fff;margin-bottom:16px}
          #vflp .cta p{color:rgba(255,255,255,.8);font-size:18px;margin-bottom:32px;max-width:700px;margin-left:auto;margin-right:auto}
          #vflp .footer{background:#f8fafc;padding:60px 20px;border-top:1px solid rgba(15,23,42,.08)}
          #vflp .footer-content{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:40px}
          #vflp .footer-col h4{color:#0f172a;font-size:16px;font-weight:700;margin-bottom:20px}
          #vflp .footer-links{display:flex;flex-direction:column;gap:12px}
          #vflp .footer-links a{color:#475569;font-size:14px;transition:color .2s}
          #vflp .footer-links a:hover{color:#0071E3}
          #vflp .footer-bottom{max-width:1200px;margin:40px auto 0;padding-top:32px;border-top:1px solid rgba(15,23,42,.08);text-align:center;color:#64748b;font-size:13px}
          @media(max-width:768px){
            #vflp .nav-links{display:none}
            #vflp .hero-title{font-size:36px}
            #vflp .pricing{grid-template-columns:1fr}
          }
        `}</style>
      </Head>


      <div id="vflp">
      {/* Navigation */}
      <nav className="nav">
        <div className="container nav-content">
          <a href="/" className="logo"><img src="/logo.svg" alt="VisioFlow" width="32" height="32" />Visio<span>flow</span></a>
          <div className="nav-links">
            <a href="#comment-ca-marche">Comment ça marche</a>
            <a href="#avantages">Avantages</a>
            <a href="#tarifs">Tarifs</a>
            <a href="#faq">FAQ</a>
          </div>
          <a href="/paiement" className="nav-cta">Commencer →</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-content">
          <div className="hero-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            Livré en 5 jours maximum
          </div>
          <h1 className="hero-title">
            Votre site restaurant professionnel<br />
            avec commandes en ligne
          </h1>
          <p className="hero-sub">
            Visioflow crée des sites web modernes et performants pour restaurants.
            Développez votre activité avec un <a href="/paiement" style={{color:'#0071E3',fontWeight:600}}>site avec commandes en ligne</a>,
            optimisé pour mobile et livré en 5 jours maximum.
          </p>
          <div className="hero-actions">
            <a href="/paiement" className="hero-btn primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
              Créer mon site
            </a>
            <a href="/vitrine" className="hero-btn secondary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              Voir une démo
            </a>
          </div>
          <div style={{marginTop:40,display:'flex',flexWrap:'wrap',gap:20,justifyContent:'center',fontSize:14,color:'#64748b'}}>
            <span>🚀 Livré en 5 jours</span>
            <span>✓ Sans abonnement</span>
            <span>📱 100% mobile</span>
            <span>💳 Paiements intégrés</span>
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section id="comment-ca-marche" className="section">
        <div className="container">
          <h2 className="section-title">Comment ça marche ?</h2>
          <p className="section-sub">
            En seulement 3 étapes simples, obtenez un site professionnel pour votre restaurant.
            Notre <a href="/" style={{color:'#0071E3'}}>service de création de site</a> est conçu pour être simple et rapide.
          </p>
          <div className="steps">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3 className="step-title">Choisissez votre pack</h3>
              <p className="step-desc">
                Sélectionnez l'offre adaptée à votre projet :
                le Pack Essentiel pour un site vitrine ou
                le Pack Premium pour les commandes en ligne.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3 className="step-title">Personnalisez votre site</h3>
              <p className="step-desc">
                Donnez-nous vos informations et préférences. Notre équipe crée un site sur mesure avec votre
                menu et vos horaires.
                Design moderne, photos de qualité, tout est optimisé.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3 className="step-title">Lancez votre activité</h3>
              <p className="step-desc">
                Recevez votre site en 5 jours et commencez à prendre des commandes.
                Notre <a href="/paiement" style={{color:'#0071E3',fontWeight:600}}>solution complète</a> inclut
                l'hébergement, les paiements et le support technique.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section id="avantages" style={{background:'rgba(15,23,42,.02)'}}>
        <div className="container">
          <h2 className="section-title">Pourquoi choisir Visioflow ?</h2>
          <p className="section-sub">
            Notre service de création de sites web offre
            de nombreux avantages pour développer votre activité en ligne.
          </p>
          <div className="features">
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              </div>
              <h3 className="feature-title">Livraison en 5 jours</h3>
              <p className="feature-desc">
                Votre site est prêt en 5 jours maximum. Comparez avec les <a href="/paiement" style={{color:'#0071E3'}}>agences classiques</a>
                qui prennent plusieurs semaines.
              </p>
              <a href="/vitrine" className="feature-link">
                Voir un exemple <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3h18v18H3zM9 9h6M9 13h6M9 17h6"/></svg>
              </div>
              <h3 className="feature-title">Commandes en ligne</h3>
              <p className="feature-desc">
                Acceptez les commandes directement via votre site. Le Pack Premium
                inclut panier, paiement et gestion des commandes.
              </p>
              <a href="/paiement" className="feature-link">
                Découvrir le pack <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>
              </div>
              <h3 className="feature-title">Mobile First Design</h3>
              <p className="feature-desc">
                Votre site est parfaitement
                optimisé pour tous les appareils : smartphone, tablette et ordinateur.
              </p>
              <a href="/vitrine" className="feature-link">
                Tester sur mobile <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              </div>
              <h3 className="feature-title">Hébergement inclus</h3>
              <p className="feature-desc">
                Pas de frais supplémentaires. L'hébergement à vie est inclus dans tous nos packs.
              </p>
              <a href="/paiement" className="feature-link">
                Voir les prix <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg>
              </div>
              <h3 className="feature-title">Support dédié</h3>
              <p className="feature-desc">
                Notre équipe est à votre disposition pour vous aider. Le
                service client répond en moins de 24h.
              </p>
              <a href="/" className="feature-link">
                Nous contacter <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <h3 className="feature-title">SEO optimisé</h3>
              <p className="feature-desc">
                Votre site vitrine est optimisé
                pour les moteurs de recherche. Attirez plus de clients potentiels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section id="tarifs" className="section">
        <div className="container">
          <h2 className="section-title">Nos packs</h2>
          <p className="section-sub">
            Choisissez l'offre adaptée à vos besoins. Deux solutions pour créer votre
            site sans abonnement.
          </p>
          <div className="pricing">
            <div className="pricing-card">
              <div className="pricing-name">Pack Essentiel</div>
              <div className="pricing-desc">
                Site vitrine professionnel pour votre restaurant. Idéal pour présenter votre établissement.
              </div>
              <div className="pricing-price">150€ <span>/ unique</span></div>
              <div className="pricing-features">
                <div className="pricing-feature">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  Site vitrine professionnel
                </div>
                <div className="pricing-feature">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  Design sur mesure
                </div>
                <div className="pricing-feature">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  Responsive mobile
                </div>
                <div className="pricing-feature">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  Livré en 5 jours
                </div>
                <div className="pricing-feature">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  Hébergement à vie inclus
                </div>
              </div>
              <a href="/paiement?pack=essentiel" className="pricing-btn secondary">Choisir ce pack</a>
              <div style={{textAlign:'center',marginTop:'16px'}}>
                <a href="/vitrine" style={{color:'#475569',fontSize:'13px'}}>Voir un exemple →</a>
              </div>
            </div>
            <div className="pricing-card featured">
              <div className="pricing-badge">Recommandé</div>
              <div className="pricing-name">Pack Premium</div>
              <div className="pricing-desc">
                Site complet avec commandes en ligne, panier et paiement intégré. Panel admin inclus.
              </div>
              <div className="pricing-price">490€ <span>/ unique</span></div>
              <div className="pricing-features">
                <div className="pricing-feature">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  Site avec commandes en ligne
                </div>
                <div className="pricing-feature">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  Panier & paiement intégré
                </div>
                <div className="pricing-feature">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  Panel admin restaurant
                </div>
                <div className="pricing-feature">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  Responsive mobile
                </div>
                <div className="pricing-feature">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  Livré en 5 jours
                </div>
                <div className="pricing-feature">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  Hébergement à vie inclus
                </div>
              </div>
              <a href="/paiement?pack=premium" className="pricing-btn">Choisir ce pack</a>
            </div>
          </div>
          <div style={{textAlign:'center',marginTop:'40px',maxWidth:'600px',margin:'40px auto 0'}}>
            <p style={{color:'#475569',fontSize:'14px',marginBottom:'16px'}}>
              Besoin d'aide pour choisir ? Comparez nos solutions et découvrez
              <a href="/vitrine" style={{color:'#0071E3',fontWeight:600}}> les exemples de sites</a> que nous créons.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{background:'rgba(15,23,42,.02)'}}>
        <div className="container">
          <h2 className="section-title">Questions fréquentes</h2>
          <p className="section-sub">
            Tout savoir sur notre service de création de site pour restaurants.
          </p>
          <div className="faq">
            <div className="faq-item">
              <h3 className="faq-question">Combien de temps pour recevoir mon site ?</h3>
              <p className="faq-answer">
                Votre site est livré en 5 jours maximum. Comparez avec les <a href="/paiement" style={{color:'#0071E3'}}>agences classiques</a>
                qui prennent plusieurs semaines. Notre <a href="/" style={{color:'#0071E3'}}>processus optimisé</a> garantit
                une livraison rapide sans compromis sur la qualité.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Le paiement est-il sécurisé ?</h3>
              <p className="faq-answer">
                Oui, nous utilisons Stripe, un leader des paiements en ligne. Le Pack Premium
                inclut l'intégration complète des paiements sur votre site.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Puis-je modifier mon site ensuite ?</h3>
              <p className="faq-answer">
                Bien sûr. Le panel admin vous permet de modifier
                votre menu, vos horaires et vos photos. Le Pack Essentiel
                inclut également des modifications simples via notre support.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Y a-t-il des frais mensuels ?</h3>
              <p className="faq-answer">
                Non, tous nos packs sont en paiement unique.
                L'hébergement est inclus à vie. Contrairement à d'autres services,
                nous n'avons pas d'abonnement caché.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Puis-je voir un exemple avant de commander ?</h3>
              <p className="faq-answer">
                Oui, visitez notre page de démonstration
                pour voir un exemple de site avec toutes les fonctionnalités.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta">
        <h2>Prêt à lancer votre site ?</h2>
        <p>
          Créez votre site professionnel en 48 heures. Choisissez votre pack et commencez à développer
          votre activité en ligne avec notre <a href="/vitrine" style={{color:'rgba(255,255,255,.9)',textDecoration:'underline'}}>solution de commande en ligne</a>.
        </p>
        <div className="hero-actions" style={{justifyContent:'center'}}>
          <a href="/paiement" className="hero-btn" style={{background:'#fff',color:'#0071E3'}}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
            Créer mon site
          </a>
          <a href="/vitrine" className="hero-btn" style={{background:'rgba(255,255,255,.2)',color:'#fff',border:'2px solid rgba(255,255,255,.3)'}}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            Voir une démo
          </a>
        </div>
        <div style={{marginTop:'32px',fontSize:'13px',color:'rgba(255,255,255,.7)'}}>
          <a href="/" style={{color:'rgba(255,255,255,.7)',marginRight:'20px'}}>← Retour à l'accueil</a>
          <a href="#comment-ca-marche" style={{color:'rgba(255,255,255,.7)',marginRight:'20px'}}>Comment ça marche</a>
          <a href="#avantages" style={{color:'rgba(255,255,255,.7)'}}>Nos avantages</a>
        </div>
      </div>

      <Footer />
      </div>
    </>
  );
}