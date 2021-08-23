( function($) {
var shophovered = false;
var seminarshovered = false;


   $("#firstlow").on('touchstart', function(e) {
       seminarshovered = false;
       if (!shophovered) { e.preventDefault(); shophovered = true; }
   })

   $("#first100").on('touchstart', function(e) {
       seminarshovered = false;
       if (!shophovered) { e.preventDefault(); shophovered = true; }
   })

   $("#firsthome").on('touchstart', function(e) {
       seminarshovered = false;
       if (!shophovered) { e.preventDefault(); shophovered = true; }
   })

   $("#firstcoffee").on('touchstart', function(e) {
       seminarshovered = false;
       if (!shophovered) { e.preventDefault(); shophovered = true; }
   })
   })(jQuery);
