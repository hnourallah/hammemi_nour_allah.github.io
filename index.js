document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar ul li a');  // Tous les liens de la navbar
    const sections = document.querySelectorAll('.section');  // Toutes les sections du contenu

    // Fonction pour masquer toutes les sections
    function hideAllSections() {
        sections.forEach(section => {
            section.classList.remove('active');  // Cache toutes les sections
        });
    }

    // Fonction pour montrer une section spécifique
    function showSection(sectionId) {
        hideAllSections();  // Cache toutes les sections d'abord
        const section = document.getElementById(sectionId);
        if (section) {
            section.classList.add('active');  // Affiche la section sélectionnée
        }
    }

    // Montrer la section "À propos" par défaut au chargement
    showSection('about');

    // Écoute les clics sur les liens du menu de navigation
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();  // Empêche la redirection de la page
            const sectionId = link.getAttribute('data-section');  // Récupère l'ID de la section à afficher
            showSection(sectionId);  // Affiche la section correspondante
        });
    });
});
