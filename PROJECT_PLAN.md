# Le Jardin de Bastos — vision, conception et plan de réalisation

**Date :** 9 novembre 2026  
**Statut :** conception validée ; première réalisation locale livrée et vérifiée. Le raccordement GitHub/Netlify et la recette éditoriale restent à faire.  
**Référence :** [Cahier des Charges - Le Jardin de Bastos.pdf](./Cahier%20des%20Charges%20-%20Le%20Jardin%20de%20Bastos.pdf)

## État de la réalisation

- `npm run check` : 0 erreur, 0 avertissement et 0 indication.
- `npm run build` : génération statique réussie pour l'accueil, les services, le contact, la confirmation et le sitemap.
- Recette responsive locale : les trois pages principales ont répondu correctement aux largeurs 320, 375, 768, 901 et 1 440 px, en développement comme en aperçu de production, sans débordement horizontal ni chevauchement du héros.
- Les plats et visuels non validés restent visibles uniquement en développement ; ils ne sont pas inclus dans le build de production.
- La configuration Netlify, les formulaires et les routes ont été contrôlés dans les fichiers générés. Le traitement réel des formulaires, l'édition Pages CMS et le déploiement distant ne sont pas encore raccordés ni vérifiés.

**Avant publication :** intégrer les photos autorisées et le logo, valider textes, coordonnées, repère cartographique, réseaux sociaux et destinataire des notifications, connecter le dépôt GitHub à Pages CMS et Netlify, tester une soumission sur Deploy Preview et confirmer le domaine/HTTPS. Mesurer aussi les objectifs Lighthouse et terminer la recette clavier/accessibilité avec les contenus définitifs.

## 1. Vision

Faire ressentir, dès l'arrivée, l'entrée dans un jardin gastronomique de Bastos : une terrasse qui s'illumine, des matières naturelles, la cuisine camerounaise racontée avec élégance. Le site doit être une invitation à venir, pas un catalogue de blocs génériques.

L'expérience associe une ouverture photographique immersive à un parcours éditorial clair. Le visiteur découvre le lieu, ses saveurs et les occasions de le choisir ; il peut ensuite réserver ou demander un devis en quelques gestes, surtout sur mobile.

### Objectifs

- Affirmer l'identité d'un restaurant afro-fusion haut de gamme à Yaoundé.
- Présenter les plats, le cadre et les quatre pôles de services avec des contenus exacts.
- Convertir les visites en réservations WhatsApp et demandes de devis.
- Rendre les horaires, photos et contenus éditoriaux modifiables sans intervention technique courante.
- Atteindre une expérience rapide, accessible et indexable sur mobile, tablette et ordinateur.

## 2. Direction créative retenue

### « Le Jardin, à la tombée du jour »

La direction recommandée et retenue est une interprétation éditoriale de la terrasse illuminée : chaleureuse, végétale, feutrée et gastronomique. L'immersion repose sur des photographies réellement fournies par le client, le rythme des compositions, la lumière et la typographie — pas sur une vidéo lourde ou des animations omniprésentes.

La page d'accueil s'ouvre sur une photographie pleine largeur de la terrasse en soirée, légèrement assombrie uniquement si cela améliore la lisibilité du texte. Le slogan officiel et une action de réservation sont immédiatement visibles. Le parcours alterne ensuite des surfaces crème lumineuses et des séquences vert forêt afin de ménager des respirations visuelles et de guider vers la cuisine, le jardin et les services.

### Identité visuelle

| Élément | Décision |
|---|---|
| Vert forêt `#1B4332` | Structure, navigation, fonds profonds et éléments de marque |
| Crème `#FAF9F6` | Fond dominant pour la lecture et les compositions éditoriales |
| Or mat `#D4AF37` | Accent rare pour les actions, filets et détails importants |
| Anthracite `#2B2D42` | Texte courant et contrastes confortables |
| Titres | Playfair Display, ou équivalent à empattements, utilisé avec retenue |
| Textes | Inter, ou équivalent sans empattements, pour une lecture nette |

La répartition des couleurs reste une règle de composition, et non un quota mécanique : beaucoup d'espace crème, du vert pour ancrer la marque, de l'or uniquement là où il aide à comprendre ou agir. Le texte doit rester contrasté sur chaque image.

### Signature d'expérience

- Navigation supérieure persistante, sobre, avec un accès de réservation distinct.
- Bouton WhatsApp permanent mais discret ; sur petit écran, son emplacement ne recouvre ni les champs, ni les liens, ni les commandes du navigateur.
- Transitions et apparitions légères uniquement lorsqu'elles servent la narration ; respect systématique de `prefers-reduced-motion`.
- Images éditoriales recadrées avec intention, compositions asymétriques et grands espaces de respiration ; pas d'alignement répétitif de cartes identiques.
- Aucun carrousel automatique, effet de parallaxe agressif, vidéo d'arrière-plan, faux avis ou photographie de stock présentée comme celle du restaurant.

## 3. Architecture de l'expérience

Le site comporte trois pages principales, chacune dotée de sa propre URL et de son contenu HTML produit à la génération. Une navigation persistante relie les pages sans transformer le site en longue page unique.

### Accueil — « L'arrivée au jardin »

1. Terrasse illuminée, slogan du cahier des charges et bouton **Réserver une table** vers WhatsApp.
2. Origine du restaurant depuis 2022, philosophie du Chef Armand Nkodo et mise en valeur des produits locaux.
3. Quatre plats signatures mis en scène comme une sélection éditoriale, et non comme une grille de produits standard.
4. Galerie de six photos choisies parmi les visuels fournis.
5. Trois témoignages authentiques, uniquement après validation des textes et de leur attribution par le client.
6. Invitation finale à réserver et rappel des informations pratiques.

### Services — « Choisir son moment »

Quatre récits et appels à l'action adaptés :

- **Restauration sur place :** salle climatisée, terrasse et formule déjeuner d'affaires.
- **Traiteur :** buffets, cocktails et pauses café pour 15 à 200 personnes ; demande de devis.
- **Privatisation :** terrasse ou salle VIP, avec équipements annoncés dans le cahier ; demande de devis.
- **À emporter et livraison :** quartiers desservis à confirmer et commande WhatsApp.

La mise en page utilise la photographie, les titres et les variations d'échelle pour distinguer ces expériences. Elle évite une succession uniforme de quatre boîtes.

### Contact — « Préparer sa visite »

- Adresse à Bastos, téléphone, WhatsApp, e-mail et horaires affichés clairement.
- Liens `tel:`, `mailto:` et WhatsApp utilisables au toucher.
- Formulaire de contact/devis avec nom, téléphone, e-mail, objet et message ; champs requis conformément au cahier.
- Carte intégrée centrée sur la Rue 1.792, seulement après vérification du repère exact avec le client.
- Liens Instagram, Facebook et catalogue WhatsApp Business uniquement lorsque les URL officielles sont fournies.
- Brève information sur l'usage des coordonnées recueillies par le formulaire, à valider par le client.

## 4. Choix techniques et édition du contenu

### Site statique multipage avec Astro

Le projet actuel est une base Vite vide. Pour conserver un HTML rendu au build, de vraies pages indexables et un minimum de JavaScript client, la réalisation migrera vers **Astro en génération statique**. C'est un choix proportionné à trois pages éditoriales : pas de serveur applicatif, de base de données ou de framework client lourd.

Netlify continue d'exécuter `npm run build` et de publier `dist/` conformément à `netlify.toml`. Les trois routes seront `/`, `/services/` et `/contact/`. Les interactions nécessaires resteront progressives et limitées.

### CMS Pages CMS et GitHub

Le client a choisi un CMS visuel et confirmé l'utilisation de GitHub. **Pages CMS** éditera des fichiers structurés et ajoutera les médias dans le dépôt GitHub. Il n'y aura pas de base de données distincte : chaque modification du contenu déclenchera le déploiement Netlify déjà en place.

Le modèle d'édition couvrira les réglages du site (horaires, coordonnées et liens), les plats, les services, la galerie et les témoignages. La configuration du CMS indiquera les champs modifiables et le répertoire des médias. Avant la mise en service, il faudra créer/connecter le dépôt GitHub, autoriser l'accès du CMS au dépôt et vérifier le parcours d'édition avec le gérant.

### Formulaire et conversions

Le formulaire sera un formulaire HTML statique compatible avec **Netlify Forms**, afin qu'il soit détecté au build sans fonction serveur. Les notifications destinataires seront configurées dans Netlify. Les réservations et commandes resteront des conversations WhatsApp préremplies ; aucune fausse confirmation de réservation ne sera affichée.

### SEO, performance et sécurité

- Pages en français (`fr-CM`) avec titres, descriptions, URL canoniques, aperçus sociaux et liens internes adaptés à leur contenu.
- Données structurées `Restaurant` cohérentes avec les informations vérifiées ; aucun avis ou note agrégée non authentique.
- Sitemap et `robots.txt` au moment où le domaine public est confirmé.
- Ciblage des recherches « restaurant Bastos Yaoundé », « restaurant gastronomique Yaoundé » et « traiteur Yaoundé » dans des contenus naturels.
- Images redimensionnées et servies en formats modernes lorsque possible ; dimensions explicites, chargement différé sous la ligne de flottaison et priorité à l'image d'ouverture.
- JavaScript limité, dépendances maintenues au minimum, aucun secret dans le dépôt et HTTPS fourni par Netlify une fois le domaine raccordé.

## 5. Informations et ressources à obtenir

Les éléments ci-dessous ne figurent pas dans le dépôt ou ne sont pas assez détaillés pour être inventés. Ce sont des prérequis éditoriaux ou de publication, pas des raisons de retarder la validation du présent plan.

- Logo vectoriel et sélection des 25 photographies ; le client confirme les droits d'utilisation et les légendes.
- Texte approuvé sur le Chef, la philosophie culinaire et l'histoire du restaurant.
- Noms, descriptions et prix éventuels des quatre plats signatures ; deux exemples figurent au cahier, les deux autres restent à confirmer.
- Trois avis réels, noms/initiales et autorisations de publication, ou décision de ne pas afficher de témoignages.
- URLs des comptes sociaux et du catalogue WhatsApp Business.
- Confirmation des horaires, zones et modalités de livraison, numéro de téléphone et adresse avant publication.
- Validation du repère cartographique exact et des accès du gérant au CMS et au dépôt GitHub.
- Adresse destinataire des notifications du formulaire, texte d'information sur les données et adresse finale du site.

Aucun de ces champs ne devra être rempli avec de fausses informations. Des contenus de démonstration clairement identifiés peuvent être utilisés en développement puis retirés avant mise en ligne.

## 6. Périmètre

### Inclus

- Trois pages publiques responsives et navigables.
- Présentation du restaurant, plats, services, galerie, témoignages validés, contact et informations d'accès.
- Actions téléphone, courriel et WhatsApp ; formulaire de contact/devis Netlify ; carte d'accès.
- CMS de contenu léger relié à GitHub, déploiement Netlify, SEO local, optimisation, accessibilité et vérifications de publication.
- Documentation de développement et de mise à jour des contenus.

### Hors périmètre de la première version

- Réservation avec disponibilités en temps réel, compte client ou paiement.
- Commande et paiement en ligne, suivi de livraison ou intégration à une caisse.
- Traduction, blog, espace membre ou base de données métier.
- Création de photographies, logo, textes de témoignages ou contenus de marque qui ne sont pas fournis par le client.

## 7. Plan de réalisation

L'ordre ci-dessous respecte les dépendances techniques. Le développement ne doit commencer qu'après validation de ce document. Le délai cible du cahier est de trois semaines après validation des maquettes et réception des éléments nécessaires.

### Étape 1 — Contenus, accès et critères de recette

**À confirmer avec le client :** dépôt GitHub, accès Pages CMS, logo et photos, contenus éditoriaux, coordonnées, repère cartographique, réseaux sociaux, destinataire du formulaire et domaine.

**Résultat attendu :** inventaire éditorial approuvé et aucune information de production à inventer.

**Dépendances :** validation de `PROJECT_PLAN.md`.

### Étape 2 — Migration et fondation Astro

**Fichiers :** `package.json`, `package-lock.json`, `astro.config.mjs`, `src/pages/index.astro`, `src/pages/services.astro`, `src/pages/contact.astro`.

Remplacer l'entrée Vite de démonstration par Astro en génération statique ; conserver la commande de build Netlify et établir les trois routes. Retirer les anciens fichiers d'entrée Vite devenus obsolètes (`index.html`, `src/main.js`, `src/style.css`) après confirmation qu'ils ne servent plus.

**Vérifications :** installer les nouvelles dépendances, `npm run build`, puis ouvrir les trois routes avec `npm run preview` ; vérifier que la sortie contient du HTML pour chaque page.

**Dépendances :** étape 1.

### Étape 3 — Modèle de contenu et CMS

**Fichiers :** `.pages.yml`, `src/content.config.ts`, `src/content/settings/site.json`, `src/content/dishes/`, `src/content/services/`, `src/content/gallery/`, `src/content/testimonials/`, `public/media/`.

Définir les champs et validations du contenu, les collections Astro et les chemins médias du CMS. Tester une modification d'horaire et l'ajout d'une photo par le gérant, puis confirmer qu'ils sont présents dans le build Netlify.

**Vérifications :** schémas cohérents avec les contenus requis ; build réussi ; essai complet Pages CMS → GitHub → Netlify.

**Dépendances :** étapes 1 et 2.

### Étape 4 — Système visuel et composants partagés

**Fichiers :** `src/styles/tokens.css`, `src/styles/global.css`, `src/layouts/BaseLayout.astro`, `src/components/SiteHeader.astro`, `src/components/SiteFooter.astro`, `src/components/WhatsAppFab.astro`.

Implémenter les couleurs, typographies, espacements, états de liens, navigation, pied de page et action WhatsApp conformément à la compétence de direction artistique du projet. Les composants partagés devront fonctionner sur les trois pages sans cacher leur contenu.

**Vérifications :** rendu cohérent sur les trois routes ; clavier, focus visible, contrastes et largeur mobile vérifiés.

**Dépendances :** étape 2.

### Étape 5 — Page d'accueil

**Fichiers :** `src/pages/index.astro`, composants propres à la page dans `src/components/`.

Composer l'arrivée immersive, le récit du restaurant, quatre plats, six images et les témoignages uniquement si les contenus ont été approuvés. Mettre les CTA de réservation aux endroits utiles sans en saturer la page.

**Vérifications :** image d'ouverture lisible sur mobile et bureau, CTA WhatsApp fonctionnel, images alternatives pertinentes et aucun contenu d'exemple laissé comme contenu réel.

**Dépendances :** étapes 3 et 4.

### Étape 6 — Page Services

**Fichiers :** `src/pages/services.astro`, composants propres à la page dans `src/components/`.

Présenter les quatre services, les capacités et les destinations de livraison uniquement selon les informations confirmées ; relier réservation, devis ou commande au bon parcours.

**Vérifications :** chaque offre, capacité, horaire et lien est exact ; actions utilisables au clavier et au toucher.

**Dépendances :** étapes 3 et 4.

### Étape 7 — Page Contact et traitement des demandes

**Fichiers :** `src/pages/contact.astro`, `src/components/ContactForm.astro`, réglages Netlify Forms et notifications documentés dans `README.md`.

Créer le formulaire HTML statique avec les champs requis, validation native, protection anti-spam simple et état de confirmation compréhensible. Ajouter coordonnées cliquables, horaires CMS, carte et liens officiels confirmés.

**Vérifications :** formulaire détecté par Netlify dans un Deploy Preview, notification reçue, soumission au clavier testée, liens `tel:`, `mailto:` et WhatsApp validés ; l'essai local seul ne compte pas comme validation du traitement Netlify.

**Dépendances :** étapes 3 et 4.

### Étape 8 — SEO, qualité et publication

**Fichiers :** layout et métadonnées des trois pages, `src/pages/sitemap.xml.ts`, `src/pages/robots.txt.ts`, `README.md`, `netlify.toml` uniquement si un réglage confirmé le nécessite.

Ajouter les métadonnées locales et sociales, les données structurées contrôlées, le sitemap, les règles robots et le guide de mise à jour/publication. Préparer domaine et HTTPS dans Netlify après confirmation de la propriété du domaine.

**Vérifications :**

1. `npm run build` sans erreur et prévisualisation des trois routes.
2. Test visuel manuel à 320–375 px, tablette et grand écran ; menu, formulaire, images et CTA sans débordement.
3. Parcours clavier, focus visible, alternatives d'images, contrastes, formulaire et préférence de mouvement réduit.
4. Mesure Lighthouse mobile et test de chargement sur réseau simulé : viser un chargement inférieur à 3 secondes et un LCP inférieur à 2,5 secondes sur les pages représentatives ; corriger les images ou scripts qui dominent le coût.
5. Deploy Preview Netlify : routes, formulaires, notifications, CMS, liens et données structurées.
6. Mise en production après validation du gérant, raccordement de `jardindebastos.cm`, HTTPS et contrôle final des contenus.

**Dépendances :** étapes 5, 6 et 7.

## 8. Jalons, risques et critères d'acceptation

### Jalons indicatifs

Le calendrier de trois semaines commence **après** validation des maquettes et disponibilité des contenus et accès.

- **Semaine 1 :** Astro, collections éditoriales, CMS, identité visuelle et composants partagés.
- **Semaine 2 :** trois pages, intégration des vrais visuels, formulaires et révision éditoriale.
- **Semaine 3 :** tests mobiles/accessibilité/performance, Deploy Preview, retours, domaine et publication.

Tout retard de fourniture du logo, des photos, des textes ou des accès reporte le calendrier plutôt que d'être compensé par du contenu inventé.

### Risques à suivre

- **Disponibilité du gérant et du contenu :** obtenir les assets et informations avant les pages qui en dépendent.
- **Accès au CMS :** vérifier l'autorisation Pages CMS et le déclenchement Netlify sur le dépôt GitHub avant de former le gérant.
- **Carte et réseaux :** ne pas publier un mauvais repère ni des liens supposés.
- **Formulaire :** réaliser un essai sur Netlify et configurer les notifications avant d'annoncer le formulaire comme opérationnel.
- **Performance photo :** choisir les recadrages, formats et résolutions avec les assets réels et mesurer sur mobile.
- **Domaine et budget :** confirmer la disponibilité, les frais du domaine `.cm`, l'hébergement retenu et la répartition des 350 000 à 500 000 FCFA ; aucun prix ou service tiers n'est réputé compris sans confirmation.

### Conditions de recette

Le site est prêt à être remis lorsque :

- les trois pages sont accessibles, cohérentes, responsive et en français ;
- les coordonnées, horaires, services, liens et contenus publiés sont validés ;
- le gérant peut modifier un horaire et remplacer une photo via le CMS ;
- une demande de contact est détectée par Netlify et sa notification arrive au destinataire ;
- les actions de téléphone et WhatsApp fonctionnent sur mobile ;
- aucune donnée de démonstration, fausse recommandation ou clé secrète n'est publiée ;
- les contrôles SEO, clavier, contraste, préférence de mouvement et performance sont passés ;
- le domaine, HTTPS, sauvegarde du dépôt et consignes de maintenance sont remis au client.

## 9. Références de travail

- Cahier des charges client : [`Cahier des Charges - Le Jardin de Bastos.pdf`](./Cahier%20des%20Charges%20-%20Le%20Jardin%20de%20Bastos.pdf)
- Compétence projet : [`.github/skills/jardin-de-bastos-art-direction/SKILL.md`](./.github/skills/jardin-de-bastos-art-direction/SKILL.md)
- CMS retenu : [Pages CMS](https://pagescms.org/) — édition de contenu dans un dépôt GitHub.
- Déploiement existant : [`netlify.toml`](./netlify.toml).
