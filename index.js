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

    // Fonction pour montrer la section active
    function showSection(sectionId) {
        hideAllSections();
        document.getElementById(sectionId).classList.add('active');
    }

    // Écouteur d'événements pour le bouton "Découvrir mes compétences"
    discoverBtn.addEventListener('click', function () {
        // Transition de la carte
        card.style.transition = 'transform 0.5s ease';
        card.style.transform = 'scale(0.1)'; // Réduit la carte

        setTimeout(() => {
            card.style.transform = 'scale(1)'; // Restauration de la carte
            showSection('skills'); // Affiche la section compétences
        }, 500); // Délai correspondant à la durée de l'animation
    });

    // Écouteurs d'événements pour les boutons de navigation
    document.querySelectorAll('.nav-btn').forEach(button => {
        button.addEventListener('click', function () {
            const target = button.getAttribute('data-target');
            showSection(target);
        });
    });

    // Affiche la section "À propos" par défaut au chargement
    hideAllSections();
    document.getElementById('about').classList.add('active');
});
