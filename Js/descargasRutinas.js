document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todos los enlaces con clase .ver-mas
    const enlaces = document.querySelectorAll('.seccionRutinas .ver-mas');

    enlaces.forEach(enlace => {
        enlace.addEventListener('click', function (event) {
            event.preventDefault();  // Evita el comportamiento por defecto

            const url = this.getAttribute('href');
            const nombre = this.getAttribute('download');

            // Crear enlace temporal para descarga
            const tempLink = document.createElement('a');
            tempLink.href = url;
            tempLink.download = nombre;
            document.body.appendChild(tempLink);
            tempLink.click();
            document.body.removeChild(tempLink);
        });
    });
});