// 1 - SELECTIONNE TOUS LES BOUTONS
var buttons = document.getElementsByTagName('button');

// 1 - SELECTIONNE LE BLOC
var div = document.getElementById('contenu');

// 2 - AJOUTER LES ECOUTEUR D'EVENEMENTS

// AFFICHER
$('#btn-show-fade').on('click', function() {
    console.log('Afficher');

    // 3.A - AFFICHER LE BLOC EN JAVASCRIPT
    //div.style.display = 'block';
    //div.style.visibility = 'visible';
    //div.style.opacity = 1;

    // 3.B - AFFICHER LE BLOC EN JQUERY
    //$(div).show(); // AFFICHE LE BLOC EN JQUERY
    //$('#contenu').show() // SELECTIONNER DIRECTEMENT EN "OBJET" JQUERY

    // 3.C - AFFICHER PROGRESSIVEMENT LE BLOC EN JAVASCRIPT EN UTILISANT "div.style.opacity"
    // var opacity = 0;
    // var timer = setInterval(function() {
    //     opacity += 0.1;
    //     if(opacity >= 1) {
    //         opacity = 1;
    //         clearInterval(timer);
    //     }
    //
    //     console.log(opacity);
    //     div.style.opacity = opacity; // AFFICHE PROGRESSIVEMENT LE BLOC
    // }, 100);

    // 3.D - CACHER PROGRESSIVEMENT LE BLOC EN JQUERY
    $(div).fadeIn();
});

$('#btn-show-slide').on('click', function() {
    console.log('Afficher');

    // 3.E - AFFICHER PROGRESSIVEMENT LE BLOC DU HAUT VERS LE BAS (ACCORDEON) EN JQUERY
    // var height = 0;
    // var timer = setInterval(function() {
    //     height += 5;
    //     if(height >= 200) {
    //         height = 200;
    //         clearInterval(timer);
    //     }
    //
    //     console.log(height);
    //     div.style.height = height + 'px'; // AFFICHE PROGRESSIVEMENT LE BLOC
    // }, 50)

    // 3.D - CACHER PROGRESSIVEMENT LE BLOC EN JQUERY
    $(div).slideDown();
});

// CACHER
$("#btn-hide-fade").on('click', function() {
    console.log('Cacher');

    // 3.A - CACHER LE BLOC EN JAVASCRIPT
    //div.style.display = 'none'; // RETIRE LE BLOC DU "FIL"
    //div.style.visibility = 'hidden'; // CACHE LE BLOC
    //div.style.opacity = 0; // CACHE LE BLOC

    // 3.B - CACHER LE BLOC EN JQUERY
    // $(div).hide();// CACHE LE BLOC EN JQUERY
    // $('#contenu').hide() // SELECTIONNER DIRECTEMENT EN "OBJET" JQUERY

    // 3.C - CACHER PROGRESSIVEMENT LE BLOC EN JAVASCRIPT EN UTILISANT "div.style.opacity"
    // var opacity = 1;
    // var timer = setInterval(function() {
    //     opacity -= 0.1;
    //     if(opacity <= 0) {
    //         opacity = 0;
    //         clearInterval(timer);
    //     }
    //
    //     console.log(opacity);
    //     div.style.opacity = opacity; // CACHE PROGRESSIVEMENT LE BLOC
    // }, 100)

    $(div).fadeOut();
});

$("#btn-hide-slide").on('click', function() {
    console.log('Cacher');

    // 3.E - CACHER PROGRESSIVEMENT LE BLOC DU BAS VERS LE HAUT (ACCORDEON) EN JQUERY
    // var height = 200;
    // var timer = setInterval(function() {
    //     height -= 5;
    //     if(height <= 0) {
    //         height = 0;
    //         clearInterval(timer);
    //     }
    //
    //     console.log(height);
    //     div.style.height = height + 'px'; // CACHE PROGRESSIVEMENT LE BLOC
    // }, 50)

    // 3.D - CACHER PROGRESSIVEMENT LE BLOC EN JQUERY
    $(div).slideUp();
});

// CONVERTIR LE BOUTON EN OBJECT JQUERY ET AJOUTER UN ECOUTEUR EVENEMENT
// $(buttons[1]).on('click', function() {
//     $(div).hide();// CACHE LE BLOC EN JQUERY
// })

// EVENEMENT SUR LE BOUTON AFFICHER/CACHER
$('#btn-toggle').on('click', function() {
    // JQUERY
    $(div).toggle();
})

// EVENEMENT SUR LE BOUTON COULEUR
$('#btn-color').on('click', function() {
    //div.style.backgroundColor = 'green';

    //var currentBackground = $(div).css('background-color'); // RECUPERE LA VALEUR DE "BACKGROUND-COLOR"
    //$(div).css('background-color', 'green'); // DEFINIT "BACKGROUND-COLOR" A "GREEN"

    // JAVASCRIPT
    div.classList.add('green');
    div.classList.remove('red');

    // JQUERY
    $(div).addClass('green').removeClass('red');
})


