// JavaScript Document

$(document).ready(function() {

    $("body").waypoint(function() {
        $(".main-nav").toggleClass("navbar-sticky-function");
        $(".main-nav").toggleClass("active");
        return false;
    }, { offset: "-20px" });


    if(window.matchMedia("(max-width: 768px)").matches){
        // The viewport is less than 768 pixels wide
        $(".main-nav").addClass("mobile-nav-bg");
    }

    
    /* Page Active Color */
    // Get current path and find target link
    var path = window.location.pathname.split("/").pop();
        // Account for home page with empty path
        if ( path == '' ) {
                path = 'index.php';
        }
        
        var target = $('.main-nav a[href="'+path+'"]');
        // Add active class to target link
        target.addClass('active');
    /* Page Active Color */


    // Banner Slider
    $('#banner-carousel').owlCarousel({
        loop: true,
        animateOut: 'fadeOut',
        items: 1,
        margin: 0,
        dots: false,
        nav: false,
        active: true,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 7000,
        autoplayHoverPause: false,
        mouseDrag: false,
        touchDrag: false,
    });

    // Packages Slider
    $('#packages-carousel').owlCarousel({
        loop: true,
        animateOut: 'fadeOut',
        items: 1,
        margin: 0,
        dots: false,
        nav: true,
        active: true,
        smartSpeed: 1000,
        autoplay: false,
        autoplayTimeout: 7000,
        autoplayHoverPause: false,
        mouseDrag: false,
        touchDrag: false,
    });

    // Day Tours Slider
    $('#day-tours-carousel').owlCarousel({
        loop: true,
        margin: 20,
        dots: false,
        nav: true,
        active: true,
        smartSpeed: 1000,
        autoplay: false,
        autoplayTimeout: 7000,
        autoplayHoverPause: false,
        responsive:{
            0:{
                items:1.3,
                nav: false,
            },
            600:{
                items:3.3,
                nav: false,
            },
            768:{
                items:3.3,
                nav: false,
            },
            992:{
                items:3.2,
                nav: false,
            },
            1000:{
                items:3
            }
        }
    });

    // Destinations Slider
    $('#destinations-carousel').owlCarousel({
        loop: true,
        items:2,
        margin: 15,
        dots: false,
        nav: true,
        active: true,
        smartSpeed: 1000,
        autoplay: false,
        autoplayTimeout: 7000,
        autoplayHoverPause: false,
        responsive:{
            0:{
                items:1.3,
                nav: false,
            },
            600:{
                items:2.2,
                nav: false,
            },
            768:{
                items:2.2,
                nav: false,
            },
            991:{
                items:2.2,
                nav: false,
            },
            1000:{
                items:2,
            },
        }
    });

});