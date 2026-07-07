import { initCarousels } from "./modules/carousel.js";
import { initFooterAccordion } from "./modules/footer.js";
import { initSearchBar } from "./modules/search.js";

document.addEventListener("DOMContentLoaded", () => {
  initCarousels();
  initFooterAccordion();
  initSearchBar();
});
