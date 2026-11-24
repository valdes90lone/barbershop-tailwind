
import { createElement } from "./function.js";

const navContainer = document.getElementById("nav-links");
const header = document.getElementById("header");
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const navLogo = document.getElementById("nav-logo");


// ================= NAVIGATION LINKS =================

const links = [
  { text: "Home", href: "#home" },
  { text: "About", href: "#about" },
  { text: "Works", href: "#work" },
  { text: "Services", href: "#service" },
  { text: "Experts", href: "#expert" },
  { text: "Contact Us", href: "#contact", isCta: true },
];

const linksStyle =
  "nav-link text-base font-semibold text-title transition-colors hover:text-primary lg:text-white";

const ctaStyle =
  "nav-link nav-cta btn btn-primary border-0 px-7 text-title hover:bg-brand-orange-alt";


// Generate navigation links
links.forEach((link, index) => {

  const li = createElement("li");

  const a = createElement(
    "a",
    link.isCta
      ? ctaStyle
      : `${linksStyle} ${index === 0 ? "text-primary" : ""}`
  );

  a.innerText = link.text;
  a.href = link.href;

  li.append(a);
  navContainer.append(li);

});


// ================= MOBILE MENU =================

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


// Open menu
navToggle.addEventListener("click", openMenu);


// Close menu
navClose.addEventListener("click", closeMenu);


// Close menu after clicking a navigation link
const allNavLinks = navContainer.querySelectorAll("a");

allNavLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});


// Close menu with Escape
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});


// Close menu when returning to desktop
window.addEventListener("resize", () => {
  if (window.innerWidth >= 1150) {
    closeMenu();
  }
});


// ================= HEADER SCROLL =================

const desktopNavLinks = navContainer.querySelectorAll(
  ".nav-link:not(.nav-cta)"
);

function handleHeaderScroll() {

  const isScrolled = window.scrollY >= 50;

  header.classList.toggle("bg-white", isScrolled);
  header.classList.toggle("shadow-lg", isScrolled);

  // Logo
  navLogo.classList.toggle("text-white", !isScrolled);
  navLogo.classList.toggle("text-title", isScrolled);

  // Mobile menu button
  navToggle.classList.toggle("text-white", !isScrolled);
  navToggle.classList.toggle("text-title", isScrolled);

  // Desktop navigation links
  desktopNavLinks.forEach((link, index) => {

    if (index === 0) return;

    link.classList.toggle("lg:text-white", !isScrolled);
    link.classList.toggle("lg:text-title", isScrolled);

  });

}


// Listen to scroll
window.addEventListener("scroll", handleHeaderScroll);

// Initial state
handleHeaderScroll();
