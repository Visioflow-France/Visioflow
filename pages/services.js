import { useState, useEffect, useCallback } from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Globe, MapPin, Smartphone, Check, Star, X, ArrowLeft, ArrowRight, Rocket, Palette, Clock, Loader2 } from 'lucide-react';

/* ── Configuration de l'estimateur par service ────────────────────────────── */
const SERVICE_CONFIG = {
  'site-web': {
    types: [
      { id: 'compact',   label: 'Site vitrine compact',   desc: '1 à 3 pages — l\u2019essentiel pour être visible', price: 200 },
      { id: 'complet',   label: 'Site vitrine complet',   desc: '4 à 6 pages — votre référence en ligne',          price: 400 },
      { id: 'ecommerce', label: 'Boutique e-commerce',    desc: 'Vente en ligne, panier & paiement',               price: 650 },
    ],
    options: [
      { id: 'rdv',         label: 'Prise de rendez-vous en ligne', price: 80 },
      { id: 'blog',        label: 'Blog / espace actualités',      price: 60 },
      { id: 'multilingue', label: 'Site multilingue',              price: 100 },
    ],
  },
  'google-business': {
    types: [
      { id: 'fiche', label: 'Optimisation complète de la fiche', desc: 'Infos, catégories, photos & SEO local', price: 50 },
    ],
    options: [
      { id: 'avis',   label: 'Gestion & relance des avis clients',  price: 25 },
      { id: 'photos', label: 'Reportage photo (10 visuels pro)',    price: 25 },
    ],
  },
  'reseaux-sociaux': {
    types: [
      { id: 'gestion', label: 'Gestion complète — 1 plateforme', desc: 'Contenu, publications & communauté', price: 100 },
    ],
    options: [
      { id: 'insta',  label: '+ Instagram',                    price: 35 },
      { id: 'fb',     label: '+ Facebook',                     price: 35 },
      { id: 'tiktok', label: '+ TikTok',                       price: 35 },
      { id: 'video',  label: 'Vidéos courtes (Reels / TikTok)', price: 30 },
    ],
  },
};

const COLOR_SWATCHES = [
  { id: 'bleu',        label: 'Bleu',        hex: '#0066FF' },
  { id: 'vert',        label: 'Vert',        hex: '#10B981' },
  { id: 'rouge',       label: 'Rouge',       hex: '#EF4444' },
  { id: 'orange',      label: 'Orange',      hex: '#F59E0B' },
  { id: 'violet',      label: 'Violet',      hex: '#8B5CF6' },
  { id: 'noir-blanc',  label: 'Noir & blanc', hex: '#111827' },
  { id: 'dore',        label: 'Doré',        hex: '#D4AF37' },
  { id: 'carte-blanche', label: 'Carte blanche', hex: null },
];

const DEADLINES = [
  { id: 'flexible', label: 'Je suis flexible', extra: 0 },
  { id: 'un-mois',  label: 'D\u2019ici 1 mois', extra: 0 },
  { id: 'urgent',   label: 'C\u2019est urgent', extra: 0.10 },
];

const SECTORS = ['Restaurant / Café', 'Commerce / Boutique', 'Artisan / Prestataire', 'Santé / Beauté / Bien-être', 'Immobilier', 'Autre'];

const EMPTY_FORM = {
  companyName: '',
  contactName: '',
  email: '',
  phone: '',
  sector: '',
  city: '',
  siteType: 'compact',
  options: [],
  colors: [],
  deadline: 'flexible',
  notes: '',
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function digits(s) {
  return (s || '').replace(/\D/g, '').length;
}

/* ── Estimation ────────────────────────────────────────────────────────────── */
function computeEstimate(serviceId, form) {
  const config = SERVICE_CONFIG[serviceId];
  const lines = [];

  const type = config.types.find((t) => t.id === form.siteType) || config.types[0];
  lines.push({ label: type.label, price: type.price });

  config.options
    .filter((o) => form.options.includes(o.id))
    .forEach((o) => lines.push({ label: o.label, price: o.price }));

  const deadline = DEADLINES.find((d) => d.id === form.deadline) || DEADLINES[0];
  if (deadline.extra > 0) {
    const base = lines.reduce((s, l) => s + l.price, 0);
    lines.push({ label: `Supplément urgence (+${Math.round(deadline.extra * 100)}%)`, price: Math.round(base * deadline.extra) });
  }

  const low = lines.reduce((s, l) => s + l.price, 0);
  const high = Math.round((low * 1.15) / 10) * 10;

  return { lines, low, high };
}

export default function ServicesPage() {
  const canonicalUrl = "https://visioflow.fr/services";

  const [modalOpen, setModalOpen] = useState(false);
  const [activeService, setActiveService] = useState(null);
  const [step, setStep] = useState(1);
  const [form, setForm] = useState(EMPTY_FORM);
  const [sendState, setSendState] = useState('idle'); // idle | sending | done | error
  const [touched, setTouched] = useState(false);

  const services = [
    {
      id: 'site-web',
      icon: Globe,
      title: 'Sites Web 100% Adaptables',
      description: 'Sites vitrines élégants ou boutiques e-commerce complètes. Design responsive, performance optimale et référencement naturel inclus.',
      price: '200-800€',
      pricePrefix: 'à partir de',
      features: [
        'Design moderne et professionnel',
        'Responsive mobile & tablette',
        'Optimisation SEO',
        'Performance rapide',
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

  const openWizard = (service) => {
    setActiveService(service);
    setForm({ ...EMPTY_FORM, siteType: SERVICE_CONFIG[service.id].types[0].id });
    setStep(1);
    setSendState('idle');
    setTouched(false);
    setModalOpen(true);
  };

  const closeWizard = useCallback(() => {
    if (sendState === 'sending') return;
    setModalOpen(false);
  }, [sendState]);

  useEffect(() => {
    if (!modalOpen) return;
    const onKey = (e) => e.key === 'Escape' && closeWizard();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [modalOpen, closeWizard]);

  const set = (field, value) => setForm((f) => ({ ...f, [field]: value }));

  const toggleIn = (field, id) =>
    setForm((f) => ({
      ...f,
      [field]: f[field].includes(id) ? f[field].filter((v) => v !== id) : [...f[field], id],
    }));

  const step1Valid =
    form.companyName.trim().length >= 2 &&
    form.contactName.trim().length >= 2 &&
    EMAIL_RE.test(form.email) &&
    digits(form.phone) >= 8;

  const estimate = activeService ? computeEstimate(activeService.id, form) : null;

  const goNext = () => {
    if (step === 1 && !step1Valid) {
      setTouched(true);
      return;
    }
    setStep((s) => Math.min(3, s + 1));
  };

  const launch = async () => {
    setSendState('sending');
    try {
      const res = await fetch('/api/launch-site', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          serviceId: activeService.id,
          serviceTitle: activeService.title,
          form,
          estimate,
        }),
      });
      if (!res.ok) throw new Error(await res.text());
      setSendState('done');
    } catch (err) {
      console.error(err);
      setSendState('error');
    }
  };

  const steps = ['Votre entreprise', 'Votre projet', 'Estimation'];

  return (
    <>
      <Head>
        <title>Nos Services — Visioflow | Sites web, Google Business, Réseaux sociaux</title>
        <meta
          name="description"
          content="Découvrez nos services complets : création de sites web (vitrine, e-commerce), optimisation Google Business, et gestion des réseaux sociaux. Tarifs transparents."
        />
        <meta name="keywords" content="services agence web, création site internet, google my business, gestion réseaux sociaux, community management" />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Nos Services — Visioflow" />
        <meta property="og:description" content="Sites web, Google Business, Réseaux sociaux. Découvrez nos tarifs transparents." />
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
          </div>
        </section>

        {/* Services Section */}
        <section className="vf2-section">
          <div className="vf2-container">
            <div className="vf2-grid-3">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.id}
                    className={`vf2-card vf2-service-card ${service.popular ? 'popular' : ''}`}
                    style={{ cursor: 'pointer' }}
                    onClick={() => openWizard(service)}
                  >
                    {service.popular && <div className="vf2-service-badge">Populaire</div>}

                    <div className="vf2-icon-tile">
                      <Icon />
                    </div>

                    <h2 className="vf2-h3">{service.title}</h2>
                    <p className="vf2-text" style={{ fontSize: '0.95rem', marginBottom: '20px' }}>
                      {service.description}
                    </p>

                    <div className="vf2-service-price">
                      <span className="vf2-service-price-prefix">{service.pricePrefix}</span>
                      {' ' + service.price}
                    </div>

                    <ul className="vf2-service-features">
                      {service.features.map((feature, index) => (
                        <li key={index} className="vf2-service-feature">
                          <Check size={18} strokeWidth={3} />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <button
                      type="button"
                      className="vf2-btn-ghost"
                      style={{ width: '100%', justifyContent: 'center' }}
                      onClick={(e) => {
                        e.stopPropagation();
                        openWizard(service);
                      }}
                    >
                      Configurer & estimer
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <Footer />
      </div>

      {/* ── Wizard : questionnaire + estimateur ─────────────────────────────── */}
      {modalOpen && activeService && (
        <div className="vf2-wiz-overlay" onClick={(e) => e.target === e.currentTarget && closeWizard()}>
          <div className="vf2-wiz-modal" role="dialog" aria-modal="true" aria-label="Configurer votre projet">

            {sendState === 'done' ? (
              <div className="vf2-wiz-success">
                <div className="vf2-wiz-success-icon"><Rocket size={34} /></div>
                <h3 className="vf2-h3" style={{ marginBottom: '10px' }}>C&apos;est lancé !</h3>
                <p className="vf2-text">
                  Merci {form.contactName.split(' ')[0] || ''} ! Votre projet a bien été enregistré.
                </p>
                <p className="vf2-text">
                  Un membre de l&apos;équipe Visioflow vous <strong>appelle sous 24h ouvrées</strong> au{' '}
                  <strong>{form.phone}</strong> pour un rendez-vous téléphonique : nous affinons ensemble
                  votre estimation et planifions la création de votre site.
                </p>
                <button type="button" className="vf2-btn-primary" style={{ marginTop: '18px' }} onClick={() => setModalOpen(false)}>
                  Parfait, à tout de suite
                </button>
              </div>
            ) : (
              <>
                {/* En-tête + progression */}
                <div className="vf2-wiz-head">
                  <div>
                    <div className="vf2-wiz-service">{activeService.title}</div>
                    <div className="vf2-wiz-title">
                      {step === 1 && 'Parlez-nous de votre entreprise'}
                      {step === 2 && 'Personnalisez votre projet'}
                      {step === 3 && 'Votre estimation'}
                    </div>
                  </div>
                  <button type="button" className="vf2-wiz-close" aria-label="Fermer" onClick={closeWizard}>
                    <X size={20} />
                  </button>
                </div>

                <div className="vf2-wiz-progress">
                  {steps.map((label, i) => (
                    <div key={label} className={`vf2-wiz-step ${step >= i + 1 ? 'on' : ''}`}>
                      <span className="vf2-wiz-step-dot">{step > i + 1 ? <Check size={12} strokeWidth={3} /> : i + 1}</span>
                      <span className="vf2-wiz-step-label">{label}</span>
                    </div>
                  ))}
                </div>

                <div className="vf2-wiz-body">
                  {/* ÉTAPE 1 — Entreprise */}
                  {step === 1 && (
                    <div className="vf2-wiz-anim">
                      <div className="vf2-form-group">
                        <label className="vf2-form-label" htmlFor="sw-company">Nom de votre entreprise <span className="vf2-req">*</span></label>
                        <input
                          id="sw-company" className="vf2-form-input" placeholder="Ex : Le Petit Bistrot"
                          value={form.companyName} onChange={(e) => set('companyName', e.target.value)}
                        />
                        {touched && form.companyName.trim().length < 2 && <div className="vf2-field-error">Nom requis</div>}
                      </div>

                      <div className="vf2-wiz-row">
                        <div className="vf2-form-group">
                          <label className="vf2-form-label" htmlFor="sw-contact">Votre nom <span className="vf2-req">*</span></label>
                          <input
                            id="sw-contact" className="vf2-form-input" placeholder="Ex : Marie Dupont"
                            value={form.contactName} onChange={(e) => set('contactName', e.target.value)}
                          />
                          {touched && form.contactName.trim().length < 2 && <div className="vf2-field-error">Nom requis</div>}
                        </div>
                        <div className="vf2-form-group">
                          <label className="vf2-form-label" htmlFor="sw-city">Ville</label>
                          <input
                            id="sw-city" className="vf2-form-input" placeholder="Ex : Lyon"
                            value={form.city} onChange={(e) => set('city', e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="vf2-wiz-row">
                        <div className="vf2-form-group">
                          <label className="vf2-form-label" htmlFor="sw-email">Email <span className="vf2-req">*</span></label>
                          <input
                            id="sw-email" type="email" className="vf2-form-input" placeholder="marie@entreprise.fr"
                            value={form.email} onChange={(e) => set('email', e.target.value)}
                          />
                          {touched && !EMAIL_RE.test(form.email) && <div className="vf2-field-error">Email invalide</div>}
                        </div>
                        <div className="vf2-form-group">
                          <label className="vf2-form-label" htmlFor="sw-phone">Téléphone <span className="vf2-req">*</span></label>
                          <input
                            id="sw-phone" type="tel" className="vf2-form-input" placeholder="06 12 34 56 78"
                            value={form.phone} onChange={(e) => set('phone', e.target.value)}
                          />
                          {touched && digits(form.phone) < 8 && <div className="vf2-field-error">Numéro invalide</div>}
                        </div>
                      </div>

                      <div className="vf2-form-group">
                        <label className="vf2-form-label" htmlFor="sw-sector">Secteur d&apos;activité</label>
                        <select
                          id="sw-sector" className="vf2-form-input"
                          value={form.sector} onChange={(e) => set('sector', e.target.value)}
                        >
                          <option value="">Choisir…</option>
                          {SECTORS.map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>

                      <p className="vf2-wiz-hint"><Clock size={13} /> 30 secondes chrono — ces infos nous permettent de vous rappeler rapidement.</p>
                    </div>
                  )}

                  {/* ÉTAPE 2 — Projet */}
                  {step === 2 && (
                    <div className="vf2-wiz-anim">
                      <div className="vf2-form-group">
                        <div className="vf2-form-label">
                          <span className="vf2-req">*</span> Formule souhaitée
                        </div>
                        <div className="vf2-choice-grid">
                          {SERVICE_CONFIG[activeService.id].types.map((t) => (
                            <button
                              key={t.id} type="button"
                              className={`vf2-choice ${form.siteType === t.id ? 'on' : ''}`}
                              onClick={() => set('siteType', t.id)}
                            >
                              <span className="vf2-choice-radio" />
                              <span className="vf2-choice-label">{t.label}</span>
                              <span className="vf2-choice-desc">{t.desc}</span>
                              <span className="vf2-choice-price">{t.price}€</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="vf2-form-group">
                        <div className="vf2-form-label">Options souhaitées <span className="vf2-opt">(facultatif)</span></div>
                        <div className="vf2-chips">
                          {SERVICE_CONFIG[activeService.id].options.map((o) => (
                            <button
                              key={o.id} type="button"
                              className={`vf2-chip ${form.options.includes(o.id) ? 'on' : ''}`}
                              onClick={() => toggleIn('options', o.id)}
                            >
                              {form.options.includes(o.id) && <Check size={14} strokeWidth={3} />}
                              {o.label}
                              <span className="vf2-chip-price">+{o.price}€</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="vf2-form-group">
                        <div className="vf2-form-label">
                          <Palette size={14} style={{ verticalAlign: '-2px', marginRight: '4px' }} />
                          Couleurs dominantes souhaitées <span className="vf2-opt">(facultatif)</span>
                        </div>
                        <div className="vf2-swatches">
                          {COLOR_SWATCHES.map((c) => (
                            <button
                              key={c.id} type="button"
                              className={`vf2-swatch ${form.colors.includes(c.id) ? 'on' : ''}`}
                              onClick={() => toggleIn('colors', c.id)}
                              title={c.label}
                            >
                              <span
                                className="vf2-swatch-dot"
                                style={
                                  c.hex
                                    ? { background: c.hex }
                                    : { background: 'conic-gradient(#0066FF, #8B5CF6, #10B981, #F59E0B, #0066FF)' }
                                }
                              />
                              {c.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="vf2-wiz-row">
                        <div className="vf2-form-group">
                          <div className="vf2-form-label">Délai souhaité <span className="vf2-opt">(facultatif)</span></div>
                          <div className="vf2-chips">
                            {DEADLINES.map((d) => (
                              <button
                                key={d.id} type="button"
                                className={`vf2-chip ${form.deadline === d.id ? 'on' : ''}`}
                                onClick={() => set('deadline', d.id)}
                              >
                                {d.label}
                                {d.extra > 0 && <span className="vf2-chip-price">+10%</span>}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="vf2-form-group">
                        <label className="vf2-form-label" htmlFor="sw-notes">Précisions, style, exemples… <span className="vf2-opt">(facultatif)</span></label>
                        <textarea
                          id="sw-notes" className="vf2-form-textarea" style={{ minHeight: '90px' }}
                          placeholder="Ex : ambiance épurée comme tel site, logo déjà existant, texts déjà rédigés…"
                          value={form.notes} onChange={(e) => set('notes', e.target.value)}
                        />
                      </div>
                    </div>
                  )}

                  {/* ÉTAPE 3 — Estimation */}
                  {step === 3 && estimate && (
                    <div className="vf2-wiz-anim">
                      <div className="vf2-estimate-box">
                        <div className="vf2-estimate-label">Estimation de votre projet</div>
                        <div className="vf2-estimate-total">
                          {estimate.low}€ <span className="vf2-estimate-sep">—</span> {estimate.high}€
                        </div>
                        <div className="vf2-estimate-sub">Fourchette indicative, affinée ensemble par téléphone.</div>
                      </div>

                      <ul className="vf2-estimate-lines">
                        {estimate.lines.map((l, i) => (
                          <li key={i}>
                            <span className="vf2-estimate-line-label">{l.label}</span>
                            <span className="vf2-estimate-line-price">{l.price}€</span>
                          </li>
                        ))}
                      </ul>

                      <div className="vf2-recap">
                        <div className="vf2-recap-title">Récapitulatif envoyé à l&apos;équipe</div>
                        <div className="vf2-recap-grid">
                          <div><span>Entreprise</span><strong>{form.companyName}</strong></div>
                          {form.city && <div><span>Ville</span><strong>{form.city}</strong></div>}
                          {form.sector && <div><span>Secteur</span><strong>{form.sector}</strong></div>}
                          <div><span>Contact</span><strong>{form.contactName} · {form.phone}</strong></div>
                          {form.colors.length > 0 && (
                            <div>
                              <span>Couleurs</span>
                              <strong>{form.colors.map((id) => COLOR_SWATCHES.find((c) => c.id === id)?.label).filter(Boolean).join(', ')}</strong>
                            </div>
                          )}
                          <div><span>Délai</span><strong>{DEADLINES.find((d) => d.id === form.deadline)?.label}</strong></div>
                        </div>
                      </div>

                      {sendState === 'error' && (
                        <div className="vf2-field-error" style={{ textAlign: 'center', marginTop: '10px' }}>
                          L&apos;envoi a échoué — réessayez dans un instant.
                        </div>
                      )}

                      <button
                        type="button"
                        className="vf2-btn-primary vf2-launch-btn"
                        disabled={sendState === 'sending'}
                        onClick={launch}
                      >
                        {sendState === 'sending'
                          ? <><Loader2 size={18} className="vf2-spin" /> Envoi en cours…</>
                          : <><Rocket size={18} /> Lancer mon site</>}
                      </button>
                      <p className="vf2-wiz-hint" style={{ textAlign: 'center' }}>
                        Sans engagement — nous vous appelons sous 24h ouvrées pour valider ensemble.
                      </p>
                    </div>
                  )}
                </div>

                {/* Pied : navigation */}
                <div className="vf2-wiz-foot">
                  <button
                    type="button"
                    className="vf2-wiz-nav vf2-wiz-nav-back"
                    style={{ visibility: step === 1 ? 'hidden' : 'visible' }}
                    onClick={() => setStep((s) => Math.max(1, s - 1))}
                  >
                    <ArrowLeft size={16} /> Retour
                  </button>
                  {step < 3 && (
                    <button type="button" className="vf2-wiz-nav vf2-wiz-nav-next" onClick={goNext}>
                      {step === 1 ? 'Continuer' : 'Voir mon estimation'} <ArrowRight size={16} />
                    </button>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
