$(".navLink").click(function() {
   $('html, body').animate({scrollTop:$($.attr(this, 'link')).offset().top}, 1000);
   $('.navLink').update("VTFFF MONDE");
 });
