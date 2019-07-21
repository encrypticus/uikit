/**
 * Создает и 'вешает' ripple-effect на кнопки
 */
class RippleEffect {
  /**
   * @constructor
   * @param {string} button dom-елемент кнопки, на которую будет 'навешен' эффект
   */
  constructor(button) {
    this.button = button;
  }

  /**
   * Находит максимальное значение от ширины и высоты кнопки
   * @returns {number} максимальное значение от ширины и высоты кнопки
   */
  getButtonSize() {
    return Math.max(this.button.clientWidth, this.button.clientHeight);
  }

  /**
   * Возвращает объект, содержащий размер элемента и его позицию относительно viewport
   * @returns {object} объект TextRectangle
   */
  getBoundingRect() {
    return this.button.getBoundingClientRect();
  }

  /**
   * Добавляет в элемент кнопки элемент ripple-effect'a
   * @param {object} ripple dom-элемент ripple-effect'а
   * @returns {object} текущий объект
   */
  appendRipple(ripple) {
    this.button.appendChild(ripple);
    return this;
  }

  /**
   * Создает и добавляет ripple-effect к кнопке
   * @param {number} posX x-координата курсора мыши во время клика
   * @param {number} posY y-координата курсора мыши во время клика
   */
  setEffect(posX, posY) {
    const ripple = document.createElement('div');
    const { style } = ripple;

    style.width = `${this.getButtonSize()}px`;
    style.height = `${this.getButtonSize()}px`;
    style.left = `${posX - this.getBoundingRect().left - this.getButtonSize() / 2}px`;
    style.top = `${posY - this.getBoundingRect().top - this.getButtonSize() / 2}px`;
    style.zIndex = 100;

    ripple.classList.add('button__ripple');
    this.appendRipple(ripple);
  }

  /**
   * Возвращает функцию-обработчик для кнопки
   * @returns {function(*)} функция-обработчик для кнопки
   */
  bindRippleEffect() {
    return (event) => {
      this.setEffect(event.clientX, event.clientY);
    };
  }

  /**
   *  'Вешает' ripple-effect на кнопки
   */
  init() {
    this.button.addEventListener('click', this.bindRippleEffect(), false);
    return this;
  }
}

export default RippleEffect;
