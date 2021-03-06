import { items } from "./data.js";

window.addEventListener("load", function () {
  let detailInfo = JSON.parse(window.localStorage.getItem("detail")) || [];
  console.log(detailInfo);
  items.forEach((item) => {
    if (item.id == detailInfo) {
      //   console.log(item);
      const template = `
    <div class="detail-img">
    <img src="${item.photo}" data-id =${item.id} alt="" />
  </div>
  <div class="detail-info">
    <h2 class="detail-info__name">${item.name}</h2>
    <div class="detail-info__start">
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
    </div>
    <div class="detail-info__content">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut...
      </p>
    </div>
    <div class="detail-info__price detail">
      <span>PRICE</span>
      <span>${item.price}</span>
    </div>
    <div class="detail-info__size detail">
      <span>SIZE</span>
      <div class="info-size__item">
        <span>S</span>
        <span>M</span>
        <span>L</span>
      </div>
    </div>
    <div class="detail-info__color detail">
      <span>color</span>
      <div class="color-option">
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="detail-info__meterail detail">
      <span>MATERIAL</span>
      <span>silicon</span>
    </div>
    <div class="detail-info__quantity detail">
      <span>QUANTITY</span>
      <span>1</span>
    </div>
    <div class="detail-info__subtotal detail">
      <span>SUBTOTAL</span>
      <span>${item.price}</span>
    </div>

    <div class="detail-button">
      <button class="add-cart">
        <i class="fas fa-cart-plus"></i>
        Add to cart
      </button>
      <button class="buy-it">Buy it now</button>
      <button class="add-wish">
        <i class="fas fa-cart-plus"></i>
        Add to wishlist
      </button>
    </div>
  </div>
    
    `;
      const containerDetail = document.querySelector(
        ".product-container-detail"
      );
      containerDetail.insertAdjacentHTML("beforeend", template);
    }
  });
});
