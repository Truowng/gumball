const menuBtn = document.querySelector("#header .menu-button");
const closeBtn = document.querySelector(
  "#header .header-link-list .close-button"
);
const menu = document.querySelector("#header .header-link-list");

menuBtn.addEventListener("click", () => {
  menu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("active");
});

const slider = new Swiper("#banner .swiper", {
  direction: "horizontal",
  speed: 300,
  effect: "cards",
  grabCursor: true,
  autoplay: {
    delay: 3000,
  },
});

const partnerSlider = new Swiper("#partner .swiper", {
  direction: "horizontal",
  speed: 15000,
  slidesPerView: 2,
  spaceBetween: 0,
  autoplay: {
    delay: 0,
  },
  loop: true,
  allowTouchMove: false,
  breakpoints: {
    576: {
      slidesPerView: 3,
    },
    1199: {
      slidesPerView: 4,
    },
    1299: {
      slidesPerView: 5,
    },
  },
});
