/**
 * Создает и "вешает" ripple-effect на кнопки
 */
export default class RippleEffect {
  /**
   * @constructor
   */
  constructor(button = ".button") {
    this.buttons = document.querySelectorAll(button);
    this.init();
  }

  /**
   * Находит максимальное значение от ширины и высоты кнопки
   * @param {object} button объект кнопки
   * @returns {number} максимальное значение от ширины и высоты кнопки
   */
  getButtonSize(button) {
    return Math.max(button.clientWidth, button.clientHeight);
  }

  /**
   * Возвращает объект, содержащий размер элемента и его позицию относительно viewport
   * @param {object} button объект кнопки
   * @returns {object} объект TextRectangle
   */
  getBoundingRect(button) {
    return button.getBoundingClientRect();
  }

  /**
   * Добавляет в элемент кнопки элемент ripple-effect'a
   * @param {object} ripple элемент ripple-effect'а
   * @param {object} button объект кнопки
   */
  appendRipple(ripple, button) {
    button.appendChild(ripple);
  }

  /**
   * Создает и добавляет ripple-effect к кнопке
   * @param {object} button объект кнопки
   * @param {number} posX x-координата курсора мыши во время клика
   * @param {number} posY y-координата курсора мыши во время клика
   */
  setEffect(button, posX, posY) {
    var ripple = document.createElement("div"),
        style = ripple.style;

    style.width = style.height = this.getButtonSize(button) + "px";
    style.left = posX - this.getBoundingRect(button).left - this.getButtonSize(button) / 2 + "px";
    style.top = posY - this.getBoundingRect(button).top - this.getButtonSize(button) / 2 + "px";

    ripple.classList.add("button__ripple");
    this.appendRipple(ripple, button);
  }

  /**
   *  "Вешает" ripple-effect на кнопки
   */
  init() {
    var that = this;

    Array.prototype.forEach.call(this.buttons, function (button) {
      button.addEventListener("click", function (event) {
        that.setEffect(this, event.clientX, event.clientY);
      }, false);
    });
  }
}