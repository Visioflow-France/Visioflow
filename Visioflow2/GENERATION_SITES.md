# Guide VisioFlow - Génération de Sites Restaurants

## 🚀 Processus Complet de Génération de Sites

### Étape 1 : Démarrer VisioFlow

```bash
cd C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2
npm run dev
```

Le serveur démarre sur `http://localhost:3000`

---

### Étape 2 : Créer un Formulaire de Restaurant

1. **Allez sur** `http://localhost:3000`
2. **Remplissez le formulaire** avec les infos du restaurant :
   - Nom du restaurant
   - Type de cuisine
   - Layout (grille ou liste)
   - Couleur principale
   - Email, téléphone, adresse
   - Menu (plats, prix, photos)

3. **Cliquez sur "Créer mon site"**

Les données sont envoyées dans Firebase automatiquement.

---

### Étape 3 : Générer le Prompt IA

1. **Allez sur** `http://localhost:3000/dashboard`
2. **Connectez-vous** avec :
   - Email : `visioflow77@gmail.com`
   - Mot de passe : `Visioflow2024!`

3. **Cliquez sur l'onglet "🤖 Prompt IA"**
4. **Sélectionnez le restaurant** dans la liste
5. **Le prompt est généré automatiquement**

---

### Étape 4 : Copier le Prompt

1. **Cliquez sur "Copier le prompt"**
2. **Le prompt est dans votre presse-papier**

---

### Étape 5 : Générer le Site avec Claude (Ici)

1. **Collez le prompt ICI** dans cette conversation
2. **Je génère le site HTML complet**
3. **Je le sauvegarde dans** `sites/resto1.html`
4. **Le site est prêt !**

---

### Étape 6 : Déployer sur Vercel

1. **Vérifiez le site généré** : `localhost:3000/sites/resto1.html`
2. **Si tout est bon :**
   ```bash
   git add .
   git commit -m "Ajout site resto1"
   git push
   ```
3. **Vercel déploie automatiquement**
4. **Site accessible :** `https://visioflow.fr/sites/resto1.html`

---

## 🎯 Pack Premium (avec Stripe Express)

Pour les restaurants avec paiements :

1. **Dans le dashboard**, cliquez sur "📧 Générer un lien Stripe Express"
2. **Envoyez le lien au restaurateur**
3. **Il se connecte à Stripe en 5-10 minutes**
4. **Son compte est connecté automatiquement**

---

## 📱 Pour le Restaurateur

### **Accès à son Espace Client**
- URL : `visioflow.fr/espace-client`
- Email : celui créé lors du formulaire
- Mot de passe : celui choisi

### **Ce qu'il peut gérer**
- ✅ Modifier son menu
- ✅ Changer ses horaires
- ✅ Modifier les prix
- ✅ Voir ses commandes
- ✅ Gérer les promotions

---

## ✅ Résumé

> **1. Formulaire → 2. Prompt IA → 3. Claude génère → 4. Sauvegarde → 5. Déploiement**

---

**Tout est prêt ! Vous pouvez maintenant générer des sites pour vos restaurants !** 🚀
