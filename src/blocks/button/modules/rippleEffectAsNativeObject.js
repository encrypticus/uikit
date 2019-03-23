var rippleEffect = {
  buttons: document.querySelectorAll(".button"),

  getButtonSize: function (button) {
    return Math.max(button.clientWidth, button.clientHeight);
  },

  getBoundingRect: function (button) {
    return button.getBoundingClientRect();
  },

  appendRipple: function (ripple, button) {
    button.appendChild(ripple);
  },

  setEffect: function (button, posX, posY) {
    var ripple = document.createElement("div"),
        style = ripple.style;

    style.width = style.height = this.getButtonSize(button) + "px";
    style.left = posX - this.getBoundingRect(button).left - this.getButtonSize(button) / 2 + "px";
    style.top = posY - this.getBoundingRect(button).top - this.getButtonSize(button) / 2 + "px";

    ripple.classList.add("button__ripple");
    this.appendRipple(ripple, button);
  },

  init: function () {
    var that = this;

    Array.prototype.forEach.call(this.buttons, function (button) {
      button.addEventListener("click", function (event) {
        that.setEffect(this, event.clientX, event.clientY);
      }, false);
    });
  }
};

export default rippleEffect;