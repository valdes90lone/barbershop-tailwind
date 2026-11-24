# EXERCICE PRATIQUE — CRÉER UN SITE WEB PROFESSIONNEL AVEC HTML, TAILWIND CSS, JAVASCRIPT ET DES BIBLIOTHÈQUES

**Projet :** Barbershop — Site vitrine professionnel  
**Niveau de départ :** HTML, CSS et JavaScript fondamentaux  
**Technologies :** HTML5, Tailwind CSS 4, JavaScript moderne, Vite  
**Bibliothèques :** DaisyUI, Font Awesome, GSAP et Swiper  
**Objectif final :** réaliser un site vitrine responsive, interactif, soigné et suffisamment abouti pour figurer dans un portfolio professionnel.

---

# 1. Présentation générale de l'exercice 

## 1.1. Le contexte

Tu es développeur frontend junior. Un salon de coiffure pour hommes souhaite disposer d'un site web professionnel pour présenter son établissement, ses prestations, son équipe et ses réalisations.

Le client souhaite un site moderne, élégant et immersif.

Il doit permettre aux visiteurs de :

- Découvrir le salon.
- Comprendre les prestations proposées.
- Découvrir les réalisations des coiffeurs.
- Connaître les membres de l'équipe.
- Consulter les avis des clients.
- Contacter le salon et prendre rendez-vous.

Tu es chargé de transformer cette demande en une interface web complète.

## 1.2. Les règles de travail

Pendant cet exercice :

1. Tu ne dois pas recopier aveuglément du code trouvé sur Internet.
2. Tu dois essayer de résoudre chaque problème avant de demander de l'aide.
3. Tu dois comprendre le rôle de chaque bibliothèque avant de l'utiliser.
4. Tu dois privilégier les composants réutilisables.
5. Tu dois penser à la version mobile dès la conception.
6. Tu dois utiliser Git pour suivre l'évolution du projet.
7. Tu dois tester régulièrement ton travail.

**Règle importante :** une section n'est considérée comme terminée que lorsque son affichage, son comportement et son adaptation aux différentes tailles d'écran sont satisfaisants.

---

# 2. Comprendre le changement de méthode : CSS et JavaScript

Avant de commencer, il est essentiel de comprendre ce qui change lorsque tu passes d'un développement classique HTML/CSS/JS à un environnement moderne utilisant Tailwind et des bibliothèques.

## 2.1. Ce qui change en CSS

### Avant : le CSS traditionnel

Avec le CSS classique, tu écris généralement :

- Une structure HTML.
- Des classes personnalisées.
- Des règles CSS associées à ces classes.
- Des media queries pour gérer le responsive.

Tu définis toi-même les propriétés visuelles de chaque élément.

Par exemple, tu peux créer une classe pour un bouton, lui attribuer une couleur, un padding, une bordure, puis définir son comportement au survol.

### Maintenant : Tailwind CSS

Tailwind repose sur une approche différente : le *utility-first*.

Au lieu de créer systématiquement une classe CSS pour chaque élément, tu utilises des classes utilitaires directement dans ton HTML.

Ces classes correspondent à des propriétés CSS précises :

- Gestion de l'affichage.
- Dimensions.
- Marges et espacements.
- Couleurs.
- Typographie.
- Positionnement.
- Flexbox et Grid.
- Responsive design.
- Transitions et animations simples.

Tu dois donc apprendre à lire et à composer ces classes.

### Les notions Tailwind à maîtriser

| Notion | Ce que tu dois comprendre |
|---|---|
| Spacing | `p-`, `px-`, `py-`, `m-`, `gap-` |
| Dimensions | `w-`, `h-`, `min-h-`, `max-w-` |
| Flexbox | `flex`, `items-center`, `justify-between` |
| Grid | `grid`, `grid-cols-`, `col-span-` |
| Typographie | `text-`, `font-`, `leading-`, `tracking-` |
| Couleurs | `bg-`, `text-`, `border-` |
| Positionnement | `relative`, `absolute`, `fixed`, `inset-` |
| Responsive | `sm:`, `md:`, `lg:`, `xl:` |
| États | `hover:`, `focus:`, `active:` |
| Transitions | `transition-`, `duration-`, `ease-` |

Attention : les classes Tailwind ne sont pas des propriétés CSS. Ce sont des classes prédéfinies qui produisent des déclarations CSS.

### Le CSS traditionnel n'a pas disparu

Tu conserves un fichier CSS pour les éléments qui nécessitent une logique particulière :

- Les polices personnalisées.
- Les variables globales.
- Les styles de base.
- Les animations CSS spécifiques.
- Les styles difficiles à exprimer proprement avec les utilitaires.
- Les personnalisations globales.

Tu dois donc apprendre à utiliser Tailwind sans considérer le CSS traditionnel comme inutile.

### La personnalisation de Tailwind CSS 4

Tailwind CSS 4 utilise notamment une approche basée sur les directives CSS.

Tu as déjà rencontré :

- `@import "tailwindcss";`
- `@theme`
- `@utility`
- `@layer`
- `@plugin`

Voici le rôle général de chacune :

| Directive | Fonction |
|---|---|
| `@import` | Charge Tailwind CSS |
| `@theme` | Définit les tokens du design et les utilitaires associés |
| `@utility` | Permet de créer des utilitaires personnalisés |
| `@layer` | Organise certaines règles CSS dans les couches de styles |
| `@plugin` | Intègre un plugin compatible avec Tailwind |

Tu devras réutiliser les couleurs, les polices et les dimensions du projet plutôt que d'inventer de nouvelles valeurs à chaque section.

## 2.2. Ce qui change en JavaScript

### Avant : JavaScript classique dans une page HTML

Tu as probablement l'habitude d'utiliser :

- `document.querySelector()`
- `addEventListener()`
- `classList.add()`
- `classList.remove()`
- `classList.toggle()`
- `style`
- `innerHTML`

Ces notions restent valables.

Ce qui change principalement, c'est l'organisation de ton code.

### Maintenant : JavaScript avec Vite et les modules ES

Ton projet utilise Vite.

Tu travailles avec des fichiers JavaScript organisés en modules.

Deux mots sont particulièrement importants :

**Import :** permet d'utiliser dans un fichier une fonctionnalité provenant d'un autre fichier ou d'une bibliothèque.

**Export :** permet de rendre une fonction ou une valeur disponible dans un autre module.

Tu dois comprendre les notions suivantes :

- `import`
- `export`
- `export default`
- Les modules ES.
- Les dépendances npm.
- La séparation du code en plusieurs fichiers.
- L'initialisation des bibliothèques.

Tu ne dois pas nécessairement tout placer dans `main.js`.

À mesure que le projet grandira, tu pourras séparer les responsabilités : navigation, animations, carrousel, interactions, etc.

### Une différence importante

Avec une bibliothèque comme GSAP, tu n'es plus obligé de gérer manuellement toutes les étapes d'une animation.

Tu décris à la bibliothèque :

- L'élément à animer.
- Son état initial.
- Son état final.
- La durée.
- Le délai.
- La transition.
- L'ordre d'exécution.

La bibliothèque se charge de gérer l'animation.

Mais elle ne remplace pas JavaScript : tu dois toujours savoir sélectionner les éléments et comprendre quand déclencher les animations.

## 2.3. Comprendre les bibliothèques utilisées

Tu vas travailler avec quatre outils supplémentaires.

### DaisyUI

<https://daisyui.com/>

DaisyUI est un plugin de composants pour Tailwind CSS.

Il fournit des classes permettant de construire plus rapidement certains éléments d'interface.

Exemples :

- Boutons.
- Cartes.
- Badges.
- Menus.
- Modales.
- Champs de formulaire.

**Ce que tu dois comprendre :**

DaisyUI ne remplace pas Tailwind. Il s'appuie sur Tailwind et ajoute des composants avec des styles prédéfinis.

Ton travail consistera à identifier les composants utiles, à comprendre leurs classes et à les personnaliser pour respecter l'identité visuelle du salon.

Documentation : https://daisyui.com/components/

### Font Awesome

<https://fontawesome.com/>

Font Awesome est une bibliothèque d'icônes.

Elle te permet d'intégrer des icônes sans devoir télécharger et gérer individuellement des images.

Tu l'as installée avec le package :

`@fortawesome/fontawesome-free`

Tu dois apprendre à :

- Comprendre la différence entre les familles d'icônes.
- Identifier le nom d'une icône.
- Utiliser les classes correspondantes.
- Gérer sa taille et sa couleur avec Tailwind.
- Utiliser correctement les icônes dans les boutons et les liens.

**Indice :**

Une icône Font Awesome utilise généralement plusieurs classes. L'une indique la famille ou le style de l'icône, l'autre identifie l'icône elle-même.

Par exemple, une icône de menu et une icône de fermeture ne possèdent pas le même nom.

Consulte le catalogue officiel : https://fontawesome.com/icons

Ne devine pas les noms des icônes : recherche-les dans le catalogue et vérifie qu'elles sont disponibles dans la version Free installée.

### GSAP

<https://gsap.com/>

GSAP est une bibliothèque JavaScript spécialisée dans les animations.

Tu peux l'utiliser pour :

- Faire apparaître progressivement des éléments.
- Déplacer des images.
- Créer des animations au chargement.
- Animer des éléments au défilement.
- Synchroniser plusieurs animations.

Tu as également installé ScrollTrigger.

ScrollTrigger est un plugin de GSAP qui permet de déclencher des animations en fonction de la position de défilement de la page.

**Ce que tu dois comprendre avant de l'utiliser :**

1. La sélection des éléments.
2. La notion d'état initial.
3. La notion d'état final.
4. La durée d'une animation.
5. Le délai.
6. Le décalage entre plusieurs animations.
7. Le déclenchement au scroll.

Documentation :
- https://gsap.com/docs/v3/
- https://gsap.com/docs/v3/Plugins/ScrollTrigger/

### Swiper

<https://swiperjs.com/>

Swiper est une bibliothèque permettant de créer des carrousels et des sliders.

Tu l'utiliseras notamment pour les avis clients.

Un slider permet de faire défiler plusieurs éléments dans une zone donnée.

Tu dois comprendre :

- Le conteneur principal.
- Les diapositives.
- La navigation.
- La pagination.
- Le nombre de diapositives visibles.
- Le comportement responsive.
- L'initialisation en JavaScript.

Documentation : https://swiperjs.com/get-started

**À retenir :** installer une bibliothèque ne signifie pas savoir l'utiliser. Chaque fois que tu en auras besoin, tu devras consulter sa documentation et comprendre les éléments nécessaires à son fonctionnement.

---

# 3. Préparation du projet et Git

## Partie 1 — Préparer et versionner le projet

### Objectif

Mettre en place une organisation de travail professionnelle et créer le premier historique Git.

### Ce que tu dois faire

1. Vérifier que ton projet Vite fonctionne.
2. Identifier les fichiers principaux.
3. Vérifier les dépendances installées.
4. Identifier le rôle de `index.html`, `main.js`, `style.css` et `vite.config.js`.
5. Vérifier que les images et les polices sont correctement organisées.
6. Initialiser Git si ce n'est pas déjà fait.
7. Créer un premier commit.

### Informations textuelles nécessaires

Nom du projet : **BARBERSHOP**

Description : site vitrine d'un salon de coiffure spécialisé dans les coupes masculines, les dégradés, les tailles de barbe et les soins capillaires.

### Ce que j'attends de toi

- Un projet qui démarre sans erreur.
- Une structure de dossiers compréhensible.
- Un dépôt Git initialisé.
- Un premier commit descriptif.

### Git à utiliser

Tu dois apprendre à utiliser :

- `git init`
- `git status`
- `git add`
- `git commit`
- `git log`

### Critères de validation

- Le serveur Vite démarre.
- Le navigateur affiche le site.
- Git détecte les fichiers du projet.
- Le premier commit est enregistré.

---

# 4. Construction de l'interface

Le Header et le Hero sont déjà réalisés et fonctionnels.

Tu ne dois pas les reconstruire immédiatement.

Tu dois d'abord les examiner, comprendre leur organisation et vérifier que leur structure pourra accueillir les nouvelles sections.

## Partie 2 — Analyse et amélioration de la base existante

### Objectif

Comprendre le code déjà réalisé avant d'ajouter de nouvelles fonctionnalités.

### Ce que tu dois faire

1. Examiner la structure HTML du Header.
2. Identifier les éléments qui composent la navigation.
3. Comprendre le fonctionnement du menu mobile.
4. Examiner la structure du Hero.
5. Identifier les classes Tailwind utilisées.
6. Identifier les interactions JavaScript.
7. Comprendre le rôle de GSAP dans l'animation du Hero.
8. Vérifier les attributs d'accessibilité des boutons et des liens.

### Ce que j'attends de toi

Tu dois pouvoir expliquer :

- Pourquoi le Header utilise `position: fixed`.
- Pourquoi le menu mobile est masqué au départ.
- Comment le menu devient visible.
- Pourquoi certains éléments utilisent `absolute` et d'autres `relative`.
- Comment le JavaScript modifie les classes Tailwind.
- Comment GSAP anime le contenu du Hero.

### Git

Crée un commit lorsque tu as terminé les éventuelles corrections.

---

## Partie 3 — La section About Us

### Objectif

Construire une section de présentation du salon.

Cette section doit présenter l'établissement, son expérience et sa philosophie.

### Informations textuelles

**Petit titre :**

ABOUT US

**Titre principal :**

More Than Just a Haircut

**Description :**

At BARBERSHOP, we believe that a great haircut is more than just a style. It's a statement of confidence, personality, and individuality.

Our experienced barbers combine traditional techniques with modern trends to deliver exceptional grooming experiences.

From classic cuts to contemporary fades, we take pride in every detail.

**Informations complémentaires :**

- Professional Barbers
- Premium Products
- Personalized Service
- Attention to Detail

**Bouton :**

Discover Our Story

### Ce que tu dois faire

1. Créer une nouvelle section après le Hero.
2. Définir sa structure HTML.
3. Organiser le contenu en deux zones : visuel et texte.
4. Intégrer une image représentative du salon ou d'un barbier.
5. Ajouter les quatre éléments de différenciation.
6. Créer un bouton.
7. Adapter la disposition aux écrans mobiles et aux ordinateurs.

### Ce que j'attends de toi

Une section équilibrée, lisible et élégante.

L'image ne doit pas simplement être placée à côté du texte : elle doit participer à la composition visuelle.

### Notions à travailler

- CSS Grid et Flexbox avec Tailwind.
- Espacements.
- Gestion des images.
- `object-cover`.
- `object-position`.
- Responsive design.
- Hiérarchie typographique.

### Indices

- Pour une disposition en deux colonnes, explore les utilitaires Grid.
- Pour éviter qu'une image soit déformée, étudie `object-fit`.
- Pour gérer la disposition sur mobile et ordinateur, utilise les préfixes responsive de Tailwind.
- Ne cherche pas à faire tenir deux colonnes sur un écran étroit.

### Git

Enregistre ton travail dans un commit.

---

## Partie 4 — La section Our Work

### Objectif

Créer une galerie présentant les réalisations du salon.

Cette section doit permettre aux visiteurs de découvrir la qualité du travail des barbiers.

### Informations textuelles

**Petit titre :**

OUR PORTFOLIO

**Titre principal :**

Our Latest Haircuts

**Description :**

Discover our latest work and explore the different styles crafted by our professional barbers.

**Catégories :**

- All
- Haircuts
- Fades
- Beard
- Styling

**Exemples de réalisations :**

1. Classic Haircut
2. Modern Fade
3. Textured Crop
4. Beard Design
5. Premium Grooming
6. Low Fade

### Ce que tu dois faire

1. Créer la section.
2. Construire une galerie d'images.
3. Organiser les images dans une grille.
4. Ajouter un titre à chaque réalisation.
5. Créer les catégories de filtrage.
6. Ajouter un effet visuel au survol.
7. Faire en sorte que la galerie reste agréable sur mobile.

### Ce que j'attends de toi

Une galerie moderne qui met les réalisations en valeur.

Les images doivent être cohérentes en termes de proportions et de présentation.

### Notions à travailler

- CSS Grid.
- Images et ratios.
- `overflow-hidden`.
- `group` et `group-hover`.
- Transitions Tailwind.
- Événements JavaScript.
- Manipulation du DOM.
- Filtrage d'éléments.

### Indices

- Le filtrage consiste à afficher ou masquer certains éléments selon leur catégorie.
- Chaque réalisation doit posséder une information permettant de connaître sa catégorie.
- Les boutons de catégorie doivent déclencher une action JavaScript.
- Pour les effets au survol, explore les classes `group`, `group-hover:scale-*` et `transition-*`.

### Git

Crée un commit après avoir vérifié le filtrage et le responsive.

---

## Partie 5 — La section Services

### Objectif

Présenter les prestations proposées par le salon.

### Informations textuelles

**Petit titre :**

OUR SERVICES

**Titre principal :**

Premium Grooming Services

**Description :**

We offer a complete range of grooming services designed to keep you looking sharp, confident, and stylish.

### Prestations

**1. Classic Haircut**

A timeless haircut tailored to your face shape, personality, and preferences.

Prix indicatif : $20

**2. Skin Fade**

A clean and precise fade that delivers a sharp and modern appearance.

Prix indicatif : $25

**3. Beard Trim**

Professional beard shaping and trimming for a clean and well-groomed look.

Prix indicatif : $15

**4. Hair & Beard Combo**

The perfect combination of a fresh haircut and a perfectly shaped beard.

Prix indicatif : $35

**5. Hair Styling**

Professional styling to achieve the look you want for any occasion.

Prix indicatif : $18

**6. Premium Grooming**

A complete grooming experience with personalized attention and premium products.

Prix indicatif : $45

### Ce que tu dois faire

1. Créer la structure de la section.
2. Présenter les six prestations.
3. Concevoir des cartes homogènes.
4. Ajouter une image ou une icône pertinente à chaque prestation.
5. Afficher le nom, la description et le prix.
6. Ajouter un lien ou un bouton d'action.
7. Adapter la grille aux différents écrans.

### Ce que j'attends de toi

Des cartes cohérentes et bien structurées.

Les prix doivent être faciles à repérer, sans prendre le dessus sur les titres et les descriptions.

### Notions à travailler

- Répétition de composants.
- Grid responsive.
- Hiérarchie visuelle.
- Personnalisation des boutons.
- Icônes.
- DaisyUI.

### Indices sur DaisyUI

Tu as déjà installé DaisyUI.

Avant de construire toutes les cartes, consulte sa documentation et recherche les composants qui pourraient t'être utiles.

Ne prends pas un composant tout fait sans réfléchir à son adaptation au design du projet.

Tu dois notamment comprendre :

- Comment DaisyUI applique ses styles.
- Comment ses composants utilisent les couleurs du thème.
- Comment les classes DaisyUI peuvent être associées aux classes Tailwind.
- Comment personnaliser un composant sans détruire son comportement.

### Indices sur Font Awesome

Pour les icônes :

1. Ouvre le catalogue Font Awesome.
2. Recherche une icône correspondant à la prestation.
3. Vérifie qu'elle est disponible dans la version Free.
4. Identifie les classes nécessaires.
5. Intègre-la dans ton HTML.
6. Ajuste sa taille et sa couleur avec Tailwind.

Ne confonds pas le nom affiché dans le catalogue et la classe CSS à utiliser.

### Git

Crée un commit lorsque les six cartes sont terminées.

---

## Partie 6 — La section Our Experts

### Objectif

Présenter l'équipe du salon et mettre en valeur son expertise.

### Informations textuelles

**Petit titre :**

MEET OUR TEAM

**Titre principal :**

Our Professional Barbers

**Description :**

Meet the talented professionals behind every great haircut. Our team combines experience, creativity, and passion to deliver outstanding results.

### Membres de l'équipe

**1. James Anderson**

Senior Barber

Specialist in classic haircuts and traditional grooming.

**2. Michael Carter**

Fade Specialist

Expert in modern fades and contemporary hairstyles.

**3. Daniel Wilson**

Beard Specialist

Focused on beard design, shaping, and professional grooming.

### Ce que tu dois faire

1. Créer une section de présentation de l'équipe.
2. Construire une carte par membre.
3. Intégrer une photo professionnelle.
4. Afficher le nom et la spécialité.
5. Ajouter des liens vers les réseaux sociaux.
6. Ajouter des effets au survol.
7. Gérer le responsive.

### Ce que j'attends de toi

Une présentation élégante qui donne une identité à chaque membre de l'équipe.

Les cartes doivent être visuellement cohérentes.

### Notions à travailler

- Réutilisation de structures HTML.
- Positionnement.
- Icônes Font Awesome.
- Effets de survol.
- Transitions.
- Gestion des images.

### Indices

Pour les réseaux sociaux, tu peux rechercher des icônes Facebook, Instagram et TikTok dans Font Awesome.

Pense à rendre les liens accessibles : une icône seule ne suffit pas toujours à expliquer la destination d'un lien à un lecteur d'écran.

### Git

Crée un commit après validation.

---

## Partie 7 — La section Testimonials

### Objectif

Afficher les avis des clients sous forme de carrousel.

C'est ici que tu vas découvrir Swiper.

### Informations textuelles

**Petit titre :**

TESTIMONIALS

**Titre principal :**

What Our Clients Say

**Description :**

Our clients are our greatest motivation. Discover what they think about their experience at BARBERSHOP.

### Avis clients

**Avis 1 — David Thompson**

"Excellent service! The barber understood exactly what I wanted. The haircut was clean, precise, and professionally done."

**Avis 2 — Robert Miller**

"Great atmosphere and very professional staff. I always leave the salon feeling confident and satisfied."

**Avis 3 — Christopher Davis**

"One of the best barbershops I've visited. The attention to detail and quality of service are outstanding."

**Avis 4 — Andrew Johnson**

"Professional barbers, great products, and an amazing experience. Highly recommended!"

### Ce que tu dois faire

1. Construire la section des témoignages.
2. Créer une carte pour chaque avis.
3. Afficher le nom du client.
4. Afficher son commentaire.
5. Ajouter une notation visuelle.
6. Intégrer Swiper.
7. Configurer la navigation.
8. Ajouter une pagination.
9. Adapter le nombre de cartes visibles selon la largeur de l'écran.

### Ce que j'attends de toi

Un carrousel fluide et agréable à utiliser.

Sur mobile, les témoignages doivent rester lisibles et accessibles.

### Notions à travailler

- Initialisation d'une bibliothèque JavaScript.
- Imports CSS et JavaScript.
- Structure HTML attendue par une bibliothèque.
- Configuration d'un composant externe.
- Navigation.
- Pagination.
- Breakpoints.

### Indices pour Swiper

Ne commence pas directement par écrire ton code.

Commence par consulter le guide officiel de démarrage.

Tu dois comprendre trois éléments fondamentaux :

- Le conteneur principal.
- Le conteneur des diapositives.
- Les diapositives elles-mêmes.

Ensuite, identifie les modules nécessaires à la navigation et à la pagination.

Attention : importer Swiper ne suffit pas. Tu dois également respecter sa structure HTML et initialiser le composant en JavaScript.

### Git

Crée un commit lorsque le carrousel fonctionne correctement.

---

## Partie 8 — La section Contact

### Objectif

Permettre aux visiteurs de contacter le salon et de demander un rendez-vous.

### Informations textuelles

**Petit titre :**

GET IN TOUCH

**Titre principal :**

Book Your Next Appointment

**Description :**

Ready for a fresh look? Get in touch with our team and book your next grooming experience.

### Informations de contact

**Adresse :**

25 Main Street, New York, NY 10001

**Téléphone :**

+1 555 123 4567

**Email :**

contact@barbershop.com

**Horaires :**

- Monday – Friday: 9:00 AM – 8:00 PM
- Saturday: 9:00 AM – 6:00 PM
- Sunday: Closed

### Formulaire

Champs demandés :

- Full Name
- Email Address
- Phone Number
- Select a Service
- Preferred Date
- Your Message

**Bouton :**

Send Appointment Request

### Ce que tu dois faire

1. Construire la section Contact.
2. Présenter les informations du salon.
3. Créer un formulaire.
4. Utiliser les champs HTML adaptés.
5. Ajouter les attributs nécessaires à la validation.
6. Vérifier les données saisies en JavaScript.
7. Afficher un message de confirmation ou d'erreur.
8. Adapter la section au mobile.

### Ce que j'attends de toi

Un formulaire compréhensible et agréable à utiliser.

Les champs doivent être correctement identifiés et les erreurs doivent être expliquées clairement.

### Notions à travailler

- Formulaires HTML.
- `label`.
- `input`.
- `select`.
- `textarea`.
- `required`.
- Types de champs.
- Événement `submit`.
- `preventDefault()`.
- Validation JavaScript.
- Affichage dynamique des messages.

### Indices

- Le navigateur possède déjà un mécanisme de validation HTML.
- JavaScript te permettra de personnaliser les contrôles.
- Pense à empêcher le rechargement de la page lors de la soumission si tu réalises une validation côté client.
- Une confirmation visuelle ne signifie pas qu'un rendez-vous a réellement été enregistré : sans backend ou service externe, ton formulaire reste une démonstration frontend.

### Git

Crée un commit après avoir testé les différents cas de validation.

---

## Partie 9 — Le Footer

### Objectif

Terminer le site avec un pied de page complet et professionnel.

### Informations textuelles

**Logo :**

BARBERSHOP

**Description :**

Your style, our passion. Experience professional grooming and discover the difference of a perfect haircut.

### Navigation

- Home
- About Us
- Our Work
- Services
- Our Experts
- Contact

### Informations complémentaires

**Opening Hours**

Monday – Friday: 9:00 AM – 8:00 PM

Saturday: 9:00 AM – 6:00 PM

Sunday: Closed

**Contact**

+1 555 123 4567

contact@barbershop.com

25 Main Street, New York, NY 10001

**Copyright**

© 2026 BARBERSHOP. All rights reserved.

### Ce que tu dois faire

1. Construire le footer.
2. Organiser les informations en plusieurs zones.
3. Ajouter les liens de navigation.
4. Ajouter les réseaux sociaux.
5. Ajouter les coordonnées.
6. Ajouter le copyright.
7. Gérer la disposition mobile.

### Ce que j'attends de toi

Un footer qui reprend l'identité visuelle du site et qui facilite l'accès aux informations importantes.

### Notions à travailler

- Flexbox et Grid.
- Liens internes.
- Icônes.
- Responsive design.
- Espacements.
- Organisation de contenu.

### Git

Crée un commit.

---

# 5. Animations et expérience utilisateur

## Partie 10 — Ajouter des animations avec GSAP

### Objectif

Donner au site une dimension plus immersive grâce à des animations élégantes.

Tu as déjà utilisé GSAP dans le Hero. Tu vas maintenant approfondir son utilisation.

### Ce que tu dois faire

Ajouter progressivement :

1. Une animation d'apparition sur la section About.
2. Une animation sur les cartes de la galerie.
3. Une animation sur les cartes Services.
4. Une animation sur les membres de l'équipe.
5. Une animation sur les témoignages.
6. Une animation discrète sur certains titres.

Ensuite, utiliser ScrollTrigger pour déclencher certaines animations lorsque les sections entrent dans la zone visible.

### Ce que j'attends de toi

Des animations discrètes et cohérentes.

Les animations ne doivent pas ralentir la navigation ni gêner la lecture.

### Notions à travailler

- `gsap.to()`.
- `gsap.from()`.
- `gsap.fromTo()`.
- `duration`.
- `delay`.
- `stagger`.
- `ease`.
- `ScrollTrigger`.
- Déclenchement au scroll.

### Indices

Commence par comprendre la différence entre une animation `from` et une animation `to`.

Ensuite, découvre comment animer plusieurs éléments simultanément.

Pour ScrollTrigger, étudie particulièrement les notions de déclenchement et de zone de défilement.

Documentation : https://gsap.com/docs/v3/Plugins/ScrollTrigger/

**Attention :** évite d'animer tous les éléments. Une animation doit servir l'expérience utilisateur, pas simplement démontrer que tu connais GSAP.

### Git

Crée un commit après avoir testé les animations sur plusieurs sections.

---

## Partie 11 — Améliorer l'expérience utilisateur

### Objectif

Ajouter les interactions et les petits détails qui rendent un site professionnel.

### Ce que tu dois faire

1. Vérifier que tous les liens de navigation fonctionnent.
2. Ajouter un état actif aux liens de navigation si nécessaire.
3. Vérifier le comportement du Header lors du défilement.
4. Ajouter un bouton permettant de revenir en haut de page.
5. Vérifier les interactions des boutons.
6. Ajouter des états `hover` et `focus` cohérents.
7. Vérifier que le menu mobile se ferme correctement.
8. Vérifier que les éléments interactifs sont accessibles au clavier.

### Ce que j'attends de toi

Un site cohérent, fluide et agréable à utiliser.

### Notions à travailler

- Événements JavaScript.
- Gestion des classes.
- `window.scrollY`.
- `window.scrollTo()`.
- `scroll-behavior`.
- `focus-visible`.
- Attributs ARIA.
- Gestion du clavier.

### Indices

Pour le bouton de retour en haut, tu dois réfléchir à deux choses :

- À partir de quelle position doit-il apparaître ?
- Quelle action doit-il effectuer lorsqu'on clique dessus ?

Pour l'accessibilité, n'oublie pas que tous les utilisateurs ne naviguent pas avec une souris.

### Git

Crée un commit.

---

# 6. Finalisation professionnelle

## Partie 12 — Responsive design et tests

### Objectif

Vérifier que le site est réellement utilisable sur différentes tailles d'écran.

### Ce que tu dois faire

Tester au minimum les dimensions suivantes :

| Type d'écran | Largeur indicative |
|---|---:|
| Petit mobile | 320 px |
| Mobile | 375 px |
| Grand mobile | 430 px |
| Tablette | 768 px |
| Petit ordinateur | 1024 px |
| Ordinateur | 1440 px |
| Grand écran | 1920 px |

Pour chaque dimension :

1. Vérifier le Header.
2. Vérifier le Hero.
3. Vérifier toutes les sections.
4. Vérifier les images.
5. Vérifier les cartes.
6. Vérifier le carrousel.
7. Vérifier le formulaire.
8. Vérifier le Footer.

### Ce que j'attends de toi

Aucun débordement horizontal non souhaité.

Aucun texte coupé.

Aucun bouton inaccessible.

Aucune image déformée.

Une disposition adaptée à chaque écran.

### Notions à travailler

- Breakpoints Tailwind.
- Mobile-first.
- Dimensions relatives.
- `min-height`.
- `max-width`.
- `overflow`.
- `object-fit`.
- Flexbox responsive.
- Grid responsive.

### Indices

Ne corrige pas un problème mobile en ajoutant simplement des marges au hasard.

Identifie d'abord l'élément responsable du problème.

Utilise les outils de développement du navigateur pour examiner les dimensions, les classes et les propriétés calculées.

### Git

Crée un commit après cette phase de tests.

---

## Partie 13 — Optimisation et qualité du code

### Objectif

Transformer ton travail en un projet présentable dans un portfolio.

### Ce que tu dois faire

1. Vérifier la console du navigateur.
2. Vérifier les erreurs JavaScript.
3. Vérifier les chemins des images.
4. Vérifier les imports.
5. Supprimer les styles et les fonctions inutilisés.
6. Vérifier les noms de classes et de variables.
7. Vérifier la structure sémantique HTML.
8. Ajouter des textes alternatifs pertinents aux images.
9. Vérifier les performances des images.
10. Vérifier le titre et les métadonnées de la page.

### Ce que j'attends de toi

Un code organisé, lisible et maintenable.

Tu dois pouvoir reprendre ton projet plusieurs semaines plus tard sans avoir besoin de tout réapprendre.

### Notions à travailler

- Sémantique HTML.
- SEO de base.
- Optimisation des images.
- Organisation JavaScript.
- Gestion des dépendances.
- Console du navigateur.
- Outils de développement.
- Qualité et maintenabilité du code.

### Git

Crée un commit de finalisation.

Vérifie l'historique avec `git log`.

---

# 7. Mise en production

## Partie 14 — Préparer le site pour sa publication

### Objectif

Préparer une version de production du site.

### Ce que tu dois faire

1. Comprendre la différence entre le serveur de développement et la version de production.
2. Générer le build avec Vite.
3. Vérifier le résultat de la compilation.
4. Tester la version compilée localement.
5. Choisir une plateforme d'hébergement.
6. Publier le site.
7. Vérifier les chemins des ressources une fois le site en ligne.

### Ce que j'attends de toi

Un site accessible depuis une URL publique.

Tu dois également conserver ton code source dans un dépôt Git.

### Notions à travailler

- `npm run dev`.
- `npm run build`.
- `npm run preview`.
- Dossier `dist`.
- Déploiement.
- Hébergement statique.
- GitHub.

---

# 8. Les règles Git pendant tout le projet

Git ne doit pas être une activité réservée à la fin du projet.

Tu dois l'utiliser régulièrement.

Voici les moments où tu dois enregistrer ton travail :

| Moment | Exemple de message de commit |
|---|---|
| Préparation | `chore: initialize project structure` |
| Base existante | `refactor: review header and hero` |
| About | `feat: add about section` |
| Galerie | `feat: add portfolio gallery` |
| Services | `feat: add services section` |
| Équipe | `feat: add team section` |
| Témoignages | `feat: add testimonials slider` |
| Contact | `feat: add contact section` |
| Footer | `feat: add footer` |
| Animations | `feat: add scroll animations` |
| Responsive | `style: improve responsive layouts` |
| Optimisation | `refactor: improve code quality` |
| Production | `chore: prepare production build` |

Tu dois apprendre à faire la différence entre :

- `feat` : ajout d'une fonctionnalité.
- `fix` : correction d'un problème.
- `style` : modification visuelle sans changement de logique.
- `refactor` : amélioration de la structure du code.
- `chore` : tâches techniques et maintenance.

---

# 9. Conditions de réussite du projet

À la fin de l'exercice, tu dois être capable de réaliser les tâches suivantes sans recopier un tutoriel complet.

## HTML

- Construire une page avec une structure sémantique.
- Organiser les sections.
- Créer des cartes.
- Créer des formulaires.
- Utiliser correctement les liens et les boutons.

## Tailwind CSS

- Construire des mises en page avec Flexbox.
- Construire des grilles avec Grid.
- Gérer les espacements.
- Gérer les couleurs et les typographies.
- Créer des effets au survol.
- Gérer les différents breakpoints.
- Personnaliser les tokens du design.

## JavaScript

- Sélectionner des éléments.
- Gérer des événements.
- Manipuler les classes CSS.
- Filtrer des éléments.
- Valider un formulaire.
- Organiser ton code en modules.
- Initialiser des bibliothèques.

## Bibliothèques

- Utiliser les composants DaisyUI.
- Intégrer des icônes Font Awesome.
- Créer des animations avec GSAP.
- Déclencher des animations avec ScrollTrigger.
- Construire un carrousel avec Swiper.

## Git

- Initialiser un dépôt.
- Suivre les modifications.
- Créer des commits.
- Consulter l'historique.
- Garder un projet organisé.

## Qualité professionnelle

- Concevoir une interface responsive.
- Respecter une identité visuelle.
- Organiser le code.
- Penser à l'accessibilité.
- Tester les interactions.
- Préparer un projet pour la production.

---

# 10. Méthode d'accompagnement pendant l'exercice

Nous allons travailler partie par partie.

Pour chaque partie :

1. Tu lis les objectifs.
2. Tu réalises le travail sans regarder une solution complète.
3. Tu testes ton résultat.
4. Tu me transmets ton code.
5. J'analyse ton travail.
6. Je t'explique les erreurs et les améliorations possibles.
7. Tu corriges.
8. Tu réalises ton commit Git.
9. Nous passons à la partie suivante.

Je ne te donnerai pas immédiatement la solution complète lorsque tu rencontres une difficulté.

Je commencerai par des explications, des pistes de réflexion et des indices. Si nécessaire, je te donnerai un exemple ciblé sur la notion que tu ne maîtrises pas.

**L'objectif n'est pas seulement que le site fonctionne. L'objectif est que tu sois capable de le refaire, de l'expliquer et de défendre tes choix techniques devant un autre développeur.**

**Résultat attendu : un véritable projet de portfolio, construit progressivement avec des technologies modernes, et dont tu maîtrises réellement le fonctionnement.**