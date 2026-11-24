/**
 * 
 * @param {string} tagName 
 * @param {string} text 
 * @param {string} style 
 * @returns {HTMLElement}
 */
export function createElement(tagName, style = "") {
  let element = document.createElement(tagName);
  
  if(style !== ""){
    element.setAttribute("class", style);
  }

  return element;
}
