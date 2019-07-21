const btnHelp = document.querySelector('.page-footer .button');
const overlay = document.querySelector('.overlay');
const messaging = document.querySelector('.page__popup-messaging');

const show = function showMessaging() {
  overlay.classList.toggle('overlay_visible');
  messaging.classList.toggle('page__popup-messaging_visible');
};

const hide = function hideMessaging(event) {
  const overlayElement = event.currentTarget;
  overlayElement.classList.toggle('overlay_visible');
  messaging.classList.toggle('page__popup-messaging_visible');
};

btnHelp.addEventListener('click', show, false);

overlay.addEventListener('click', hide, false);
