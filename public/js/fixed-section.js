$(function() {
    var headerHeight = $('.header').height();
    $(".fixed-scroll-area").stick_in_parent({
        offset_top: headerHeight
    })
});

$('.fixed-scroll-area a[href*="#"]').on("click", function(e) {
    e.preventDefault();
    var t = $(this).attr("href");
    var headerHeight = $('.header').height();
    return $("html, body").stop().animate({
        scrollTop: $(t).offset().top - headerHeight
    }, 600), !1
})

$(window).scroll(function() {
    var halfwindowHeight = $(window).height()/2;
    var t = $(window).scrollTop() - halfwindowHeight;
    $(".fixed-right-item").each(function(e) {
        $(this).position().top <= t && (
            $(".fixed-scroll-area a.active").removeClass("active"), 
            $(".fixed-scroll-area a").eq(e).addClass("active")
        )
    })
})

$(document).ready(function(){
     $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#back-to-top').click(function () {
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 2500);
            return false;
        });
        
        $('#back-to-top').tooltip('show');

});