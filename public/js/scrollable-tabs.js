$(document).ready(function() {
    setScrollablePortfolio();
    $(window).on('resize', function() {
        setScrollablePortfolio();
    });
    
    function setScrollablePortfolio() {
		var tabsWidthTotal = $('.scrollable-tabs').find('ul').get(0).scrollWidth;
		var tabsWidth = $('.scrollable-tabs').find('ul').width();
        if (tabsWidthTotal > tabsWidth) {
			$('.scrollable-tabs').find('ul').addClass('scrollable-tabs-ul');
			$('.scrollable-tabs').find('ul').attr('id', 'scrollable-tabs-ul');
		} else {
            $('.scrollable-tabs').find('ul').removeClass('scrollable-tabs-ul');
			$('.scrollable-tabs').find('ul').attr('id', '');
        }
    }  
});

$(".next-portfolio").click(function() {
  	nextPortTab();
  	$(".scrollable-tabs-ul").scroll(function() {
  		checkPortPos();
  	});
});

$(".prev-portfolio").click(function() {
  	prevPortTab();
  	$(".scrollable-tabs-ul").scroll(function() {
  		checkPortPos();
  	});
});

function nextPortTab() {
	var scrollerWidth = $('.scrollable-tabs').width() - 120;
	document.getElementById('scrollable-tabs-ul').scrollBy(scrollerWidth, 0);
}

function prevPortTab() {
	var scrollerWidth = $('.scrollable-tabs').width() - 120;
	document.getElementById('scrollable-tabs-ul').scrollBy(-scrollerWidth, 0);
}

function checkPortPos() {
	nextCheck();
  	prevCheck();
}

function prevCheck() {
	var totalWidthTab = $('.scrollable-tabs-ul').get(0).scrollWidth - $('.scrollable-tabs-ul').width();
	var scrollLeftValue = $('.scrollable-tabs-ul').scrollLeft();
	if (scrollLeftValue == 0) {
		$(".prev-portfolio").css('visibility','hidden');
		$(".prev-portfolio").css('opacity','0');
	}
	else {
		$(".prev-portfolio").css('visibility','visible');
		$(".prev-portfolio").css('opacity','1');
	}
}

function nextCheck() {
	var totalWidthTab = $('.scrollable-tabs-ul').get(0).scrollWidth - $('.scrollable-tabs-ul').width();
	var scrollLeftValue = $('.scrollable-tabs-ul').scrollLeft();
	if (scrollLeftValue >= totalWidthTab) {
		$(".next-portfolio").css('visibility','hidden');
		$(".next-portfolio").css('opacity','0');
	}
	else {
		$(".next-portfolio").css('visibility','visible');
		$(".next-portfolio").css('opacity','1');
	}
}