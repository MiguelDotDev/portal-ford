var navButtom = document.getElementById('buttomNav');
var navTop = document.getElementById('topNav');

window.addEventListener('scroll', function () {
    scrollActual = window.scrollY;

    //Transparente hasta arriba
    if (scrollActual === 0) {
        scrollDesdeTop = true;
        navButtom.classList.add('navTransparente');
        navButtom.classList.remove('shadow-lg');
        navTop.classList.add('navTransparente');
    } else {
        navButtom.classList.add('shadow-lg');
        navButtom.classList.remove('navTransparente');
        navTop.classList.remove('navTransparente');
    }
});
