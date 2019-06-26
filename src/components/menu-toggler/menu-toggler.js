var $toggler = $('.menu-toggler'),
    $inner = $toggler.find('span'),
    $menu = $('.page-header__main-nav-wrapper');

$toggler.on('click', function () {
  $toggler.toggleClass('menu-toggler_close');
  $menu.slideToggle(300, function () {
    if ($(this).css('display') === 'none') $(this).removeAttr('style');
  });
});