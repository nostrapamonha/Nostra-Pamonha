if (window.matchMedia('(max-width:1025px)').matches) {
  function openMenu() {
    var menuMobile = document.querySelector('#menu-mobile');
    var header = document.querySelector('.header');
    var menuButton = document.querySelector('.header-menu');

    menuMobile.classList.toggle('menu-open');
    header.classList.toggle('header-open');
    menuButton.classList.toggle('active');
  }

  var menuItems = document.querySelectorAll('.menu-item__title');

  for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', function (event) {
      var menuMobile = document.querySelector('#menu-mobile');
      var header = document.querySelector('.header');
      var menuButton = document.querySelector('.header-menu');

      if (menuMobile.classList.contains('menu-open')) {
        menuMobile.classList.remove('menu-open');
        header.classList.remove('header-open');
      }
    });
  }
}
