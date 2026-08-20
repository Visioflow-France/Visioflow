import Head from 'next/head';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function HomePage() {
  const canonicalUrl = "https://visioflow.fr";

  return (
    <>
      <Head>
        <title>Visioflow — Agence web & communication digitale | Sites web, Google Business, Réseaux sociaux</title>
        <meta
          name="description"
          content="Visioflow réalise vos projets web et digitaux : sites 100% adapatables (e-commerce, vitrine), gestion Google Business, et réseaux sociaux. Devis gratuit et estimation automatique."
        />
        <meta name="keywords" content="agence web, création site web, e-commerce, site vitrine, google business, réseaux sociaux, community management, seo local" />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Visioflow — Agence web & communication digitale" />
        <meta property="og:description" content="Sites web, Google Business, Réseaux sociaux. Devis gratuit et estimation automatique de votre projet." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="VisioFlow" />

        <style>{`
          *{box-sizing:border-box;margin:0;padding:0}
          body{font-family:'Inter',-apple-system,BlinkMacSystemFont,sans-serif;background:#ffffff;color:#1e293b;line-height:1.6}
          a{text-decoration:none;transition:all .2s}
          .container{max-width:1400px;margin:0 auto;padding:0 20px}

          .nav{height:auto;background:rgba(255,255,255,.85);backdrop-filter:blur(10px);position:fixed;top:0;left:0;right:0;z-index:100;padding:16px 0;border-bottom:1px solid rgba(15,23,42,.08)}
          .nav-content{display:flex;justify-content:space-between;align-items:center}
          .logo{font-family:'Inter Tight',sans-serif;font-size:28px;font-weight:900;color:#0f172a;display:flex;align-items:center;gap:10px}
          .logo span{color:#0071E3}
          .nav-links{display:flex;gap:32px}
          .nav-links a{color:#475569;font-size:14px;font-weight:500}
          .nav-links a:hover{color:#0f172a}
          .nav-cta{background:#0071E3;color:#fff;padding:10px 24px;border-radius:50px;font-weight:600;font-size:14px}
          .nav-cta:hover{background:#0056b3;transform:translateY(-2px)}

          .hero{min-height:40vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:10px 20px 0px;position:relative;background:#ffffff;margin-top:20px;margin-bottom:0}
          .hero-bg{position:absolute;inset:0;background:linear-gradient(135deg,#ffffff 0%,#dbeafe 50%,#ffffff 100%)}
          .hero-content{position:relative;z-index:1;text-align:center}
          .hero-badge{display:inline-flex;align-items:center;gap:8px;background:rgba(0,113,227,.15);border:1px solid rgba(0,113,227,.3);padding:8px 20px;border-radius:50px;color:#0071E3;font-size:13px;font-weight:600;margin-bottom:12px}
          .hero-title{font-family:'Inter Tight',sans-serif;font-size:clamp(42px,7vw,62px);font-weight:900;color:#0f172a;line-height:1.1;margin-bottom:8px;letter-spacing:-1px;word-break:keep-word;text-align:center}
          .hero-sub{font-size:16px;color:#475569;margin-bottom:0px;max-width:600px;margin-left:auto;margin-right:auto;line-height:1.1}
          .hero-actions{display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin-top:8px}
          .hero-btn{padding:12px 32px;border-radius:50px;font-size:16px;font-weight:700;cursor:pointer;transition:all .3s;display:inline-flex;align-items:center;gap:8px;border:none;font-family:'Inter Tight',sans-serif}
          .hero-btn.primary{background:#0071E3;color:#fff;box-shadow:0 10px 40px rgba(0,113,227,.3)}
          .hero-btn.primary:hover{background:#0056b3;transform:translateY(-3px);box-shadow:0 15px 50px rgba(0,113,227,.4)}
          .hero-btn.secondary{background:rgba(15,23,42,.05);color:#0f172a;border:2px solid rgba(15,23,42,.15)}
          .hero-btn.secondary:hover{background:rgba(15,23,42,.08)}

          .features{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:0px}
          .feature-card{background:#f8fafc;border:1px solid rgba(15,23,42,.08);border-radius:16px;padding:12px;transition:all .3s;margin:0}
          .feature-card:hover{background:#fff;border-color:rgba(0,113,227,.3)}
          .feature-icon{width:40px;height:40px;background:rgba(0,113,227,.15);border-radius:12px;display:flex;align-items:center;justify-content:center;color:#0071E3;margin-bottom:8px;font-size:16px}
          .feature-title{font-size:16px;font-weight:700;color:#0f172a;margin-bottom:4px;line-height:1.2}
          .feature-desc{color:#475569;font-size:13px;line-height:1.3}

          .cta{background:linear-gradient(135deg,#0071E3 0%,#38bdf8 100%);border-radius:32px;padding:40px 20px;text-align:center;margin:40px 20px 0}
          .cta h2{font-family:'Inter Tight',sans-serif;font-size:clamp(32px,5vw,48px);font-weight:900;color:#fff;margin-bottom:8px}
          .cta p{color:rgba(255,255,255,.8);font-size:18px;margin-bottom:32px;max-width:700px;margin-left:auto;margin-right:auto}

          .section{padding:0px 20px 0px}
          .section-title{font-family:'Inter Tight',sans-serif;font-size:clamp(28px,4vw,40px);font-weight:900;color:#0f172a;text-align:center;margin-bottom:12px;letter-spacing:-0.5px;word-break:keep-word}
          .section-sub{color:#475569;text-align:center;max-width:600px;margin:0 auto 40px;font-size:16px;line-height:1.5}

          @media(max-width:768px){
            .nav-links{display:none}
            .hero-title{font-size:42px}
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
            <div className="hero-badge">
              🚀 Agence web & digitale
            </div>
            <h1 className="hero-title">
              Votre présence digitale complète
            </h1>
            <p className="hero-sub">
              Sites web 100% adaptables, gestion Google Business, et animation de vos réseaux sociaux.
              Une approche moderne pour tous types d'activés.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="hero-btn primary">
                💫 Démarrer mon projet
              </Link>
              <Link href="/services" className="hero-btn secondary">
                👁️ Découvrir nos services
              </Link>
            </div>
            <div style={{marginTop: 40, display: 'flex', flexWrap: 'wrap', gap: 20, justifyContent: 'center', fontSize: 14, color: '#64748b'}}>
              <span>✓ Devis gratuit</span>
              <span>✓ Sans engagement</span>
              <span>✓ Réponse rapide</span>
              <span>✓ Tous secteurs</span>
            </div>
          </div>
        </section>

        {/* Avantages Section */}
        <section style={{background: 'rgba(15,23,42,.02)', margin: 0, padding: 0}}>
          <div className="container">
            <h2 className="section-title">Pourquoi choisir Visioflow ?</h2>
            <p className="section-sub">
              Une approche moderne et complète pour votre présence digitale.
            </p>
            <div className="features">
              <div className="feature-card">
                <div className="feature-icon">⚡</div>
                <h3 className="feature-title">Réponse Immédiate</h3>
                <p className="feature-desc">
                  Recevez une estimation automatique de votre projet en quelques secondes.
                  Plus d'attente pour connaître le budget approximatif.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🎯</div>
                <h3 className="feature-title">Approche Sur-Mesure</h3>
                <p className="feature-desc">
                  Chaque projet est analysé individuellement pour proposer
                  des solutions parfaitement adaptées à vos besoins.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🔄</div>
                <h3 className="feature-title">Suivi Personnalisé</h3>
                <p className="feature-desc">
                  Un accompagnement complet de l'estimation jusqu'à la réalisation
                  et au-delà, avec un support réactif.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📊</div>
                <h3 className="feature-title">Tous Secteurs</h3>
                <p className="feature-desc">
                  Que vous soyez artisan, commerçant, freelance ou entreprise,
                  nous adaptons nos solutions à votre domaine d'activité.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">💰</div>
                <h3 className="feature-title">Tarifs Transparents</h3>
                <p className="feature-desc">
                  Estimations claires et détaillées. Pas de surprises,
                  pas de frais cachés. Vous savez exactement ce que vous payez.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🚀</div>
                <h3 className="feature-title">Résultats Rapides</h3>
                <p className="feature-desc">
                  Processus optimisé pour des livraisons rapides sans
                  compromettre la qualité. Votre projet en ligne rapidement.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}