$(document).ready(function() {
    var eventFired = false,
    objectPositionTop = $('#counter').offset().top;

    $(window).on('scroll', function() {
     var currentPosition = $(document).scrollTop();
     if (currentPosition > objectPositionTop && eventFired === false) {
       eventFired = true;
         $('.counter-count').each(function () {
                $(this).prop('Counter',0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 5000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
     }

    });
     })