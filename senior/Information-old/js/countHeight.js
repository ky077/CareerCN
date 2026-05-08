$(window).on('resize',function() {	
	$('body').css('margin-bottom', $(".footer").outerHeight());
});
$(document).ready(function() {
    $(window).trigger('resize');
});

