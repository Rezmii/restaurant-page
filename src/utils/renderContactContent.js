import { contentDiv } from "../index.js";

export const changeToContactContent = () => {
  contentDiv.innerHTML = "";
  const pElement = document.createElement("p");
  pElement.textContent = "Contact: ...";

  contentDiv.appendChild(pElement);
};
