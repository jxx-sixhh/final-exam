$(function() {
    $(".go").click(function() {
        $("body, html").stop().animate({
            scrollTop: 0
        });
    })
    $(".phone").hover(function() {
        $('.appcode').stop().slideToggle();
    })
    $(".phone").mouseover(function() {
        $('.three').show();
    })
    $(".phone").mouseout(function() {
        $('.three').hide();
    })
    $(".shopcar").hover(function() {
            $('.txt').stop().slideToggle();
        })
        // $(document).scrollTop(64);
    $(window).scroll(function() {
        if ($(document).scrollTop() >= 63) {
            $('.second-header').addClass('navbar-fixed-top');
        } else {
            $('.second-header').removeClass('navbar-fixed-top');
        }
        if ($(document).scrollTop() >= 481) {
            $('.go').fadeIn();
        } else {
            $('.go').fadeOut();
        }
    })
});