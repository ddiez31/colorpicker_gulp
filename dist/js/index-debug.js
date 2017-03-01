$(document).ready(function() {
    var color1R, color1G, color1B, color2R, color2G, color2B, angle;
    var bgColor1, bgColor2;

    var valdef = $('.range').val();
    $('.range').next().text(valdef); // Valeur par défaut
    $('.range').on('input', function() {
        var $set = $(this).val();
        $(this).next().text($set);
    });

    var valdefAngle = $('#angle').val();
    $('#angle').next().text(valdefAngle); // Valeur par défaut
    $('#angle').on('input', function() {
        var $set = $(this).val();
        $(this).next().text($set);
    });

    $('body').on('mousemove', function() {
        angle = $('#angle').val();
        color1R = $('#r1').val();
        color2R = $('#r2').val();
        color1G = $('#g1').val();
        color2G = $('#g2').val();
        color1B = $('#b1').val();
        color2B = $('#b2').val();
        bgColor1 = color1R + ',' + color1G + ',' + color1B;
        bgColor2 = color2R + ',' + color2G + ',' + color2B;
        $('#color1').css('background-color', 'rgb(' + bgColor1 + ')');
        $('#color2').css('background-color', 'rgb(' + bgColor2 + ')');
        $('body').css('background', 'linear-gradient(' + angle + 'deg, rgb(' + bgColor1 + '), rgb(' + bgColor2 + ')');
    });
});