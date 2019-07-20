const $toggler = $('.menu-toggler');
const $menu = $('.page-header__main-nav-wrapper');

$toggler.on('click', (event) => {
  const togglerElement = event.currentTarget;

  $toggler.toggleClass('menu-toggler_close');

  $menu.slideToggle(300, function () {
    if ($(togglerElement).css('display') === 'none') $(this).removeAttr('style');
  });
});
