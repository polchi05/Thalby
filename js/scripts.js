$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        autoplay: true,
        autoplayTimeout: 1000,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },

            1000:{
                items:3
            }
        }
    });
});

$(".nav-mobile-button").click(function() {
    $('.nav-mobile-bar').toggleClass('active');
    $('.nav-mobile-menu').toggleClass('active');

});

