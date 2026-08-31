# Conversation — Développement Visioflow-Next

## Contexte du projet

Conversion du fichier `index.html` original en application **Next.js 14.2.3** (Pages Router), avec conservation de tout le code HTML, CSS et JS existant.

---

## Session 1 — Conversion HTML → Next.js

### Objectif
Transformer `index.html` en projet Next.js fonctionnel sans perdre aucune fonctionnalité.

### Structure mise en place
- `pages/index.js` — tout le HTML converti en `dangerouslySetInnerHTML`, tout le JS dans un `useEffect`
- `styles/globals.css` — CSS extrait de la balise `<style>` du HTML original
- `pages/_document.js` — scripts Firebase CDN et polices Google Fonts
- `package.json` — dépendances Next.js, React 18

### Architecture JS dans useEffect
Le site contient 5 blocs JS distincts qui s'exécutent séquentiellement :

| Bloc | Rôle |
|------|------|
| Bloc 1 | JS principal : `showPage()`, builder, PACKS, etc. |
| Bloc 2 | Auth client IIFE (localStorage) → `page-client-login`, `page-mon-compte` |
| Bloc 3 | Firebase Admin IIFE |
| Bloc 4 | Auth admin IIFE → `page-login` |
| Bloc 5 | Firebase Auth + espace client + formulaire pré-paiement |

---

## Session 2 — Correction des bugs

### Problème 1 : `npm` introuvable
**Cause :** Node.js absent du PATH Windows.  
**Solution :** Installation via winget → `C:\Program Files\nodejs` (v24.15.0). Création du fichier `LANCER.bat` pour lancer le serveur en double-cliquant.

### Problème 2 : Encodage Windows-1252 au lieu d'UTF-8
**Cause :** PowerShell lit les fichiers en Windows-1252 par défaut, corrompant les caractères français.  
**Solution :** Utilisation de `[System.IO.File]::ReadAllBytes()` + `[System.Text.Encoding]::UTF8.GetString()` pour lire, et `New-Object System.Text.UTF8Encoding($false)` pour écrire sans BOM.

### Problème 3 : `</style>` parasite dans globals.css
**Cause :** L'extraction du CSS avait inclus la balise fermante HTML.  
**Solution :** Suppression de la ligne `</style>` en fin de fichier.

### Problème 4 : `ReferenceError: vfaInit is not defined`
**Cause :** `showPage('admin')` appelait `vfaInit()` en scope local, mais la fonction n'existe que sur `window.vfaInit` (définie par le Bloc 3 IIFE).  
**Solution :**
```js
// Avant
vfaInit();
// Après
try { if(typeof window.vfaInit==='function') window.vfaInit(); } catch(e) {}
```

### Problème 5 : Erreur `document.body.insertBefore`
**Cause :** En Next.js, le contenu est encapsulé dans `<body><div id="__next"><div>...</div></div></body>`. Les éléments comme `mainNav` ne sont pas enfants directs de `<body>`. Or `insertBefore(el, ref)` exige que `ref` soit un enfant direct du parent.  
**Solution :** Remplacement dans les 4 occurrences :
```js
// Avant
document.body.insertBefore(clientLoginPage, navEl);
// Après
navEl.parentNode.insertBefore(clientLoginPage, navEl);
```

**Résultat :** "C'est parfait le code marche" ✓

---

## Session 3 — Améliorations UX

### Demande utilisateur
> "Dès qu'on arrive sur le site ça ne nous met pas directement sur le système de connexion des comptes. Je veux plutôt que ça nous ramène sur la première page du site. Tu remplacera donc cette manière d'aller au système de connexion par une petite icône en haut à droite de toutes les pages du site qui respectera les couleurs du site. Tu nommera cette icône 'Connexion'."

### Changement 1 — Bouton "Connexion" en haut à droite

Le Bloc 5 possédait déjà un bouton circulaire (`.vf-pro-btn`) dans la nav qui ouvrait un dropdown Firebase Auth. Ce bouton a été redesigné :

**Avant** (cercle 32×32 avec icône silhouette) :
```js
<button class="vf-pro-btn" ... aria-label="Mon compte">
  <svg ...silhouette.../> 
</button>
```

**Après** (pill avec icône cadenas + texte "Connexion") :
```js
<button class="vf-pro-btn" ... aria-label="Connexion">
  <svg ...cadenas.../>
  <span id="vf-pro-label">Connexion</span>
</button>
```

**CSS mis à jour** — passage de cercle fixe à pill dynamique :
```css
/* Avant */
.vf-pro-btn { width:32px; height:32px; border-radius:50%; ... }

/* Après */
.vf-pro-btn { height:32px; padding:0 14px 0 12px; border-radius:980px; gap:6px; ... }
```

**`_updateProIconUI()` mis à jour** :
- Non connecté → icône cadenas + texte "Connexion" (pill)
- Connecté → initiale de l'utilisateur dans un cercle + point vert

### Changement 2 — `window.showPage('accueil')` à la fin de l'init

Ajouté à la toute fin du Bloc 5 pour garantir le retour sur la page d'accueil après toute l'initialisation :
```js
/* ─── 16. INIT ─── */
_updateProIconUI();
window.showPage('accueil'); // ← ajouté
```

### Bug découvert — Spécificité CSS (page login toujours visible)

**Cause :** Les règles CSS ciblant des IDs ont une spécificité de 100, contre 10 pour les classes. Donc :
```css
.page { display:none }           /* spécificité : 10 */
#page-client-login { display:flex } /* spécificité : 100 → GAGNE toujours */
```
Résultat : `#page-client-login` et `#page-login` étaient **toujours visibles**, même sans la classe `active`.

**Solution :** Déplacement du `display:flex` dans une règle `.active` :
```css
/* Avant */
#page-client-login { background:#0b0d14; min-height:100vh; display:flex; align-items:center; justify-content:center }

/* Après */
#page-client-login { background:#0b0d14; min-height:100vh }
#page-client-login.active { display:flex; align-items:center; justify-content:center }
```
Même correction appliquée à `#page-login`.

---

## État final du projet

| Fichier | Rôle |
|---------|------|
| `pages/index.js` | Code complet du site (~3235 lignes) |
| `styles/globals.css` | CSS global (~624 lignes) |
| `pages/_document.js` | Scripts Firebase CDN + Google Fonts |
| `LANCER.bat` | Double-clic pour démarrer le serveur |
| `package.json` | Config Next.js 14.2.3 |

### Lancer le site
Double-cliquer sur `LANCER.bat` ou dans un terminal :
```bash
cd C:\Users\User\Desktop\Visioflow-Next
npm run dev
```
Puis ouvrir `http://localhost:3000` dans le navigateur.
