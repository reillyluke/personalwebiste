//Changes the CSS class of the navbar when the page is scrolled and adds smooth scroll to seemore button


$(document).ready(function(){
  var $nav = $(".navbar, .fixed-top");
  
  if ($(window).width() > 576) {
    $(document).scroll(function() {
        $nav.toggleClass("scrolled navbar-light", $(this).scrollTop() > $nav.height());
        $nav.toggleClass("navbar-dark", $(this).scrollTop() < $nav.height());
      })
    }
  else {
    $nav.addClass("scrolled navbar-light").removeClass("navbar-dark");
  }

  $("#seemore").click(function() {
      $('html,body').animate({
          scrollTop: $("#profstate").offset().top},"slow");
  });
});
