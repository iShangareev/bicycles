"use strict";

(function () {
  const menuToggle = document.querySelector(".header__menu-button");
  const headerMenu = document.querySelector(".header__nav-list");
  const pageWrapper = document.querySelector(".wrapper");
  const inputPhone = document.querySelector(".feedback__input-phone");

  if (menuToggle && headerMenu) {
    headerMenu.classList.remove("header__nav-list--no-js");

    menuToggle.addEventListener("click", function () {
      pageWrapper.classList.toggle("wrapper--block");
      menuToggle.classList.toggle("header__menu-button--open");
      headerMenu.classList.toggle("header__nav-list--active");
    });

    const anchors = document.querySelectorAll('a[href*="#"]');

    for (let anchor of anchors) {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        if (headerMenu.classList.contains("header__nav-list--active")) {
          pageWrapper.classList.remove("wrapper--block");
          headerMenu.classList.remove("header__nav-list--active");
          menuToggle.classList.remove("header__menu-button--open");
        }
        const blockID = anchor.getAttribute("href").substr(1);

        document.getElementById(blockID).scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  }

  const maskOptions = {
    mask: "+{7}(000)000-00-00",
  };

  if (inputPhone) {
      IMask(inputPhone, maskOptions);
  }
})();
