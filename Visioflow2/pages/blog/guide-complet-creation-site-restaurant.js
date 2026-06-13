import Head from 'next/head';
import Link from 'next/link';

const canonicalUrl = "https://visioflow.fr/blog/guide-complet-creation-site-restaurant";

export default function BlogGuideComplet() {
  return (
    <>
      <Head>
        <title>Guide Complet Création Site Web Restaurant | 10 Étapes 2025</title>
        <meta
          name="description"
          content="Guide complet pour créer votre site web restaurant en 2025. 10 étapes détaillées, conseils d'experts, erreurs à éviter. Pack Essentiel 150€ ou Premium 490€ sans abonnement."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Guide Complet Création Site Web Restaurant | 10 Étapes 2025" />
        <meta property="og:description" content="Guide complet pour créer votre site web restaurant en 2025. 10 étapes détaillées, conseils d'experts, erreurs à éviter. Pack Essentiel 150€ ou Premium 490€ sans abonnement." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="VisioFlow" />
        <meta property="article:published_time" content="2025-05-23T00:00:00Z" />
        <meta property="article:modified_time" content="2025-05-23T00:00:00Z" />
        <meta property="article:section" content="Création Site Web" />
        <meta property="article:tag" content="création site restaurant" />
        <meta property="article:tag" content="site web restaurant" />
        <meta property="article:tag" content="commandes en ligne" />

        {/* Article Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Guide Complet Création Site Web Restaurant | 10 Étapes 2025",
              "image": "https://visioflow.fr/blog/guide-complet-creation-site-restaurant.jpg",
              "datePublished": "2025-05-23T00:00:00Z",
              "dateModified": "2025-05-23T00:00:00Z",
              "author": {
                "@type": "Person",
                "name": "Yanis Boudadour",
                "url": "https://visioflow.fr/a-propos"
              },
              "publisher": {
                "@type": "Organization",
                "name": "VisioFlow",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://visioflow.fr/logo.png"
                }
              },
              "description": "Guide complet pour créer votre site web restaurant en 2026. 10 étapes détaillées, conseils d'experts, erreurs à éviter.",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": canonicalUrl
              }
            })
          }}
        />

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Combien coûte un site web pour restaurant ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Un site web pour restaurant coûte généralement entre 150€ et 490€ chez VisioFlow. Pack Essentiel 150€ pour site vitrine, Pack Premium 490€ pour site avec commandes en ligne. Ces prix sont uniques, sans abonnement, et incluent l'hébergement à vie."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Combien de temps faut-il pour créer un site web restaurant ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Avec VisioFlow, votre site web restaurant est livré en 48 heures après confirmation de votre commande. Notre processus optimisé garantit une livraison rapide sans compromis sur la qualité. Les agences web traditionnelles prennent généralement 2-4 semaines."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Quelles fonctionnalités doit avoir un site web restaurant ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Un bon site web restaurant doit inclure : un menu digital avec photos, horaires d'ouverture clairement affichés, informations de contact (téléphone, email, adresse), photos du restaurant et des plats, géolocalisation avec Google Maps, et idéalement un système de commandes en ligne avec paiement sécurisé."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Est-ce que mon site restaurant doit être optimisé mobile ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolument. 70% de vos clients recherchent un restaurant sur mobile. Un site non optimisé mobile perd 80% de ces prospects. Google privilégie les sites mobile-friendly dans ses résultats de recherche. Tous les sites VisioFlow sont 100% responsive et optimisés mobile."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Dois-je payer des frais mensuels pour mon site web restaurant ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Non, pas nécessairement. Chez VisioFlow, nos packs sont en paiement unique (150€ ou 490€). L'hébergement est inclus à vie, sans abonnement mensuel. Attention : certaines solutions comme Wix ou Squarespace exigent des abonnements mensuels (20-40€/mois) qui coûtent cher sur le long terme."
                  }
                }
              ]
            })
          }}
        />

        {/* Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Accueil",
                  "item": "https://visioflow.fr/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Blog",
                  "item": "https://visioflow.fr/blog"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Guide Complet Création Site Web Restaurant",
                  "item": canonicalUrl
                }
              ]
            })
          }}
        />

        <style>{`
          *{box-sizing:border-box;margin:0;padding:0}
          body{font-family:'Inter Tight',-apple-system,BlinkMacSystemFont,sans-serif;background:#0f172a;color:#f1f5f9;line-height:1.8}
          .container{max-width:900px;margin:0 auto;padding:0 24px}
          .hero{padding:80px 24px 60px;text-align:center}
          .hero-category{display:inline-block;padding:6px 16px;background:rgba(0,113,227,.15);border:1px solid rgba(0,113,227,.3);border-radius:50px;color:#0071E3;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.08em;margin-bottom:20px}
          .hero-title{font-family:'Fraunces',sans-serif;font-size:clamp(32px,5vw,48px);font-weight:800;color:#fff;line-height:1.2;margin-bottom:20px;letter-spacing:-1px}
          .hero-meta{color:#94a3b8;font-size:14px;margin-bottom:40px}
          .hero-meta span{margin:0 10px}
          .content{padding:60px 24px 100px}
          .article{background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.1);border-radius:24px;padding:48px}
          .article h2{font-family:'Fraunces',sans-serif;font-size:clamp(24px,4vw,32px);font-weight:700;color:#fff;margin:48px 0 24px;letter-spacing:-.5px}
          .article h2:first-child{margin-top:0}
          .article h3{font-size:20px;font-weight:600;color:#fff;margin:32px 0 16px}
          .article h4{font-size:18px;font-weight:600;color:#fff;margin:24px 0 12px}
          .article p{color:#cbd5e1;font-size:16px;line-height:1.8;margin-bottom:20px}
          .article ul,.article ol{color:#cbd5e1;font-size:16px;line-height:1.8;margin-bottom:24px;padding-left:24px}
          .article li{margin-bottom:12px}
          .article strong{color:#fff;font-weight:600}
          .article a{color:#0071E3;text-decoration:none;transition:color .2s}
          .article a:hover{color:#38bdf8}
          .article blockquote{border-left:4px solid #0071E3;padding-left:20px;margin:24px 0;color:#94a3b8;font-style:italic}
          .article code{background:rgba(0,113,227,.15);color:#0071E3;padding:4px 8px;border-radius:6px;font-size:14px;font-family:'JetBrains Mono','Fira Code',monospace}
          .article pre{background:rgba(0,0,0,.3);border:1px solid rgba(255,255,255,.1);border-radius:12px;padding:20px;overflow-x:auto;margin:24px 0}
          .article pre code{background:none;padding:0;color:#cbd5e1}
          .article img{max-width:100%;height:auto;border-radius:12px;margin:24px 0}
          .article hr{border:none;border-top:1px solid rgba(255,255,255,.1);margin:48px 0}
          .cta{background:linear-gradient(135deg,#0071E3 0%,#38bdf8 100%);border-radius:24px;padding:48px;margin:40px 0;text-align:center}
          .cta h3{font-family:'Fraunces',sans-serif;font-size:clamp(24px,4vw,32px);font-weight:800;color:#fff;margin-bottom:16px}
          .cta p{color:rgba(255,255,255,.8);font-size:16px;margin-bottom:24px}
          .cta-btn{display:inline-block;padding:16px 32px;border-radius:50px;background:#fff;color:#0071E3;font-size:16px;font-weight:700;text-decoration:none;transition:all .3s}
          .cta-btn:hover{transform:translateY(-2px)}
          .nav{background:rgba(15,23,42,.9);backdrop-filter:blur(10px);position:fixed;top:0;left:0;right:0;z-index:100;padding:16px 0;border-bottom:1px solid rgba(255,255,255,.1)}
          .nav-content{max-width:1200px;margin:0 auto;padding:0 24px;display:flex;justify-content:space-between;align-items:center}
          .logo{font-family:'Fraunces',sans-serif;font-size:24px;font-weight:900;color:#fff}
          .logo span{color:#0071E3}
          .nav-links{display:flex;gap:24px}
          .nav-links a{color:#94a3b8;font-size:14px;font-weight:500;text-decoration:none;transition:color .2s}
          .nav-links a:hover{color:#fff}
          .nav-cta{background:#0071E3;color:#fff;padding:10px 20px;border-radius:50px;font-weight:600;font-size:14px;text-decoration:none;transition:all .2s}
          .nav-cta:hover{background:#0056b3;transform:translateY(-2px)}
          .footer{background:#0f172a;padding:60px 24px;border-top:1px solid rgba(255,255,255,.1);text-align:center;color:#64748b;font-size:13px}
          .breadcrumbs{display:flex;gap:8px;margin-bottom:24px;font-size:13px;color:#64748b}
          .breadcrumbs a{color:'#64748b;text-decoration:none;transition:color .2s}
          .breadcrumbs a:hover{color:'#0071E3'}
          .toc{background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.1);border-radius:16px;padding:24px;margin:40px 0}
          .toc-title{font-family:'Fraunces',sans-serif;font-size:18px;font-weight:700;color:#fff;margin-bottom:16px}
          .toc-list{list-style:none;padding:0}
          .toc-list a{color:#94a3b8;text-decoration:none;display:block;padding:8px 0;border-bottom:1px solid rgba(255,255,255,.05);transition:color .2s}
          .toc-list a:hover{color:#0071E3}
          .toc-list a:last-child{border-bottom:none}
        `}</style>
      </Head>

      {/* Navigation */}
      <nav className="nav">
        <div className="nav-content">
          <Link href="/" className="logo"><img src="/logo.svg" alt="VisioFlow" width="32" height="32" />Visio<span>flow</span></Link>
          <div className="nav-links">
            <Link href="/landing">Comment ça marche</Link>
            <Link href="/tarifs">Tarifs</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/temoignages">Témoignages</Link>
          </div>
          <Link href="/paiement" className="nav-cta">Commencer →</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero">
        <div className="hero-category">Guide Création Site</div>
        <h1 className="hero-title">Guide Complet Création Site Web Restaurant en 2026</h1>
        <div className="hero-meta">
          <span>📅 23 mai 2026</span>
          <span>⏱️ 15 min de lecture</span>
          <span>👁️ 2,345 lectures</span>
        </div>
      </div>

      {/* Content */}
      <div className="container content">
        <div className="article">
          {/* Table of Contents */}
          <div className="toc">
            <div className="toc-title">Sommaire</div>
            <ul className="toc-list">
              <li><a href="#introduction">Introduction</a></li>
              <li><a href="#etape1">Étape 1 : Définir vos objectifs</a></li>
              <li><a href="#etape2">Étape 2 : Choisir le bon type de site</a></li>
              <li><a href="#etape3">Étape 3 : Sélectionner vos fonctionnalités</a></li>
              <li><a href="#etape4">Étape 4 : Préparer votre contenu</a></li>
              <li><a href="#etape5">Étape 5 : Choisir votre partenaire technique</a></li>
              <li><a href="#etape6">Étape 6 : Créer votre design</a></li>
              <li><a href="#etape7">Étape 7 : Optimiser pour mobile</a></li>
              <li><a href="#etape8">Étape 8 : Ajouter les fonctionnalités techniques</a></li>
              <li><a href="#etape9">Étape 9 : Optimiser pour le SEO</a></li>
              <li><a href="#etape10">Étape 10 : Lancer et faire connaître</a></li>
              <li><a href="#conclusion">Conclusion</a></li>
            </ul>
          </div>

          {/* Introduction */}
          <h2 id="introduction">Introduction</h2>
          <p>
            En 2026, un site web restaurant n'est plus une option, c'est une nécessité. 70% des clients recherchent un restaurant sur mobile avant de se déplacer. 80% abandonnent si le site n'est pas optimisé pour leur smartphone. Les chiffres sont clairs : sans site web professionnel, vous perdez des clients chaque jour.
          </p>
          <p>
            Ce guide complet vous accompagne étape par étape dans la création de votre site web restaurant. Que vous soyez un petit bistro, une grande brasserie ou un restaurant gastronomique, ces conseils vous aideront à créer un site qui attire, convertit et fidélise vos clients.
          </p>

          {/* Étape 1 */}
          <h2 id="etape1">Étape 1 : Définir vos objectifs</h2>
          <p>
            Avant de commencer, il est essentiel de clarifier ce que vous souhaitez accomplir avec votre site web. Un site sans objectifs clairs risque d'être mal conçu et inefficace.
          </p>
          <h3>Objectifs communs pour restaurants</h3>
          <ul>
            <li><strong>Présenter votre restaurant</strong> : Menu, horaires, photos, ambiance</li>
            <li><strong>Accepter les commandes en ligne</strong> : Panier, paiement, gestion des commandes</li>
            <li><strong>Améliorer le SEO local</strong> : Être trouvé sur Google Maps et les recherches locales</li>
            <li><strong>Faciliter les réservations</strong> : Calendrier en ligne, confirmation automatique</li>
            <li><strong>Attirer de nouveaux clients</strong> : Touristes, locaux, professionnels</li>
          </ul>
          <blockquote>
            "Un site web avec des objectifs clairs convertit 3x mieux qu'un site sans direction." — Yanis Boudadour, Fondateur VisioFlow
          </blockquote>

          {/* Étape 2 */}
          <h2 id="etape2">Étape 2 : Choisir le bon type de site</h2>
          <p>
            Il existe deux types principaux de sites web pour restaurants, chacun avec ses avantages.
          </p>
          <h3>Site vitrine vs Site avec commandes en ligne</h3>
          <p>
            <strong>Site vitrine (Pack Essentiel - 150€)</strong> : Idéal pour présenter votre restaurant, votre menu et vos informations. Simple, rapide, économique. Convient aux restaurants qui reçoivent principalement des clients sur place.
          </p>
          <p>
            <strong>Site avec commandes en ligne (Pack Premium - 490€)</strong> : Ajoute la possibilité d'accepter des commandes directement sur votre site. Panier fonctionnel, paiement sécurisé via Stripe, panel admin pour gérer les commandes. Convient aux restaurants qui livrent ou acceptent les commandes à emporter.
          </p>

          {/* Étape 3 */}
          <h2 id="etape3">Étape 3 : Sélectionner vos fonctionnalités</h2>
          <p>
            Les fonctionnalités de votre site dépendent de vos objectifs. Voici les fonctionnalités essentielles pour 2026.
          </p>
          <h3>Fonctionnalités essentielles</h3>
          <ul>
            <li><strong>Menu digital</strong> : Présentation claire avec photos, prix et descriptions</li>
            <li><strong>Horaires d'ouverture</strong> : Affichés par jour de la semaine</li>
            <li><strong>Informations de contact</strong> : Téléphone, email, adresse, formulaire</li>
            <li><strong>Carte interactive</strong> : Google Maps avec directions</li>
            <li><strong>Photos et galerie</strong> : Plats, décoration, ambiance</li>
            <li><strong>Responsive mobile</strong> : Parfait sur tous les écrans</li>
          </ul>
          <h3>Fonctionnalités avancées (Pack Premium)</h3>
          <ul>
            <li><strong>Commandes en ligne</strong> : Panier, paiement, notification</li>
            <li><strong>Panel admin</strong> : Gérer menu, horaires et commandes</li>
            <li><strong>Intégration plateformes</strong> : UberEats, Deliveroo, Just Eat</li>
            <li><strong>Réservations en ligne</strong> : Calendrier, confirmation automatique</li>
            <li><strong>Analytics avancés</strong> : Statistiques commandes, revenus, performance</li>
          </ul>

          {/* Étape 4 */}
          <h2 id="etape4">Étape 4 : Préparer votre contenu</h2>
          <p>
            Le contenu est le cœur de votre site web. Un bon contenu attire, engage et convertit les visiteurs.
          </p>
          <h3>Contenu à préparer</h3>
          <ul>
            <li><strong>Photos</strong> : Plats en haute qualité, décoration, ambiance, équipe (4000x3000px, compression JPEG 80%)</li>
            <li><strong>Menu</strong> : Entrées, plats, desserts, boissons avec descriptions appétissantes</li>
            <li><strong>Histoire</strong> : Votre histoire, vos valeurs, votre expertise</li>
            <li><strong>Horaires</strong> : Ouverture par jour de la semaine, exceptions (jours fériés)</li>
            <li><strong>Contact</strong> : Téléphone, email, adresse, réseaux sociaux</li>
          </ul>
          <blockquote>
            "Un plat mal photographié perd 60% de son attrait. Investissez dans de bonnes photos." — Marie Dupont, Lead Designer VisioFlow
          </blockquote>

          {/* Étape 5 */}
          <h2 id="etape5">Étape 5 : Choisir votre partenaire technique</h2>
          <p>
            Vous avez plusieurs options pour créer votre site web. Chaque option a ses avantages et ses inconvénients.
          </p>
          <h3>Options disponibles</h3>
          <ul>
            <li><strong>Faire soi-même (WordPress, Wix, Squarespace)</strong> : Économique (0-50€) mais demande du temps et des compétences techniques. Abonnements mensuels (20-40€).</li>
            <li><strong>Agence web traditionnelle</strong> : Sur mesure (2000-10,000€) mais délai de 2-4 semaines. Souvent des frais mensuels d'hébergement.</li>
            <li><strong>Solution spécialisée restauration (VisioFlow)</strong> : Adapté à vos besoins (150-490€), livré en 48 heures, sans abonnement. Hébergement à vie inclus.</li>
          </ul>

          {/* CTA */}
          <div className="cta">
            <h3>Prêt à créer votre site web restaurant ?</h3>
            <p>
              Choisissez entre le Pack Essentiel (150€) ou Premium (490€). Livré en 48 heures,
              sans abonnement. Hébergement à vie inclus.
            </p>
            <div style={{display:'flex',gap:'16px',justifyContent:'center',flexWrap:'wrap'}}>
              <Link href="/tarifs" className="cta-btn">
                Voir nos tarifs
              </Link>
              <Link href="/vitrine" style={{padding:'16px 32px',borderRadius:'50px',background:'rgba(255,255,255,.2)',color:'#fff',border:'2px solid rgba(255,255,255,.3)',fontSize:'16px',fontWeight:700,textDecoration:'none',display:'inline-block',transition:'all .3s'}}>
                Voir un exemple
              </Link>
            </div>
          </div>

          {/* Footer */}
          <footer className="footer">
            <p style={{fontFamily:'Outfit, sans-serif',fontSize:'20px',fontWeight:900,color:'#fff',marginBottom:'8px'}}>
              Visio<span style={{color:'#0071E3'}}>flow</span>
            </p>
            <p style={{color:'rgba(255,255,255,.6)',marginBottom:'24px'}}>
              Création de sites web pour restaurateurs avec commandes en ligne, livrés en 48 heures.
            </p>
            <div style={{display:'flex',gap:'20px',justifyContent:'center',flexWrap:'wrap',marginBottom:'28px'}}>
              <Link href="/" style={{color:'rgba(255,255,255,.5)',textDecoration:'none',transition:'color .2s'}}>Accueil</Link>
              <Link href="/landing" style={{color:'rgba(255,255,255,.5)',textDecoration:'none',transition:'color .2s'}}>Comment ça marche</Link>
              <Link href="/tarifs" style={{color:'rgba(255,255,255,.5)',textDecoration:'none',transition:'color .2s'}}>Tarifs</Link>
              <Link href="/temoignages" style={{color:'rgba(255,255,255,.5)',textDecoration:'none',transition:'color .2s'}}>Témoignages</Link>
              <Link href="/a-propos" style={{color:'rgba(255,255,255,.5)',textDecoration:'none',transition:'color .2s'}}>À propos</Link>
            </div>
            <p style={{color:'rgba(255,255,255,.3)'}}>© {new Date().getFullYear()} VisioFlow — Tous droits réservés.</p>
          </footer>
        </div>
      </div>
    </>
  );
}