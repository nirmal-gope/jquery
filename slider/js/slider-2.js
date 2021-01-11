// LORS D'UN CLIC JE VEUX QUE L'IMAGE SUIVANTE APPARAISSE

// 1 - SELECTIONNER LES IMAGES (1, 2, 3)
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
