/*price and product count start*/
let productCount = 0;
const productCountElement = document.getElementById("productCount");
const priceElement = document.getElementById("price");
let basePrice = 0; // Initial base price

function product(value) {
  // Check if the product count is already 0 before down product
  if (value === -1 && productCount === 0) {
    return;
  }

  productCount += value;
  productCountElement.textContent = productCount;
  updatePrice(value);
}

function updatePrice(value) {
  if (value === -1) {
    basePrice -= 1.25; // Decrease base price by $1.25 for down product
  } else {
    basePrice += 1.25; // Increase base price by $1.25 for up product
  }
  priceElement.textContent = `$${basePrice.toFixed(2)}`; //basePrice variable as a currency with two decimal places
}

/*price and product count end*/

// JavaScript to trigger animation header section
document.addEventListener("DOMContentLoaded", function () {
  const listItems = document.querySelectorAll(".header ul li");

  listItems.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add("show");
    }, (index + 1) * 500); // Delay each item by 500ms, starting from the second item
  });
});
