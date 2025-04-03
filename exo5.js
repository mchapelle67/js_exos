const citationsContenair = document.querySelector('.citations');

function afficherCitation() {
quotes.forEach(quote => {
// créer la div pour mettre chaque citation
    const citationDiv = document.createElement("div");
    citationDiv.classList.add("citation");

// ajoute le contenu 
    citationDiv.innerHTML = `
        <h1>${quote.title}</h1>        
        <p>${quote.content}</p>
        <h2>- ${quote.author}  
        <button class="addToFavBtn">
            <i class="fa-solid fa-heart"></i>
        </button>
    </h2>
    `;

// ajouter le contenu de chaque div au conteneur
    citationsContenair.appendChild(citationDiv);

// sélectionner le bouton favoris et ajouter un event listener
    const favButton = citationDiv.querySelector('.addToFavBtn');
    favButton.addEventListener("click", () => ajouterAuxFavoris(quote));
    
});
}

function ajouterAuxFavoris(quote) {
    // récupérer les favoris existants ou créer un tableau vide
    let favoris = JSON.parse(localStorage.getItem("favoris")) || [];
        favoris.push(quote);
        localStorage.setItem("favoris", JSON.stringify(favoris));
}

afficherCitation();


// createElement(): créer un élément du type specifié;
// element.classList: c'est une methode permettant de manipuler les class d'un element;
// add(): permet d'ajouter une classe à un element;
// remove(): à l'inverse de add, permet de supprimer une class à un element;
// contains(): valide un booléen validant si un élément est présent sur une class ou non;

// element.textContent: définit ou renvoie le contenu textuel
// exemple: let text = element.textContent; renvois un text / element.textContent = "bla-bla"; change le text

// parent.appendChild(): ajoute l'element enfant sur l'element parent
// parent.removeChild(): supprimer l'element enfant sur l'element parent
// innerHTML: permet de lire ou de définir le contenu HTML à l'intérieur d'un élément

// localStorage: fonctionnalité du navigateur web qui permet de stocker des données sous forme de paires clé/valeur


// JSON (JavaScript Object Notation): est un format de données utilisé pour stocker et échanger des informations. 
// Il est basé sur la syntaxe des objets JavaScript mais peut être utilisé dans de nombreux langages.
// exemple: 
// format classique :                                       convertis JSON: 
// const citation = {                                      { 
//    title: "La vie est belle",                            "title": "La vie est belle",
//    content: "Profite de chaque instant.",                "content": "Profite de chaque instant.",
//    author: "Inconnu" };                                  "author": "Inconnu" }

// JSON.parse: récupère un objet depuis une chaîne JSON
// JSON.stringify: convertis un objet en JSON (comme dans dans l'exemple ci-dessus, il prend le format classique 
// et le convertis en format JSON)

// set.items('clé', 'valeur'): enregistre les données du localStorage 
// get.items('clé'): recupère ces données 