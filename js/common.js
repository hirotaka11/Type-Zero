$(function(){

  // iphone statusBar Hidden
  function hideURLbar() { window.scrollTo(0,1); }
  addEventListener('load', function() { setTimeout(hideURLbar, 100); }, false );

  // global Accordion Menu
  var menuBtn = $("#menuBtn");
  var menuBox = $("#menuBox");
  menuBox.hide();
  menuBtn.click(function(){
    menuBox.slideUp();
    if($(menuBox).css("display")=="none"){
      $(menuBox).slideDown();
    }
  });

  var menuClose = $("#menuClose");
  menuClose.click(function(){
    menuBox.slideUp();
  });

  // touchHover -> touchstart change script when touch btn.
  $(".touchHover").bind('touchstart',function(){
    $(this).addClass("touchstart");
  });
  $(".touchHover").bind('touchend',function(){
    $(this).removeClass("touchstart");
  });
});

