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
		if ( to_show == '#summary_graph') {
			/*highchart call*/
			performance_chart();
			$('#performance_graph').highcharts().yAxis[0].setExtremes(0, 100);
		}
		return false;
	});
	$('.js-month_year_wrap > li > a').click(function(){
		var to_show = $(this).attr('data-month-year');
		$('.calander_list_wrap > .calander').removeClass('show');
		$('.month_year_wrap > li').removeClass('active');
		$(this).closest('li').addClass('active');
		$('#'+to_show).addClass('show');
		$('.js-calander_wrap > h5').html(to_show);
		return false;
	});
});
	
/*highcharts starts*/
function performance_chart(){
	$('#performance_graph').highcharts({
	    title: {
	        text: 'Student Progress Graph',
	        x: -20 //center
	    },
	    subtitle: {
	        text: 'Source: G.Tech. pvt. ltd.',
	        x: -20
	    },
	    xAxis: {
	        categories: ['Apr-13', 'May-13', 'Jun-13','Jul-13', 'Aug-13', 'Sep-13', 'Oct-13', 'Nov-13', 'Dec-13', 'Jan-14', 'Feb-14', 'Mar-14']
	    },
	    yAxis: {
	        title: {
	            text: 'precentage / rank in class'
	        },
	        plotLines: [{
	            value: 0,
	            width: 1,
	            color: '#808080'
	        }]
	    },
	    tooltip: {
	        valueSuffix: '%'
	    },
	    legend: {
	        layout: 'vertical',
	        align: 'right',
	        verticalAlign: 'middle',
	        borderWidth: 2
	    },
	    series: [{
	        name: 'percentage',
	        data: [7.0, 6.9, 9.5, 14.5, 99.8, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
	    }, {
	        name: 'Rank',
	        data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
	    }]
	});
}
/*hicharts ends*/


$(document).on('click', 'selector', function(){
    
});