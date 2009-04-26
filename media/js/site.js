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
	
	$('#contentTools ul').prepend('<li><a href="#" class="printMe">Print</a></li>');
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
    
	
});