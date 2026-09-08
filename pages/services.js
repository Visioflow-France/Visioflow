import Head from 'next/head';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Globe, MapPin, Smartphone, Check, Star, SearchCheck, HeartHandshake } from 'lucide-react';

export default function ServicesPage() {
  const canonicalUrl = "https://visioflow.fr/services";

  const services = [
    {
      id: 'site-web',
      icon: Globe,
      title: 'Sites Web 100% Adaptables',
      description: 'Sites vitrines élégants ou boutiques e-commerce complètes. Design responsive, performance optimale et référencement Google inclus.',
      price: '400€',
      pricePrefix: 'à partir de',
      features: [
        'Référencement Google inclus',
        'Design moderne et professionnel',
        'Responsive mobile & tablette',
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
        <title>Nos Services — Visioflow | Sites web dès 400€, Google Business, Réseaux sociaux</title>
        <meta
          name="description"
          content="Découvrez nos services : création de sites web dès 400€ (e-commerce dès 600€) avec référencement Google inclus, optimisation Google Business dès 50€, et gestion des réseaux sociaux dès 100€/mois."
        />
        <meta name="keywords" content="services agence web, création site internet, google my business, gestion réseaux sociaux, community management, référencement google inclus" />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Nos Services — Visioflow" />
        <meta property="og:description" content="Sites web dès 400€ (référencement Google inclus), Google Business, Réseaux sociaux. Tarifs transparents et modifications jusqu'à satisfaction totale." />
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
              Du site vitrine à la gestion de vos réseaux sociaux, choisissez les prestations
              adaptées à vos objectifs, avec des tarifs transparents.
            </p>
            <div className="vf2-trust-row">
              <div className="vf2-trust-item"><SearchCheck size={20} />Référencement Google inclus avec votre site</div>
              <div className="vf2-trust-item"><HeartHandshake size={20} />Modifications jusqu&apos;à satisfaction totale</div>
            </div>
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

                    {service.id === 'site-web' && (
                      <p className="vf2-text" style={{ fontSize: '0.85rem', opacity: 0.65, margin: '-10px 0 16px' }}>
                        Boutique e-commerce dès 600€
                      </p>
                    )}

                    <ul className="vf2-service-features">
                      {service.features.map((feature, index) => (
                        <li key={index} className="vf2-service-feature">
                          <Check size={18} strokeWidth={3} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            {/* Garanties clés */}
            <div className="vf2-est-assurance" style={{ marginTop: '48px' }}>
              <div className="vf2-est-assurance-item"><SearchCheck size={18} />Référencement Google inclus avec chaque site</div>
              <div className="vf2-est-assurance-item"><Globe size={18} />Sites 100% adaptables dès 400€</div>
              <div className="vf2-est-assurance-item"><HeartHandshake size={18} />On modifie votre site tant que vous n&apos;êtes pas 100% satisfait</div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
