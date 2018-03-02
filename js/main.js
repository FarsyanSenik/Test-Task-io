$(document).ready(function() {
    $('.content-title').mouseover(function () {
        $('h4').addClass('animated flash');
    });
    $('.content-title').mouseout(function () {
        $('h4').removeClass('animated flash');
    });
    $('.header-social').mouseover(function () {
        $('.header-social li').addClass('animated flip');
    });
    $('.header-social').mouseout(function () {
        $('.header-social li').removeClass('animated flip');
    });
    $('.header-menu').mouseover(function () {
        $('.header-menu li').addClass('animated bounceInRight');
    });
    $('.header-menu').mouseout(function () {
        $('.header-menu li').removeClass('animated bounceInRight');
    });
    $('.header-request').mouseover(function () {
        $('.header-request a').addClass('animated bounceInRight');
    });
    $('.header-request').mouseout(function () {
        $('.header-request a').removeClass('animated bounceInRight');
    });
});