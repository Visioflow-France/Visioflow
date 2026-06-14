import Head from 'next/head';
import Link from 'next/link';

const canonicalUrl = "https://visioflow.fr/services/creation-site-vitrine-restaurant";

export default function ServiceSiteVitrine() {
  return (
    <>
      <Head>
        <title>Création Site Vitrine Restaurant | VisioFlow 150€ - Sans Abonnement</title>
        <meta
          name="description"
          content="VisioFlow crée votre site vitrine restaurant professionnel en 48 heures. Menu digital, horaires, photos, responsive mobile. Pack Essentiel 150€ sans abonnement, hébergement à vie inclus."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Création Site Vitrine Restaurant | VisioFlow 150€ - Sans Abonnement" />
        <meta property="og:description" content="VisioFlow crée votre site vitrine restaurant professionnel en 48 heures. Menu digital, horaires, photos, responsive mobile. Pack Essentiel 150€ sans abonnement, hébergement à vie inclus." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="VisioFlow" />

        {/* Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Accueil",
                  "item": "https://visioflow.fr/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Services",
                  "item": "https://visioflow.fr/services"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Création Site Vitrine Restaurant",
                  "item": canonicalUrl
                }
              ]
            })
          }}
        />

        {/* Product Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Pack Essentiel - Site Vitrine Restaurant",
              "image": "https://visioflow.fr/images/pack-essentiel.jpg",
              "description": "Site vitrine professionnel pour restaurant avec menu digital, horaires et photos. Livré en 48 heures. Hébergement à vie inclus.",
              "brand": {
                "@type": "Brand",
                "name": "VisioFlow"
              },
              "offers": {
                "@type": "Offer",
                "price": "150",
                "priceCurrency": "EUR",
                "availability": "https://schema.org/InStock",
                "url": "https://visioflow.fr/tarifs",
                "seller": {
                  "@type": "Organization",
                  "name": "VisioFlow",
                  "url": "https://visioflow.fr"
                },
                "priceValidUntil": "2026-12-31",
                "deliveryLeadTime": "P2D"
              }
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
          <Link href="/paiement?pack=essentiel" className="nav-cta">Commencer →</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-content">
          <div className="hero-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
            Pack Essentiel - Site Vitrine
          </div>
          <h1 className="hero-title">
            Création site vitrine restaurant<br />
            professionnel en 48 heures
          </h1>
          <p className="hero-sub">
            Présentez votre restaurant avec un site web moderne, élégant et fonctionnel.
            Menu digital, horaires, photos et contact. Sans abonnement, hébergement à vie inclus.
          </p>
          <div className="hero-price">150€ <span>/ unique</span></div>
          <div style={{display:'flex',gap:'16px',justifyContent:'center',flexWrap:'wrap',marginTop:'32px'}}>
            <Link href="/paiement?pack=essentiel" style={{padding:'16px 40px',borderRadius:'50px',background:'#0071E3',color:'#fff',fontSize:'16px',fontWeight:700,textDecoration:'none',transition:'all .3s'}}>
              Créer mon site
            </Link>
            <Link href="/vitrine" style={{padding:'16px 40px',borderRadius:'50px',background:'rgba(255,255,255,.1)',color:'#fff',border:'2px solid rgba(255,255,255,.2)',fontSize:'16px',fontWeight:700,textDecoration:'none',transition:'all .3s'}}>
              Voir exemple
            </Link>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="container" style={{marginTop:'40px'}}>
        <div className="breadcrumbs">
          <Link href="/">Accueil</Link>
          <span>/</span>
          <span>Création Site Vitrine Restaurant</span>
        </div>
      </div>

      {/* Features Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Inclus dans le Pack Essentiel</h2>
            <p className="section-sub">
              Tout ce dont votre restaurant a besoin pour briller en ligne, en un seul pack.
            </p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
              </div>
              <h3 className="feature-title">Site vitrine professionnel</h3>
              <p className="feature-desc">
                Design moderne et élégant, optimisé pour tous les appareils (mobile, tablette, ordinateur).
                Votre restaurant présenté de manière professionnelle.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>
              </div>
              <h3 className="feature-title">Menu digital complet</h3>
              <p className="feature-desc">
                Présentez vos entrées, plats, desserts et boissons avec photos et prix.
                Catégorisation claire et navigation fluide pour vos clients.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <h3 className="feature-title">Horaires d'ouverture</h3>
              <p className="feature-desc">
                Affichez vos horaires par jour de la semaine. Vos clients savent exactement
                quand vous êtes ouvert. Mises à jour gratuites sur simple demande.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
              </div>
              <h3 className="feature-title">Photos et galerie</h3>
              <p className="feature-desc">
                Mettez en valeur vos plats, votre décoration et votre ambiance avec une
                galerie photos professionnelle. Impact visuel optimal.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>
              </div>
              <h3 className="feature-title">Responsive mobile</h3>
              <p className="feature-desc">
                Votre site s'adapte parfaitement à tous les écrans. 70% de vos clients
                recherchent un restaurant sur mobile. Soyez visible partout.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3h18v18H3zM12 8v8M8 12h8"/></svg>
              </div>
              <h3 className="feature-title">Hébergement à vie</h3>
              <p className="feature-desc">
                Hébergement, maintenance et mises à jour inclus à vie. Aucun frais mensuel
                ni abonnement. Ce que vous payez est définitif.
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
              En 3 étapes simples, obtenez votre site vitrine restaurant.
            </p>
          </div>
          <div className="steps">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3 className="step-title">Choisissez le Pack Essentiel</h3>
              <p className="step-desc">
                Sélectionnez le Pack Essentiel pour 150€. Paiement unique, sans abonnement.
                Sécurisé via Stripe, acceptant toutes les cartes bancaires.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3 className="step-title">Renseignez vos informations</h3>
              <p className="step-desc">
                Donnez-nous vos menus, horaires, photos et toute l'information nécessaire
                pour présenter votre restaurant. Nous faisons le reste.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3 className="step-title">Recevez votre site en 48h</h3>
              <p className="step-desc">
                Votre site vitrine restaurant est livré en 48 heures. Révision possible,
                modifications gratuites pour finaliser votre site parfait.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">VisioFlow vs les autres solutions</h2>
            <p className="section-sub">
              Pourquoi choisir VisioFlow pour votre site vitrine restaurant ?
            </p>
          </div>
          <div className="comparison">
            <div className="comparison-card">
              <h3 className="comparison-title" style={{color:'#0071E3'}}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                VisioFlow Essentiel
              </h3>
              <div className="comparison-list">
                <div className="comparison-item check">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  Prix unique 150€
                </div>
                <div className="comparison-item check">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  Aucun abonnement
                </div>
                <div className="comparison-item check">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  Hébergement à vie inclus
                </div>
                <div className="comparison-item check">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  Livré en 48 heures
                </div>
                <div className="comparison-item check">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  Support dédié
                </div>
                <div className="comparison-item check">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  Spécialiste restauration
                </div>
              </div>
            </div>
            <div className="comparison-card">
              <h3 className="comparison-title" style={{color:'#ef4444'}}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                Wix / Squarespace
              </h3>
              <div className="comparison-list">
                <div className="comparison-item cross">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  Abonnement mensuel 20-40€
                </div>
                <div className="comparison-item cross">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  Frais cachés
                </div>
                <div className="comparison-item cross">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  Hébergement payant
                </div>
                <div className="comparison-item cross">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  Livraison en 1-2 semaines
                </div>
                <div className="comparison-item cross">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  Support générique
                </div>
                <div className="comparison-item cross">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  Solutions généralistes
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="cta">
        <h2>Prêt à créer votre site vitrine restaurant ?</h2>
        <p>
          Pack Essentiel à 150€, livré en 48 heures. Sans abonnement, hébergement à vie inclus.
          Rejoignez les 150+ restaurateurs qui nous font confiance.
        </p>
        <div style={{display:'flex',gap:'16px',justifyContent:'center',flexWrap:'wrap'}}>
          <Link href="/paiement?pack=essentiel" className="cta-btn">
            Commencer maintenant
          </Link>
          <Link href="/vitrine" style={{padding:'16px 40px',borderRadius:'50px',background:'rgba(255,255,255,.2)',color:'#fff',border:'2px solid rgba(255,255,255,.3)',fontSize:'16px',fontWeight:700,textDecoration:'none',display:'inline-block',transition:'all .3s'}}>
            Voir un exemple
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
            <Link href="/a-propos" style={{color:'rgba(255,255,255,.5)',textDecoration:'none',transition:'color .2s'}}>À propos</Link>
          </div>
          <p style={{color:'rgba(255,255,255,.3)'}}>© {new Date().getFullYear()} VisioFlow — Tous droits réservés.</p>
        </div>
      </footer>
    </>
  );
}