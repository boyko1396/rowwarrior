$(document).ready(function() {
    headerBtnToggle();
    asideBtnToggle();
    eventCalculatorToggle();
    select2Init1();
    select2Init2();
    select2Init3();
    tariffsSliderInit();

    // header toggle menu
    function headerBtnToggle() {
        $('.js-menu-toggle').click(function() {
            $('body').toggleClass('is-menu-opened');
            $('.header__menu').toggleClass('is-show');
        });
    }

    // aside nav toggle
    function asideBtnToggle() {
        $('.js-toggle-aside-nav').click(function() {
            $(this).toggleClass('is-active');
            $('.profile-aside__nav-item:not(.is-active)').slideToggle(200);
        });
    }

    // event card calc
    function eventCalculatorToggle() {
        $('.js-event-btn-calculator').click(function() {
            var eventCard = $(this).closest('.event-card');

            $('.js-event-btn-calculator').not(this).removeClass('is-active');
            $('.event-card').not(eventCard).removeClass('is-active');
            $(this).toggleClass('is-active');
            $(this).closest('.event-card').toggleClass('is-active');
        });
    }

    // select2 init
    function select2Init1() {
        if ($('.js-select-init')[0]){
            $('.js-select-init').select2({
                minimumResultsForSearch: Infinity,
                width: 'auto'
            });
        }
    }

    function select2Init2() {
        if ($('.js-select-light-init')[0]){
            $('.js-select-light-init').select2({
                minimumResultsForSearch: Infinity,
                width: 'auto',
                theme: 'select2-container--light'
            });
        }
    }

    function select2Init3() {
        if ($('.js-select-white-init')[0]){
            $('.js-select-white-init').select2({
                minimumResultsForSearch: Infinity,
                width: '100%',
                theme: 'select2-container--white'
            });
        }
    }

    function tariffsSliderInit() {
        if ($('.js-tariffs-slider-init')[0]){
            $(window).on('load resize orientationchange', function() {
                $('.js-tariffs-slider-init').each(function(){
                    var $carousel = $(this);
                    if ($(window).width() > 991) {
                        if ($carousel.hasClass('slick-initialized')) {
                            $carousel.slick('unslick');
                        }
                    }
                    else {
                        if (!$carousel.hasClass('slick-initialized')) {
                            $carousel.slick({
                                speed: 240,
                                arrows: false,
                                dots: true,
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                centerMode: true,
                                centerPadding: '30px'
                            });
                        }
                    }
                });
            });
        }
    }
});