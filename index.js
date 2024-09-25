document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section');
    const discoverBtn = document.getElementById('discover-btn');

    // Fonction pour cacher toutes les sections
    function hideAllSections() {
        sections.forEach(section => {
            section.classList.remove('active');
        });
    }

    // Écouteur d'événements pour le bouton "Découvrir mes compétences"
    discoverBtn.addEventListener('click', function () {
        hideAllSections();
        document.getElementById('skills').classList.add('active'); // Affiche la section compétences
    });

    // Affiche la section "À propos" par défaut au chargement
    hideAllSections();
    document.getElementById('about').classList.add('active');
});
