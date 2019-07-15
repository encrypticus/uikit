/** Создает и 'вешает' ripple-effect на кнопки */

export default function rippleEffect () {
  var buttons = document.querySelectorAll('.button'),

      /**
       * Находит максимальное значение от ширины и высоты кнопки
       * @param {object} button объект кнопки
       * @returns {number} максимальное значение от ширины и высоты кнопки
       */
      getButtonSize = function (button) {
        return Math.max(button.clientWidth, button.clientHeight);
      },

      /**
       * Возвращает объект, содержащий размер элемента и его позицию относительно viewport
       * @param {object} button объект кнопки
       * @returns {object} объект TextRectangle
       */
      getBoundingRect = function (button) {
        return button.getBoundingClientRect();
      },

      /**
       * Добавляет в элемент кнопки элемент ripple-effect'a
       * @param {object} ripple элемент ripple-effect'а
       * @param {object} button объект кнопки
       */
      appendRipple = function (ripple, button) {
        button.appendChild(ripple);
      },

      /**
       * Создает и добавляет ripple-effect к кнопке
       * @param {object} button объект кнопки
       * @param {number} posX x-координата курсора мыши во время клика
       * @param {number} posY y-координата курсора мыши во время клика
       */
      setEffect = function (button, posX, posY) {
        var ripple = document.createElement('div'),
            style = ripple.style;

        style.width = style.height = getButtonSize(button) + 'px';
        style.left = posX - getBoundingRect(button).left - getButtonSize(button) / 2 + 'px';
        style.top = posY - getBoundingRect(button).top - getButtonSize(button) / 2 + 'px';

        ripple.classList.add('button__ripple');
        appendRipple(ripple, button);
      },

      /** 'Вешает' ripple-effect на кнопки */
      init = function () {
        var that = this;

        Array.prototype.forEach.call(buttons, function (button) {
          button.addEventListener('click', function (event) {
            setEffect(this, event.clientX, event.clientY);
          }, false);
        });
      };

  return {
    init: init
  }
};