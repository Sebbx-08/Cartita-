document.addEventListener('DOMContentLoaded', () => {
    const heart = document.querySelector('.heart img');
    const message = document.querySelector('.message');

    // Mostrar la carta al hacer clic en el corazón
    heart.addEventListener('click', () => {
        message.style.display = 'block';
    });
});

    // Ocultar la carta al hacer clic en el botón de cerrar
    const closeButton = document.querySelector('.close-button');
    closeButton.addEventListener('click', () => {
        message.style.display = 'none';
    });
