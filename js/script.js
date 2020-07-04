$(document).ready(function(){
	$('.menuburger').click(function(){
		$(this).toggleClass('burger-active');
    });
    $('.burger-active').click(function(){
		$(this).toggleClass('menuburger');
    });
    $('.menuburger').on('click', function() {
        $('.navbar').slideToggle(300, function(){
             if( $(this).css('display') === "none"){
                 $(this).removeAttr('style');
             }
        });
 
     });
});

$(document).ready(function() {
  $('.slider').slick({
      arrows:false,
      dots:true,
      adaptiveHeight:true,
      slidesToShow:3,
      slidesToScroll:1, 
      speed:1000, 
      easing:'ease',
      infinite:true,
      initialSlide:0, 
      autoplay:true,
      autoplaySpeed:500,
      pauseOnFocus:true,
      pauseOnHover:true,
      pauseOnDotsHover:true,
      // draggable:true, // Свайп для ПК
      // swipe:true, // Свайп для Моби
      // touchThreshold:20,
      // touchMove:true,
      // waitForAnimate:true,
      // centerMode:false,
      // variableWidth:true,
      // rows:1,
      // slidesPerRow:3, //Кол-во слайдов в ряду
      // vertical:false,
      // verticalSwiping:false, 
      responsive: [
        {
            breakpoint: 1245,
            settings: {
              
                slidesToShow:2,
            }
            
        },
        {
            breakpoint: 864,
            settings: {
                slidesToShow:1,
            }
            
        }
    ],
  
  });

     
}); 
var header = $('.header'),
	scrollPrev = 0;

$(window).scroll(function() {
	var scrolled = $(window).scrollTop();
 
	if ( scrolled > 100 && scrolled > scrollPrev ) {
		header.addClass('out');
	} else {
		header.removeClass('out');
	}
	scrollPrev = scrolled;
});


