// const productListTwoDOM = document.getElementById("productpage-products");
// productListTwo.map((e, i) => {
//   productListTwoDOM.insertAdjacentHTML(
//     "beforeend",
//     `       <div id=${i} class="flex flex-col justify-center items-start">
//             <img src= ${e.img} alt="" />
//             <p id="name" class="font-bold">${e.name}</p>
//             <div id="star-container" class="flex gap-1">
//               <svg
//                 class="w-4 h-4 fill-[#FFC633] text-[#FFC633]"
//                 viewBox="0 0 20 20"
//               >
//                 <path
//                   d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
//                 />
//               </svg>
//               <svg
//                 class="w-4 h-4 fill-[#FFC633] text-[#FFC633]"
//                 viewBox="0 0 20 20"
//               >
//                 <path
//                   d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
//                 />
//               </svg>
//               <svg
//                 class="w-4 h-4 fill-[#FFC633] text-[#FFC633]"
//                 viewBox="0 0 20 20"
//               >
//                 <path
//                   d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
//                 />
//               </svg>
//               <svg
//                 class="w-4 h-4 fill-[#FFC633] text-[#FFC633]"
//                 viewBox="0 0 20 20"
//               >
//                 <path
//                   d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
//                 />
//               </svg>
//               <svg
//                 class="w-4 h-4 fill-[#FFC633] text-[#FFC633]"
//                 viewBox="0 0 20 20"
//               >
//                 <path
//                   d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
//                 />
//               </svg>
//             </div>
//             <div class='flex gap-2 justify-between items-center '>
//             <p class="text-2xl font-bold">$${e.price}</p>
//             <p class="text-2xl font-bold ${e.oldPrice ? "line-through text-gray-400" : "hidden"}">$${e.price}</p>
//             <p class="text-red-600 bg-red-300 p-2 rounded-2xl ${e.discountValue ? "" : "hidden"}">$${e.discountValue}</p>
//             </div>
//           </div>`,
//   );
// });
function toggleMenu() {
  const mobileMenu = document.getElementById("mobileMenu");

  mobileMenu.classList.toggle("hidden");
}

const product = document.getElementById("productArr");
product.innerHTML = productList
  .map((product) => {
    return `
    <div
      class="flex flex-col group relative bg-white p-3 rounded-[20px] shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
      data-id="${product.id}"
    >
      <!-- PRODUCT IMAGE -->
      <div class="w-full aspect-square bg-[#F0EEED] rounded-[20px] overflow-hidden flex items-center justify-center p-4 mb-4 relative">
        <img
          src="${product.img}"
          alt="${product.name}"
          class="w-full h-full object-contain group-hover:scale-102 transition-transform duration-300"
        />
      </div>
       <div style="color: gold;">
  <i class="fa-solid fa-star"></i>
  <i class="fa-solid fa-star"></i>
  <i class="fa-solid fa-star"></i>
  <i class="fa-solid fa-star"></i>
  <i class="fa-solid fa-star-half-stroke"></i>
</div>
      <!-- PRODUCT NAME -->
      <h3 class="text-base sm:text-lg font-bold text-black truncate mb-1 pr-8">
        ${product.name}
      </h3>

      <!-- PRICE -->
      <div class="text-xl sm:text-2xl font-bold text-black">
        $${product.price}
        <!-- ADD TO CART BUTTON -->
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
    </div>
  `;
  })
  .join("");

const products = document.getElementById("productTop");
products.innerHTML = topList
  .map((product) => {
    return `
    <div 
      class="flex flex-col group relative bg-white p-3 rounded-[20px] shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
      data-id="${product.id}"
    >
      <!-- PRODUCT IMAGE -->
      <div class="w-full aspect-square bg-[#F0EEED] rounded-[20px] overflow-hidden flex items-center justify-center p-4 mb-4 relative">
        <img 
          src="${product.img}" 
          alt="${product.name}" 
          class="w-full h-full object-contain group-hover:scale-102 transition-transform duration-300"
        />
      </div>
      <!-- PRODUCT NAME -->
      <h3 class="text-base sm:text-lg font-bold text-black truncate mb-1 pr-8">
        ${product.name}
      </h3>


      <!-- PRICE -->
      <div class="text-xl sm:text-2xl font-bold text-black">
        $${product.price}
        <!-- ADD TO CART BUTTON -->
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
    </div>
  `;
  })
  .join("");
