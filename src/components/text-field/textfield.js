var forms = document.querySelectorAll('.page__form');

Array.prototype.forEach.call(forms, function (form) {
  var textFields = form.querySelectorAll('.text-field'),
      tooltips = form.querySelectorAll('.form-tooltip'),
      tooltipsText = form.querySelectorAll('.form-tooltip__inner');

  form.addEventListener('submit', function (event) {

    Array.prototype.forEach.call(textFields, function (textField, count) {
      var tooltip = tooltips[count],
          tooltipText = tooltipsText[count];

      if (tooltip !== undefined) {
        tooltip.classList.remove('form-tooltip_hidden');

        if (textField.value.trim() === '') {
          tooltip.classList.remove('form-tooltip_type_success');
          tooltip.classList.add('form-tooltip_type_error');
          tooltipText.textContent = 'Error';
          event.preventDefault();
        } else {
          tooltip.classList.remove('form-tooltip_type_error');
          tooltip.classList.add('form-tooltip_type_success');
          tooltipText.textContent = 'Thanks';
        }
      }
    });
  }, false);

  Array.prototype.forEach.call(textFields, function (textField, count) {
    var tooltip = tooltips[count],
        tooltipText = tooltipsText[count];

    if (tooltip !== undefined) {
      textField.addEventListener('blur', function () {
        tooltip.classList.remove('form-tooltip_hidden');

        if (this.value.trim() === '') {
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
});