import Head from 'next/head';
import Link from 'next/link';

const canonicalUrl = "https://visioflow.fr/blog/erreur-creation-site-restaurant";

export default function BlogErreurs() {
  return (
    <>
      <Head>
        <title>5 Erreurs à Éviter Création Site Restaurant | Guide 2025</title>
        <meta
          name="description"
          content="Évitez ces 5 erreurs fréquentes lors de la création de votre site web restaurant : pas de photos, horaires manquants, non mobile, prix cachés, pas de SEO local."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="5 Erreurs à Éviter Création Site Restaurant | Guide 2025" />
        <meta property="og:description" content="Évitez ces 5 erreurs fréquentes lors de la création de votre site web restaurant : pas de photos, horaires manquants, non mobile, prix cachés, pas de SEO local." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="VisioFlow" />

        <style>{`
          *{box-sizing:border-box;margin:0;padding:0}
          body{font-family:'Inter Tight',-apple-system,BlinkMacSystemFont,sans-serif;background:#0f172a;color:#f1f5f9}
          .container{max-width:800px;margin:0 auto;padding:0 24px}
          .hero{padding:80px 24px 60px;text-align:center}
          .error-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(350px,1fr));gap:24px;margin:40px 0}
          .error-card{background:rgba(239,68,68,.1);border:1px solid rgba(239,68,68,.3);border-radius:20px;padding:32px}
          .error-number{font-family:"Outfit",sans-serif;font-size:48px;font-weight:900;color:#ef4444;margin-bottom:12px}
          .error-title{font-size:20px;font-weight:700;color:#fff;margin-bottom:12px}
          .error-desc{color:#94a3b8;font-size:14px;line-height:1.7}
          .nav{background:rgba(15,23,42,.9);backdrop-filter:blur(10px);position:fixed;top:0;left:0;right:0;z-index:100;padding:16px 0;border-bottom:1px solid rgba(255,255,255,.1)}
          .logo{font-family:"Outfit",sans-serif;font-size:24px;font-weight:900;color:#fff}
          .logo span{color:#0071E3}
        `}</style>
      </Head>

      <nav className="nav">
        <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <Link href="/" className="logo"><img src="/logo.svg" alt="VisioFlow" width="32" height="32" />Visio<span>flow</span></Link>
          <Link href="/paiement" style={{background:'#0071E3',color:'#fff',padding:'10px 20px',borderRadius:'50px',fontWeight:600,textDecoration:'none'}}>Commencer →</Link>
        </div>
      </nav>

      <div className="hero">
        <h1 style={{fontFamily:"Outfit, sans-serif",fontSize:'clamp(28px,5vw,44px)',fontWeight:800,color:'#fff',lineHeight:1.2,marginBottom:'20px'}}>5 Erreurs à Éviter</h1>
        <p style={{color:'#94a3b8',fontSize:'18px'}}>Pour votre site web restaurant</p>
      </div>

      <div className="container" style={{padding:'40px 24px 100px'}}>
        <div className="error-grid">
          <div className="error-card">
            <div className="error-number">1</div>
            <h3 className="error-title">Pas de photos des plats</h3>
            <p className="error-desc">80% des clients décident de commander en voyant les photos. Investissez dans de bonnes photos de vos plats.</p>
          </div>
          <div className="error-card">
            <div className="error-number">2</div>
            <h3 className="error-title">Horaires manquants</h3>
            <p className="error-desc">Vos clients doivent savoir quand vous êtes ouvert. Affichez vos horaires clairement sur chaque page.</p>
          </div>
          <div className="error-card">
            <div className="error-number">3</div>
            <h3 className="error-title">Non optimisé mobile</h3>
            <p className="error-desc">70% des recherches restaurant se font sur mobile. Un site non mobile perd 80% de ces prospects.</p>
          </div>
          <div className="error-card">
            <div className="error-number">4</div>
            <h3 className="error-title">Prix cachés ou abonnement</h3>
            <p className="error-desc">Soyez transparent sur vos prix. Les abonnements mensuels cachés éloignent les restaurateurs.</p>
          </div>
          <div className="error-card">
            <div className="error-number">5</div>
            <h3 className="error-title">Pas de SEO local</h3>
            <p className="error-desc">Google Business Profile optimisé, citations locales, reviews. Sans SEO local, vous n'existez pas sur Google Maps.</p>
          </div>
        </div>
      </div>
    </>
  );
}