import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Referme le menu si on repasse en desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1080) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Escape pour fermer le menu
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  const navLinks = [
    { href: '/services', label: 'Services' },
    { href: '/nos-projets', label: 'Nos projets' },
    { href: '/comment-ca-marche', label: 'Comment ça marche' },
    { href: '/a-propos', label: 'À propos' },
  ];

  return (
    <>
      <nav className={`vf2-navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="vf2-nav-content">
          <Link href="/" className="vf2-logo" aria-label="VisioFlow">
            <img src="/logo-navbar-icon.png" alt="" aria-hidden="true" width="686" height="684" className="vf2-logo-badge" />
            <img src="/wordmark-navbar.svg" alt="VisioFlow" width="1448" height="280" className="vf2-logo-wordmark" />
          </Link>

          <div className="vf2-nav-links">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="vf2-nav-link">
                {link.label}
              </Link>
            ))}
          </div>

          <div className="vf2-nav-right">
            <Link href="/estimer-ma-demande" className="vf2-nav-cta">
              Estimer ma demande
            </Link>
            <button
              className={`vf2-nav-burger ${menuOpen ? 'open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={20} strokeWidth={2.2} /> : <Menu size={20} strokeWidth={2.2} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Backdrop transparent : clic pour fermer */}
      <div
        className={`vf2-nav-backdrop ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Menu déroulant en pilule (mobile / tablette) */}
      <div className={`vf2-nav-dropdown ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="vf2-dropdown-link"
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <div className="vf2-dropdown-divider" />
        <Link href="/estimer-ma-demande" className="vf2-dropdown-cta" onClick={() => setMenuOpen(false)}>
          Estimer ma demande
        </Link>
      </div>
    </>
  );
}
