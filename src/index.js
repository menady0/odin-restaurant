import "./styles.css";
import home from "./pages/home-page.js";
import menu from "./pages/menu-page.js";
import about from "./pages/about-page.js";

home();

const content = document.querySelector("#content");
const btns = document.querySelectorAll("nav button");

btns.forEach((btn) =>
  btn.addEventListener("click", () => {
    content.innerHTML = "";
    if (btn.id === "home") home();
    else if (btn.id === "menu") menu();
    else if (btn.id === "about") about();
  }),
);
