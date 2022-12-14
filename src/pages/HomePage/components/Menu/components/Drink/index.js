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

  // drink
  //   const a = {
  //     id: 123,
  //     name: "Romano",
  //     ordered: false,
  //     image: 'https://apps.kodim.cz/daweb/img1.jpg'
  //   };

  // props:drink
  //   const b = {
  //     props: {
  //         id: 123,
  //         name: "Romano",
  //         ordered: false,
  //         image: 'https://apps.kodim.cz/daweb/img1.jpg'
  //       }
  //   };

  const { id, name, ordered, image, layers } = props;

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
          <button class="order-btn ${ordered ? "order-btn--ordered" : ""}">
            ${ordered ? "Zrušit" : "Objednat"}
          </button>
        </div>
  `;

  const btnElm = element.querySelector(".order-btn");
  btnElm.addEventListener("click", () => {
    fetch(
      `https://apps.kodim.cz/daweb/cafelora/api/me/drinks/${id}
    `,
      {
        method: "PATCH",
        headers: {
          Authorization: `Email test@gmail.com`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ordered: !ordered }),
      }
    )
      .then((response) => response.json())
      .then((data) => element.replaceWith(Drink(data.results)));
  });

  // element.querySelector(".drink__info").append(
  //   Layer({
  //     color: "#fff",
  //     label: "mléko",
  //   }),
  //   Layer({
  //     color: "#964B00",
  //     label: "expresso",
  //   })
  // );

  element
    .querySelector(".drink__info")
    .append(...layers.map((layer) => Layer(layer)));

  return element;
};
