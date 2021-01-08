var ileDeFrance = [
    'Paris',
    'Seine-et-Marne',
    'Yvelines',
    'Essonne',
    'Hauts-de-Seine',
    'Val-de-Marne',
];

var paca = [
    'Var',
    'Bouches du Rhone',
    'Alpes Maritimes',
    'Vaucluse'
];

var correspondanceRegionDepartement = {
    // SOUS TABLEAU DIRECTEMENT
    'ile-de-france': [
        'Paris',
        'Seine-et-Marne',
        'Yvelines',
        'Essonne',
        'Hauts-de-Seine',
        'Val-de-Marne',
        'Test IDF'
    ],
    // SOUS TABLEAU EN FAISANT REFERENCE A LA VARIABLE PACA
    'paca': paca,
    'normandie': [
        'Calvados',
        'Eure',
        'Manche',
        'Ome',
        'Seine-maritime'
    ]
}

// RETOURNE LE CONTENU DE L'INDEX 1 (EN INFORMATIQUE LES TABLEAUX COMMENCENT A 0)
// paca[1] => Bouches du Rhone

// RETOURNE LE NOMBRE D'ELEMENTS PRESENTS DANS LE TABLEAU
// paca.length = 4

// LORSQUE JE SELECTIONNE ILE DE FRANCE DANS MON SELECTEUR AVEC L'ID "region",
// JE DOIS AJOUTER LES OPTIONS DANS LE SELECTEUR AVEC L'ID "departement"

// 1 - SELECTIONNER LE "SELECT" AVEC L'ID "region"
var selectRegion = $('#region');

// 2 - SELECTIONNER LE "SELECT" AVEC L'ID "departement"
var selectDepartement = $('#departement');

// 3 - AJOUTER UN ECOUTEUR DEVENEMENT "change" SUR LE SELECT
// selectRegion.val() // RÉCUPERER LA VALEUR EN JQUERY
// selectRegionEnJavascript.value // RÉCUPÉRER LA VALEUR EN JAVASCRIPT

selectRegion.on('change', function() {
    console.log('Attention ça a changé');
    console.log(selectRegion.val());

    var valeurRegion = selectRegion.val();
    var monResultat = '';
    if(valeurRegion == 'ile-de-france') {
        console.log('L\'utilisateur à séléctionné Ile de France');

        // EN UTILISANT APPEND()
        // selectDepartement.append('<option>' + ileDeFrance[0] + '</option>');
        // selectDepartement.append('<option>' + ileDeFrance[1] + '</option>');
        // selectDepartement.append('<option>' + ileDeFrance[2] + '</option>');
        // selectDepartement.append('<option>' + ileDeFrance[3] + '</option>');
        // selectDepartement.append('<option>' + ileDeFrance[4] + '</option>');
        // selectDepartement.append('<option>' + ileDeFrance[5] + '</option>');

        // EN UTILISANT PREPEND()
        // selectDepartement.prepend('<option>' + ileDeFrance[5] + '</option>');
        // selectDepartement.prepend('<option>' + ileDeFrance[4] + '</option>');
        // selectDepartement.prepend('<option>' + ileDeFrance[3] + '</option>');
        // selectDepartement.prepend('<option>' + ileDeFrance[2] + '</option>');
        // selectDepartement.prepend('<option>' + ileDeFrance[1] + '</option>');
        // selectDepartement.prepend('<option>' + ileDeFrance[0] + '</option>');

        // EN UTILISANT HTML()
        // selectDepartement.html(
        //     '<option>' + ileDeFrance[0] + '</option>' +
        //     '<option>' + ileDeFrance[1] + '</option>' +
        //     '<option>' + ileDeFrance[2] + '</option>' +
        //     '<option>' + ileDeFrance[3] + '</option>' +
        //     '<option>' + ileDeFrance[4] + '</option>' +
        //     '<option>' + ileDeFrance[5] + '</option>'
        // );

        console.log(monResultat);

        for(var indexRegion = 0; indexRegion < ileDeFrance.length; indexRegion++) {
            console.log(indexRegion, ileDeFrance[indexRegion]);
            // APPEND
            //selectDepartement.append('<option>' + ileDeFrance[indexRegion] + '</option>');

            // AVEC PREPEND
            //selectDepartement.prepend('<option>' + ileDeFrance[(ileDeFrance.length - 1) - indexRegion] + '</option>');
            console.log('monResultat début boucle', monResultat);

            // CONCATENATION
            // monResultat = monResultat + '<option>' + ileDeFrance[indexRegion] + '</option>';
            // monResultat += '<option>' + ileDeFrance[indexRegion] + '</option>';

            monResultat += '<option>' + ileDeFrance[indexRegion] + '</option>';
            console.log('monResultat fin boucle', monResultat);

            selectDepartement.html(monResultat); // JQUERY
            // selectDepartement.innerHTML // JAVASCRIPT
        }

        // var monResultat = '';
        // for(var indexRegion = 0; indexRegion < ileDeFrance.length; indexRegion++) {
        //     console.log(ileDeFrance[indexRegion]);
        //     //selectDepartement.html('<option>' + ileDeFrance[indexRegion] + '</option>')
        //     monResultat += '<option>' + ileDeFrance[indexRegion] + '</option>';
        // }
        // console.log(monResultat);
    }
    else if(valeurRegion == 'paca') {
        for(var indexDpt = 0; indexDpt < paca.length; indexDpt++) {
            console.log(indexDpt, paca[indexDpt]);
            monResultat += '<option>' + paca[indexDpt] + '</option>';
        }
    }

    // monTableau[1] -> AFFICHE L'ELEMENT A LA POSITION 1 DE "monTableau"
    // monTableau[1][2]-> AFFICHE L'ELEMENT A LA POSITION 1 DE "monTableau" ET LA POSITION 2 DU TABLEAU CONTENU

    // monObjet.roue -> AFFICHE LA PROPRIÉTÉ ROUE DE L'OBJET "monObjet"
    // monObjet['roue'] -> AFFICHE LA PROPRIÉTÉ ROUE DE L'OBJET "monObjet"


    // AUTRE POSSIBILITE
    // switch(valeurRegion) {
    //     case 'ile-de-france':
    //         console.log('ile de france');
    //         break; // PERMET DE SORTIR DU SWITCH
    //     case 'paca':
    //         console.log('paca');
    //         break; // PERMET DE SORTIR DU SWITCH
    //     default:
    //         console.log('Cas par défaut'); // DANS NOTRE CAS -> NORMANDIE
    // }

    selectDepartement.html(monResultat)
    console.log(monResultat);

    // var test = document.getElementById('region')
    // $(test).css('border', '1px solid red')
})

/// DEUXIEME PARTIE - DYNAMISATION

var selectRegion2 = $('#region2');
var selectDepartement2 = $('#departement2');
selectRegion2.on('change', function() {
    console.log(selectRegion2.val());
    var valeurRegion = selectRegion2.val();

    var departementLies = correspondanceRegionDepartement[valeurRegion];
    console.log(departementLies);

    var monResultat = '';
    if(correspondanceRegionDepartement.hasOwnProperty(valeurRegion)){
        for(var indexDpt = 0; indexDpt < departementLies.length; indexDpt++) {
            console.log(indexDpt);
            console.log(departementLies[indexDpt]);
            console.log(correspondanceRegionDepartement[valeurRegion][indexDpt]);

            monResultat += '<option>' + departementLies[indexDpt] + '</option>';
        }
    }

    console.log(monResultat);
    selectDepartement2.html(monResultat);
});

// 4 - REMPLACER LES OPTIONS PAR DE NOUVELLE, GRACE AU TABLEAU DEFINIT PRECEDEMMENT
// bloc.innerHTML -> Javascript
// bloc.html("contenu") -> jQuery

// LES SELECT N'AFFICHENT QUE LES OPTIONS ET PAS LE CONTENU HTML CLASSIQUE
// $('#departement').html('<option value="coucou">coucou</option>');

// var test = 0;
// test = test + 1;
// test++;
//
// test = test - 1;
// test--;
//
// test = 'blabla';
// test = test + 'coucou'; // AJOUTE "COUCOU" À LA VARIABLE TEST
// test += 'coucou'; // AJOUTE "COUCOU" À LA VARIABLE TEST
//
// test = test + 10; // ADDITIONNE 10 A LA VARIABLE TEST
// test += 10; // ADDITIONNE 10 A LA VARIABLE TEST
//
// test = test - 10; // SOUSTRAIT 10 A LA VARIABLE TEST
// test -= 10; // SOUSTRAIT 10 A LA VARIABLE TEST
//
// test = 10 + 10; // 20
// test = 'blabla' + 10 // blabla10
//
// test = 'blabla';
// test += 10; // blabla10

// var maVoiture = { roue: 4, moteur: 'V8'};
// console.log(maVoiture.roue) // AFFICHE 4
// console.log(maVoiture.moteur) // AFFICHE 'V8'
