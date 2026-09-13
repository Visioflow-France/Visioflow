import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

/* Valeurs par défaut — remplacées par la configuration du dashboard admin
   (collection site_config/main → contact + social) dès qu'elle est chargée. */
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

function formatPhone(raw) {
  const d = String(raw || '').replace(/[^\d+]/g, '');
  const m = d.match(/^\+?(\d{2})(\d)(\d{2})(\d{2})(\d{2})(\d{2})$/);
  if (!m) return raw;
  return `+${m[1]} ${m[2]} ${m[3]} ${m[4]} ${m[5]} ${m[6]}`;
}

const ICONS = {
  instagram: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
  ),
  linkedin: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
  ),
  twitter: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
  ),
  facebook: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
  ),
  tiktok: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
  ),
};

const NAV_LINKS = [
  { href: '/', label: 'Accueil' },
  { href: '/services', label: 'Services' },
  { href: '/nos-projets', label: 'Nos projets' },
  { href: '/comment-ca-marche', label: 'Comment ça marche' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/contact', label: 'Contact' },
];

const LEGAL_LINKS = [
  { href: '/mentions-legales', label: 'Mentions légales' },
  { href: '/politique-confidentialite', label: 'Confidentialité' },
  { href: '/cgu', label: 'CGU' },
  { href: '/politique-cookies', label: 'Cookies' },
  { href: '/cgv', label: 'CGV' },
];

export default function Footer() {
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
  const socialEntries = Object.entries(cfg.social).filter(([, url]) => !!url);

  return (
    <footer className="footer">
      {/* Halo lumineux discret, dans l'esprit du design vf2 */}
      <div className="footer-glow" aria-hidden="true" />

      <div className="footer-container">
        {/* Bande CTA */}
        <div className="footer-cta">
          <h2 className="footer-cta-title">
            Un projet <em>en tête</em> ?
          </h2>
          <p className="footer-cta-sub">
            Décrivez votre besoin en une minute, votre prix s&apos;affiche en direct.
            Gratuit et sans engagement.
          </p>
          <Link href="/estimer-ma-demande" className="footer-cta-btn">
            Estimer ma demande gratuitement
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Colonnes : marque / navigation / contact (pas de liste de services) */}
        <div className="footer-main">
          <div className="footer-brand">
            <p className="footer-description">
              Agence web &amp; communication digitale. Sites dès 400€ avec référencement
              Google inclus, ou pack gestion + site en abonnement dès 200€/mois.
            </p>
            <div className="footer-social">
              {socialEntries.map(([key, url]) => (
                <a key={key} href={url} target="_blank" rel="noopener noreferrer" aria-label={key}>
                  {ICONS[key] || null}
                </a>
              ))}
            </div>
          </div>

          <nav className="footer-col" aria-label="Navigation de pied de page">
            <h4 className="footer-title">Navigation</h4>
            <div className="footer-links">
              {NAV_LINKS.map((l) => (
                <Link key={l.href} href={l.href}>{l.label}</Link>
              ))}
            </div>
          </nav>

          <div className="footer-col">
            <h4 className="footer-title">Contact</h4>
            <div className="footer-links">
              <a href={`mailto:${cfg.contact.email}`}>{cfg.contact.email}</a>
              <a href={phoneHref} className="footer-phone">{phoneDisplay}</a>
              <Link href="/estimer-ma-demande">Estimation gratuite</Link>
            </div>
          </div>
        </div>

        {/* Bas de page : copyright + liens légaux */}
        <div className="footer-divider" />
        <div className="footer-bottom">
          <div className="footer-copyright">
            © {new Date().getFullYear()} VisioFlow. Tous droits réservés.
          </div>
          <div className="footer-legal">
            {LEGAL_LINKS.map((l, i) => (
              <span key={l.href} className="footer-legal-item">
                {i > 0 && <span className="footer-separator">•</span>}
                <Link href={l.href}>{l.label}</Link>
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          position: relative;
          background: #0B1628;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding: 0 20px 30px;
          margin-top: 100px;
          overflow: hidden;
        }

        .footer-glow {
          position: absolute;
          top: -180px;
          left: 50%;
          transform: translateX(-50%);
          width: 720px;
          height: 360px;
          border-radius: 50%;
          background: radial-gradient(closest-side, rgba(0, 102, 255, 0.18), transparent 70%);
          pointer-events: none;
        }

        .footer-container {
          max-width: 1080px;
          margin: 0 auto;
          position: relative;
        }

        /* ── Bande CTA ── */
        .footer-cta {
          text-align: center;
          padding: 64px 0 56px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .footer-cta-title {
          font-family: 'Fraunces', sans-serif;
          font-size: clamp(30px, 5vw, 46px);
          font-weight: 900;
          color: #fff;
          letter-spacing: -0.02em;
          margin: 0 0 12px;
        }

        .footer-cta-title em {
          font-style: italic;
          color: #38bdf8;
        }

        .footer-cta-sub {
          color: rgba(255, 255, 255, 0.6);
          font-size: 15px;
          line-height: 1.6;
          max-width: 460px;
          margin: 0 auto 26px;
        }

        .footer-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 15px 30px;
          border-radius: 999px;
          background: linear-gradient(135deg, #0066FF, #00D4FF);
          color: #fff;
          font-size: 15px;
          font-weight: 700;
          text-decoration: none;
          box-shadow: 0 8px 28px rgba(0, 102, 255, 0.35);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .footer-cta-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 36px rgba(0, 102, 255, 0.45);
        }

        /* ── Colonnes ── */
        .footer-main {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr;
          gap: 48px;
          padding: 52px 0 44px;
        }

        .footer-brand {
          min-width: 0;
        }

        .footer-description {
          color: rgba(255, 255, 255, 0.55);
          font-size: 13.5px;
          line-height: 1.65;
          margin: 0 0 20px;
          max-width: 340px;
        }

        .footer-social {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .footer-social a {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, 0.6);
          transition: all 0.2s ease;
        }

        .footer-social a:hover {
          background: rgba(0, 113, 227, 0.2);
          border-color: rgba(56, 189, 248, 0.4);
          color: #38bdf8;
          transform: translateY(-3px);
        }

        .footer-title {
          font-family: 'Inter Tight', sans-serif;
          font-size: 12px;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.85);
          margin-bottom: 18px;
          text-transform: uppercase;
          letter-spacing: 0.14em;
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-links a {
          color: rgba(255, 255, 255, 0.55);
          font-size: 14px;
          text-decoration: none;
          transition: color 0.2s ease;
          overflow-wrap: anywhere;
          width: fit-content;
        }

        .footer-links a:hover {
          color: #fff;
        }

        .footer-phone {
          font-size: 17px !important;
          font-weight: 700 !important;
          color: #38bdf8 !important;
        }

        /* ── Bas de page ── */
        .footer-divider {
          height: 1px;
          background: rgba(255, 255, 255, 0.08);
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 14px;
          padding-top: 24px;
        }

        .footer-copyright {
          color: rgba(255, 255, 255, 0.45);
          font-size: 13px;
        }

        .footer-legal {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .footer-legal-item a {
          color: rgba(255, 255, 255, 0.4);
          font-size: 12.5px;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .footer-legal-item a:hover {
          color: #38bdf8;
        }

        .footer-separator {
          color: rgba(255, 255, 255, 0.18);
          font-size: 12px;
          margin-right: 8px;
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .footer-main {
            grid-template-columns: 1fr 1fr;
            gap: 36px;
          }

          .footer-brand {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 600px) {
          .footer {
            padding: 0 16px 20px;
            margin-top: 60px;
          }

          .footer-cta {
            padding: 48px 0 40px;
          }

          .footer-main {
            grid-template-columns: 1fr;
            gap: 32px;
            padding: 40px 0 36px;
          }

          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </footer>
  );
}
