$(document).ready(function () {
	
	$('span').click(function () {
		
		$('.colors, span').toggleClass('title');
		
	});
	
	
	$('ul.themes-colors li').click(function () {
		
		$('.aside,.lbel ').css('background', $(this).css('color'));
		
	});
  $('ul.logo-colors li').click(function () {
		
    $('.aside .nav li a i').css('color', $(this).css('color'));
		
	});
	$('ul.section-colors li').click(function () {
		
		$('.home,.about,.experience,.skill,.awards').css('background', $(this).css('color'));
			
		});
		

	
	
});