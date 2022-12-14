import "./style.css";
import { OrderItem } from "../OrderItem/index.js";

export const Order = (props) => {
  const { items } = props;

  const element = document.createElement("div");
  element.classList.add("order__content", "container");
  element.innerHTML = `
    <h1>Vaše objedávnka</h1>
    <p class="empty-order empty-order--hide">Zatím nemáte nic objednáno</p>
    <div class="order__items">
    </div>
`;

  if (items === undefined) {
    fetch(`https://apps.kodim.cz/daweb/cafelora/api/me/drinks`, {
      method: "GET",
      headers: {
        Authorization: `Email test@gmail.com`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const dataFiltered = data.results.filter(
          (item) => item.ordered === true
        );
        console.log(data);
        element.replaceWith(
          Order({
            items: dataFiltered,
          })
        );
      });
    return element;
  }

  if (items.length === 0) {
    element.querySelector(".empty-order").classList.remove("empty-order--hide");
  } else {
    const orderItemsElm = element.querySelector(".order__items");
    orderItemsElm.append(...items.map((item) => OrderItem(item)));
  }

  return element;
};
