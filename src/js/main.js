$(document).ready(function() {
    gallerySliderInit();
    reviewsSliderInit();

    // header toggle menu
    function headerBtnToggle() {
        $('.js-menu-toggle').click(function() {
            $('body').toggleClass('is-menu-opened');
            $('.header__menu').toggleClass('is-show');
        });
    }

    // slick slider init
    function gallerySliderInit() {
        if ($('.js-gallery-slider-init')[0]){
            $(window).on('load resize orientationchange', function() {
                $('.js-gallery-slider-init').each(function(){
                    var $carousel = $(this);
                    $carousel.slick({
                        fade: true,
                        speed: 340,
                        arrows: true,
                        prevArrow: '<button type="button" class="btn-slider btn-slider--size-lg  btn-slider--prev"><span class="btn-slider__icon-wrap"><svg class="icon btn-slider__icon"><use xlink:href="/images/sprite.svg#arrow-slider-prev"></span></button>',
                        nextArrow: '<button type="button" class="btn-slider btn-slider--size-lg  btn-slider--next"><span class="btn-slider__icon-wrap"><svg class="icon btn-slider__icon"><use xlink:href="/images/sprite.svg#arrow-slider-next"></span></button>',
                        dots: false,
                        slidesToScroll: 1,
                        slidesToShow: 1
                    });
                });
            });
        }
    }

    function reviewsSliderInit() {
        if ($('.js-reviews-slider-init')[0]){
            $(window).on('load resize orientationchange', function() {
                $('.js-reviews-slider-init').each(function(){
                    var $carousel = $(this);
                    $carousel.slick({
                        fade: false,
                        speed: 340,
                        arrows: true,
                        prevArrow: '<button type="button" class="btn-slider btn-slider--size-md btn-slider--prev"><span class="btn-slider__icon-wrap"><svg class="icon btn-slider__icon"><use xlink:href="/images/sprite.svg#arrow-slider-prev"></span></button>',
                        nextArrow: '<button type="button" class="btn-slider btn-slider--size-md btn-slider--next"><span class="btn-slider__icon-wrap"><svg class="icon btn-slider__icon"><use xlink:href="/images/sprite.svg#arrow-slider-next"></span></button>',
                        appendArrows: $('.reviews-section__slider-control'),
                        dots: false,
                        slidesToScroll: 1,
                        slidesToShow: 3
                    });
                });
            });
        }
    }
});