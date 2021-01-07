//1 - SELECTIONNER LE BLOC AVEC L'ID "MAIN"
var bloc = $('#main'); // JQUERY
//var bloc = document.getElementById('main'); // JAVASCRIPT
console.log(bloc);

//2 - AJOUTER UN ECOUTEUR D'EVENEMENT (mousedown mousemove mouseup)

// MOUSE DOWN -> position: absolute;
// bloc.mousedown(function(event) {
//     console.log('mousedown', event);
// });

// $('#main').on('mousedown', function(event) {
//     console.log('mousedown', event)
// });

console.log(window);
console.log($(window).height());
console.log($(window).width());

// ARBRE DU DOM
//window > document > html > body >

// JE VEUX QUE QUAND JE LAISSE APPUYER SUR LE CLIC DE MA SOURIS, LE CARRE ROUGE SUIT MA SOURIS,
// LORSQUE JE RELACHE, LE CARRE ROUGE REVIENT A SA POSITION INITIAL

// MOUSE DOWN -> POSITION: ABSOLUTE

// MOUSE MOVE -> LE BLOC ROUGE SUIT LA SOURIS
$('body').on('mousemove', function(evenementSouris) {
    // Y -> Vertical -> top
    // X -> Horizontal -> left

    //console.log('mousemove');

    // EVENEMENT
    //console.log('Event', evenementSouris);

    // POSITION
    //console.log('Position: ', evenementSouris.originalEvent.clientX, evenementSouris.originalEvent.clientY);

    //var positionX =
    //console.log(bloc.height());
    //console.log(bloc.width());

    // POUR AVOIR LA SOURIS AU MILIEU DU BLOC, IL FAUT DIVISER LA HAUTEUR ET LA LONGUEUR  PAR 2
    var moitieHauteur = (bloc.height() / 2);
    var moitieLargeur = (bloc.width() / 2);

    var positionSourisVerticalement = evenementSouris.originalEvent.clientY - moitieHauteur;
    var positionSourisHorizontalement = evenementSouris.originalEvent.clientX - moitieLargeur;

    // Math.max -> Renvoi le plus grand nombre
    var lePlusGrandNombre = Math.max(10, 30, 40); // 40
    // Math.min -> Renvoi le plus petit nombre
    var lePlusPetitNombre = Math.min(10, 30, 40); // 10

    // PERMET DE BLOQUER COTÉ GAUCHE ET HAUT
    // -> PREND LE PLUS GRAND CHIFFRE ENTRE LA POSITION DE LA SOURIS ET 0
    var coinBlocRougeVerticale = Math.max(positionSourisVerticalement, 0);
    var coinBlocRougeHorizontale = Math.max(positionSourisHorizontalement, 0);

    // PERMET DE BLOQUER COTÉ DROIT ET BAS
    // -> PREND LE PLUS PETIT CHIFFRE ENTRE LA POSITION DE LA SOURIS ET LA LIMITE DE MA FENETRE
    var limiteFenetreVerticale = $(window).height() - bloc.height();
    var limiteFenetreHorizontale = $(window).width() - bloc.width();

    coinBlocRougeVerticale = Math.min(coinBlocRougeVerticale, limiteFenetreVerticale);
    coinBlocRougeHorizontale = Math.min(coinBlocRougeHorizontale, limiteFenetreHorizontale);

    console.log('Position bloc', coinBlocRougeHorizontale, coinBlocRougeVerticale);

    bloc.css('top', coinBlocRougeVerticale);
    bloc.css('left', coinBlocRougeHorizontale);
    //var lePlusGrandNombre = Math.max(10, 30, 40);
});

//document.getElementById('main').style.width = '200px';
//$('#main').css('width', '200' - '100');

// MOUSE UP -> POSITION: INITIAL


// $('body').on('keydown', function(evenementClavier) {
//     console.log(evenementClavier);
// });
//
// $(window).on('resize', function(event) {
//     console.log(event);
// });

// MOUSE MOVE -> top: XXX; left XXX;

//3 - RECUPERER "EVENT" ET LA POSITION DU CURSEUR
// RECUPERER DANS event.originalEvent LA POSITION DU CURSEUR

//4 - POSITION: ABSOLUTE // TOP / BOTTOM / LEFT / RIGHT
