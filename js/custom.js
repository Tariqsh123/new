$(document).ready(function() {

    $('[href="#"]').attr("href", "javascript:;");

    $('.menu-Bar').click(function() {
        $(this).toggleClass('open');
        $('.menuWrap').toggleClass('open');
        $('body').toggleClass('ovr-hiddn');
    });

    $('.home-ghost-ser-slider').slick({
      dots: true,
      arrows: false,

      infinite: true,
      slidesToShow: 3,
     responsive: [
 
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
 
  ]
});

//      $('.pricing-slider').slick({
//       dots: true,
//       arrows: false,

//       infinite: true,
//       slidesToShow: 3,
//      responsive: [
 
//     {
//       breakpoint: 1600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2
//       }
//     },
//     {
//       breakpoint: 767,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
 
//   ]
// });
    

     $('.slider-for').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: false,
   fade: true,
   arrows:false,
   asNavFor: '.slider-nav'
 });
 $('.slider-nav').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   asNavFor: '.slider-for',
   dots: true,
   arrows:false,
   focusOnSelect: true
 });

      $('.slider-for-two').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: false,
   fade: true,
   arrows:false,
   asNavFor: '.slider-nav-two'
 });
 $('.slider-nav-two').slick({
   slidesToShow: 7,
   slidesToScroll: 1,
   asNavFor: '.slider-for-two',
   dots: true,
   arrows:false,
   focusOnSelect: true
 });

$('[data-targetit]').on('click', function(e) {
  $(this).addClass('active');
  $(this).siblings().removeClass('active');
  var target = $(this).data('targetit');
  $('.' + target).siblings('[class^="box-"]').hide();
  $('.' + target).fadeIn();
  $('.pricing-slider').slick('setPosition');
});

  
});

$(document).on("click",".popup-btn",function() { 
$('.popupform-main-new-popup').addClass('active');
// $('body').addClass('o-hidden');
$('.overlay-bg').fadeIn(500);
$('.close-btn').on('click', function(){
$('.popupform-main-new-popup').removeClass('active');
// $('body').removeClass('o-hidden');
$('.overlay-bg').fadeOut(500);
});
$('.overlay-bg').click(function() {
$('popupform-main-new-popup').removeClass('active');
// $('body').removeClass('o-hidden');
$('.overlay-bg').fadeOut(500);
});
});

     
      $('.port-slider').slick({
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 1,
     responsive: [
 
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
 
  ]
});   


/* RESPONSIVE JS */
if ($(window).width() < 824) {




    
    $('.review-slider').slick({
      dots: true,
      arrows: false,

      infinite: true,
      slidesToShow: 1,
});

    

}


