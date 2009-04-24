$(document).ready(function(){

	$('#controlPanel, .closeState').hide();
	//$('.error').hide();

	$('.openPanel').click(function() {
		$('#controlPanel').css('padding', '20px').slideToggle();
		$('a.openPanel span').toggle();
	});
	
	$('.gridOn').click(function() {
		$('a.button span').toggle();
		$('#view, #content').toggleClass('gridOn');
	});

});