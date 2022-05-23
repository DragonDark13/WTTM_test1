const openClassName = 'navigation-open';

const menuHandle = () => {
    let component = document.getElementsByClassName('navigation')[0],
        button = document.querySelector(".navigation").querySelector('.nav-toggle'),
        componentClassList = component.classList;

    document.addEventListener('click', function (e) {
        let target = e.target,
            targetClassname = target.className;

        const closeButton = () => {
            componentClassList.remove(openClassName);
        }

        if (targetClassname === button.className || target.closest('.nav-toggle') !== null) {
            if (!componentClassList.contains(openClassName)) {
                componentClassList.add(openClassName);
            } else {
                closeButton();
            }
        } else if (target.closest("nav-toggle__bar-wrapper") !== null) {
            e.stopPropagation();
        } else {
            closeButton();
        }
    });
};


menuHandle()