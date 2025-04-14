import "./styles.css";
import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadAbout } from "./about.js";

const homeBtn = document.querySelector(".home-btn");
const menuBtn = document.querySelector(".menu-btn");
const aboutBtn = document.querySelector(".about-btn");

loadHome();

homeBtn.addEventListener("click", () => {
  loadHome();
});

menuBtn.addEventListener("click", () => {
  loadMenu();
});

aboutBtn.addEventListener("click", () => {
  loadAbout();
})