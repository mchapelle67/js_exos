// 1. Je crée une constante globale dans laquelle je recupère l'objet dans le fichier HTML 
const carre = document.querySelector('.carre');

// 2. Je crée une constante dans une fonction qui recupère les données de styles de l'objet une fois qu'il est recupérer
function style() {
    const infoCarre = window.getComputedStyle(carre);

// 3. Je créée une alerte avec les infos de style de l'objet recupéré.
    alert("Class: " + carre.className + "\n" +
        "Couleur de fond : " + infoCarre.backgroundColor + "\n" +
        "Color: " + infoCarre.color + "\n" +
        "Height: " + infoCarre.height + "\n" +
        "Width:  " + infoCarre.width + "\n" +
        "Display: " + infoCarre.display + "\n" +
        "Font-family: "+ infoCarre.fontFamily); 
}

// 4. Je crée une nouvelle fonction permettant d'afficher cette alerte au click. 
function afficherStyle() {
    carre.addEventListener('click', style);  
}

// 5. J'active ma fonction 
afficherStyle();



// DOM: Document Object Model - Modèle d'objet qui représente la structure du document HTML . C'est une représentation
// de tout ce qui se trouve dans le code HTML. Il sert à JS d'interagir avec la page web. 

// Difference Window et Document: Window c'est l'objet global. Il englobe non seulement le DOM (la page web), mais 
// aussi les fonctions comme les alertes, les timers etc ... Un document fait référence à l'objet DOM . C'est à 
//  travers lui qu'on accède et manipules le contenu de la page.


// .queryselector('objet'): cherche un élément dans le DOM pour pouvoir le manipuler avec JS. 

// .getComputedStyle('constante/variable'): permet de récupérer les styles appliqués à un element d'une page web. 

// alert('message'): fonction integrée qui permet de générer un popup avec un message. 

// .addEventListener('evenement', 'function'): attache un evenement à un élément du DOM. Permet de definir des actions spécifiques qui se 
// produiront lorsque l'événement spécifié se déclenche sur cet élément.