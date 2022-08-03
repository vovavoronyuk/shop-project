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
// --------------- scroll window--------------//
// функція яка при прокрутці половини тега боді відкриває модальне вікно//
// window.onscroll = function () {
//   if (window.scrollY >= document.body.scrollHeight / 2) {
//     modal.classList.add("show");
//   }
// };
// close modal

modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    closeModal();
    window.removeEventListener("scroll", showModalByScroll);
  }
});

function showModalByScroll() {
  if (window.pageYOffset > document.body.scrollHeight / 2) {
    openModal();
  }
}
window.addEventListener("scroll", showModalByScroll);

// задаємо час для вискакування модального вікна
// setTimeout(() => openModal(), 5000);

// AOS.init();
//---------------------------------------------
// const audi = {
//   model: "A4",
//   year: "2012",
//   color: "black",
// };

// let bmw = {
//   model: "328",
//   year: "2010",
//   color: "gray",
// };

// function Car(model, year, color) {
//   this.model = model;
//   this.year = year;
//   this.color = color;

//   this.age = function () {
//     return 2022 - this.year;
//   };
//   console.log(this);
// }

// const audi = new Car("A4", 2012, "black");
// const bmw = new Car("328", 2010, "gray");

// console.log(audi.age());
// console.log(bmw.age());

const counters = document.querySelectorAll("[data-counter]");
if (counters) {
  counters.forEach((counter) => {
    counter.addEventListener("click", (e) => {
      const target = e.target;
      if (target.closest(".counter_button")) {
        let value = parseInt(
          target.closest(".counter").querySelector("input").value
        );

        if (target.classList.contains("counter_button_plus")) {
          value++;
        } else {
          --value;
        }

        if (value <= 1) {
          value = 1;
          target
            .closest(".counter")
            .querySelector(".counter_button_minus")
            .classList.add("disabled");
        } else {
          target
            .closest(".counter")
            .querySelector(".counter_button_minus")
            .classList.remove("disabled");
        }

        if (value > 5) {
          value = 5;
          target
            .closest(".counter")
            .querySelector(".counter_button_plus")
            .classList.add("disabled");
        } else {
          target
            .closest(".counter")
            .querySelector(".counter_button_plus")
            .classList.remove("disabled");
        }

        target.closest(".counter").querySelector("input").value = value;
      }
    });
  });
}
