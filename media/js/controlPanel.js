$(document).ready(function(){

    //Cookie Variables
    var panel = $.cookie('panel');
	var cols = $.cookie('cols');
	var secondary = $.cookie('secondary');

	// Controls for the editing panel
    $('.openPanel').click(function() {
        $('#controlPanel').css('padding', '20px').slideToggle();
        $('a.openPanel span').toggle();
        if (panel == null) {
            $.cookie('panel', 'show', { expires: 7, path: '/', domain: '127.0.0.1'});
        } else if (panel == 'show') {
            $.cookie('panel', 'hide', { expires: 7, path: '/', domain: '127.0.0.1'});
        } else if (panel == "hide") {
            $.cookie('panel', 'show', { expires: 7, path: '/', domain: '127.0.0.1'});
        };
    });
        
    if(panel == 'show') {
        $('#controlPanel').css('padding', '20px').show();
        $('.openPanel .showState').hide();
    } else if(panel == 'hide') {
        $('#controlPanel').hide();
        $('.openPanel .showState').show();
    } else {
        $('#controlPanel, .hideState').hide();
    };

	//Baseline Grid - On or off per page. No cookie right now
	$('.gridOn .hideState').hide();
	
    $('.gridOn').click(function() {
        $('.gridOn span').toggle();
        $('#view, #content').toggleClass('gridOn');
    });
    
    // Column Control
	$('#columns .submenu').hide();
	
    $('.oneColumnLayout').click(function() {
        $('#sidebar').hide();
        $('#pageContent').addClass('prefix_4').addClass('grid_8').removeClass('prefix_2').removeClass('prefix_3').removeClass('grid_10').removeClass('prefix_16');
        $(this).addClass('active').parent().siblings().children('a').removeClass('active');
		$('.oneSubMenu').show('fast');
        $.cookie('cols', 'one', { expires: 7, path: '/', domain: '127.0.0.1'});
        return false;
    });

	$('.oneColMed').click(function() {
		$('#pageContent').addClass('prefix_3').addClass('grid_10').removeClass('prefix_4').removeClass('grid_8');
	});
    
    $('.twoColumnLayout').click(function() {
        $('#pageContent').addClass('prefix_2').addClass('grid_8').removeClass('prefix_4').removeClass('prefix_3').removeClass('grid_10');
        $('#sidebar').show().addClass('grid_4').removeClass('grid_8');
        $('#extraSidebar').hide();
        $(this).addClass('active').parent().siblings().children('a').removeClass('active');
        $.cookie('cols', 'two', { expires: 7, path: '/', domain: '127.0.0.1'});
		$('#columns .oneSubMenu').hide('fast');
        return false;
    });
    
    $('.threeColumnLayout').click(function() {
        $('#pageContent').removeClass('prefix_4').removeClass('prefix_2').removeClass('grid_10').removeClass('prefix_3').addClass('grid_8');
        $('#sidebar').show().addClass('grid_8').removeClass('grid_4');
        $('#extraSidebar').show();
        $(this).addClass('active').parent().siblings().children('a').removeClass('active');
        $.cookie('cols', 'three', { expires: 7, path: '/', domain: '127.0.0.1'});
		$('#columns .oneSubMenu').hide('fast');
        return false;
    });
    
	//alert('here');

    if(cols == 'one'){
        $('#sidebar').hide();
        $('#pageContent').addClass('prefix_4').removeClass('prefix_2');
		$('#columns .oneSubMenu').show();
    };
    
	//alert('here');

    if(cols == 'two'){
        $('#pageContent').addClass('prefix_2').removeClass('prefix_4');
        $('#sidebar').show().addClass('grid_4').removeClass('grid_8');
        $('#extraSidebar').hide();
    };
    
	//alert('here');

    if(cols == 'three'){
        $('#pageContent').removeClass('prefix_4, prefix_2');
        $('#sidebar').show().addClass('grid_8').removeClass('grid_4');
        $('#extraSidebar').show();
    };
    
    //Secondary Content Control
    $('.secondaryContentToggle').click(function() {
		$('#secondaryContent').toggle();
		$('.secondaryContentToggle span').toggle();
		
    	if (secondary == null) {
			$.cookie('secondary', 'hide', { expires: 7, path: '/', domain: '127.0.0.1'})
		} else if (secondary == "show") {
			$.cookie('secondary', 'show', { expires: 7, path: '/', domain: '127.0.0.1'})
		} else if (secondary == 'hide') {
			$.cookie('secondary', 'hide', { expires: 7, path: '/', domain: '127.0.0.1'})
		};
		
    });

	if (secondary == "show") {
		$('#secondaryContent').show();
		$('.secondaryContentToggle span.showState').hide();
		$('.secondaryContentToggle span.hideState').show();
	} else if (secondary == 'hide') {
		$('#secondaryContent').hide();
		$('.secondaryContentToggle span.showState').show();
		$('.secondaryContentToggle span.hideState').hide();
	};
	
});