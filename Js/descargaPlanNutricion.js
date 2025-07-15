document.addEventListener('DOMContentLoaded', () => {
    const enlaceNutri = document.getElementById('descargarNutri');

    enlaceNutri.addEventListener('click', (evento) => {
        evento.preventDefault(); // Evita que abra el PDF en navegador

        const url = enlaceNutri.getAttribute('href');
        const nombre = enlaceNutri.getAttribute('download');

        // Crear enlace temporal para forzar descarga
        const enlaceTemp = document.createElement('a');
        enlaceTemp.href = url;
        enlaceTemp.download = nombre;
        document.body.appendChild(enlaceTemp);
        enlaceTemp.click();
        document.body.removeChild(enlaceTemp);
    });
});