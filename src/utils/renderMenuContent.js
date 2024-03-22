import { contentDiv } from "../index.js";

export const changeToMenuContent = () => {
  contentDiv.innerHTML = "";
  const pElement = document.createElement("p");
  pElement.textContent = "Here will be menu...";

  contentDiv.appendChild(pElement);
};
