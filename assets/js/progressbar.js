$(function () {
    var element = $(".bar-progress");
    $(window).scroll(function () {
      if($(window).scrollTop() > 0) {
        element.addClass("html");
      }
      
    });
  });