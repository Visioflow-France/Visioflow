import Head from 'next/head';
import Footer from '../components/Footer';

const canonicalUrl = "https://visioflow.fr/temoignages";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Pierre Martin",
      role: "Fondateur, TechStartup (Paris)",
      rating: 5,
      text: "VisioFlow a créé notre site startup en temps record. Le design est moderne, parfaitement adapté à notre image tech. L'appel de découverte nous a permis de cibler exactement nos besoins. Livraison rapide et support réactif.",
      date: "Mai 2026",
      type: "Startup"
    },
    {
      name: "Marie Dubois",
      role: "Avocate au barreau (Lyon)",
      rating: 5,
      text: "En tant qu'avocate, j'avais besoin d'un site professionnel et épuré. VisioFlow a compris mes exigences : design minimaliste, mise en avant de mes domaines de compétence, formulaire de contact simple. Je recommande vivement.",
      date: "Avril 2026",
      type: "Profession libérale"
    },
    {
      name: "Jean-Pierre Lefevre",
      role: "Gérant, Boutique Mode (Bordeaux)",
      rating: 5,
      text: "Notre e-commerce a augmenté de 40% depuis que VisioFlow a créé notre site. Le panier est fluide, le paiement Stripe sécurisé, et les clients peuvent commander facilement. L'appel stratégique nous a fait gagner un temps précieux.",
      date: "Mars 2026",
      type: "E-commerce"
    },
    {
      name: "Sophie Bernard",
      role: "Architecte d'intérieur (Marseille)",
      rating: 5,
      text: "Mon portfolio est magnifique, avec une galerie photos optimisée. VisioFlow a su mettre en valeur mes réalisations tout en gardant une navigation fluide. Les clients me complimentent régulièrement sur mon site.",
      date: "Février 2026",
      type: "Portfolio"
    },
    {
      name: "Lucas Moreau",
      role: "Directeur, Agence immobilière (Nice)",
      rating: 4,
      text: "Le site est parfait pour présenter nos biens. Les fiches immobilières sont claires, les photos mises en valeur. L'appel de découverte nous a permis de définir exactement nos besoins. Support très réactif.",
      date: "Janvier 2026",
      type: "Vitrine"
    },
    {
      name: "Claire Durand",
      role: "Fondatrice, Blog Voyage (Strasbourg)",
      rating: 5,
      text: "VisioFlow a créé mon blog voyage avec un design inspirant. La navigation est intuitive, les articles bien mis en valeur. Le SEO est optimisé et mes visiteurs ont augmenté de 60%. Très satisfait du résultat.",
      date: "Décembre 2025",
      type: "Blog"
    },
    {
      name: "Antoine Roux",
      role: "Chef, Restaurant Bistrot Gourmet (Toulouse)",
      rating: 5,
      text: "J'avais besoin d'un site web rapidement pour mon restaurant. VisioFlow a livré en 48 heures avec un design parfaitement adapté. Les commandes en ligne fonctionnent sans problème. Service impeccable et réactif.",
      date: "Novembre 2025",
      type: "Restaurant"
    },
    {
      name: "Isabelle Fontaine",
      role: "Coach sportif (Nantes)",
      rating: 5,
      text: "Mon site professionnel présente parfaitement mes services de coaching. Les clients peuvent réserver des séances en ligne, voir mes programmes et me contacter facilement. L'appel de découverte a tout clarifié.",
      date: "Octobre 2025",
      type: "Services"
    }
  ];

  return (
    <>
      <Head>
        <title>Témoignages clients | VisioFlow — Agence de création de sites web</title>
        <meta
          name="description"
          content="Découvrez les témoignages de nos clients satisfaits : restaurants, e-commerce, professions libérales, startups. Sites web professionnels livrés rapidement sans abonnement."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Cas d'usage & exemples | VisioFlow" />
        <meta property="og:description" content="Des exemples illustratifs de sites et de cas d'usage pour restaurateurs créés par VisioFlow." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="VisioFlow" />


        <style>{`
          #vflp,#vflp *{box-sizing:border-box;margin:0;padding:0}
          #vflp{min-height:100vh;font-family:'Inter Tight',-apple-system,BlinkMacSystemFont,sans-serif;background:#ffffff;color:#1e293b;line-height:1.6}
          #vflp .container{max-width:1200px;margin:0 auto;padding:0 20px}
          #vflp .hero{min-height:60vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:100px 20px 60px;position:relative;background:#ffffff}
          #vflp .hero-bg{position:absolute;inset:0;background:linear-gradient(135deg,#ffffff 0%,#dbeafe 50%,#ffffff 100%);opacity:1}
          #vflp .hero-content{position:relative;z-index:1;max-width:900px}
          #vflp .hero-title{font-family:'Fraunces',sans-serif;font-size:clamp(40px,7vw,64px);font-weight:900;color:#0f172a;line-height:1.1;margin-bottom:20px;letter-spacing:-2px}
          #vflp .hero-sub{font-size:18px;color:#475569;margin-bottom:40px;max-width:700px;margin-left:auto;margin-right:auto}
          #vflp .rating-display{display:flex;align-items:center;justify-content:center;gap:12px;margin-bottom:20px}
          #vflp .rating-stars{color:#fbbf24;font-size:28px}
          #vflp .rating-score{font-family:'Fraunces',sans-serif;font-size:48px;font-weight:900;color:#0f172a}
          #vflp .rating-label{color:#475569;font-size:16px}
          #vflp .section{padding:100px 20px}
          #vflp .testimonials-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(350px,1fr));gap:24px;margin-top:60px}
          #vflp .testimonial-card{background:#f8fafc;border:1px solid rgba(15,23,42,.08);border-radius:20px;padding:32px;transition:all .3s;box-shadow:0 2px 10px rgba(15,23,42,.04)}
          #vflp .testimonial-card:hover{transform:translateY(-4px);border-color:rgba(0,113,227,.3)}
          #vflp .testimonial-header{display:flex;align-items:center;gap:16px;margin-bottom:20px}
          #vflp .testimonial-avatar{width:56px;height:56px;border-radius:50%;background:rgba(0,113,227,.15);display:flex;align-items:center;justify-content:center;color:#0071E3}
          #vflp .testimonial-info{flex:1}
          #vflp .testimonial-name{font-size:16px;font-weight:700;color:#0f172a;margin-bottom:4px}
          #vflp .testimonial-role{font-size:13px;color:#475569}
          #vflp .testimonial-rating{display:flex;gap:4px;color:#fbbf24;margin-bottom:16px}
          #vflp .testimonial-text{font-size:15px;color:#475569;line-height:1.7;margin-bottom:20px;font-style:italic}
          #vflp .testimonial-footer{display:flex;justify-content:space-between;align-items:center;padding-top:20px;border-top:1px solid rgba(15,23,42,.08)}
          #vflp .testimonial-date{font-size:12px;color:#64748b}
          #vflp .testimonial-pack{background:rgba(0,113,227,.15);color:#0071E3;padding:6px 14px;border-radius:50px;font-size:12px;font-weight:600}
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
          @media(max-width:768px){#vflp .testimonials-grid{grid-template-columns:1fr}#vflp .nav-links{display:none}}
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
            <a href="/temoignages" style={{color:'#0071E3'}}>Témoignages</a>
            <a href="/a-propos">À propos</a>
          </div>
          <a href="/paiement" className="nav-cta">Commencer →</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-content">
          <h1 className="hero-title">
            Cas d'usage & exemples
          </h1>
          <p className="hero-sub">
            Découvrez, à travers des exemples illustratifs, les types de besoins restaurateurs
            que VisioFlow accompagne : site vitrine, commandes en ligne, menu digital — livrés
            en 48 heures, sans abonnement.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section">
        <div className="container">
          <h2 style={{fontFamily:'Outfit, sans-serif',fontSize:'clamp(28px,5vw,44px)',fontWeight:800,color:'#0f172a',textAlign:'center',marginBottom:'16px',letterSpacing:'-1px'}}>Exemples de cas d'usage</h2>
          <p style={{color:'#475569',textAlign:'center',maxWidth:'700px',margin:'0 auto 30px',fontSize:'18px'}}>
            Des scénarios illustratifs représentatifs des besoins que nous traitons, partout en France.
          </p>
          <p style={{color:'#475569',textAlign:'center',maxWidth:'680px',margin:'0 auto 60px',fontSize:'13.5px',fontStyle:'italic',opacity:.85}}>
            ⚠️ Les exemples ci-dessous sont <strong>illustratifs</strong> et présentés à titre démonstratif.
            Les noms, établissements et commentaires ne constituent pas des avis ou témoignages de clients
            réels et ne doivent pas être interprétés comme tels. VisioFlow s'engage à ne publier des avis
            vérifiés que lorsqu'ils auront été collectés et contrôlés conformément aux articles L.214-1
            et suivants du Code de la consommation.
          </p>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div className="testimonial-card" key={index}>
                <div className="testimonial-header">
                  <div className="testimonial-avatar">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  </div>
                  <div className="testimonial-info">
                    <div className="testimonial-name">{testimonial.name}</div>
                    <div className="testimonial-role">{testimonial.role}</div>
                  </div>
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-footer">
                  <span className="testimonial-pack">{testimonial.pack}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section" style={{background:'rgba(15,23,42,.02)'}}>
        <div className="container">
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:'32px',textAlign:'center'}}>
            <div>
              <div style={{fontFamily:'Outfit, sans-serif',fontSize:'56px',fontWeight:900,color:'#0071E3',marginBottom:'8px'}}>48h</div>
              <div style={{color:'#475569',fontSize:'15px'}}>Délai de livraison annoncé</div>
            </div>
            <div>
              <div style={{fontFamily:'Outfit, sans-serif',fontSize:'56px',fontWeight:900,color:'#0071E3',marginBottom:'8px'}}>2</div>
              <div style={{color:'#475569',fontSize:'15px'}}>Packs proposés</div>
            </div>
            <div>
              <div style={{fontFamily:'Outfit, sans-serif',fontSize:'56px',fontWeight:900,color:'#0071E3',marginBottom:'8px'}}>0 €</div>
              <div style={{color:'#475569',fontSize:'15px'}}>Abonnement mensuel</div>
            </div>
            <div>
              <div style={{fontFamily:'Outfit, sans-serif',fontSize:'56px',fontWeight:900,color:'#0071E3',marginBottom:'8px'}}>À vie</div>
              <div style={{color:'#475569',fontSize:'15px'}}>Hébergement inclus</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="cta">
        <h2>Lancez votre site restaurant</h2>
        <p>
          Votre site web professionnel en 48 heures, sans abonnement.
          Découvrez pourquoi les restaurateurs recommandent VisioFlow.
        </p>
        <a href="/tarifs" className="cta-btn">Voir nos tarifs</a>
      </div>

      <Footer />
      </div>
    </>
  );
}