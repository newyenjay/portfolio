jQuery(window).ready(function($) {


    // hide .navbar first
    $(".navbar").hide();



    // fade in .navbar
    $(function navbar() {
        $(window).scroll(function() {
            // set distance user needs to scroll before we fadeIn navbar

            if ($(this).scrollTop() > 200) {
                $('#firstNav').fadeOut();
                $('.navbar').fadeIn();
            } else {
                $('#firstNav').fadeIn();
                $('.navbar').fadeOut();
            }

        });


    }); //function navbar

    $(".navbar-xs li a").click(function(event) {
    if (!$(this).parent().hasClass('dropdown'))
        $(".navbar-collapse").collapse('hide');
});



    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

}(jQuery));
