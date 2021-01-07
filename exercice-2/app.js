// 1 - SELECTIONNER LE BOUTON
//var bouton =  document.getElementsByTagName('button'); // SELECTION EN JAVASCRIPT PAR TAG
var bouton = $('button'); // SELECTION EN JQUERY PAR TAG
var contenu = $('#contenu');

// 2 - AJOUTER UN ECOUTEUR EVENEMENT

// EVENEMENT SUR LES ELEMENTS DEJA PRÉSENT SUR LA PAGE
$('button').click(function(event) {
    console.log("Test"); // 3 - SI CLIC ALORS ON AFFICHE UNE ALERTE

    // 3 - AJOUTER UN CONTENU A LA FIN DE L'ELEMENT

    // APPEND - AJOUTER UN CONTENU (TEXTE OU ELEMENT) A LA FIN DE L'ELEMENT
    // PREPEND - AJOUTER UN CONTENU (TEXTE OU ELEMENT) AU DEBUT DE L'ELEMENT
    contenu.append('<button>Bouton sans evenement</button>');
    //contenu.prepend('<button>Bouton supp.</button>');

    // DANS NOTRE CAS NOUS POUVONS AUSSI UTILISER INNER HTML
    //contenu.innerHTML = contenu.innerHTML + '<button>Bouton supp.</button>';
})

// EVENEMENT SUR LES ELEMENTS DÉJA PRÉSENT ET/OU AJOUTER PAR LA SUITE
$('body').on('click', 'button', function(event) {
    console.log("Test"); // 3 - SI CLIC ALORS ON AFFICHE UNE ALERTE
    contenu.append('<button>Bouton avec evenement</button>');
    //contenu.prepend('<button>Bouton supp.</button>');
})
