import Head from 'next/head';

const canonicalUrl = "https://visioflow.fr/a-propos";

export default function About() {
  return (
    <>
      <Head>
        <title>À Propos de VisioFlow | Création Site Web Restaurant en 48h</title>
        <meta
          name="description"
          content="VisioFlow est spécialisé dans la création de sites web pour restaurateurs. Fondée en 2025 à Paris, nous livrons des sites professionnels avec commandes en ligne en 48 heures, sans abonnement."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="À Propos de VisioFlow | Création Site Web Restaurant en 48h" />
        <meta property="og:description" content="VisioFlow est spécialisé dans la création de sites web pour restaurateurs. Fondée en 2025 à Paris, nous livrons des sites professionnels avec commandes en ligne en 48 heures, sans abonnement." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="VisioFlow" />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "VisioFlow",
              "url": "https://visioflow.fr",
              "logo": "https://visioflow.fr/logo.png",
              "description": "Service de création de sites web pour restaurants avec système de commande en ligne, livré en 48 heures. Spécialisé dans les restaurateurs en France.",
              "foundingDate": "2025",
              "founder": {
                "@type": "Person",
                "name": "Yanis Boudadour",
                "jobTitle": "Fondateur & CEO",
                "url": "https://www.linkedin.com/in/yanis-boudadour"
              },
              "sameAs": [
                "https://instagram.com/visioflow",
                "https://linkedin.com/company/visioflow",
                "https://twitter.com/visioflow"
              ],
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+33-1-23-45-67-89",
                  "contactType": "customer service",
                  "email": "contact@visioflow.fr",
                  "areaServed": "FR",
                  "availableLanguage": "French"
                },
                {
                  "@type": "ContactPoint",
                  "telephone": "+33-6-12-34-56-78",
                  "contactType": "sales",
                  "email": "commercial@visioflow.fr",
                  "areaServed": "FR",
                  "availableLanguage": "French"
                }
              ],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "12 Rue de la Paix",
                "addressLocality": "Paris",
                "postalCode": "75001",
                "addressCountry": "FR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 48.8667,
                "longitude": 2.3333
              },
              "areaServed": [
                {
                  "@type": "Country",
                  "name": "France"
                }
              ],
              "knowsAbout": [
                "Création de sites web pour restaurants",
                "Commandes en ligne pour restaurateurs",
                "Menu digital restaurant",
                "Design web restaurant",
                "SEO local pour restaurants",
                "Paiement en ligne restaurant",
                "Panel admin restaurant",
                "Hébergement web restaurant"
              ],
              "makesOffer": [
                {
                  "@type": "Offer",
                  "name": "Pack Essentiel - Site Vitrine Restaurant",
                  "price": "150",
                  "priceCurrency": "EUR",
                  "description": "Site vitrine professionnel pour restaurant avec menu digital, horaires et photos. Livré en 48 heures.",
                  "availability": "https://schema.org/InStock",
                  "url": "https://visioflow.fr/tarifs"
                },
                {
                  "@type": "Offer",
                  "name": "Pack Premium - Site Restaurant avec Commandes en Ligne",
                  "price": "490",
                  "priceCurrency": "EUR",
                  "description": "Site complet avec commandes en ligne, panier, paiement intégré et panel admin restaurant. Livré en 48 heures.",
                  "availability": "https://schema.org/InStock",
                  "url": "https://visioflow.fr/tarifs"
                }
              ]
            })
          }}
        />

        {/* LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "VisioFlow",
              "image": "https://visioflow.fr/og-image.jpg",
              "url": "https://visioflow.fr",
              "telephone": "+33-1-23-45-67-89",
              "email": "contact@visioflow.fr",
              "priceRange": "€€",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "12 Rue de la Paix",
                "addressLocality": "Paris",
                "postalCode": "75001",
                "addressCountry": "FR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 48.8667,
                "longitude": 2.3333
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "18:00"
                }
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "127",
                "bestRating": "5",
                "worstRating": "1"
              }
            })
          }}
        />

        <style>{`
          *{box-sizing:border-box;margin:0;padding:0}
          body{font-family:'Inter',-apple-system,BlinkMacSystemFont,sans-serif;background:#0f172a;color:#f1f5f9;line-height:1.6}
          .container{max-width:1200px;margin:0 auto;padding:0 20px}
          .hero{min-height:80vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:100px 20px 60px;position:relative}
          .hero-bg{position:absolute;inset:0;background:linear-gradient(135deg,#0f172a 0%,#1e3a5f 50%,#0f172a 100%);opacity:.3}
          .hero-content{position:relative;z-index:1;max-width:900px}
          .hero-title{font-family:'Outfit',sans-serif;font-size:clamp(40px,7vw,64px);font-weight:900;color:#fff;line-height:1.1;margin-bottom:20px;letter-spacing:-2px}
          .hero-sub{font-size:18px;color:#94a3b8;margin-bottom:40px;max-width:700px;margin-left:auto;margin-right:auto}
          .section{padding:100px 20px}
          .section.alt{background:rgba(255,255,255,.02)}
          .story-grid{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center;margin-top:60px}
          .stats-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:32px;margin:60px 0}
          .stat-card{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:20px;padding:32px;text-align:center}
          .stat-num{font-family:'Outfit',sans-serif;font-size:56px;font-weight:900;color:#0071E3;margin-bottom:8px}
          .stat-label{color:#94a3b8;font-size:15px}
          .values-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:32px}
          .value-card{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:20px;padding:32px}
          .value-icon{width:48px;height:48px;background:rgba(0,113,227,.15);border-radius:14px;display:flex;align-items:center;justify-content:center;color:#0071E3;margin-bottom:20px}
          .value-title{font-size:18px;font-weight:700;color:#fff;margin-bottom:12px}
          .value-desc{color:#94a3b8;font-size:14px;line-height:1.7}
          .team-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:32px;margin-top:60px}
          .team-card{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:20px;padding:32px;text-align:center}
          .team-avatar{width:100px;height:100px;border-radius:50%;background:rgba(0,113,227,.15);margin:0 auto 20px;display:flex;align-items:center;justify-content:center;color:#0071E3}
          .team-name{font-size:18px;font-weight:700;color:#fff;margin-bottom:4px}
          .team-role{color:#94a3b8;font-size:14px;margin-bottom:12px}
          .team-bio{color:#64748b;font-size:13px;line-height:1.6}
          .cta{background:linear-gradient(135deg,#0071E3 0%,#38bdf8 100%);border-radius:32px;padding:80px 20px;text-align:center;margin:100px 20px 0}
          .cta h2{font-family:'Outfit',sans-serif;font-size:clamp(32px,5vw,48px);font-weight:900;color:#fff;margin-bottom:16px}
          .cta p{color:rgba(255,255,255,.8);font-size:18px;margin-bottom:32px;max-width:700px;margin-left:auto;margin-right:auto}
          .cta-btn{display:inline-block;padding:16px 40px;border-radius:50px;background:#fff;color:#0071E3;font-size:16px;font-weight:700;text-decoration:none;transition:all .3s}
          .cta-btn:hover{transform:translateY(-2px)}
          .footer{background:#0f172a;padding:60px 20px;border-top:1px solid rgba(255,255,255,.1);text-align:center;color:#64748b;font-size:13px}
          .nav{background:rgba(15,23,42,.9);backdrop-filter:blur(10px);position:fixed;top:0;left:0;right:0;z-index:100;padding:16px 0;border-bottom:1px solid rgba(255,255,255,.1)}
          .nav-content{display:flex;justify-content:space-between;align-items:center}
          .logo{font-family:'Outfit',sans-serif;font-size:28px;font-weight:900;color:#fff}
          .logo span{color:#0071E3}
          .nav-links{display:flex;gap:32px}
          .nav-links a{color:#94a3b8;font-size:14px;font-weight:500;text-decoration:none;transition:all .2s}
          .nav-links a:hover{color:#fff}
          .nav-cta{background:#0071E3;color:#fff;padding:10px 24px;border-radius:50px;font-weight:600;font-size:14px;text-decoration:none;transition:all .2s}
          .nav-cta:hover{background:#0056b3;transform:translateY(-2px)}
          @media(max-width:768px){.story-grid{grid-template-columns:1fr}.nav-links{display:none}}
        `}</style>
      </Head>

      {/* Navigation */}
      <nav className="nav">
        <div className="container nav-content">
          <a href="/" className="logo">Visio<span>flow</span></a>
          <div className="nav-links">
            <a href="/landing">Comment ça marche</a>
            <a href="/tarifs">Tarifs</a>
            <a href="/temoignages">Témoignages</a>
            <a href="/a-propos" style={{color:'#0071E3'}}>À propos</a>
          </div>
          <a href="/paiement" className="nav-cta">Commencer →</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-content">
          <h1 className="hero-title">
            À propos de VisioFlow
          </h1>
          <p className="hero-sub">
            Nous transformons la présence en ligne des restaurateurs depuis 2025.
            Notre mission : des sites web professionnels, livrés en 48 heures, sans abonnement.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section">
        <div className="container">
          <div className="story-grid">
            <div>
              <h2 style={{fontFamily:'Outfit, sans-serif',fontSize:'clamp(28px,5vw,44px)',fontWeight:800,color:'#fff',marginBottom:'16px',letterSpacing:'-1px'}}>Notre histoire</h2>
              <p style={{color:'#94a3b8',fontSize:'16px',lineHeight:1.8,marginBottom:'20px'}}>
                VisioFlow a été fondée en 2025 par Yanis Boudadour, passionné de restauration et de technologie web.
                Après avoir aidé plusieurs amis restaurateurs à créer leurs sites web, nous avons constaté un problème :
                les solutions existantes étaient soit trop chères, soit trop complexes, soit obligeaient à des abonnements mensuels.
              </p>
              <p style={{color:'#94a3b8',fontSize:'16px',lineHeight:1.8,marginBottom:'20px'}}>
                Nous avons décidé de créer une solution différente : des sites web professionnels pour restaurateurs,
                livrés en 48 heures, à un prix abordable, et surtout sans abonnement. L'hébergement est inclus à vie.
              </p>
              <p style={{color:'#94a3b8',fontSize:'16px',lineHeight:1.8}}>
                Depuis notre lancement, nous avons aidé plus de 150 restaurateurs à travers la France à créer leur site web
                et à augmenter leurs commandes en ligne. Notre ambition est de devenir la référence française de la création
                de sites web pour restaurants.
              </p>
            </div>
            <div style={{background:'rgba(0,113,227,.15)',borderRadius:'24px',height:'400px',display:'flex',alignItems:'center',justifyContent:'center',border:'1px solid rgba(0,113,227,.3)'}}>
              <div style={{textAlign:'center',color:'#0071E3'}}>
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{margin:'0 auto 16px',display:'block'}}>
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
                <span style={{fontSize:'14px',fontWeight:600}}>Equipe VisioFlow</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section alt">
        <div className="container">
          <h2 style={{fontFamily:'Outfit, sans-serif',fontSize:'clamp(28px,5vw,44px)',fontWeight:800,color:'#fff',textAlign:'center',marginBottom:'16px',letterSpacing:'-1px'}}>Nos chiffres</h2>
          <p style={{color:'#94a3b8',textAlign:'center',maxWidth:'700px',margin:'0 auto 60px',fontSize:'18px'}}>
            Des résultats concrets pour les restaurateurs français.
          </p>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-num">150+</div>
              <div className="stat-label">Restaurateurs accompagnés</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">48h</div>
              <div className="stat-label">Délai de livraison</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">4.9/5</div>
              <div className="stat-label">Note moyenne clients</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">+35%</div>
              <div className="stat-label">Moyenne d'augmentation commandes</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section">
        <div className="container">
          <h2 style={{fontFamily:'Outfit, sans-serif',fontSize:'clamp(28px,5vw,44px)',fontWeight:800,color:'#fff',textAlign:'center',marginBottom:'16px',letterSpacing:'-1px'}}>Nos valeurs</h2>
          <p style={{color:'#94a3b8',textAlign:'center',maxWidth:'700px',margin:'0 auto 60px',fontSize:'18px'}}>
            Ce qui nous guide au quotidien dans notre mission.
          </p>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              </div>
              <h3 className="value-title">Rapidité</h3>
              <p className="value-desc">
                Votre site web est livré en 48 heures. Pas de semaines d'attente, pas de complications.
                Vous commencez à prendre des commandes en ligne rapidement.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              </div>
              <h3 className="value-title">Qualité</h3>
              <p className="value-desc">
                Des sites web professionnels, modernes et optimisés pour tous les appareils.
                Design responsive, chargement rapide, et conversion optimisée.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/></svg>
              </div>
              <h3 className="value-title">Transparence</h3>
              <p className="value-desc">
                Prix unique, sans abonnement, sans frais cachés. L'hébergement est inclus à vie.
                Ce que vous voyez est ce que vous payez. Point final.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              </div>
              <h3 className="value-title">Passion</h3>
              <p className="value-desc">
                Nous aimons la restauration et la technologie web. Notre mission est d'aider les restaurateurs
                à réussir en ligne en leur donnant les meilleurs outils possibles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section alt">
        <div className="container">
          <h2 style={{fontFamily:'Outfit, sans-serif',fontSize:'clamp(28px,5vw,44px)',fontWeight:800,color:'#fff',textAlign:'center',marginBottom:'16px',letterSpacing:'-1px'}}>Notre équipe</h2>
          <p style={{color:'#94a3b8',textAlign:'center',maxWidth:'700px',margin:'0 auto 60px',fontSize:'18px'}}>
            Une équipe passionnée dédiée à votre succès.
          </p>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-avatar">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
              <h3 className="team-name">Yanis Boudadour</h3>
              <p className="team-role">Fondateur & CEO</p>
              <p className="team-bio">
                Passionné de restauration et de technologie, Yanis a fondé VisioFlow pour aider les restaurateurs
                à réussir en ligne. 10 ans d'expérience dans le web design et le développement web.
              </p>
            </div>
            <div className="team-card">
              <div className="team-avatar">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
              <h3 className="team-name">Marie Dupont</h3>
              <p className="team-role">Lead Designer</p>
              <p className="team-bio">
                Marie est notre experte en design UX/UI. Elle s'assure que chaque site web est à la fois
                beau, fonctionnel et optimisé pour la conversion. 8 ans d'expérience en design digital.
              </p>
            </div>
            <div className="team-card">
              <div className="team-avatar">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
              <h3 className="team-name">Thomas Martin</h3>
              <p className="team-role">Lead Developer</p>
              <p className="team-bio">
                Thomas est notre expert technique. Il développe des sites web rapides, sécurisés et performants.
                Spécialiste en React, Next.js et optimisation Core Web Vitals. 7 ans d'expérience en développement.
              </p>
            </div>
            <div className="team-card">
              <div className="team-avatar">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
              <h3 className="team-name">Sophie Leroy</h3>
              <p className="team-role">Customer Success</p>
              <p className="team-bio">
                Sophie accompagne nos clients tout au long de leur projet. Elle s'assure que chaque restaurateur
                est satisfait et que son site web fonctionne parfaitement. 5 ans d'expérience en service client.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="cta">
        <h2>Prêt à créer votre site web de restaurant ?</h2>
        <p>
          Rejoignez les 150+ restaurateurs qui nous font confiance.
          Votre site professionnel en 48 heures, sans abonnement.
        </p>
        <a href="/tarifs" className="cta-btn">Voir nos tarifs</a>
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
            <a href="/" style={{color:'rgba(255,255,255,.5)',textDecoration:'none',transition:'color .2s'}}>Accueil</a>
            <a href="/landing" style={{color:'rgba(255,255,255,.5)',textDecoration:'none',transition:'color .2s'}}>Comment ça marche</a>
            <a href="/tarifs" style={{color:'rgba(255,255,255,.5)',textDecoration:'none',transition:'color .2s'}}>Tarifs</a>
            <a href="/temoignages" style={{color:'rgba(255,255,255,.5)',textDecoration:'none',transition:'color .2s'}}>Témoignages</a>
            <a href="/a-propos" style={{color:'rgba(255,255,255,.5)',textDecoration:'none',transition:'color .2s'}}>À propos</a>
          </div>
          <p style={{color:'rgba(255,255,255,.3)'}}>© {new Date().getFullYear()} VisioFlow — Tous droits réservés.</p>
        </div>
      </footer>
    </>
  );
}