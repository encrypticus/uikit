/** Создает и 'вешает' ripple-effect на кнопки */
export default function rippleEffect() {
  const buttons = document.querySelectorAll('.button');

  /**
   * Создает и добавляет ripple-effect к кнопке
   * @param {object} event объект события
   */
  function addRipple(event) {
    const ripple = document.createElement('div');
    const buttonSize = Math.max(this.clientWidth, this.clientHeight);
    const { style } = ripple;
    const rect = this.getBoundingClientRect();

    style.width = `${buttonSize}px`;
    style.height = `${buttonSize}px`;
    style.left = `${event.clientX - rect.left - buttonSize / 2}px`;
    style.top = `${event.clientY - rect.top - buttonSize / 2}px`;

    ripple.classList.add('button__ripple');
    this.appendChild(ripple);
  }

  /** 'Вешает' ripple-effect на кнопки */
  Array.prototype.forEach.call(buttons, (button) => {
    button.addEventListener('click', addRipple);
  });
}
