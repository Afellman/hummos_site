
var header = $(".navbar-collapse");
var hero = $('#hero');

$(document).on("scroll", function (e) {
  // console.log($(this).scrollTop())

  if ($(this).scrollTop() > 190) {
    header.addClass("sticky");
    hero.css('margin-top', "86px")

  } else {
    header.removeClass("sticky");
    hero.css('margin-top', "0px")
  }
});