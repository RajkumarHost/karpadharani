$(document).ready( function() {
		$('.slick-slider').slick({
		  slidesToShow: 1,
	      autoplay: true,
	      autoplaySpeed: 2000,
	      speed: 1000,
	      infinite: true,
	      dots: false,
        fade: true,
        prevArrow: "<a href='javascript: void(0);' class='slick-arrow-left'></a>",
        nextArrow: "<a href='javascript: void(0);' class='slick-arrow-right'></a>",
       pauseOnHover:false,
		});

		$('.quote-item').slick({
		  slidesToShow: 1,
          autoplay: false,
	      autoplaySpeed: 2500,
	      speed: 1000,
	      infinite: true,
	      dots: false,
          focusOnSelect: true,
          arrows:false,
          adaptiveHeight: true,
		});

		$('.slicksliderhead').slick({
          autoplay: false,
	      autoplaySpeed: 2500,
	      speed: 1000,
	      infinite: true,
	      centerMode: true,
		  slidesToShow:1,
		  centerPadding: 0,
		  arrows:false,
		  responsive:[
               {
            breakpoint: 1200,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true
            }
          }, {
            breakpoint: 768,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true
            }
          }, {
            breakpoint: 576,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true
            }
          }
           ]
		});

$('.gvideos').slick({
		slidesToShow: 1,
		autoplay: false,
		autoplaySpeed: 2500,
		speed: 1000,
		infinite: false,
		dots: false,
        prevArrow: "<a href='javascript: void(0);' class='slick-arrow-left'></a>",
        nextArrow: "<a href='javascript: void(0);' class='slick-arrow-right'></a>",
        focusOnSelect: true,
		});	
$(document).on('click','.nav-container ul li',function(){
  	     var ind = $(this).data('ind'),
         scrollsection = $("." + ind).offset().top - 80;
         $('html, body').animate({ scrollTop: scrollsection }, 400);
         $('.nav-container').removeClass('open');
});

var $slider = $('.slicksliderhead,.quote-item');

var $nav = $('.slick-slider-controls');
          if( $nav.length ) {

            // Left Button
            var $left = $nav.find('.slick-slider-left');
            if( $left.length ) {
              $left.on('click', function() {
                $slider.slick('slickPrev');
              });
            }
            // Right Button
            var $right = $nav.find('.slick-slider-right');
            if( $right.length ) {
              $right.on('click', function() {
                $slider.slick('slickNext');
              });
            }
       }
var headeactive = function(){
		if($(window).scrollTop() > $('.widgetholder').offset().top - 70){
			$('.header-navbar').addClass('shrink');
		}	
		else{
			$('.header-navbar').removeClass('shrink');
		}
}
var openPop = function(){
	$('.modal').css('display','block');
	setTimeout(function(){
		$('.modal').addClass('open');
	},400);
	$('body').css('overflow','hidden');
}	
setTimeout(function(){
	openPop();
},300);
var sections = $('.sect'),
     nav = $('.nav-container'),
     nav_height = $('.navbar').outerHeight();
 var navscrollactive = function(){
        var cur_pos = $(this).scrollTop() + 400;
        sections.each(function(index) {
          var top = $(this).offset().top - nav_height,
              bottom = top + $(this).outerHeight();
          if (cur_pos >= top && cur_pos <= bottom) {
            nav.find('li').removeClass('active');
            $('.nav-container li').eq(index).addClass('active');
          }
        });
      }
 var visible;
            var sectionAnimation = function(){
               $('.to-animate').each(function(index, element){
               var $this = $(this),dataAnimate = $(this).data('animate'),$delay = $(this).data('delay');
               visible = isInViewport(this);   
                if(visible){
                      setTimeout(function(){
                         $this.addClass(dataAnimate);
                      },$delay);
                  }
               });
 };      
$(document).on('click','.popopen',function(){
	$('.modal').css('display','block');
	setTimeout(function(){
		$('.modal').addClass('open');
	},400);
	$('body').css('overflow','hidden');
});
$(document).on('click','.event-item',function(){
	var ind = $(this).index();
	$('.event-pop').css('display','block');
	$('.event-pop').find('.row .eventscont').eq(ind).css('display','block');
	setTimeout(function(){
		$('.event-pop').addClass('open');
	},400);
	$('body').css('overflow','hidden');
});

$(document).on('click','.inner-popup',function(){
	$('.popopen').trigger('click');
});
$(document).on('click','.modal .close',function(){
    $('.modal').css('display','none').removeClass('open');
	$('body').css('overflow','auto');
	setTimeout(function(){
		$('.modal-dialog').addClass('active');
	},200);
});
$(document).on('click','.event-pop .close',function(){
    $('.event-pop').css('display','none').removeClass('open');
    $('.eventscont').css('display','none');
	$('body').css('overflow','auto');
	
});
$(window).scroll(function(){		
	headeactive();	
	navscrollactive();
	sectionAnimation();
});       
$(document).on('click','.gallerywidget .views a',function(){
		if($(this).text() === "View more"){
			$('.gallerywidget').find('#gallerysecond,#gallerythird').removeClass('hide');
		    $(this).text('View less');
		}
		else{
			$('.gallerywidget').find('#gallerysecond,#gallerythird').addClass('hide');
		    $(this).text('View more');
		}
});  

$(document).on('click','.widget-bg .views a',function(){
	if($(this).text() == "View more"){
		$('.widget-bg').find('#top-notch').removeClass('hide');
		$(this).text('View less');
	}
	else{
		$('.widget-bg').find('#top-notch').addClass('hide');
		$(this).text('View more');
	}
}); 

$(document).on('click','.hamburger',function(){
	$('nav').css('display','block');
	setTimeout(function(){
		$('nav').addClass('open');
	},300);
});
$(document).on('click','.close',function(){
	$('nav').removeClass('open');
	setTimeout(function(){
		$('nav').css('display','none');
	},300);
});   


function isInViewport(node) {
  var rect = node.getBoundingClientRect()
  return (
    (rect.height > 0 || rect.width > 0) &&
    rect.bottom >= 0 &&
    rect.right >= 0 &&
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.left <= (window.innerWidth || document.documentElement.clientWidth)
  )
}
  });