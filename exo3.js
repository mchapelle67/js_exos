// 1. selectionne tout les carrés dont la classe contient 'carre-' grâce au selecteur d'attribut [class^=]
const carres = document.querySelectorAll('[class^="carre-"]');

// 2. transforme l'élément (couleur, taille, rotation dynamique)
function modification(event) {
    const carre = event.target;

    // Si la couleur est déjà rouge, réinitialiser à vert
    if (carre.style.backgroundColor === 'rgb(0, 128, 0)') {
        carre.style.backgroundColor = 'red';  // Met la couleur en rouge
        carre.style.transform = 'scale(0.9) rotate(360deg)';  // Modifie la taille à 90% et créer une rotation 
    } else {
        carre.style.backgroundColor = '#008000';  // Remet la couleur verte
        carre.style.transform = 'scale(1) rotate(0)';  // Réinitialise la taille et la rotation
    }

    // Applique une transition fluide au rotate(360deg)
    carre.style.transition = 'transform 0.8s ease-in-out, background-color 0.5s ease-in-out';
}

// 3. création de l'événement au clic et transformation de chaque élément grâce à une boucle
function cliqueSurCarre() {
carres.forEach(carre => {
    carre.addEventListener('click', modification)
});
}

cliqueSurCarre();
