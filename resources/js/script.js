(function ($) {
    "use strict";

    var qatar_national_day = {
        
        /* ============================================================ */
        /* PRELOADER
        /* ============================================================ */
        preloader: function(){
            $(window).on('load', function() {
                $(".preloader").fadeOut();     
            });
        },

        /* ============================================================ */
        /* Custom jQuery
        /* ============================================================ */
        custom_jQuery: function(){
            // Paralax effect on background
            // const parallax = document.getElementById('intro_bg-parallax');
            // window.addEventListener('scroll', function() {
            //     let offset = window.pageYOffset;
            //     parallax.style.backgroundPositionY = offset * 0.1 + 'px';
            // })
        },

        /* ============================================================ */
        /* Scroll To Top
        /* ============================================================ */
        scroll_to_top: function() {
            $('body').append(
                "<a href='#top' id='scroll-top' class='topbutton btn-hide'><i class='fas fa-level-up-alt'></i></a>"
            );
            var $scrolltop = $('#scroll-top');
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > $(this).height()) {
                    $scrolltop.addClass('btn-show').removeClass('btn-hide');
                } else {
                    $scrolltop.addClass('btn-hide').removeClass('btn-show');
                }
            });
            $("a[href='#top']").on('click', function () {
                $('html, body').animate(
                    {
                        scrollTop: 0,
                    },
                    'normal'
                );
                return false;
            });
        },


        /* ============================================================ */
        /* Mobile Menu Intigration
        /* ============================================================ */
        mobile_menu: function() {
            //Clone Mobile Menu
            function cloneMobileMenu($cloneItem, $mobileLoc) {
                var $combinedmenu = $($cloneItem).clone();
                $combinedmenu.appendTo($mobileLoc);
            }
            cloneMobileMenu("header .navbar-menu", ".mobile-menu .nav-bar");

            function mobile_menu(selector, actionSelector) {
                var mobile_menu = $(selector);
                mobile_menu.on("click", function() {
                    $(selector).toggleClass('menu-open');
                });
                
                var hamburgerbtn = $(selector);
                hamburgerbtn.on("click", function() {
                    $(actionSelector).toggleClass('menu-open');
                });
        
                $(document).on('click', function(e) {
                    var selectorType = $(actionSelector).add(mobile_menu);
                    if (selectorType.is(e.target) !== true && selectorType.has(e.target).length === 0) {
                        $(actionSelector).removeClass("menu-open");
                        $(selector).removeClass("menu-open");
                    }          
                });
        
                // $('.mobile-menu ul li a').on('click', function(){
                //     $('.mobile-menu, .hamburger').removeClass('menu-open');
                // });
        
            };
            mobile_menu('.hamburger a, .mobile-menu .close', '.mobile-menu');

            $('.mobile-menu .nav-bar li.menu-item-has-children a').on('click', function() {
                $('.mobile-menu .nav-bar li.menu-item-has-children .sub-menu').each(function() { 
                    if($(this).is(":visible")) { 
                        $(this).slideUp(); 
                    }
                }); 
                if($(this).parent('li').children('.sub-menu').length) {
                    if(!$(this).parent('li').children('.sub-menu').is(":visible")) { 
                        $(this).parent('li').children('.sub-menu').slideToggle();
                    }
                    return false; 
                }
            });
        },


        /* ============================================================ */
        /* Sticky Header
        /* ============================================================ */
        sticky_header: function() {
            var fixed_top = $("header");
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > 100) {
                    fixed_top.addClass("is-sticky");
                } else {
                    fixed_top.removeClass("is-sticky");
                }
            });
        },

        /* ============================================================ */
        /* News Slider
        /* ============================================================ */
        newsSlider: function() {    
            var newsSlider = $('.news-slider .owl-carousel');
            newsSlider.owlCarousel({
                rtl: true,
                loop: 1,
                dots: !1,
                autoplay: 1,
                autoplaySpeed: 800,
                autoplayTimeout: 10000,
                responsive : {
                    // breakpoint from 0 up
                    0 : {
                        items: 1,
                        margin: 15,
                        nav: !1,
                    },
                    // breakpoint from 768 up
                    768 : {
                        items: 3,
                        margin: 15,
                        nav: 1,
                    },
                    992: {
                        items: 4,
                        margin: 30,
                        nav: 1,
                    }
                }
            });
        },
        /* ============================================================ */
        /* Events Slider
        /* ============================================================ */
        eventsSlider: function() {    
            var eventsSlider = $('.events-slider .owl-carousel');
            eventsSlider.owlCarousel({
                rtl: true,
                loop: 1,
                dots: !1,
                autoplay: 1,
                autoplaySpeed: 800,
                autoplayTimeout: 10000,
                responsive : {
                    // breakpoint from 480 up
                    0 : {
                        items: 1,
                        margin: 15,
                        nav: !1,
                    },
                    // breakpoint from 480 up
                    480 : {
                        items: 2,
                        margin: 15,
                        nav: !1,
                    },
                    // breakpoint from 768 up
                    768 : {
                        items: 3,
                        margin: 15,
                        nav: 1,
                    },
                    992: {
                        items: 4,
                        margin: 30,
                        nav: 1,
                    }
                }
            });
        },


        /* ============================================================ */
        /* News Details Image Slider
        /* ============================================================ */
        newsdtlsgallery: function() {    
            var newsdtlsgallery = $('.news-gallery-slider .owl-carousel');
            newsdtlsgallery.owlCarousel({
                rtl: true,
                items: 1,
                loop: 1,
                dots: !1,
                nav: 1,
                autoplay: 1,
                autoplaySpeed: 800,
                autoplayTimeout: 10000,
            });
        },

        /* ============================================================ */
        /* Background Image
        /* ============================================================ */
        background_image: function() {
            $("[data-bg-color], [data-bg-image], [data-bg-particles]").each(function() {
                var $this = $(this);
    
                if( $this.hasClass("pt-separate-bg-element") ){
                    $this.append('<div class="pt-background">');
    
                    // Background Color    
                    if( $("[data-bg-color]") ){
                        $this.find(".pt-background").css("background-color", $this.attr("data-bg-color") );
                    }
    
                    // Background Image
                    if( $this.attr("data-bg-image") !== undefined ){
                        $this.find(".pt-background").append('<div class="pt-background-image">');
                        $this.find(".pt-background-image").css("background-image", "url("+ $this.attr("data-bg-image") +")" );
                        $this.find(".pt-background-image").css("background-size", $this.attr("data-bg-size") );
                        $this.find(".pt-background-image").css("background-position", $this.attr("data-bg-position") );
                        $this.find(".pt-background-image").css("opacity", $this.attr("data-bg-image-opacity") );
    
                        $this.find(".pt-background-image").css("background-size", $this.attr("data-bg-size") );
                        $this.find(".pt-background-image").css("background-repeat", $this.attr("data-bg-repeat") );
                        $this.find(".pt-background-image").css("background-position", $this.attr("data-bg-position") );
                        $this.find(".pt-background-image").css("background-blend-mode", $this.attr("data-bg-blend-mode") );
                    }
    
                    // Parallax effect    
                    if( $this.attr("data-bg-parallax") !== undefined ){
                        $this.find(".pt-background-image").addClass("pt-parallax-element");
                    }
                }
                else {
    
                    if(  $this.attr("data-bg-color") !== undefined ){                        
                        $this.css("background-color", $this.attr("data-bg-color") );
                        if( $this.hasClass("btn") ) {
                            $this.css("border-color", $this.attr("data-bg-color"));
                        }
                    }
    
                    if( $this.attr("data-bg-image") !== undefined ){
                        $this.css("background-image", "url("+ $this.attr("data-bg-image") +")" );    
                        $this.css("background-size", $this.attr("data-bg-size") );
                        $this.css("background-repeat", $this.attr("data-bg-repeat") );
                        $this.css("background-position", $this.attr("data-bg-position") );
                        $this.css("background-blend-mode", $this.attr("data-bg-blend-mode") );
                    }
                }
            });
        },

        initializ: function() {
			qatar_national_day.preloader();
			qatar_national_day.scroll_to_top();
			qatar_national_day.mobile_menu();
			qatar_national_day.sticky_header();
			qatar_national_day.background_image();
			qatar_national_day.newsSlider();
			qatar_national_day.eventsSlider();
			qatar_national_day.newsdtlsgallery();
			qatar_national_day.custom_jQuery();
		}

    };
    $(function() {
		qatar_national_day.initializ();
	});


})(jQuery);
