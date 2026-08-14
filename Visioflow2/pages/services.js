import Head from 'next/head';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function ServicesPage() {
  const canonicalUrl = "https://visioflow.fr/services";

  const services = [
    {
      id: 'site-web',
      icon: '🌐',
      title: 'Sites Web 100% Adaptables',
      description: 'Sites vitrines élégants ou boutiques e-commerce complètes. Design responsive, performance optimale et référencement naturel inclus.',
      price: '200-800€',
      features: [
        'Design moderne et professionnel',
        'Responsive mobile & tablette',
        'Optimisation SEO',
        'Performance rapide',
        'Hébergement inclus'
      ],
      includes: ['Site vitrine', 'Pages illimitées', 'Formulaire contact', 'Analytics', 'Support'],
      ecommerce: ['Panier fonctionnel', 'Paiement sécurisé', 'Gestion produits', 'Commandes', 'Admin panel']
    },
    {
      id: 'google-business',
      icon: '📍',
      title: 'Google Business',
      description: 'Optimisation de votre fiche Google My Business pour maximiser votre visibilité locale et attirer davantage de clients.',
      price: '50-100€',
      features: [
        'Optimisation fiche Google',
        'Photos et vidéos',
        'Avis clients',
        'Statistiques',
        'Publication de posts'
      ],
      includes: ['Création fiche', 'Optimisation SEO', 'Photos professionnelles', 'Réponses avis', 'Rapports mensuels']
    },
    {
      id: 'reseaux-sociaux',
      icon: '📱',
      title: 'Réseaux Sociaux',
      description: 'Gestion complète de vos réseaux sociaux : création de contenu, publications régulières, recherche de collaborations.',
      price: '100-200€',
      features: [
        'Création de contenu',
        'Publications régulières',
        'Community management',
        'Recherche collaborations',
        'Analyse et rapports'
      ],
      includes: ['Stratégie contenu', 'Création visuels', 'Publications', 'Modération', 'Reporting']
    }
  ];

  return (
    <>
      <Head>
        <title>Nos Services — Visioflow | Sites web, Google Business, Réseaux sociaux</title>
        <meta
          name="description"
          content="Découvrez nos services complets : création de sites web (vitrine, e-commerce), optimisation Google Business, et gestion des réseaux sociaux. Tarifs transparents."
        />
        <meta name="keywords" content="services agence web, création site internet, google my business, gestion réseaux sociaux, community management" />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Nos Services — Visioflow" />
        <meta property="og:description" content="Sites web, Google Business, Réseaux sociaux. Découvrez nos tarifs transparents." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />

        <style>{`
          *{box-sizing:border-box;margin:0;padding:0}
          body{font-family:'Inter',-apple-system,BlinkMacSystemFont,sans-serif;background:#ffffff;color:#1e293b;line-height:1.6}
          a{text-decoration:none;transition:all .2s}
          .container{max-width:1200px;margin:0 auto;padding:0 20px}

          .nav{height:auto;background:rgba(255,255,255,.85);backdrop-filter:blur(10px);position:fixed;top:0;left:0;right:0;z-index:100;padding:16px 0;border-bottom:1px solid rgba(15,23,42,.08)}
          .nav-content{display:flex;justify-content:space-between;align-items:center}
          .logo{font-family:'Inter Tight',sans-serif;font-size:28px;font-weight:900;color:#0f172a;display:flex;align-items:center;gap:10px}
          .logo span{color:#0071E3}
          .nav-links{display:flex;gap:32px}
          .nav-links a{color:#475569;font-size:14px;font-weight:500}
          .nav-links a:hover{color:#0f172a}
          .nav-cta{background:#0071E3;color:#fff;padding:10px 24px;border-radius:50px;font-weight:600;font-size:14px}
          .nav-cta:hover{background:#0056b3;transform:translateY(-2px)}

          .hero{min-height:50vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:100px 20px 60px;position:relative;background:#ffffff}
          .hero-bg{position:absolute;inset:0;background:linear-gradient(135deg,#ffffff 0%,#dbeafe 50%,#ffffff 100%)}
          .hero-content{position:relative;z-index:1;max-width:800px}
          .hero-title{font-family:'Inter Tight',sans-serif;font-size:clamp(42px,8vw,64px);font-weight:900;color:#0f172a;line-height:1.1;margin-bottom:20px;letter-spacing:-2px}
          .hero-sub{font-size:18px;color:#475569;margin-bottom:40px;max-width:700px;margin-left:auto;margin-right:auto}

          .section{padding:60px 20px}
          .services{display:grid;grid-template-columns:repeat(auto-fit,minmax(350px,1fr));gap:32px;margin-top:40px}
          .service-card{background:#f8fafc;border:1px solid rgba(15,23,42,.08);border-radius:20px;padding:28px;transition:all .3s;box-shadow:0 2px 10px rgba(15,23,42,.04)}
          .service-card:hover{transform:translateY(-4px);border-color:rgba(0,113,227,.3);box-shadow:0 12px 40px rgba(0,113,227,.12)}
          .service-icon{width:56px;height:56px;background:linear-gradient(135deg,#0071E3,#38bdf8);border-radius:14px;display:flex;align-items:center;justify-content:center;color:#fff;margin-bottom:16px;font-size:24px}
          .service-title{font-size:20px;font-weight:700;color:#0f172a;margin-bottom:10px;line-height:1.3}
          .service-desc{color:#475569;font-size:14px;line-height:1.5;margin-bottom:16px}
          .service-price{color:#0071E3;font-weight:700;font-size:16px;margin-bottom:16px}
          .service-features{margin-bottom:16px}
          .service-feature{display:flex;align-items:center;gap:8px;margin-bottom:8px;color:#475569;font-size:13px;line-height:1.4}
          .service-feature svg{color:#34d399;flex-shrink:0}
          .service-includes{background:rgba(0,113,227,.05);border-radius:14px;padding:16px;margin-top:16px}
          .service-includes-title{font-weight:600;color:#0f172a;margin-bottom:8px;font-size:13px}
          .service-include{display:flex;align-items:center;gap:6px;margin-bottom:6px;color:#475569;font-size:12px;line-height:1.3}
          .service-include svg{color:#0071E3;flex-shrink:0}

          .cta{background:linear-gradient(135deg,#0071E3 0%,#38bdf8 100%);border-radius:24px;padding:40px 20px;text-align:center;margin:60px 20px 0}
          .cta h2{font-family:'Inter Tight',sans-serif;font-size:clamp(24px,4vw,32px);font-weight:900;color:#fff;margin-bottom:12px;line-height:1.2}
          .cta p{color:rgba(255,255,255,.85);font-size:16px;margin-bottom:24px;max-width:600px;margin-left:auto;margin-right:auto;line-height:1.5}
          .cta-btn{display:inline-block;padding:12px 32px;border-radius:50px;background:#fff,color:#0071E3;font-size:15px;font-weight:700;transition:all .3s;font-family:'Inter Tight',sans-serif}
          .cta-btn:hover{background:rgba(255,255,255,.9);transform:translateY(-2px)}

          @media(max-width:768px){
            .nav-links{display:none}
            .hero-title{font-size:36px}
            .services{grid-template-columns:1fr}
          }
        `}</style>
      </Head>

      <div>
        {/* Navigation */}
        <nav className="nav">
          <div className="container nav-content">
            <Link href="/" className="logo">
              <span style={{fontSize: '32px', fontWeight: '900', color: '#0f172a'}}>Visio</span><span>flow</span>
            </Link>
            <div className="nav-links">
              <Link href="/services">Services</Link>
              <Link href="/nos-projets">Nos projets</Link>
              <Link href="/contact">Contact</Link>
            </div>
            <Link href="/contact" className="nav-cta">Devis gratuit →</Link>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="hero">
          <div className="hero-bg" />
          <div className="hero-content">
            <h1 className="hero-title">
              Nos Services Complets
            </h1>
            <p className="hero-sub">
              Des solutions web et digitales adaptées à tous types d'activités.
              Découvrez nos tarifs transparents et notre approche sur-mesure.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="section">
          <div className="container">
            <div className="services">
              {services.map(service => (
                <div key={service.id} className="service-card">
                  <div className="service-icon">{service.icon}</div>
                  <h2 className="service-title">{service.title}</h2>
                  <p className="service-desc">{service.description}</p>
                  <div className="service-price">{service.price}</div>

                  <div className="service-features">
                    {service.features.map((feature, index) => (
                      <div key={index} className="service-feature">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="service-includes">
                    <div className="service-includes-title">Ce service inclut :</div>
                    {service.includes.map((item, index) => (
                      <div key={index} className="service-include">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                        {item}
                      </div>
                    ))}
                    {service.ecommerce && service.ecommerce.map((item, index) => (
                      <div key={index} className="service-include">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="cta">
          <h2>Prêt à démarrer votre projet ?</h2>
          <p>
            Contactez-nous pour une estimation gratuite personnalisée selon vos besoins.
          </p>
          <Link href="/contact" className="cta-btn">
            💫 Demander un devis
          </Link>
        </div>

        <Footer />
      </div>
    </>
  );
}