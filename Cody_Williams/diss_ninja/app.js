$(document).ready(function(){
	$('img').click(function(){
		$(this).fadeOut('slow');
	})
	$('button').click(function(){
		$('img').show();
	})
})