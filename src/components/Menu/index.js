import "./style.css";

import { Drink } from "./components/Drink/index.js";

export const Menu = () => {
  const element = document.createElement("section");
  element.classList.add("menu");
  element.setAttribute("id", "menu");

  element.innerHTML = `

    <div class="container">
    <h2>Naše nabídka</h2>
    <p class="menu-intro">
      Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
    </p>
    <div class="drinks-list">
    </div>
  
    <div class="order-detail">
      <a href="/objednavka">Detail objednávky</a>
    </div>
  </div>
  `;

  element.querySelector(".drinks-list").append(
    Drink({
      name: "Romano",
      image: "https://apps.kodim.cz/daweb/cafelora/assets/cups/romano.png",
    }),
    Drink({
      name: "Espresso",
      image: "https://apps.kodim.cz/daweb/cafelora/assets/cups/romano.png",
    })
  );

  return element;
};
