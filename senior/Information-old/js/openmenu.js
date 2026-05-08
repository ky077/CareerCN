$(function(){
	$("a.OM_list").click(function(){
			var _clickLink = $(this).attr("href");
			$(_clickLink).stop(false, true).slideToggle();
			return false;
	});

	$(".OM_tip .OM_close").click(function(){
		$(this).parents(".OM_tip").slideToggle();
	});	
});

