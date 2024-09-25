// Fonction pour charger la section correspondante
function loadSection(section) {
    const contentDiv = document.getElementById('content');
    
    if (section === 'about') {
        contentDiv.innerHTML = `
            <h2>À propos de moi</h2>
            <p>Je suis un développeur passionné par les technologies modernes...</p>
        `;
    } else if (section === 'education') {
        contentDiv.innerHTML = `
            <h2>Éducation</h2>
            <ul>
                <li><strong>Master en Intelligence Artificielle</strong> - Université X (2023)</li>
                <li><strong>Licence en Systèmes Informatiques</strong> - Université Y (2021)</li>
            </ul>
        `;
    } else if (section === 'experience') {
        contentDiv.innerHTML = `
            <h2>Expériences</h2>
            <ul>
                <li><strong>Développeur Full Stack</strong> - Digital Virgo (2022-2023)</li>
                <li><strong>Développeur Web</strong> - M2N, Société Française (2021-2022)</li>
            </ul>
        `;
    } else if (section === 'skills') {
        contentDiv.innerHTML = `
            <h2>Compétences</h2>
            <ul>
                <li>JavaScript, HTML, CSS</li>
                <li>React, Node.js</li>
                <li>Montage vidéo, Design produit</li>
                <li>Création de collections NFT</li>
            </ul>
        `;
    } else if (section === 'contact') {
        contentDiv.innerHTML = `
            <h2>Contact</h2>
            <p>Email : monemail@example.com</p>
            <p>Téléphone : +123 456 7890</p>
        `;
    }
}
