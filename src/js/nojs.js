function hideElement(elem) {
  var element = document.querySelector(elem);
  element.classList.remove('js-visible');
}

module.exports = hideElement;