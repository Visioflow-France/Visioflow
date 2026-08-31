import Head from 'next/head';
import Link from 'next/link';

const canonicalUrl = "https://visioflow.fr/services/site-restaurant-mobile-first";

export default function ServiceMobileFirst() {
  return (
    <>
      <Head>
        <title>Site Restaurant Mobile First | Responsive Design | VisioFlow</title>
        <meta
          name="description"
          content="VisioFlow crée des sites web restaurants mobile-first, parfaitement optimisés pour smartphones et tablettes. 70% de vos clients recherchent sur mobile. Pack Essentiel 150€ ou Premium 490€."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Site Restaurant Mobile First | Responsive Design | VisioFlow" />
        <meta property="og:description" content="VisioFlow crée des sites web restaurants mobile-first, parfaitement optimisés pour smartphones et tablettes. 70% de vos clients recherchent sur mobile. Pack Essentiel 150€ ou Premium 490€." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="VisioFlow" />

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
          .section{padding:100px 20px}
          .section.alt{background:rgba(255,255,255,.02)}
          .section-header{text-align:center;margin-bottom:60px}
          .section-title{font-family:'Fraunces',sans-serif;font-size:clamp(28px,5vw,44px);font-weight:800;color:#fff;letter-spacing:-1px;margin-bottom:16px}
          .section-sub{color:#94a3b8;max-width:700px;margin:0 auto;font-size:18px}
          .stats-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:32px;margin:60px 0}
          .stat-card{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:20px;padding:32px;text-align:center}
          .stat-num{font-family:'Fraunces',sans-serif;font-size:56px;font-weight:900;color:#0071E3;margin-bottom:8px}
          .stat-label{color:#94a3b8;font-size:15px}
          .features-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:32px;margin-top:60px}
          .feature-card{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:20px;padding:32px;transition:all .3s}
          .feature-card:hover{transform:translateY(-4px);border-color:rgba(0,113,227,.3)}
          .feature-icon{width:56px;height:56px;background:rgba(0,113,227,.15);border-radius:16px;display:flex;align-items:center;justify-content:center;color:#0071E3;margin-bottom:20px}
          .feature-title{font-size:20px;font-weight:700;color:#fff;margin-bottom:12px}
          .feature-desc{color:#94a3b8;font-size:15px;line-height:1.7}
          .cta{background:linear-gradient(135deg,#0071E3 0%,#38bdf8 100%);border-radius:32px;padding:80px 20px;text-align:center;margin:100px 20px 0}
          .cta h2{font-family:'Fraunces',sans-serif;font-size:clamp(32px,5vw,48px);font-weight:900;color:#fff;margin-bottom:16px}
          .cta p{color:rgba(255,255,255,.8);font-size:18px;margin-bottom:32px;max-width:700px;margin-left:auto;margin-right:auto}
          .cta-btn{display:inline-block;padding:16px 40px;border-radius:50px;background:#fff;color:#0071E3;font-size:16px;font-weight:700;text-decoration:none;transition:all .3s}
          .cta-btn:hover{transform:translateY(-2px)}
          .footer{background:#0f172a;padding:60px 20px;border-top:1px solid rgba(255,255,255,.1);text-align:center;color:#64748b;font-size:13px}
          .nav{background:rgba(15,23,42,.9);backdrop-filter:blur(10px);position:fixed;top:0;left:0;right:0;z-index:100;padding:16px 0;border-bottom:1px solid rgba(255,255,255,.1)}
          .nav-content{display:flex;justify-content:space-between;align-items:center}
          .logo{font-family:'Fraunces',sans-serif;font-size:28px;font-weight:900;color:#fff;display:flex;align-items:center;gap:10px}
          .logo span{color:'#0071E3'}
          .nav-links{display:flex;gap:32px}
          .nav-links a{color:'#94a3b8;font-size:14px;font-weight:500;text-decoration:none;transition:all .2s}
          .nav-links a:hover{color:'#fff'}
          .nav-cta{background:'#0071E3;color:'#fff;padding:10px 24px;border-radius:50px;font-weight:600;font-size:14px;text-decoration:none;transition:all .2s}
          .nav-cta:hover{background:'#0056b3;transform:translateY(-2px)}
          .breadcrumbs{display:flex;gap:10px;margin-bottom:20px;font-size:13px;color:'#64748b'}
          .breadcrumbs a{color:'#64748b;text-decoration:none;transition:color .2s}
          .breadcrumbs a:hover{color:'#0071E3'}
          .breadcrumbs span:last-child{color:'#0071E3;font-weight:600}
        `}</style>
      </Head>

      {/* Navigation */}
      <nav className="nav">
        <div className="container nav-content">
          <Link href="/" className="logo"><img src="/logo.svg" alt="VisioFlow" width="32" height="32" />Visio<span>flow</span></Link>
          <div className="nav-links">
            <Link href="/landing">Comment ça marche</Link>
            <Link href="/tarifs">Tarifs</Link>
            <Link href="/a-propos">À propos</Link>
          </div>
          <Link href="/paiement" className="nav-cta">Commencer →</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-content">
          <div className="hero-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>
            Mobile First Design
          </div>
          <h1 className="hero-title">
            Site restaurant optimisé<br />
            pour mobile et tablette
          </h1>
          <p className="hero-sub">
            70% de vos clients recherchent un restaurant sur mobile. Votre site doit être
            parfaitement optimisé pour smartphones. VisioFlow garantit une expérience mobile fluide.
          </p>
          <div style={{display:'flex',gap:'16px',justifyContent:'center',flexWrap:'wrap',marginTop:'32px'}}>
            <Link href="/paiement?pack=essentiel" style={{padding:'16px 40px',borderRadius:'50px',background:'#0071E3',color:'#fff',fontSize:'16px',fontWeight:700,textDecoration:'none',transition:'all .3s'}}>
              Créer mon site mobile
            </Link>
            <Link href="/vitrine" style={{padding:'16px 40px',borderRadius:'50px',background:'rgba(255,255,255,.1)',color:'#fff',border:'2px solid rgba(255,255,255,.2)',fontSize:'16px',fontWeight:700,textDecoration:'none',transition:'all .3s'}}>
              Tester sur mobile
            </Link>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="container" style={{marginTop:'40px'}}>
        <div className="breadcrumbs">
          <Link href="/">Accueil</Link>
          <span>/</span>
          <span>Site Restaurant Mobile First</span>
        </div>
      </div>

      {/* Stats Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Pourquoi le mobile est crucial</h2>
            <p className="section-sub">
              Les chiffres sont clairs : le mobile est devenu le canal principal pour trouver et commander un restaurant.
            </p>
          </div>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-num">70%</div>
              <div className="stat-label">Recherches restaurant sur mobile</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">80%</div>
              <div className="stat-label">Abandonnent si site non mobile</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">3x</div>
              <div className="stat-label">Plus de conversion si mobile optimisé</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">2s</div>
              <div className="stat-label">Temps de chargement optimal</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Caractéristiques mobile-first</h2>
            <p className="section-sub">
              Tous nos sites sont conçus pour offrir une expérience exceptionnelle sur mobile.
            </p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 16a6 6 0 1 1 6-6 6 6 0 0 1-6 6z"/></svg>
              </div>
              <h3 className="feature-title">Responsive parfait</h3>
              <p className="feature-desc">
                Votre site s'adapte automatiquement à tous les écrans : smartphone, tablette,
                ordinateur, grand écran. Aucun glitch, aucun bug.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              </div>
              <h3 className="feature-title">Chargement rapide</h3>
              <p className="feature-desc">
                Images optimisées, code minifié, lazy loading. Votre site charge en moins de 2 secondes
                sur mobile 4G. Core Web Vitals verts.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              </div>
              <h3 className="feature-title">Navigation intuitive</h3>
              <p className="feature-desc">
                Menu mobile slide-in, gros boutons tactiles, navigation claire. Vos clients
                trouvent ce qu'ils cherchent en 3 clics maximum.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>
              </div>
              <h3 className="feature-title">Menu mobile optimisé</h3>
              <p className="feature-desc">
                Menu catégorisé, photos en grille, prix clairs. Vos clients commandent facilement
                depuis leur smartphone sans zoomer.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
              </div>
              <h3 className="feature-title">Paiement mobile fluid</h3>
              <p className="feature-desc">
                Apple Pay et Google Pay intégrés. Paiement en 2 touches sur mobile.
                Conversion augmentée de 40%.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3h18v18H3zM12 8v8M8 12h8"/></svg>
              </div>
              <h3 className="feature-title">Touch-friendly</h3>
              <p className="feature-desc">
                Boutons minimaux 44x44px, espacements confortables, textes lisibles.
                Conforme aux guidelines iOS et Android.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="cta">
        <h2>Prêt pour le mobile-first ?</h2>
        <p>
          Tous nos sites sont optimisés mobile par défaut. Pack Essentiel 150€ ou Premium 490€.
          Livré en quelques semaines. Testez sur votre smartphone maintenant.
        </p>
        <div style={{display:'flex',gap:'16px',justifyContent:'center',flexWrap:'wrap'}}>
          <Link href="/vitrine" className="cta-btn">
            Tester sur mobile
          </Link>
          <Link href="/tarifs" style={{padding:'16px 40px',borderRadius:'50px',background:'rgba(255,255,255,.2)',color:'#fff',border:'2px solid rgba(255,255,255,.3)',fontSize:'16px',fontWeight:700,textDecoration:'none',display:'inline-block',transition:'all .3s'}}>
            Voir les tarifs
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
            Création de sites web pour restaurateurs avec commandes en ligne, livrés en quelques semaines.
          </p>
          <div style={{display:'flex',gap:'20px',justifyContent:'center',flexWrap:'wrap',marginBottom:'28px'}}>
            <Link href="/" style={{color:'rgba(255,255,255,.5)',textDecoration:'none',transition:'color .2s'}}>Accueil</Link>
            <Link href="/landing" style={{color:'rgba(255,255,255,.5)',textDecoration:'none',transition:'color .2s'}}>Comment ça marche</Link>
            <Link href="/tarifs" style={{color:'rgba(255,255,255,.5)',textDecoration:'none',transition:'color .2s'}}>Tarifs</Link>
            <Link href="/a-propos" style={{color:"rgba(255,255,255,.5)",textDecoration:"none",transition:"color .2s"}}>À propos</Link>
          </div>
          <p style={{color:'rgba(255,255,255,.3)'}}>© {new Date().getFullYear()} VisioFlow — Tous droits réservés.</p>
        </div>
      </footer>
    </>
  );
}