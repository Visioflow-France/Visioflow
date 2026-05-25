import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="fr" suppressHydrationWarning>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"/>
        <meta name="theme-color" content="#0071E3"/>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="manifest" href="/manifest.json"/>
        <meta name="apple-mobile-web-app-capable" content="yes"/>
        <meta name="apple-mobile-web-app-status-bar-style" content="default"/>
        <script dangerouslySetInnerHTML={{
          __html: `
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js').catch(() => {});
              });
            }
          `
        }}/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700;800&display=swap" rel="stylesheet"/>
        <script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js"/>
        <script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore-compat.js"/>
        <script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-auth-compat.js"/>
        <script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-storage-compat.js"/>
        <meta name="robots" content="index, follow" />
        <meta property="og:site_name" content="VisioFlow" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />

        {/* Organization Schema Global */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "VisioFlow",
              "url": "https://visioflow.fr",
              "logo": "https://visioflow.fr/logo.png",
              "description": "Service de création de sites web pour restaurants avec système de commande en ligne, livré en 48 heures. Spécialisé dans les restaurateurs en France.",
              "foundingDate": "2025",
              "sameAs": [
                "https://instagram.com/visioflow",
                "https://linkedin.com/company/visioflow",
                "https://twitter.com/visioflow"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+33-1-23-45-67-89",
                "contactType": "customer service",
                "email": "contact@visioflow.fr",
                "areaServed": "FR",
                "availableLanguage": "French"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "12 Rue de la Paix",
                "addressLocality": "Paris",
                "postalCode": "75001",
                "addressCountry": "FR"
              },
              "areaServed": {
                "@type": "Country",
                "name": "France"
              }
            })
          }}
        />

        {/* LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "VisioFlow",
              "image": "https://visioflow.fr/logo.png",
              "description": "Service de création de sites web pour restaurants avec système de commande en ligne, livré en 48 heures. Spécialisé dans les restaurateurs en France.",
              "telephone": "+33-1-23-45-67-89",
              "email": "contact@visioflow.fr",
              "url": "https://visioflow.fr",
              "priceRange": "€€",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "12 Rue de la Paix",
                "addressLocality": "Paris",
                "postalCode": "75001",
                "addressCountry": "FR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "48.8698",
                "longitude": "2.3319"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              },
              "areaServed": {
                "@type": "Country",
                "name": "France"
              },
              "founder": {
                "@type": "Person",
                "name": "Yanis Boudadour"
              }
            })
          }}
        />

        {/* Breadcrumb Schema for Homepage */}
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
                }
              ]
            })
          }}
        />
      </Head>
      <body suppressHydrationWarning>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
