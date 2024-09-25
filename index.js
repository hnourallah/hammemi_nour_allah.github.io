document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar ul li a');
    const sections = document.querySelectorAll('.section');

    // Fonction pour masquer toutes les sections
    function hideAllSections() {
        sections.forEach(section => section.classList.remove('active'));
    }

    // Fonction pour montrer la section sélectionnée
    function showSection(sectionId) {
        hideAllSections();
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
        }
    }

    // Affiche la section "about" par défaut
    showSection('about');

    // Ajoute l'événement click sur chaque lien de la navbar
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const sectionId = link.getAttribute('data-section');
            showSection(sectionId);
        });
    });
});
