import Head from 'next/head';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Clock, MessageCircle, Rocket, CheckCircle } from 'lucide-react';

export default function CommentCaMarchePage() {
  const canonicalUrl = "https://visioflow.fr/comment-ca-marche";

  const steps = [
    {
      number: '1',
      icon: Clock,
      title: 'Estimation en 30 secondes',
      description: 'Remplissez notre formulaire et obtenez une estimation automatique gratuite de votre projet. Sans engagement.',
      duration: '30 secondes',
    },
    {
      number: '2',
      icon: MessageCircle,
      title: 'Contact personnalisé',
      description: 'Notre équipe vous recontacte pour affiner votre projet et valider vos besoins. Un échange humain, pas des robots.',
      duration: 'Sous 24h',
    },
    {
      number: '3',
      icon: Rocket,
      title: 'Réalisation rapide',
      description: 'Votre site entre en production. Design, développement, optimisation SEO — tout est pris en charge.',
      duration: 'quelques semaines',
    },
    {
      number: '4',
      icon: CheckCircle,
      title: 'Livraison & Support',
      description: 'Votre site est en ligne. Formation incluse et support réactif pour vous accompagner dans votre succès digital.',
      duration: 'Suivi illimité',
    },
  ];

  const faqs = [
    {
      question: 'L\'estimation est-elle vraiment gratuite ?',
      answer: 'Oui, 100% gratuit. Remplissez le formulaire et recevez une estimation immédiate sans aucun engagement de votre part.',
    },
    {
      question: 'Combien de temps pour avoir mon site ?',
      answer: 'En moyenne quelques semaines après validation du projet. Les délais varient selon la complexité de votre projet.',
    },
    {
      question: 'Puis-je modifier mon site après la livraison ?',
      answer: 'Absolument. Tous nos sites sont livrés avec un panel admin facile à utiliser. Formation incluse pour votre autonomie.',
    },
  ];

  return (
    <>
      <Head>
        <title>Comment ça marche — Visioflow | Estimation gratuite et accompagnement personnalisé</title>
        <meta
          name="description"
          content="Découvrez comment Visioflow fonctionne : estimation gratuite en quelques secondes, contact personnalisé, et réalisation de vos projets web et digitaux."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Comment ça marche — Visioflow" />
        <meta property="og:description" content="Estimation gratuite en quelques secondes, contact personnalisé, et réalisation de vos projets." />
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
              Comment ça marche
            </div>
            <h1 className="vf2-h1">
              Votre projet en <span className="vf2-serif-italic">4 étapes simples</span>
            </h1>
            <p className="vf2-text">
              De l'estimation gratuite à la livraison de votre site, tout est simplifié.
              Pas de jargon, pas de surprises — juste des résultats.
            </p>
          </div>
        </section>

        {/* Steps Section */}
        <section className="vf2-section">
          <div className="vf2-container">
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 className="vf2-h2">Un processus transparent</h2>
              <p className="vf2-text">
                Chaque étape est conçue pour vous faire gagner du temps et vous garantir
                un résultat optimal.
              </p>
            </div>

            <div className="vf2-grid-auto">
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.number} className="vf2-card" style={{ padding: '36px', position: 'relative' }}>
                    <div style={{
                      width: '64px',
                      height: '64px',
                      background: 'linear-gradient(135deg, #0071E3, #38bdf8)',
                      borderRadius: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px',
                    }}>
                      <Icon size={32} color="#ffffff" strokeWidth={2.5} />
                    </div>

                    <h3 className="vf2-h3">{step.title}</h3>
                    <p className="vf2-text" style={{ marginBottom: '16px' }}>
                      {step.description}
                    </p>

                    <div style={{
                      display: 'inline-block',
                      padding: '6px 16px',
                      background: 'rgba(0, 113, 227, 0.08)',
                      borderRadius: '20px',
                      fontSize: '13px',
                      fontWeight: 600,
                      color: 'var(--vf2-blue)',
                    }}>
                      {step.duration}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="vf2-section vf2-section-alt">
          <div className="vf2-container">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                <div className="vf2-eyebrow">FAQ</div>
                <h2 className="vf2-h2">Questions fréquentes</h2>
              </div>

              <div>
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="vf2-card"
                    style={{
                      padding: '28px',
                      marginBottom: '16px',
                      borderLeft: '3px solid var(--vf2-blue)',
                    }}
                  >
                    <h3 className="vf2-h3" style={{ marginBottom: '12px' }}>
                      {faq.question}
                    </h3>
                    <p className="vf2-text" style={{ fontSize: '1rem' }}>
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
