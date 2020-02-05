$(document).ready(function () {

    /* Change button color on carousel slide transitions */

    $('#welcome_carousel').on('slide.bs.carousel', function (e) {
        if (e.relatedTarget.id == 'carousel2') {
            $("#btn_get_started").css('background-color', '#9966ff');
        } else if (e.relatedTarget.id == 'carousel3') {
            $("#btn_get_started").css('background-color', '#3399ff');
        } else if (e.relatedTarget.id == 'carousel4') {
            $("#btn_get_started").css('background-color', '#ff9999');
        } else {
            $("#btn_get_started").css('background-color', '#99cc66');
        }
    });

    /* Toast Notifications, populating by setTimeout functions */
    $('#toast1').toast('show').delay(1000);

    setTimeout(function () {
        $('#toast2').toast('show').delay(1000);
    }, 5000);

    setTimeout(function () {
        $('#toast3').toast('show').delay(1000);
    }, 10000);

    setTimeout(function () {
        $('#toast4').toast('show').delay(1000);
    }, 15000);
});