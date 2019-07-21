/** Создает и 'вешает' ripple-effect на кнопки */
const effect = function rippleEffect(button) {
  /**
   * Создает и добавляет ripple-effect к кнопке
   * @param {object} event объект события
   */
  const addRippleEffect = function addRipple(event) {
    const ripple = document.createElement('div');
    const buttonSize = Math.max(button.clientWidth, button.clientHeight);
    const { style } = ripple;
    const rect = button.getBoundingClientRect();

    style.width = `${buttonSize}px`;
    style.height = `${buttonSize}px`;
    style.left = `${event.clientX - rect.left - buttonSize / 2}px`;
    style.top = `${event.clientY - rect.top - buttonSize / 2}px`;

    ripple.classList.add('button__ripple');
    button.appendChild(ripple);
  };

  /** 'Вешает' ripple-effect на кнопки */
  button.addEventListener('click', addRippleEffect, false);
};

export default effect;
