$(document).ready(function() {

    var progressBar = $('#progress-bar');
    var progress = $('#progress');

    // 1 - SELECTIONNER BOUTON
    var largeurBarreProgression = 1;
    $('#mon-bouton').on('click', function() {
        console.log('clic');

        // METHODE 1 - COMPLIQUÉ
        var timer = setInterval(function() {
            console.log('Tick');
            largeurBarreProgression += 5;

            // progressBar.style.width // JAVASCRIPT
            // progressBar.width() // JQUERY

            console.log(largeurBarreProgression, progressBar.width())
            if(largeurBarreProgression >= 100) {
                console.log('Chargement terminé')
                largeurBarreProgression = 100;
                clearInterval(timer);
            }

            if(largeurBarreProgression >= 50){
                progress.css('background-color', 'green');
            }

            console.log('Nouvelle largeur', largeurBarreProgression);
            progress.css('width', largeurBarreProgression + '%');
        }, 20)

        // METHODE 2 - SIMPLE
        // progress.animate({
        //     'width': '100%'
        // }, 1000)
    })

})
