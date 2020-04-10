// sidebar menu init
$(function() {

    $('#side-menu').metisMenu({
        triggerElement: '.side-menu-dropdown'
    });

});

// Datepicker
$(document).ready(function(){
    $('.datepicker').datepicker({
        format: 'dd:mm:yyyy',
        language: 'ru'
    });
});


// Toggle slide nav
$(document).ready(function(){
    new Mmenu( "#sidebarMenu", {
        "extensions": [
            "theme-dark"
        ]
    } );
});

//Init tooltips
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip()
});

//Forms validation
$(document).ready(function(){
    var forms = $('.from-validation');
// Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
});

