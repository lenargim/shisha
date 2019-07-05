$(document).ready(function(){
	$('.burger').on('click', function(){
		$('.pos1').toggleClass('pos2');
		$('.hide').toggleClass('show');
		$('.menu').toggleClass('menu__open');
	});
	$(document).on('mouseup',function (e) {
	    var show 	= $(".show"),
	    	burger 	= $('.burger'),
	    	menu 	= $('.menu');
	    if (menu.has(e.target).length == 0 && burger.has(e.target).length == 0 ){
	        $('span').removeClass('pos2');
	        $('nav').removeClass('show');
	        $('div').removeClass('menu__open');
	    }
	});

	$(".nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href');
        var top = $(id).offset().top - 10;
        $('html,body').animate({scrollTop: top}, 1000);
    });
});

let adaptive = function(media){
	if ( media.matches ) {
		$('nav').removeClass('hide');
	}
}
let mql = window.matchMedia('screen and (min-width: 768px)');
adaptive(mql);
mql.addListener(adaptive);

$(function() {
	$(window).resize(function() {
		if (window.matchMedia("screen and (min-width: 768px)").matches) {
			    $('nav').removeClass('hide');
		} ;
		if (!window.matchMedia("screen and (min-width: 768px)").matches) {
		   $('nav').addClass('hide');
		} ;	
	});
});

$(function() {
	$(window).resize(function() {
		if (window.matchMedia("screen and (min-width: 1024px)").matches) {
		    $('.title h1').html('Good life - Мы открылись!')
		} ;
		if (!window.matchMedia("screen and (min-width: 1024px)").matches) {
		    $('.title h1').html('Good life<br>Мы открылись!')
		} ;	
	});
});

