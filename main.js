// $("selector").method();
$(document).ready(function() {
    $(".trigger").click(function() {
        $(".overlay").fadeToggle();
    });
});