let prevScrollpos = window.pageYOffset;
let isAtTop = true;

window.onscroll = function() {
    if (window.innerWidth > 600) {
        let currentScrollPos = window.pageYOffset;
        const navbar = document.getElementById("navbar");

        if (currentScrollPos === 0) {
            isAtTop = true;
        } else {
            isAtTop = false;
        }

        if (!isAtTop && prevScrollpos < currentScrollPos) {
            navbar.style.top = "-200px";
        } else {
            navbar.style.top = "0";
        }
        prevScrollpos = currentScrollPos;
    }
};
