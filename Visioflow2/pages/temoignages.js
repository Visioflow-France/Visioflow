import Head from 'next/head';
import Footer from '../components/Footer';

const canonicalUrl = "https://visioflow.fr/temoignages";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Pierre Martin",
      role: "Propriétaire, Le Bistro de Pierre (Paris 11e)",
      rating: 5,
      text: "VisioFlow a créé mon site web en 48 heures exactement comme promis. Le design est magnifique, les commandes en ligne fonctionnent parfaitement et mes clients adorent. Le panel admin est très simple à utiliser. Je recommande à 100%.",
      date: "Mai 2026",
      pack: "Pack Premium"
    },
    {
      name: "Marie Dubois",
      role: "Cheffe, La Table de Marie (Lyon 6e)",
      rating: 5,
      text: "Après avoir comparé plusieurs solutions, j'ai choisi VisioFlow pour le prix et la qualité. Le Pack Essentiel était parfait pour mon restaurant : site vitrine professionnel, menu digital et horaires. L'équipe est réactive et professionnelle.",
      date: "Avril 2026",
      pack: "Pack Essentiel"
    },
    {
      name: "Jean-Pierre Lefevre",
      role: "Gérant, Brasserie du Coin (Bordeaux)",
      rating: 5,
      text: "Les commandes en ligne ont augmenté de 40% depuis que j'ai mon site VisioFlow. Le panier est fluide, le paiement Stripe est sécurisé et les clients peuvent commander facilement. Le support technique est excellent, toujours disponible.",
      date: "Mars 2026",
      pack: "Pack Premium"
    },
    {
      name: "Sophie Bernard",
      role: "Propriétaire, Les Petits Plats (Marseille)",
      rating: 5,
      text: "J'avais peur que ça soit compliqué, mais VisioFlow a tout simplifié. Ils ont créé mon site en 48 heures, l'ont hébergé à vie et m'ont formé au panel admin. Aujourd'hui, je gère mon menu et mes commandes en toute autonomie.",
      date: "Février 2026",
      pack: "Pack Premium"
    },
    {
      name: "Lucas Moreau",
      role: "Chef, Le Petit Resto (Nice)",
      rating: 4,
      text: "Le site web est superbe et fonctionne très bien. Le prix est imbattable pour la qualité reçue. J'ai juste eu quelques modifications mineures à faire le premier mois, mais le support a été rapide et efficace.",
      date: "Janvier 2026",
      pack: "Pack Essentiel"
    },
    {
      name: "Claire Durand",
      role: "Gérante, Café des Arts (Strasbourg)",
      rating: 5,
      text: "VisioFlow est la meilleure solution pour les restaurateurs. Le prix est transparent, pas d'abonnement mensuel, et le service est impeccable. Mon site web attire de nouveaux clients et facilite les réservations.",
      date: "Décembre 2025",
      pack: "Pack Premium"
    },
    {
      name: "Antoine Roux",
      role: "Propriétaire, Bistrot Gourmet (Toulouse)",
      rating: 5,
      text: "J'avais besoin d'un site web rapidement pour mon nouveau restaurant. VisioFlow a livré en 48 heures avec un design parfaitement adapté à mon style. Les commandes en ligne fonctionnent sans problème. Très satisfait.",
      date: "Novembre 2025",
      pack: "Pack Premium"
    },
    {
      name: "Isabelle Fontaine",
      role: "Cheffe, Restaurant Le Garden (Nantes)",
      rating: 5,
      text: "Le Pack Essentiel était exactement ce dont j'avais besoin : un site vitrine professionnel avec menu digital et horaires. VisioFlow a été professionnel, rapide et abordable. Je recommande vivement.",
      date: "Octobre 2025",
      pack: "Pack Essentiel"
    }
  ];

  return (
    <>
      <Head>
        <title>Cas d'usage & exemples | VisioFlow — Création de sites restaurant</title>
        <meta
          name="description"
          content="Des exemples illustratifs de sites et de cas d'usage pour restaurateurs créés par VisioFlow : site vitrine, commandes en ligne, livraison en 48 heures, sans abonnement."
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
          *{box-sizing:border-box;margin:0;padding:0}
          body{font-family:'Inter Tight',-apple-system,BlinkMacSystemFont,sans-serif;background:#0f172a;color:#f1f5f9;line-height:1.6}
          .container{max-width:1200px;margin:0 auto;padding:0 20px}
          .hero{min-height:60vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:100px 20px 60px;position:relative}
          .hero-bg{position:absolute;inset:0;background:linear-gradient(135deg,#0f172a 0%,#1e3a5f 50%,#0f172a 100%);opacity:.3}
          .hero-content{position:relative;z-index:1;max-width:900px}
          .hero-title{font-family:'Fraunces',sans-serif;font-size:clamp(40px,7vw,64px);font-weight:900;color:#fff;line-height:1.1;margin-bottom:20px;letter-spacing:-2px}
          .hero-sub{font-size:18px;color:#94a3b8;margin-bottom:40px;max-width:700px;margin-left:auto;margin-right:auto}
          .rating-display{display:flex;align-items:center;justify-content:center;gap:12px;margin-bottom:20px}
          .rating-stars{color:#fbbf24;font-size:28px}
          .rating-score{font-family:'Fraunces',sans-serif;font-size:48px;font-weight:900;color:#fff}
          .rating-label{color:#94a3b8;font-size:16px}
          .section{padding:100px 20px}
          .testimonials-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(350px,1fr));gap:24px;margin-top:60px}
          .testimonial-card{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:20px;padding:32px;transition:all .3s}
          .testimonial-card:hover{transform:translateY(-4px);border-color:rgba(0,113,227,.3)}
          .testimonial-header{display:flex;align-items:center;gap:16px;margin-bottom:20px}
          .testimonial-avatar{width:56px;height:56px;border-radius:50%;background:rgba(0,113,227,.15);display:flex;align-items:center;justify-content:center;color:#0071E3}
          .testimonial-info{flex:1}
          .testimonial-name{font-size:16px;font-weight:700;color:#fff;margin-bottom:4px}
          .testimonial-role{font-size:13px;color:#94a3b8}
          .testimonial-rating{display:flex;gap:4px;color:#fbbf24;margin-bottom:16px}
          .testimonial-text{font-size:15px;color:#cbd5e1;line-height:1.7;margin-bottom:20px;font-style:italic}
          .testimonial-footer{display:flex;justify-content:space-between;align-items:center;padding-top:20px;border-top:1px solid rgba(255,255,255,.1)}
          .testimonial-date{font-size:12px;color:#64748b}
          .testimonial-pack{background:rgba(0,113,227,.15);color:#0071E3;padding:6px 14px;border-radius:50px;font-size:12px;font-weight:600}
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
          @media(max-width:768px){.testimonials-grid{grid-template-columns:1fr}.nav-links{display:none}}
        `}</style>
      </Head>

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
          <h2 style={{fontFamily:'Outfit, sans-serif',fontSize:'clamp(28px,5vw,44px)',fontWeight:800,color:'#fff',textAlign:'center',marginBottom:'16px',letterSpacing:'-1px'}}>Exemples de cas d'usage</h2>
          <p style={{color:'#94a3b8',textAlign:'center',maxWidth:'700px',margin:'0 auto 30px',fontSize:'18px'}}>
            Des scénarios illustratifs représentatifs des besoins que nous traitons, partout en France.
          </p>
          <p style={{color:'#94a3b8',textAlign:'center',maxWidth:'680px',margin:'0 auto 60px',fontSize:'13.5px',fontStyle:'italic',opacity:.85}}>
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
      <section className="section" style={{background:'rgba(255,255,255,.02)'}}>
        <div className="container">
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:'32px',textAlign:'center'}}>
            <div>
              <div style={{fontFamily:'Outfit, sans-serif',fontSize:'56px',fontWeight:900,color:'#0071E3',marginBottom:'8px'}}>48h</div>
              <div style={{color:'#94a3b8',fontSize:'15px'}}>Délai de livraison annoncé</div>
            </div>
            <div>
              <div style={{fontFamily:'Outfit, sans-serif',fontSize:'56px',fontWeight:900,color:'#0071E3',marginBottom:'8px'}}>2</div>
              <div style={{color:'#94a3b8',fontSize:'15px'}}>Packs proposés</div>
            </div>
            <div>
              <div style={{fontFamily:'Outfit, sans-serif',fontSize:'56px',fontWeight:900,color:'#0071E3',marginBottom:'8px'}}>0 €</div>
              <div style={{color:'#94a3b8',fontSize:'15px'}}>Abonnement mensuel</div>
            </div>
            <div>
              <div style={{fontFamily:'Outfit, sans-serif',fontSize:'56px',fontWeight:900,color:'#0071E3',marginBottom:'8px'}}>À vie</div>
              <div style={{color:'#94a3b8',fontSize:'15px'}}>Hébergement inclus</div>
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
    </>
  );
}