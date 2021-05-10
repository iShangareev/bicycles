"use strict";
const menuToggle = document.querySelector(".header__menu-button");
const headerMenu = document.querySelector(".header__nav-list");

headerMenu.classList.remove("header__nav-list--no-js");

menuToggle.addEventListener("click", function () {
  menuToggle.classList.toggle("header__menu-button--open");
  headerMenu.classList.toggle("header__nav-list--active");
});

headerMenu.addEventListener("click", function (e) {
  const menuItem = e.target.closest(".header__nav-item");
  if (!menuItem) {
    return;
  }

  if (headerMenu.classList.contains("header__nav-list--active")) {
    headerMenu.classList.remove("header__nav-list--active");
    menuToggle.classList.remove("header__menu-button--open");
  }
});
