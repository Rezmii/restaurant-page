export const domManipulation = () => {
  const contentDiv = document.querySelector("#content");
  const h1Element = document.createElement("h1");
  const imgElement = document.createElement("img");
  const pElement = document.createElement("p");

  h1Element.textContent = "Restaurant Name";
  imgElement.src = "menu.png";
  pElement.textContent = "Welcome";

  contentDiv.appendChild(h1Element);
  contentDiv.appendChild(imgElement);
  contentDiv.appendChild(pElement);
};
