$(function(){
	$('#dojo_button').data('arena', 'http://cache.lego.com/upload/contentTemplating/NinjagoUniverseCharactersCharacters/images/pic28E4327285EC11459982000350E0BCC9.jpg');
	
	$('#beach_button').data('arena', 'http://wallpapers.style/images/beach-scenes-wallpaper/beach-scenes-wallpaper-5.jpg')

	$('.black_ninja').data('ninja', 'https://image.spreadshirtmedia.com/image-server/v1/designs/10131274,width=178,height=178/black-ninja.png')

	$('.yellow_ninja').data('ninja', 'https://s.wpapp.ninja/wp-content/uploads/2016/04/Ninja_Smartphone1000.png')

	$('#dojo td').click(function(){
		var img_html = $(this).data('arena');
		$('body').css('background', 'url(' + img_html + ')')
		$('body').css('background-size', 'cover');
	})

	$('#dojo a').click(function(){
		$('#dojo').hide();
		$('#ninja').show();
		return false;
	})

	$('select').change(function(){
		var img_html;
		var value = $(this).val();
		if(value == "Yellow Ninja"){
			img_html = $('.yellow_ninja').data('ninja');
		} else {
			img_html = $('.black_ninja').data('ninja');
		}
		var id = $(this).attr('id');
		if( id == 'left_select'){
			$('#playerOne').attr('src', img_html).show();
		} else{
			$('#playerTwo').attr('src', img_html).show();
		}
	})
})
