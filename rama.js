

document.addEventListener('DOMContentLoaded', () => {
    const botonSaludo = document.getElementById('btn-saludo');
    const mensajeSaludo = document.getElementById('mensaje-saludo');

    // Al hacer clic en el botón, muestra un mensaje de éxito
    botonSaludo.addEventListener('click', () => {
        mensajeSaludo.textContent = "¡Conexión exitosa! El flujo de Git, HTML, CSS y JavaScript funciona perfectamente. 🚀";
        mensajeSaludo.classList.remove('hidden');
        
        botonSaludo.style.backgroundColor = '#00a86b';
        setTimeout(() => {
            botonSaludo.style.backgroundColor = '#00bcff';
        }, 1000);
    });
});