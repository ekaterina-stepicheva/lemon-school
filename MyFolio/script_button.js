$(document).ready(function() {
   $('.burger-button').click(function(){
     $('.burger-button').toggleClass('active');
     $('.burger-menu').slideToggle();
   });
});