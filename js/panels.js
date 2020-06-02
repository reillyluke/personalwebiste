//jQuery for cards and accordion Sections

$(document).ready(function () {

  $(".hidden-card, .collapse-card").hide();

  var $exp = $(".expand-card");
  var $col = $(".collapse-card");

  for (var j = 0; j < $exp.length; ++j) {
    $exp.eq(j).click(function () {
      $(this).hide();
      $(this).prevUntil(".card-title").slideDown("slow");
    })
  }

  for (var k = 0; k < $col.length; ++k) {
    $col.eq(k).click(function () {
      $(this).hide()
      $(this).next().show();
      $(this).prev().slideUp("slow");
    })
  }

  var $acc = $(".accordion-item");

  for (var l = 0; l < $acc.length; ++l) {
    $(".mobile-panel").eq(l).html($(".panel-content").eq(1).html());
  }

  if ($(window).width() > 576) {

    for (var i = 0; i < $acc.length; ++i) {
      $acc.eq(i).click(function () {
        $acc.addClass("inactive");
        $(this).removeClass("inactive");

        for (var panelnum = 0; panelnum < $acc.length; ++panelnum) {
          if ($acc.eq(panelnum).hasClass("inactive") == false) {
            $(".panel").addClass("inactive");
            $(".panel").eq(panelnum).removeClass("inactive");
          }
        }
      })
    }
  }

  else {
    $acc.addClass("inactive");

    $acc.click(function () {
      $(this).next().slideToggle().css("border","thin solid #E0E0E0");
      $(this).toggleClass("inactive");
    })
  }
});
