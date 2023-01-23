const { Product } = require("../models");

const cart = [];

const addButtons = document.getElementsByClassName("add-to-cart");
for (let button of addButtons) {
  button.addEventListener("click", function() {
    const item = {
      id: Product.id,
      name: Product.name,
      description: this.getAttribute("data-description")
    };
    cart.push(item);
  });
}