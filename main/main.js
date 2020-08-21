$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
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
        items: 4,
      },
      1200: {
        items: 5,
      }
    }
  });
});

function openMenu() {
  var x = document.getElementById("contacts");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
function openMainMenu() {
  var x = document.getElementById("mainNav");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
