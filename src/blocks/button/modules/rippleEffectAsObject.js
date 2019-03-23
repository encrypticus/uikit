export default function rippleEffect () {
  var buttons = document.querySelectorAll(".button"),

      getButtonSize = function (button) {
        return Math.max(button.clientWidth, button.clientHeight);
      },

      getBoundingRect = function (button) {
        return button.getBoundingClientRect();
      },

      appendRipple = function (ripple, button) {
        button.appendChild(ripple);
      },

      setEffect = function (button, posX, posY) {
        var ripple = document.createElement("div"),
            style = ripple.style;

        style.width = style.height = getButtonSize(button) + "px";
        style.left = posX - getBoundingRect(button).left - getButtonSize(button) / 2 + "px";
        style.top = posY - getBoundingRect(button).top - getButtonSize(button) / 2 + "px";

        ripple.classList.add("button__ripple");
        appendRipple(ripple, button);
      },

      init = function () {
        var that = this;

        Array.prototype.forEach.call(buttons, function (button) {
          button.addEventListener("click", function (event) {
            setEffect(this, event.clientX, event.clientY);
          }, false);
        });
      };

  return {
    init: init
  }
};