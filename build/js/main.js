$(document).ready(function() {
  gallerySliderInit();
  reviewsSliderInit();
  productSliderInit();
  productNavSliderInit();
  modalVideoInit();
  headerMenuMobile();
  headerSubmenuMobile();
  gallerySliderTab();

  // header dropdown menu mobile
  function headerMenuMobile() {
    $('.js-header-nav-mobile-btn').click(function() {
      $(this).toggleClass('is-active');
      $('body').toggleClass('is-menu-mobile-show');
      $('.header').toggleClass('is-menu-mobile-show');
      $('.header__nav').toggleClass('is-show');
    });
  }

  function headerSubmenuMobile() {
    $('.js-header-nav-link-dropdown').click(function() {
      $(this).toggleClass('is-active');
      $(this).siblings('.header-nav__dropdown').toggleClass('is-show');
      return false;
    });
  }

  // gallery tab
  function gallerySliderTab() {
    $('.js-gallery-tab-click').click(function() {
      $('.js-gallery-tab-click').toggleClass('is-active');
      $('.gallery-slider__block').toggleClass('is-active');
    });
  }

  function headerSubmenuMobile() {
    $('.js-header-nav-link-dropdown').click(function() {
      $(this).toggleClass('is-active');
      $(this).siblings('.header-nav__dropdown').toggleClass('is-show');
      return false;
    });
  }

  // modal video init
  function modalVideoInit() {
    $('.js-modal-video-init').click(function() {
      $('body').addClass('is-video-modal');
      $('.modal-video').addClass('is-show');
    });

    $('.js-modal-video-close').click(function() {
      $('body').removeClass('is-video-modal');
      $('.modal-video').removeClass('is-show');
    });
  }

  // slick slider init
  function gallerySliderInit() {
    if ($('.js-gallery-slider-init')[0]){
      $('.js-gallery-slider-init').each(function(){
        var $carousel = $(this);
        $carousel.slick({
          fade: true,
          speed: 600,
          arrows: true,
          prevArrow: '<button type="button" class="btn-slider btn-slider--theme-accent btn-slider--size-lg btn-slider--prev"><span class="btn-slider__icon-wrap"><svg class="icon btn-slider__icon"><use xlink:href="images/sprite.svg#arrow-slider-prev"></span></button>',
          nextArrow: '<button type="button" class="btn-slider btn-slider--theme-accent btn-slider--size-lg btn-slider--next"><span class="btn-slider__icon-wrap"><svg class="icon btn-slider__icon"><use xlink:href="images/sprite.svg#arrow-slider-next"></span></button>',
          dots: false,
          slidesToScroll: 1,
          slidesToShow: 1
        });
      });
    }
  }

  function reviewsSliderInit() {
    if ($('.js-reviews-slider-init')[0]){
      $('.js-reviews-slider-init').each(function(){
        var $carousel = $(this);
        $carousel.slick({
          fade: false,
          speed: 340,
          arrows: true,
          prevArrow: '<button type="button" class="btn-slider btn-slider--theme-accent-light btn-slider--size-md btn-slider--prev"><span class="btn-slider__icon-wrap"><svg class="icon btn-slider__icon"><use xlink:href="images/sprite.svg#arrow-slider-prev"></span></button>',
          nextArrow: '<button type="button" class="btn-slider btn-slider--theme-accent-light btn-slider--size-md btn-slider--next"><span class="btn-slider__icon-wrap"><svg class="icon btn-slider__icon"><use xlink:href="images/sprite.svg#arrow-slider-next"></span></button>',
          appendArrows: $('.reviews-section__slider-control'),
          dots: false,
          slidesToScroll: 1,
          slidesToShow: 3,
          responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                variableWidth: true
              }
            }
          ]
        });
      });
    }
  }

  function productSliderInit() {
    if ($('.js-product-slider-init')[0]){
      $('.js-product-slider-init').each(function(){
        var $carousel = $(this);
        $carousel.slick({
          fade: true,
          speed: 600,
          arrows: false,
          dots: false,
          slidesToScroll: 1,
          slidesToShow: 1,
          swipe: false,
          asNavFor: $('.js-product-nav-slider-init'),
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                dots: true,
                swipe: true
              }
            }
          ]
        });
      });
    }
  }

  function productNavSliderInit() {
    if ($('.js-product-nav-slider-init')[0]){
      $('.js-product-nav-slider-init').each(function(){
        var $carousel = $(this);
        $carousel.slick({
          infinite: false,
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
//   xPercent: 20,
//   ease: Cubic.easeOut
// });

// new ScrollMagic.Scene({
//   duration: '120%'
// })
// .setTween(infoWordIntro)
// .triggerElement($('body')[0])
// .addTo(ctrl);