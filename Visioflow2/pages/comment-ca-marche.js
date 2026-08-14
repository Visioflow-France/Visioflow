import Head from "next/head";
import Footer from "../components/Footer";

export default function CommentCaMarchePage() {
  const canonicalUrl = "https://visioflow.fr/comment-ca-marche";

  return (
    <>
      <Head>
        <title>Comment ça marche — Visioflow | Estimation gratuite et accompagnement personnalisé</title>
        <meta
          name="description"
          content="Découvrez comment Visioflow fonctionne : estimation gratuite en quelques secondes, contact personnalisé, et réalisation de vos projets web et digitaux."
        />
        <meta name="keywords" content="estimation gratuite, devis site web, comment ça marche, agence web processus" />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Comment ça marche — Visioflow" />
        <meta property="og:description" content="Estimation gratuite en quelques secondes, contact personnalisé, et réalisation de vos projets." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />

        <style>{`
          *{box-sizing:border-box;margin:0;padding:0}
          body{font-family:'Inter',-apple-system,BlinkMacSystemFont,sans-serif;background:#ffffff;color:#1e293b;line-height:1.6}
          a{text-decoration:none;transition:all .2s}
          .container{max-width:1200px;margin:0 auto;padding:0 20px}

          .nav{height:auto;background:rgba(255,255,255,.85);backdrop-filter:blur(10px);position:fixed;top:0;left:0;right:0;z-index:100;padding:16px 0;border-bottom:1px solid rgba(15,23,42,.08)}
          .nav-content{display:flex;justify-content:space-between;align-items:center}
          .logo{font-family:'Inter Tight',sans-serif;font-size:28px;font-weight:900;color:#0f172a;display:flex;align-items:center;gap:10px}
          .logo span{color:#0071E3}
          .nav-cta{background:#0071E3;color:#fff;padding:10px 24px;border-radius:50px;font-weight:600;font-size:14px}
          .nav-cta:hover{background:#0056b3;transform:translateY(-2px)}

          .hero{min-height:60vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:120px 20px 80px;position:relative;background:#ffffff}
          .hero-bg{position:absolute;inset:0;background:linear-gradient(135deg,#ffffff 0%,#dbeafe 50%,#ffffff 100%)}
          .hero-content{position:relative;z-index:1;max-width:800px}
          .hero-title{font-family:'Inter Tight',sans-serif;font-size:clamp(42px,8vw,72px);font-weight:900;color:#0f172a;line-height:1.1;margin-bottom:20px;letter-spacing:-2px}
          .hero-sub{font-size:18px;color:#475569;margin-bottom:40px;max-width:700px;margin-left:auto;margin-right:auto}

          .section{padding:100px 20px}
          .section-title{font-family:'Inter Tight',sans-serif;font-size:clamp(32px,5vw,48px);font-weight:900;color:#0f172a;text-align:center;margin-bottom:16px;letter-spacing:-1px}
          .section-sub{color:#475569;text-align:center;max-width:700px;margin:0 auto 60px;font-size:18px}

          .steps{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:32px;margin-top:60px}
          .step-card{background:#f8fafc;border:1px solid rgba(15,23,42,.08);border-radius:24px;padding:32px;transition:all .3s;box-shadow:0 2px 10px rgba(15,23,42,.04);position:relative}
          .step-card:hover{transform:translateY(-5px);border-color:rgba(0,113,227,.3);box-shadow:0 20px 60px rgba(0,113,227,.15)}
          .step-number{width:56px;height:56px;background:linear-gradient(135deg,#0071E3,#38bdf8);border-radius:16px;display:flex;align-items:center;justify-content:center;font-family:'Inter Tight',sans-serif;font-size:24px;font-weight:900;color:#fff;margin-bottom:20px}
          .step-title{font-size:20px;font-weight:700;color:#0f172a;margin-bottom:12px}
          .step-desc{color:#475569;font-size:15px;line-height:1.7}
          .step-duration{color:#0071E3;font-size:13px;font-weight:600;margin-top:16px}

          .faq{max-width:800px;margin:0 auto}
          .faq-item{border-bottom:1px solid rgba(15,23,42,.08);padding:24px 0}
          .faq-question{font-size:18px;font-weight:700;color:#0f172a;margin-bottom:8px}
          .faq-answer{color:#475569;line-height:1.7;font-size:15px}

          .cta{background:linear-gradient(135deg,#0071E3 0%,#38bdf8 100%);border-radius:32px;padding:80px 20px;text-align:center;margin:100px 20px 0}
          .cta h2{font-family:'Inter Tight',sans-serif;font-size:clamp(32px,5vw,48px);font-weight:900;color:#fff;margin-bottom:16px}
          .cta p{color:rgba(255,255,255,.8);font-size:18px;margin-bottom:32px;max-width:700px;margin-left:auto;margin-right:auto}
          .cta-btn{display:inline-block;padding:16px 40px;border-radius:50px;background:#fff,color:#0071E3;font-size:16px;font-weight:700;transition:all .3s;font-family:'Inter Tight',sans-serif}
          .cta-btn:hover{background:rgba(255,255,255,.9);transform:translateY(-3px)}

          @media(max-width:768px){
            .hero-title{font-size:36px}
            .steps{grid-template-columns:1fr}
          }
        `}</style>
      </Head>

      <div>
        {/* Navigation */}
        <nav className="nav">
          <div className="container nav-content">
            <a href="/" className="logo">
              <span style={{fontSize: '32px', fontWeight: '900', color: '#0f172a'}}>Visio</span><span>flow</span>
            </a>
            <a href="/" className="nav-cta">← Retour à l'accueil</a>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="hero">
          <div className="hero-bg" />
          <div className="hero-content">
            <h1 className="hero-title">
              Comment ça marche ?
            </h1>
            <p className="hero-sub">
              Un processus simple et efficace pour transformer votre projet web en réalité.
              De l'estimation gratuite à la livraison, en quelques étapes.
            </p>
          </div>
        </section>

        {/* Process Section */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Notre processus en 4 étapes</h2>
            <p className="section-sub">
              Un parcours optimisé pour garantir la réussite de votre projet
              avec un accompagnement personnalisé à chaque étape.
            </p>
            <div className="steps">
              <div className="step-card">
                <div className="step-number">1</div>
                <h3 className="step-title">Estimation Gratuite</h3>
                <p className="step-desc">
                  Décrivez votre projet sur notre page d'accueil et recevez
                  une estimation automatique en quelques secondes.
                  Sans engagement, totalement gratuit.
                </p>
                <div className="step-duration">⚡ 2 minutes</div>
              </div>

              <div className="step-card">
                <div className="step-number">2</div>
                <h3 className="step-title">Contact Personnalisé</h3>
                <p className="step-desc">
                  Notre équipe vous contacte sous 24-48h pour discuter de
                  votre projet, affiner vos besoins et confirmer le devis.
                  Échange par téléphone ou email.
                </p>
                <div className="step-duration">📞 24-48h</div>
              </div>

              <div className="step-card">
                <div className="step-number">3</div>
                <h3 className="step-title">Réalisation du Projet</h3>
                <p className="step-desc">
                  Une fois le devis validé, nous démarrons la réalisation
                  de votre projet. Design, développement, et optimisation
                  selon vos spécifications.
                </p>
                <div className="step-duration">🚀 Selon le projet</div>
              </div>

              <div className="step-card">
                <div className="step-number">4</div>
                <h3 className="step-title">Livraison & Suivi</h3>
                <p className="step-desc">
                  Livraison de votre projet complet + formation à son utilisation.
                  Support continu et garanties incluses. Votre succès
                  est notre priorité.
                </p>
                <div className="step-duration">✅ À vie</div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section style={{background: 'rgba(15,23,42,.02)'}}>
          <div className="container">
            <h2 className="section-title">Questions fréquentes</h2>
            <p className="section-sub">
              Tout ce que vous devez savoir sur notre processus de travail.
            </p>
            <div className="faq">
              <div className="faq-item">
                <h3 className="faq-question">L'estimation est-elle vraiment gratuite ?</h3>
                <p className="faq-answer">
                  Oui, l'estimation est 100% gratuite et sans engagement.
                  Recevez un prix indicatif en quelques secondes et
                  décidez ensuite si vous souhaitez poursuivre.
                </p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">Combien de temps pour une réponse ?</h3>
                <p className="faq-answer">
                  Notre équipe vous contacte sous 24-48h après réception de
                  votre demande. Pour une réponse plus rapide, n'hésitez
                  pas à nous appeler directement au 06 11 04 58 29.
                </p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">Le devis est-il définitif ?</h3>
                <p className="faq-answer">
                  L'estimation automatique donne un prix indicatif.
                  Le devis final est établi après notre discussion pour
                  s'assurer qu'il correspond parfaitement à vos besoins.
                </p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">Quels types de projets réalisez-vous ?</h3>
                <p className="faq-answer">
                  Nous réalisons tous types de projets web et digitaux :
                  sites vitrines, e-commerce, Google Business, réseaux sociaux,
                  et bien plus. Chaque projet est étudié individuellement.
                </p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">Comment se passe le paiement ?</h3>
                <p className="faq-answer">
                  Le paiement se fait directement avec nous (virement,
                  chèque, etc.) et non via le site. Nous discutons des
                  modalités lors de notre échange téléphonique.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="cta">
          <h2>Prêt à démarrer votre projet ?</h2>
          <p>
            Obtenez votre estimation gratuite en quelques secondes et
            découvrez comment Visioflow peut transformer votre présence digitale.
          </p>
          <div style={{display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap'}}>
            <a href="/#contact" className="cta-btn">
              💬 Estimation gratuite
            </a>
            <a href="tel:+33611045829" className="cta-btn" style={{background: 'rgba(255,255,255,.2)', color: '#fff', border: '2px solid rgba(255,255,255,.3)'}}>
              📞 06 11 04 58 29
            </a>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}