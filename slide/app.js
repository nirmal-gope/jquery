// LORS D'UN CLIC JE VEUX QUE L'IMAGE SUIVANTE APPARAISSE

// 1 - SELECTIONNER LES IMAGES (1, 2, 3)
// EN JAVASCRIPT
// document.getElementById() // UN SEUL
// document.getElementsByClassName() // PLUSIEURS POSSIBLE
// document.getElementsByTagName() // PLUSIEURS POSSIBLE
var mesImages = $('img');
console.log(mesImages);

// 2 - SELECTIONNER LE BODY POUR AJOUTER UN EVENEMENT DESSUS
// 3 - AJOUTER UN ECOUTEUR DEVENEMENT SUR LE CLIC
$('body').on('click', function() {
    console.log('Clic');
    mesImages.slideDown();

})

// 4 - DEPLACER L'IMAGE AVEC POSITION: ABSOLUTE et LEFT: XXpx
