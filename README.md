# Le Jardin de Bastos

Site vitrine en français pour le restaurant afro-fusion Le Jardin de Bastos à Bastos, Yaoundé. Le site est pré-rendu avec Astro et publié sur Netlify ; les contenus et médias sont éditables via Pages CMS et un dépôt GitHub.

## Prérequis

- Node.js `22.23.4` ou plus récent (version recommandée : `.nvmrc`)
- npm 11 ou version compatible
- Pour l'édition de contenu : dépôt GitHub connecté à Netlify et Pages CMS

## Développement local

```sh
npm install
npm run dev
```

La page d'accueil s'ouvre sur l'adresse locale indiquée par Astro. Les pages sont `/`, `/services/` et `/contact/`. `/merci/` est une page de confirmation du formulaire, non incluse dans la navigation ni dans le sitemap.

## Vérification

```sh
npm run check
npm run build
npm run preview
```

`npm run build` produit le site statique dans `dist/`. `npm run check` vérifie les composants Astro et les types. `npm run preview` sert ce build localement, mais ne peut pas vérifier l'envoi réel des formulaires Netlify.

## Direction artistique

La direction « Le Jardin, à la tombée du jour » privilégie le vert forêt `#1B4332`, le crème `#FAF9F6`, l'anthracite `#2B2D42` et l'or mat `#D4AF37`. Playfair Display et Inter sont auto-hébergées via npm. Les images du restaurant ne sont pas encore présentes : l'accueil utilise une illustration originale clairement identifiée comme temporaire. En mode développement, les plats en brouillon et les études graphiques de la galerie sont visibles avec des mentions explicites ; ils restent exclus du build de production tant qu'ils ne sont pas validés. Remplacez-les par le logo et les photos autorisées du client avant toute publication définitive. Préférez des photos JPEG/WebP optimisées d'au plus 1 600 pixels de large : le build statique ne convertit pas automatiquement les images téléversées.

Les consignes visuelles détaillées se trouvent dans [la compétence du projet](./.github/skills/jardin-de-bastos-art-direction/SKILL.md) ; la vision et la stratégie sont dans [PROJECT_PLAN.md](./PROJECT_PLAN.md).

## Gérer les contenus avec Pages CMS

1. Publiez le dépôt sur GitHub puis connectez-le à Netlify.
2. Autorisez Pages CMS à accéder au dépôt et ouvrez le projet dans Pages CMS.
3. La configuration [`.pages.yml`](./.pages.yml) expose les horaires, coordonnées, histoire, réseaux sociaux, photo d'ouverture, plats, services, galerie et témoignages. Les médias téléversés sont enregistrés dans `public/media/`.
4. Chaque modification enregistrée dans Pages CMS crée un commit GitHub, que Netlify déploie automatiquement.
5. Pour publier un plat, une photo ou un témoignage, remplacez les contenus provisoires, vérifiez l'exactitude et l'autorisation de publication, ajoutez l'image et passez son statut de **Brouillon** à **Publié**.

Ne publiez jamais de faux avis ou de contenus de démonstration. La mise en service du CMS exige le dépôt GitHub réel et un essai d'édition avec le gérant ; l'accès n'est pas encore configuré dans ce dépôt local.

## Formulaire Netlify

Le formulaire statique `contact` est marqué `data-netlify="true"` avec un champ honeypot et redirige vers `/merci/`. Pour activer son traitement :

1. Déployez le site sur Netlify avec la détection automatique des formulaires activée.
2. Vérifiez que le formulaire `contact` apparaît dans l'onglet **Forms** après un déploiement.
3. Configurez dans Netlify les notifications vers l'adresse validée par le client.
4. Envoyez un essai depuis un Deploy Preview et vérifiez la réception et la page de confirmation.

Un build et un aperçu sur la machine locale ne transmettent pas les formulaires. L'adresse destinataire et les informations légales sur le traitement des données sont à confirmer avant l'ouverture publique du formulaire.

## SEO, domaine et publication

- `astro.config.mjs` et les réglages du site préparent `https://jardindebastos.cm` comme domaine canonique.
- `src/pages/sitemap.xml.ts` génère un sitemap pour les trois pages publiques ; `public/robots.txt` référence ce sitemap.
- Les pages incluent des métadonnées en français et des données structurées `Restaurant` sans faux avis ni coordonnées cartographiques inventées.
- Après raccordement du domaine au compte Netlify, confirmez sa propriété, le DNS, le certificat HTTPS, l'adresse canonique et le sitemap réellement publié.
- La carte affiche une illustration d'orientation et une recherche d'adresse Google Maps ; le repère précis n'est pas certifié. Remplacez ces indications seulement après validation du point par le client.

## Arborescence

```text
.
├── .github/skills/                   # Direction artistique du projet
├── public/                            # Fichiers statiques et médias CMS
├── src/
│   ├── components/                    # Navigation, pied de page, formulaire
│   ├── content/                       # JSON et fiches Markdown éditables
│   ├── layouts/                       # Modèle HTML, SEO et données structurées
│   ├── pages/                         # Accueil, services, contact, sitemap
│   └── styles/                        # Système visuel responsive
├── .pages.yml                         # Configuration Pages CMS
├── astro.config.mjs                   # Génération statique Astro
├── netlify.toml                       # Build et publication Netlify
└── PROJECT_PLAN.md                    # Vision, décisions et stratégie
```
