export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Footer principal avec colonnes */}
        <div className="footer-main">
          {/* Colonne VisioFlow */}
          <div className="footer-col">
            <div className="footer-logo">
              Visio<span>flow</span>
            </div>
            <p className="footer-description">
              Agence web & communication digitale. Sites web, Google Business,
              et gestion réseaux sociaux pour tous types d'activités.
              Estimation gratuite sans engagement.
            </p>
            <div className="footer-social">
              <a href="https://instagram.com/visioflow" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://linkedin.com/company/visioflow" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://twitter.com/visioflow" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
              </a>
            </div>
          </div>

          {/* Colonne Navigation */}
          <div className="footer-col">
            <h4 className="footer-title">Navigation</h4>
            <div className="footer-links">
              <a href="/">Accueil</a>
              <a href="/services">Nos Services</a>
              <a href="/nos-projets">Nos Projets</a>
              <a href="/contact">Contact</a>
            </div>
          </div>

          {/* Colonne Solutions */}
          <div className="footer-col">
            <h4 className="footer-title">Services</h4>
            <div className="footer-links">
              <a href="/services">Sites Web</a>
              <a href="/services">Google Business</a>
              <a href="/services">Réseaux Sociaux</a>
              <a href="/contact">Devis gratuit</a>
            </div>
          </div>

          {/* Colonne Contact */}
          <div className="footer-col">
            <h4 className="footer-title">Contact</h4>
            <div className="footer-links">
              <a href="mailto:contact@visioflow.fr">contact@visioflow.fr</a>
              <a href="tel:+33611045829" className="footer-phone">📞 +33 6 11 04 58 29</a>
              <a href="/contact">Estimation gratuite</a>
            </div>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="footer-divider" />

        {/* Bas de page avec liens légaux */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            © {new Date().getFullYear()} VisioFlow. Tous droits réservés.
          </div>
          <div className="footer-legal">
            <a href="/mentions-legales">Mentions légales</a>
            <span className="footer-separator">•</span>
            <a href="/politique-confidentialite">Politique de confidentialité</a>
            <span className="footer-separator">•</span>
            <a href="/cgu">CGU</a>
            <span className="footer-separator">•</span>
            <a href="/politique-cookies">Cookies</a>
            <span className="footer-separator">•</span>
            <a href="/cgv">CGV</a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: #0B1628;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding: 80px 20px 30px;
          margin-top: 100px;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer-main {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
          margin-bottom: 40px;
        }

        @media (max-width: 900px) {
          .footer-main {
            grid-template-columns: repeat(2, 1fr);
            gap: 32px;
          }
        }

        @media (max-width: 600px) {
          .footer-main {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .footer {
            padding: 40px 20px 20px;
            margin-top: 60px;
          }
        }

        .footer-col {
          min-width: 0;
        }

        .footer-logo {
          font-family: 'Fraunces', sans-serif;
          font-size: 28px;
          font-weight: 900;
          color: #fff;
          margin-bottom: 16px;
          display: inline-block;
        }

        .footer-logo span {
          color: #38bdf8;
        }

        .footer-description {
          color: rgba(255, 255, 255, 0.6);
          font-size: 14px;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .footer-social {
          display: flex;
          gap: 12px;
        }

        .footer-social a {
          width: 40px;
          height: 40px;
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
          box-shadow: 0 8px 24px rgba(0, 113, 227, 0.2);
        }

        .footer-title {
          font-family: 'Fraunces', sans-serif;
          font-size: 16px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 20px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-links a {
          color: rgba(255, 255, 255, 0.5);
          font-size: 14px;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .footer-links a:hover {
          color: #fff;
        }

        .footer-phone {
          font-size: 18px !important;
          font-weight: 700 !important;
          color: #38bdf8 !important;
        }

        .footer-divider {
          height: 1px;
          background: rgba(255, 255, 255, 0.1);
          margin-bottom: 30px;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }

        @media (max-width: 600px) {
          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        .footer-copyright {
          color: rgba(255, 255, 255, 0.5);
          font-size: 14px;
        }

        .footer-legal {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .footer-legal a {
          color: rgba(255, 255, 255, 0.4);
          font-size: 13px;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .footer-legal a:hover {
          color: #38bdf8;
        }

        .footer-separator {
          color: rgba(255, 255, 255, 0.2);
          font-size: 13px;
        }
      `}</style>
    </footer>
  );
}