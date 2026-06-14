import Head from 'next/head';
import Link from 'next/link';

const canonicalUrl = "https://visioflow.fr/services/creation-site-restaurant-paris";

export default function ServiceParis() {
  return (
    <>
      <Head>
        <title>Création Site Web Restaurant Paris | VisioFlow 150€-490€ | Livré 48h</title>
        <meta
          name="description"
          content="VisioFlow crée votre site web restaurant à Paris en 48 heures. Pack Essentiel 150€ ou Premium 490€. Sans abonnement, hébergement à vie inclus. Spécialiste restauration parisienne."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Création Site Web Restaurant Paris | VisioFlow 150€-490€ | Livré 48h" />
        <meta property="og:description" content="VisioFlow crée votre site web restaurant à Paris en 48 heures. Pack Essentiel 150€ ou Premium 490€. Sans abonnement, hébergement à vie inclus. Spécialiste restauration parisienne." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="VisioFlow" />
        <meta property="og:region" content="Île-de-France" />
        <meta property="og:city" content="Paris" />

        {/* LocalBusiness Schema Paris */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "VisioFlow Paris",
              "image": "https://visioflow.fr/og-paris.jpg",
              "url": canonicalUrl,
              "telephone": "+33-1-23-45-67-89",
              "email": "paris@visioflow.fr",
              "priceRange": "€€",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "12 Rue de la Paix",
                "addressLocality": "Paris",
                "postalCode": "75001",
                "addressCountry": "FR",
                "addressRegion": "Île-de-France"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 48.8667,
                "longitude": 2.3333
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Paris"
                },
                {
                  "@type": "GeoCircle",
                  "geoMidpoint": {
                    "@type": "GeoCoordinates",
                    "latitude": 48.8667,
                    "longitude": 2.3333
                  },
                  "geoRadius": "15000"
                }
              ],
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "18:00"
                }
              ],
              "founder": {
                "@type": "Person",
                "name": "Christian Micillo"
              },
              "foundingDate": "2025"
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
          .arrondissements-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px;margin:40px 0}
          .arrondissement-tag{background:rgba(0,113,227,.15);border:1px solid rgba(0,113,227,.3);padding:12px 20px;border-radius:12px;text-align:center;color:#0071E3;font-size:14px;font-weight:600;transition:all .3s}
          .arrondissement-tag:hover{background:rgba(0,113,227,.25)}
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
          .paris-highlight{color:'#0071E3;font-weight:700}
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
          <Link href="/paiement" className="nav-cta">Commencer →</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-content">
          <div className="hero-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            Île-de-France • Paris
          </div>
          <h1 className="hero-title">
            Création site web restaurant<br />
            à <span className="paris-highlight">Paris</span>
          </h1>
          <p className="hero-sub">
            Spécialiste de la restauration parisienne. Nous créons des sites web professionnels
            pour restaurants, bistrots et brasseries dans tous les arrondissements de Paris.
            Livré en 48 heures, sans abonnement.
          </p>
          <div style={{display:'flex',gap:'16px',justifyContent:'center',flexWrap:'wrap',marginTop:'32px'}}>
            <Link href="/paiement?pack=essentiel" style={{padding:'16px 40px',borderRadius:'50px',background:'#0071E3',color:'#fff',fontSize:'16px',fontWeight:700,textDecoration:'none',transition:'all .3s'}}>
              Créer mon site parisien
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
          <span>Création Site Restaurant Paris</span>
        </div>
      </div>

      {/* Arrondissements Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Zones couvertes à Paris</h2>
            <p className="section-sub">
              Nous intervenons dans tous les arrondissements de Paris et dans toute l'Île-de-France.
            </p>
          </div>
          <div className="arrondissements-grid">
            <div className="arrondissement-tag">1er arrondissement</div>
            <div className="arrondissement-tag">2e arrondissement</div>
            <div className="arrondissement-tag">3e arrondissement</div>
            <div className="arrondissement-tag">4e arrondissement</div>
            <div className="arrondissement-tag">5e arrondissement</div>
            <div className="arrondissement-tag">6e arrondissement</div>
            <div className="arrondissement-tag">7e arrondissement</div>
            <div className="arrondissement-tag">8e arrondissement</div>
            <div className="arrondissement-tag">9e arrondissement</div>
            <div className="arrondissement-tag">10e arrondissement</div>
            <div className="arrondissement-tag">11e arrondissement</div>
            <div className="arrondissement-tag">12e arrondissement</div>
            <div className="arrondissement-tag">13e arrondissement</div>
            <div className="arrondissement-tag">14e arrondissement</div>
            <div className="arrondissement-tag">15e arrondissement</div>
            <div className="arrondissement-tag">16e arrondissement</div>
            <div className="arrondissement-tag">17e arrondissement</div>
            <div className="arrondissement-tag">18e arrondissement</div>
            <div className="arrondissement-tag">19e arrondissement</div>
            <div className="arrondissement-tag">20e arrondissement</div>
            <div className="arrondissement-tag">La Défense</div>
            <div className="arrondissement-tag">Boulogne-Billancourt</div>
            <div className="arrondissement-tag">Neuilly-sur-Seine</div>
            <div className="arrondissement-tag">Levallois-Perret</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Pourquoi les restaurants parisiens nous choisissent</h2>
            <p className="section-sub">
              Adapté aux spécificités de la restauration parisienne : touristes, locaux, livraisons, réservations.
            </p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </div>
              <h3 className="feature-title">Multi-langue</h3>
              <p className="feature-desc">
                Touristes du monde entier ? Votre site peut être en français, anglais, espagnol.
                Traductions professionnelles incluses.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v6"/><path d="M8 2v6"/><path d="M3 10h18"/></svg>
              </div>
              <h3 className="feature-title">Réservations intégrées</h3>
              <p className="feature-desc">
                Acceptez les réservations en ligne. Table dynamique, confirmation automatique.
                Intégration avec Google Reservations possible.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
              </div>
              <h3 className="feature-title">Livraison Paris</h3>
              <p className="feature-desc">
                Zones de livraison configurables par arrondissement. Frais de port calculés
                automatiquement. Intégration UberEats/Deliveroo.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <h3 className="feature-title">Carte interactive</h3>
              <p className="feature-desc">
                Carte Google Maps intégrée. Vos clients trouvent votre restaurant facilement.
                Directions, photos street view, avis Google.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3h18v18H3zM12 8v8M8 12h8"/></svg>
              </div>
              <h3 className="feature-title">Instagram parisien</h3>
              <p className="feature-desc">
                Intégration avec votre Instagram Paris. Feed automatique, stories du restaurant,
                geotag pour SEO local parisien.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              </div>
              <h3 className="feature-title">Support parisien</h3>
              <p className="feature-desc">
                Notre équipe est basée à Paris. Compréhension des spécificités locales,
                disponibilité rapide, rencontres possibles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="cta">
        <h2>Restaurant à Paris ? Votre site en 48h</h2>
        <p>
          Spécialiste de la restauration parisienne depuis 2025. 150+ restaurants accompagnés.
          Pack Essentiel 150€ ou Premium 490€. Sans abonnement.
        </p>
        <div style={{display:'flex',gap:'16px',justifyContent:'center',flexWrap:'wrap'}}>
          <Link href="/paiement?pack=premium" className="cta-btn">
            Créer mon site parisien
          </Link>
          <Link href="/temoignages" style={{padding:'16px 40px',borderRadius:'50px',background:'rgba(255,255,255,.2)',color:'#fff',border:'2px solid rgba(255,255,255,.3)',fontSize:'16px',fontWeight:700,textDecoration:'none',display:'inline-block',transition:'all .3s'}}>
            Voir avis parisiens
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
          <p style={{color:'rgba(255,255,255,.3)'}}>© {new Date().getFullYear()} VisioFlow Paris — Tous droits réservés.</p>
        </div>
      </footer>
    </>
  );
}