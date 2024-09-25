document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section');
    const discoverBtn = document.getElementById('discover-btn');
    const card = document.querySelector('.card');

    // Fonction pour cacher toutes les sections
    function hideAllSections() {
        sections.forEach(section => {
            section.classList.remove('active');
        });
    }

    // Écouteur d'événements pour le bouton "Découvrir mes compétences"
    discoverBtn.addEventListener('click', function () {
        hideAllSections();

        // Transition de la carte
        card.style.transition = 'transform 0.5s ease';
        card.style.transform = 'scale(0.1)'; // Réduit la carte

        setTimeout(() => {
            card.style.transform = 'scale(1)'; // Restauration de la carte

            document.getElementById('skills').classList.add('active'); // Affiche la section compétences
        }, 500); // Délai correspondant à la durée de l'animation
    });

    // Affiche la section "À propos" par défaut au chargement
    hideAllSections();
    document.getElementById('about').classList.add('active');
});
