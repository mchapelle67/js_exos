const carre1 = document.querySelector('.carre1');
const carre2 = document.querySelector('.carre2');
const carre3 = document.querySelector('.carre3');
const carre4 = document.querySelector('.carre4');
const carre5 = document.querySelector('.carre5');

// 1. fonction qui recupère la couleur du carré au clique
function styleCouleur(carre) {
    return window.getComputedStyle(carre).backgroundColor;
}

// 2. fonction qui change la couleur de carre5 selon le carré cliqué
function changerCouleur(event) {
    const couleur = styleCouleur(event.target);
        carre5.style.backgroundColor = couleur;
}

// 3. ajout des ecouteurs d'evenements 
function cliqueSurCouleur() {
    carre1.addEventListener('click', changerCouleur);  
    carre2.addEventListener('click', changerCouleur);  
    carre3.addEventListener('click', changerCouleur);  
    carre4.addEventListener('click', changerCouleur);  
}

// 4. demarrer la fonction
cliqueSurCouleur();

// function(event): interaction captée par JS. Lorsqu'un evenement se produit, il est transmis sous forme d'un objet "event"
// qui contient des informations sur cet événement commem:
// - quel element a été cliqué,
// - quelle était la position de la souris,
// et bien plus encore ...
// 
//  event.target: fait partis de l'objet (event), il fait référence à l'objet qui a déclanché l'événement. 
// autrement dit, si tu as plusieurs éléments qui déclanchent des evenements, ça nous pemettra de savoir sur 
// quel element l'evenement a eu lieu. 