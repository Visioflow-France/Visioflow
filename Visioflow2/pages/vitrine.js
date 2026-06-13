import Head from 'next/head';
import { useEffect } from 'react';

/* ─────────────────────────────────────────────────────────────
   CONFIGURATION CLIENT — injectée par Visioflow lors de la livraison
   ───────────────────────────────────────────────────────────── */
const CONFIG = {
  pack:         'premium',          // 'essentiel' | 'premium'
  siteName:     'Le Petit Bistrot',
  tagline:      'Cuisine française, produits locaux',
  color:        '#E85D04',
  colorLight:   '#fff3ed',
  cuisine:      'Bistrot Français',
  address:      '12 Rue de la Paix, 75001 Paris',
  phone:        '01 23 45 67 89',
  email:        'contact@lepetitbistrot.fr',
  story:        'Fondé en 2010 par la famille Dupont, Le Petit Bistrot propose une cuisine traditionnelle française revisitée avec des produits locaux et de saison. Notre salle chaleureuse de 40 couverts vous accueille dans une ambiance authentique.',
  instagram:    'https://instagram.com/lepetitbistrot',
  facebook:     'https://facebook.com/lepetitbistrot',
  tiktok:       '',
  website:      '',
  hours: {
    lun: '12h–14h30 · 19h–22h30',
    mar: '12h–14h30 · 19h–22h30',
    mer: '12h–14h30 · 19h–22h30',
    jeu: '12h–14h30 · 19h–22h30',
    ven: '12h–14h30 · 19h–23h',
    sam: '12h–15h · 19h–23h',
    dim: 'Fermé',
  },
  menu: [
    { id:1, name:'Soupe à l\'oignon gratinée', price:9.50,  category:'Entrée',   photo:'' },
    { id:2, name:'Salade de chèvre chaud',     price:11.00, category:'Entrée',   photo:'' },
    { id:3, name:'Entrecôte grillée',          price:26.00, category:'Plat',     photo:'' },
    { id:4, name:'Confit de canard',           price:22.50, category:'Plat',     photo:'' },
    { id:5, name:'Filet de bar, beurre blanc', price:24.00, category:'Plat',     photo:'' },
    { id:6, name:'Crème brûlée maison',        price:8.00,  category:'Dessert',  photo:'' },
    { id:7, name:'Tarte tatin',                price:8.50,  category:'Dessert',  photo:'' },
    { id:8, name:'Carafe de vin rouge (50cl)', price:12.00, category:'Boisson',  photo:'' },
  ],
  gallery: ['','','','','',''],   // URLs photos galerie

  /* ── PREMIUM ── */
  deliveryMode:    'both',          // 'internal' | 'platforms' | 'both'
  deliveryEta:     '30–45 min',
  ubereatsUrl:     'https://ubereats.com/fr/stores/le-petit-bistrot',
  deliverooUrl:    'https://deliveroo.fr/menu/le-petit-bistrot',
  justEatUrl:      '',
  otherDeliveryUrl:'',

};

/* ─────────────────────────────────────────────────────────────
   HELPERS
   ───────────────────────────────────────────────────────────── */
const IS_PREMIUM   = CONFIG.pack === 'premium';
const DAY_LABELS   = { lun:'Lundi', mar:'Mardi', mer:'Mercredi', jeu:'Jeudi', ven:'Vendredi', sam:'Samedi', dim:'Dimanche' };
const CATEGORIES   = ['Entrée','Plat','Dessert','Boisson'];
const esc = s => String(s||'').replace(/</g,'&lt;').replace(/>/g,'&gt;');

/* ─────────────────────────────────────────────────────────────
   RENDERERS
   ───────────────────────────────────────────────────────────── */
function renderMenu(items) {
  const cats = CATEGORIES.filter(c => items.some(m => m.category === c));
  return cats.map(cat => {
    const catItems = items.filter(m => m.category === cat);
    return `
      <div class="menu-category">
        <div class="menu-cat-title">${cat}</div>
        <div class="menu-grid">
          ${catItems.map(item => `
            <div class="menu-card">
              <div class="menu-photo" style="${item.photo ? `background-image:url(${item.photo})` : ''}" ${item.photo ? `alt="${item.name} - ${item.category} - ${CONFIG.siteName}" loading="lazy"` : ''}>
                ${!item.photo ? `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" opacity=".3"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>` : ''}
              </div>
              <div class="menu-info">
                <div class="menu-name">${esc(item.name)}</div>
                <div class="menu-price">${Number(item.price).toFixed(2)} €</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>`;
  }).join('');
}

function renderHours(hours) {
  return Object.entries(DAY_LABELS).map(([key, label]) => {
    const val = hours[key] || 'Fermé';
    const closed = val.toLowerCase() === 'fermé';
    return `
      <div class="hour-row">
        <span class="hour-day">${label}</span>
        <span class="hour-val${closed ? ' closed' : ''}">${esc(val)}</span>
      </div>`;
  }).join('');
}

function renderDelivery(city = null) {
  const dm  = city ? city.deliveryMode : CONFIG.deliveryMode;
  const ub  = city ? city.ubereatsUrl  : CONFIG.ubereatsUrl;
  const de  = city ? city.deliverooUrl : CONFIG.deliverooUrl;
  const je  = city ? '' : CONFIG.justEatUrl;
  const ot  = city ? '' : CONFIG.otherDeliveryUrl;
  const eta = city ? '' : CONFIG.deliveryEta;

  const showInternal  = dm === 'internal' || dm === 'both';
  const showPlatforms = dm === 'platforms' || dm === 'both';

  return `
    <div class="delivery-wrap">
      ${showInternal ? `
        <div class="delivery-section">
          <div class="delivery-label">Commander directement</div>
          <div class="delivery-sub">${eta ? `Livraison estimée : ${esc(eta)}` : 'Livraison assurée par notre équipe'}</div>
          <button class="order-btn" onclick="openOrderModal()">Commander maintenant</button>
        </div>` : ''}
      ${showPlatforms && (ub || de || je || ot) ? `
        <div class="delivery-section">
          <div class="delivery-label">Commandez via</div>
          <div class="platforms-row">
            ${ub ? `<a href="${ub}" target="_blank" class="platform-btn ubereats">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 4.5c4.14 0 7.5 3.36 7.5 7.5s-3.36 7.5-7.5 7.5S4.5 16.14 4.5 12 7.86 4.5 12 4.5z"/></svg>
              Uber Eats</a>` : ''}
            ${de ? `<a href="${de}" target="_blank" class="platform-btn deliveroo">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="12"/></svg>
              Deliveroo</a>` : ''}
            ${je ? `<a href="${je}" target="_blank" class="platform-btn justeat">Just Eat</a>` : ''}
            ${ot ? `<a href="${ot}" target="_blank" class="platform-btn other">Autre plateforme</a>` : ''}
          </div>
        </div>` : ''}
    </div>`;
}

/* ─────────────────────────────────────────────────────────────
   PAGE COMPONENT
   ───────────────────────────────────────────────────────────── */
export default function Vitrine() {
  useEffect(() => {
    const burger = document.getElementById('vt-burger');
    const mobileNav = document.getElementById('vt-mobile-nav');

    /* ── Mobile nav toggle ── */
    const toggleMobileNav = () => mobileNav && mobileNav.classList.toggle('open');
    if (burger && mobileNav) {
      burger.addEventListener('click', toggleMobileNav);
    }

    /* ── Smooth scroll for nav links ── */
    const anchors = document.querySelectorAll('a[href^="#"]');
    const scrollHandlers = [];
    anchors.forEach(a => {
      const handler = (e) => {
        e.preventDefault();
        const target = document.querySelector(a.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
        if (mobileNav) mobileNav.classList.remove('open');
      };
      a.addEventListener('click', handler);
      scrollHandlers.push({ a, handler });
    });

    /* ── Order modal (premium internal) ── */
    window.openOrderModal = () => {
      document.getElementById('order-modal')?.classList.add('open');
      document.body.style.overflow = 'hidden';
    };
    window.closeOrderModal = () => {
      document.getElementById('order-modal')?.classList.remove('open');
      document.body.style.overflow = '';
    };

    /* ── Gallery lightbox ── */
    window.openLightbox = (src) => {
      const lb = document.getElementById('lightbox');
      if (!lb) return;
      lb.querySelector('img').src = src;
      lb.classList.add('open');
    };
    window.closeLightbox = () => {
      document.getElementById('lightbox')?.classList.remove('open');
    };

    return () => {
      if (burger) burger.removeEventListener('click', toggleMobileNav);
      scrollHandlers.forEach(({ a, handler }) => a.removeEventListener('click', handler));
      delete window.openOrderModal;
      delete window.closeOrderModal;
      delete window.openLightbox;
      delete window.closeLightbox;
    };
  }, []);

  const hasGallery   = CONFIG.gallery.some(Boolean);
  const hasStory     = !!CONFIG.story;
  const hasSocial    = CONFIG.instagram || CONFIG.facebook || CONFIG.tiktok;

  const canonicalUrl = `https://visioflow.fr/vitrine`;

  return (
    <>
      <Head>
        <title>Exemple site web restaurant — Démo Visioflow | Menu &amp; commandes en ligne</title>
        <meta name="description" content="Découvrez un exemple concret de site restaurant professionnel créé par Visioflow : menu en ligne, commandes et paiement intégré. Pack Essentiel 150€ ou Premium 490€, livré en 5 jours." />
        <meta name="keywords" content="exemple site restaurant, démo site web restaurant, site restaurant avec commandes en ligne, modèle site restaurant, aperçu site vitrine restaurant" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;800;900&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Exemple site web restaurant — Démo Visioflow" />
        <meta property="og:description" content="Découvrez un exemple concret de site restaurant professionnel créé par Visioflow : menu en ligne, commandes et paiement intégré. À partir de 150€." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:image" content="https://visioflow.fr/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Exemple site web restaurant — Démo Visioflow" />
        <meta name="twitter:description" content="Découvrez un exemple concret de site restaurant créé par Visioflow. À partir de 150€, livré en 5 jours." />
        <meta name="twitter:image" content="https://visioflow.fr/og-image.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Exemple site web restaurant — Démo Visioflow",
              "description": "Démonstration d'un site restaurant professionnel créé par Visioflow : menu en ligne, commandes et paiement intégré.",
              "url": canonicalUrl,
              "isPartOf": {
                "@type": "WebSite",
                "name": "Visioflow",
                "url": "https://visioflow.fr"
              },
              "about": {
                "@type": "Service",
                "name": "Création site web restaurant professionnel",
                "provider": {
                  "@type": "Organization",
                  "name": "Visioflow",
                  "url": "https://visioflow.fr"
                },
                "offers": [
                  {
                    "@type": "Offer",
                    "name": "Pack Essentiel — Site vitrine restaurant",
                    "price": "150",
                    "priceCurrency": "EUR"
                  },
                  {
                    "@type": "Offer",
                    "name": "Pack Premium — Site restaurant avec commandes en ligne",
                    "price": "490",
                    "priceCurrency": "EUR"
                  }
                ]
              }
            })
          }}
        />
        <style>{`
          :root {
            --brand:    ${CONFIG.color};
            --brand-l:  ${CONFIG.colorLight};
            --text:     #0f0f0f;
            --text2:    #4b5563;
            --text3:    #9ca3af;
            --bg:       #ffffff;
            --bg-alt:   #f9fafb;
            --bord:     rgba(0,0,0,.08);
            --sh:       0 4px 24px rgba(0,0,0,.07);
            --sh-lg:    0 20px 60px rgba(0,0,0,.12);
            --radius:   16px;
            --font:     'Fraunces', sans-serif;
            --font-b:   'Inter Tight', sans-serif;
          }
          *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
          html { scroll-behavior:smooth; }
          body { font-family:var(--font-b); color:var(--text); background:var(--bg); -webkit-font-smoothing:antialiased; }

          /* ── NAV ── */
          .vt-nav {
            position:fixed; top:0; left:0; right:0; z-index:100;
            display:flex; align-items:center; justify-content:space-between;
            padding:0 32px; height:64px;
            background:rgba(255,255,255,.92); backdrop-filter:blur(20px);
            border-bottom:1px solid var(--bord);
          }
          .vt-nav-logo { font-family:var(--font); font-size:20px; font-weight:800; color:var(--text); letter-spacing:-.5px; }
          .vt-nav-logo span { color:var(--brand); }
          .vt-nav-links { display:flex; gap:28px; list-style:none; }
          .vt-nav-links a { font-size:14px; font-weight:500; color:var(--text2); text-decoration:none; transition:color .2s; }
          .vt-nav-links a:hover { color:var(--brand); }
          .vt-nav-cta {
            padding:9px 22px; border-radius:980px; background:var(--brand);
            color:#fff; font-size:13px; font-weight:700; border:none; cursor:pointer;
            font-family:var(--font); text-decoration:none; transition:all .2s;
            box-shadow:0 4px 14px color-mix(in srgb, var(--brand) 35%, transparent);
          }
          .vt-nav-cta:hover { filter:brightness(1.1); transform:translateY(-1px); }
          .vt-burger { display:none; background:none; border:none; cursor:pointer; padding:4px; }
          .vt-mobile-nav {
            display:none; position:fixed; inset:0; top:64px; z-index:99;
            background:rgba(255,255,255,.98); backdrop-filter:blur(20px);
            flex-direction:column; align-items:center; justify-content:center; gap:24px;
          }
          .vt-mobile-nav.open { display:flex; }
          .vt-mobile-nav a { font-size:22px; font-weight:700; color:var(--text); text-decoration:none; font-family:var(--font); }
          @media(max-width:768px){
            .vt-nav-links,.vt-nav-cta { display:none; }
            .vt-burger { display:block; }
          }

          /* ── HERO ── */
          .vt-hero {
            position:relative; min-height:100dvh;
            display:flex; flex-direction:column; align-items:center; justify-content:center;
            text-align:center; padding:100px 24px 60px; overflow:hidden;
          }
          .vt-hero-bg {
            position:absolute; inset:0;
            background:linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
          }
          .vt-hero-photo {
            position:absolute; inset:0; object-fit:cover; width:100%; height:100%; opacity:.45;
          }
          .vt-hero-placeholder {
            position:absolute; inset:0; display:flex; align-items:center; justify-content:center;
            flex-direction:column; gap:12px; color:rgba(255,255,255,.2);
            font-size:14px; font-weight:500; letter-spacing:.1em; text-transform:uppercase;
          }
          .vt-hero-overlay {
            position:absolute; inset:0;
            background:linear-gradient(to top, rgba(0,0,0,.7) 0%, rgba(0,0,0,.2) 60%, transparent 100%);
          }
          .vt-hero-content { position:relative; z-index:1; max-width:700px; }
          .vt-hero-badge {
            display:inline-flex; align-items:center; gap:6px;
            padding:6px 16px; border-radius:980px;
            background:rgba(255,255,255,.12); border:1px solid rgba(255,255,255,.2);
            color:rgba(255,255,255,.85); font-size:12px; font-weight:600;
            margin-bottom:24px; backdrop-filter:blur(8px);
          }
          .vt-hero-dot { width:7px; height:7px; border-radius:50%; background:var(--brand); }
          .vt-hero-title {
            font-family:var(--font); font-size:clamp(42px,8vw,80px); font-weight:900;
            color:#fff; letter-spacing:-2px; line-height:1.0; margin-bottom:16px;
          }
          .vt-hero-sub { font-size:18px; color:rgba(255,255,255,.72); font-weight:400; margin-bottom:36px; line-height:1.5; }
          .vt-hero-actions { display:flex; gap:14px; justify-content:center; flex-wrap:wrap; }
          .vt-hero-btn {
            padding:14px 32px; border-radius:980px; font-size:15px; font-weight:700;
            cursor:pointer; font-family:var(--font); text-decoration:none; transition:all .22s;
            border:none; display:inline-flex; align-items:center; gap:8px;
          }
          .vt-hero-btn.primary { background:var(--brand); color:#fff; box-shadow:0 8px 30px color-mix(in srgb,var(--brand) 40%,transparent); }
          .vt-hero-btn.primary:hover { filter:brightness(1.1); transform:translateY(-2px); }
          .vt-hero-btn.secondary { background:rgba(255,255,255,.15); color:#fff; border:1px solid rgba(255,255,255,.3); backdrop-filter:blur(8px); }
          .vt-hero-btn.secondary:hover { background:rgba(255,255,255,.25); }
          .vt-hero-scroll {
            position:absolute; bottom:32px; left:50%; transform:translateX(-50%);
            display:flex; flex-direction:column; align-items:center; gap:8px;
            color:rgba(255,255,255,.5); font-size:10px; font-weight:600; letter-spacing:.15em; text-transform:uppercase;
            animation:vtBounce 2s ease-in-out infinite;
          }
          @keyframes vtBounce { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(6px)} }

          /* ── SECTIONS ── */
          .vt-section { padding:96px 24px; }
          .vt-section.alt { background:var(--bg-alt); }
          .vt-container { max-width:1100px; margin:0 auto; }
          .vt-section-header { text-align:center; margin-bottom:56px; }
          .vt-section-tag {
            display:inline-block; padding:4px 14px; border-radius:980px;
            background:var(--brand-l); color:var(--brand);
            font-size:11px; font-weight:700; letter-spacing:.08em; text-transform:uppercase; margin-bottom:14px;
          }
          .vt-section-title { font-family:var(--font); font-size:clamp(28px,5vw,44px); font-weight:800; color:var(--text); letter-spacing:-.8px; margin-bottom:10px; }
          .vt-section-sub { font-size:15px; color:var(--text2); max-width:520px; margin:0 auto; line-height:1.7; }

          /* ── MENU ── */
          .menu-category { margin-bottom:48px; }
          .menu-cat-title {
            font-family:var(--font); font-size:20px; font-weight:800; color:var(--text);
            margin-bottom:20px; padding-bottom:12px;
            border-bottom:2px solid var(--brand); display:inline-block;
          }
          .menu-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(280px,1fr)); gap:16px; }
          .menu-card {
            background:#fff; border-radius:16px; overflow:hidden;
            border:1px solid var(--bord); box-shadow:var(--sh);
            transition:all .22s; cursor:default;
          }
          .menu-card:hover { transform:translateY(-3px); box-shadow:var(--sh-lg); }
          .menu-photo {
            height:180px; background:var(--bg-alt); background-size:cover; background-position:center;
            display:flex; align-items:center; justify-content:center; color:var(--text3);
          }
          .menu-info { padding:16px 18px; display:flex; justify-content:space-between; align-items:center; gap:12px; }
          .menu-name { font-size:15px; font-weight:600; color:var(--text); line-height:1.4; }
          .menu-price { font-family:var(--font); font-size:17px; font-weight:800; color:var(--brand); white-space:nowrap; }

          /* ── ABOUT ── */
          .about-grid { display:grid; grid-template-columns:1fr 1fr; gap:64px; align-items:center; }
          .about-photo {
            height:500px; border-radius:24px; background:var(--bg-alt);
            display:flex; align-items:center; justify-content:center; overflow:hidden;
            box-shadow:var(--sh-lg); position:relative;
          }
          .about-photo img { width:100%; height:100%; object-fit:cover; }
          .about-photo-placeholder { display:flex; flex-direction:column; align-items:center; gap:12px; color:var(--text3); font-size:13px; font-weight:500; text-align:center; padding:24px; }
          .about-text .vt-section-tag { text-align:left; }
          .about-text .vt-section-title { text-align:left; }
          .about-story { font-size:16px; color:var(--text2); line-height:1.8; margin-top:20px; }
          .about-stats { display:flex; gap:32px; margin-top:36px; flex-wrap:wrap; }
          .about-stat-num { font-family:var(--font); font-size:36px; font-weight:900; color:var(--brand); }
          .about-stat-lbl { font-size:13px; color:var(--text3); font-weight:500; margin-top:2px; }
          @media(max-width:768px){ .about-grid { grid-template-columns:1fr; } .about-photo { height:280px; } }

          /* ── GALLERY ── */
          .gallery-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:12px; }
          .gallery-item {
            aspect-ratio:1; border-radius:16px; background:var(--bg-alt); overflow:hidden;
            cursor:pointer; transition:all .22s; display:flex; align-items:center; justify-content:center;
            color:var(--text3); position:relative;
          }
          .gallery-item:first-child { grid-column:span 2; aspect-ratio:auto; height:300px; }
          .gallery-item img { width:100%; height:100%; object-fit:cover; }
          .gallery-item:hover { transform:scale(1.02); box-shadow:var(--sh-lg); }
          .gallery-ph { display:flex; flex-direction:column; align-items:center; gap:8px; font-size:12px; font-weight:500; }
          @media(max-width:640px){ .gallery-grid { grid-template-columns:1fr 1fr; } .gallery-item:first-child { grid-column:span 2; height:200px; } }

          /* ── HOURS & CONTACT ── */
          .info-grid { display:grid; grid-template-columns:1fr 1fr; gap:40px; }
          @media(max-width:768px){ .info-grid { grid-template-columns:1fr; } }
          .info-card { background:#fff; border-radius:20px; padding:32px; border:1px solid var(--bord); box-shadow:var(--sh); }
          .info-card-title { font-family:var(--font); font-size:18px; font-weight:800; color:var(--text); margin-bottom:24px; display:flex; align-items:center; gap:10px; }
          .info-card-title svg { color:var(--brand); flex-shrink:0; }
          .hour-row { display:flex; justify-content:space-between; align-items:center; padding:9px 0; border-bottom:1px solid var(--bord); }
          .hour-row:last-child { border-bottom:none; }
          .hour-day { font-size:14px; font-weight:600; color:var(--text); }
          .hour-val { font-size:13px; color:var(--text2); }
          .hour-val.closed { color:var(--text3); }
          .contact-item { display:flex; align-items:flex-start; gap:14px; margin-bottom:20px; }
          .contact-item:last-child { margin-bottom:0; }
          .contact-ico { width:36px; height:36px; border-radius:10px; background:var(--brand-l); color:var(--brand); display:flex; align-items:center; justify-content:center; flex-shrink:0; margin-top:2px; }
          .contact-label { font-size:11px; font-weight:600; color:var(--text3); text-transform:uppercase; letter-spacing:.05em; margin-bottom:3px; }
          .contact-val { font-size:15px; font-weight:600; color:var(--text); }
          .contact-val a { color:inherit; text-decoration:none; }
          .contact-val a:hover { color:var(--brand); }

          /* ── MAP PLACEHOLDER ── */
          .map-wrap { border-radius:20px; overflow:hidden; height:280px; background:var(--bg-alt); display:flex; align-items:center; justify-content:center; margin-top:24px; border:1px solid var(--bord); }
          .map-ph { display:flex; flex-direction:column; align-items:center; gap:10px; color:var(--text3); font-size:13px; font-weight:500; }

          /* ── DELIVERY (PREMIUM+) ── */
          .delivery-wrap { display:flex; flex-direction:column; gap:24px; }
          .delivery-section { background:#fff; border-radius:20px; padding:28px 32px; border:1px solid var(--bord); box-shadow:var(--sh); }
          .delivery-label { font-family:var(--font); font-size:18px; font-weight:800; color:var(--text); margin-bottom:6px; }
          .delivery-sub { font-size:14px; color:var(--text2); margin-bottom:20px; }
          .order-btn {
            padding:14px 32px; border-radius:980px; background:var(--brand); color:#fff;
            font-size:15px; font-weight:700; border:none; cursor:pointer; font-family:var(--font);
            transition:all .22s; box-shadow:0 6px 20px color-mix(in srgb,var(--brand) 35%,transparent);
          }
          .order-btn:hover { filter:brightness(1.1); transform:translateY(-2px); }
          .platforms-row { display:flex; gap:12px; flex-wrap:wrap; }
          .platform-btn {
            display:inline-flex; align-items:center; gap:8px; padding:12px 22px;
            border-radius:14px; font-size:14px; font-weight:700; text-decoration:none;
            transition:all .22s; cursor:pointer;
          }
          .platform-btn.ubereats  { background:#000; color:#fff; }
          .platform-btn.deliveroo { background:#00CCBC; color:#fff; }
          .platform-btn.justeat   { background:#ff6900; color:#fff; }
          .platform-btn.other     { background:var(--bg-alt); color:var(--text); border:1px solid var(--bord); }
          .platform-btn:hover { transform:translateY(-2px); box-shadow:var(--sh); }

          /* ── SOCIAL ── */
          .social-row { display:flex; gap:12px; margin-top:28px; flex-wrap:wrap; }
          .social-btn {
            display:inline-flex; align-items:center; gap:8px; padding:10px 20px;
            border-radius:12px; font-size:13px; font-weight:600; text-decoration:none;
            border:1px solid var(--bord); color:var(--text2); background:#fff;
            transition:all .2s;
          }
          .social-btn:hover { border-color:var(--brand); color:var(--brand); transform:translateY(-1px); }

          /* ── ORDER MODAL (PREMIUM internal) ── */
          .order-modal {
            display:none; position:fixed; inset:0; z-index:999;
            background:rgba(0,0,0,.5); backdrop-filter:blur(14px);
            align-items:center; justify-content:center; padding:24px;
          }
          .order-modal.open { display:flex; }
          .order-modal-card {
            background:#fff; border-radius:24px; width:100%; max-width:480px;
            padding:36px; box-shadow:0 40px 80px rgba(0,0,0,.2);
            animation:modalIn .3s cubic-bezier(.25,1,.5,1); position:relative;
          }
          @keyframes modalIn { from{opacity:0;transform:scale(.94) translateY(12px)} to{opacity:1;transform:none} }
          .order-modal-x { position:absolute; top:16px; right:16px; width:30px; height:30px; border-radius:50%; border:none; background:var(--bg-alt); cursor:pointer; font-size:16px; display:flex; align-items:center; justify-content:center; color:var(--text2); }
          .order-modal-title { font-family:var(--font); font-size:22px; font-weight:800; color:var(--text); margin-bottom:6px; }
          .order-modal-sub { font-size:13px; color:var(--text2); margin-bottom:24px; }
          .om-field { margin-bottom:14px; }
          .om-label { display:block; font-size:11px; font-weight:600; color:var(--text2); margin-bottom:5px; text-transform:uppercase; letter-spacing:.04em; }
          .om-input { width:100%; padding:11px 14px; background:var(--bg-alt); border:1.5px solid var(--bord); border-radius:12px; font-size:14px; font-family:inherit; color:var(--text); outline:none; transition:border-color .2s; }
          .om-input:focus { border-color:var(--brand); }
          .om-submit { width:100%; padding:14px; border-radius:14px; background:var(--brand); color:#fff; font-size:15px; font-weight:700; border:none; cursor:pointer; font-family:var(--font); margin-top:8px; transition:all .2s; }
          .om-submit:hover { filter:brightness(1.08); }

          /* ── LIGHTBOX ── */
          .lightbox { display:none; position:fixed; inset:0; z-index:9999; background:rgba(0,0,0,.92); align-items:center; justify-content:center; cursor:zoom-out; }
          .lightbox.open { display:flex; }
          .lightbox img { max-width:90vw; max-height:90vh; border-radius:12px; box-shadow:0 40px 80px rgba(0,0,0,.5); }

          /* ── FOOTER ── */
          .vt-footer { background:var(--text); color:rgba(255,255,255,.6); padding:48px 24px; text-align:center; }
          .vt-footer-logo { font-family:var(--font); font-size:22px; font-weight:900; color:#fff; margin-bottom:8px; }
          .vt-footer-logo span { color:var(--brand); }
          .vt-footer-sub { font-size:13px; margin-bottom:24px; }
          .vt-footer-links { display:flex; gap:20px; justify-content:center; flex-wrap:wrap; margin-bottom:28px; }
          .vt-footer-links a { font-size:13px; color:rgba(255,255,255,.5); text-decoration:none; transition:color .2s; }
          .vt-footer-links a:hover { color:#fff; }
          .vt-footer-copy { font-size:12px; color:rgba(255,255,255,.3); }
        `}</style>
      </Head>

      {/* ── NAV ── */}
      <nav className="vt-nav">
        <div className="vt-nav-logo">
          {CONFIG.siteName.split(' ').map((w,i) => i===0 ? <span key={i} style={{color:'var(--brand)'}}>{w} </span> : w+' ')}
        </div>
        <ul className="vt-nav-links">
          <li><a href="#menu">Menu</a></li>
          {hasStory && <li><a href="#about">Notre histoire</a></li>}
          {hasGallery && <li><a href="#gallery">Galerie</a></li>}
          <li><a href="#info">Infos & Horaires</a></li>
          {IS_PREMIUM && <li><a href="#commande">Commander</a></li>}
        </ul>
        {IS_PREMIUM
          ? <a href="#commande" className="vt-nav-cta">Commander →</a>
          : <a href="#info" className="vt-nav-cta">Nous contacter</a>}
        <button className="vt-burger" id="vt-burger" aria-label="Menu">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>
      </nav>

      {/* ── MOBILE NAV ── */}
      <div className="vt-mobile-nav" id="vt-mobile-nav">
        <a href="#menu">Menu</a>
        {hasStory && <a href="#about">Notre histoire</a>}
        {hasGallery && <a href="#gallery">Galerie</a>}
        <a href="#info">Infos & Horaires</a>
        {IS_PREMIUM && <a href="#commande">Commander</a>}
      </div>

      {/* ── HERO ── */}
      <section className="vt-hero">
        <div className="vt-hero-bg" />
        {/* Photo hero — vide = placeholder */}
        <div className="vt-hero-placeholder">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
          Photo principale du restaurant
        </div>
        <div className="vt-hero-overlay" />
        <div className="vt-hero-content">
          <div className="vt-hero-badge">
            <div className="vt-hero-dot" />
            {CONFIG.cuisine}
          </div>
          <h1 className="vt-hero-title">Site restaurant avec menu complet et {IS_PREMIUM ? 'commandes en ligne' : 'informations pratiques'}</h1>
          <p className="vt-hero-sub">{CONFIG.siteName} - {CONFIG.tagline}</p>
          <div className="vt-hero-actions">
            <a href="#menu" className="vt-hero-btn primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>
              Voir la carte
            </a>
            {IS_PREMIUM && (
              <a href="#commande" className="vt-hero-btn secondary">Commander en ligne</a>
            )}
          </div>
        </div>
        <div className="vt-hero-scroll">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
          Découvrir
        </div>
      </section>

      {/* ── MENU ── */}
      <section className="vt-section" id="menu">
        <div className="vt-container">
          <div className="vt-section-header">
            <div className="vt-section-tag">Notre carte</div>
            <h2 className="vt-section-title">Ce qui nous rend uniques</h2>
            <p className="vt-section-sub">Des produits frais, une cuisine faite maison, des saveurs authentiques.</p>
          </div>
          <div dangerouslySetInnerHTML={{__html: renderMenu(CONFIG.menu)}} />
          <div className="text-center mt-8 mb-4">
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#about" className="text-[var(--brand)] font-semibold hover:opacity-80 transition-opacity">
                Découvrir notre histoire →
              </a>
              <a href="#info" className="text-[var(--brand)] font-semibold hover:opacity-80 transition-opacity">
                Horaires et contact →
              </a>
              {hasGallery && (
                <a href="#gallery" className="text-[var(--brand)] font-semibold hover:opacity-80 transition-opacity">
                  Voir la galerie →
                </a>
              )}
            </div>
          </div>
        </div>
      </section>


      {/* ── ABOUT ── */}
      {hasStory && (
        <section className="vt-section alt" id="about">
          <div className="vt-container">
            <div className="about-grid">
              <div className="about-photo">
                <div className="about-photo-placeholder">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                  <span>Photo ambiance restaurant</span>
                </div>
              </div>
              <div className="about-text">
                <div className="vt-section-tag">Notre histoire</div>
                <h2 className="vt-section-title">Qui sommes-nous ?</h2>
                <p className="about-story">{CONFIG.story}</p>
                <div className="about-stats">
                  <div>
                    <div className="about-stat-num">5j</div>
                    <div className="about-stat-lbl">Délai de livraison</div>
                  </div>
                  <div>
                    <div className="about-stat-num">100%</div>
                    <div className="about-stat-lbl">Fait maison</div>
                  </div>
                </div>
                {hasSocial && (
                  <div className="social-row">
                    {CONFIG.instagram && <a href={CONFIG.instagram} target="_blank" rel="noreferrer" className="social-btn">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
                      Instagram</a>}
                    {CONFIG.facebook && <a href={CONFIG.facebook} target="_blank" rel="noreferrer" className="social-btn">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
                      Facebook</a>}
                    {CONFIG.tiktok && <a href={CONFIG.tiktok} target="_blank" rel="noreferrer" className="social-btn">TikTok</a>}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── GALLERY ── */}
      {hasGallery && (
      <section className="vt-section" id="gallery">
        <div className="vt-container">
          <div className="vt-section-header">
            <div className="vt-section-tag">Galerie</div>
            <h2 className="vt-section-title">L'ambiance en images</h2>
          </div>
          <div className="gallery-grid">
            {(CONFIG.gallery.length > 0 ? CONFIG.gallery : ['','','','','','']).map((src, i) => (
              <div key={i} className="gallery-item" onClick={() => src && window.openLightbox(src)}>
                {src ? <img src={src} alt={`Photo ${i+1}`} /> : (
                  <div className="gallery-ph">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                    <span>Photo {i+1}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* ── COMMANDE / LIVRAISON (PREMIUM+) ── */}
      {IS_PREMIUM && (
        <section className="vt-section alt" id="commande">
          <div className="vt-container">
            <div className="vt-section-header">
              <div className="vt-section-tag">Commande en ligne</div>
              <h2 className="vt-section-title">Commandez, on s'occupe du reste</h2>
              <p className="vt-section-sub">Livraison ou à emporter, choisissez la formule qui vous convient.</p>
            </div>
            <div dangerouslySetInnerHTML={{__html: renderDelivery()}} />
          </div>
        </section>
      )}

      {/* ── INFOS & HORAIRES ── */}
      <section className={`vt-section${IS_PREMIUM ? '' : ' alt'}`} id="info">
        <div className="vt-container">
          <div className="vt-section-header">
            <div className="vt-section-tag">Informations</div>
            <h2 className="vt-section-title">Horaires & Contact</h2>
          </div>
          <div className="info-grid">
              <div className="info-card">
                <div className="info-card-title">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  Horaires d'ouverture
                </div>
                <div dangerouslySetInnerHTML={{__html: renderHours(CONFIG.hours)}} />
              </div>
              <div className="info-card">
                <div className="info-card-title">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  Adresse & Contact
                </div>
                <div className="contact-item">
                  <div className="contact-ico"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
                  <div><div className="contact-label">Adresse</div><div className="contact-val">{CONFIG.address}</div></div>
                </div>
                <div className="contact-item">
                  <div className="contact-ico"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg></div>
                  <div><div className="contact-label">Téléphone</div><div className="contact-val"><a href={`tel:${CONFIG.phone}`}>{CONFIG.phone}</a></div></div>
                </div>
                {CONFIG.email && (
                  <div className="contact-item">
                    <div className="contact-ico"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div>
                    <div><div className="contact-label">Email</div><div className="contact-val"><a href={`mailto:${CONFIG.email}`}>{CONFIG.email}</a></div></div>
                  </div>
                )}
                <div className="map-wrap">
                  <div className="map-ph">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    Google Maps intégré ici
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="vt-footer">
        <div className="vt-footer-logo">
          {CONFIG.siteName.split(' ')[0]}<span style={{color:'var(--brand)'}}> {CONFIG.siteName.split(' ').slice(1).join(' ')}</span>
        </div>
        <p className="vt-footer-sub">{CONFIG.tagline}</p>
        <div className="vt-footer-links">
          <a href="#menu">Menu</a>
          {hasStory && <a href="#about">Notre histoire</a>}
          {hasGallery && <a href="#gallery">Galerie</a>}
          <a href="#info">Contact</a>
          {IS_PREMIUM && <a href="#commande">Commander</a>}
        </div>
        {hasSocial && (
          <div style={{display:'flex',gap:'16px',justifyContent:'center',marginBottom:'24px'}}>
            {CONFIG.instagram && <a href={CONFIG.instagram} target="_blank" rel="noreferrer" style={{color:'rgba(255,255,255,.5)',transition:'color .2s'}}
              onMouseOver={e=>e.target.style.color='#fff'} onMouseOut={e=>e.target.style.color='rgba(255,255,255,.5)'}>Instagram</a>}
            {CONFIG.facebook && <a href={CONFIG.facebook} target="_blank" rel="noreferrer" style={{color:'rgba(255,255,255,.5)',transition:'color .2s'}}
              onMouseOver={e=>e.target.style.color='#fff'} onMouseOut={e=>e.target.style.color='rgba(255,255,255,.5)'}>Facebook</a>}
            {CONFIG.tiktok && <a href={CONFIG.tiktok} target="_blank" rel="noreferrer" style={{color:'rgba(255,255,255,.5)',transition:'color .2s'}}
              onMouseOver={e=>e.target.style.color='#fff'} onMouseOut={e=>e.target.style.color='rgba(255,255,255,.5)'}>TikTok</a>}
          </div>
        )}
        <p className="vt-footer-copy">© {new Date().getFullYear()} {CONFIG.siteName} — Tous droits réservés.</p>
        <p style={{fontSize:'11px',color:'rgba(255,255,255,.2)',marginTop:'8px'}}>Site créé par VisioFlow — Sites web pour restaurants</p>
      </footer>

      {/* ── ORDER MODAL (livraison interne, premium+) ── */}
      {IS_PREMIUM && (CONFIG.deliveryMode === 'internal' || CONFIG.deliveryMode === 'both') && (
        <div className="order-modal" id="order-modal" onClick={e => e.target.id==='order-modal' && window.closeOrderModal()}>
          <div className="order-modal-card">
            <button className="order-modal-x" onClick={() => window.closeOrderModal()}>×</button>
            <div className="order-modal-title">Commander</div>
            <p className="order-modal-sub">Renseignez vos coordonnées, nous vous rappellerons sous 5 minutes.</p>
            <div className="om-field"><label className="om-label">Votre nom</label><input className="om-input" placeholder="Jean Dupont" /></div>
            <div className="om-field"><label className="om-label">Téléphone</label><input className="om-input" type="tel" placeholder="06 12 34 56 78" /></div>
            <div className="om-field"><label className="om-label">Adresse de livraison</label><input className="om-input" placeholder="12 Rue de la Paix, Paris" /></div>
            <div className="om-field"><label className="om-label">Votre commande</label><textarea className="om-input" style={{minHeight:'80px',resize:'vertical'}} placeholder="1× Entrecôte grillée, 1× Crème brûlée…" /></div>
            <button className="om-submit">Envoyer ma commande →</button>
          </div>
        </div>
      )}

      {/* ── LIGHTBOX ── */}
      <div className="lightbox" id="lightbox" onClick={() => window.closeLightbox()}>
        <img src="" alt="Photo agrandie" />
      </div>
    </>
  );
}
