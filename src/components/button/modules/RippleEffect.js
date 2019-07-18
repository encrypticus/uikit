/**
 * Создает и 'вешает' ripple-effect на кнопки
 */
export default class RippleEffect {
  /**
   * @constructor
   * @param {string} button селектор элементов, на которые будет 'навешан' эффект
   */
  constructor(button = '.button') {
    this.buttons = document.querySelectorAll(button);
  }

  /**
   * Находит максимальное значение от ширины и высоты кнопки
   * @param {object} button объект кнопки
   * @returns {number} максимальное значение от ширины и высоты кнопки
   */
  static getButtonSize(button) {
    return Math.max(button.clientWidth, button.clientHeight);
  }

  /**
   * Возвращает объект, содержащий размер элемента и его позицию относительно viewport
   * @param {object} button объект кнопки
   * @returns {object} объект TextRectangle
   */
  static getBoundingRect(button) {
    return button.getBoundingClientRect();
  }

  /**
   * Добавляет в элемент кнопки элемент ripple-effect'a
   * @param {object} ripple элемент ripple-effect'а
   * @param {object} button объект кнопки
   */
  static appendRipple(ripple, button) {
    button.appendChild(ripple);
  }

  /**
   * Создает и добавляет ripple-effect к кнопке
   * @param {object} button объект кнопки
   * @param {number} posX x-координата курсора мыши во время клика
   * @param {number} posY y-координата курсора мыши во время клика
   */
  static setEffect(button, posX, posY) {
    const ripple = document.createElement('div');
    const { style } = ripple;

    style.width = `${RippleEffect.getButtonSize(button)}px`;
    style.height = `${RippleEffect.getButtonSize(button)}px`;
    style.left = `${posX - RippleEffect.getBoundingRect(button).left - RippleEffect.getButtonSize(button) / 2}px`;
    style.top = `${posY - RippleEffect.getBoundingRect(button).top - RippleEffect.getButtonSize(button) / 2}px`;
    style.zIndex = 100;

    ripple.classList.add('button__ripple');
    RippleEffect.appendRipple(ripple, button);
  }

  /**
   *  'Вешает' ripple-effect на кнопки
   */
  init() {
    Array.prototype.forEach.call(this.buttons, (button) => {
      button.addEventListener('click', (event) => {
        RippleEffect.setEffect(button, event.clientX, event.clientY);
      }, false);
    });
  }
}
