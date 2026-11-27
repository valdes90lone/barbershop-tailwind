import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

import { createTemplate } from "./function.js";

// ================= SELECTORS =================

const workSwiper = document.querySelector(".work__swiper");
const workSwiperWrapper = workSwiper?.querySelector(".swiper-wrapper");

// ================= SLIDES DATA =================

const slides = [
  {
    src: "/assets/img/work-img-1.png",
    alt: "Classic men's haircut",
  },
  {
    src: "/assets/img/work-img-2.png",
    alt: "Modern fade haircut",
  },
  {
    src: "/assets/img/work-img-3.png",
    alt: "Textured haircut",
  },
  {
    src: "/assets/img/work-img-4.png",
    alt: "Professional beard design",
  },
  {
    src: "/assets/img/work-img-5.png",
    alt: "Low fade haircut",
  },
  {
    src: "/assets/img/work-img-6.png",
    alt: "Modern men's hairstyle",
  },
  {
    src: "/assets/img/work-img-7.png",
    alt: "Classic barber haircut",
  },
  {
    src: "/assets/img/work-img-8.png",
    alt: "Skin fade haircut",
  },
  {
    src: "/assets/img/work-img-9.png",
    alt: "Professional men's grooming",
  },
  {
    src: "/assets/img/work-img-10.png",
    alt: "Contemporary men's haircut",
  },
];

// ================= GENERATE SLIDES =================

function generateSlides() {
  if (!workSwiperWrapper) {
    console.error("Swiper wrapper introuvable.");
    return false;
  }

  slides.forEach((slide) => {
    // Clone the HTML template
    const element = createTemplate("slide-exemple");

    // Select elements inside the cloned template
    const article = element.querySelector("article");
    const img = element.querySelector("img");

    // Set image attributes
    img.src = slide.src;
    img.alt = slide.alt;

    // Insert the slide into Swiper
    workSwiperWrapper.append(element);
  });

  return true;
}

// ================= INITIALIZE SWIPER =================

export function initWorkSwiper() {
  if (!workSwiper || !workSwiperWrapper) {
    console.error("Impossible d'initialiser le carrousel.");
    return;
  }

  // Generate slides before initializing Swiper
  if (!generateSlides()) return;

  const swiperWork = new Swiper(".work__swiper", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 24,
    grabCursor: true,
    modules: [Navigation, Pagination],
    pagination: {
      el: ".work__data .swiper-pagination",
      type: "fraction",
    },

    navigation: {
      nextEl: ".work__data .swiper-button-next",
      prevEl: ".work__data .swiper-button-prev",
    },
  });
  // Responsive configuration

  return swiperWork;
}
