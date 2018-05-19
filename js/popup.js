jQuery(function($){
				$('#popup_choose').hide();
				$('#popup_shadow').hide();
                $('#popup_google').hide();
                $('#popup_yandex').hide();
				$(this).keydown(function(eventObject){
					if (eventObject.which == 27){
				        $('#popup_choose').fadeOut('slow');
						$('#popup_shadow').fadeOut('slow');
                        $('#popup_google').fadeOut('slow');
                        $('#popup_yandex').fadeOut('slow');
					}
				});
    
				$("#close-btn").click(function() {
						$('#popup_choose').fadeOut('slow');
						$('#popup_shadow').fadeOut('slow');
				});
    
                $("#close-btn-2").click(function() {
						$('#popup_google').fadeOut('slow');
						$('#popup_shadow').fadeOut('slow');
				});
    
                $("#close-btn-3").click(function() {
						$('#popup_yandex').fadeOut('slow');
						$('#popup_shadow').fadeOut('slow');
				});    
    
                $("#popup_shadow").click(function() {
						$('#popup_choose').fadeOut('slow');
						$('#popup_shadow').fadeOut('slow');
                        $('#popup_google').fadeOut('slow');
                        $('#popup_yandex').fadeOut('slow');
				});
				$(".show-btn").click(function() {
						$('#popup_choose').fadeTo(300,1);
						$('#popup_shadow').fadeIn('slow');
				});
                $("#google-btn").click(function() {
						$('#popup_choose').fadeOut('fast');
                        $('#popup_google').fadeTo(300,1);
				});
                $("#yandex-btn").click(function() {
						$('#popup_choose').fadeOut('fast');
                        $('#popup_yandex').fadeTo(300,1);
				});
			});