import { useState, useRef } from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import {
  Globe, Smartphone, MapPin, Check, Loader2, Rocket, Sparkles,
  Calculator, Clock, Zap, SearchCheck, HeartHandshake, Send,
} from 'lucide-react';

/* ── Grille de prix (cohérente avec la page /services) ──────────────────────
   Site vitrine : à partir de 400 € (strict minimum)
   Boutique e-commerce : à partir de 600 €
   Google Business : à partir de 50 €  ·  Réseaux sociaux : à partir de 100 €/mois */
const SITE_TYPES = [
  { id: 'vitrine',   label: 'Site vitrine',        desc: 'Votre présence de référence en ligne, à votre image', price: 400 },
  { id: 'ecommerce', label: 'Boutique e-commerce', desc: 'Vente en ligne, panier & paiement',                    price: 600 },
  { id: 'aucun',     label: 'Autre',               desc: 'Un autre besoin — décrivez-le à l\u2019étape suivante', price: 0 },
];

const GB_BASE = 50; // optimisation complète de la fiche Google Business (€)
const GB_OPTIONS = [
  { id: 'avis',   label: 'Gestion & relance des avis clients', price: 25 },
  { id: 'photos', label: 'Reportage photo (10 visuels pro)',    price: 25 },
];

const PLATFORMS = [
  { id: 'insta',  label: 'Instagram' },
  { id: 'fb',     label: 'Facebook' },
  { id: 'tiktok', label: 'TikTok' },
];

const NETWORK_BASE = 100;   // 1 plateforme incluse (€/mois)
const NETWORK_EXTRA = 35;   // par plateforme supplémentaire (€/mois)
const COMBO_ONE_TIME = 600; // forfait création site de l'offre combinée site + réseaux
const COMBO_MONTHLY = 200;  // abonnement réseaux de l'offre combinée (€/mois)

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const digits = (s) => (s || '').replace(/\D/g, '').length;

const EMPTY_FORM = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  siteType: 'vitrine',
  googleBusiness: false,
  gbOptions: [],
  networks: false,
  platforms: [],
  urgent: false,
  description: '',
};

/* ── Estimation ──────────────────────────────────────────────────────────────
   La description du projet ne fait PAS partie du calcul : le prix dépend
   uniquement des choix cochés dans le formulaire.                              */
function computeEstimate(f) {
  const site = SITE_TYPES.find((s) => s.id === f.siteType) || SITE_TYPES[0];
  const hasSite = f.siteType !== 'aucun';
  const combined = f.networks && hasSite;

  const lines = [];
  if (hasSite) lines.push({ label: site.label, price: site.price, base: true });

  if (f.googleBusiness) {
    lines.push({ label: 'Google Business — optimisation complète de la fiche', price: GB_BASE, base: true });
    GB_OPTIONS.filter((o) => f.gbOptions.includes(o.id))
      .forEach((o) => lines.push({ label: o.label, price: o.price }));
  }

  let oneLow = lines.reduce((s, l) => s + l.price, 0);

  const platCount = Math.max(1, f.platforms.length);
  const gridMonthly = NETWORK_BASE + NETWORK_EXTRA * (platCount - 1);

  const monthlyLines = [];
  if (f.networks) {
    monthlyLines.push({
      label: combined
        ? `Abonnement réseaux sociaux — offre combinée site + réseaux (${platCount} plateforme${platCount > 1 ? 's' : ''})`
        : `Gestion réseaux sociaux — ${platCount} plateforme${platCount > 1 ? 's' : ''}`,
      price: combined ? Math.max(COMBO_MONTHLY, gridMonthly) : gridMonthly,
      base: true,
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

  return {
    lines,
    monthlyLines,
    oneLow,
    monthly,
    combined,
    custom: !hasSite && !f.googleBusiness && !f.networks,
  };
}

/* ── Page ──────────────────────────────────────────────────────────────────── */
export default function EstimerMaDemandePage() {
  const canonicalUrl = 'https://visioflow.fr/estimer-ma-demande';

  const [form, setForm] = useState(EMPTY_FORM);
  const [phase, setPhase] = useState('form'); // form | sending | done | error
  const [touched, setTouched] = useState(false);
  const resultRef = useRef(null);

  const estimate = computeEstimate(form);

  const set = (field, value) => setForm((f) => ({ ...f, [field]: value }));
  const toggleIn = (field, id) =>
    setForm((f) => ({
      ...f,
      [field]: f[field].includes(id) ? f[field].filter((v) => v !== id) : [...f[field], id],
    }));

  const contactOk = digits(form.phone) >= 8 || EMAIL_RE.test(form.email);
  const formValid =
    form.firstName.trim().length >= 2 &&
    form.lastName.trim().length >= 2 &&
    contactOk;

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
            monthly: estimate.monthly,
            combined: estimate.combined,
            custom: estimate.custom,
          },
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

  /* Bloc prix réutilisé : affiché en direct dans le formulaire PUIS après l'envoi */
  const priceBlock = (
    <>
      <div className="vf2-estimate-box">
        <div className="vf2-estimate-label">Prix indicatif de votre projet</div>
        {estimate.custom ? (
          <>
            <div className="vf2-estimate-total">Sur devis</div>
            <div className="vf2-estimate-sub">Votre besoin est spécifique — nous vous proposons un chiffrage précis lors de notre premier échange.</div>
          </>
        ) : (
          <>
            {estimate.oneLow > 0 && (
              <div className="vf2-estimate-total">
                <span className="vf2-estimate-from">à partir de</span> {money(estimate.oneLow)}
              </div>
            )}
            {estimate.monthly > 0 && (
              <div className={estimate.oneLow > 0 ? 'vf2-est-monthly' : 'vf2-estimate-total'}>
                {estimate.oneLow > 0 && '+ '}à partir de {money(estimate.monthly)} / mois
              </div>
            )}
            <div className="vf2-estimate-sub">Prix de départ indicatif, affiné ensemble par téléphone.</div>
          </>
        )}
      </div>

      {(estimate.lines.length > 0 || estimate.monthlyLines.length > 0) && (
        <ul className="vf2-estimate-lines">
          {estimate.lines.map((l, i) => (
            <li key={`one-${i}`}>
              <span className="vf2-estimate-line-label">{l.label}</span>
              <span className="vf2-estimate-line-price">
                {l.base ? `à partir de ${l.price}€` : `+${l.price}€`}
              </span>
            </li>
          ))}
          {estimate.monthlyLines.map((l, i) => (
            <li key={`month-${i}`}>
              <span className="vf2-estimate-line-label">{l.label}</span>
              <span className="vf2-estimate-line-price">à partir de {l.price}€ /mois</span>
            </li>
          ))}
        </ul>
      )}

      {estimate.combined && (
        <div className="vf2-est-combo">
          <Sparkles size={16} />
          Offre combinée site + réseaux sociaux : à partir de {money(COMBO_ONE_TIME)} une fois + à partir de {money(COMBO_MONTHLY)} par mois.
        </div>
      )}
    </>
  );

  return (
    <>
      <Head>
        <title>Estimer ma demande — Visioflow | Prix immédiat, sites dès 400€</title>
        <meta
          name="description"
          content="Décrivez votre projet en 1 minute et voyez votre prix se calculer en direct avant même l'envoi : site vitrine dès 400€, e-commerce dès 600€ (référencement Google inclus), Google Business, réseaux sociaux."
        />
        <meta name="keywords" content="estimation site web, devis site internet, prix création site, estimateur prix site web, devis réseaux sociaux" />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Estimer ma demande — Visioflow" />
        <meta property="og:description" content="Décrivez votre projet, voyez votre prix en direct avant l'envoi. Sites dès 400€, référencement Google inclus. Gratuit et sans engagement." />
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
              Quelques informations, et notre estimateur calcule
              votre prix en direct — vous le voyez <strong>avant même d&apos;envoyer</strong> votre
              demande. Sans engagement.
            </p>
            <div className="vf2-trust-row">
              <div className="vf2-trust-item"><Clock size={20} />1 minute chrono</div>
              <div className="vf2-trust-item"><Zap size={20} />Prix affiché avant l&apos;envoi</div>
              <div className="vf2-trust-item"><Check size={20} />Sans engagement</div>
            </div>
          </div>
        </section>

        {/* Formulaire / Résultat */}
        <section className="vf2-section" style={{ paddingTop: '10px' }}>
          <div className="vf2-container" style={{ maxWidth: '780px' }}>

            {phase === 'done' ? (
              /* ── Confirmation : envoi réussi ── */
              <div className="vf2-est-card" ref={resultRef}>
                <div className="vf2-est-success-icon"><Rocket size={30} /></div>
                <h2 className="vf2-h3" style={{ marginBottom: '8px', textAlign: 'center' }}>
                  Merci {form.firstName || ''} ! Votre demande est partie.
                </h2>
                <p className="vf2-text" style={{ textAlign: 'center' }}>
                  Nous revenons vers vous <strong>sous 24h ouvrées</strong> pour affiner ensemble votre
                  projet — et nous ajusterons votre site <strong>jusqu&apos;à votre satisfaction totale</strong>.
                </p>

                {priceBlock}

                <div className="vf2-est-assurance" style={{ marginTop: '18px' }}>
                  <div className="vf2-est-assurance-item"><SearchCheck size={18} />Référencement Google inclus avec votre site</div>
                  <div className="vf2-est-assurance-item"><HeartHandshake size={18} />Modifications jusqu&apos;à satisfaction totale</div>
                </div>
              </div>
            ) : (
              /* ── Formulaire + estimation en direct ── */
              <div className="vf2-est-card">
                <p className="vf2-wiz-hint" style={{ marginTop: 0 }}>
                  Les champs marqués <span className="vf2-req">*</span> sont <strong>obligatoires</strong>,
                  les mentions <span className="vf2-opt">(facultatif)</span> sont à votre guise.
                </p>

                <div className="vf2-est-section-title">
                  <span className="vf2-est-step-num">1</span>
                  Vos coordonnées
                </div>

                <div className="vf2-wiz-row">
                  <div className="vf2-form-group">
                    <label className="vf2-form-label" htmlFor="em-firstname">Prénom <span className="vf2-req">*</span> <span className="vf2-opt">(obligatoire)</span></label>
                    <input
                      id="em-firstname" className="vf2-form-input" placeholder="Ex : Marie"
                      value={form.firstName} onChange={(e) => set('firstName', e.target.value)}
                    />
                    {touched && form.firstName.trim().length < 2 && <div className="vf2-field-error">Prénom requis</div>}
                  </div>
                  <div className="vf2-form-group">
                    <label className="vf2-form-label" htmlFor="em-lastname">Nom <span className="vf2-req">*</span> <span className="vf2-opt">(obligatoire)</span></label>
                    <input
                      id="em-lastname" className="vf2-form-input" placeholder="Ex : Dupont"
                      value={form.lastName} onChange={(e) => set('lastName', e.target.value)}
                    />
                    {touched && form.lastName.trim().length < 2 && <div className="vf2-field-error">Nom requis</div>}
                  </div>
                </div>

                <div className="vf2-wiz-row">
                  <div className="vf2-form-group">
                    <label className="vf2-form-label" htmlFor="em-phone">Téléphone <span className="vf2-req">*</span> <span className="vf2-opt">(téléphone ou email, au moins un)</span></label>
                    <input
                      id="em-phone" type="tel" className="vf2-form-input" placeholder="06 12 34 56 78"
                      value={form.phone} onChange={(e) => set('phone', e.target.value)}
                    />
                  </div>
                  <div className="vf2-form-group">
                    <label className="vf2-form-label" htmlFor="em-email">Email <span className="vf2-req">*</span> <span className="vf2-opt">(téléphone ou email, au moins un)</span></label>
                    <input
                      id="em-email" type="email" className="vf2-form-input" placeholder="marie@entreprise.fr"
                      value={form.email} onChange={(e) => set('email', e.target.value)}
                    />
                  </div>
                </div>
                <p className="vf2-wiz-hint">Obligatoire : laissez au moins un téléphone <em>ou</em> un email pour qu&apos;on puisse vous joindre.</p>
                {touched && !contactOk && <div className="vf2-field-error">Renseignez un téléphone ou un email valide</div>}

                <div className="vf2-est-section-title">
                  <span className="vf2-est-step-num">2</span>
                  Votre projet
                </div>

                <div className="vf2-form-group">
                  <div className="vf2-form-label"><span className="vf2-req">*</span> Quel type de site souhaitez-vous ? <span className="vf2-opt">(obligatoire)</span></div>
                  <div className="vf2-choice-grid">
                    {SITE_TYPES.map((t) => (
                      <button
                        key={t.id} type="button"
                        className={`vf2-choice ${form.siteType === t.id ? 'on' : ''}`}
                        onClick={() => set('siteType', t.id)}
                      >
                        <span className="vf2-choice-radio" />
                        <span className="vf2-choice-label">{t.label}</span>
                        <span className="vf2-choice-desc">{t.desc}</span>
                        <span className="vf2-choice-price">{t.price > 0 ? `à partir de ${t.price}€` : '—'}</span>
                      </button>
                    ))}
                  </div>
                  <p className="vf2-wiz-hint"><SearchCheck size={13} /> Le <strong>référencement Google est inclus</strong> avec le site internet que vous commandez.</p>
                </div>

                <div className="vf2-form-group">
                  <div className="vf2-form-label">Google Business <span className="vf2-opt">(facultatif)</span></div>
                  <div className="vf2-chips">
                    <button
                      type="button"
                      className={`vf2-chip ${form.googleBusiness ? 'on' : ''}`}
                      onClick={() => set('googleBusiness', !form.googleBusiness)}
                    >
                      {form.googleBusiness && <Check size={14} strokeWidth={3} />}
                      <MapPin size={14} style={{ verticalAlign: '-2px', marginRight: '2px' }} />
                      Optimisation complète de ma fiche Google Business
                      <span className="vf2-chip-price">à partir de {GB_BASE}€</span>
                    </button>
                  </div>

                  {form.googleBusiness && (
                    <div className="vf2-est-subpanel">
                      <div className="vf2-form-label" style={{ marginBottom: '10px' }}>
                        Compléments Google Business <span className="vf2-opt">(facultatif)</span>
                      </div>
                      <div className="vf2-chips">
                        {GB_OPTIONS.map((o) => (
                          <button
                            key={o.id} type="button"
                            className={`vf2-chip ${form.gbOptions.includes(o.id) ? 'on' : ''}`}
                            onClick={() => toggleIn('gbOptions', o.id)}
                          >
                            {form.gbOptions.includes(o.id) && <Check size={14} strokeWidth={3} />}
                            {o.label}
                            <span className="vf2-chip-price">+{o.price}€</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="vf2-form-group">
                  <div className="vf2-form-label">Réseaux sociaux <span className="vf2-opt">(facultatif — abonnement mensuel)</span></div>
                  <div className="vf2-chips">
                    <button
                      type="button"
                      className={`vf2-chip ${form.networks ? 'on' : ''}`}
                      onClick={() => set('networks', !form.networks)}
                    >
                      {form.networks && <Check size={14} strokeWidth={3} />}
                      <Smartphone size={14} style={{ verticalAlign: '-2px', marginRight: '2px' }} />
                      Gestion de mes réseaux sociaux
                      <span className="vf2-chip-price">à partir de {NETWORK_BASE}€/mois</span>
                    </button>
                  </div>

                  {form.networks && (
                    <div className="vf2-est-subpanel">
                      <div className="vf2-form-label" style={{ marginBottom: '10px' }}>
                        Plateformes à gérer <span className="vf2-opt">(facultatif — la 1re incluse, puis +{NETWORK_EXTRA}€/mois chacune)</span>
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
                      </div>
                    </div>
                  )}
                </div>

                <div className="vf2-form-group">
                  <div className="vf2-form-label">Délai <span className="vf2-opt">(facultatif)</span></div>
                  <div className="vf2-chips">
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
                </div>

                <div className="vf2-est-section-title">
                  <span className="vf2-est-step-num">3</span>
                  Décrivez votre projet
                </div>

                <div className="vf2-form-group">
                  <label className="vf2-form-label" htmlFor="em-desc">
                    Une petite description du travail voulu <span className="vf2-opt">(facultatif)</span>
                  </label>
                  <textarea
                    id="em-desc" className="vf2-form-textarea" style={{ minHeight: '110px' }}
                    placeholder="Ex : Je suis restaurateur à Lyon, je veux un site avec ma carte, la réservation en ligne, et que vous gériez mon Instagram…"
                    value={form.description}
                    onChange={(e) => set('description', e.target.value)}
                  />
                  <p className="vf2-wiz-hint">
                    <Sparkles size={13} />
                    La description est <strong>facultative</strong> et <strong>ne modifie pas le prix estimé</strong> :
                    l&apos;estimation dépend uniquement de vos choix cochés ci-dessus.
                  </p>
                </div>

                {/* ── Estimation en direct : le prix se calcule ici, AVANT l'envoi ── */}
                <div className="vf2-est-section-title">
                  <span className="vf2-est-step-num"><Calculator size={14} /></span>
                  Votre estimation en direct
                </div>

                {priceBlock}

                <p className="vf2-wiz-hint" style={{ marginTop: '14px' }}>
                  <SearchCheck size={13} /> Référencement Google <strong>inclus</strong> avec votre site internet ·{' '}
                  <HeartHandshake size={13} /> Tant que vous n&apos;êtes pas totalement satisfait du rendu final,
                  nous <strong>continuons de modifier votre site</strong>.
                </p>

                {phase === 'sending' ? (
                  <button type="button" className="vf2-btn-primary vf2-launch-btn" disabled>
                    <Loader2 size={18} className="vf2-spin" /> Envoi en cours…
                  </button>
                ) : (
                  <button
                    type="button"
                    className="vf2-btn-primary vf2-launch-btn"
                    onClick={submit}
                  >
                    <Send size={18} /> Envoyer ma demande avec cette estimation
                  </button>
                )}

                {phase === 'error' && (
                  <div className="vf2-field-error" style={{ textAlign: 'center', marginTop: '10px' }}>
                    L&apos;envoi a échoué — réessayez dans un instant.
                  </div>
                )}

                <p className="vf2-wiz-hint" style={{ textAlign: 'center' }}>
                  Votre prix est déjà calculé ci-dessus. Envoi gratuit et sans engagement — réponse sous 24h ouvrées.
                </p>
              </div>
            )}

            {/* Rassurance sous le formulaire */}
            <div className="vf2-est-assurance">
              <div className="vf2-est-assurance-item"><Globe size={18} />Sites 100% adaptables à partir de 400€</div>
              <div className="vf2-est-assurance-item"><SearchCheck size={18} />Référencement Google inclus</div>
              <div className="vf2-est-assurance-item"><MapPin size={18} />Google Business à partir de 50€</div>
              <div className="vf2-est-assurance-item"><Smartphone size={18} />Réseaux à partir de 100€/mois</div>
              <div className="vf2-est-assurance-item"><HeartHandshake size={18} />Modifications jusqu&apos;à satisfaction totale</div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
