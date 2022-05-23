/* ==========================================================================
   Component : Menu
 ============================================================================ */
var menuHandle = function () {
    var body = document.body,
        component = document.getElementsByClassName('navigation')[0],
        button = document.querySelector(".navigation").querySelector('.nav-toggle'),
        menu = document.querySelector(".navigation").querySelector('.nav-toggle__bar-wrapper');

    document.addEventListener('click', function (e) {
        var target = e.target,
            targetClassname = target.className;

        if (targetClassname === button.className || target.closest('.nav-toggle') !== null) {
            if (!component.classList.contains('navigation-open')) {
                component.classList.add('navigation-open');
                body.classList.add('menu-opened');
            } else {
                component.classList.remove('navigation-open');
                body.classList.remove('menu-opened');
            }
        } else if (target.closest("nav-toggle__bar-wrapper") !== null) {
            e.stopPropagation();
        } else {
            component.classList.remove('open');
            body.classList.remove('menu-opened');
        }
    });
};


document.addEventListener("DOMContentLoaded", menuHandle)