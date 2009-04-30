$(document).ready(function(){
    
	$('.error').hide();

	// Image Sizes
	$('img.thumb').css({width: '40px', height: '40px'});
	
	$('#contentTool').prepend('<li><a href="#" class="printMe">Print</a></li>');
	
	$('.printMe').click(function() {
		window.print();
		return false;
	});
	
	$('.sendEmail').facebox();
	
	$(document).bind('reveal.facebox', function() {
      $('#emailSent').hide();
      $('#sendEmail').click(function() {
        $('.contentForm').remove();
        $('#emailSent').show();
        return false;
      });
      $('.close').click(function() {
        $(this).trigger('close.facebox')
      });
    });
    
	$('#accountTabs').tabs();
	$('#tunnelTabs').tabs();
	$('#imageTabs').tabs();
	
});