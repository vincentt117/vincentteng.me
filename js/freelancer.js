// Freelancer Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Floating label headings for the contact form
    $(function() {
        $("body").on("input propertychange", ".floating-label-form-group", function(e) {
            $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
        }).on("focus", ".floating-label-form-group", function() {
            $(this).addClass("floating-label-form-group-with-focus");
        }).on("blur", ".floating-label-form-group", function() {
            $(this).removeClass("floating-label-form-group-with-focus");
        });
    });

})(jQuery); // End of use strict

jQuery(function($){
  $('.brickfolio').brickfolio({
        animation: 'fly', // drop|fade-in|flip|fly|pop-up|scale-up|slide-up|swing-down
        filter: '.ignore-item', // a selector used to filter out items
        gutter: 40, // number in pixels of the gutter between items
        responseTime: 200, // number in milliseconds before the layout is redrawn after the window resizes
        hideErrors: false, // automatically hides items where the image fails to load
        classes: {
            container: 'brickfolio', // class added to the container
            loaded: 'bf-loaded', // class added to the container once items are loaded
            animated: 'bf-animated', // class added to the container to indicate animations are supported and being used
            item: 'bf-item', // class added to items within the container
            error: 'bf-error', // class added to items that have broken images
            filtered: 'bf-filtered' // class added to filtered items
        }
    });
});

