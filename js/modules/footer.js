const OPEN_CLASS = "is-open";

export function initFooterAccordion() {
  document.querySelectorAll(".footer__column").forEach(setupColumn);
}

function setupColumn(column) {
  const title = column.querySelector(".footer__title");
  const list = column.querySelector(".footer__list");

  if (!title || !list) return;

  title.addEventListener("click", () => {
    column.classList.toggle(OPEN_CLASS);
  });
}
