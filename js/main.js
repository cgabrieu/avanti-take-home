const newArrivalsSwiper = new Swiper(".new-arrivals__swiper", {
  slidesPerView: 5,
  spaceBetween: 17,
  navigation: {
    prevEl: ".new-arrivals__nav--prev",
    nextEl: ".new-arrivals__nav--next",
  },
  pagination: {
    el: ".new-arrivals__pagination",
    clickable: true,
  },
});
