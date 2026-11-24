
import "../style.css";

// Font Awesome
import "@fortawesome/fontawesome-free/css/all.min.css";

// Swiper CSS
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Project modules
import "./nav.js";
import { initWorkSwiper } from "./work-swiper.js";


// ================= GSAP =================

gsap.registerPlugin(ScrollTrigger);


// ================= HERO ANIMATION =================

const heroContent = document.querySelector("#hero-content");

if (heroContent) {

  gsap.from(heroContent.children, {
    opacity: 0,
    y: 35,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
    delay: 0.2,
  });

}


// ================= WORK SWIPER =================

initWorkSwiper();
