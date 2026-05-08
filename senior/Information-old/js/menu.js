$(document).ready(function(){
	$(".sfqclick dt").click(function(){
		$(this).toggleClass("bottomIco").next("dd").slideToggle(300).siblings("dd").slideUp("slow");
		$(this).siblings("dt").removeClass("bottomIco");
	});
});