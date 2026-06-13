import Head from 'next/head';
import Link from 'next/link';

const canonicalUrl = "https://visioflow.fr/blog/photos-restaurant-conseils";

export default function BlogPhotos() {
  return (
    <>
      <Head>
        <title>Photos Restaurant | Guide Complet 2025 | Conseils Pros</title>
        <meta
          name="description"
          content="Guide complet pour photographier vos plats de restaurant. Éclairage, composition, angles, retouche. Vos photos vendent votre menu."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Photos Restaurant | Guide Complet 2025 | Conseils Pros" />
        <meta property="og:description" content="Guide complet pour photographier vos plats de restaurant. Éclairage, composition, angles, retouche. Vos photos vendent votre menu." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="VisioFlow" />

        <style>{`
          *{box-sizing:border-box;margin:0;padding:0}
          body{font-family:'Inter Tight',-apple-system,BlinkMacSystemFont,sans-serif;background:#0f172a;color:#f1f5f9}
          .container{max-width:900px;margin:0 auto;padding:0 24px}
          .hero{padding:80px 24px 60px;text-align:center}
          .tips-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:24px;margin:40px 0}
          .tip-card{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:20px;padding:32px}
          .tip-icon{width:48px;height:48px;background:rgba(0,113,227,.15);border-radius:14px;display:flex;align-items:center;justify-content:center;color:#0071E3;margin-bottom:20px}
          .tip-title{font-size:18px;font-weight:700;color:#fff;margin-bottom:12px}
          .tip-desc{color:#94a3b8;font-size:14px;line-height:1.7}
          .cta{background:linear-gradient(135deg,#0071E3 0%,#38bdf8 100%);border-radius:24px;padding:48px;margin:40px 0;text-align:center}
          .cta-btn{display:inline-block;padding:16px 32px;border-radius:50px;background:#fff;color:#0071E3;font-size:16px;font-weight:700;text-decoration:none;transition:all .3s}
          .nav{background:rgba(15,23,42,.9);backdrop-filter:blur(10px);position:fixed;top:0;left:0;right:0;z-index:100;padding:16px 0;border-bottom:1px solid rgba(255,255,255,.1)}
          .logo{font-family:'Fraunces',sans-serif;font-size:24px;font-weight:900;color:#fff}
          .logo span{color:'#0071E3'}
        `}</style>
      </Head>

      <nav className="nav">
        <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <Link href="/" className="logo"><img src="/logo.svg" alt="VisioFlow" width="32" height="32" />Visio<span>flow</span></Link>
          <Link href="/paiement" style={{background:'#0071E3',color:'#fff',padding:'10px 20px',borderRadius:'50px',fontWeight:600,textDecoration:'none'}}>Commencer →</Link>
        </div>
      </nav>

      <div className="hero">
        <h1 style={{fontFamily:'Outfit, sans-serif',fontSize:'clamp(32px,5vw,48px)',fontWeight:800,color:'#fff',lineHeight:1.2,marginBottom:'20px'}}>Photos Restaurant</h1>
        <p style={{color:'#94a3b8',fontSize:'18px'}}>Guide complet 2025 pour photographier vos plats</p>
      </div>

      <div className="container" style={{padding:'40px 24px 100px'}}>
        <div className="tips-grid">
          <div className="tip-card">
            <div className="tip-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
            </div>
            <h3 className="tip-title">Éclairage naturel</h3>
            <p className="tip-desc">Photographiez près d'une fenêtre avec lumière naturelle. Évitez le flash direct qui crée des ombres dures.</p>
          </div>
          <div className="tip-card">
            <div className="tip-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-6-6M16.3 15.4a8.5 8.5 0 1 1-3.3-5.1"/></svg>
            </div>
            <h3 className="tip-title">Angle 45 degrés</h3>
            <p className="tip-desc">Photographiez depuis un angle de 45 degrés pour montrer la profondeur et le volume du plat.</p>
          </div>
          <div className="tip-card">
            <div className="tip-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M4 14l8-6 8 6"/></svg>
            </div>
            <h3 className="tip-title">Arrière-plan propre</h3>
            <p className="tip-desc">Utilisez une nappe propre, une assiette blanche ou une surface unie pour faire ressortir vos couleurs.</p>
          </div>
          <div className="tip-card">
            <div className="tip-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>
            </div>
            <h3 className="tip-title">Retouche légère</h3>
            <p className="tip-desc">Boostez la luminosité et les couleurs. Ne transformez pas les aliments, rendez-les simplement appétissants.</p>
          </div>
          <div className="tip-card">
            <div className="tip-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3h18v18H3zM12 8v8M8 12h8"/></svg>
            </div>
            <h3 className="tip-title">Résolution haute</h3>
            <p className="tip-desc">4K (3840x2160) minimum pour la qualité web. Compression JPEG 80% pour optimiser le chargement.</p>
          </div>
          <div className="tip-card">
            <div className="tip-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 3h6v6M14 10l6.1-6.1M9 21H3v-6M10 14l-6.1 6.1"/></svg>
            </div>
            <h3 className="tip-title">Multiple angles</h3>
            <p className="tip-desc">Photographiez chaque plat de 2-3 angles différents. Vue de dessus, vue de côté, détail de texture.</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="cta">
          <h3>Vos photos sur votre site en 48h</h3>
          <p>Nous intégrons vos photos professionnelles avec optimisation web automatique.</p>
          <Link href="/tarifs" className="cta-btn">Voir nos tarifs</Link>
        </div>
      </div>
    </>
  );
}