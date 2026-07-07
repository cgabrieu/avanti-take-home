import { escapeHtml } from "./utils.js";

const VISIBLE_CLASS = "is-visible";
const CLOSE_DELAY_MS = 600;

export function initSearchBar() {
  const elements = getElements();
  if (!elements) return;

  setupSubmitHandler(elements);
  setupOutsideClickHandler(elements);
}

function getElements() {
  const form = document.querySelector(".search-bar");
  const input = document.getElementById("search-input");
  const result = document.getElementById("search-result");
  const resultText = document.querySelector(".search-result__text");
  const wrapper = document.querySelector(".search-bar-wrapper");

  if (!form || !input || !result || !resultText || !wrapper) return null;

  return { form, input, result, resultText, wrapper };
}

function setupSubmitHandler({ form, input, result, resultText }) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const query = input.value.trim();
    if (!query) return;

    showResult(result, resultText, query);
  });
}

function setupOutsideClickHandler({ result, wrapper }) {
  document.addEventListener("click", (event) => {
    const isVisible = result.classList.contains(VISIBLE_CLASS);
    const clickedOutside = !wrapper.contains(event.target);

    if (isVisible && clickedOutside) {
      closeResult(result);
    }
  });
}

function showResult(result, resultText, query) {
  resultText.innerHTML = `Você buscou por: <strong>"${escapeHtml(query)}"</strong>`;
  result.hidden = false;

  // Força reflow
  void result.offsetWidth;

  result.classList.add(VISIBLE_CLASS);
}

function closeResult(result) {
  result.classList.remove(VISIBLE_CLASS);

  setTimeout(() => {
    result.hidden = true;
  }, CLOSE_DELAY_MS);
}
