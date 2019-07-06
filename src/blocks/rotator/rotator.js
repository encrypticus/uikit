var arrowLeft = document.querySelector('.arrow-button'),
    arrowRight = document.querySelector('.arrow-button_direction_right'),
    slides = document.querySelector('.rotator__slides'),
    style = slides.style;
style.marginLeft = 0;

arrowLeft.addEventListener('click', function () {
  var marginLeft = parseInt(style.marginLeft);

  if (marginLeft === 0) {
    style.marginLeft = '-400%';
  } else  {
    style.marginLeft = marginLeft + 100 + '%';
  }
}, false);

arrowRight.addEventListener('click', function () {
  var marginLeft = parseInt(style.marginLeft);

  if (marginLeft === -400) {
    style.marginLeft = 0;
  } else  {
    style.marginLeft = marginLeft - 100 + '%';
  }

}, false);