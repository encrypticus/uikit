export default function rippleEffect() {
  var buttons = document.querySelectorAll(".button");

  Array.prototype.forEach.call(buttons, function (button) {
    button.addEventListener("click", addRipple);
  });

  /**
   *
   * @param event
   */
  function addRipple(event) {
    var ripple = document.createElement("div"),
        buttonSize = Math.max(this.clientWidth, this.clientHeight),
        style = ripple.style,
        rect = this.getBoundingClientRect();

    style.width = style.height = buttonSize + "px";
    style.left = event.clientX - rect.left - buttonSize / 2 + "px";
    style.top = event.clientY - rect.top - buttonSize / 2 + "px";

    ripple.classList.add("button__ripple");
    this.appendChild(ripple);
  }
}
