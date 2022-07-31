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

// //змінити лайки//

let likeBtns = document.querySelectorAll(".like");

likeBtns.forEach((item) =>
  item.addEventListener("click", function () {
    // if (item.classList.contains("liked")) {
    //   item.classList.remove("liked");
    // } else {
    //   item.classList.add("liked");
    // }
    item.classList.toggle("liked");
  })
);
// scales//
let scaleBtns = document.querySelectorAll(".scale");
scaleBtns.forEach((item) =>
  item.addEventListener("click", function () {
    item.classList.toggle("scales");
  })
);

//btn-more-details//
let moreDetailsBtns = document.querySelectorAll(".btn-more-details");
let modal = document.querySelector(".modal");
let btnClose = document.querySelector(".btn-close");

function openModal() {
  modal.classList.add("show");
  modal.classList.remove("hide");
}

function closeModal() {
  modal.classList.add("hide");
  modal.classList.remove("show");
}

moreDetailsBtns.forEach((item) => item.addEventListener("click", openModal));
btnClose.addEventListener("click", closeModal);

//-----------slider--------//

$(".slider-block").slick({
  autoplay: true,
});
//--------------- scroll window--------------//
// функція яка при прокрутці половини тега боді відкриває модальне вікно//
window.onscroll = function () {
  if (window.scrollY >= document.body.scrollHeight / 2) {
    modal.classList.add("show");
  }
};
