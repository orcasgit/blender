$(document).ready(function(){

	//$('.error').hide();
	var panel = $.cookie('panel');

	$('.openPanel').click(function() {
		$('#controlPanel').css('padding', '20px').slideToggle();
		$('a.openPanel span').toggle();
		if (panel == null) {
			$.cookie('panel', 'open', { expires: 7, path: '/', domain: '127.0.0.1'});
		} else if (panel == 'open') {
			$.cookie('panel', 'close', { expires: 7, path: '/', domain: '127.0.0.1'});
		} else if (panel == "close") {
			$.cookie('panel', 'open', { expires: 7, path: '/', domain: '127.0.0.1'});
		};
	});
		
	$('.gridOn').click(function() {
		$('a.button span').toggle();
		$('#view, #content').toggleClass('gridOn');
	});
		
	if(panel == 'open') {
		$('#controlPanel').css('padding', '20px').show();
		$('.openState').hide();
	} else if(panel == 'closed') {
		$('#controlPanel').hide();
		$('.openState').show();
	} else {
		$('#controlPanel, .closeState').hide();
	};
	
	// Column Control
	$('.oneColumnLayout').click(function() {
		$('#sidebar').hide();
		$('#pageContent').addClass('prefix_4').removeClass('prefix_2');
		$(this).addClass('active').parent().siblings().children('a').removeClass('active');
		$.cookie('cols', 'one', { expires: 7, path: '/', domain: '127.0.0.1'});
		return false;
	});
	
	$('.twoColumnLayout').click(function() {
		$('#pageContent').addClass('prefix_2').removeClass('prefix_4');
		$('#sidebar').show().addClass('grid_4').removeClass('grid_8');
		$('#extraSidebar').hide();
		$(this).addClass('active').parent().siblings().children('a').removeClass('active');
		$.cookie('cols', 'two', { expires: 7, path: '/', domain: '127.0.0.1'});
		return false;
	});
	
	$('.threeColumnLayout').click(function() {
		$('#pageContent').removeClass('prefix_4, prefix_2');
		$('#sidebar').show().addClass('grid_8').removeClass('grid_4');
		$('#extraSidebar').show();
		$(this).addClass('active').parent().siblings().children('a').removeClass('active');
		$.cookie('cols', 'three', { expires: 7, path: '/', domain: '127.0.0.1'});
		return false;
	});
	
	var cols = $.cookie('cols');
	
	if(cols == 'one'){
		$('#sidebar').hide();
		$('#pageContent').addClass('prefix_4').removeClass('prefix_2');
	};
	
	if(cols == 'two'){
		$('#pageContent').addClass('prefix_2').removeClass('prefix_4');
		$('#sidebar').show().addClass('grid_4').removeClass('grid_8');
		$('#extraSidebar').hide();s
	};
	
	if(cols == 'three'){
		$('#pageContent').removeClass('prefix_4, prefix_2');
		$('#sidebar').show().addClass('grid_8').removeClass('grid_4');
		$('#extraSidebar').show();
	};

});