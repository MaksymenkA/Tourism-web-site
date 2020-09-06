$(document).ready(function () {
  $("#owl-gallery").owlCarousel({
    responsiveClass: true,
    stagePadding: 23,
    margin: 25,
    loop: true,
    responsive: {
      150: {
        items: 1,
      },
      250: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1200: {
        items: 4,
      }
    }
  });
});

$(document).ready(function () {
  $("#opinion-carousel").owlCarousel({
    responsiveClass: true,
    stagePadding: 23,
    margin: 25,
    loop: true,
    autoplay: true,
    animateIn: 'fadeIn',
    items: 1
  });
});


