import Head from 'next/head';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import { ShieldCheck, Zap, Star, Globe, Smartphone, BarChart } from 'lucide-react';

export default function HomePage() {
  const canonicalUrl = "https://visioflow.fr";

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
              <Link href="/contact" className="vf2-btn-primary">
                <Zap size={18} />
                Démarrer votre projet
              </Link>
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
                    filter: 'drop-shadow(0 20px 60px rgba(0, 113, 227, 0.2))',
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

        {/* CTA Band */}
        <section>
          <div className="vf2-cta-band">
            <h2>Prêt à transformer votre présence digitale ?</h2>
            <p>
              Contactez-nous pour une estimation gratuite personnalisée selon vos besoins.
              Votre projet en ligne rapidement, sans compromis sur la qualité.
            </p>
            <Link href="/contact" className="vf2-btn-primary">
              <Star size={18} />
              Démarrer votre projet
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
