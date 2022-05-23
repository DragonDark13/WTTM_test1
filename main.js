/* ==========================================================================
   Component : Menu
 ============================================================================ */
var menuHandle = function () {
  var body = document.body,
      component = document.getElementsByClassName('main-navigation')[0],
      button = document.querySelector(".main-navigation").querySelector('.nav-toggle'),
      menu = document.querySelector(".main-navigation").querySelector('.menu-wrapper');

document.addEventListener('click', function(e) {
    var target = e.target,
        targetClassname = target.className;

    if (targetClassname === button.className || target.closest('.nav-toggle') !==null) {
      if (!component.classList.contains('open')) {
        component.classList.add('open');
        body.classList.add('menu-opened');
      } else {
        component.classList.remove('open');
        body.classList.remove('menu-opened');
      }
    }
    else if (target.closest(".menu-wrapper")!==null) {
      e.stopPropagation();
    }
    else {
      component.classList.remove('open');
      body.classList.remove('menu-opened');
    }
  });
};


  document.addEventListener("DOMContentLoaded",menuHandle)