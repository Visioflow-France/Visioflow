import Head from 'next/head';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import { FolderOpen, Star, TrendingUp, Clock, Rocket } from 'lucide-react';

export default function ProjectsPage() {
  const canonicalUrl = "https://visioflow.fr/nos-projets";

  const stats = [
    { value: '12+', label: 'Projets en cours' },
    { value: '48h', label: 'Délai moyen' },
    { value: '100%', label: 'Satisfaction' },
  ];

  return (
    <>
      <Head>
        <title>Nos Projets — Visioflow | Nos réalisations web et digitales</title>
        <meta
          name="description"
          content="Découvrez nos projets web et digitaux. Chaque réalisation est unique et adaptée aux besoins spécifiques de nos clients."
        />
        <meta name="keywords" content="projets web, réalisations, portfolio, sites web créés, exemples" />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Nos Projets — Visioflow" />
        <meta property="og:description" content="Découvrez nos réalisations web et digitales." />
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
              <Rocket size={16} />
              Nos Réalisations
            </div>
            <h1 className="vf2-h1">
              Des projets qui <span className="vf2-serif-italic">inspirent</span>
            </h1>
            <p className="vf2-text">
              Chaque réalisation est unique et adaptée aux besoins spécifiques de nos clients.
              Découvrez comment nous transformons les idées en réalité digitale.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="vf2-section" style={{ paddingTop: '60px' }}>
          <div className="vf2-container">
            <div className="vf2-stats-strip">
              {stats.map((stat, index) => (
                <div key={index} className="vf2-card vf2-stat-card">
                  <div className="vf2-stat-value">{stat.value}</div>
                  <div className="vf2-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Empty State */}
        <section className="vf2-section vf2-section-alt">
          <div className="vf2-container">
            <div className="vf2-empty-state">
              <div className="vf2-empty-circles">
                <div className="vf2-empty-circle vf2-empty-circle-1" />
                <div className="vf2-empty-circle vf2-empty-circle-2" />
                <div className="vf2-empty-circle vf2-empty-circle-3" />
                <div className="vf2-empty-icon">
                  <FolderOpen size={48} strokeWidth={1.5} />
                </div>
              </div>

              <h2 className="vf2-empty-title">Nos premiers projets arrivent bientôt</h2>
              <p className="vf2-empty-text">
                Nous travaillons actuellement sur plusieurs projets passionnants. Nos premières
                réalisations seront publiées ici très prochainement.
              </p>

              <Link href="#devis" className="vf2-btn-primary">
                <Star size={18} />
                Discutons de votre projet
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Band */}
        <section>
          <div className="vf2-cta-band">
            <h2>Votre projet pourrait être ici</h2>
            <p>
              Contactez-nous pour discuter de votre projet et rejoindre nos réalisations.
              Toutes nos créations sont adaptées à vos besoins spécifiques.
            </p>
            <Link href="#devis" className="vf2-btn-primary">
              <TrendingUp size={18} />
              Démarrer votre projet
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
