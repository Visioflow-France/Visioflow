import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="fr" suppressHydrationWarning>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"/>
        <meta name="theme-color" content="#ffffff"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700;800&display=swap" rel="stylesheet"/>
        <script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js"/>
        <script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore-compat.js"/>
        <script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-auth-compat.js"/>
        <script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-storage-compat.js"/>
        <link rel="canonical" href="https://visioflow.fr/" />
        <meta name="robots" content="index, follow" />
        <meta property="og:site_name" content="VisioFlow" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
      </Head>
      <body suppressHydrationWarning>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
