import Head from 'next/head';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import { Star, Quote, Users } from 'lucide-react';

export default function TemoignagesPage() {
  const canonicalUrl = "https://visioflow.fr/temoignages";

  const testimonials = [
    {
      quote: "Visioflow a transformé notre présence en ligne. Notre site est magnifique, les commandes en ligne fonctionnent parfaitement, et notre clientèle a augmenté de 40%.",
      author: "Marie Dupont",
      role: "Propriétaire, Bistro Parisien",
      rating: 5,
    },
    {
      quote: "Processus incroyablement simple. Devis en 30 secondes, site livré en 48 heures. L'équipe est réactive et professionnelle. Je recommande !",
      author: "Pierre Martin",
      role: "Artisan Boulanger",
      rating: 5,
    },
    {
      quote: "Ils ont compris nos besoins du premier coup. Le site reflète parfaitement l'image de notre restaurant. Le suivi après livraison est exemplaire.",
      author: "Sophie Leclerc",
      role: "Gérante, Restaurant Gastronomique",
      rating: 5,
    },
  ];

  const renderStars = (rating) => {
    return Array(rating).fill(0).map((_, index) => (
      <Star key={index} size={18} fill="currentColor" color="var(--vf2-blue)" strokeWidth={2} />
    ));
  };

  return (
    <>
      <Head>
        <title>Témoignages — Visioflow | Ce que disent nos clients</title>
        <meta
          name="description"
          content="Découvrez les témoignages de nos clients satisfaits. Sites web livrés en 48h, accompagnement personnalisé, résultats concrets."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Témoignages — Visioflow" />
        <meta property="og:description" content="Ce que disent nos clients satisfaits." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
      </Head>

      <div className="vf2-page">
        <Navbar />

        {/* Hero Section */}
        <section className="vf2-hero" style={{ minHeight: '50vh', padding: '100px 24px 60px' }}>
          <div className="vf2-hero-bg" />
          <div className="vf2-orb vf2-orb-1" />

          <div className="vf2-hero-content">
            <div className="vf2-eyebrow">
              <Quote size={16} />
              Témoignages
            </div>
            <h1 className="vf2-h1">
              Ce que disent <span className="vf2-serif-italic">nos clients</span>
            </h1>
            <p className="vf2-text">
              Des avis authentiques de professionnels qui nous ont fait confiance.
              Leur succès est notre meilleure référence.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="vf2-section" style={{ paddingTop: '60px' }}>
          <div className="vf2-container">
            <div className="vf2-stats-strip">
              <div className="vf2-card vf2-stat-card">
                <div className="vf2-stat-value">100%</div>
                <div className="vf2-stat-label">Satisfaction</div>
              </div>
              <div className="vf2-card vf2-stat-card">
                <div className="vf2-stat-value">48h</div>
                <div className="vf2-stat-label">Livraison moyenne</div>
              </div>
              <div className="vf2-card vf2-stat-card">
                <div className="vf2-stat-value">40%</div>
                <div className="vf2-stat-label">Augmentation CA</div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="vf2-section vf2-section-alt">
          <div className="vf2-container">
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 className="vf2-h2">Ils nous ont fait confiance</h2>
              <p className="vf2-text">
                Restaurants, artisans, commerçants — tous secteurs confondus, nos clients
                témoignent de leur expérience.
              </p>
            </div>

            <div className="vf2-grid-auto">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="vf2-card" style={{ padding: '36px', position: 'relative' }}>
                  <Quote
                    size={32}
                    color="var(--vf2-blue)"
                    strokeWidth={2}
                    opacity={0.2}
                    style={{ position: 'absolute', top: '24px', right: '24px' }}
                  />

                  <div style={{ marginBottom: '16px' }}>
                    {renderStars(testimonial.rating)}
                  </div>

                  <p style={{
                    fontFamily: 'Fraunces, serif',
                    fontStyle: 'italic',
                    fontSize: '1.1rem',
                    lineHeight: '1.7',
                    color: 'var(--vf2-ink)',
                    marginBottom: '24px',
                  }}>
                    "{testimonial.quote}"
                  </p>

                  <div>
                    <div style={{ fontWeight: 700, color: 'var(--vf2-ink)', marginBottom: '4px' }}>
                      {testimonial.author}
                    </div>
                    <div style={{ fontSize: '14px', color: 'var(--vf2-muted)' }}>
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Band */}
        <section>
          <div className="vf2-cta-band">
            <h2>Rejoignez nos clients satisfaits</h2>
            <p>
              Votre succès mérite une présence digitale qui donne envie.
              Contactez-nous pour discuter de votre projet.
            </p>
            <Link href="#devis" className="vf2-btn-primary">
              <Users size={18} />
              Démarrer votre projet
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
