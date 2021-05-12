const img = document.querySelector(".last-arrow");
const subMenu = document.querySelector(".dropdown-menu");
const hamburger = document.querySelector(".menu-btn");
const menu = document.querySelector(".top-navbar");
const welcome = document.querySelector(".welcome");
const header = document.querySelector("header");

hamburger.onclick = () => {
  menu.classList.toggle("invisible");
  welcome.classList.toggle("invisible");
  hamburger.classList.toggle('open');

  if (menu.classList.contains("invisible") && !subMenu.classList.contains("invisible")) {
    subMenu.classList.add('invisible');
    header.classList.toggle("space");
    img.classList.toggle("rotate-arrow");
  }
};

img.onclick = () => {

  subMenu.classList.toggle("invisible");

  if (!subMenu.classList.contains("invisible")) {
    header.classList.toggle("space");
  } else {
    header.classList.toggle("space");
  }

  img.classList.toggle("rotate-arrow");
}

