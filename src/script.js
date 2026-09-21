function toggleMenu() {
  const mobileMenu = document.getElementById("mobileMenu");

  if (mobileMenu) {
    mobileMenu.classList.toggle("hidden");
  }
}

// OPEN PRODUCT DETAILS PAGE
function openProduct(productId) {
  window.location.href = `productdetail.html?id=${productId}`;
}

// ========================================
// PRODUCT LIST
// ========================================

const productContainer = document.getElementById("productArr");

if (productContainer) {
  productContainer.innerHTML = productList
    .map((product) => {
      return `
        <div
          class="product-card flex flex-col group relative bg-white p-3 rounded-[20px] shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
          data-id="${product.id}"
        >

          <!-- PRODUCT IMAGE -->
          <div
            class="w-full aspect-square bg-[#F0EEED] rounded-[20px] overflow-hidden flex items-center justify-center p-4 mb-4 relative"
          >
            <img
              src="${product.img}"
              alt="${product.name}"
              class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          <!-- RATING -->
          <div style="color: gold;">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
          </div>

          <!-- PRODUCT NAME -->
          <h3
            class="text-base sm:text-lg font-bold text-black truncate mb-1 pr-8"
          >
            ${product.name}
          </h3>

          <!-- PRICE -->
          <div class="text-xl sm:text-2xl font-bold text-black">
            $${product.price}
          </div>

          <!-- ADD TO CART -->
          <button
            class="cartBtn cursor-pointer absolute bottom-3 right-3 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center shadow-lg hover:bg-black/80 z-10"
            data-id="${product.id}"
            type="button"
            title="Add to Cart"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
          </button>

        </div>
      `;
    })
    .join("");

  // MAKE EVERY PRODUCT CLICKABLE
  productContainer.addEventListener("click", (e) => {
    // Don't open product page when clicking Add to Cart
    if (e.target.closest(".cartBtn")) {
      return;
    }
    const productCard = e.target.closest(".product-card");
    if (!productCard) {
      return;
    }
    const productId = productCard.dataset.id;
    openProduct(productId);
  });
}
productContainer.addEventListener("click", (e) => {
  const cartButton = e.target.closest(".cartBtn");
  if (!cartButton) {
    return;
  }
  e.stopPropagation();
  const productId = cartButton.dataset.id;
  addToCart(productId);
});

// ========================================
// TOP PRODUCTS
// ========================================

const topContainer = document.getElementById("productTop");

if (topContainer) {
  topContainer.innerHTML = topList
    .map((product) => {
      return `
        <div
          class="product-card flex flex-col group relative bg-white p-3 rounded-[20px] shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
          data-id="${product.id}"
        >

          <!-- PRODUCT IMAGE -->
          <div
            class="w-full aspect-square bg-[#F0EEED] rounded-[20px] overflow-hidden flex items-center justify-center p-4 mb-4 relative"
          >
            <img
              src="${product.img}"
              alt="${product.name}"
              class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          <!-- RATING -->
          <div style="color: gold;">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
          </div>

          <!-- PRODUCT NAME -->
          <h3
            class="text-base sm:text-lg font-bold text-black truncate mb-1 pr-8"
          >
            ${product.name}
          </h3>

          <!-- PRICE -->
          <div class="text-xl sm:text-2xl font-bold text-black">
            $${product.price}
          </div>

          <!-- ADD TO CART -->
          <button
            class="cartBtn cursor-pointer absolute bottom-3 right-3 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center shadow-lg hover:bg-black/80 z-10"
            data-id="${product.id}"
            type="button"
            title="Add to Cart"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
          </button>

        </div>
      `;
    })
    .join("");

  // MAKE EVERY TOP PRODUCT CLICKABLE
  topContainer.addEventListener("click", (e) => {
    // Don't open product page when clicking Add to Cart
    if (e.target.closest(".cartBtn")) {
      return;
    }
    const productCard = e.target.closest(".product-card");
    if (!productCard) {
      return;
    }
    const productId = productCard.dataset.id;
    openProduct(productId);
  });
  topContainer.addEventListener("click", (e) => {
    const cartButton = e.target.closest(".cartBtn");
    if (!cartButton) {
      return;
    }
    e.stopPropagation();
    const productId = cartButton.dataset.id;
    addToCart(productId);
  });
}
