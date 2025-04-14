import "./styles.css";
import { loadHome } from "./home.js";

const homeBtn = document.querySelector(".home-btn");
const menuBtn = document.querySelector(".menu-btn");
const aboutBtn = document.querySelector(".about-btn");

loadHome();

homeBtn.addEventListener("click", () => {
  loadHome();
});

menuBtn.addEventListener("click", () => {

});

aboutBtn.addEventListener("click", () => {

})