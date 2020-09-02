import $ from 'jquery';
$(function() {
    var headerHeight = $('.header').height() + 40;
    $(".blog-fixed-bar").stick_in_parent({
        offset_top: headerHeight
    }).on("sticky_kit:bottom", function(e) {
        $(this).css('transform', 'translateY(0)');
    }).on("sticky_kit:stick", function(e) {
        $(this).css('transform', 'translateY(-20px)');
    }).on("sticky_kit:unstick", function(e) {
        $(this).css('transform', 'translateY(0)');
    }).on("sticky_kit:unbottom", function(e) {
        $(this).css('transform', 'translateY(-20px)');
    });
});