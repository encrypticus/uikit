import RippleEffect from './modules/RippleEffect';

const buttons = document.querySelectorAll('.button');
const { forEach } = Array.prototype;

forEach.call(buttons, (button) => {
  const ripple = new RippleEffect(button);
  ripple.init();
});
