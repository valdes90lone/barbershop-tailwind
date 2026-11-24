
/**
 * Crée un élément HTML.
 *
 * @param {string} tagName - Nom de la balise HTML.
 * @param {string} style - Classes CSS à appliquer.
 * @returns {HTMLElement}
 */
export function createElement(tagName, style = "") {
  const element = document.createElement(tagName);

  if (style !== "") {
    element.setAttribute("class", style);
  }

  return element;
}


/**
 * Clone le contenu d'un template HTML.
 *
 * @param {string} id - Identifiant du template.
 * @returns {DocumentFragment}
 */
export function createTemplate(id) {
  const template = document.getElementById(id);

  if (!template) {
    throw new Error(`Template introuvable : ${id}`);
  }

  return template.content.cloneNode(true);
}
