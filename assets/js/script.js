$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 60) {
      $(".scroll-effect").css("background", "white");
      $(".scroll-effect h1").css("color", "black");
    } else {
      $(".scroll-effect").css("background", "grey");
    }
  });
});

/* Make nav sticky*/
$(document).ready(function () {
  $(window).scroll(function () {
    //if you hard code, then use console
    //.log to determine when you want the
    //nav bar to stick.
    console.log($(window).scrollTop());
    if ($(window).scrollTop() > 280) {
      $("#fullnavmenu").addClass("navbar-fixed");
    }
    if ($(window).scrollTop() < 281) {
      $("#fullnavmenu").removeClass("navbar-fixed");
    }
  });
});
