document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar ul li a');
    const sections = document.querySelectorAll('.section');

    // Fonction pour masquer toutes les sections
    function hideAllSections() {
        sections.forEach(section => {
            section.classList.remove('active'); // Cache toutes les sections
        });
    }

    // Fonction pour afficher une section en la rendant active
    function showSection(sectionId) {
        hideAllSections(); // Cache toutes les sections
        const section = document.getElementById(sectionId);
        if (section) {
            section.classList.add('active'); // Affiche la section sélectionnée
        }
    }

    // On affiche la première section ("about") au chargement de la page
    showSection('about');

    // Gestion des clics sur la navigation
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Empêche le comportement par défaut du lien
            const sectionId = link.getAttribute('data-section'); // Récupère l'ID de la section
            showSection(sectionId); // Affiche la section correspondante
        });
    });
});
