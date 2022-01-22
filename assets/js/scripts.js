AOS.init();
$(window).on('load', function(){
	$('.pllax').paroller();
	var dropmob = $(".dropdown-mobile").height();
	var headerheight = $("header").height();
	var winheight = $(window).height();
	$(".dropdown-mobile").height(0);
	$(".menu").css('top', headerheight);
	$(".menu").height(winheight);
	$("#hamburger").click(function(){
		$(this).toggleClass('open');
		$('.menu').toggleClass('active');
		if ($('.menu').hasClass('enabled')) {
			$('.menu').removeClass('enabled');
		}else{
			setTimeout(function(){
				$('.menu').addClass('enabled');
			}, 1800)
		}
		setTimeout(function(){
			$('.menu li').toggleClass('active');
		}, 700)
	})
	$(".dropdown-menu-mobile").hover(()=>{
		if ($(".dropdown-mobile").height() == 0) {
			$(".dropdown-mobile").height(dropmob);
		}else{
			$(".dropdown-mobile").height(0);
		}
	})
	$(".dropdown-menu-mobile").click(()=>{
		if ($(".dropdown-mobile").height() == 0) {
			$(".dropdown-mobile").height(dropmob);
		}else{
			$(".dropdown-mobile").height(0);
		}
	})
})