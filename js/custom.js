jQuery(document).ready(function($) {
    "use strict";
    //For Pretty Photo Validation
    $('a[data-rel]').each(function() {
        $(this).attr('rel', $(this).data('rel'));
    });


    //HOME BANNER
    if ($('#cp-home-banner').length) {
        $('#cp-home-banner').bxSlider({
            auto: true,
            infiniteLoop: true,
            hideControlOnEnd: true
        });
    }

    //HOME BANNER
    if ($('#cp-tweet-slider').length) {
        $('#cp-tweet-slider').bxSlider({
            auto: true,
            infiniteLoop: true,
            hideControlOnEnd: true
        });
    }

    //WELCOME SLIDER
    if ($('#cp-welcome-slider').length) {
        $('#cp-welcome-slider').bxSlider({
            auto: true,
            infiniteLoop: true,
            hideControlOnEnd: true
        });
    }


    //PRACTICE SECTION SLIDER
    if ($('#cp-practice').length) {
        $('#cp-practice').owlCarousel({
            loop: true,
            margin: 0,
            responsiveClass: true,
            nav: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 2,
                    nav: false
                },
                1000: {
                    items: 5,
                }
            }
        })
    }

    //RUNNING COUNTER
    if ($('.counter').length) {
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
    }

    //HAPPY CLIENT SLIDER
    if ($('#cp-client').length) {
        $('#cp-client').bxSlider({
            auto: true,
            mode: 'fade',
            infiniteLoop: true,
            hideControlOnEnd: true
        });
    }

    //TWITTER FOOTER SLIDER
    if ($('#cp-footer-twitter').length) {
        $('#cp-footer-twitter').bxSlider({
            auto: true,
            mode: 'fade',
            infiniteLoop: true,
            hideControlOnEnd: true
        });
    }

    //Side Bar Menu Js
    if ($('#cp_side-menu-btn, #cp-close-btn').length) {
        $('#cp_side-menu-btn, #cp-close-btn').on('click', function() {
            var $navigacia = $('body, #cp_side-menu'),
                val = $navigacia.css('right') === '375px' ? '0px' : '375px';
            $navigacia.animate({
                right: val
            }, 375)
        });
    }

    //HEADER SEARCH
    if ($('#searchtoggl').length) {
        var $searchlink = $('#searchtoggl i');
        var $searchbar = $('.cp-search-outer');

        $('#searchtoggl').on('click', function(e) {
            e.preventDefault();

            if ($(this).attr('id') == 'searchtoggl') {
                if (!$searchbar.is(":visible")) {
                    // if invisible we switch the icon to appear collapsable
                    $searchlink.removeClass('fa-search').addClass('fa-search-minus');
                } else {
                    // if visible we switch the icon to appear as a toggle
                    $searchlink.removeClass('fa-search-minus').addClass('fa-search');
                }

                $searchbar.slideToggle(300, function() {
                    // callback after search bar animation
                });
            }
        });

        $('#searchform').submit(function(e) {
            e.preventDefault(); // stop form submission
        });
    }

    //STICKY HEADER
    if ($('.cp-navigation-section').length) {
        // grab the initial top offset of the navigation 
        var stickyNavTop = $('.cp-navigation-section').offset().top;
        // our function that decides weather the navigation bar should have "fixed" css position or not.
        var stickyNav = function() {
            var scrollTop = $(window).scrollTop(); // our current vertical position from the top
            // if we've scrolled more than the navigation, change its position to fixed to stick to top,
            // otherwise change it back to relative

            if (scrollTop > stickyNavTop) {
                $('.cp-navigation-section').addClass('cp_sticky');
            } else {
                $('.cp-navigation-section').removeClass('cp_sticky');
            }
        };
        stickyNav();
        // and run it again every time you scroll
        $(window).scroll(function() {
            stickyNav();
        });
    }

    //Pretty Photo
    if ($('.gallery').length) {
        $(".gallery:first a[rel^='prettyPhoto']").prettyPhoto({
            animation_speed: 'normal',
            theme: 'light_square',
            slideshow: 3000,
            autoplay_slideshow: true
        });
        $(".gallery:gt(0) a[rel^='prettyPhoto']").prettyPhoto({
            animation_speed: 'fast',
            slideshow: 10000,
            hideflash: true
        });
    }


    //ISOTOPE GALLERY CLASSIC	
    if ($(".cp-gallery-metro-1 .isotope").length) {
        var $container = $('.cp-gallery-metro-1 .isotope');
        $container.isotope({
            itemSelector: '.item',
            transitionDuration: '0.6s',
            masonry: {
                columnWidth: $container.width() / 12
            },
            layoutMode: 'masonry'
        });

        $(window).resize(function() {
            $container.isotope({
                masonry: {
                    columnWidth: $container.width() / 12
                }
            });
        });

    }

    //ISOTOPE GALLERY ELITE
    if ($(".cp-gallery-metro-2 .isotope").length) {
        var $container = $('.cp-gallery-metro-2 .isotope');
        $container.isotope({
            itemSelector: '.item',
            transitionDuration: '0.6s',
            masonry: {
                columnWidth: $container.width() / 12
            },
            layoutMode: 'masonry'
        });

        $(window).resize(function() {
            $container.isotope({
                masonry: {
                    columnWidth: $container.width() / 12
                }
            });
        });

    }

    //MASONARY GALLERY

    function attWorkGrid_2() {
        if ($('#gallery-grid-1-masonrywrap').length) {
            var options = {
                itemWidth: 262, // Optional min width of a grid item
                autoResize: true, // This will auto-update the layout when the browser window is resized.
                container: $('#gallery-grid-1-masonrywrap'), // Optional, used for some extra CSS styling
                offset: 30, // Optional, the distance between grid items
                flexibleWidth: 262 // Optional, the maximum width of a grid item
            };
            var handler = $('#gallery-grid-1-masonrywrap li');
            handler.wookmark(options);
        }
    }
    $(window).load(function() {
        attWorkGrid_2();
    });
    $('#gallery-grid-1-masonrywrap li div div img').load(function() { // (yasir bhai) Only Change this line if you need to
        attWorkGrid_2();
    });


    //TESTIMONIALS STYLE 1
    if ($('#testimonial-style-1').length) {
        $('#testimonial-style-1').owlCarousel({
            loop: true,
            margin: 30,
            responsiveClass: true,
            nav: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 2,
                    nav: false
                },
                1000: {
                    items: 2,
                }
            }
        })
    }

    //TESTIMONIALS STYLE 2
    if ($('#testimonial-style-2').length) {
        $('#testimonial-style-2').owlCarousel({
            loop: true,
            margin: 30,
            responsiveClass: true,
            nav: false,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 2,
                    nav: false
                },
                1000: {
                    items: 2,
                }
            }
        })
    }

    //TESTIMONIALS STYLE 3
    if ($('#testimonial-style-3').length) {
        $('#testimonial-style-3').owlCarousel({
            loop: true,
            margin: 30,
            responsiveClass: true,
            nav: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 2,
                    nav: false
                },
                1000: {
                    items: 3,
                }
            }
        })
    }

    //BLOG SLIDER 
    if ($('#blog-slider').length) {
        $("#blog-slider").owlCarousel({

            autoPlay: 3000, //Set AutoPlay to 3 seconds
            nav: true,
            items: 1,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [979, 3]

        });
    }

    //ATTORNEYS SLIDER 
    if ($('#cp-attorneys-slider').length) {
        $("#cp-attorneys-slider").owlCarousel({

            autoPlay: 3000, //Set AutoPlay to 3 seconds
            nav: true,
            items: 1,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [979, 3]

        });
    }

    //CLIENT SLIDER 
    if ($('#cp-client-slider').length) {
        $("#cp-client-slider").owlCarousel({

            autoPlay: true, //Set AutoPlay to 3 seconds
            items: 1,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [979, 3]

        });
    }

    //Countdown Upcoming Events
    if ($('.countdown236').length) {
        var austDay = new Date();
        austDay = new Date(2015, 11 - 1, 11, 15, 35, 0);
        $('.countdown236').countdown({
            until: austDay,
        });
        $('#year').text(austDay.getFullYear());
    }


    //Accordion 
    $.fn.slideFadeToggle = function(speed, easing, callback) {
        return this.animate({
            opacity: 'toggle',
            height: 'toggle'
        }, speed, easing, callback);
    };

    if ($('.accordion_cp').length) {
        $('.accordion_cp').accordion({
            defaultOpen: 'section1',
            cookieName: 'nav',
            speed: 'slow',
            animateOpen: function(elem, opts) { //replace the standard slideUp with custom function
                elem.next().stop(true, true).slideFadeToggle(opts.speed);
            },
            animateClose: function(elem, opts) { //replace the standard slideDown with custom function
                elem.next().stop(true, true).slideFadeToggle(opts.speed);
            }
        });
    }

    //CONTACT MAP
    if ($('#map_contact_2').length) {
        var map;
        var myLatLng = new google.maps.LatLng(5.5699652,-0.2082286);
        //Initialize MAP
        var myOptions = {
            zoom: 12,
            center: myLatLng,
            //disableDefaultUI: true,
            zoomControl: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false,
            styles: [{
                saturation: -100,
                lightness: 10

            }],
        }
        map = new google.maps.Map(document.getElementById('map_contact_2'), myOptions);
        //End Initialize MAP
        //Set Marker
        var marker = new google.maps.Marker({
            position: map.getCenter(),
            map: map,
            icon: 'images/map-icon.png'
        });
        marker.getPosition();
        //End marker

        //Set info window
        //var infowindow = new google.maps.InfoWindow({
        //  content: '',
        //position: myLatLng
        //});
        //infowindow.open(map);
    }

    //SCROLL FOR SIDEBAR NAVIGATION
    if ($('#content-1').length) {
        $("#content-1").mCustomScrollbar({
            horizontalScroll: false
        });
        $(".content.inner").mCustomScrollbar({
            scrollButtons: {
                enable: true
            }
        });
    }



    //EVENT DETAIL MAP
    if ($('#map_contact_1').length) {
        var map;
        var myLatLng = new google.maps.LatLng(5.5699652,-0.2082286);
        //Initialize MAP
        var myOptions = {
            zoom: 12,
            center: myLatLng,
            //disableDefaultUI: true,
            zoomControl: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false,
            styles: [{
                saturation: -100,
                lightness: 10

            }],
        }
        map = new google.maps.Map(document.getElementById('map_contact_1'), myOptions);
        //End Initialize MAP
        //Set Marker
        var marker = new google.maps.Marker({
            position: map.getCenter(),
            map: map,
            icon: 'images/map-icon.png'
        });
        marker.getPosition();
        //End marker

        //Set info window
        //var infowindow = new google.maps.InfoWindow({
        //  content: '',
        //position: myLatLng
        //});
        //infowindow.open(map);
    }

    //Function End
});