var btnHelp = document.querySelector('.page-footer .button'),
    overlay = document.querySelector('.overlay'),
    messaging = document.querySelector('.page__popup-messaging');

btnHelp.addEventListener('click', function () {
  overlay.classList.toggle('overlay_visible');
  messaging.classList.toggle('page__popup-messaging_visible');
}, false);

overlay.addEventListener('click', function () {
  this.classList.toggle('overlay_visible');
  messaging.classList.toggle('page__popup-messaging_visible');
})