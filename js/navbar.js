//Changes the CSS class of the navbar when the page is scrolled and adds smooth scroll to seemore button


$(document).ready(function(){
  $(document).scroll(function() {
      var $nav = $(".navbar, .fixed-top, .nav-link");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  })

  $("#seemore").click(function() {
      $('html,body').animate({
          scrollTop: $("#profstate").offset().top},"slow");
  });
});
