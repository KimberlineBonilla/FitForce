const menuButton = document.querySelector('.menu_btn');
const ulMenu = document.querySelector('.ul_menu');
const icon = menuButton.querySelector('i');

menuButton.addEventListener('click', () => {
    ulMenu.classList.toggle('active');

    if (ulMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times', 'animar-icono'); // Agrega animación de vuelta
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
        icon.classList.remove('animar-icono'); // Remueve animación al cerrar el icono con click
    }
});