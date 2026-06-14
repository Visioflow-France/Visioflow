import Head from 'next/head';
import Footer from '../components/Footer';

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
                  "telephone": "+33-6-11-04-58-29",
                  "contactType": "customer service",
                  "email": "contact@visioflow.fr",
                  "areaServed": "FR",
                  "availableLanguage": "French"
                }
              ],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "6 rue Lacretelle",
                "addressLocality": "Pontault-Combault",
                "postalCode": "77340",
                "addressCountry": "FR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 48.7903,
                "longitude": 2.6045
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
              "telephone": "+33-6-11-04-58-29",
              "email": "contact@visioflow.fr",
              "priceRange": "€€",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "6 rue Lacretelle",
                "addressLocality": "Pontault-Combault",
                "postalCode": "77340",
                "addressCountry": "FR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 48.7903,
                "longitude": 2.6045
              },
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
          #vflp,#vflp *{box-sizing:border-box;margin:0;padding:0}
          #vflp{min-height:100vh;font-family:'Inter Tight',-apple-system,BlinkMacSystemFont,sans-serif;background:#ffffff;color:#1e293b;line-height:1.6}
          #vflp .container{max-width:1200px;margin:0 auto;padding:0 20px}
          #vflp .hero{min-height:80vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:100px 20px 60px;position:relative;background:#ffffff}
          #vflp .hero-bg{position:absolute;inset:0;background:linear-gradient(135deg,#ffffff 0%,#dbeafe 50%,#ffffff 100%);opacity:1}
          #vflp .hero-content{position:relative;z-index:1;max-width:900px}
          #vflp .hero-title{font-family:'Fraunces',sans-serif;font-size:clamp(40px,7vw,64px);font-weight:900;color:#0f172a;line-height:1.1;margin-bottom:20px;letter-spacing:-2px}
          #vflp .hero-sub{font-size:18px;color:#475569;margin-bottom:40px;max-width:700px;margin-left:auto;margin-right:auto}
          #vflp .section{padding:100px 20px}
          #vflp .section.alt{background:rgba(15,23,42,.025)}
          #vflp .story-grid{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center;margin-top:60px}
          #vflp .stats-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:32px;margin:60px 0}
          #vflp .stat-card{background:#f8fafc;border:1px solid rgba(15,23,42,.08);border-radius:20px;padding:32px;text-align:center;box-shadow:0 2px 10px rgba(15,23,42,.04)}
          #vflp .stat-num{font-family:'Fraunces',sans-serif;font-size:56px;font-weight:900;color:#0071E3;margin-bottom:8px}
          #vflp .stat-label{color:#475569;font-size:15px}
          #vflp .values-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:32px}
          #vflp .value-card{background:#f8fafc;border:1px solid rgba(15,23,42,.08);border-radius:20px;padding:32px;box-shadow:0 2px 10px rgba(15,23,42,.04)}
          #vflp .value-icon{width:48px;height:48px;background:rgba(0,113,227,.15);border-radius:14px;display:flex;align-items:center;justify-content:center;color:#0071E3;margin-bottom:20px}
          #vflp .value-title{font-size:18px;font-weight:700;color:#0f172a;margin-bottom:12px}
          #vflp .value-desc{color:#475569;font-size:14px;line-height:1.7}
          #vflp .team-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:32px;margin-top:60px}
          #vflp .team-card{background:#f8fafc;border:1px solid rgba(15,23,42,.08);border-radius:20px;padding:32px;text-align:center;box-shadow:0 2px 10px rgba(15,23,42,.04)}
          #vflp .team-avatar{width:100px;height:100px;border-radius:50%;background:rgba(0,113,227,.15);margin:0 auto 20px;display:flex;align-items:center;justify-content:center;color:#0071E3}
          #vflp .team-name{font-size:18px;font-weight:700;color:#0f172a;margin-bottom:4px}
          #vflp .team-role{color:#475569;font-size:14px;margin-bottom:12px}
          #vflp .team-bio{color:#64748b;font-size:13px;line-height:1.6}
          #vflp .cta{background:linear-gradient(135deg,#0071E3 0%,#38bdf8 100%);border-radius:32px;padding:80px 20px;text-align:center;margin:100px 20px 0}
          #vflp .cta h2{font-family:'Fraunces',sans-serif;font-size:clamp(32px,5vw,48px);font-weight:900;color:#fff;margin-bottom:16px}
          #vflp .cta p{color:rgba(255,255,255,.8);font-size:18px;margin-bottom:32px;max-width:700px;margin-left:auto;margin-right:auto}
          #vflp .cta-btn{display:inline-block;padding:16px 40px;border-radius:50px;background:#fff;color:#0071E3;font-size:16px;font-weight:700;text-decoration:none;transition:all .3s}
          #vflp .cta-btn:hover{transform:translateY(-2px)}
          #vflp .footer{background:#f8fafc;padding:60px 20px;border-top:1px solid rgba(15,23,42,.08);text-align:center;color:#64748b;font-size:13px}
          #vflp .nav{height:auto;background:rgba(255,255,255,.85);backdrop-filter:blur(10px);position:fixed;top:0;left:0;right:0;z-index:100;padding:16px 0;border-bottom:1px solid rgba(15,23,42,.08)}
          #vflp .nav-content{display:flex;justify-content:space-between;align-items:center}
          #vflp .logo{font-family:'Fraunces',sans-serif;font-size:28px;font-weight:900;color:#0f172a;display:flex;align-items:center;gap:10px}
          #vflp .logo span{color:#0071E3}
          #vflp .nav-links{display:flex;gap:32px}
          #vflp .nav-links a{color:#475569;font-size:14px;font-weight:500;text-decoration:none;transition:all .2s}
          #vflp .nav-links a:hover{color:#0f172a}
          #vflp .nav-cta{background:#0071E3;color:#fff;padding:10px 24px;border-radius:50px;font-weight:600;font-size:14px;text-decoration:none;transition:all .2s}
          #vflp .nav-cta:hover{background:#0056b3;transform:translateY(-2px)}
          @media(max-width:768px){#vflp .story-grid{grid-template-columns:1fr}#vflp .nav-links{display:none}}
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
              <h2 style={{fontFamily:'Outfit, sans-serif',fontSize:'clamp(28px,5vw,44px)',fontWeight:800,color:'#0f172a',marginBottom:'16px',letterSpacing:'-1px'}}>Notre histoire</h2>
              <p style={{color:'#475569',fontSize:'16px',lineHeight:1.8,marginBottom:'20px'}}>
                VisioFlow a été fondée en 2025 par Yanis Boudadour, passionné de restauration et de technologie web.
                Après avoir aidé plusieurs amis restaurateurs à créer leurs sites web, nous avons constaté un problème :
                les solutions existantes étaient soit trop chères, soit trop complexes, soit obligeaient à des abonnements mensuels.
              </p>
              <p style={{color:'#475569',fontSize:'16px',lineHeight:1.8,marginBottom:'20px'}}>
                Nous avons décidé de créer une solution différente : des sites web professionnels pour restaurateurs,
                livrés en 48 heures, à un prix abordable, et surtout sans abonnement. L'hébergement est inclus à vie.
              </p>
              <p style={{color:'#475569',fontSize:'16px',lineHeight:1.8}}>
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
          <h2 style={{fontFamily:'Outfit, sans-serif',fontSize:'clamp(28px,5vw,44px)',fontWeight:800,color:'#0f172a',textAlign:'center',marginBottom:'16px',letterSpacing:'-1px'}}>Notre approche</h2>
          <p style={{color:'#475569',textAlign:'center',maxWidth:'700px',margin:'0 auto 60px',fontSize:'18px'}}>
            Une méthode simple et transparente, au service des restaurateurs français.
          </p>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-num">48h</div>
              <div className="stat-label">Délai de livraison annoncé</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">0 €</div>
              <div className="stat-label">Abonnement mensuel</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">2</div>
              <div className="stat-label">Packs clairs et sans engagement</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">À vie</div>
              <div className="stat-label">Hébergement inclus</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section">
        <div className="container">
          <h2 style={{fontFamily:'Outfit, sans-serif',fontSize:'clamp(28px,5vw,44px)',fontWeight:800,color:'#0f172a',textAlign:'center',marginBottom:'16px',letterSpacing:'-1px'}}>Nos valeurs</h2>
          <p style={{color:'#475569',textAlign:'center',maxWidth:'700px',margin:'0 auto 60px',fontSize:'18px'}}>
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
          <h2 style={{fontFamily:'Outfit, sans-serif',fontSize:'clamp(28px,5vw,44px)',fontWeight:800,color:'#0f172a',textAlign:'center',marginBottom:'16px',letterSpacing:'-1px'}}>Notre équipe</h2>
          <p style={{color:'#475569',textAlign:'center',maxWidth:'700px',margin:'0 auto 60px',fontSize:'18px'}}>
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

      <Footer />
      </div>
    </>
  );
}