import Head from 'next/head';
import Link from 'next/link';

const canonicalUrl = "https://visioflow.fr/services/site-restaurant-avec-commandes-livraison";

export default function ServiceCommandesLigne() {
  return (
    <>
      <Head>
        <title>Site Restaurant avec Commandes en Ligne | Pack Premium 490€</title>
        <meta
          name="description"
          content="VisioFlow crée votre site restaurant avec commandes en ligne, panier et paiement intégré. Pack Premium 490€, livré en 48 heures. Sans abonnement, hébergement à vie inclus."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Site Restaurant avec Commandes en Ligne | Pack Premium 490€" />
        <meta property="og:description" content="VisioFlow crée votre site restaurant avec commandes en ligne, panier et paiement intégré. Pack Premium 490€, livré en 48 heures. Sans abonnement, hébergement à vie inclus." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="VisioFlow" />

        {/* HowTo Schema - Comment utiliser les commandes en ligne */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HowTo",
              "name": "Comment utiliser les commandes en ligne sur votre site restaurant",
              "description": "Guide complet pour accepter et gérer les commandes en ligne sur votre site restaurant avec VisioFlow.",
              "step": [
                {
                  "@type": "HowToStep",
                  "text": "Sélectionnez le Pack Premium pour activer les commandes en ligne",
                  "image": "https://visioflow.fr/images/step-premium.jpg",
                  "name": "Choisir le Pack Premium"
                },
                {
                  "@type": "HowToStep",
                  "text": "Configurez votre menu avec prix, photos et descriptions",
                  "image": "https://visioflow.fr/images/step-menu.jpg",
                  "name": "Configurer le menu"
                },
                {
                  "@type": "HowToStep",
                  "text": "Activez les paiements Stripe sécurisés",
                  "image": "https://visioflow.fr/images/step-stripe.jpg",
                  "name": "Configurer les paiements"
                },
                {
                  "@type": "HowToStep",
                  "text": "Recevez et gérez vos commandes via le panel admin",
                  "image": "https://visioflow.fr/images/step-admin.jpg",
                  "name": "Gérer les commandes"
                }
              ]
            })
          }}
        />

        <style>{`
          *{box-sizing:border-box;margin:0;padding:0}
          body{font-family:'Inter Tight',-apple-system,BlinkMacSystemFont,sans-serif;background:#0f172a;color:#f1f5f9;line-height:1.6}
          .container{max-width:1200px;margin:0 auto;padding:0 20px}
          .hero{min-height:70vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:100px 20px 60px;position:relative}
          .hero-bg{position:absolute;inset:0;background:linear-gradient(135deg,#0f172a 0%,#1e3a5f 50%,#0f172a 100%);opacity:.3}
          .hero-content{position:relative;z-index:1;max-width:900px}
          .hero-badge{display:inline-flex;align-items:center;gap:8px;background:rgba(0,113,227,.15);border:1px solid rgba(0,113,227,.3);padding:8px 20px;border-radius:50px;color:#0071E3;font-size:13px;font-weight:600;margin-bottom:24px}
          .hero-title{font-family:'Fraunces',sans-serif;font-size:clamp(40px,7vw,64px);font-weight:900;color:#fff;line-height:1.1;margin-bottom:20px;letter-spacing:-2px}
          .hero-sub{font-size:18px;color:#94a3b8;margin-bottom:40px;max-width:700px;margin-left:auto;margin-right:auto}
          .hero-price{font-family:'Fraunces',sans-serif;font-size:72px;font-weight:900;color:#0071E3;margin-bottom:8px}
          .hero-price span{font-size:20px;color:#94a3b8;font-weight:500}
          .section{padding:100px 20px}
          .section.alt{background:rgba(255,255,255,.02)}
          .section-header{text-align:center;margin-bottom:60px}
          .section-title{font-family:'Fraunces',sans-serif;font-size:clamp(28px,5vw,44px);font-weight:800;color:#fff;letter-spacing:-1px;margin-bottom:16px}
          .section-sub{color:#94a3b8;max-width:700px;margin:0 auto;font-size:18px}
          .features-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:32px;margin-top:60px}
          .feature-card{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:20px;padding:32px;transition:all .3s}
          .feature-card:hover{transform:translateY(-4px);border-color:rgba(0,113,227,.3)}
          .feature-icon{width:56px;height:56px;background:rgba(0,113,227,.15);border-radius:16px;display:flex;align-items:center;justify-content:center;color:#0071E3;margin-bottom:20px}
          .feature-title{font-size:20px;font-weight:700;color:#fff;margin-bottom:12px}
          .feature-desc{color:#94a3b8;font-size:15px;line-height:1.7}
          .steps{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:32px;margin-top:60px}
          .step-card{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:20px;padding:32px;text-align:center;transition:all .3s}
          .step-card:hover{transform:translateY(-4px)}
          .step-number{width:56px;height:56px;background:linear-gradient(135deg,#0071E3,#38bdf8);border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:'Fraunces',sans-serif;font-size:24px;font-weight:900;color:#fff;margin:0 auto 20px}
          .step-title{font-size:18px;font-weight:700;color:#fff;margin-bottom:12px}
          .step-desc{color:#94a3b8;font-size:14px;line-height:1.7}
          .comparison{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:32px;margin-top:60px}
          .comparison-card{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:20px;padding:32px}
          .comparison-title{font-size:18px;font-weight:700;color:#fff;margin-bottom:20px;display:flex;align-items:center;gap:10px}
          .comparison-list{display:flex;flex-direction:column;gap:12px}
          .comparison-item{display:flex;align-items:center;gap:10px;color:#cbd5e1;font-size:15px}
          .comparison-item.check svg{color:#34d399}
          .comparison-item.cross svg{color:#ef4444}
          .cta{background:linear-gradient(135deg,#0071E3 0%,#38bdf8 100%);border-radius:32px;padding:80px 20px;text-align:center;margin:100px 20px 0}
          .cta h2{font-family:'Fraunces',sans-serif;font-size:clamp(32px,5vw,48px);font-weight:900;color:#fff;margin-bottom:16px}
          .cta p{color:rgba(255,255,255,.8);font-size:18px;margin-bottom:32px;max-width:700px;margin-left:auto;margin-right:auto}
          .cta-btn{display:inline-block;padding:16px 40px;border-radius:50px;background:#fff;color:#0071E3;font-size:16px;font-weight:700;text-decoration:none;transition:all .3s}
          .cta-btn:hover{transform:translateY(-2px)}
          .footer{background:#0f172a;padding:60px 20px;border-top:1px solid rgba(255,255,255,.1);text-align:center;color:#64748b;font-size:13px}
          .nav{background:rgba(15,23,42,.9);backdrop-filter:blur(10px);position:fixed;top:0;left:0;right:0;z-index:100;padding:16px 0;border-bottom:1px solid rgba(255,255,255,.1)}
          .nav-content{display:flex;justify-content:space-between;align-items:center}
          .logo{font-family:'Fraunces',sans-serif;font-size:28px;font-weight:900;color:#fff;display:flex;align-items:center;gap:10px}
          .logo span{color:#0071E3}
          .nav-links{display:flex;gap:32px}
          .nav-links a{color:#94a3b8;font-size:14px;font-weight:500;text-decoration:none;transition:all .2s}
          .nav-links a:hover{color:#fff}
          .nav-cta{background:#0071E3;color:#fff;padding:10px 24px;border-radius:50px;font-weight:600;font-size:14px;text-decoration:none;transition:all .2s}
          .nav-cta:hover{background:#0056b3;transform:translateY(-2px)}
          .breadcrumbs{display:flex;gap:10px;margin-bottom:20px;font-size:13px;color:#64748b}
          .breadcrumbs a{color:#64748b;text-decoration:none;transition:color .2s}
          .breadcrumbs a:hover{color:#0071E3}
          .breadcrumbs span:last-child{color:#0071E3;font-weight:600}
          .platforms{display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin:20px 0}
          .platform-badge{display:inline-flex;align-items:center;gap:8px;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);padding:12px 20px;border-radius:12px;color:#fff;font-size:14px;font-weight:600}
        `}</style>
      </Head>

      {/* Navigation */}
      <nav className="nav">
        <div className="container nav-content">
          <Link href="/" className="logo"><img src="/logo.svg" alt="VisioFlow" width="32" height="32" />Visio<span>flow</span></Link>
          <div className="nav-links">
            <Link href="/landing">Comment ça marche</Link>
            <Link href="/tarifs">Tarifs</Link>
            <Link href="/temoignages">Témoignages</Link>
            <Link href="/a-propos">À propos</Link>
          </div>
          <Link href="/paiement?pack=premium" className="nav-cta">Commencer →</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-content">
          <div className="hero-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
            Pack Premium - Commandes en Ligne
          </div>
          <h1 className="hero-title">
            Site restaurant avec<br />
            commandes en ligne
          </h1>
          <p className="hero-sub">
            Acceptez les commandes directement sur votre site web. Panier fonctionnel,
            paiement sécurisé, gestion des commandes via panel admin. Livré en 48 heures.
          </p>
          <div className="hero-price">490€ <span>/ unique</span></div>
          <div className="platforms">
            <div className="platform-badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/></svg>
              Panier intégré
            </div>
            <div className="platform-badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
              Paiement Stripe
            </div>
            <div className="platform-badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>
              Panel admin
            </div>
          </div>
          <div style={{display:'flex',gap:'16px',justifyContent:'center',flexWrap:'wrap',marginTop:'32px'}}>
            <Link href="/paiement?pack=premium" style={{padding:'16px 40px',borderRadius:'50px',background:'#0071E3',color:'#fff',fontSize:'16px',fontWeight:700,textDecoration:'none',transition:'all .3s'}}>
              Créer mon site avec commandes
            </Link>
            <Link href="/vitrine" style={{padding:'16px 40px',borderRadius:'50px',background:'rgba(255,255,255,.1)',color:'#fff',border:'2px solid rgba(255,255,255,.2)',fontSize:'16px',fontWeight:700,textDecoration:'none',transition:'all .3s'}}>
              Voir démo
            </Link>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="container" style={{marginTop:'40px'}}>
        <div className="breadcrumbs">
          <Link href="/">Accueil</Link>
          <span>/</span>
          <span>Site Restaurant avec Commandes en Ligne</span>
        </div>
      </div>

      {/* Features Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Fonctionnalités commandes en ligne</h2>
            <p className="section-sub">
              Tout ce dont vous avez besoin pour accepter et gérer les commandes en ligne.
            </p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 20a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/><path d="M20 20a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
              </div>
              <h3 className="feature-title">Panier fonctionnel</h3>
              <p className="feature-desc">
                Vos clients ajoutent des plats au panier, modifient les quantités et passent commande.
                Interface fluide et intuitive, optimisée mobile.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
              </div>
              <h3 className="feature-title">Paiement Stripe sécurisé</h3>
              <p className="feature-desc">
                Paiement en ligne sécurisé via Stripe. Accepte cartes bancaires,
                Apple Pay, Google Pay. Conformité PCI DSS.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
              </div>
              <h3 className="feature-title">Panel admin restaurant</h3>
              <p className="feature-desc">
                Gérez vos commandes, menu et horaires depuis votre panel admin.
                Interface simplifiée pour restaurateurs, pas besoin de compétences techniques.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              </div>
              <h3 className="feature-title">Commandes en temps réel</h3>
              <p className="feature-desc">
                Recevez les commandes instantanément. Notifications email et SMS configurables.
                Ne manquez jamais une commande.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/></svg>
              </div>
              <h3 className="feature-title">UberEats & Deliveroo</h3>
              <p className="feature-desc">
                Intégration facile avec UberEats, Deliveroo, Just Eat.
                Centralisez toutes vos commandes sur votre panel admin.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <h3 className="feature-title">Livraison ou à emporter</h3>
              <p className="feature-desc">
                Configurez la livraison (avec frais de port calculés automatiquement)
                ou la commande à emporter. Flexibilité totale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section className="section alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Comment ça marche ?</h2>
            <p className="section-sub">
              En 4 étapes simples, lancez vos commandes en ligne.
            </p>
          </div>
          <div className="steps">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3 className="step-title">Choisissez le Pack Premium</h3>
              <p className="step-desc">
                Sélectionnez le Pack Premium pour 490€. Paiement unique, sans abonnement.
                Inclut toutes les fonctionnalités de commandes en ligne.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3 className="step-title">Configurez votre menu</h3>
              <p className="step-desc">
                Ajoutez vos plats, prix, photos et descriptions. Catégorisez par entrées,
                plats, desserts, boissons. Fait en quelques minutes.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3 className="step-title">Activez les paiements</h3>
              <p className="step-desc">
                Connectez votre compte Stripe. Paiements sécurisés et conformes.
                Vous recevez les fonds directement sur votre compte bancaire.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">4</div>
              <h3 className="step-title">Recevez et gérez les commandes</h3>
              <p className="step-desc">
                Vos clients commandent, vous recevez une notification instantanée.
                Gérez le statut des commandes depuis votre panel admin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="cta">
        <h2>Prêt à accepter les commandes en ligne ?</h2>
        <p>
          Pack Premium à 490€, livré en 48 heures. Sans abonnement, hébergement à vie inclus.
          Augmentez votre chiffre d'affaires avec les commandes en ligne.
        </p>
        <div style={{display:'flex',gap:'16px',justifyContent:'center',flexWrap:'wrap'}}>
          <Link href="/paiement?pack=premium" className="cta-btn">
            Créer mon site avec commandes
          </Link>
          <Link href="/vitrine" style={{padding:'16px 40px',borderRadius:'50px',background:'rgba(255,255,255,.2)',color:'#fff',border:'2px solid rgba(255,255,255,.3)',fontSize:'16px',fontWeight:700,textDecoration:'none',display:'inline-block',transition:'all .3s'}}>
            Voir une démo
          </Link>
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
          <div style={{display:'flex',gap:'20px',justifyContent:'center',flexWrap:'wrap',marginBottom:'28px'}}>
            <Link href="/" style={{color:'rgba(255,255,255,.5)',textDecoration:'none',transition:'color .2s'}}>Accueil</Link>
            <Link href="/landing" style={{color:'rgba(255,255,255,.5)',textDecoration:'none',transition:'color .2s'}}>Comment ça marche</Link>
            <Link href="/tarifs" style={{color:'rgba(255,255,255,.5)',textDecoration:'none',transition:'color .2s'}}>Tarifs</Link>
            <Link href="/temoignages" style={{color:'rgba(255,255,255,.5)',textDecoration:'none',transition:'color .2s'}}>Témoignages</Link>
            <Link href="/a-propos" style={{color:"rgba(255,255,255,.5)",textDecoration:"none",transition:"color .2s"}}>À propos</Link>
          </div>
          <p style={{color:'rgba(255,255,255,.3)'}}>© {new Date().getFullYear()} VisioFlow — Tous droits réservés.</p>
        </div>
      </footer>
    </>
  );
}