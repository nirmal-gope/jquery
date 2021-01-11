$(document).ready(function() {

    $('#btn-load').on('click', function() {
        console.log('Clic');

        // $.ajax('file:///Users/dylanschreier/projects/Formation-jQuery/ajax/exercice.html').done(function() {
        //     console.log('Appel terminé !');
        // })

        $("#main").load('https://www.w3schools.com/jquery/demo_test.txt');

    })

})
