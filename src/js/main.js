$(document).ready(function() {

  var sliderProduction = $("#production-carousel"),
      sliderPromo = $("#promo-carousel");

  sliderProduction.slick({
      centerMode: true,
      centerPadding: '20%',
      slidesToShow: 1,
      arrows: false
  });

  sliderPromo.slick({
    dots: true,
    arrows: false,
  });

  var getHeight = function(slider) {
    var sliderHeight = slider.height(),
        btnsContainer = slider.next(".carousel__container").find("button");
    btnsContainer.css("bottom", sliderHeight/2-26);
  }
  getHeight(sliderPromo);
  getHeight(sliderProduction);

  $(window).resize(function() {
    getHeight(sliderProduction);
    getHeight(sliderPromo);
  });

  $('.carousel__next').click(function(){
      sliderProduction.slick("slickNext");
      sliderPromo.slick("slickNext");
  });
  $('.carousel__prev').click(function(){
      sliderProduction.slick("slickPrev");
      sliderPromo.slick("slickPrev");
  });

  // input--focused
  $("#order-form").find("input")
    .on("focus", function() {
      $(this).prev("label").addClass("focused");
    });
  $("input").on("blur", function() {
    if ($(this).val().length == 0) {
      $(this).prev("label").removeClass("focused");
    }
  });

  $("#order-form").find("textarea")
    .on("focus", function() {
      $(this).prev("label").addClass("focused");
    });
  $("textarea").on("blur", function() {
    if ($(this).val().length == 0) {
      $(this).prev("label").removeClass("focused");
    }
  });

  function initialize(){
      var mapOptions = {
          center: new google.maps.LatLng(59.524010, 92.318756),
          zoom: 5,
          scrollwheel: false,
          mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  }
  google.maps.event.addDomListener(window, 'load', initialize);
});
