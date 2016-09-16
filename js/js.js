jQuery(document).ready(function($) {

$('#slick.photos').slick({
  dots: false,
  arrows: true,
  infinite: true,
  prevArrow: '.slick-prev.photos',
  nextArrow: '.slick-next.photos',
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('#slick.videos').slick({
  dots: false,
  arrows: true,
  infinite: true,
  prevArrow: '.slick-prev.videos',
  nextArrow: '.slick-next.videos',
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

  // toggle subcribe pop up
var popUpSubscribe = $('#pop-up-subscribe');

// check if element is above the fold
function checkVisible( elm ) {
    var vpH = $(window).height(), // Viewport Height
        st = $(window).scrollTop(), // Scroll Top
        y = $(elm).offset().top
    return ((y < (vpH + st)));
}

// check if element is visible (use "above" to say that element is above the fold)
if(checkVisible($('.show-pop-out-subscribe-here'))) {
  setTimeout(function(){  
    $('#pop-up-subscribe:not(.hasExplored)').removeClass('hide');
  },3000);
} else {
  $('#pop-up-subscribe:not(.hasExplored)').addClass('hide');
}

$('#pop-up-subscribe a.fa.close').on('click', function(){
  $(this).closest('#pop-up-subscribe').addClass('hide');
  $(this).closest('#pop-up-subscribe').removeClass('trueHide');
  $(this).closest('#pop-up-subscribe').removeClass('start');
  $(this).closest('#pop-up-subscribe').addClass('hasExplored');
});
$('#pop-up-subscribe a.fa.open').on('click', function(){
  $(this).closest('#pop-up-subscribe').removeClass('hide');
  $(this).closest('#pop-up-subscribe').removeClass('trueHide');
  $(this).closest('#pop-up-subscribe').addClass('hasExplored');
});

$(window).scroll(function(){
  if(checkVisible($('.hide-pop-out-subscribe-here'))) {
    $('#pop-up-subscribe:not(.hasExplored)').addClass('trueHide');
    $('#pop-up-subscribe:not(.hasExplored)').addClass('hide');
    $('#pop-up-subscribe:not(.hasExplored)').removeClass('start');
  }
  else if(checkVisible($('.show-pop-out-subscribe-here'))) {
    $('#pop-up-subscribe:not(.hasExplored)').removeClass('hide');
  }   
});

  // TABS
  $('ul.tabs').each(function(){
    var $active, $parent, $content, $links = $(this).find('a');

    $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
    $parent = $($active).parent('li');
    $active.addClass('active');
    $parent.addClass('active');

    $content = $($active[0].hash);

    $links.not($active).each(function () {
      $(this.hash).css({'visibility': 'hidden', 'height': 0});
    });

    $(this).on('click', 'a', function(e) {
      $active.removeClass('active');
      $parent.removeClass('active');
      $content.css({'visibility': 'hidden', 'height': 0});

      $active = $(this);
      $parent = $(this).parent('li');
      $content = $(this.hash);

      $active.addClass('active');
      $parent.addClass('active');
      $content.css({'visibility': 'visible', 'height': 'auto'});

      e.preventDefault();
    });
  });


  $("a[rel^='magpop']").magnificPopup({type: 'iframe'});

  $(' a.scrollToContent').on('click', function(event) {
  	event.preventDefault();
  	var target = $($(this).attr('href'));

  	if(target.length) {
  		event.preventDefault();
        $('html, body').animate({
          scrollTop: (target.offset().top - $('nav').outerHeight())
        }, 1000);
  	}
  });	

  $('#mobile-nav a.fa').on('click',function(e){
    e.preventDefault();
    $(this).toggleClass('fa-bars');
    $(this).toggleClass('fa-close');
    $('nav ul').toggleClass('show');
  });
});
