var $toggler = $('.menu-toggler'),
    $menu = $('.page-header__main-nav-wrapper');

$toggler.on('click', function () {
  $menu.slideToggle(300, function () {
    if ($(this).css('display') === 'none') $(this).removeAttr('style');
  });
});