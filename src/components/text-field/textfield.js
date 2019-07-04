var textFields = document.querySelectorAll('.text-field'),
    tooltips = document.querySelectorAll('.form-tooltip'),
    tooltipsText = document.querySelectorAll('.form-tooltip__inner');

Array.prototype.forEach.call(textFields, function (textField, count) {
  var tooltip = tooltips[count],
      tooltipText = tooltipsText[count];

  if (tooltip !== undefined) {
    textField.addEventListener('blur', function () {
      tooltip.classList.remove('form-tooltip_hidden');

      if (this.value === '') {
        tooltip.classList.remove('form-tooltip_type_success');
        tooltip.classList.add('form-tooltip_type_error');
        tooltipText.textContent = 'Error';
      } else {
        tooltip.classList.remove('form-tooltip_type_error');
        tooltip.classList.add('form-tooltip_type_success');
        tooltipText.textContent = 'Thanks';
      }
    }, false);
  }
});