const $toggler = $('.menu-toggler');
const $menu = $('.page-header__main-nav-wrapper');

const toggle = function toggleMenu(event) {
  const togglerElement = event.currentTarget;
  console.log(togglerElement);

  $toggler.toggleClass('menu-toggler_close');

  $menu.slideToggle(300, function () {
    if ($(this).css('display') === 'none') $(this).removeAttr('style');
  });
};

$toggler.on('click', toggle);
