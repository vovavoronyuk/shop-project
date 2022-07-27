let productsCount = document.getElementById("products-count");
console.log(productsCount);

let addToCartBtns = document.querySelectorAll(".btn-add-to-cart");
console.log(addToCartBtns);

for (let i = 0; i < addToCartBtns.length; i++) {
  addToCartBtns[i].addEventListener("click", function () {
    // перший варыант
    // let prevProductsCount = +productsCount.textContent;
    // productsCount.textContent = prevProductsCount + 1;
    // другий варіант
    productsCount.textContent = +productsCount.textContent + 1;
  });
}

// addToCartBtns.forEach((item) =>
//   item.addEventListener("click", function () {
//     // productsCount.innerText =
//     //   productsCount.counter >= 1
//     //     ? ++productsCount.counter
//     //     : (productsCount.counter = 1);

//     console.log("clicked forEach");
//   })
// );
