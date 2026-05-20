import Head from "next/head";
import { CinematicHero } from "@/components/ui/cinematic-hero";

export default function LandingPage() {
  const canonicalUrl = "https://visioflow.fr/landing";

  return (
    <>
      <Head>
        <title>Visioflow — Votre site restaurant en 48h</title>
        <meta
          name="description"
          content="Visioflow crée votre site de restaurant professionnel avec commandes en ligne en seulement 48 heures."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Visioflow — Votre site restaurant en 48h" />
        <meta property="og:description" content="Visioflow crée votre site de restaurant professionnel avec commandes en ligne en seulement 48 heures." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "VisioFlow - Site Restaurant en 48h",
              "description": "Service de création de sites web pour restaurants avec système de commande en ligne, livré en 48 heures.",
              "provider": {
                "@type": "Organization",
                "name": "VisioFlow",
                "url": "https://visioflow.fr"
              },
              "offers": [
                {
                  "@type": "Offer",
                  "name": "Pack Essentiel",
                  "price": "150",
                  "priceCurrency": "EUR",
                  "description": "Site vitrine professionnel pour restaurant, livré en 5 jours."
                },
                {
                  "@type": "Offer",
                  "name": "Pack Premium",
                  "price": "490",
                  "priceCurrency": "EUR",
                  "description": "Site avec commandes en ligne, panier et paiement intégré, livré en 5 jours."
                }
              ],
              "areaServed": {
                "@type": "Country",
                "name": "France"
              },
              "availableLanguage": ["French"],
              "url": canonicalUrl
            })
          }}
        />
      </Head>
      <div className="overflow-x-hidden w-full min-h-screen">
        <CinematicHero
          tagline1="Créez votre site de restaurant"
          tagline2="professionnel avec commandes en ligne"
          cardHeading="Service de création web pour restaurateurs"
          cardDescription={
            <>
              <span className="text-white font-semibold">Visioflow</span> crée des sites
              web professionnels pour restaurants avec commande en ligne, tableau de
              bord admin et paiements intégrés — le tout livré en 48 heures.
            </>
          }
        />
        <div className="px-6 py-12 text-center max-w-4xl mx-auto">
          <p className="text-gray-400 mb-6">
            Découvrez comment fonctionne notre service et les avantages pour votre restaurant.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/paiement" className="text-blue-500 hover:text-blue-400 font-semibold transition-colors">
              Voir nos packs et tarifs →
            </a>
            <a href="/vitrine" className="text-blue-500 hover:text-blue-400 font-semibold transition-colors">
              Voir un exemple de site →
            </a>
            <a href="/" className="text-blue-500 hover:text-blue-400 font-semibold transition-colors">
              Retour à l'accueil →
            </a>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-800">
            <p className="text-sm text-gray-500 mb-3">
              En savoir plus sur nos solutions :
            </p>
            <div className="flex flex-wrap gap-3 justify-center text-sm">
              <a href="/paiement" className="text-gray-400 hover:text-blue-400 transition-colors">
                Site avec commandes en ligne
              </a>
              <span className="text-gray-600">•</span>
              <a href="/vitrine" className="text-gray-400 hover:text-blue-400 transition-colors">
                Sites vitrine professionnels
              </a>
              <span className="text-gray-600">•</span>
              <a href="/paiement" className="text-gray-400 hover:text-blue-400 transition-colors">
                Panel administratif
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
