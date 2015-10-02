$(document).ready(function() {

    //Цели для Яндекс.Метрики и Google Analytics
    $(".count_element").on("click", (function() {
        ga("send", "event", "goal", "goal");
        yaCounterXXXXXXXX.reachGoal("goal");
        return true;
    }));

    //BxSlider
    $('#slider1').bxSlider({
        mode: 'vertical',
        slideMargin: 0,
        responsive: false,
        pager: false,
        auto: true,
        pause: 6000,
        autoDelay: 600,
        nextSelector: '#slider-next',
        prevSelector: '#slider-prev',
        nextText: '<div class="slider_next"></div>',
        prevText: '<div class="slider_prev"></div>'
    });
    
    $('.slider').bxSlider({
        slideWidth: 260,
        adaptiveHeight: true,
        minSlides: 3,
        maxSlides: 3,
        moveSlides: 1,
        slideMargin: 36,
        pager: false,
        auto: true
    });

    //SVG Fallback
    if (!Modernizr.svg) {
        $("img[src*='svg']").attr("src", function() {
            return $(this).attr("src").replace(".svg", ".png");
        });
    };

    //Аякс отправка форм
    //Документация: http://api.jquery.com/jquery.ajax/
    $("#form").submit(function() {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function() {
            alert("Спасибо за заявку!");
            setTimeout(function() {

                $("#form").trigger("reset");
            }, 1000);
        });
        return false;
    });

    //Footer
    if ($(document).height() <= $(window).height())
        $("footer").addClass("navbar-fixed-bottom");

    //Chrome Smooth Scroll
    try {
        $.browserSelector();
        if ($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch (err) {

    };

    $("img, a").on("dragstart", function(event) {
        event.preventDefault();
    });

	(function() {

		[].slice.call( document.querySelectorAll( '.tabs' ) ).forEach( function( el ) {
			new CBPFWTabs( el );
		});

	})();


});
