const btnMobile = document.getElementById('btn-mobile');

function toggleMenu() {
    if(event.type === 'touchstart') event.preventDefault();
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);
