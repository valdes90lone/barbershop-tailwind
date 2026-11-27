
/* ==================================================
   1. IMPORTS CSS
================================================== */

// CSS de Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// CSS Font Awesome
import "@fortawesome/fontawesome-free/css/all.min.css";

// CSS principal du projet
// Important : le CSS personnalisé vient après celui de Swiper.
import "../style.css";



/* ==================================================
   2. IMPORTS JAVASCRIPT
================================================== */

// Services et témoignages
import { initSwiperTestimonials } from "./service-swiper.js";
import { initWorkSwiper } from "../js/work-swiper.js";

// Ajoute ici tes autres imports de modules
// Exemple :
// import "./nav.js";
// import "./work-swiper.js";
import "../js/nav.js"
import "../js/function.js"
import "../js/service-swiper.js"
import "../js/work-swiper.js"
import "../js/expert.js"
import { initAnimations } from "./animations.js";


/* ==================================================
   3. INITIALISATION
================================================== */

// Le script étant un module ES, il est exécuté après
// l'analyse du HTML par le navigateur.
initWorkSwiper()
initSwiperTestimonials();

// Animations GSAP + ScrollTrigger (après la génération du contenu dynamique)
initAnimations();
