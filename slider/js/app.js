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
var indexImage = 0;
$('body').on('click', function () {
    console.log('Clic')

    // 4 - DEPLACER L'IMAGE AVEC LEFT: XXpx
    // $(mesImages[0]).css('left', '-450px')
    //$(mesImages[0]).fadeOut();
    //$(mesImages[0]).css('left', '-450px')

    // setTimeout(function() { }, 1000); -- LANCE LA FONCTION AU BOUT DE 1 SECONDE
    // var timer = setInterval(function() { }, 1000); -- LANCE LA FONCTION TOUTE LES 1 SECONDE
    // clearInterval(timer) -> STOP L'INTERVAL
    var left = 0;
    var monInterval = setInterval(function() {
        console.log('Tick', left)
        $(mesImages[indexImage]).css('left', left)

        if(left <= -450) {
            left = -450;
            indexImage++;
            clearInterval(monInterval);
        }

        left -= 5;
    }, 20);

})
