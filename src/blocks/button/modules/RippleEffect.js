
export default class RippleEffect {

  constructor() {
    this.buttons = document.querySelectorAll(".button");
    this.init();
  }

  /**
   *
   * @param button
   * @returns {number}
   */
  getButtonSize(button) {
    return Math.max(button.clientWidth, button.clientHeight);
  }

  /**
   *
   * @param button
   * @returns {ClientRect}
   */
  getBoundingRect(button) {
    return button.getBoundingClientRect();
  }

  /**
   *
   * @param ripple
   * @param button
   */
  appendRipple(ripple, button) {
    button.appendChild(ripple);
  }

  /**
   *
   * @param button
   * @param posX
   * @param posY
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
   *
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