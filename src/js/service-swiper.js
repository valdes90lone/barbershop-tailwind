import { createTemplate } from "./function.js";
import { Navigation, Pagination } from "swiper/modules";
import Swiper from "swiper";
const servicePlan = document.querySelector(".services-plan");
const testimonialsWrapper = document.querySelector(".container-testimonials");
const SERVICESPLAN = [
  { text: "ADULT HAIRCUT", price: "$40" },
  { text: "KIDS HAIRCUT", price: "$20" },
  { text: "NECK SHAVE", price: "$35" },
  { text: "BEARD TRIM", price: "$15" },
  { text: "HAIRCUT + SHAVE", price: "$70" },
];

const TESTIMONIALS = [
  {
    text: `Excellent barbershop; the atmosphere feels authentic from the moment you walk in. The service is professional, and the results are top-notch. Definitely a place you'll always want to return to.`,
    name: "John Doe",
  },
  {
    text: `Excellent atmosphere and top-notch service at all times. The barbers really do give you the haircut you want. I always leave feeling confident and refreshed. Highly recommended!`,
    name: "Wil C.",
  },
  {
    text: `True professionals who have mastered their craft. Flawless fades, impeccable beard trims, and excellent customer service. Booking is easy, and they're always punctual.`,
    name: "Michel D.",
  },
];

SERVICESPLAN.map((service) => {
  let row = createTemplate("serviceRow");
  let div = row.querySelector(".service-row");
  let text = div.querySelector(".text");
  let price = div.querySelector(".price");

  text.innerText = service.text;
  price.innerText = service.price;

  servicePlan.append(div);
});

TESTIMONIALS.map((testimonial) => {
  let template = createTemplate("serviceTestimonials");
  let article = template.querySelector("article");
  let text = article.querySelector("p");
  let name = article.querySelector("h3");

  text.innerText = testimonial.text;
  name.innerText = testimonial.name;

  testimonialsWrapper.append(article);
});

export function initSwiperTestimonials() {
  // Generate slides before initializing Swiper

  const swiperTestimonials = new Swiper(".service__testimonials", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 24,
    grabCursor: true,
    modules: [Navigation, Pagination],
    pagination: {
      el: ".service__testimonials .swiper-pagination",
    },

    navigation: {
      nextEl: ".service__testimonials .swiper-button-next",
      prevEl: ".service__testimonials .swiper-button-prev",
    },
  });
  // Responsive configuration

  return swiperTestimonials;
}
