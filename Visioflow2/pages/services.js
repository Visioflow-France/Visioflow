import Head from 'next/head';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import { Globe, MapPin, Smartphone, Check, Star } from 'lucide-react';

export default function ServicesPage() {
  const canonicalUrl = "https://visioflow.fr/services";

  const services = [
    {
      id: 'site-web',
      icon: Globe,
      title: 'Sites Web 100% Adaptables',
      description: 'Sites vitrines élégants ou boutiques e-commerce complètes. Design responsive, performance optimale et référencement naturel inclus.',
      price: '200-800€',
      pricePrefix: 'à partir de',
      features: [
        'Design moderne et professionnel',
        'Responsive mobile & tablette',
        'Optimisation SEO',
        'Performance rapide',
        'Hébergement inclus'
      ],
      popular: true,
    },
    {
      id: 'google-business',
      icon: MapPin,
      title: 'Google Business',
      description: 'Optimisation de votre fiche Google My Business pour maximiser votre visibilité locale et attirer davantage de clients.',
      price: '50-100€',
      pricePrefix: 'à partir de',
      features: [
        'Optimisation fiche Google',
        'Photos et vidéos',
        'Avis clients',
        'Statistiques',
        'Publication de posts'
      ],
      popular: false,
    },
    {
      id: 'reseaux-sociaux',
      icon: Smartphone,
      title: 'Réseaux Sociaux',
      description: 'Gestion complète de vos réseaux sociaux : création de contenu, publications régulières, recherche de collaborations.',
      price: '100-200€',
      pricePrefix: 'à partir de',
      features: [
        'Création de contenu',
        'Publications régulières',
        'Community management',
        'Recherche collaborations',
        'Analyse et rapports'
      ],
      popular: false,
    }
  ];

  return (
    <>
      <Head>
        <title>Nos Services — Visioflow | Sites web, Google Business, Réseaux sociaux</title>
        <meta
          name="description"
          content="Découvrez nos services complets : création de sites web (vitrine, e-commerce), optimisation Google Business, et gestion des réseaux sociaux. Tarifs transparents."
        />
        <meta name="keywords" content="services agence web, création site internet, google my business, gestion réseaux sociaux, community management" />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Nos Services — Visioflow" />
        <meta property="og:description" content="Sites web, Google Business, Réseaux sociaux. Découvrez nos tarifs transparents." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
      </Head>

      <div className="vf2-page">
        <Navbar />

        {/* Hero Section */}
        <section className="vf2-hero" style={{ minHeight: '55vh', padding: '100px 24px 60px' }}>
          <div className="vf2-hero-bg" />
          <div className="vf2-orb vf2-orb-1" />
          <div className="vf2-orb vf2-orb-2" />

          <div className="vf2-hero-content">
            <div className="vf2-eyebrow">
              <Star size={16} />
              Nos Services
            </div>
            <h1 className="vf2-h1">
              Des solutions <span className="vf2-serif-italic">complètes</span> pour votre présence digitale
            </h1>
            <p className="vf2-text">
              Sites web, Google Business, et réseaux sociaux — tous les services dont vous avez besoin
              pour réussir en ligne, avec des tarifs transparents.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="vf2-section">
          <div className="vf2-container">
            <div className="vf2-grid-3">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.id}
                    className={`vf2-card vf2-service-card ${service.popular ? 'popular' : ''}`}
                  >
                    {service.popular && <div className="vf2-service-badge">Populaire</div>}

                    <div className="vf2-icon-tile">
                      <Icon />
                    </div>

                    <h2 className="vf2-h3">{service.title}</h2>
                    <p className="vf2-text" style={{ fontSize: '0.95rem', marginBottom: '20px' }}>
                      {service.description}
                    </p>

                    <div className="vf2-service-price">
                      <span className="vf2-service-price-prefix">{service.pricePrefix}</span>
                      {' ' + service.price}
                    </div>

                    <ul className="vf2-service-features">
                      {service.features.map((feature, index) => (
                        <li key={index} className="vf2-service-feature">
                          <Check size={18} strokeWidth={3} />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link href="#devis" className="vf2-btn-ghost" style={{ width: '100%', justifyContent: 'center' }}>
                      Demander un devis
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Band */}
        <section>
          <div className="vf2-cta-band">
            <h2>Prêt à démarrer votre projet ?</h2>
            <p>
              Contactez-nous pour une estimation gratuite personnalisée selon vos besoins.
              Tous nos services sont adaptés à votre domaine d'activité.
            </p>
            <Link href="#devis" className="vf2-btn-primary">
              <Star size={18} />
              Demander un devis
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
