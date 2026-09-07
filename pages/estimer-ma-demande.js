import { useState, useRef } from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import {
  Globe, Smartphone, MapPin, Check, Loader2, Rocket, Sparkles,
  RefreshCw, Calculator, Clock, Zap,
} from 'lucide-react';

/* ── Grille de prix (cohérente avec la page /services) ────────────────────── */
const SITE_TYPES = [
  { id: 'compact',   label: 'Site vitrine compact', desc: '1 à 3 pages — l\u2019essentiel pour être visible', price: 200 },
  { id: 'complet',   label: 'Site vitrine complet', desc: '4 à 6 pages — votre référence en ligne',          price: 400 },
  { id: 'ecommerce', label: 'Boutique e-commerce',  desc: 'Vente en ligne, panier & paiement',               price: 650 },
  { id: 'aucun',     label: 'Pas de site',          desc: 'Un autre besoin (réseaux, Google Business…)',     price: 0 },
];

const OPTIONS = [
  { id: 'rdv',       label: 'Prise de rendez-vous en ligne', price: 80 },
  { id: 'blog',      label: 'Blog / espace actualités',      price: 60 },
  { id: 'multilingue', label: 'Site multilingue',            price: 100 },
  { id: 'gb-fiche',  label: 'Google Business — optimisation', price: 50 },
  { id: 'gb-avis',   label: 'Gestion & relance des avis',     price: 25 },
  { id: 'gb-photos', label: 'Reportage photo (10 visuels)',   price: 25 },
];

const PLATFORMS = [
  { id: 'insta',  label: 'Instagram' },
  { id: 'fb',     label: 'Facebook' },
  { id: 'tiktok', label: 'TikTok' },
];

const NETWORK_BASE = 100;   // 1 plateforme incluse (€/mois)
const NETWORK_EXTRA = 35;   // par plateforme supplémentaire (€/mois)
const NETWORK_VIDEOS = 30;  // vidéos courtes (€/mois)
const COMBO_ONE_TIME = 600; // forfait création site de l'offre combinée site + réseaux
const COMBO_MONTHLY = 200;  // abonnement réseaux de l'offre combinée (€/mois)

/* ── Détection automatique dans la description (l'« algorithme ») ─────────── */
const DETECTION_RULES = [
  { re: /boutique|e-?commerce|vendre|vente en ligne|panier|paiement en ligne/i, kind: 'site', value: 'ecommerce', label: 'Boutique e-commerce' },
  { re: /site (tr[eè]s )?(simple|basique)|une seule page|one page|petit site/i, kind: 'site', value: 'compact', label: 'Site compact' },
  { re: /rendez[- ]vous|\brdv\b|r[eé]serv(ation|er)?\b|booking/i,               kind: 'option', value: 'rdv',       label: 'Prise de rendez-vous' },
  { re: /blog|actualit[eé]s?|articles?/i,                                       kind: 'option', value: 'blog',      label: 'Blog / actualités' },
  { re: /multilingue|en anglais|traduction|plusieurs langues/i,                 kind: 'option', value: 'multilingue', label: 'Multilingue' },
  { re: /google|my business|fiche/i,                                            kind: 'option', value: 'gb-fiche',  label: 'Google Business' },
  { re: /\bavis\b|t[eé]moignages?/i,                                            kind: 'option', value: 'gb-avis',   label: 'Gestion des avis' },
  { re: /photos? professionnelles?|photographe|reportage/i,                     kind: 'option', value: 'gb-photos', label: 'Reportage photo' },
  { re: /r[eé]seaux|community|community management|abonnement mensuel|publications? r[eé]guli[eè]res/i, kind: 'networks', label: 'Réseaux sociaux' },
  { re: /instagram|insta\b|facebook|tiktok/i,                                   kind: 'networks', label: 'Réseaux sociaux' },
  { re: /vid[eé]os?|reels?/i,                                                   kind: 'video',  label: 'Vidéos courtes' },
  { re: /urgent|rapidement|au plus vite|d[eè]s que possible|tr[eè]s vite/i,     kind: 'urgent', label: 'Projet urgent' },
];

const PLATFORM_RULES = [
  { re: /instagram|insta\b/i, id: 'insta' },
  { re: /facebook|\bfb\b/i,   id: 'fb' },
  { re: /tiktok/i,            id: 'tiktok' },
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const digits = (s) => (s || '').replace(/\D/g, '').length;

const EMPTY_FORM = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  siteType: 'complet',
  options: [],
  networks: false,
  platforms: [],
  videos: false,
  urgent: false,
  description: '',
};

/* ── Estimation ────────────────────────────────────────────────────────────── */
function computeEstimate(f) {
  const site = SITE_TYPES.find((s) => s.id === f.siteType) || SITE_TYPES[1];
  const hasSite = f.siteType !== 'aucun';
  const combined = f.networks && hasSite;

  const lines = [];
  if (hasSite) lines.push({ label: site.label, price: site.price });
  OPTIONS.filter((o) => f.options.includes(o.id))
    .forEach((o) => lines.push({ label: o.label, price: o.price }));

  let oneLow = lines.reduce((s, l) => s + l.price, 0);

  const platCount = Math.max(1, f.platforms.length);
  const gridMonthly = NETWORK_BASE + NETWORK_EXTRA * (platCount - 1) + (f.videos ? NETWORK_VIDEOS : 0);

  const monthlyLines = [];
  if (f.networks) {
    monthlyLines.push({
      label: combined
        ? `Abonnement réseaux sociaux — offre combinée site + réseaux (${platCount} plateforme${platCount > 1 ? 's' : ''}${f.videos ? ' + vidéos' : ''})`
        : `Gestion réseaux sociaux — ${platCount} plateforme${platCount > 1 ? 's' : ''}`,
      price: combined ? Math.max(COMBO_MONTHLY, gridMonthly) : gridMonthly,
    });
  }

  // Offre combinée : un site + l'abonnement réseaux démarre à 600 € + 200 €/mois.
  if (combined && oneLow < COMBO_ONE_TIME) {
    lines.push({ label: 'Forfait offre combinée site + réseaux', price: COMBO_ONE_TIME - oneLow });
    oneLow = COMBO_ONE_TIME;
  }

  if (f.urgent && oneLow > 0) {
    lines.push({ label: 'Supplément urgence (+10 %)', price: Math.round(oneLow * 0.1) });
  }

  oneLow = lines.reduce((s, l) => s + l.price, 0);
  const monthly = monthlyLines.reduce((s, l) => s + l.price, 0);
  const round10 = (n) => Math.round((n * 1.15) / 10) * 10;

  return {
    lines,
    monthlyLines,
    oneLow,
    oneHigh: round10(oneLow),
    monthly,
    monthlyHigh: round10(monthly),
    combined,
    custom: !hasSite && !f.networks && f.options.length === 0,
  };
}

/* ── Page ──────────────────────────────────────────────────────────────────── */
export default function EstimerMaDemandePage() {
  const canonicalUrl = 'https://visioflow.fr/estimer-ma-demande';

  const [form, setForm] = useState(EMPTY_FORM);
  const [detected, setDetected] = useState([]);
  const [phase, setPhase] = useState('form'); // form | sending | done | error
  const [touched, setTouched] = useState(false);
  const manualSite = useRef(false);
  const resultRef = useRef(null);

  const estimate = computeEstimate(form);

  const set = (field, value) => setForm((f) => ({ ...f, [field]: value }));
  const toggleIn = (field, id) =>
    setForm((f) => ({
      ...f,
      [field]: f[field].includes(id) ? f[field].filter((v) => v !== id) : [...f[field], id],
    }));

  const onDescriptionChange = (value) => {
    const next = { ...form, description: value };
    const added = [];

    for (const rule of DETECTION_RULES) {
      if (!rule.re.test(value)) continue;
      if (rule.kind === 'site') {
        if (!manualSite.current && next.siteType !== rule.value) {
          next.siteType = rule.value;
          added.push(rule.label);
        }
      } else if (rule.kind === 'option') {
        if (!next.options.includes(rule.value)) {
          next.options = [...next.options, rule.value];
          added.push(rule.label);
        }
      } else if (rule.kind === 'networks') {
        if (!next.networks) {
          next.networks = true;
          added.push(rule.label);
        }
      } else if (rule.kind === 'video') {
        if (!next.videos) {
          next.videos = true;
          added.push(rule.label);
        }
      } else if (rule.kind === 'urgent') {
        if (!next.urgent) {
          next.urgent = true;
          added.push(rule.label);
        }
      }
    }

    if (next.networks) {
      for (const pr of PLATFORM_RULES) {
        if (pr.re.test(value) && !next.platforms.includes(pr.id)) {
          next.platforms = [...next.platforms, pr.id];
        }
      }
    }

    setForm(next);
    if (added.length > 0) setDetected((d) => Array.from(new Set([...d, ...added])));
  };

  const contactOk = digits(form.phone) >= 8 || EMAIL_RE.test(form.email);
  const formValid =
    form.firstName.trim().length >= 2 &&
    form.lastName.trim().length >= 2 &&
    contactOk &&
    form.description.trim().length >= 15;

  const submit = async () => {
    if (phase === 'sending') return;
    if (!formValid) {
      setTouched(true);
      return;
    }
    setPhase('sending');
    try {
      const res = await fetch('/api/estimate-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          form,
          estimate: {
            lines: estimate.lines,
            monthlyLines: estimate.monthlyLines,
            oneLow: estimate.oneLow,
            oneHigh: estimate.oneHigh,
            monthly: estimate.monthly,
            monthlyHigh: estimate.monthlyHigh,
            combined: estimate.combined,
            custom: estimate.custom,
          },
          detected,
        }),
      });
      if (!res.ok) throw new Error(await res.text());
      setPhase('done');
    } catch (err) {
      console.error(err);
      setPhase('error');
    } finally {
      setTimeout(() => resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
    }
  };

  const money = (n) => `${n.toLocaleString('fr-FR')} €`;

  return (
    <>
      <Head>
        <title>Estimer ma demande — Visioflow | Estimation gratuite de votre projet web</title>
        <meta
          name="description"
          content="Décrivez votre projet en 1 minute et recevez une estimation gratuite et personnalisée : site vitrine, e-commerce, Google Business, réseaux sociaux."
        />
        <meta name="keywords" content="estimation site web, devis site internet, prix création site, estimateur prix site web, devis réseaux sociaux" />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Estimer ma demande — Visioflow" />
        <meta property="og:description" content="Décrivez votre projet, recevez votre estimation en 1 minute. Gratuit et sans engagement." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="VisioFlow" />
      </Head>

      <div className="vf2-page">
        <Navbar />

        {/* Hero */}
        <section className="vf2-hero" style={{ minHeight: '42vh', padding: '110px 24px 50px' }}>
          <div className="vf2-hero-bg" />
          <div className="vf2-orb vf2-orb-1" />
          <div className="vf2-orb vf2-orb-2" />

          <div className="vf2-hero-content">
            <div className="vf2-eyebrow">
              <Calculator size={16} />
              Estimation gratuite &amp; instantanée
            </div>
            <h1 className="vf2-h1">
              Estimez votre projet <span className="vf2-serif-italic">en une minute</span>
            </h1>
            <p className="vf2-text">
              Quelques informations, une petite description, et notre estimateur vous donne
              un prix indicatif sur mesure. Sans engagement.
            </p>
            <div className="vf2-trust-row">
              <div className="vf2-trust-item"><Clock size={20} />1 minute chrono</div>
              <div className="vf2-trust-item"><Zap size={20} />Prix immédiat</div>
              <div className="vf2-trust-item"><Check size={20} />Sans engagement</div>
            </div>
          </div>
        </section>

        {/* Formulaire / Résultat */}
        <section className="vf2-section" style={{ paddingTop: '10px' }}>
          <div className="vf2-container" style={{ maxWidth: '780px' }}>

            {phase !== 'form' && phase !== 'sending' ? (
              /* ── Résultat : le prix est révélé après l'envoi ── */
              <div className="vf2-est-card" ref={resultRef}>
                <div className="vf2-est-success-icon"><Rocket size={30} /></div>
                <h2 className="vf2-h3" style={{ marginBottom: '8px', textAlign: 'center' }}>
                  Merci {form.firstName || ''} ! Votre demande est partie.
                </h2>
                <p className="vf2-text" style={{ textAlign: 'center' }}>
                  {phase === 'done' ? (
                    <>Nous revenons vers vous <strong>sous 24h ouvrées</strong> pour affiner ensemble votre projet.</>
                  ) : (
                    <>L&apos;envoi a échoué — votre estimation s&apos;affiche ci-dessous, réessayez l&apos;envoi avec le bouton en bas.</>
                  )}
                </p>

                <div className="vf2-estimate-box">
                  <div className="vf2-estimate-label">Estimation indicative de votre projet</div>
                  {estimate.custom ? (
                    <>
                      <div className="vf2-estimate-total">Sur devis</div>
                      <div className="vf2-estimate-sub">Votre besoin est spécifique — nous vous proposons un chiffrage précis lors de notre premier échange.</div>
                    </>
                  ) : (
                    <>
                      {estimate.oneLow > 0 && (
                        <div className="vf2-estimate-total">
                          {money(estimate.oneLow)} <span className="vf2-estimate-sep">—</span> {money(estimate.oneHigh)}
                        </div>
                      )}
                      {estimate.monthly > 0 && (
                        <div className={estimate.oneLow > 0 ? 'vf2-est-monthly' : 'vf2-estimate-total'}>
                          {estimate.oneLow > 0 && '+ '}{money(estimate.monthly)} / mois
                        </div>
                      )}
                      <div className="vf2-estimate-sub">Fourchette indicative, affinée ensemble par téléphone.</div>
                    </>
                  )}
                </div>

                {(estimate.lines.length > 0 || estimate.monthlyLines.length > 0) && (
                  <ul className="vf2-estimate-lines">
                    {estimate.lines.map((l, i) => (
                      <li key={`one-${i}`}>
                        <span className="vf2-estimate-line-label">{l.label}</span>
                        <span className="vf2-estimate-line-price">{l.price}€</span>
                      </li>
                    ))}
                    {estimate.monthlyLines.map((l, i) => (
                      <li key={`month-${i}`}>
                        <span className="vf2-estimate-line-label">{l.label}</span>
                        <span className="vf2-estimate-line-price">{l.price}€ /mois</span>
                      </li>
                    ))}
                  </ul>
                )}

                {estimate.combined && (
                  <div className="vf2-est-combo">
                    <Sparkles size={16} />
                    Offre combinée site + réseaux sociaux : à partir de {money(COMBO_ONE_TIME)} une fois + {money(COMBO_MONTHLY)} par mois.
                  </div>
                )}

                {phase === 'error' && (
                  <button type="button" className="vf2-btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '18px' }} onClick={submit}>
                    <RefreshCw size={18} /> Renvoyer ma demande
                  </button>
                )}
              </div>
            ) : (
              /* ── Formulaire court ── */
              <div className="vf2-est-card">
                <div className="vf2-est-section-title">
                  <span className="vf2-est-step-num">1</span>
                  Vos coordonnées
                </div>

                <div className="vf2-wiz-row">
                  <div className="vf2-form-group">
                    <label className="vf2-form-label" htmlFor="em-firstname">Prénom <span className="vf2-req">*</span></label>
                    <input
                      id="em-firstname" className="vf2-form-input" placeholder="Ex : Marie"
                      value={form.firstName} onChange={(e) => set('firstName', e.target.value)}
                    />
                    {touched && form.firstName.trim().length < 2 && <div className="vf2-field-error">Prénom requis</div>}
                  </div>
                  <div className="vf2-form-group">
                    <label className="vf2-form-label" htmlFor="em-lastname">Nom <span className="vf2-req">*</span></label>
                    <input
                      id="em-lastname" className="vf2-form-input" placeholder="Ex : Dupont"
                      value={form.lastName} onChange={(e) => set('lastName', e.target.value)}
                    />
                    {touched && form.lastName.trim().length < 2 && <div className="vf2-field-error">Nom requis</div>}
                  </div>
                </div>

                <div className="vf2-wiz-row">
                  <div className="vf2-form-group">
                    <label className="vf2-form-label" htmlFor="em-phone">Téléphone</label>
                    <input
                      id="em-phone" type="tel" className="vf2-form-input" placeholder="06 12 34 56 78"
                      value={form.phone} onChange={(e) => set('phone', e.target.value)}
                    />
                  </div>
                  <div className="vf2-form-group">
                    <label className="vf2-form-label" htmlFor="em-email">Email</label>
                    <input
                      id="em-email" type="email" className="vf2-form-input" placeholder="marie@entreprise.fr"
                      value={form.email} onChange={(e) => set('email', e.target.value)}
                    />
                  </div>
                </div>
                <p className="vf2-wiz-hint">Laissez au moins un téléphone <em>ou</em> un email pour qu&apos;on puisse vous joindre.</p>
                {touched && !contactOk && <div className="vf2-field-error">Renseignez un téléphone ou un email valide</div>}

                <div className="vf2-est-section-title">
                  <span className="vf2-est-step-num">2</span>
                  Votre projet
                </div>

                <div className="vf2-form-group">
                  <div className="vf2-form-label"><span className="vf2-req">*</span> Quel type de site souhaitez-vous ?</div>
                  <div className="vf2-choice-grid">
                    {SITE_TYPES.map((t) => (
                      <button
                        key={t.id} type="button"
                        className={`vf2-choice ${form.siteType === t.id ? 'on' : ''}`}
                        onClick={() => { manualSite.current = true; set('siteType', t.id); }}
                      >
                        <span className="vf2-choice-radio" />
                        <span className="vf2-choice-label">{t.label}</span>
                        <span className="vf2-choice-desc">{t.desc}</span>
                        <span className="vf2-choice-price">{t.price > 0 ? `${t.price}€` : '—'}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="vf2-form-group">
                  <div className="vf2-form-label">Options souhaitées <span className="vf2-opt">(facultatif)</span></div>
                  <div className="vf2-chips">
                    {OPTIONS.map((o) => (
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
                  <div className="vf2-form-label">Réseaux sociaux <span className="vf2-opt">(abonnement mensuel)</span></div>
                  <div className="vf2-chips">
                    <button
                      type="button"
                      className={`vf2-chip ${form.networks ? 'on' : ''}`}
                      onClick={() => set('networks', !form.networks)}
                    >
                      {form.networks && <Check size={14} strokeWidth={3} />}
                      <Smartphone size={14} style={{ verticalAlign: '-2px', marginRight: '2px' }} />
                      Gestion de mes réseaux sociaux
                      <span className="vf2-chip-price">dès {NETWORK_BASE}€/mois</span>
                    </button>
                    <button
                      type="button"
                      className={`vf2-chip ${form.urgent ? 'on' : ''}`}
                      onClick={() => set('urgent', !form.urgent)}
                    >
                      {form.urgent && <Check size={14} strokeWidth={3} />}
                      C&apos;est urgent
                      <span className="vf2-chip-price">+10%</span>
                    </button>
                  </div>

                  {form.networks && (
                    <div className="vf2-est-subpanel">
                      <div className="vf2-form-label" style={{ marginBottom: '10px' }}>
                        Plateformes à gérer <span className="vf2-opt">(la 1re incluse, puis +{NETWORK_EXTRA}€/mois chacune)</span>
                      </div>
                      <div className="vf2-chips">
                        {PLATFORMS.map((p) => (
                          <button
                            key={p.id} type="button"
                            className={`vf2-chip ${form.platforms.includes(p.id) ? 'on' : ''}`}
                            onClick={() => toggleIn('platforms', p.id)}
                          >
                            {form.platforms.includes(p.id) && <Check size={14} strokeWidth={3} />}
                            {p.label}
                          </button>
                        ))}
                        <button
                          type="button"
                          className={`vf2-chip ${form.videos ? 'on' : ''}`}
                          onClick={() => set('videos', !form.videos)}
                        >
                          {form.videos && <Check size={14} strokeWidth={3} />}
                          Vidéos courtes (Reels / TikTok)
                          <span className="vf2-chip-price">+{NETWORK_VIDEOS}€/mois</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                <div className="vf2-est-section-title">
                  <span className="vf2-est-step-num">3</span>
                  Décrivez votre projet
                </div>

                <div className="vf2-form-group">
                  <label className="vf2-form-label" htmlFor="em-desc">
                    Une petite description du travail voulu <span className="vf2-req">*</span>
                  </label>
                  <textarea
                    id="em-desc" className="vf2-form-textarea" style={{ minHeight: '110px' }}
                    placeholder="Ex : Je suis restaurateur à Lyon, je veux un site avec ma carte, la réservation en ligne, et que vous gériez mon Instagram…"
                    value={form.description}
                    onChange={(e) => onDescriptionChange(e.target.value)}
                  />
                  {touched && form.description.trim().length < 15 && (
                    <div className="vf2-field-error">Décrivez votre projet en quelques mots (15 caractères minimum)</div>
                  )}

                  {detected.length > 0 && (
                    <div className="vf2-est-detected">
                      <div className="vf2-est-detected-title">
                        <Sparkles size={13} /> Détecté dans votre description — décochez si besoin :
                      </div>
                      <div className="vf2-est-detected-badges">
                        {detected.map((d) => <span key={d} className="vf2-est-detected-badge"><Check size={12} strokeWidth={3} /> {d}</span>)}
                      </div>
                    </div>
                  )}
                </div>

                {phase === 'sending' ? (
                  <button type="button" className="vf2-btn-primary vf2-launch-btn" disabled>
                    <Loader2 size={18} className="vf2-spin" /> Calcul de votre estimation…
                  </button>
                ) : (
                  <button
                    type="button"
                    className="vf2-btn-primary vf2-launch-btn"
                    onClick={submit}
                  >
                    <Calculator size={18} /> Recevoir mon estimation
                  </button>
                )}
                <p className="vf2-wiz-hint" style={{ textAlign: 'center' }}>
                  Gratuit et sans engagement — réponse sous 24h ouvrées.
                </p>
              </div>
            )}

            {/* Rassurance sous le formulaire */}
            <div className="vf2-est-assurance">
              <div className="vf2-est-assurance-item"><Globe size={18} />Sites 100% adaptables</div>
              <div className="vf2-est-assurance-item"><MapPin size={18} />Google Business inclus dès 50€</div>
              <div className="vf2-est-assurance-item"><Smartphone size={18} />Réseaux dès 100€/mois</div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
