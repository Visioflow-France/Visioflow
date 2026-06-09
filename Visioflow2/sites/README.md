# Sites Restaurants

Ce dossier contient les sites HTML générés pour chaque restaurant.

## Structure

```
sites/
├── resto1.html          ← Site du restaurant 1
├── resto2.html          ← Site du restaurant 2
└── resto3.html          ← Site du restaurant 3
```

## Processus de création

1. **Dashboard** → Génère le prompt IA
2. **Copier le prompt** → Le coller dans Claude
3. **Claude génère** → Le site HTML complet
4. **Sauvegarder** → Dans ce dossier (sites/restoX.html)
5. **git push** → Déploiement automatique sur Vercel
6. **Accessible** → visioflow.fr/sites/restoX.html

## Accès

Une fois déployé, chaque site est accessible :
- **VisioFlow** : visioflow.fr/sites/resto1.html
- **Domaine personnalisé** : monresto.com (si configuré)

## Notes

- Chaque fichier HTML est autonome
- Les données sont stockées dans Firebase
- Le code VisioFlow reste dans pages/
- Les sites sont statiques et rapides
