var toggles = document.querySelectorAll('.toggle__input'),
    labels = document.querySelectorAll('.toggle__label');

Array.prototype.forEach.call(toggles, function(toggle, i) {
   toggle.addEventListener('click', function () {
       labels[i].textContent = this.checked ? 'On' : 'Off';
   }, false);
});