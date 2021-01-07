// FONCTION CLASSIQUE
// function maFonction() {
//     console.log('Fonction classique');
// }
// maFonction();

// FONCTION ANONYME
// var fonctionAnonyme = function () {
//     console.log('Fonction anonyme');
// }
// fonctionAnonyme();

// jQuery() <=> $()

// UTILISATION DE JQUERY
jQuery(document).ready(function () {
    console.log('Document ready');
})

// UTILISATION DE L'ALIAS
$(document).ready(function () {
    console.log('Document ready');
})

// SELECTION BLOC ENFANT EN JAVASCRIPT
var enfant = document.getElementById('enfant');
//console.log(enfant);

// SELECTION PAR JQUERY (SELECTEURS IDENTIQUE AUX SELECTEURS CSS)
var enfant = $('#enfant');
//console.log(enfant);

var elementJavascript = document.getElementById('enfant');
console.log(elementJavascript);

var elementJquery = $(elementJavascript); // CONVERTIR L'ELEMENT JAVASCRIPT EN ELEMENT JQUERY
console.log(elementJquery);

// EXERCICE - EN PARTANT DU BLOC ENFANT, VOUS DEVEZ RETROUVER LE BLOC DIV QUI EST A LA RACINE (Bloc 1)

// 2 POSSIBILITÉS
// - TESTER DIRECTEMENT DANS LA CONSOLE
// - TESTER DANS LE FICHIER APP.JS

var enfant = $('#enfant');
var racine = enfant.parent().parent();

// ATTENTION A LA DIFFERENCE ENTRE LES ELEMENT DOM (JAVASCRIPT) ET LES OBJETS JQUERY
var racine = enfant.parents()[1]; // SELECTION DU PARENT DANS LA LISTE DES PARENTS

// EXEMPLE FIND - PERMET DE FAIRE DES SOUS SELECTIONS
$('body').find('#enfant');
var enfant = $(racine).find('#frere');

//$(blabla) // UTILISATION DE JQUERY
//$maVariable // VARIABLE JQUERY
