$(document).ready(function () {

  $(".dropdown").click(function (e) {
    $(".dropdown-list").slideToggle();
  });

  $("body").click(function(e) {
    if (!$(e.target).parent().hasClass("dropdown")) {
      $(".dropdown-list").slideUp();
    }
  });

  $(window).scroll(function() {
    const height = $(window).scrollTop();
    console.log(height);
    if (height > 600) {
          $('.top').show();
      } else {
          $('.top').hide();
      }
    });

  $(".top").click(function (e) {
    $("html").animate({
      scrollTop: 0
    }, 400);
  });

  new Swiper('.swiper', {
    speed: 400,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    autoplay: {
      delay: 4000,
    },
  });
  
  lightbox.option({
    'resizeDuration': 200,
    'positionFromTop': 250,
  })
  

});