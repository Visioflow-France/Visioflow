import Head from 'next/head';
import Footer from '../components/Footer';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Charger les projets depuis Firebase ou utiliser des projets par défaut
    loadProjects();
  }, []);

  async function loadProjects() {
    try {
      // Essayer de charger depuis Firebase
      const response = await fetch('/api/public/projects');
      if (response.ok) {
        const data = await response.json();
        if (data && data.length > 0) {
          setProjects(data);
          return;
        }
      }
    } catch (err) {
      console.log('Using default projects');
    }

    // Projets par défaut si aucune donnée Firebase
    setProjects([
      {
        id: 1,
        title: "Site E-commerce Mode",
        description: "Boutique en ligne complète avec paiement Stripe et gestion des stocks.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
        tags: ["E-commerce", "Stripe", "Next.js"],
        link: "#"
      },
      {
        id: 2,
        title: "Site Vitrine Restaurant",
        description: "Site moderne avec menu digital et réservation en ligne.",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
        tags: ["Site Vitrine", "Menu Digital", "Responsive"],
        link: "#"
      },
      {
        id: 3,
        title: "Portfolio Photographe",
        description: "Galerie photo élégante avec blog intégré et contact.",
        image: "https://images.unsplash.com/photo-1554048612-387768052bf6?w=800&h=600&fit=crop",
        tags: ["Portfolio", "Galerie", "Blog"],
        link: "#"
      }
    ]);
  }

  const canonicalUrl = "https://visioflow.fr/nos-projets";

  return (
    <>
      <Head>
        <title>Nos Projets — Visioflow | Réalisations et portfolios</title>
        <meta
          name="description"
          content="Découvrez nos réalisations : sites e-commerce, vitrines, portfolios. Projets web modernes et performants réalisés par Visioflow."
        />
        <meta name="keywords" content="réalisations agence web, portfolios sites web, exemples projets, e-commerce, site vitrine" />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Nos Projets — Visioflow" />
        <meta property="og:description" content="Découvrez nos réalisations web et digitales." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />

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

          .hero{min-height:20vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:10px 20px 0px;position:relative;background:#ffffff;margin-top:20px;margin-bottom:0}
          .hero-bg{position:absolute;inset:0;background:linear-gradient(135deg,#ffffff 0%,#dbeafe 50%,#ffffff 100%)}
          .hero-content{position:relative;z-index:1;text-align:center}
          .hero-title{font-family:'Inter Tight',sans-serif;font-size:clamp(38px,6vw,54px);font-weight:900;color:#0f172a;line-height:1.1;margin-bottom:8px;letter-spacing:-0.5px;word-break:keep-word;text-align:center}
          .hero-sub{font-size:18px;color:#475569;margin-bottom:0px;max-width:700px;margin-left:auto;margin-right:auto;line-height:1.1;text-align:center}

          .section{padding:0px 20px 20px}
          .projects-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(350px,1fr));gap:0px;margin-top:0}
          .project-card{background:#fff;border:1px solid rgba(15,23,42,.08);border-radius:20px;overflow:hidden;transition:all .3s;box-shadow:0 2px 10px rgba(15,23,42,.04);margin:0}
          .project-card:hover{transform:translateY(-4px);box-shadow:0 12px 40px rgba(0,113,227,.12)}
          .project-image{width:100%;height:200px;object-fit:cover;background:linear-gradient(135deg,#f8fafc 0%,#e2e8f0 100%)}
          .project-content{padding:12px}
          .project-title{font-size:18px;font-weight:700;color:#0f172a;margin-bottom:6px;line-height:1.2;word-break:keep-word;overflow-wrap:break-word}
          .project-desc{color:#475569;font-size:14px;line-height:1.3;margin-bottom:8px;word-break:keep-word;overflow-wrap:break-word}
          .project-tags{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:8px}
          .project-tag{background:rgba(0,113,227,.08);color:#0071E3;padding:3px 10px;border-radius:12px;font-size:11px;font-weight:600;white-space:nowrap}
          .project-link{display:inline-flex;align-items:center;gap:6px;color:#0071E3;font-size:13px;font-weight:600}
          .project-link:hover{gap:8px}

          .cta{background:linear-gradient(135deg,#0071E3 0%,#38bdf8 100%);border-radius:24px;padding:20px 20px;text-align:center;margin:30px 20px 0}
          .cta h2{font-family:'Inter Tight',sans-serif;font-size:clamp(28px,4vw,36px);font-weight:900;color:#fff;margin-bottom:12px;line-height:1.2}
          .cta p{color:rgba(255,255,255,.8);font-size:16px;margin-bottom:24px;max-width:600px;margin-left:auto;margin-right:auto;line-height:1.5}
          .cta-btn{display:inline-block;padding:12px 32px;border-radius:50px;background:#fff;color:#0071E3;font-size:15px;font-weight:700;transition:all .3s;font-family:'Inter Tight',sans-serif}
          .cta-btn:hover{background:rgba(255,255,255,.9);transform:translateY(-2px)}

          @media(max-width:768px){
            .nav-links{display:none}
            .hero-title{font-size:38px}
            .projects-grid{grid-template-columns:1fr}
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
              Nos Réalisations
            </h1>
            <p className="hero-sub">
              Découvrez nos projets web et digitaux. Chaque réalisation est unique et adaptée aux besoins spécifiques de nos clients.
            </p>
          </div>
        </section>

        {/* Projets Section */}
        <section className="section">
          <div className="container">
            {projects.length === 0 ? (
              <div style={{textAlign: 'center', padding: '60px 20px'}}>
                <div style={{fontSize: '48px', marginBottom: '16px'}}>🚧</div>
                <h3 style={{fontSize: '20px', fontWeight: 600, color: '#0f172a', marginBottom: '8px'}}>
                  Projets en cours de réalisation
                </h3>
                <p style={{fontSize: '15px', color: '#64748b'}}>
                  Nos premières réalisations seront bientôt publiées ici.
                </p>
              </div>
            ) : (
              <div className="projects-grid">
                {projects.map(project => (
                  <div key={project.id} className="project-card">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image"
                    />
                    <div className="project-content">
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-desc">{project.description}</p>
                      <div className="project-tags">
                        {project.tags.map((tag, index) => (
                          <span key={index} className="project-tag">{tag}</span>
                        ))}
                      </div>
                      <a href={project.link} className="project-link">
                        Voir le projet
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <div className="cta">
          <h2>Votre projet pourrait être ici</h2>
          <p>
            Contactez-nous pour discuter de votre projet et rejoindre nos réalisations.
          </p>
          <Link href="/contact" className="cta-btn">
            💫 Démarrer votre projet
          </Link>
        </div>

        <Footer />
      </div>
    </>
  );
}