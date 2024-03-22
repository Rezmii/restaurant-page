import { changeToHomeContent } from "./utils/renderHomeContent";
import { changeToMenuContent } from "./utils/renderMenuContent";
import { changeToContactContent } from "./utils/renderContactContent";
import "./styles/general.css";

export const contentDiv = document.querySelector("#content");
const homeButton = document.querySelector("#home-button");
const menuButton = document.querySelector("#menu-button");
const contactButton = document.querySelector("#contact-button");

changeToHomeContent();

homeButton.addEventListener("click", changeToHomeContent);
menuButton.addEventListener("click", changeToMenuContent);
contactButton.addEventListener("click", changeToContactContent);
