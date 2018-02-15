(function($){
 	    $.fn.modalWindow = function(prop){
 		let options = $.extend({
			height : '380',
			width : '500',
			title: 'The session time has expired for further work, go through the authorization',
			top: '20%',
			left: '30%',
		}, prop);
				
		function init() {
			addBlockPage();
			addModalWindow();
			addOptionsStyles();
			$('.modal_window').fadeIn();
		};
		
		function addOptionsStyles(){			
			$('.modal__window').css({ 
				'left':options.left,
                'top':options.top,
                'display': 'block',
				'height': options.height + 'px',
				'width': options.width + 'px',
			});
			let pageHeight = $(document).height();
			let pageWidth = $(window).width();
 
			$('.modal__block').css({
				'height':pageHeight,
				'width':pageWidth,
			});
			$('.modal__inner').css({
				'height':(options.height - 50) + 'px',
				'width':(options.width - 50) + 'px',
			});
		}
		
		function addBlockPage(){
			let block_page = $('<div class="modal__block"></div>');	
			$(block_page).appendTo('body');
		}
		
		function error() {
			window.location.href = 'autorization.html';
		}
		 
		function addModalWindow(){
            let window = $('<div class="modal__window"><a href="#" class="modal__close"></a><div class="modal__inner"><h2>' 
                + options.title + '</h2></div></div>');
			$(window).appendTo('.modal__block');
			 			 
			$('.modal__close').click(function(){
			    $(this).parent().fadeOut().remove();
                $('.modal__block').fadeOut().remove();
				document.cookie = `user=''; path=/; expires=${new Date(0)};`;
				error();
			});
		}
		return init();
	};
})(jQuery);
