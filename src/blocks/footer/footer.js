const btnHelp = document.querySelector('.page-footer .button');
const overlay = document.querySelector('.overlay');
const messaging = document.querySelector('.page__popup-messaging');

btnHelp.addEventListener('click', () => {
  overlay.classList.toggle('overlay_visible');
  messaging.classList.toggle('page__popup-messaging_visible');
}, false);

overlay.addEventListener('click', (event) => {
  const overlayElement = event.currentTarget;
  overlayElement.classList.toggle('overlay_visible');
  messaging.classList.toggle('page__popup-messaging_visible');
});
