var mainNav = document.getElementById('mainNav');
var navToggle = document.getElementById('navToggle');

// Fonction pour basculer l'affichage de la classe "active" et "open"
function mainNavToggle() {
    mainNav.classList.toggle('active');
    navToggle.classList.toggle('open');
}

// Ajoute un évènement au click pour lancer la fonction mainNavToggle
navToggle.addEventListener('click', mainNavToggle);