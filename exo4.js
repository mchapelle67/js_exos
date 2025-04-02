const liens = document.querySelectorAll('.lien')
const main = document.querySelector('.main')

// recuperer couleur liens
function recupColor(element) {
    return window.getComputedStyle(element).backgroundColor;
}

// créer animation 
function animation(event) {
    const color = recupColor(event.target);
    const lien = event.currentTarget;
    const currentColor = window.getComputedStyle(main).backgroundColor;
    
        main.style.backgroundColor = color;
        lien.classList.toggle('active');

        // remettre couleur initiale
        if (currentColor === color)  {
                main.style.backgroundColor = 'rgb(128, 128, 128';
        } 
}

// créer evenement 
function evenement() {
    liens.forEach(lien => {
        lien.addEventListener('click', animation)
    });
}

evenement();
recupColor();
animation();