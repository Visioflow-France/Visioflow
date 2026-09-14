import Head from 'next/head';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import { Globe, MapPin, Smartphone, Check, Star, SearchCheck, HeartHandshake, Rocket } from 'lucide-react';

export default function ServicesPage() {
  const canonicalUrl = "https://visioflow.fr/services";

  /* Achat direct : site standard livré clé en main, sans suivi mensuel. */
  const services = [
    {
      id: 'site-web',
      icon: Globe,
      title: 'Site Web 100% Adaptable',
      description: 'Achat direct de votre site, livré clé en main sans abonnement : paiement unique, site à vous.',
      price: '400€',
      pricePrefix: 'à partir de',
      features: [
        'Paiement unique, sans suivi ni abonnement',
        'Référencement Google inclus',
        'Design moderne et professionnel',
        'Responsive mobile & tablette',
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

  /* Pack Site + Gestion Réseaux Sociaux : l'abonnement tout compris. */
  const packs = [
    {
      id: 'pack-vitrine',
      title: 'Site Vitrine + Gestion Réseaux Sociaux',
      price: '200€',
      suffix: '/mois',
      summary: 'Votre site vitrine créé et géré de A à Z, avec vos réseaux sociaux animés au quotidien.',
      features: [
        'Création complète de votre site vitrine',
        'Gestion complète de vos réseaux sociaux',
        'Suivi garanti en continu',
        'Croissance du référencement naturel (SEO Google)',
        'Maintenance continue du site',
        'Prise en charge de toutes vos demandes d\u2019évolution et de support'
      ],
    },
    {
      id: 'pack-ecommerce',
      title: 'Site E-commerce + Gestion Réseaux Sociaux',
      price: '300€',
      suffix: '/mois',
      summary: 'Votre boutique en ligne créée et pilotée au quotidien, avec vos réseaux sociaux gérés, ventes incluses.',
      features: [
        'Création complète de votre boutique en ligne',
        'Gestion complète de vos réseaux sociaux',
        'Suivi garanti en continu',
        'Croissance du référencement naturel (SEO Google)',
        'Maintenance continue du site',
        'Prise en charge de toutes vos demandes d\u2019évolution et de support'
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Nos Services — VisioFlow | Pack Site + Gestion Réseaux Sociaux dès 200€/mois, achat direct dès 400€</title>
        <meta
          name="description"
          content="Deux façons de travailler avec nous : le Pack Site + Gestion Réseaux Sociaux en abonnement (site vitrine 200€/mois, e-commerce 300€/mois, suivi garanti, SEO Google, maintenance et support inclus) ou l'achat direct de votre site dès 400€ sans suivi."
        />
        <meta name="keywords" content="pack gestion site, abonnement site internet, création site web, gestion réseaux sociaux, maintenance site, seo google, achat site direct" />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Nos Services — VisioFlow" />
        <meta property="og:description" content="Pack Site + Gestion Réseaux Sociaux dès 200€/mois (suivi garanti, SEO Google, maintenance, support) ou achat direct dès 400€. Modifications jusqu'à satisfaction totale." />
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

        {/* Pack Site + Gestion Réseaux Sociaux — l'offre tout compris en abonnement */}
        <section className="vf2-section" style={{ paddingTop: '20px' }}>
          <div className="vf2-container">
            <div style={{ textAlign: 'center' }}>
              <div className="vf2-eyebrow" style={{ marginBottom: '10px' }}>
                <Rocket size={16} />
                Nouveau · Pack Site + Gestion Réseaux Sociaux
              </div>
            </div>
            <h2 className="vf2-h2" style={{ textAlign: 'center', marginBottom: '10px' }}>
              Votre site <span className="vf2-serif-italic">créé et géré</span>, en abonnement
            </h2>
            <p className="vf2-text" style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 34px' }}>
              Nous créons votre site et nous nous occupons de tout, chaque mois : suivi garanti,
              croissance du référencement naturel sur Google, maintenance continue et prise en
              charge de toutes vos demandes d&apos;évolution et de support.
            </p>

            <div className="vf2-grid-2">
              {packs.map((pack) => (
                <div key={pack.id} className="vf2-card vf2-service-card popular">
                  <div className="vf2-service-badge">Abonnement tout compris</div>

                  <h3 className="vf2-h3">{pack.title}</h3>
                  <p className="vf2-text" style={{ fontSize: '0.95rem', marginBottom: '20px' }}>
                    {pack.summary}
                  </p>

                  <div className="vf2-service-price">
                    <span className="vf2-service-price-prefix">à partir de</span>
                    {' ' + pack.price}
                    <span style={{ fontSize: '0.55em', fontWeight: 600 }}>{pack.suffix}</span>
                  </div>

                  <ul className="vf2-service-features">
                    {pack.features.map((feature, index) => (
                      <li key={index} className="vf2-service-feature">
                        <Check size={18} strokeWidth={3} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achat direct — prestations à la carte */}
        <section className="vf2-section vf2-section-alt">
          <div className="vf2-container">
            <h2 className="vf2-h2" style={{ textAlign: 'center', marginBottom: '10px' }}>
              L&apos;achat <span className="vf2-serif-italic">direct</span>, sans suivi
            </h2>
            <p className="vf2-text" style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 34px' }}>
              Vous préférez payer une fois et gérer ensuite votre site vous-même ?
              Achetez votre site web standard aux tarifs actuels, sans abonnement ni suivi.
            </p>

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

                    <h3 className="vf2-h3">{service.title}</h3>
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
