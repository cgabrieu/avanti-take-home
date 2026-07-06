document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll(".new-arrivals");

  carousels.forEach((section) => {
    const swiperEl = section.querySelector(".new-arrivals__swiper");
    const prevBtn = section.querySelector(".new-arrivals__nav--prev");
    const nextBtn = section.querySelector(".new-arrivals__nav--next");
    const pagination = section.querySelector(".new-arrivals__pagination");

    new Swiper(swiperEl, {
      slidesPerView: 5,
      slidesPerGroup: 5,
      spaceBetween: 17,
      navigation: {
        nextEl: nextBtn,
        prevEl: prevBtn,
      },
      pagination: {
        el: pagination,
        clickable: true,
        type: "bullets",
      },
    });
  });
});
