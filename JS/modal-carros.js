document.addEventListener('DOMContentLoaded', () => {
    const btn1 = document.getElementById('btn_car_1');
    const btn2 = document.getElementById('btn_car_2');
    const btn3 = document.getElementById('btn_car_3');
    const btn4 = document.getElementById('btn_car_4');
    const contenidoPrincipal = document.getElementById('plantillasCarros');

    btn1.classList.add('activoItemCarros');
    fetch('../Recursos/Modal-Cars/1.html')
        .then(response => response.text())
        .then(data => {
            contenidoPrincipal.innerHTML = data;
        })
        .catch(error => console.error('Error al cargar el contenido:', error));

    btn1.addEventListener('click', () => {
        btn2.classList.remove('activoItemCarros');
        btn3.classList.remove('activoItemCarros');
        btn4.classList.remove('activoItemCarros');
        btn1.classList.add('activoItemCarros');
        fetch('../Recursos/Modal-Cars/1.html')
            .then(response => response.text())
            .then(data => {
                contenidoPrincipal.innerHTML = data;
            })
            .catch(error => console.error('Error al cargar el contenido:', error));
    });

    btn2.addEventListener('click', () => {
        btn1.classList.remove('activoItemCarros');
        btn3.classList.remove('activoItemCarros');
        btn4.classList.remove('activoItemCarros');
        btn2.classList.add('activoItemCarros');
        fetch('../Recursos/Modal-Cars/2.html')
            .then(response => response.text())
            .then(data => {
                contenidoPrincipal.innerHTML = data;
            })
            .catch(error => console.error('Error al cargar el contenido:', error));
    });

    btn3.addEventListener('click', () => {
        btn1.classList.remove('activoItemCarros');
        btn2.classList.remove('activoItemCarros');
        btn4.classList.remove('activoItemCarros');
        btn3.classList.add('activoItemCarros');
        fetch('../Recursos/Modal-Cars/3.html')
            .then(response => response.text())
            .then(data => {
                contenidoPrincipal.innerHTML = data;
            })
            .catch(error => console.error('Error al cargar el contenido:', error));
    });
});
