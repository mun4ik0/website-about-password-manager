// By mun4ik0
const rootStyles = window.getComputedStyle(document.documentElement);
let theme = "dark";

let label = document.querySelector("label");
label.addEventListener("click", change_theme);

let header = document.querySelector("header");
let body = document.querySelector("body");
let footer = document.querySelector("footer");
let burger = document.querySelector(".burger");
let main = document.querySelector("main");
const allp = document.querySelectorAll("p");
const alla = document.querySelectorAll("a");
const allspan = document.querySelectorAll("span");

const allli = document.querySelectorAll("li");
let h1 = document.querySelector("h1");
const allh2 = document.querySelectorAll("h2");
const allh3 = document.querySelectorAll("h3");

let navigation = document.querySelector(".menu");
let burger_menu = document.querySelector(".burger_menu");

let animh2 = document.querySelector(".animh2");
let animh3 = document.querySelector(".animh3");
burger.addEventListener("click", menu);
function change_theme() {
  if (theme == "dark") {
    header.style.backgroundColor = rootStyles.getPropertyValue("--lightHeader");
    main.style.backgroundColor = rootStyles.getPropertyValue("--lightMain");
    label.style.backgroundImage = rootStyles.getPropertyValue("--imageSun");
    footer.style.backgroundColor = rootStyles.getPropertyValue("--lightFooter");
    h1.style.color = rootStyles.getPropertyValue("--lightText");
    burger_menu.style.backgroundColor =
      rootStyles.getPropertyValue("--lightFooter");
    burger_menu.style.borderColor =
      rootStyles.getPropertyValue("--footerColor");
    for (const h2 of allh2) {
      h2.style.color = rootStyles.getPropertyValue("--lightText");
      h2.style.borderColor = rootStyles.getPropertyValue("--lightText");
    }
    for (const h3 of allh3) {
      h3.style.color = rootStyles.getPropertyValue("--lightText");
    }
    for (const p of allp) {
      p.style.color = rootStyles.getPropertyValue("--lightText");
    }
    for (const li of allli) {
      li.style.color = rootStyles.getPropertyValue("--lightText");
    }
    for (const a of alla) {
      a.style.color = rootStyles.getPropertyValue("--lightText");
    }
    for (const span of allspan) {
      span.style.backgroundColor = rootStyles.getPropertyValue("--footerColor");
    }
    animh2.style.color = rootStyles.getPropertyPriority("--animh");
    animh3.style.color = rootStyles.getPropertyPriority("--animh");
    theme = "light";
  } else if (theme == "light") {
    burger_menu.style.backgroundColor =
      rootStyles.getPropertyValue("--footerColor");
    burger_menu.style.borderColor = rootStyles.getPropertyValue("--textColor");
    label.style.backgroundImage = rootStyles.getPropertyValue("--image");
    main.style.backgroundColor = rootStyles.getPropertyValue("--mainColor");
    header.style.backgroundColor = rootStyles.getPropertyValue("--mainColor");
    footer.style.backgroundColor = rootStyles.getPropertyValue("--footerColor");
    h1.style.color = rootStyles.getPropertyValue("--textColor");

    for (const h2 of allh2) {
      h2.style.color = rootStyles.getPropertyValue("--textColor");
      h2.style.borderColor = rootStyles.getPropertyValue("--textColor");
    }
    for (const h3 of allh3) {
      h3.style.color = rootStyles.getPropertyValue("--textColor");
    }
    for (const p of allp) {
      p.style.color = rootStyles.getPropertyValue("--textColor");
    }
    for (const li of allli) {
      li.style.color = rootStyles.getPropertyValue("--textColor");
    }
    for (const a of alla) {
      a.style.color = rootStyles.getPropertyValue("--textColor");
    }
    for (const span of allspan) {
      span.style.backgroundColor = rootStyles.getPropertyValue("--lightMain");
    }
    animh2.style.color = rootStyles.getPropertyPriority("--animh");
    animh3.style.color = rootStyles.getPropertyPriority("--animh");
    theme = "dark";
  }
}
function menu() {
  burger.classList.toggle("active");
  burger_menu.classList.toggle("show");
}
