( function($) {
if ($(window).width() > 799) $(function(){
    'use strict';

    var $page = $('#mainn'),
        options = {
            debug: false,
            prefetch: true,
            cacheLength: 15,
            forms: 'form',
            onStart: {
                duration: 250,
                render: function ($container) {
                    $container.addClass('is-exiting');
                    smoothState.restartCSSAnimations();
                }
            },
            onReady: {
                duration: 0,
                render: function ($container, $newContent) {
                    $container.removeClass('is-exiting');
                    $container.html($newContent);
                    loadPage(smoothState.href);
            }
        }
    },
    smoothState = $page.smoothState(options).data('smoothState');
});
})(jQuery);
