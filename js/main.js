document.querySelectorAll(".new-arrivals").forEach((section) => {
  const swiperEl = section.querySelector(".new-arrivals__swiper");
  const prevEl = section.querySelector(".new-arrivals__nav--prev");
  const nextEl = section.querySelector(".new-arrivals__nav--next");
  const paginationEl = section.querySelector(".new-arrivals__pagination");

  new Swiper(swiperEl, {
    slidesPerView: 5,
    spaceBetween: 17,
    navigation: {
      prevEl: prevEl,
      nextEl: nextEl,
    },
    pagination: {
      el: paginationEl,
      clickable: true,
    },
  });
});
