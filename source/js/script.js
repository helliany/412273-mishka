var button = document.querySelector(".main-nav__btn");
var menu_nav = document.querySelector(".site-list--nav");
var menu_user = document.querySelector(".site-list--user");

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  button.classList.toggle("main-nav__btn--close");
  menu_nav.classList.toggle("site-list--open");
  menu_user.classList.toggle("site-list--open");
});

var btn_offer = document.querySelector(".offers__product-btn");
var btn_product = document.querySelectorAll(".product__btn");
var popup = document.querySelector(".modal");
var overlay = document.querySelector(".overlay");

if (btn_offer != null) {
  btn_offer.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal--open");
    overlay.classList.add("overlay--open");
  });
};

if (overlay != null) {
  overlay.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal--open");
    overlay.classList.remove("overlay--open");
  });
};

if (btn_product != null) {
  for (var i = 0; i < btn_product.length; i++) {
    btn_product[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.add("modal--open");
      overlay.classList.add("overlay--open");
    });
  };
};
