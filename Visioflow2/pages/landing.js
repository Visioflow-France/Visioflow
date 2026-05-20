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
        <CinematicHero />
      </div>
    </>
  );
}
