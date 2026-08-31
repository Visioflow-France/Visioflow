import Head from 'next/head';
import Link from 'next/link';

const canonicalUrl = "https://visioflow.fr/blog/comparatif-visioflow-wix-restaurant";

export default function BlogComparatifWix() {
  return (
    <>
      <Head>
        <title>Comparatif VisioFlow vs Wix pour Restaurant | 2025</title>
        <meta
          name="description"
          content="Comparatif complet VisioFlow vs Wix pour créer un site web restaurant. Prix, délai, fonctionnalités, avantages. VisioFlow 150€ vs Wix 20-40€/mois. Sans abonnement, livré en quelques semaines."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Comparatif VisioFlow vs Wix pour Restaurant | 2025" />
        <meta property="og:description" content="Comparatif complet VisioFlow vs Wix pour créer un site web restaurant. Prix, délai, fonctionnalités, avantages. VisioFlow 150€ vs Wix 20-40€/mois. Sans abonnement, livré en quelques semaines." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="VisioFlow" />
        <meta property="article:published_time" content="2025-05-23T00:00:00Z" />
        <meta property="article:modified_time" content="2025-05-23T00:00:00Z" />
        <meta property="article:section" content="Comparatif" />
        <meta property="article:tag" content="VisioFlow vs Wix" />
        <meta property="article:tag" content="création site restaurant" />
        <meta property="article:tag" content="site web restaurant" />

        <style>{`
          *{box-sizing:border-box;margin:0;padding:0}
          body{font-family:'Inter Tight',-apple-system,BlinkMacSystemFont,sans-serif;background:#0f172a;color:#f1f5f9;line-height:1.8}
          .container{max-width:1000px;margin:0 auto;padding:0 24px}
          .hero{padding:80px 24px 60px;text-align:center}
          .hero-title{font-family:'Fraunces',sans-serif;font-size:clamp(32px,5vw,48px);font-weight:800;color:#fff;line-height:1.2;margin-bottom:20px;letterSpacing:-1px}
          .hero-sub{color:#94a3b8;font-size:18px;margin-bottom:40px;max-width:700px;margin-left:auto;margin-right:auto}
          .comparison-table{width:100%;border-collapse:separate;border-spacing:0;margin:40px 0;background:rgba(255,255,255,.05);border-radius:20px;overflow:hidden}
          .comparison-table th{background:#0071E3;color:#fff;padding:20px;font-size:16px;font-weight:700;text-align:left}
          .comparison-table th.wix{background:#0f172a;color:#fff}
          .comparison-table td{padding:20px;border-bottom:1px solid rgba(255,255,255,.1);color:#cbd5e1}
          .comparison-table tr:last-child td{border-bottom:none}
          .comparison-table .check{color:#34d399}
          .comparison-table .cross{color:#ef4444}
          .comparison-table .winner{background:rgba(0,113,227,.15)}
          .winner-badge{background:#34d399;color:#0f172a;padding:4px 12px;border-radius:50px;font-size:12px;font-weight:700}
          .section{padding:60px 24px}
          .pros-cons{display:grid;grid-template-columns:repeat(auto-fit,minmax(400px,1fr));gap:32px;margin-top:40px}
          .pros-cons-card{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:20px;padding:32px}
          .pros-cons-title{font-family:'Fraunces',sans-serif;font-size:20px;font-weight:700;color:#fff;margin-bottom:20px;display:flex;align-items:center;gap:10px}
          .pros-cons-list{list-style:none;padding:0}
          .pros-cons-list li{padding:12px 0;border-bottom:1px solid rgba(255,255,255,.05);color:#cbd5e1}
          .pros-cons-list li:last-child{border-bottom:none}
          .pros-cons-list li svg{margin-right:10px}
          .cta{background:linear-gradient(135deg,#0071E3 0%,#38bdf8 100%);border-radius:24px;padding:48px;margin:40px 0;text-align:center}
          .cta h3{font-family:'Fraunces',sans-serif;font-size:clamp(24px,4vw,32px);font-weight:800;color:#fff;margin-bottom:16px}
          .cta p{color:rgba(255,255,255,.8);font-size:16px;margin-bottom:24px}
          .cta-btn{display:inline-block;padding:16px 32px;border-radius:50px;background:#fff;color:#0071E3;font-size:16px;font-weight:700;text-decoration:none;transition:all .3s}
          .cta-btn:hover{transform:translateY(-2px)}
          .nav{background:rgba(15,23,42,.9);backdrop-filter:blur(10px);position:fixed;top:0;left:0;right:0;z-index:100;padding:16px 0;border-bottom:1px solid rgba(255,255,255,.1)}
          .nav-content{max-width:1200px;margin:0 auto;padding:0 24px;display:flex;justify-content:space-between;align-items:center}
          .logo{font-family:'Fraunces',sans-serif;font-size:24px;font-weight:900;color:#fff}
          .logo span{color:#0071E3}
          .nav-links{display:flex;gap:24px}
          .nav-links a{color:#94a3b8;font-size:14px;font-weight:500;text-decoration:none;transition:color .2s}
          .nav-links a:hover{color:#fff}
          .nav-cta{background:#0071E3;color:#fff;padding:10px 20px;border-radius:50px;font-weight:600;font-size:14px;text-decoration:none;transition:all .2s}
          .nav-cta:hover{background:#0056b3;transform:translateY(-2px)}
          .footer{background:#0f172a;padding:60px 24px;border-top:1px solid rgba(255,255,255,.1);text-align:center;color:#64748b;font-size:13px}
          .highlight{color:#0071E3;font-weight:600}
          .price-highlight{font-family:'Fraunces',sans-serif;font-size:28px;font-weight:900;color:#0071E3}
        `}</style>
      </Head>

      {/* Navigation */}
      <nav className="nav">
        <div className="nav-content">
          <Link href="/" className="logo"><img src="/logo.svg" alt="VisioFlow" width="32" height="32" />Visio<span>flow</span></Link>
          <div className="nav-links">
            <Link href="/landing">Comment ça marche</Link>
            <Link href="/tarifs">Tarifs</Link>
            <Link href="/blog">Blog</Link>
          </div>
          <Link href="/paiement" className="nav-cta">Commencer →</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero">
        <h1 className="hero-title">VisioFlow vs Wix pour Restaurants</h1>
        <p className="hero-sub">
          Comparatif complet entre VisioFlow et Wix pour créer votre site web restaurant.
          Prix, délai, fonctionnalités et avantages détaillés.
        </p>
      </div>

      {/* Comparison Table */}
      <div className="container section">
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Critère</th>
              <th className="winner"><span className="winner-badge">GAGNANT</span> VisioFlow</th>
              <th className="wix">Wix</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Prix initial</strong></td>
              <td className="winner"><span className="price-highlight">150€</span> (Pack Essentiel)</td>
              <td>Gratuit (avec limitations)</td>
            </tr>
            <tr>
              <td><strong>Abonnement mensuel</strong></td>
              <td className="winner">Aucun</td>
              <td><span className="highlight">20-40€/mois</span></td>
            </tr>
            <tr>
              <td><strong>Hébergement</strong></td>
              <td className="winner">Inclus à vie</td>
              <td>Inclus dans abonnement</td>
            </tr>
            <tr>
              <td><strong>Délai de livraison</strong></td>
              <td className="winner"><span className="highlight">Quelques semaines</span></td>
              <td>2-4 semaines</td>
            </tr>
            <tr>
              <td><strong>Spécialisation restauration</strong></td>
              <td className="winner"><span className="check">✓</span> Spécialiste</td>
              <td><span className="cross">✗</span> Solution généraliste</td>
            </tr>
            <tr>
              <td><strong>Commandes en ligne</strong></td>
              <td className="winner"><span className="check">✓</span> Intégré (Pack Premium)</td>
              <td><span className="cross">✗</span> Plugin supplémentaire</td>
            </tr>
            <tr>
              <td><strong>Panel admin restaurant</strong></td>
              <td className="winner"><span className="check">✓</span> Inclus</td>
              <td><span className="cross">✗</span> Complexité élevée</td>
            </tr>
            <tr>
              <td><strong>Optimisation SEO local</strong></td>
              <td className="winner"><span className="check">✓</span> Optimisé</td>
              <td><span className="cross">✗</span> Configuration requise</td>
            </tr>
            <tr>
              <td><strong>Support dédié</strong></td>
              <td className="winner"><span className="check">✓</span> Restaurant-focused</td>
              <td><span className="cross">✗</span> Support générique</td>
            </tr>
            <tr>
              <td><strong>Coût sur 5 ans</strong></td>
              <td className="winner"><span className="price-highlight">150-490€</span> unique</td>
              <td><span className="highlight">1,200-2,400€</span> (20-40€/mois)</td>
            </tr>
          </tbody>
        </table>

        {/* Cost Breakdown */}
        <div style={{background:'rgba(0,113,227,.1)',border:'1px solid rgba(0,113,227,.3)',borderRadius:'20px',padding:'32px',marginTop:'40px'}}>
          <h2 style={{fontFamily:'Outfit, sans-serif',fontSize:'24px',fontWeight:700,color:'#fff',marginBottom:'20px'}}>💰 Coût sur 5 ans</h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',gap:'24px'}}>
            <div>
              <h3 style={{color:'#94a3b8',fontSize:'14px',marginBottom:'8px'}}>VisioFlow Pack Essentiel</h3>
              <div style={{fontFamily:'Outfit, sans-serif',fontSize:'48px',fontWeight:900,color:'#34d399'}}>150€</div>
              <p style={{color:'#64748b',fontSize:'13px',marginTop:'8px'}}>Paiement unique, hébergement à vie inclus</p>
            </div>
            <div>
              <h3 style={{color:'#94a3b8',fontSize:'14px',marginBottom:'8px'}}>VisioFlow Pack Premium</h3>
              <div style={{fontFamily:'Outfit, sans-serif',fontSize:'48px',fontWeight:900,color:'#34d399'}}>490€</div>
              <p style={{color:'#64748b',fontSize:'13px',marginTop:'8px'}}>Paiement unique, commandes en ligne incluses</p>
            </div>
            <div>
              <h3 style={{color:'#94a3b8',fontSize:'14px',marginBottom:'8px'}}>Wix (abonnement 20€/mois)</h3>
              <div style={{fontFamily:'Outfit, sans-serif',fontSize:'48px',fontWeight:900,color:'#ef4444'}}>1,200€</div>
              <p style={{color:'#64748b',fontSize:'13px',marginTop:'8px'}}>5 ans d'abonnement minimum</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pros and Cons */}
      <div className="container section">
        <h2 style={{fontFamily:'Outfit, sans-serif',fontSize:'clamp(28px,5vw,44px)',fontWeight:800,color:'#fff',textAlign:'center',marginBottom:'60px'}}>Avantages et Inconvénients</h2>
        <div className="pros-cons">
          <div className="pros-cons-card">
            <div className="pros-cons-title">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
              VisioFlow
            </div>
            <ul className="pros-cons-list">
              <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg> Spécialiste restauration</li>
              <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg> Aucun abonnement mensuel</li>
              <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg> Livré en quelques semaines</li>
              <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg> Support restaurant-focused</li>
              <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg> Commandes en ligne intégrées</li>
              <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg> SEO local optimisé</li>
              <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg> Templates limités (spécialisés)</li>
            </ul>
          </div>
          <div className="pros-cons-card">
            <div className="pros-cons-title">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
              Wix
            </div>
            <ul className="pros-cons-list">
              <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg> Templates nombreux</li>
              <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg> Drag-and-drop facile</li>
              <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg> Communauté importante</li>
              <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg> Abonnement mensuel obligatoire</li>
              <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg> Pas spécialisé restauration</li>
              <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg> Commandes en ligne = plugin payant</li>
              <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg> Support générique</li>
              <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg> SEO local non optimisé</li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="container">
        <div className="cta">
          <h3>Choisissez VisioFlow pour votre restaurant</h3>
          <p>
            Sans abonnement, livré en quelques semaines, spécialiste restauration.
            Pack Essentiel 150€ ou Premium 490€.
          </p>
          <Link href="/tarifs" className="cta-btn">
            Voir nos tarifs
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p style={{fontFamily:'Outfit, sans-serif',fontSize:'20px',fontWeight:900,color:'#fff',marginBottom:'8px'}}>
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
        <p style={{color:'rgba(255,255,255,.3)'}}>© {new Date().getFullYear()} VisioFlow — Tous droits réservés.</p>
      </footer>
    </>
  );
}