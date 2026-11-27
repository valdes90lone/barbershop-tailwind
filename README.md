# BARBERSHOP — Site vitrine d'un salon de coiffure

Site vitrine responsive pour un salon de coiffure masculine : présentation du salon, prestations et tarifs, réalisations, équipe, témoignages clients et coordonnées.

Migration du site initial (HTML, CSS, JavaScript) vers **Tailwind CSS 4**, **DaisyUI**, **Vite** et des bibliothèques JavaScript (**Swiper**, **GSAP** et **ScrollTrigger**, **Font Awesome**).

## Fonctionnalités

- Navigation responsive : menu latéral sur mobile, barre horizontale sur desktop, fond qui change au défilement.
- Lien actif dans la navigation selon la section visible.
- Bouton « retour en haut » qui apparaît après 350 px de défilement.
- Carrousel de réalisations (Swiper, boucle, pagination fractionnée).
- Liste des prestations et tarifs, générée depuis des données JavaScript.
- Carrousel de témoignages clients (Swiper).
- Cartes de l'équipe, générées depuis des données JavaScript.
- Animations d'entrée et au défilement (GSAP + ScrollTrigger), désactivées si l'utilisateur préfère moins de mouvement (`prefers-reduced-motion`).
- Lien WhatsApp et carte Google Maps dans la section contact.

## Technologies

| Outil | Rôle |
| --- | --- |
| [Vite](https://vite.dev/) | Serveur de développement et build |
| [Tailwind CSS 4](https://tailwindcss.com/) | Styles utilitaires (plugin `@tailwindcss/vite`) |
| [DaisyUI 5](https://daisyui.com/) | Composants (boutons, badges) et thème `barbershop` |
| [Swiper](https://swiperjs.com/) | Carrousels |
| [GSAP](https://gsap.com/) + ScrollTrigger | Animations |
| [Font Awesome](https://fontawesome.com/) | Icônes |

## Prérequis

- Node.js (version compatible avec Vite 8, LTS recommandée)
- npm

## Installation

```bash
git clone https://github.com/valdes90lone/barbershop-tailwind.git
cd barbershop-tailwind
npm install
```

## Commandes disponibles

| Commande | Description |
| --- | --- |
| `npm run dev` | Lance le serveur de développement (http://localhost:8080) |
| `npm run build` | Génère la version de production dans `dist/` |
| `npm run preview` | Sert localement le contenu de `dist/` pour vérifier le build |

## Lancer le projet en développement

```bash
npm run dev
```

Le port est fixé à `8080` (`strictPort: true` dans `vite.config.js`) : si le port est occupé, Vite ne bascule pas sur un autre port.

## Build de production

```bash
npm run build
npm run preview
```

## Architecture des dossiers

```
barbershop-tailwind/
├── index.html                 # Structure de la page et templates HTML (<template>)
├── package.json               # Dépendances et scripts
├── vite.config.js             # Configuration Vite (plugin Tailwind, port 8080)
├── public/
│   └── assets/
│       ├── fonts/             # Montserrat et Chakra Petch
│       └── img/               # Images, favicon et logo (servis tels quels)
└── src/
    ├── style.css              # Thème Tailwind/DaisyUI et styles personnalisés
    └── js/
        ├── main.js            # Point d'entrée : imports CSS, JS et initialisation
        ├── function.js        # Utilitaires : createElement(), createTemplate()
        ├── nav.js             # Menu, en-tête au défilement, lien actif, retour en haut
        ├── work-swiper.js     # Données et carrousel des réalisations
        ├── service-swiper.js  # Prestations, témoignages et carrousel associé
        ├── expert.js          # Données et cartes de l'équipe
        └── animations.js      # Animations GSAP et ScrollTrigger
```

## Modifier le projet

- **Textes, prestations, experts, témoignages et réalisations** : modifiez les tableaux `slides`, `EXPERTSDATA`, `SERVICESPLAN` et `TESTIMONIALS` dans les fichiers `src/js/` correspondants.
- **Structure et textes statiques** : `index.html`. Les templates `<template>` (`slide-exemple`, `expertCard`, `serviceRow`, `serviceTestimonials`) définissent l'apparence des éléments générés.
- **Couleurs, polices et typographie** : bloc `@theme` et `@plugin "daisyui/theme"` dans `src/style.css`.
- **Animations** : `src/js/animations.js`. Les cibles sont des sélecteurs CSS (ids, classes ou `data-counter`) présents dans `index.html`. Si vous renommez un élément, mettez à jour le sélecteur correspondant.
- **Images** : placez les fichiers dans `public/assets/img/` et référencez-les avec un chemin absolu, par exemple `/assets/img/work-img-1.png`.
- **Coordonnées du salon** (adresse, téléphone, WhatsApp, e-mail, réseaux sociaux, carte) : à mettre à jour dans `index.html`, section contact et footer.
