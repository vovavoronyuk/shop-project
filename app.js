// let productsCount = document.getElementById("products-count");
// console.log(productsCount);

// let addToCartBtns = document.querySelectorAll(".btn-add-to-cart");
// console.log(addToCartBtns);

// for (let i = 0; i < addToCartBtns.length; i++) {
//   addToCartBtns[i].addEventListener("click", function () {
//     // перший варыант
//     // let prevProductsCount = +productsCount.textContent;
//     // productsCount.textContent = prevProductsCount + 1;
//     // другий варіант
//     productsCount.textContent = +productsCount.textContent + 1;
//   });
// }

// // addToCartBtns.forEach((item) =>
// //   item.addEventListener("click", function () {
// //     // productsCount.innerText =
// //     //   productsCount.counter >= 1
// //     //     ? ++productsCount.counter
// //     //     : (productsCount.counter = 1);

// //     console.log("clicked forEach");
// //   })
// // );

// //змінити лайки//

// let likeImg = document.querySelectorAll(".like-img");

// console.log(likeImg);

// likeImg.forEach((item) =>
//   item.addEventListener("click", function () {
//     // if (item.classList.contains("like-img")) {
//     //   item.classList.remove("like-img");
//     // } else {
//     //   item.classList.add("like-img");
//     // }
//     item.classList.toggle("liked");
//   })
// );

//btn-more-details//
let moreDetailsBtns = document.querySelectorAll(".btn-more-details");
let modal = document.querySelector(".modal");

moreDetailsBtns.forEach(item) => item.addEventListener("click",function(){
  modal.classList.add("show");
})


