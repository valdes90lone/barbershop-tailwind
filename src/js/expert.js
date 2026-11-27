const expertWrapper = document.getElementById("experts-wrapper");
import { createTemplate } from "./function.js";

const EXPERTSDATA = [
  {
    name: "Jonh Deep",
    job: "Master Barber",
    src: "/assets/img/expert-img-1.png",
  },
  {
    name: "Max Pell",
    job: "Senior Stylist",
    src: "/assets/img/expert-img-2.png",
  },
  {
    name: "Doe Will",
    job: "Master Barber",
    src: "/assets/img/expert-img-3.png",
  },
  {
    name: "Emyl Larz",
    job: "Barber",
    src: "/assets/img/expert-img-4.png",
  },
];

EXPERTSDATA.map((expert)=>{
    let template = createTemplate("expertCard")
    let article = template.querySelector("article")
    let name = article.querySelector(".name")
    let job = article.querySelector(".job")
    let img = article.querySelector("img")

    name.innerText = expert.name
    job.innerText = expert.job
    img.src = expert.src
    
    expertWrapper.append(article)
  })