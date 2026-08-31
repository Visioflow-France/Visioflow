import Head from 'next/head';
import Link from 'next/link';

const canonicalUrl = "https://visioflow.fr/services/creation-site-restaurant-lyon";

export default function ServiceLyon() {
  return (
    <>
      <Head>
        <title>Création Site Web Restaurant Lyon | VisioFlow 150€-490€ | Livré en quelques semaines</title>
        <meta
          name="description"
          content="VisioFlow crée votre site web restaurant à Lyon en quelques semaines. Pack Essentiel 150€ ou Premium 490€. Sans abonnement, hébergement à vie inclus. Spécialiste restauration lyonnaise."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Création Site Web Restaurant Lyon | VisioFlow 150€-490€ | Livré en quelques semaines" />
        <meta property="og:description" content="VisioFlow crée votre site web restaurant à Lyon en quelques semaines. Pack Essentiel 150€ ou Premium 490€. Sans abonnement, hébergement à vie inclus. Spécialiste restauration lyonnaise." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="VisioFlow" />
        <meta property="og:region" content="Auvergne-Rhône-Alpes" />
        <meta property="og:city" content="Lyon" />

        {/* LocalBusiness Schema Lyon */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "VisioFlow Lyon",
              "image": "https://visioflow.fr/og-lyon.jpg",
              "url": canonicalUrl,
              "telephone": "+33-4-72-00-00-00",
              "email": "lyon@visioflow.fr",
              "priceRange": "€€",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Place de la Comédie",
                "addressLocality": "Lyon",
                "postalCode": "69001",
                "addressCountry": "FR",
                "addressRegion": "Auvergne-Rhône-Alpes"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 45.7640,
                "longitude": 4.8357
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Lyon"
                },
                {
                  "@type": "GeoCircle",
                  "geoMidpoint": {
                    "@type": "GeoCoordinates",
                    "latitude": 45.7640,
                    "longitude": 4.8357
                  },
                  "geoRadius": "20000"
                }
              ],
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "18:00"
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
          .section{padding:100px 20px}
          .section.alt{background:rgba(255,255,255,.02)}
          .section-header{text-align:center;margin-bottom:60px}
          .section-title{font-family:'Fraunces',sans-serif;font-size:clamp(28px,5vw,44px);font-weight:800;color:#fff;letter-spacing:-1px;margin-bottom:16px}
          .section-sub{color:#94a3b8;max-width:700px;margin:0 auto;font-size:18px}
          .quartiers-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px;margin:40px 0}
          .quartier-tag{background:rgba(0,113,227,.15);border:1px solid rgba(0,113,227,.3);padding:12px 20px;border-radius:12px;text-align:center;color:#0071E3;font-size:14px;font-weight:600;transition:all .3s}
          .quartier-tag:hover{background:rgba(0,113,227,.25)}
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
          .lyon-highlight{color:'#0071E3;font-weight:700}
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
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            Auvergne-Rhône-Alpes • Lyon
          </div>
          <h1 className="hero-title">
            Création site web restaurant<br />
            à <span className="lyon-highlight">Lyon</span>
          </h1>
          <p className="hero-sub">
            Spécialiste de la restauration lyonnaise. Nous créons des sites web professionnels
            pour bouchons, restaurants traditionnels et brasseries dans toute l'agglomération lyonnaise.
            Livré en quelques semaines, sans abonnement.
          </p>
          <div style={{display:'flex',gap:'16px',justifyContent:'center',flexWrap:'wrap',marginTop:'32px'}}>
            <Link href="/paiement?pack=essentiel" style={{padding:'16px 40px',borderRadius:'50px',background:'#0071E3',color:'#fff',fontSize:'16px',fontWeight:700,textDecoration:'none',transition:'all .3s'}}>
              Créer mon site lyonnais
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
          <span>Création Site Restaurant Lyon</span>
        </div>
      </div>

      {/* Quartiers Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Zones couvertes à Lyon</h2>
            <p className="section-sub">
              Nous intervenons dans tous les quartiers de Lyon et dans l'agglomération lyonnaise.
            </p>
          </div>
          <div className="quartiers-grid">
            <div className="quartier-tag">Vieux Lyon</div>
            <div className="quartier-tag">Presqu'île</div>
            <div className="quartier-tag">La Croix-Rousse</div>
            <div className="quartier-tag">Fourvière</div>
            <div className="quartier-tag">Perrache</div>
            <div className="quartier-tag">Confluence</div>
            <div className="quartier-tag">Gerland</div>
            <div className="quartier-tag">Part-Dieu</div>
            <div className="quartier-tag">Brotteaux</div>
            <div className="quartier-tag">Villeurbanne</div>
            <div className="quartier-tag">Saint-Just</div>
            <div className="quartier-tag">Vaise</div>
            <div className="quartier-tag">Caluire-et-Cuire</div>
            <div className="quartier-tag">Sainte-Foy-lès-Lyon</div>
            <div className="quartier-tag">Tassin-la-Demi-Lune</div>
            <div className="quartier-tag">Écully</div>
            <div className="quartier-tag">Neuville-sur-Saône</div>
            <div className="quartier-tag">Bron</div>
            <div className="quartier-tag">Venissieux</div>
            <div className="quartier-tag">Vénissieux</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Pourquoi les restaurants lyonnais nous choisissent</h2>
            <p className="section-sub">
              Adapté aux spécificités de la restauration lyonnaise : tradition, tourisme, vin, patrimoine.
            </p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>
              </div>
              <h3 className="feature-title">Carte des vins</h3>
              <p className="feature-desc">
                Lyon, capitale de la gastronomie. Votre site avec carte des vins détaillée,
                accord mets-vins, vins du Beaujolais et du Rhône mis en avant.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3h18v18H3zM12 8v8M8 12h8"/></svg>
              </div>
              <h3 className="feature-title">Patrimoine UNESCO</h3>
              <p className="feature-desc">
                Vieux Lyon, Fourvière... Votre site met en valeur votre emplacement historique.
                Photos de quartier, histoire du restaurant, ambiance lyonnaise.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </div>
              <h3 className="feature-title">Tourisme international</h3>
              <p className="feature-desc">
                Lyon est classée au patrimoine mondial de l'UNESCO. Site multilingue
                pour attirer les touristes : français, anglais, espagnol, allemand.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <h3 className="feature-title">Google Maps Lyon</h3>
              <p className="feature-desc">
                Carte interactive de Lyon. Vos clients trouvent votre bouchon, brasserie
                ou restaurant facile avec directions et photos street view.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3h18v18H3zM12 8v8M8 12h8"/></svg>
              </div>
              <h3 className="feature-title">Instagram lyonnais</h3>
              <p className="feature-desc">
                Intégration avec votre Instagram Lyon. Feed automatique, photos de plats
                lyonnais, geotag pour SEO local lyonnais.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              </div>
              <h3 className="feature-title">Support lyonnais</h3>
              <p className="feature-desc">
                Notre équipe comprend la restauration lyonnaise. Bouchons, bistrots,
                tradition locale. Disponible pour rencontres à Lyon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="cta">
        <h2>Restaurant à Lyon ? Votre site en quelques semaines</h2>
        <p>
          Spécialiste de la restauration lyonnaise depuis 2025. 60+ restaurants accompagnés.
          Pack Essentiel 150€ ou Premium 490€. Sans abonnement.
        </p>
        <div style={{display:'flex',gap:'16px',justifyContent:'center',flexWrap:'wrap'}}>
          <Link href="/paiement?pack=premium" className="cta-btn">
            Créer mon site lyonnais
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
            <Link href="/a-propos" style={{color:'rgba(255,255,255,.5)',textDecoration:'none',transition:'color .2s'}}>À propos</Link>
          </div>
          <p style={{color:'rgba(255,255,255,.3)'}}>© {new Date().getFullYear()} VisioFlow Lyon — Tous droits réservés.</p>
        </div>
      </footer>
    </>
  );
}