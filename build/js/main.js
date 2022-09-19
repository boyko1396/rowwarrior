$(document).ready(function() {
  gallerySliderInit();
  reviewsSliderInit();
  productSliderInit();
  productNavSliderInit();
  modalVideoInit();
  headerMenuMobile();
  headerSubmenuMobile();
  gallerySliderTab();
  scrollTarget();
  tabMainGood();
  truncateTextReviews();

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

        $carousel.on('afterChange', function(event, slick, currentSlide) {
            var vid = $(slick.$slides[currentSlide]).find('video');
            if (vid.length > 0) {
              $carousel.slick('slickPause');
              $(vid).get(0).play();
            }
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

  // scroll target
  function scrollTarget() {
    $('.js-target-scroll').click(function(){
      $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
      }, 450);
      return false;
    });
  }

  // tab main good
  function tabMainGood() {
    $('.js-tab-link').click(function() {
      $('.js-tab-link').removeClass('is-active');
      $(this).addClass('is-active');
      $('.good-appeal__picture, .good-appeal__tab').toggleClass('is-show');
      return false;
    });
  }

  // truncate text reviews
  function truncateTextReviews() {
    $('.reviews-slider__slide-content').each(function(){
      if($(this).text().length > 360)
        $(this).text($(this).text().substr(0,360)+ '...');
    });
  }
});

// scroll animated viewer
function scrollAnimated() {
  var reveals = document.querySelectorAll('.js-good-section-view');
  var revealsAdvantage = document.querySelectorAll('.js-product-advantage-view');
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 1070;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('is-view');
    } else {
      reveals[i].classList.remove('is-view');
    }
  }
  for (var i = 0; i < revealsAdvantage.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = revealsAdvantage[i].getBoundingClientRect().top;
    var elementVisible = 400;
    if (elementTop < windowHeight - elementVisible) {
      revealsAdvantage[i].classList.add('is-view');
    } else {
      revealsAdvantage[i].classList.remove('is-view');
    }
  }
}

window.addEventListener('scroll', scrollAnimated);
scrollAnimated();

// scroll magic
var wh = window.innerHeight,
  infoWord = $('.js-info-word'),
  infoText = $('.js-info-text'),
  mainBenefits = $('.js-main-benefits');

var ctrl = new ScrollMagic.Controller();

var infoWordd = TweenMax.fromTo(infoWord, 1,
{
  xPercent: 100,
  ease: Power1.easeIn
}, {
  xPercent: -140,
  ease: Power1.easeIn
});

var scene = new ScrollMagic.Scene({
  trigerHook: "onEnter",
  duration: "140%"
})  
.setTween(infoWordd)
.addTo(ctrl);

var infoTextt = TweenMax.fromTo(infoText, 1,
{
  yPercent: 60,
  opacity: 0,
  ease: Power1.easeInOut
}, {
  yPercent: 0,
  opacity: 1,
  ease: Power1.easeInOut
});

var scene = new ScrollMagic.Scene({
  trigerHook: "onEnter",
  duration: "150%"
})  
.setTween(infoTextt)
.addTo(ctrl);

var mainBenefitss = TweenMax.fromTo(mainBenefits, 1,
{
  yPercent: 0,
  opacity: 1,
  ease: Power1.easeInOut
}, {
  yPercent: -500,
  opacity: 0,
  ease: Power1.easeInOut
});

var scene = new ScrollMagic.Scene({
  trigerHook: "onEnter",
  duration: "90%"
})  
.setTween(mainBenefitss)
.addTo(ctrl);