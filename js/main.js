document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".new-arrivals .swiper-wrapper").forEach((wrapper) => {
    wrapper.innerHTML = generateSlides(14);
  });

  document.querySelectorAll(".new-arrivals").forEach((section) => {
    const swiperEl = section.querySelector(".new-arrivals__swiper");
    const prevBtn = section.querySelector(".new-arrivals__nav--prev");
    const nextBtn = section.querySelector(".new-arrivals__nav--next");
    const pagination = section.querySelector(".new-arrivals__pagination");

    new Swiper(swiperEl, {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 9,
      navigation: {
        nextEl: nextBtn,
        prevEl: prevBtn,
      },
      pagination: {
        el: pagination,
        clickable: true,
        type: "bullets",
      },
      breakpoints: {
        769: {
          slidesPerView: 5,
          slidesPerGroup: 5,
          spaceBetween: 17,
        },
      },
    });
  });
});

function generateSlides(count) {
  const slide = `
    <div class="swiper-slide">
      <article class="product-card">
        <div class="product-card__image-wrapper">
          <span class="product-card__tag product-card__tag--new">NOVO</span>
          <img
            src="assets/images/product.png"
            alt="Produto"
            class="product-card__image"
            loading="lazy"
          />
        </div>
        <div class="product-card__body">
          <h3 class="product-card__title">
            Lorem Ipsum Dolor Sit Amet Consectetuer Adipiscing Elit
          </h3>
          <p class="product-card__old-price">R$ 100,00</p>
          <div class="product-card__price-row">
            <p class="product-card__price">R$79,90</p>
            <span class="product-card__discount">10% OFF</span>
          </div>
          <p class="product-card__installments">
            Ou em até <strong>10x de R$ 7,90</strong>
          </p>
          <a href="#" class="product-card__button">Comprar</a>
        </div>
      </article>
    </div>`;

  return slide.repeat(count);
}

document.querySelectorAll(".footer__column").forEach((column) => {
  const title = column.querySelector(".footer__title");
  const list = column.querySelector(".footer__list");

  if (!title || !list) return;

  title.addEventListener("click", () => {
    column.classList.toggle("is-open");
  });
});
