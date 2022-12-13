import "./style.css";

import { Footer } from "../../components/Footer/index.js";
import { Header } from "../../components/Header/index.js";

export const OrderPage = () => {
  const element = document.createElement("div");
  element.classList.add("page");

  const main = document.createElement("main");
  main.classList.add("order");
  main.innerHTML = `

  <div class="order__content container">
    <h1>Vaše objedávnka</h1>
    <p class="empty-order empty-order--hide">Zatím nemáte nic objednáno</p>
    <div class="order__items">
      <div class="order-item">
        <img src="https://apps.kodim.cz/daweb/cafelora/assets/cups/vienna-coffee.png" class="order-item__image">
        <div class="order-item__name">
          Vídeňská káva
        </div>
      </div>
      
      <div class="order-item">
        <img src="https://apps.kodim.cz/daweb/cafelora/assets/cups/chocolate-milk.png" class="order-item__image">
        <div class="order-item__name">
          Čokoláda s mlékem
        </div>
      </div>
    </div>
  </div>
`;

  element.append(Header({ showMenu: false }), main, Footer());

  return element;
};
