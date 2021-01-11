// LORS D'UN CLIC JE VEUX QUE L'IMAGE SUIVANTE APPARAISSE

// 1 - SELECTIONNER LES IMAGES (1, 2, 3)
// EN JAVASCRIPT
// document.getElementById() // UN SEUL
// document.getElementsByClassName() // PLUSIEURS POSSIBLE
// document.getElementsByTagName() // PLUSIEURS POSSIBLE
var mesImages = $('#slider-disparait img');
console.log(mesImages);

// 2 - SELECTIONNER LE BODY POUR AJOUTER UN EVENEMENT DESSUS
// 3 - AJOUTER UN ECOUTEUR DEVENEMENT SUR LE CLIC
// var indexImage = 0;
// $('body').on('click', function () {
//     console.log('Clic')
//
//     // 4 - DEPLACER L'IMAGE AVEC LEFT: XXpx
//     // $(mesImages[0]).css('left', '-450px')
//     //$(mesImages[0]).fadeOut();
//     //$(mesImages[0]).css('left', '-450px')
//
//     // setTimeout(function() { }, 1000); -- LANCE LA FONCTION AU BOUT DE 1 SECONDE
//     // var timer = setInterval(function() { }, 1000); -- LANCE LA FONCTION TOUTE LES 1 SECONDE
//     // clearInterval(timer) -> STOP L'INTERVAL
//
//     // INTERVAL QUI VA REDUIRE LA POSITION LEFT TOUTE LES 20ms
//     //var left = 0;
//     // var monInterval = setInterval(function() {
//     //     console.log('Tick', left)
//     //     $(mesImages[indexImage]).css('left', left)
//     //
//     //     if(left <= -450) {
//     //         left = -450;
//     //         indexImage++;
//     //         clearInterval(monInterval);
//     //     }
//     //
//     //     left -= 5;
//     // }, 20);
//
//     // // RECUPERER LA VALEUR
//     // monBloc.css('background');
//     // // DEFINIR LA VALEUR
//     // monBloc.css('background', 'green');
//     // // DEFINIR PLUSIEURS VALEURS
//     // monBloc.css('background', 'green').css('color', 'red');
//     // // DEFINIR PLUSIEURS VALEURS
//     // monBloc.css({
//     //     'background': 'green',
//     //     'color': 'red',
//     //     'border': '1px solid red'
//     // });
//
//     // EN UTILISANT LA FONCTION ANIMATE (PLUS SIMPLE)
//     $(mesImages[indexImage]).animate({
//         'left': -450
//     }, 2000, function () {
//         console.log('Animation terminé');
//         indexImage++; // VA CORRESPONDRE À L'IMAGE SUIVANTE
//     })
// })

var mesImagesApparait = $('#slider-apparait img');
console.log(mesImagesApparait);

var indexAncienneImage = 0;
var indexImageApparait = 1;
$('body').on('click', function () {
    console.log('Clic exercice 2')

    // EXERCICE 2
    // 1 - AJOUTER LA CLASSE CSS "active" SUR L'IMAGE CORRESPONDANTE
    $(mesImagesApparait[indexImageApparait]).addClass('active');
    console.log('Affichage image', indexImageApparait);

    // 2 - SUPPRIMER LA CLASSE CSS "active" SUR L'ANCIENNE IMAGE
    //var indexAncienneImage = indexImageApparait - 1; POSE PROBLEME
    $(mesImagesApparait[indexAncienneImage]).removeClass('active');
    console.log('Cache image', indexAncienneImage);

    //indexAncienneImage = indexImageApparait;
    indexAncienneImage = indexImageApparait;
    indexImageApparait++; // VA CORRESPONDRE À LA PROCHAINE IMAGE

    console.log('Nombre d\'images', mesImagesApparait.length)

    // LORSQUE LA PROCHAINE IMAGE N'EST PAS DISPONIBLE
    if (indexImageApparait === mesImagesApparait.length) {
        // REINITIALISER LE COMPTEUR DES IMAGES
        indexImageApparait = 0;
    }
    //var reste = 10 % 3; // DIVISE PAR 3, = 3, ET IL RESTE 1 // RESULTAT 1
})

var mesImagesChevron = $('#slider-chevron img');
console.log(mesImagesChevron);

var indexAncienneImageChevron = 0;
var indexImageApparaitChevron = 1;
$('body').on('click', function () {
    console.log('Clic exercice 2')

    // EXERCICE 2
    // 1 - AJOUTER LA CLASSE CSS "active" SUR L'IMAGE CORRESPONDANTE
    $(mesImagesChevron[indexImageApparaitChevron]).addClass('active');
    console.log('Affichage image', indexImageApparaitChevron);

    // 2 - SUPPRIMER LA CLASSE CSS "active" SUR L'ANCIENNE IMAGE
    //var indexAncienneImage = indexImageApparait - 1; POSE PROBLEME
    $(mesImagesChevron[indexAncienneImageChevron]).removeClass('active');
    console.log('Cache image', indexAncienneImageChevron);

    //indexAncienneImage = indexImageApparait;
    indexAncienneImageChevron = indexImageApparaitChevron;
    indexImageApparaitChevron++; // VA CORRESPONDRE À LA PROCHAINE IMAGE

    console.log('Nombre d\'images', mesImagesApparait.length)

    // LORSQUE LA PROCHAINE IMAGE N'EST PAS DISPONIBLE
    if (indexImageApparaitChevron === mesImagesApparait.length) {
        // REINITIALISER LE COMPTEUR DES IMAGES
        indexImageApparaitChevron = 0;
    }
    //var reste = 10 % 3; // DIVISE PAR 3, = 3, ET IL RESTE 1 // RESULTAT 1
})
