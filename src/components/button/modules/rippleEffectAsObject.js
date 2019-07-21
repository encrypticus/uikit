/** Создает и 'вешает' ripple-effect на кнопки */
const effect = function rippleEffect(button) {
  /**
   * Находит максимальное значение от ширины и высоты кнопки
   * @param {object} button объект кнопки
   * @returns {number} максимальное значение от ширины и высоты кнопки
   */
  const getSize = function getButtonSize() {
    return Math.max(button.clientWidth, button.clientHeight);
  };

  /**
   * Возвращает объект, содержащий размер элемента и его позицию относительно viewport
   * @param {object} button объект кнопки
   * @returns {object} объект TextRectangle
   */
  const getBounding = function getBoundingRect() {
    return button.getBoundingClientRect();
  };

  /**
   * Добавляет в элемент кнопки элемент ripple-effect'a
   * @param {object} ripple элемент ripple-effect'а
   * @param {object} button объект кнопки
   */
  const appendRipple = function addRipple(ripple) {
    button.appendChild(ripple);
  };

  /**
   * Создает и добавляет ripple-effect к кнопке
   * @param {object} button объект кнопки
   * @param {number} posX x-координата курсора мыши во время клика
   * @param {number} posY y-координата курсора мыши во время клика
   */
  const setEffect = function setRippleEffect(posX, posY) {
    const ripple = document.createElement('div');
    const { style } = ripple;

    style.width = `${getSize()}px`;
    style.height = `${getSize()}px`;
    style.left = `${posX - getBounding().left - getSize() / 2}px`;
    style.top = `${posY - getBounding().top - getSize() / 2}px`;

    ripple.classList.add('button__ripple');
    appendRipple(ripple);
  };

  /**
   * Возвращает функцию-обработчик для кнопки
   * @param button button объект кнопки
   * @returns {function(*)} функция-обработчик для кнопки
   */
  const bindRippleEffect = function addRippleEffect(event) {
    setEffect(event.clientX, event.clientY);
  };

  /** 'Вешает' ripple-effect на кнопки */
  const init = function () {
    button.addEventListener('click', bindRippleEffect, false);
  };

  return {
    init,
  };
};

export default effect;
