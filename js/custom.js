$(document).ready( function() {
		$('.slick-slider').slick({
		  slidesToShow: 1,
                  autoplay: false,
                  autoplaySpeed: 2500,
                  speed: 1000,
                  infinite: false,
                  dots: false,
        fade: true,
        prevArrow: "<a href='javascript: void(0);' class='slick-arrow-left'></a>",
        nextArrow: "<a href='javascript: void(0);' class='slick-arrow-right'></a>",
        focusOnSelect: true,
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
		});

		$('.slicksliderhead').slick({
          autoplay: false,
	      autoplaySpeed: 2500,
	      speed: 1000,
	      infinite: true,
	      centerMode: true,
		  slidesToShow:5,
		  centerPadding: 0,
		  arrows:false,
		  responsive:[
               {
            breakpoint: 1200,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 5,
              centerMode: true
            }
          }, {
            breakpoint: 768,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
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
function myMap() {
var mapProp= {
  center:new google.maps.LatLng(51.508742,-0.120850),
  zoom:5,
};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
  });