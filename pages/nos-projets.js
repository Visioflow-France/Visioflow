import { useState } from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { ExternalLink, Rocket, BadgeCheck } from 'lucide-react';
import { db } from '../lib/firebase-admin';

/* Les réalisations affichées proviennent uniquement du dashboard admin
   (collection Firestore « projects », publiées via /admin). */
const CURATED_PROJECTS = [];

const normalizeTitle = (t) =>
  String(t || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]/g, '');

export async function getServerSideProps() {
  let projects = [];

  try {
    const snapshot = await db.collection('projects')
      .where('published', '==', true)
      .get();

    projects = snapshot.docs.map(doc => {
      const d = doc.data();
      const created = d.createdAt?.toDate ? d.createdAt.toDate() : (d.createdAt ? new Date(d.createdAt) : null);
      return {
        id: doc.id,
        title: d.title || '',
        url: d.url || d.link || '',
        category: d.category || 'vitrine',
        description: d.description || '',
        createdAt: created ? created.toISOString() : null,
        source: 'dashboard',
      };
    });
  } catch (e) {
    // Firebase indisponible : la page affiche au minimum nos réalisations.
    console.error('nos-projets:', e);
  }

  // Base : nos réalisations, complétées par celles du dashboard sans doublon.
  const existing = new Set(projects.map((p) => normalizeTitle(p.title)));
  const curated = CURATED_PROJECTS.filter((p) => !existing.has(normalizeTitle(p.title)));
  projects = [...projects, ...curated];

  // Réalisations intégrées (sans date) d'abord, puis projets du dashboard, du plus récent au plus ancien.
  projects.sort((a, b) => {
    if (!a.createdAt && b.createdAt) return -1;
    if (a.createdAt && !b.createdAt) return 1;
    return new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
  });

  return { props: { projects } };
}

const CATEGORIES = {
  vitrine: { label: 'Sites Vitrines', emoji: '🌐' },
  ecommerce: { label: 'Vente en ligne', emoji: '🛒' },
  google: { label: 'Pages Google', emoji: '📍' },
  reseaux: { label: 'Gestion réseaux', emoji: '📱' },
};

export default function ProjectsPage({ projects = [] }) {
  const [filter, setFilter] = useState('all');

  const available = Object.keys(CATEGORIES).filter(cat =>
    projects.some(p => p.category === cat)
  );
  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  const canonicalUrl = "https://visioflow.fr/nos-projets";

  const stats = [
    { value: 'Quelques semaines', label: 'Délai moyen' },
    { value: '100%', label: 'Satisfaction' },
  ];

  return (
    <>
      <Head>
        <title>Nos Projets — VisioFlow | Nos réalisations web et digitales</title>
        <meta
          name="description"
          content="Découvrez quelques exemples de nos réalisations : sites vitrines, boutiques en ligne avec commandes, pages Google et gestion de réseaux sociaux. Chaque projet est adapté aux besoins de nos clients."
        />
        <meta name="keywords" content="projets web, réalisations, portfolio, sites web créés, exemples" />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Nos Projets — VisioFlow" />
        <meta property="og:description" content="Découvrez quelques exemples de nos réalisations web et digitales." />
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
              Nos Réalisations
            </div>
            <h1 className="vf2-h1">
              Des projets qui <span className="vf2-serif-italic">inspirent</span>
            </h1>
            <p className="vf2-text">
              Restaurants, snacks, artisans, marques premium : voici <strong>quelques
              exemples</strong> de nos réalisations, chacune pensée sur mesure pour
              son activité.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="vf2-section" style={{ paddingTop: '60px' }}>
          <div className="vf2-container">
            <div className="vf2-stats-strip">
              {stats.map((stat, index) => (
                <div key={index} className="vf2-card vf2-stat-card">
                  <div className="vf2-stat-value">{stat.value}</div>
                  <div className="vf2-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="vf2-section vf2-section-alt">
          <div className="vf2-container">
            {available.length > 1 && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', marginBottom: '40px' }}>
                <button
                  onClick={() => setFilter('all')}
                  className="vf2-btn-primary"
                  style={{
                    padding: '10px 22px',
                    borderRadius: '999px',
                    fontSize: '14px',
                    cursor: 'pointer',
                    border: 'none',
                    opacity: filter === 'all' ? 1 : 0.55,
                  }}
                >
                  Tous
                </button>
                {available.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className="vf2-btn-primary"
                    style={{
                      padding: '10px 22px',
                      borderRadius: '999px',
                      fontSize: '14px',
                      cursor: 'pointer',
                      border: 'none',
                      opacity: filter === cat ? 1 : 0.55,
                    }}
                  >
                    {CATEGORIES[cat].emoji} {CATEGORIES[cat].label}
                  </button>
                ))}
              </div>
            )}

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
              {filtered.map((project) => {
                const inner = (
                  <>
                    <span style={{ fontSize: '40px', lineHeight: 1 }}>
                      {CATEGORIES[project.category]?.emoji || '🌐'}
                    </span>
                    <h3 style={{ fontSize: '18px', fontWeight: 700, margin: 0 }}>
                      {project.title}
                    </h3>
                    {project.description && (
                      <span style={{ fontSize: '13.5px', opacity: 0.75, lineHeight: 1.5 }}>
                        {project.description}
                      </span>
                    )}
                    {project.url ? (
                      <span style={{ fontSize: '13px', color: '#0071E3', display: 'flex', alignItems: 'center', gap: '6px', wordBreak: 'break-all' }}>
                        <ExternalLink size={14} />
                        Visiter le site
                      </span>
                    ) : (
                      <span style={{ fontSize: '12.5px', opacity: 0.6, display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <BadgeCheck size={14} />
                        Réalisation VisioFlow
                      </span>
                    )}
                  </>
                );

                const cardStyle = {
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  gap: '12px',
                  padding: '32px 24px',
                };

                return project.url ? (
                  <a
                    key={project.id}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="vf2-card vf2-stat-card"
                    style={{ ...cardStyle, textDecoration: 'none' }}
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={project.id} className="vf2-card vf2-stat-card" style={cardStyle}>
                    {inner}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
