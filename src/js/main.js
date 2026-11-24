/* =========================================
   1. IMPORTS
========================================= */

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "swiper/css/bundle";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "/src/style.css";
import "/src/js/nav.js";

gsap.registerPlugin(ScrollTrigger);

/* =========================================
   2. HEADER ELEMENTS
========================================= */

const header = document.querySelector("#header");
const navMenu = document.querySelector("#nav-menu");
const navToggle = document.querySelector("#nav-toggle");
const navClose = document.querySelector("#nav-close");

const navLinks = document.querySelectorAll(".nav-link");

const navLogo = document.querySelector("#nav-logo");

/* =========================================
   3. MOBILE NAVIGATION
========================================= */

function openMenu() {
  navMenu.classList.remove("translate-x-full");
  navMenu.classList.add("translate-x-0");

  navToggle.setAttribute("aria-expanded", "true");
}

function closeMenu() {
  navMenu.classList.remove("translate-x-0");
  navMenu.classList.add("translate-x-full");

  navToggle.setAttribute("aria-expanded", "false");
}

navToggle.addEventListener("click", openMenu);

navClose.addEventListener("click", closeMenu);

// Close menu after clicking a navigation link
navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

// Close menu with Escape
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

// Reset menu when switching to desktop
window.addEventListener("resize", () => {
  if (window.matchMedia("(min-width: 1150px)").matches) {
    closeMenu();
  }
});

/* =========================================
   4. HEADER ON SCROLL
========================================= */

function handleHeaderScroll() {
  const isScrolled = window.scrollY >= 50;
  const isDesktop = window.matchMedia("(min-width: 1150px)").matches;

  header.classList.toggle("bg-white", isScrolled);
  header.classList.toggle("shadow-lg", isScrolled);

  navLogo.classList.toggle("text-title", isScrolled);
  navLogo.classList.toggle("text-white", !isScrolled);

  navToggle.classList.toggle("text-title", isScrolled);
  navToggle.classList.toggle("text-white", !isScrolled);

  if (isDesktop) {
    navLinks.forEach((link, index) => {
      if (index !== 0) {
        link.classList.toggle("lg:text-title", isScrolled);
        link.classList.toggle("lg:text-white", !isScrolled);
      }
    });
  }
}

window.addEventListener("scroll", handleHeaderScroll);

handleHeaderScroll();

/* =========================================
   5. HERO ANIMATION
========================================= */

const heroContent = document.querySelector("#hero-content");

gsap.from(heroContent.children, {
  opacity: 0,
  y: 35,
  duration: 1,
  stagger: 0.2,
  ease: "power3.out",
  delay: 0.2,
});
