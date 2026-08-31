import Head from 'next/head';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { ShieldCheck, Zap, Star, Globe, Smartphone } from 'lucide-react';

export default function HomePage() {
  const canonicalUrl = "https://visioflow.fr";

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
              Une présence digitale qui <span className="vf2-serif-italic">donne envie</span>
            </h1>

            <p className="vf2-text">
              Sites web 100% adaptables, gestion Google Business, et animation de vos réseaux sociaux.
              Une approche moderne pour tous types d'activités.
            </p>

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

        {/* Mockup Composition — écrans Visioflow en HTML/CSS */}
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
              {/* Écran ordinateur */}
              <div className="vf2-screen vf2-screen-laptop" style={{ animation: 'floatY 6s ease-in-out infinite', animationDelay: '-2s' }}>
                <div className="vf2-screen-bar">
                  <span /><span /><span />
                  <div className="vf2-screen-url">visioflow.fr</div>
                </div>
                <div className="vf2-screen-body">
                  <div className="vf2-screen-nav">
                    <div className="vf2-screen-logo">
                      <svg viewBox="0 0 44 44" width="18" height="18" fill="none">
                        <path
                          d="M22 22 C18 14, 8 14, 8 22 C8 30, 18 30, 22 22 C26 14, 36 14, 36 22 C36 30, 26 30, 22 22"
                          stroke="url(#vf-hero-grad)"
                          strokeWidth="3.4"
                          strokeLinecap="round"
                        />
                        <defs>
                          <linearGradient id="vf-hero-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#6366f1" />
                            <stop offset="100%" stopColor="#22d3ee" />
                          </linearGradient>
                        </defs>
                      </svg>
                      Visioflow
                    </div>
                    <div style={{ display: 'flex', gap: '12px' }}>
                      <div className="vf2-screen-navlink" />
                      <div className="vf2-screen-navlink" />
                      <div className="vf2-screen-navlink" />
                    </div>
                  </div>
                  <div className="vf2-screen-hero">
                    <div style={{ width: '56%', margin: '0 auto 10px', height: '10px', borderRadius: '5px', background: 'rgba(255,255,255,0.85)' }} />
                    <div style={{ width: '40%', margin: '0 auto 14px', height: '7px', borderRadius: '4px', background: 'rgba(255,255,255,0.35)' }} />
                    <div className="vf2-screen-btn" />
                  </div>
                  <div className="vf2-screen-cards">
                    <div className="vf2-screen-card" />
                    <div className="vf2-screen-card" />
                    <div className="vf2-screen-card" />
                  </div>
                </div>
              </div>

              {/* Écran téléphone */}
              <div className="vf2-screen vf2-screen-phone" style={{ animation: 'floatY 6s ease-in-out infinite', animationDelay: '0s' }}>
                <div className="vf2-screen-notch" />
                <div className="vf2-screen-body" style={{ padding: '18px 12px' }}>
                  <div style={{ width: '54px', height: '8px', borderRadius: '4px', background: 'linear-gradient(90deg,#6366f1,#22d3ee)', margin: '4px auto 12px' }} />
                  <div style={{ height: '90px', borderRadius: '10px', background: 'linear-gradient(135deg, rgba(99,102,241,0.25), rgba(34,211,238,0.25))', marginBottom: '10px' }} />
                  <div style={{ width: '80%', height: '7px', borderRadius: '4px', background: 'rgba(255,255,255,0.5)', margin: '0 auto 6px' }} />
                  <div style={{ width: '60%', height: '7px', borderRadius: '4px', background: 'rgba(255,255,255,0.25)', margin: '0 auto 12px' }} />
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                    <div style={{ height: '44px', borderRadius: '8px', background: 'rgba(255,255,255,0.08)' }} />
                    <div style={{ height: '44px', borderRadius: '8px', background: 'rgba(255,255,255,0.08)' }} />
                    <div style={{ height: '44px', borderRadius: '8px', background: 'rgba(255,255,255,0.08)' }} />
                    <div style={{ height: '44px', borderRadius: '8px', background: 'rgba(255,255,255,0.08)' }} />
                  </div>
                </div>
              </div>

              {/* Écran tablette */}
              <div className="vf2-screen vf2-screen-tablet" style={{ animation: 'floatY 6s ease-in-out infinite', animationDelay: '-4s' }}>
                <div className="vf2-screen-body" style={{ padding: '20px 16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                    <div style={{ width: '64px', height: '9px', borderRadius: '5px', background: 'linear-gradient(90deg,#6366f1,#22d3ee)' }} />
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <div style={{ width: '26px', height: '6px', borderRadius: '3px', background: 'rgba(255,255,255,0.3)' }} />
                      <div style={{ width: '26px', height: '6px', borderRadius: '3px', background: 'rgba(255,255,255,0.3)' }} />
                    </div>
                  </div>
                  <div style={{ height: '70px', borderRadius: '10px', background: 'linear-gradient(135deg, rgba(99,102,241,0.3), rgba(34,211,238,0.15))', marginBottom: '10px' }} />
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
                    <div style={{ height: '38px', borderRadius: '8px', background: 'rgba(255,255,255,0.08)' }} />
                    <div style={{ height: '38px', borderRadius: '8px', background: 'rgba(255,255,255,0.08)' }} />
                    <div style={{ height: '38px', borderRadius: '8px', background: 'rgba(255,255,255,0.08)' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <Footer />
      </div>
    </>
  );
}
