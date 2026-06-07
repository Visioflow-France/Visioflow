# 🚀 Guide de mise en production - Visioflow

## État actuel du projet
- ✅ Site web fonctionnel
- ✅ Pages légales créées (mentions, CGU, CGV, cookies, confidentialité)
- ✅ Stripe intégré
- ⏳ En attente : Informations légales réelles + Clés Stripe de production

---

## Étapes restantes pour lancer Visioflow

### 1. Inscription auto-entrepreneur (15 min)
👉 **Aller sur** : https://autoentrepreneur.urssaf.fr

**Informations nécessaires :**
- Nom complet de votre frère
- Son adresse personnelle
- Code activité : **6201Z** (programmation/conseil informatique)
- Date de début : le jour même

**Résultat :**
- SIRET reçu par email sous 24-48h (14 chiffres)

---

### 2. Création du compte Stripe (20 min)
👉 **Aller sur** : https://stripe.com/fr

**Documents nécessaires :**
- Pièce d'identité valide
- IBAN (RIB bancaire)
- SIRET (une fois reçu)
- Adresse email + téléphone

**Résultat :**
- Clés API (test et live)
- Compte vérifié et prêt à accepter les paiements

---

### 3. Configuration des clés Stripe (5 min)

1. **Copier** le template :
```bash
cp .env.local.template .env.local
```

2. **Renseigner** les clés dans `.env.local` :
```bash
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PUBLISHABLE_KEY=pk_test_...
```

3. **Ne jamais commiter** ce fichier (déjà dans .gitignore)

---

### 4. Mise à jour des mentions légales (10 min)

**Ouvrir** le fichier `pages/mentions-legales.js`

**Remplacer** les informations dans la constante `LEGAL_INFO` en haut du fichier :

```javascript
const LEGAL_INFO = {
  // À remplacer avec les vraies infos
  companyName: "[NOM DU FRÈRE]",          // Ex: "Jean Dupont"
  siret: "[SIRET À 14 CHIFFRES]",          // Ex: "123 456 789 00012"
  siren: "[SIREN À 9 CHIFFRES]",          // Ex: "123 456 789"
  address: "[ADRESSE COMPLÈTE]",           // Ex: "12 Rue de la Paix, 75001 Paris"
  phone: "[NUMÉRO DE TÉLÉPHONE]",         // Ex: "+33 6 12 34 56 78"
  directorName: "[NOM COMPLET DU FRÈRE]", // Ex: "Jean Dupont"
  // ... autres champs
};
```

**Note :** Laissez `tvaNumber` tel quel si votre frère est en franchise de TVA (auto-entrepreneur).

---

### 5. Test du paiement (5 min)

**Lancer le site en local :**
```bash
npm install
npm run dev
```

**Tester le paiement :**
- Aller sur http://localhost:3000/paiement
- Utiliser une carte de test Stripe : https://stripe.com/docs/testing
- Exemple : `4242 4242 4242 4242` (n'importe quelle date future, CVC 3 chiffres)

---

### 6. Déploiement en production

**Sur Vercel :**
1. Connecter le repo GitHub
2. Ajouter les variables d'environnement dans Vercel Dashboard
3. Deployer

**Pour passer des clés test aux clés live :**
- Remplacer `sk_test_` par `sk_live_` dans `.env.local`
- Redéployer

---

## ✅ Checklist avant le lancement

- [ ] Frère inscrit comme auto-entrepreneur
- [ ] SIRET reçu
- [ ] Compte Stripe créé et vérifié
- [ ] Clés Stripe configurées dans `.env.local`
- [ ] Mentions légales mises à jour avec les vraies infos
- [ ] Paiement testé en local
- [ ] Site déployé sur Vercel
- [ ] Paiement testé en production

---

## 📞 Besoin d'aide ?

- **URSSAF** : 3957 (service gratuit)
- **Stripe** : https://stripe.com/contact
- **Vercel** : https://vercel.com/support

---

**Bonne chance avec Visioflow ! 🚀**
