function validate_comment(data, form) {
  if (data.valid) {
    var next = form[0].next.value;
    // form is valid, so it is safe to post a new comment
    var form_data = form.serialize();
    $.post("/comments/post/", form_data, show_comment_msg(next));
  }
}
 
function show_comment_msg(next) {
  // effect(effect type,options,speed,callback)
  $('#comment-popin').show("highlight", {}, 2000, function() {
    window.location.href = next;  //window.location.reload();
  });
}

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
	
	// Column Control
	$('.oneColumnLayout').click(function() {
		$('#sidebar').hide();
		$('#pageContent').addClass('prefix_4').removeClass('prefix_2');
		$(this).addClass('active').parent().siblings().children('a').removeClass('active');
		return false;
	});
	
	$('.twoColumnLayout').click(function() {
		$('#pageContent').addClass('prefix_2').removeClass('prefix_4');
		$('#sidebar').show().addClass('grid_4').removeClass('grid_8');
		$('#extraSidebar').hide();
		$(this).addClass('active').parent().siblings().children('a').removeClass('active');
		return false;
	});
	
	$('.threeColumnLayout').click(function() {
		$('#pageContent').removeClass('prefix_4, prefix_2');
		$('#sidebar').show().addClass('grid_8').removeClass('grid_4');
		$('#extraSidebar').show();
		$(this).addClass('active').parent().siblings().children('a').removeClass('active');
		return false;
	});
});