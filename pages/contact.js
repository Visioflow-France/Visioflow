import { useEffect, useState } from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import {
  Mail, Phone, Clock, Send, Music2, ArrowRight,
} from 'lucide-react';

/* Icônes absentes de la version de lucide-react utilisée : SVG inline. */
const Instagram = (props) => (
  <svg width={props.size || 15} height={props.size || 15} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
const Facebook = (props) => (
  <svg width={props.size || 15} height={props.size || 15} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const Linkedin = (props) => (
  <svg width={props.size || 15} height={props.size || 15} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const Twitter = (props) => (
  <svg width={props.size || 15} height={props.size || 15} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
  </svg>
);

const DEFAULTS = {
  contact: { email: 'contact@visioflow.fr', phone: '+33611045829' },
  social: {
    instagram: 'https://instagram.com/visioflow',
    linkedin: 'https://linkedin.com/company/visioflow',
    twitter: 'https://twitter.com/visioflow',
    facebook: '',
    tiktok: '',
  },
};

const SOCIAL_META = [
  { key: 'instagram', label: 'Instagram', Icon: Instagram },
  { key: 'facebook', label: 'Facebook', Icon: Facebook },
  { key: 'tiktok', label: 'TikTok', Icon: Music2 },
  { key: 'linkedin', label: 'LinkedIn', Icon: Linkedin },
  { key: 'twitter', label: 'Twitter / X', Icon: Twitter },
];

function formatPhone(raw) {
  const d = String(raw || '').replace(/[^\d+]/g, '');
  const m = d.match(/^\+?(\d{2})(\d)(\d{2})(\d{2})(\d{2})(\d{2})$/);
  if (!m) return raw;
  return `+${m[1]} ${m[2]} ${m[3]} ${m[4]} ${m[5]} ${m[6]}`;
}

export default function ContactPage() {
  const canonicalUrl = 'https://visioflow.fr/contact';
  const [cfg, setCfg] = useState(DEFAULTS);

  useEffect(() => {
    fetch('/api/public/config')
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (d?.contact || d?.social) {
          setCfg({
            contact: { ...DEFAULTS.contact, ...(d.contact || {}) },
            social: { ...DEFAULTS.social, ...(d.social || {}) },
          });
        }
      })
      .catch(() => {});
  }, []);

  const phoneDisplay = formatPhone(cfg.contact.phone);
  const phoneHref = `tel:${String(cfg.contact.phone || '').replace(/\s/g, '')}`;
  const socials = SOCIAL_META.filter((s) => !!cfg.social[s.key]);

  return (
    <>
      <Head>
        <title>Contact — Visioflow | Parlons de votre projet</title>
        <meta
          name="description"
          content="Contactez Visioflow par email ou téléphone pour parler de votre projet : site web dès 400€, Google Business, gestion de vos réseaux sociaux. Réponse sous 24h ouvrées."
        />
        <meta name="keywords" content="contact visioflow, agence web contact, devis site internet, création site web" />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Contact — Visioflow" />
        <meta property="og:description" content="Parlons de votre projet : sites web dès 400€, Google Business, réseaux sociaux. Réponse sous 24h ouvrées." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="VisioFlow" />
      </Head>

      <div className="vf2-page">
        <Navbar />

        {/* Hero */}
        <section className="vf2-hero" style={{ minHeight: '45vh', padding: '110px 24px 50px' }}>
          <div className="vf2-hero-bg" />
          <div className="vf2-orb vf2-orb-1" />
          <div className="vf2-orb vf2-orb-2" />

          <div className="vf2-hero-content">
            <div className="vf2-eyebrow">
              <Mail size={16} />
              Contact
            </div>
            <h1 className="vf2-h1">
              Parlons de <span className="vf2-serif-italic">votre projet</span>
            </h1>
            <p className="vf2-text">
              Une question, un projet, une envie de booster votre présence en ligne ?
              Écrivez-nous ou appelez-nous directement — nous répondons
              <strong> sous 24h ouvrées</strong>.
            </p>
          </div>
        </section>

        {/* Coordonnées */}
        <section className="vf2-section" style={{ paddingTop: '10px' }}>
          <div className="vf2-container" style={{ maxWidth: '860px' }}>
            <div className="vf2-grid-2">
              <a href={`mailto:${cfg.contact.email}`} className="vf2-card vf2-contact-info-card" style={{ textDecoration: 'none' }}>
                <div className="vf2-contact-info-icon"><Mail /></div>
                <div style={{ minWidth: 0 }}>
                  <div className="vf2-contact-info-label">Email</div>
                  <div className="vf2-contact-info-value" style={{ overflowWrap: 'anywhere' }}>{cfg.contact.email}</div>
                </div>
              </a>

              <a href={phoneHref} className="vf2-card vf2-contact-info-card" style={{ textDecoration: 'none' }}>
                <div className="vf2-contact-info-icon"><Phone /></div>
                <div style={{ minWidth: 0 }}>
                  <div className="vf2-contact-info-label">Téléphone</div>
                  <div className="vf2-contact-info-value">{phoneDisplay}</div>
                </div>
              </a>
            </div>

            <div className="vf2-card" style={{ padding: '28px 32px', marginTop: '20px' }}>
              <div className="vf2-contact-info-label" style={{ marginBottom: '14px' }}>Suivez-nous</div>
              <div className="vf2-chips">
                {socials.map(({ key, label, Icon }) => (
                  <a
                    key={key}
                    href={cfg.social[key]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="vf2-chip"
                    style={{ textDecoration: 'none' }}
                  >
                    <Icon size={15} />
                    {label}
                  </a>
                ))}
              </div>
            </div>

            <div className="vf2-est-assurance" style={{ marginTop: '20px' }}>
              <div className="vf2-est-assurance-item"><Clock size={18} />Réponse sous 24h ouvrées</div>
              <div className="vf2-est-assurance-item"><Send size={18} />Estimation gratuite &amp; sans engagement</div>
            </div>

            {/* CTA estimation */}
            <div className="vf2-card" style={{ marginTop: '28px', padding: '36px', textAlign: 'center' }}>
              <h2 className="vf2-h3" style={{ marginBottom: '10px' }}>
                Vous voulez un prix tout de suite ?
              </h2>
              <p className="vf2-text" style={{ marginBottom: '22px' }}>
                Notre estimateur calcule le prix de votre projet en une minute,
                avant même que vous nous envoyiez la demande.
              </p>
              <a href="/estimer-ma-demande" className="vf2-btn-primary" style={{ textDecoration: 'none' }}>
                Estimer ma demande <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
