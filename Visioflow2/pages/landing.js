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
      </Head>
      <div className="overflow-x-hidden w-full min-h-screen">
        <CinematicHero />
      </div>
    </>
  );
}
