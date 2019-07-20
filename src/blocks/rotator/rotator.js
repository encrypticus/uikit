const arrowLeft = document.querySelector('.arrow-button');
const arrowRight = document.querySelector('.arrow-button_direction_right');
const slides = document.querySelector('.rotator__slides');
const { style } = slides;

style.marginLeft = 0;

arrowLeft.addEventListener('click', () => {
  const marginLeft = parseInt(style.marginLeft, 10);

  if (marginLeft === 0) {
    style.marginLeft = '-400%';
  } else {
    style.marginLeft = `${marginLeft + 100}%`;
  }
}, false);

arrowRight.addEventListener('click', () => {
  const marginLeft = parseInt(style.marginLeft, 10);

  if (marginLeft === -400) {
    style.marginLeft = 0;
  } else {
    style.marginLeft = `${marginLeft - 100}%`;
  }
}, false);
