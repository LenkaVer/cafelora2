import "./style.css";

import { Layer } from "../Layer/index.js";

export const Drink = (props) => {
  const element = document.createElement("div");
  element.classList.add("drink");

  //data structure
  //   {
  //     id: 'romano',
  //     name: 'Romano',
  //     ordered: false,
  //     image: 'https://apps.kodim.cz/daweb/cafelora/assets/cups/romano.png',
  //     layers: [
  //       {
  //         color: '#fbdf5b',
  //         label: 'citrón',
  //       },
  //       {
  //         color: '#613916',
  //         label: 'espresso',
  //       },
  //     ]
  //   };

  const { id, name, ordered, image } = props;

  element.innerHTML = `
        <div class="drink__product">
          <div class="drink__cup">
            <img src="${image}">
          </div>
          <div class="drink__info">
            <h3>${name}</h3>
          </div>
        </div>
        <div class="drink__controls">
          <button class="order-btn">
            Objednat
          </button>
        </div>
  `;

  element.querySelector(".drink__info").append(
    Layer({
      color: "#fff",
      label: "mléko",
    }),
    Layer({
      color: "#964B00",
      label: "expresso",
    })
  );

  return element;
};
