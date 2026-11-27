import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// ================= SETUP =================

gsap.registerPlugin(ScrollTrigger);

/**
 * Reveal animation: fade in and slide up from 100px.
 * Pass `trigger` to start the animation when that section enters the viewport;
 * without it, the animation plays on page load (used for the hero).
 *
 * @param {string|Element|Element[]} targets
 * @param {object} options - GSAP vars that override the defaults.
 * @param {string|Element} [options.trigger] - Element that triggers the scroll animation.
 */
function reveal(targets, { trigger, ...options } = {}) {
  gsap.from(targets, {
    opacity: 0,
    y: 100,
    duration: 1,
    delay: 0.3,
    ease: "power2.out",
    ...(trigger && {
      scrollTrigger: { trigger, start: "top 85%", once: true },
    }),
    ...options,
  });
}

// ================= HERO =================

function initHero() {
  // Background and shadow drop in, settle, then the background slowly zooms
  const heroTimeline = gsap.timeline();

  heroTimeline
    .fromTo(
      ".hero-bg, .hero-shadow",
      { y: -800, scale: 0.3, opacity: 0 },
      { y: 0, scale: 0.3, opacity: 1, duration: 1, ease: "power3.out" },
    )
    .to(".hero-bg, .hero-shadow", {
      scale: 1,
      duration: 1,
      ease: "back.out(0.5)",
    })
    .to(".hero-bg", {
      scale: 1.08,
      duration: 8,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
      transformOrigin: "center center",
    });

  reveal("#hero-logo", { y: 0, scale: 0.3, delay: 1.9, ease: "elastic.out(0.8, 0.5)" });
  reveal("#hero-title", { delay: 2.2 });
  reveal("#hero-text", { delay: 2.5 });
  reveal("#hero-cta", { delay: 2.8 });
}

// ================= NAVBAR =================

function initNav() {
  // The original only animated the nav on the home section
  if (window.scrollY < 100) {
    reveal("#nav-logo, #nav-toggle, #nav-links > li", { delay: 1.6, y: -30 });
  }
}

// ================= SECTIONS =================

function initSections() {
  // About
  reveal(".about-data > *", { trigger: "#about", stagger: 0.2 });
  reveal(".about-img", { trigger: "#about", delay: 0.9 });

  // Counters: 0 to the final value once, when visible
  document.querySelectorAll("[data-counter]").forEach((counter) => {
    gsap.from(counter, {
      textContent: 0,
      duration: 3,
      ease: "power1.out",
      snap: { textContent: 1 },
      scrollTrigger: { trigger: counter, start: "top 90%", once: true },
    });
  });

  // Works
  reveal("#work .section-title", { trigger: "#work" });
  reveal(".work__data p", { trigger: "#work", delay: 0.6 });
  reveal(".work__data .swiper-pagination", { trigger: "#work", delay: 0.9 });
  reveal(".work__data .swiper-button-prev, .work__data .swiper-button-next", {
    trigger: "#work",
    delay: 1.2,
  });

  // Services
  reveal("#service .section-title", { trigger: "#service" });
  reveal(".service-row", { trigger: "#service", delay: 0.6, stagger: 0.2 });
  reveal(".service__testimonials", { trigger: "#service", delay: 0.9 });

  // Experts
  reveal(".expert .section-title", { trigger: ".expert" });
  reveal(".expert-description", { trigger: ".expert", delay: 0.6 });
  reveal(".expert-card", { trigger: ".expert", delay: 0.9, stagger: 0.2 });

  // Contact
  reveal("#contact .section-title", { trigger: "#contact" });
  reveal(".contact-description", { trigger: "#contact", delay: 0.6 });
  reveal("#contact-book", { trigger: "#contact", delay: 0.9, y: 0, scale: 0 });
  reveal(".contact-map", { trigger: "#contact", delay: 0.9 });
  reveal("#contact-info > article", { trigger: "#contact", delay: 1.2, stagger: 0.2 });

  // Footer
  reveal(".footer-container", { trigger: "footer" });
}

// ================= ENTRY POINT =================

export function initAnimations() {
  // Respect the user's motion preference: content is already visible in the HTML
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion) return;

  initHero();
  initNav();
  initSections();

  // Recalculate scroll positions once images and fonts have loaded
  window.addEventListener("load", () => ScrollTrigger.refresh());
}
