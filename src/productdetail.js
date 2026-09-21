const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

console.log("Product ID:", productId);

const allProducts = [...productList, ...topList];

const product = allProducts.find(
  (item) => String(item.id) === String(productId),
);

console.log("Found product:", product);

const productDetailsContainer = document.getElementById("product-details");

if (!product) {
  productDetailsContainer.innerHTML = `
    <div class="col-span-full text-center py-20">
      <h1 class="text-3xl font-bold mb-4">
        Product Not Found
      </h1>

      <p class="text-black/60 mb-6">
        We couldn't find this product.
      </p>

      <a
        href="index.html"
        class="inline-flex bg-black text-white px-6 py-3 rounded-full"
      >
        Back to Shop
      </a>
    </div>
  `;
} else {
  showProduct(product);
}

function showProduct(product) {
  document.title = `${product.name} | SHOP.CO`;

  const breadcrumbProduct = document.getElementById("breadcrumb-product");

  if (breadcrumbProduct) {
    breadcrumbProduct.textContent = product.name;
  }

  productDetailsContainer.innerHTML = `
    <!-- LEFT SIDE -->
    
    <div>
      <div
        class="w-full aspect-square bg-[#F0EEED] rounded-[20px] overflow-hidden flex items-center justify-center p-6"
      >
        <img
          src="${product.img}"
          alt="${product.name}"
          class="w-full h-full object-contain"
        />
      </div>
    </div>

    <!-- RIGHT SIDE -->
    <div class="flex flex-col">

      <!-- PRODUCT NAME -->
      <h1
        class="text-3xl sm:text-4xl lg:text-5xl font-black uppercase leading-tight"
      >
        ${product.name}
      </h1>

      <!-- RATING -->
      <div class="flex items-center gap-1 mt-4">
        <i
          class="fa-solid fa-star"
          style="color: gold;"
        ></i>

        <i
          class="fa-solid fa-star"
          style="color: gold;"
        ></i>

        <i
          class="fa-solid fa-star"
          style="color: gold;"
        ></i>

        <i
          class="fa-solid fa-star"
          style="color: gold;"
        ></i>

        <i
          class="fa-solid fa-star-half-stroke"
          style="color: gold;"
        ></i>

        <span class="ml-2 text-sm text-black/60">
          4.5/5
        </span>
      </div>

      <!-- PRICE -->
      <p class="text-3xl sm:text-4xl mb-4 font-bold mt-5">
        $${Number(product.price).toFixed(2)}
      </p>

      <div class="border-t border-black/10 my-6"></div>

      <!-- DESCRIPTION -->
      <div>
        <h2 class="font-bold text-lg mb-2">
          Description
        </h2>

        <p class="text-black/60 mb-4 leading-relaxed">
          ${
            product.description ||
            "This product is designed with quality, comfort and style in mind."
          }
        </p>
      </div>

      <div class="border-t border-black/10 my-6"></div>

      <!-- QUANTITY + CART -->
      <div class="flex gap-3">

        <!-- QUANTITY -->
        <div
          class="flex items-center mt-6 bg-[#F0EEED] rounded-full px-2"
        >
          <button
            id="detail-minus"
            type="button"
            class="w-10 h-10 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition"
          >
            −
          </button>

          <span
            id="detail-quantity"
            class="w-8 text-center font-medium"
          >
            1
          </span>

          <button
            id="detail-plus"
            type="button"
            class="w-10 h-10 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition"
          >
            +
          </button>
        </div>

        <!-- ADD TO CART -->
        <button
          id="detail-add-cart"
          type="button"
          class="flex-1 bg-black mt-6 text-white rounded-full py-3 px-6 font-medium hover:bg-black/80 transition"
        >
          Add to Cart
        </button>

      </div>
    </div>
  `;

  let quantity = 1;

  const quantityDisplay = document.getElementById("detail-quantity");

  const minusButton = document.getElementById("detail-minus");

  const plusButton = document.getElementById("detail-plus");

  const addCartButton = document.getElementById("detail-add-cart");

  minusButton.addEventListener("click", () => {
    if (quantity > 1) {
      quantity--;
      quantityDisplay.textContent = quantity;
    }
  });

  plusButton.addEventListener("click", () => {
    quantity++;
    quantityDisplay.textContent = quantity;
  });

  addCartButton.addEventListener("click", () => {
    addCartButton.textContent = "Added ✓";

    setTimeout(() => {
      addCartButton.textContent = "Add to Cart";
    }, 1500);
  });
}
