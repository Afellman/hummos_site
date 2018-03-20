
var header = $(".navbar-collapse");


$(document).on("scroll", function(e) {
  // console.log($(this).scrollTop())

  if ($(this).scrollTop() > 190) {
    header.addClass("sticky");


  } else {
    header.removeClass("sticky");

  }
  
});