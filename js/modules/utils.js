/**
 * Escapa caracteres HTML para prevenir XSS.
 * @param {string} text - Texto a ser escapado.
 * @returns {string} Texto seguro para inserir em innerHTML.
 */
export function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}
