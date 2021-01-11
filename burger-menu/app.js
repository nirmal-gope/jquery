$(document).ready(function() {

    var menu = $('.navbar-items');

    $('i').on('click', function() {
        console.log('Clic');
        // EN UTILISANT LA CLASSE (premiere solution)
        menu.toggleClass('collapse');

        // EN UTILISANT LES EFFETS JQUERY (deuxieme solution)
        //menu.slideToggle();
    })

})
