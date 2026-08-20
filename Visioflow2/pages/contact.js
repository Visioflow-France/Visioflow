import { useState } from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import { Mail, Phone, MapPin, Clock, Send, Star, CheckCircle } from 'lucide-react';

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
      </Head>

      <div className="vf2-page">
        <Navbar />

        {/* Hero Section */}
        <section className="vf2-hero" style={{ minHeight: '45vh', padding: '100px 24px 50px' }}>
          <div className="vf2-hero-bg" />

          <div className="vf2-hero-content">
            <div className="vf2-eyebrow">
              <Send size={16} />
              Contact
            </div>
            <h1 className="vf2-h1">
              Parlons de <span className="vf2-serif-italic">votre projet</span>
            </h1>
            <p className="vf2-text">
              Remplissez le formulaire ci-dessous pour obtenir une estimation automatique gratuite
              de votre projet en quelques secondes.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="vf2-section">
          <div className="vf2-container">
            <div className="vf2-contact-layout">
              {/* Left Column - Contact Info */}
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
                    <div className="vf2-contact-info-value">6 rue Lacretelle<br />77340 Pontault-Combault</div>
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

              {/* Right Column - Contact Form */}
              <div className="vf2-card vf2-contact-form form-section">
                <h2 className="vf2-h2" style={{ marginBottom: '24px' }}>Votre projet en quelques secondes</h2>

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
                      Envoyer ma demande
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Band */}
        <section>
          <div className="vf2-cta-band">
            <h2>Une question avant de commencer ?</h2>
            <p>
              Notre équipe est disponible pour répondre à toutes vos interrogations.
              N'hésitez pas à nous contacter directement par téléphone ou email.
            </p>
            <Link href="tel:+33611045829" className="vf2-btn-ghost" style={{ background: 'rgba(255, 255, 255, 0.1)', color: '#fff', borderColor: 'rgba(255, 255, 255, 0.3)' }}>
              <Phone size={18} />
              Appeler maintenant
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
