import test from "./test.products.json";
import { findElement } from "./utils";

export function getProductElement(product) {
  const element = document.createElement("div");
  element.classList.add("product");
  element.setAttribute("data-product-id", product.id);
  element.innerHTML = `
    <img src=${product.images[0]} alt="Image Of ${product.name}"/>
    <p>${product.name}</p>
      <div class="flex items-center justify-between">
        <span>Price: ${product.regularPrice}</span>
        <div>
          <button type="button" class="btn-decrease bg-green-200 text-green-800 hover:bg-green-300 py-1 px-3 rounded-full disabled:cursor-not-allowed disabled:opacity-50">-</button>
          <span class="cart-count text-green-800" data-subscribe-to="countMap" data-subscription-path="${product.id}"></span>
          <button type="button" class="btn-increase bg-green-200 text-green-800 hover:bg-green-300 py-1 px-3 rounded-full disabled:cursor-not-allowed disabled:opacity-50">+</button>
        </div>
      </div>
    `;
  return element;
}

async function getProducts() {
  if (process.env.NODE_ENV === "development") {
    return test;
  } else {
    const response = await fetch(
      "https://learnwitheunjae.dev/api/sinabro-js/ecommerce"
    );
    const products = await response.json();
    return products;
  }
}

export async function setupProducts({
  container,
  onIncreaseClick,
  onDecreaseClick,
}) {
  const products = await getProducts();

  const productMap = {};

  products.forEach((product) => {
    productMap[product.id] = product;
  });

  products.forEach((element) => {
    const productElement = getProductElement(element);
    container.appendChild(productElement);
  });

  container.addEventListener("click", (event) => {
    const targetElement = event.target;
    const productElement = findElement(targetElement, ".product");
    const productId = productElement.getAttribute("data-product-id");

    if (
      targetElement.matches(".btn-decrease") ||
      targetElement.matches(".btn-increase")
    ) {
      if (targetElement.matches(".btn-decrease")) {
        onDecreaseClick({ productId });
      } else if (targetElement.matches(".btn-increase")) {
        onIncreaseClick({ productId });
      }
    }
  });

  const updateCount = ({ productId, count }) => {
    const productElement = container.querySelector(
      `.product[data-product-id="${productId}"]`
    );

    const cartCountElement = productElement.querySelector(".cart-count");
    cartCountElement.innerHTML = count;

    if (count === 0) {
      cartCountElement.innerHTML = "";
    }
  };

  const getProductById = ({ productId }) => {
    return productMap[productId];
  };

  return { updateCount, getProductById };
}
