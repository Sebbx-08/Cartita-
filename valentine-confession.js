document.addEventListener('DOMContentLoaded', () => {
    // Seleccionar el corazón y el mensaje
    const heart = document.querySelector('.heart img');
    const message = document.querySelector('.message');

    // Mostrar el mensaje al hacer clic en el corazón
    heart.addEventListener('click', () => {
        message.style.display = 'block';
    });
});