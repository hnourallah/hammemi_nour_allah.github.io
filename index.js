document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar ul li a');  // Tous les liens de la navbar
    const sections = document.querySelectorAll('.section');  // Toutes les sections du contenu

    // Fonction pour masquer toutes les sections
    function hideAllSections() {
        sections.forEach(section => {
            section.classList.remove('active');  // Enlève la classe 'active' pour masquer la section
        });

        // Enlève la classe active des liens
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
    }

    // Fonction pour afficher une section spécifique
    function showSection(sectionId) {
        hideAllSections();  // Cache toutes les sections
        const section = document.getElementById(sectionId);  // Récupère la section à afficher par son ID
        const activeLink = document.querySelector(`.navbar ul li a[data-section="${sectionId}"]`);  // Sélectionne le lien correspondant
        if (section && activeLink) {
            section.classList.add('active');  // Ajoute la classe 'active' pour afficher la section
            activeLink.classList.add('active');  // Ajoute la classe 'active' au lien correspondant
        }
    }

    // On affiche la section "À propos" par défaut au chargement
    showSection('about');

    // Écoute les clics sur les liens de la barre de navigation
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();  // Empêche le comportement par défaut du lien
            const sectionId = link.getAttribute('data-section');  // Récupère l'ID de la section à afficher
            showSection(sectionId);  // Affiche la section correspondante
        });
    });
});
