import Head from 'next/head';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import { Heart, Users, Zap, Target } from 'lucide-react';

const canonicalUrl = "https://visioflow.fr/a-propos";

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Passion du Design',
      description: 'Nous créons des sites qui donnent envie d\'acheter, avec une attention particulière à l\'esthétique et à l\'expérience utilisateur.',
    },
    {
      icon: Users,
      title: 'Approche Humaine',
      description: 'Chaque client est unique. Nous prenons le temps de comprendre vos besoins pour créer des solutions sur-mesure.',
    },
    {
      icon: Zap,
      title: 'Réactivité',
      description: 'Devis gratuit, réponse rapide, livraison sans délai. Nous respectons votre temps et votre investissement.',
    },
    {
      icon: Target,
      title: 'Résultats',
      description: 'Sites optimisés pour le SEO, Google Business maîtrisé, réseaux sociaux animés. Mesurer l\'impact de votre présence digitale.',
    },
  ];

  return (
    <>
      <Head>
        <title>À Propos — Visioflow | Agence web & communication digitale</title>
        <meta
          name="description"
          content="Visioflow est une agence web spécialisée dans la création de sites vitrines et e-commerce, l'optimisation Google Business et la gestion des réseaux sociaux pour tous types d'activités."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="À Propos — Visioflow" />
        <meta property="og:description" content="Agence web & communication digitale. Sites web, Google Business, Réseaux sociaux." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "VisioFlow",
              "url": "https://visioflow.fr",
              "logo": "https://visioflow.fr/logo.png",
              "description": "Service de création de sites web pour restaurants avec système de commande en ligne, livré en 48 heures. Spécialisé dans les restaurateurs en France.",
              "foundingDate": "2025",
              "sameAs": [
                "https://instagram.com/visioflow",
                "https://linkedin.com/company/visioflow",
                "https://twitter.com/visioflow"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+33-6-11-04-58-29",
                "contactType": "customer service",
                "email": "contact@visioflow.fr",
                "areaServed": "FR",
                "availableLanguage": "French"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "6 rue Lacretelle",
                "addressLocality": "Pontault-Combault",
                "postalCode": "77340",
                "addressCountry": "FR"
              }
            })
          }}
        />
      </Head>

      <div className="vf2-page">
        <Navbar />

        {/* Hero Section */}
        <section className="vf2-hero" style={{ minHeight: '55vh', padding: '100px 24px 60px' }}>
          <div className="vf2-hero-bg" />
          <div className="vf2-orb vf2-orb-1" />

          <div className="vf2-hero-content">
            <div className="vf2-eyebrow">
              <Heart size={16} />
              À Propos
            </div>
            <h1 className="vf2-h1">
              Une agence web <span className="vf2-serif-italic">passionnée</span> par votre succès
            </h1>
            <p className="vf2-text">
              Visioflow réalise vos projets web et digitaux avec passion et expertise.
              Sites web, Google Business, réseaux sociaux — tous les services dont vous avez besoin.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="vf2-section">
          <div className="vf2-container">
            <div className="vf2-grid-2">
              <div>
                <h2 className="vf2-h2">Notre Histoire</h2>
                <p className="vf2-text" style={{ marginBottom: '16px' }}>
                  Fondée en 2025, Visioflow est née d'une conviction : chaque mérite une présence
                  digitale qui donne envie. Pas de templates génériques, mais des créations uniques
                  qui reflètent votre identité.
                </p>
                <p className="vf2-text">
                  Basée à Pontault-Combault (77340), notre agence accompagne les artisans, commerçants,
                  freelances et entreprises de tous secteurs dans leur transformation digitale.
                </p>
              </div>

              <div className="vf2-card" style={{ padding: '40px' }}>
                <h3 className="vf2-h3" style={{ marginBottom: '20px' }}>Notre Mission</h3>
                <p className="vf2-text">
                  Rendre la création de sites web accessible à tous, avec des tarifs transparents,
                  une livraison rapide et un accompagnement personnalisé. Pas de jargon, pas de
                  surprises — juste des résultats concrets.
                </p>

                <div style={{ marginTop: '24px', paddingTop: '24px', borderTop: '1px solid rgba(0, 113, 227, 0.1)' }}>
                  <div style={{ display: 'flex', gap: '32px' }}>
                    <div>
                      <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--vf2-blue)', fontFamily: 'Inter Tight, sans-serif' }}>48h</div>
                      <div style={{ fontSize: '13px', color: 'var(--vf2-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '4px' }}>Livraison</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--vf2-blue)', fontFamily: 'Inter Tight, sans-serif' }}>100%</div>
                      <div style={{ fontSize: '13px', color: 'var(--vf2-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '4px' }}>Sur-mesure</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="vf2-section vf2-section-alt">
          <div className="vf2-container">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <div className="vf2-eyebrow">Nos Valeurs</div>
              <h2 className="vf2-h2">Ce qui nous anime</h2>
            </div>

            <div className="vf2-grid-auto">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="vf2-card vf2-feature-card sh">
                    <div className="vf2-icon-tile">
                      <Icon />
                    </div>
                    <h3 className="vf2-feature-title">{value.title}</h3>
                    <p className="vf2-feature-desc">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Band */}
        <section>
          <div className="vf2-cta-band">
            <h2>Rejoignez nos clients satisfaits</h2>
            <p>
              Contactez-nous pour discuter de votre projet. Devis gratuit, réponse rapide,
              livraison sans compromis sur la qualité.
            </p>
            <Link href="#devis" className="vf2-btn-primary">
              <Zap size={18} />
              Démarrer votre projet
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
