document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const links = document.getElementById('navbarLinks');
    const closeButton = document.getElementById('closeButton');

    if (hamburger && links && closeButton) {
        hamburger.addEventListener('click', () => {
            links.classList.add('show');
        });

        closeButton.addEventListener('click', () => {
            links.classList.remove('show');
        });
    }
});