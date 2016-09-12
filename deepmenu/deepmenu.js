(function($){	
	$.fn.deepmenu = function(options) {
		var $nav, settings;
	    $nav = $(this);
	    settings = $.extend({
	    	'animationSpeed': 250,
	    	'mobileWidth': 960,
	    	'mobileToggler': '#menu-toggle',
	    	'subTogglers': '<i class="fa fa-plus"></i>'
	    }, options);
		$nav.find('li ul').hide();
		$nav.find('li a').each(function() {
			if ($(this).next().length > 0) {
				$(this).parent('li').append('<a class="dd_toggle">'+settings.subTogglers+'</a>');
			}
		});
		$(settings.mobileToggler).on('click', function(e) {
			e.preventDefault();
			$(settings.mobileToggler).toggleClass('active');
			$nav.toggleClass('active');
			// $nav.stop(true, true).slideToggle(settings.animationSpeed);
		});
		$nav.find('li .dd_toggle').on('click', function(e) {
			e.preventDefault();
			$(this).parent('li').toggleClass('hover');
			$(this).parent('li').children('ul').stop(true, true).slideToggle(settings.animationSpeed).toggleClass('expanded');
		});
		var resetTriggers = function() {
			$nav.find('li').unbind('mouseenter');
			$nav.find('li').unbind('mouseleave');
			$('.hover').removeClass('hover');
		}
		var setTriggers = function() {
			$nav.find('li').on('mouseenter', function(){
				$(this).children('ul').stop(true, true).slideDown(settings.animationSpeed);
			});
			$nav.find('li').on('mouseleave', function(){
				$(this).children('ul').stop(true, true).slideUp(settings.animationSpeed);
			});
		}
		sizeUp();
		function sizeUp() {
			if(window.outerWidth < settings.mobileWidth) {
				$nav.hide();
				resetTriggers();
			} else {
				$nav.show();
				if ($(settings.mobileToggler).hasClass('active')) {
					$(settings.mobileToggler).removeClass('active');
				}
				$('ul.expanded').removeClass('expanded').hide();
				resetTriggers();
				setTriggers();
			}
		}
		// window.onresize = function() {
		// 	sizeUp();
		// }
	}
}(jQuery));
