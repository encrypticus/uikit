const forms = document.querySelectorAll('.page__form');

Array.prototype.forEach.call(forms, (form) => {
  const textFields = form.querySelectorAll('.text-field');
  const tooltips = form.querySelectorAll('.form-tooltip');
  const tooltipsText = form.querySelectorAll('.form-tooltip__inner');

  form.addEventListener('submit', (event) => {
    Array.prototype.forEach.call(textFields, (textField, count) => {
      const tooltip = tooltips[count];
      const tooltipText = tooltipsText[count];

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

  Array.prototype.forEach.call(textFields, (textField, count) => {
    const tooltip = tooltips[count];
    const tooltipText = tooltipsText[count];

    if (tooltip !== undefined) {
      textField.addEventListener('blur', (event) => {
        const field = event.currentTarget;
        tooltip.classList.remove('form-tooltip_hidden');

        if (field.value.trim() === '') {
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
