$(document).ready(function() {
	var to_scroll_menu_open = $('header').outerHeight() + $('.profile_wrap > .profile_main').outerHeight();

	$('.js-menu_toggle').click(function(){
		if(! $('.js-menu_items_content_wrap').is(':visible')){
			setTimeout(function(){
				$('html').scrollTop(to_scroll_menu_open);
			},200);
		}
		else {
			setTimeout(function(){
				$('html').scrollTop(0);
			},200);
		}
		$('.js-menu_open_hide').slideToggle();
		$('.js-menu_items_content_wrap').slideToggle();
		$('.main_menu_wrap').toggleClass('open');
		return false;
	});
	
	$('.js-main_menu > li > a').click(function(){
		$('html').scrollTop(to_scroll_menu_open);
		var to_show = $(this).attr('data-show');
		$('.js-menu_items_content_wrap > .menu_items_content').hide();
		$(to_show).show();
		$('.js-main_menu > li').removeClass('active');
		$(this).closest('li').addClass('active');
		if(! $('.js-menu_items_content_wrap').is(':visible')){
			$('.js-menu_open_hide').slideToggle();
			$('.js-menu_items_content_wrap').slideToggle();
			$('.main_menu_wrap').toggleClass('open');
		}
		return false;
	});
	$('.test_series_tabs_list > li > a').click(function(){
		var to_show = $(this).attr('data-show');
		$('.test_series_tabs_list > li').removeClass('active');
		$(this).closest('li').addClass('active');
		$('.subject_marks_Remarks_wrap').hide();
		$(to_show).show();
		return false;
	});

});

$(document).on('click', 'selector', function(){
    
});