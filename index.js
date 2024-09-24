document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar ul li a');  // Tous les liens de la navbar
    const contentDiv = document.getElementById('content');  // Div où on charge les pages

    // Fonction pour charger une page externe
    function loadPage(page) {
        fetch(page)
            .then(response => response.text())
            .then(data => {
                contentDiv.innerHTML = data;  // Charge le contenu dans la div
            })
            .catch(error => {
                contentDiv.innerHTML = '<p>Erreur lors du chargement de la page.</p>';
            });
    }

    // Charger "À propos" par défaut au démarrage
    loadPage('about.html');

    // Gérer les clics sur la navigation
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();  // Empêche le rechargement de la page
            const page = link.getAttribute('data-page');  // Récupère le fichier à charger
            loadPage(page);  // Charge la page sélectionnée
        });
    });
});
