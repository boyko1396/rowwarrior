$(document).ready(function() {
  gallerySliderInit();
  reviewsSliderInit();
  productSliderInit();
  productNavSliderInit();

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
            prevArrow: '<button type="button" class="btn-slider btn-slider--size-lg  btn-slider--prev"><span class="btn-slider__icon-wrap"><svg class="icon btn-slider__icon"><use xlink:href="images/sprite.svg#arrow-slider-prev"></span></button>',
            nextArrow: '<button type="button" class="btn-slider btn-slider--size-lg  btn-slider--next"><span class="btn-slider__icon-wrap"><svg class="icon btn-slider__icon"><use xlink:href="images/sprite.svg#arrow-slider-next"></span></button>',
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
            prevArrow: '<button type="button" class="btn-slider btn-slider--size-md btn-slider--prev"><span class="btn-slider__icon-wrap"><svg class="icon btn-slider__icon"><use xlink:href="images/sprite.svg#arrow-slider-prev"></span></button>',
            nextArrow: '<button type="button" class="btn-slider btn-slider--size-md btn-slider--next"><span class="btn-slider__icon-wrap"><svg class="icon btn-slider__icon"><use xlink:href="images/sprite.svg#arrow-slider-next"></span></button>',
            appendArrows: $('.reviews-section__slider-control'),
            dots: false,
            slidesToScroll: 1,
            slidesToShow: 3
          });
        });
      });
    }
  }

  function productSliderInit() {
    if ($('.js-product-slider-init')[0]){
      $(window).on('load resize orientationchange', function() {
        $('.js-product-slider-init').each(function(){
          var $carousel = $(this);
          $carousel.slick({
            fade: false,
            speed: 340,
            arrows: false,
            dots: false,
            slidesToScroll: 1,
            slidesToShow: 1,
            swipe: false,
            asNavFor: $('.js-product-nav-slider-init')
          });
        });
      });
    }
  }

  function productNavSliderInit() {
    if ($('.js-product-nav-slider-init')[0]){
      $(window).on('load resize orientationchange', function() {
        $('.js-product-nav-slider-init').each(function(){
          var $carousel = $(this);
          $carousel.slick({
            infinite: true,
            fade: false,
            speed: 340,
            arrows: false,
            dots: false,
            slidesToScroll: 1,
            slidesToShow: 5,
            vertical: true,
            verticalSwiping: true,
            asNavFor: $('.js-product-slider-init'),
            focusOnSelect: true
          });
        });
      });
    }
  }
});

// scroll animated viewer
function scrollAnimated() {
  var reveals = document.querySelectorAll('.sjs-scroll-animated');
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('is-view');
    } else {
      reveals[i].classList.remove('is-view');
    }
  }
}

window.addEventListener('scroll', scrollAnimated);
scrollAnimated();

// scroll magic
// var wh = window.innerHeight,
//   $infoWord = $('.js-info-word');

// // init
// var ctrl = new ScrollMagic.Controller({
//   globalSceneOptions: {
//     triggerHook: 'onLeave'
//   }
// });

// $('.js-parallax-scene').each(function() {
//   new ScrollMagic.Scene({
//     triggerElement: this,
//     duration: '0%'
//   })
//   .setPin(this)
//   .addTo(ctrl);
// });

// var infoWordIntro = TweenMax.from($infoWord, 1, {
//   yPercent: 0,
//   xPercent: 80,
//   ease: Cubic.easeOut
// });

// new ScrollMagic.Scene({
//   duration: '120%'
// })
// .setTween(infoWordIntro)
// .triggerElement($('body')[0])
// .addTo(ctrl);