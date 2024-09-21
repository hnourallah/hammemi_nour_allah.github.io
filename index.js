document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar ul li a');
    const sections = document.querySelectorAll('.section');

    // Fonction pour masquer toutes les sections
    function hideAllSections() {
        sections.forEach(section => {
            section.classList.remove('active'); // Retire la classe active pour toutes les sections
        });
    }

    // Fonction pour montrer la section sélectionnée
    function showSection(sectionId) {
        hideAllSections(); // Cache toutes les sections
        const section = document.getElementById(sectionId);
        if (section) {
            section.classList.add('active'); // Montre la section sélectionnée
        }
    }

    // On montre la section "about" par défaut au chargement
    showSection('about');

    // Écoute les clics sur les liens du menu de navigation
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Empêche le comportement par défaut du lien
            const sectionId = link.getAttribute('data-section'); // Récupère l'ID de la section
            showSection(sectionId); // Affiche la section correspondante
        });
    });
});
