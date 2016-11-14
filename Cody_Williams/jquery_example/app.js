$(function(){
	$('.greeting').click(
		function(){
			$('.greeting').hide();
			$('.main-body').show()
		}
	);
	$('.side-nav-link').click(
		function(){
			var article = $(this).attr('div-ref');
			$('.main-content').hide();
			$(article).css(
				'display',
				'inline-block'
			);
		}
	);
})
