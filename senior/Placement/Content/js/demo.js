(function ($) { 
	var searchParams = new URLSearchParams(document.location.search);  
	
	var pathName = document.location.pathname;
	let fileName = pathName.substring(pathName.lastIndexOf('/') + 1); 		
	
	var logState = false; 
    if ( searchParams.has('uid') ){
		logState = true;		
	} 
	
	//已登入
	if( logState === true){ 
		//所有連結都加searchParams
		
		//header
		$('.nav-login, .nav-register').hide(); 
		$('.nav-logout, .nav-user').show(); 
	} 
	//未登入
	else{ 
		//header
		$('.nav-login, .nav-register').show();
		$('.nav-logout, .nav-user').hide(); 
	}
})(jQuery);