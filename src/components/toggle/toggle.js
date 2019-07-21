const toggles = document.querySelectorAll('.toggle__input');
const labels = document.querySelectorAll('.toggle__label');

const toggleTick = function toggleCheckBox(label) {
  return (event) => {
    const checkbox = event.currentTarget;
    const checkboxLabel = label;

    checkboxLabel.textContent = checkbox.checked ? 'On' : 'Off';
  };
};

Array.prototype.forEach.call(toggles, (toggle, i) => {
  toggle.addEventListener('click', toggleTick(labels[i]), false);
});
