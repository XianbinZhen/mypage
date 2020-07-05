const menuBar = document.querySelector(".menu-bar");
const menu = document.querySelector(".menu");

menuBar.addEventListener("click", menuBarToggle);

function menuBarToggle(e) {
    menu.classList.toggle("menu-show");

}