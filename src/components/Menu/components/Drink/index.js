import "./style.css";

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

  const { id, name, ordered, image, layers } = props;

  element.innerHTML = `
        <div class="drink__product">
          <div class="drink__cup">
            <img src="${image}">
          </div>
          <div class="drink__info">
            <h3>${name}</h3>
            <div class="layer">
              <div class="layer__color" style="background-color: #613916"></div>
              <div class="layer__label">espresso</div>
            </div>
          </div>
        </div>
        <div class="drink__controls">
          <button class="order-btn">
            Objednat
          </button>
        </div>
  `;

  return element;
};
