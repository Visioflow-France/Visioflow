import { useState } from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import { ShieldCheck, Zap, Star, Globe, Smartphone, BarChart, Mail, Phone, MapPin, Clock, CheckCircle, Send } from 'lucide-react';

export default function HomePage() {
  const canonicalUrl = "https://visioflow.fr";

  // Form state
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

    if (services.length === 0) {
      return 100;
    }

    const total = services.reduce((sum, service) => sum + (service.min + service.max) / 2, 0);
    return Math.round(total);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const estimate = calculateEstimate(formData.project);
    setEstimatedPrice(estimate);
    setSubmitted(true);

    console.log('Données du formulaire:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (name === 'project' && value.length > 20) {
      setEstimatedPrice(calculateEstimate(value));
    } else if (name === 'project' && value.length <= 20) {
      setEstimatedPrice(null);
    }
  };

  const features = [
    {
      icon: Globe,
      title: 'Sites Web 100% Adaptables',
      description: 'Sites vitrines élégants ou boutiques e-commerce complètes. Design responsive, performance optimale et référencement naturel inclus.',
    },
    {
      icon: BarChart,
      title: 'Google Business Optimisé',
      description: 'Maximisez votre visibilité locale avec une fiche Google My Business optimisée pour attirer davantage de clients.',
    },
    {
      icon: Smartphone,
      title: 'Réseaux Sociaux Animés',
      description: 'Gestion complète de vos réseaux sociaux : création de contenu, publications régulières et community management.',
    },
    {
      icon: Zap,
      title: 'Réponse Immédiate',
      description: 'Recevez une estimation automatique de votre projet en quelques secondes. Plus d\'attente pour connaître le budget.',
    },
    {
      icon: Star,
      title: 'Tarifs Transparents',
      description: 'Estimations claires et détaillées. Pas de surprises, pas de frais cachés. Vous savez exactement ce que vous payez.',
    },
    {
      icon: ShieldCheck,
      title: 'Support Réactif',
      description: 'Un accompagnement complet de l\'estimation jusqu\'à la réalisation et au-delà, avec un support réactif.',
    },
  ];

  return (
    <>
      <Head>
        <title>Visioflow — Agence web & communication digitale | Sites web, Google Business, Réseaux sociaux</title>
        <meta
          name="description"
          content="Visioflow réalise vos projets web et digitaux : sites 100% adaptables (e-commerce, vitrine), gestion Google Business, et réseaux sociaux. Devis gratuit et estimation automatique."
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
      </Head>

      <div className="vf2-page">
        <Navbar />

        {/* Hero Section */}
        <section className="vf2-hero">
          <div className="vf2-hero-bg" />
          <div className="vf2-orb vf2-orb-1" />
          <div className="vf2-orb vf2-orb-2" />

          <div className="vf2-hero-content">
            <div className="vf2-eyebrow">
              <Globe size={16} />
              Agence web & digitale
            </div>

            <h1 className="vf2-h1">
              Des sites qui donnent <span className="vf2-serif-italic">envie d'acheter</span>
            </h1>

            <p className="vf2-text">
              Sites web 100% adaptables, gestion Google Business, et animation de vos réseaux sociaux.
              Une approche moderne pour tous types d'activités.
            </p>

            <div className="vf2-hero-actions">
              <a href="#devis" className="vf2-btn-primary">
                <Zap size={18} />
                Estimer mon projet
              </a>
              <Link href="/services" className="vf2-btn-ghost">
                <Star size={18} />
                Voir nos services
              </Link>
            </div>

            <div className="vf2-trust-row">
              <div className="vf2-trust-item">
                <ShieldCheck size={20} />
                Devis gratuit
              </div>
              <div className="vf2-trust-item">
                <Zap size={20} />
                Sans engagement
              </div>
              <div className="vf2-trust-item">
                <Star size={20} />
                Réponse rapide
              </div>
              <div className="vf2-trust-item">
                <Smartphone size={20} />
                Tous secteurs
              </div>
            </div>
          </div>
        </section>

        {/* Mockup Composition */}
        <section className="vf2-section" style={{ textAlign: 'center', position: 'relative' }}>
          <div className="vf2-container">
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '20px',
              flexWrap: 'wrap',
              position: 'relative',
              padding: '40px 0',
            }}>
              <div style={{
                position: 'relative',
                zIndex: 2,
                animation: 'floatY 6s ease-in-out infinite',
                animationDelay: '-2s',
              }}>
                <img
                  src="/hero-laptop.png"
                  alt="Site web responsive"
                  style={{
                    width: '100%',
                    maxWidth: '700px',
                    height: 'auto',
                    filter: 'drop-shadow(0 20px 60px rgba(0, 102, 255, 0.2))',
                  }}
                />
              </div>

              <div style={{
                position: 'absolute',
                right: '5%',
                bottom: '10%',
                width: '140px',
                zIndex: 1,
                animation: 'floatY 6s ease-in-out infinite',
                animationDelay: '0s',
              }}>
                <div className="vf2-card" style={{ padding: '16px' }}>
                  <img
                    src="/hero-phone.png"
                    alt="Mobile responsive"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
              </div>

              <div style={{
                position: 'absolute',
                left: '5%',
                top: '15%',
                width: '160px',
                zIndex: 1,
                animation: 'floatY 6s ease-in-out infinite',
                animationDelay: '-4s',
              }}>
                <div className="vf2-card" style={{ padding: '16px' }}>
                  <img
                    src="/hero-tablet.png"
                    alt="Tablet responsive"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="vf2-section vf2-section-alt">
          <div className="vf2-container">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <div className="vf2-eyebrow">Pourquoi Visioflow ?</div>
              <h2 className="vf2-h2">Une approche moderne et complète</h2>
              <p className="vf2-text" style={{ maxWidth: '700px', margin: '0 auto' }}>
                Des solutions web et digitales adaptées à tous types d'activités, avec des tarifs transparents
                et un accompagnement personnalisé.
              </p>
            </div>

            <div className="vf2-grid-auto">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="vf2-card vf2-feature-card sh">
                    <div className="vf2-icon-tile">
                      <Icon />
                    </div>
                    <h3 className="vf2-feature-title">{feature.title}</h3>
                    <p className="vf2-feature-desc">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact/Devis Section */}
        <section id="devis" className="vf2-section">
          <div className="vf2-container">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <div className="vf2-eyebrow">
                <Send size={16} />
                Devis gratuit
              </div>
              <h2 className="vf2-h2">Prêt à démarrer votre projet ?</h2>
              <p className="vf2-text">
                Contactez-nous pour une estimation gratuite personnalisée selon vos besoins.
              </p>
            </div>

            <div className="vf2-grid-2">
              {/* Contact Info */}
              <div className="vf2-contact-infos">
                <div className="vf2-card vf2-contact-info-card info-card">
                  <div className="vf2-contact-info-icon">
                    <Mail />
                  </div>
                  <div>
                    <div className="vf2-contact-info-label">Email</div>
                    <div className="vf2-contact-info-value">contact@visioflow.fr</div>
                  </div>
                </div>

                <div className="vf2-card vf2-contact-info-card info-card">
                  <div className="vf2-contact-info-icon">
                    <Phone />
                  </div>
                  <div>
                    <div className="vf2-contact-info-label">Téléphone</div>
                    <div className="vf2-contact-info-value">+33 6 11 04 58 29</div>
                  </div>
                </div>

                <div className="vf2-card vf2-contact-info-card info-card">
                  <div className="vf2-contact-info-icon">
                    <MapPin />
                  </div>
                  <div>
                    <div className="vf2-contact-info-label">Adresse</div>
                    <div className="vf2-contact-info-value">6 rue Lacretelle<br/>77340 Pontault-Combault</div>
                  </div>
                </div>

                <div className="vf2-card vf2-contact-info-card info-card">
                  <div className="vf2-contact-info-icon">
                    <Clock />
                  </div>
                  <div>
                    <div className="vf2-contact-info-label">Horaires</div>
                    <div className="vf2-contact-info-value">Lun-Ven : 9h - 18h</div>
                  </div>
                </div>

                <div className="vf2-card" style={{ padding: '24px', marginTop: '16px' }}>
                  <p style={{
                    fontFamily: 'Fraunces, serif',
                    fontStyle: 'italic',
                    fontSize: '1.1rem',
                    lineHeight: '1.6',
                    color: 'var(--vf2-blue)',
                    marginBottom: '12px',
                  }}>
                    "Une approche moderne pour tous types d'activités."
                  </p>
                  <p className="vf2-text" style={{ fontSize: '0.9rem' }}>
                    Devis gratuit • Sans engagement • Réponse rapide
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="vf2-card vf2-contact-form form-section">
                <h2 className="vf2-h3" style={{ marginBottom: '24px' }}>Votre projet en quelques secondes</h2>

                {submitted ? (
                  <div style={{ textAlign: 'center', padding: '40px 0' }}>
                    <div style={{ color: '#10b981', marginBottom: '16px' }}>
                      <CheckCircle size={64} strokeWidth={2} />
                    </div>
                    <h3 className="vf2-h3" style={{ marginBottom: '12px' }}>Merci pour votre demande !</h3>
                    <p className="vf2-text">
                      Nous avons bien reçu votre demande et vous recontacterons dans les plus brefs délais.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="vf2-form-group">
                      <label className="vf2-form-label">Nom complet</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="vf2-form-input"
                        placeholder="Votre nom"
                        required
                      />
                    </div>

                    <div className="vf2-form-group">
                      <label className="vf2-form-label">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="vf2-form-input"
                        placeholder="votre@email.com"
                        required
                      />
                    </div>

                    <div className="vf2-form-group">
                      <label className="vf2-form-label">Téléphone (optionnel)</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="vf2-form-input"
                        placeholder="+33 6 00 00 00 00"
                      />
                    </div>

                    <div className="vf2-form-group">
                      <label className="vf2-form-label">Décrivez votre projet</label>
                      <textarea
                        name="project"
                        value={formData.project}
                        onChange={handleChange}
                        className="vf2-form-textarea"
                        placeholder="Je souhaite créer un site web pour mon restaurant..."
                        required
                      />
                      <p style={{ fontSize: '12px', color: 'var(--vf2-muted)', marginTop: '6px' }}>
                        Décrivez votre projet en quelques mots pour obtenir une estimation automatique
                      </p>
                    </div>

                    {estimatedPrice && (
                      <div className="vf2-estimate-box">
                        <div className="vf2-estimate-label">Estimation automatique</div>
                        <div className="vf2-estimate-value">~{estimatedPrice}€</div>
                        <div className="vf2-estimate-disclaimer">
                          *Estimation approximative basée sur votre description
                        </div>
                      </div>
                    )}

                    <button type="submit" className="vf2-btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '24px' }}>
                      <Send size={18} />
                      Estimer mon projet
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
