import { createElement } from "./function.js";
const navContainer = document.getElementById("nav-links");

const links = [
  { text: "Home", href: "#home" },
  { text: "About", href: "#about" },
  { text: "Works", href: "#work" },
  { text: "Services", href: "#service" },
  { text: "Experts", href: "#expert" },
  { text: "Contact Us", href: "#contact" },
];

const linksStyle =
  "nav-link text-base font-semibold text-title transition-colors hover:text-primary lg:text-white";

links.forEach((link) => {
  let li = createElement("li");
  let a = createElement("a", linksStyle);
  a.innerText = link.text;
  a.setAttribute("href", link.href);

  li.append(a);
  navContainer.append(li);
  if (link.text === "Contact Us") {
    let li = createElement("li");
    let a = createElement(
      "a",
      "btn btn-primary border-0 px-7 text-title hover:bg-brand-orange-alt",
    );
    a.innerText = link.text;
    a.setAttribute("href", link.href);

    li.append(a);
    navContainer.append(li);
  }
});
