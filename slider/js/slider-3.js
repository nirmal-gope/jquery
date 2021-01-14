// JAVASCRIPT
window.addEventListener('load', function () {
    console.log("It's loaded!")
})

// JQUERY
$(document).ready(function() {
    console.log('Page prête !');
})


// LORS D'UN CLIC JE VEUX QUE L'IMAGE SUIVANTE APPARAISSE

// 1 - SELECTIONNER LES IMAGES (1, 2, 3)
var mesImagesChevron = $('#slider-chevron img');
console.log(mesImagesChevron);

// var indexAncienneImageChevron = 0;
// var indexImageApparaitChevron = 1;
// $('body').on('click', function () {
//     console.log('Clic exercice 2')
//
//     // EXERCICE 2
//     // 1 - AJOUTER LA CLASSE CSS "active" SUR L'IMAGE CORRESPONDANTE
//     $(mesImagesChevron[indexImageApparaitChevron]).addClass('active');
//     console.log('Affichage image', indexImageApparaitChevron);
//
//     // 2 - SUPPRIMER LA CLASSE CSS "active" SUR L'ANCIENNE IMAGE
//     //var indexAncienneImage = indexImageApparait - 1; POSE PROBLEME
//     $(mesImagesChevron[indexAncienneImageChevron]).removeClass('active');
//     console.log('Cache image', indexAncienneImageChevron);
//
//     //indexAncienneImage = indexImageApparait;
//     indexAncienneImageChevron = indexImageApparaitChevron;
//     indexImageApparaitChevron++; // VA CORRESPONDRE À LA PROCHAINE IMAGE
//
//     console.log('Nombre d\'images', mesImagesChevron.length)
//
//     // LORSQUE LA PROCHAINE IMAGE N'EST PAS DISPONIBLE
//     if (indexImageApparaitChevron === mesImagesChevron.length) {
//         // REINITIALISER LE COMPTEUR DES IMAGES
//         indexImageApparaitChevron = 0;
//     }
//
// })


var monInterval;

var mesIcones = $('i.fas');
console.log(mesIcones);

var chevronGauche = mesIcones[0];
var chevronDroit = mesIcones[1];
console.log(chevronGauche, chevronDroit);

function afficheImage(indexImageAAfficher, indexImageACacher) {
    console.log('afficheImage', indexImageAAfficher, indexImageACacher);
    $(mesImagesChevron[indexImageAAfficher]).addClass('active');
    $(mesImagesChevron[indexImageACacher]).removeClass('active');
}

function gererClic(elementClique) {
    console.log('Clic sur chevron');
    console.log('Element cliqué', elementClique);
    console.log('Image actuelle', indexImageActuelle);

    indexAncienneImage = indexImageActuelle;

    if(elementClique.hasClass('fa-chevron-left')) {
        indexImageActuelle--;
        if(indexImageActuelle < 0){
            indexImageActuelle = (mesImagesChevron.length - 1);
        }
    } else if(elementClique.hasClass('fa-chevron-right')) {
        indexImageActuelle++;
        if(indexImageActuelle >= mesImagesChevron.length) {
            indexImageActuelle = 0;
        }
    }

    // EN UTILISANT UNE FONCTION
    afficheImage(indexImageActuelle, indexAncienneImage);

    // SANS UTILISER DE FONCTION
    // $(mesImagesChevron[indexImageActuelle]).addClass('active');
    // $(mesImagesChevron[indexAncienneImage]).removeClass('active');
}

function initialiseInterval() {
    // AFFICHER AUTOMATIQUEMENT LA PROCHAINE IMAGE TOUTE LES 3 SECONDES (3000ms) GRACE À setInterval()
    // setInterval()
    monInterval = setInterval(function() {
        console.log('Tick');

        indexAncienneImage = indexImageActuelle;
        indexImageActuelle++;
        if(indexImageActuelle >= mesImagesChevron.length) {
            indexImageActuelle = 0;
        }

        afficheImage(indexImageActuelle, indexAncienneImage);
    }, 3000)
}

var indexAncienneImage;
var indexImageActuelle = 0;

initialiseInterval();

// LORS D'UN CLIC SUR CHEVRON GAUCHE
$(chevronGauche).on('click', function(evenementSouris) {
    gererClic($(evenementSouris.currentTarget))
    // console.log('Clic sur chevron gauche', evenementSouris);
    // console.log('Objet cliqué', evenementSouris.currentTarget);
    // console.log('A la classe "fa-chevron-left"', $(evenementSouris.currentTarget).hasClass('fa-chevron-left'))
    // console.log('A la classe "fa-chevron-right"', $(evenementSouris.currentTarget).hasClass('fa-chevron-right'))
    // console.log('Image actuelle', indexImageActuelle);
    //
    // indexAncienneImage = indexImageActuelle;
    // indexImageActuelle--;
    // if(indexImageActuelle < 0){
    //     indexImageActuelle = (mesImagesChevron.length - 1);
    // }
    //
    // // EN UTILISANT UNE FONCTION
    // afficheImage(indexImageActuelle, indexAncienneImage);

    // SANS UTILISER DE FONCTION
    // $(mesImagesChevron[indexImageActuelle]).addClass('active');
    // $(mesImagesChevron[indexAncienneImage]).removeClass('active');
    clearInterval(monInterval);
    initialiseInterval();
})

// LORS D'UN CLIC SUR CHEVRON DROIT
$(chevronDroit).on('click', function(evenementSouris) {
    gererClic($(evenementSouris.currentTarget))

    // console.log('Clic sur chevron droit');
    // console.log('Image actuelle', indexImageActuelle);
    //
    // indexAncienneImage = indexImageActuelle;
    // indexImageActuelle++;
    // if(indexImageActuelle >= mesImagesChevron.length) {
    //     console.log('Dernière image, reinitialisation du compteur')
    //     indexImageActuelle = 0;
    // }
    // console.log('Afficher l\'image', indexImageActuelle);
    //
    // // EN UTILISANT UNE FONCTION
    // afficheImage(indexImageActuelle, indexAncienneImage);

    // SANS UTILISER DE FONCTION
    // $(mesImagesChevron[indexImageActuelle]).addClass('active');
    // $(mesImagesChevron[indexAncienneImage]).removeClass('active');

    clearInterval(monInterval);
    initialiseInterval();
})
