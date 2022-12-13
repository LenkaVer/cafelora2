import { Banner } from "./components/Banner/index.js";
import { Contact } from "./components/Contact/index.js";
import { Footer } from "../../components/Footer/index.js";
import { Gallery } from "./components/Gallery/index.js";
import { Header } from "../../components/Header/index.js";
import { Menu } from "./components/Menu/index.js";

export const HomePage = () => {
  const element = document.createElement("div");
  element.classList.add("page");

  const main = document.createElement("main");
  main.append(Banner(), Menu({}), Gallery(), Contact());

  element.append(Header({ showMenu: true }), main, Footer());

  return element;
};
