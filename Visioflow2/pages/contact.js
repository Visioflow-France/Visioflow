import { useState } from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: ''
  });
  const [estimatedPrice, setEstimatedPrice] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const calculateEstimate = (project) => {
    let services = [];

    // Analyse du projet pour identifier les services demandés
    if (project.toLowerCase().includes('e-commerce') || project.toLowerCase().includes('boutique')) {
      services.push({ name: 'e-commerce', min: 500, max: 800 });
    }
    if (project.toLowerCase().includes('vitrine') || project.toLowerCase().includes('présentation') || project.toLowerCase().includes('site web')) {
      services.push({ name: 'vitrine', min: 200, max: 400 });
    }
    if (project.toLowerCase().includes('réseaux sociaux') || project.toLowerCase().includes('social') || project.toLowerCase().includes('instagram') || project.toLowerCase().includes('facebook')) {
      services.push({ name: 'social', min: 100, max: 200 });
    }
    if (project.toLowerCase().includes('google') || project.toLowerCase().includes('seo') || project.toLowerCase().includes('my business') || project.toLowerCase().includes('local')) {
      services.push({ name: 'google', min: 50, max: 100 });
    }

    // Calculer le total (moyenne des min/max pour chaque service)
    if (services.length === 0) {
      return 100; // Prix minimum si aucun service identifié
    }

    const total = services.reduce((sum, service) => sum + (service.min + service.max) / 2, 0);
    return Math.round(total);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Calculer l'estimation
    const estimate = calculateEstimate(formData.project);
    setEstimatedPrice(estimate);
    setSubmitted(true);

    // Ici vous pouvez aussi envoyer les données à votre backend
    console.log('Données du formulaire:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Calculer l'estimation en temps réel lors de la description du projet
    if (name === 'project' && value.length > 20) {
      setEstimatedPrice(calculateEstimate(value));
    } else if (name === 'project' && value.length <= 20) {
      setEstimatedPrice(null);
    }
  };

  const canonicalUrl = "https://visioflow.fr/contact";

  return (
    <>
      <Head>
        <title>Contact — Visioflow | Devis gratuit et estimation automatique</title>
        <meta
          name="description"
          content="Contactez Visioflow pour une estimation gratuite de votre projet web et digital. Devis automatique en quelques secondes, sans engagement."
        />
        <meta name="keywords" content="contact agence web, demande devis gratuit, estimation site web, formulaire contact" />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Contact — Visioflow" />
        <meta property="og:description" content="Devis gratuit et estimation automatique de votre projet." />
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

          .hero{min-height:20vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:10px 20px 0px;position:relative;background:#ffffff;margin-top:20px;margin-bottom:0;padding-bottom:0}
          .hero-bg{position:absolute;inset:0;background:linear-gradient(135deg,#ffffff 0%,#dbeafe 50%,#ffffff 100%)}
          .hero-content{position:relative;z-index:1;text-align:center}
          .hero-title{font-family:'Inter Tight',sans-serif;font-size:clamp(38px,6vw,52px);font-weight:900;color:#0f172a;line-height:1.1;margin-bottom:8px;letter-spacing:-0.5px;word-break:keep-word;text-align:center}
          .hero-sub{font-size:16px;color:#475569;margin-bottom:0px;max-width:700px;margin-left:auto;margin-right:auto;line-height:1.1;text-align:center}

          .form-section{background:linear-gradient(135deg,#0071E3 0%,#38bdf8 100%);border-radius:24px;padding:8px 12px;margin:0 auto;max-width:800px}
          .form-title{font-family:'Inter Tight',sans-serif;font-size:clamp(24px,4vw,32px);font-weight:900;color:#fff;text-align:center;margin-bottom:2px;line-height:1.05}
          .form-sub{color:rgba(255,255,255,.85);text-align:center;font-size:15px;margin-bottom:4px;line-height:1.1}
          .contact-form{background:#fff;border-radius:16px;padding:6px;box-shadow:0 10px 30px rgba(0,0,0,.08)}
          .form-group{margin-bottom:4px}
          .form-label{display:block;font-weight:600;color:#0f172a;margin-bottom:2px;font-size:14px;word-break:keep-word}
          .form-input{width:100%;padding:6px 10px;border:2px solid rgba(15,23,42,.15);border-radius:10px;font-size:15px;font-family:'Inter',sans-serif;transition:all .2s}
          .form-input:focus{outline:none;border-color:#0071E3;box-shadow:0 0 0 3px rgba(0,113,227,.1)}
          .form-textarea{min-height:60px;resize:vertical}
          .form-btn{width:100%;padding:10px;border-radius:10px;background:#0071E3;color:#fff;font-size:15px;font-weight:700;border:none;cursor:pointer;transition:all .3s;font-family:'Inter Tight',sans-serif}
          .form-btn:hover{background:#0056b3;transform:translateY(-1px)}
          .form-btn:disabled{background:#6b7280;cursor:not-allowed;transform:none}

          .estimate-box{background:rgba(16,185,129,.1);border:2px solid rgba(16,185,129,.3);border-radius:14px;padding:8px;margin-top:8px;text-align:center}
          .estimate-title{color:#059669;font-weight:700;font-size:13px;margin-bottom:6px;text-transform:uppercase;letter-spacing:.5px}
          .estimate-price{color:#059669;font-size:36px;font-weight:900;font-family:'Inter Tight',sans-serif;line-height:1}
          .estimate-disclaimer{color:#6b7280;font-size:12px;margin-top:6px}
          .success-message{background:rgba(16,185,129,.1);border:2px solid rgba(16,185,129,.3);border-radius:14px;padding:20px;text-align:center}
          .success-title{color:#059669;font-weight:700;font-size:16px;margin-bottom:6px}
          .success-text{color:#6b7280;font-size:14px;line-height:1.5}

          .info-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:20px;margin-top:10px}
          .info-card{background:#f8fafc;border:1px solid rgba(15,23,42,.08);border-radius:16px;padding:12px;text-align:center}
          .info-icon{font-size:36px;margin-bottom:12px}
          .info-title{font-size:16px;font-weight:700;color:#0f172a;margin-bottom:6px}
          .info-desc{color:#475569;font-size:14px;line-height:1.5}

          @media(max-width:768px){
            .nav-links{display:none}
            .hero-title{font-size:38px}
            .form-section{padding:40px 20px}
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
              Parlons de votre projet
            </h1>
            <p className="hero-sub">
              Décrivez ce dont vous avez besoin et recevez une estimation personnalisée en quelques secondes.
            </p>
          </div>
        </section>

        {/* Formulaire de contact avec estimation */}
        <div style={{padding: '0px 20px 0px'}}>
          <div className="form-section">
            <h2 className="form-title">Votre projet en quelques secondes</h2>
            <p className="form-sub">
              Remplissez ce formulaire et recevez automatiquement une estimation de votre projet.
            </p>
            <div className="contact-form">
              {!submitted ? (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label">Votre nom *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                      required
                      placeholder="Jean Dupont"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      required
                      placeholder="jean@exemple.fr"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Téléphone (optionnel)</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="06 12 34 56 78"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Décrivez votre projet *</label>
                    <textarea
                      name="project"
                      value={formData.project}
                      onChange={handleChange}
                      className="form-input form-textarea"
                      required
                      placeholder="Ex: Je souhaite créer un site e-commerce pour vendre mes produits artisanaux, avec gestion des réseaux sociaux Instagram et Facebook..."
                    />
                  </div>

                  {estimatedPrice && (
                    <div className="estimate-box">
                      <div className="estimate-title">🎯 Estimation du projet</div>
                      <div className="estimate-price">{estimatedPrice}€</div>
                      <div className="estimate-disclaimer">
                        Prix indicatif • Finalisé après discussion
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="form-btn"
                    disabled={!formData.name || !formData.email || !formData.project}
                  >
                    {estimatedPrice ? '📩 Envoyer ma demande' : '🚀 Démarrer mon projet'}
                  </button>
                </form>
              ) : (
                <div className="success-message">
                  <div className="success-title">✅ Demande envoyée avec succès !</div>
                  <div className="success-text">
                    Nous avons bien reçu votre demande. Notre équipe vous contactera
                    sous 24-48h pour discuter de votre projet et finaliser le devis.
                  </div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', project: '' });
                      setEstimatedPrice(null);
                    }}
                    className="form-btn"
                    style={{marginTop: '24px'}}
                  >
                    Nouvelle demande
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Informations complémentaires */}
        <div className="container">
          <div className="info-grid">
            <div className="info-card">
              <div className="info-icon">📧</div>
              <div className="info-title">Par email</div>
              <div className="info-desc">contact@visioflow.fr</div>
            </div>
            <div className="info-card">
              <div className="info-icon">📞</div>
              <div className="info-title">Par téléphone</div>
              <div className="info-desc">06 11 04 58 29</div>
            </div>
            <div className="info-card">
              <div className="info-icon">⏰</div>
              <div className="info-title">Réponse rapide</div>
              <div className="info-desc">Sous 24-48 heures</div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}