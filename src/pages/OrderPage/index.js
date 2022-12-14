import { Footer } from "../../components/Footer/index.js";
import { Header } from "../../components/Header/index.js";
import { Order } from "./components/Order/index.js";

export const OrderPage = () => {
  const element = document.createElement("div");
  element.classList.add("page");

  const main = document.createElement("main");
  main.classList.add("order");
  main.append(Order({}));

  element.append(Header({ showMenu: false }), main, Footer());

  return element;
};
