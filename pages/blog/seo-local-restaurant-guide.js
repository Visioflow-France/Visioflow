import Head from 'next/head';
import Link from 'next/link';

const canonicalUrl = "https://visioflow.fr/blog/seo-local-restaurant-guide";

export default function BlogSEOLocal() {
  return (
    <>
      <Head>
        <title>SEO Local Restaurant | Guide Complet 2025 | Google Business Profile</title>
        <meta
          name="description"
          content="Guide SEO local pour restaurants en 2025. Google Business Profile, citations, reviews, local keywords. Attirez plus de clients locaux avec notre guide complet."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="SEO Local Restaurant | Guide Complet 2025 | Google Business Profile" />
        <meta property="og:description" content="Guide SEO local pour restaurants en 2025. Google Business Profile, citations, reviews, local keywords. Attirez plus de clients locaux avec notre guide complet." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="VisioFlow" />

        <style>{`
          *{box-sizing:border-box;margin:0;padding:0}
          body{font-family:'Inter Tight',-apple-system,BlinkMacSystemFont,sans-serif;background:#0f172a;color:#f1f5f9;line-height:1.8}
          .container{max-width:900px;margin:0 auto;padding:0 24px}
          .hero{padding:80px 24px 60px;text-align:center}
          .hero-title{font-family:'Fraunces',sans-serif;font-size:clamp(32px,5vw,48px);font-weight:800;color:#fff;line-height:1.2;margin-bottom:20px;letterSpacing:-1px}
          .hero-sub{color:#94a3b8;font-size:18px;margin-bottom:40px}
          .steps{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px;margin:40px 0}
          .step-card{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:20px;padding:32px}
          .step-number{width:48px;height:48px;background:linear-gradient(135deg,#0071E3,#38bdf8);border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:'Fraunces',sans-serif;font-size:24px;font-weight:900;color:#fff;margin-bottom:20px}
          .step-title{font-size:18px;font-weight:700;color:#fff;margin-bottom:12px}
          .step-desc{color:#94a3b8;font-size:14px;line-height:1.7}
          .cta{background:linear-gradient(135deg,#0071E3 0%,#38bdf8 100%);border-radius:24px;padding:48px;margin:40px 0;text-align:center}
          .cta-btn{display:inline-block;padding:16px 32px;border-radius:50px;background:#fff;color:#0071E3;font-size:16px;font-weight:700;text-decoration:none;transition:all .3s}
          .nav{background:rgba(15,23,42,.9);backdrop-filter:blur(10px);position:fixed;top:0;left:0;right:0;z-index:100;padding:16px 0;border-bottom:1px solid rgba(255,255,255,.1)}
          .nav-content{max-width:1200px;margin:0 auto;padding:0 24px;display:flex;justify-content:space-between;align-items:center}
          .logo{font-family:'Fraunces',sans-serif;font-size:24px;font-weight:900;color:#fff}
          .logo span{color:#0071E3}
        `}</style>
      </Head>

      <nav className="nav">
        <div className="nav-content">
          <Link href="/" className="logo"><img src="/logo.svg" alt="VisioFlow" width="32" height="32" />Visio<span>flow</span></Link>
          <Link href="/paiement" style={{background:'#0071E3',color:'#fff',padding:'10px 20px',borderRadius:'50px',fontWeight:600,textDecoration:'none'}}>Commencer →</Link>
        </div>
      </nav>

      <div className="hero">
        <h1 className="hero-title">SEO Local Restaurant</h1>
        <p className="hero-sub">Guide complet 2025 pour attirer plus de clients locaux via Google Maps</p>
      </div>

      <div className="container" style={{padding:'40px 24px 100px'}}>
        <div className="steps">
          <div className="step-card">
            <div className="step-number">1</div>
            <h3 className="step-title">Google Business Profile</h3>
            <p className="step-desc">Créez et optimisez votre profil Google Business. Ajoutez photos, horaires, menu et encouragez les avis clients.</p>
          </div>
          <div className="step-card">
            <div className="step-number">2</div>
            <h3 className="step-title">Citations locales</h3>
            <p className="step-desc">Inscrivez-vous sur Yelp, TripAdvisor, PagesJaunes. NAP (Name, Address, Phone) cohérent sur tous les sites.</p>
          </div>
          <div className="step-card">
            <div className="step-number">3</div>
            <h3 className="step-title">Keywords locaux</h3>
            <p className="step-desc">Ciblez "restaurant Paris", "bistro Lyon", "brasserie Marseille". Intégrez-les dans votre contenu.</p>
          </div>
          <div className="step-card">
            <div className="step-number">4</div>
            <h3 className="step-title">Avis clients</h3>
            <p className="step-desc">Demandez des avis Google à vos clients. Répondez à tous les avis, positifs et négatifs.</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="cta">
          <h3>VisioFlow optimise votre SEO local</h3>
          <p>Nos sites incluent schema.org local, cartes Google Maps et optimisation mobile.</p>
          <Link href="/tarifs" className="cta-btn">Voir nos tarifs</Link>
        </div>
      </div>
    </>
  );
}