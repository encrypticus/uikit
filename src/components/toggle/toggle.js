const toggles = document.querySelectorAll('.toggle__input');
const labels = document.querySelectorAll('.toggle__label');

Array.prototype.forEach.call(toggles, (toggle, i) => {
  toggle.addEventListener('click', (event) => {
    const checkbox = event.currentTarget;
    labels[i].textContent = checkbox.checked ? 'On' : 'Off';
  }, false);
});
