/** Создает и 'вешает' ripple-effect на кнопки */

const rippleEffect = {
  buttons: document.querySelectorAll('.button'),

  /**
   * Находит максимальное значение от ширины и высоты кнопки
   * @param {object} button объект кнопки
   * @returns {number} максимальное значение от ширины и высоты кнопки
   */
  getButtonSize(button) {
    return Math.max(button.clientWidth, button.clientHeight);
  },

  /**
   * Возвращает объект, содержащий размер элемента и его позицию относительно viewport
   * @param {object} button объект кнопки
   * @returns {object} объект TextRectangle
   */
  getBoundingRect(button) {
    return button.getBoundingClientRect();
  },

  /**
   * Добавляет в элемент кнопки элемент ripple-effect'a
   * @param {object} ripple элемент ripple-effect'а
   * @param {object} button объект кнопки
   */
  appendRipple(ripple, button) {
    button.appendChild(ripple);
  },

  /**
   * Создает и добавляет ripple-effect к кнопке
   * @param {object} button объект кнопки
   * @param {number} posX x-координата курсора мыши во время клика
   * @param {number} posY y-координата курсора мыши во время клика
   */
  setEffect(button, posX, posY) {
    const ripple = document.createElement('div');
    const { style } = ripple;

    style.width = `${this.getButtonSize(button)}px`;
    style.height = `${this.getButtonSize(button)}px`;
    style.left = `${posX - this.getBoundingRect(button).left - this.getButtonSize(button) / 2}px`;
    style.top = `${posY - this.getBoundingRect(button).top - this.getButtonSize(button) / 2}px`;

    ripple.classList.add('button__ripple');
    this.appendRipple(ripple, button);
  },

  /**
   * Возвращает функцию-обработчик для кнопки
   * @param button button объект кнопки
   * @returns {function(*)} функция-обработчик для кнопки
   */
  bindRippleEffect(button) {
    return (event) => {
      this.setEffect(button, event.clientX, event.clientY);
    };
  },

  /** 'Вешает' ripple-effect на кнопки */
  init() {
    Array.prototype.forEach.call(this.buttons, (button) => {
      button.addEventListener('click', this.bindRippleEffect(button), false);
    });
  },
};

export default rippleEffect;
