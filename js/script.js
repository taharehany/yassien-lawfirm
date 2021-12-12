$(document).ready(function () {
  "use strict";

  //show nav link underline 
  $(".nav-link").on("mouseleave", function () {
    $(this).addClass("change")
  });
  $(".nav-link").on("mousemove", function () {
    $(this).removeClass("change")
  });

  // fixed header
  $(window).scroll(function () {
    let scroll = $(window).scrollTop();

    if (scroll > 1) {
      $("header").addClass("fixed");
    } else {
      $("header").removeClass("fixed");
    }
  });

  //main slider owl
  $(".main-slider-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 1000000,
    items: 1,
    nav: false,
    dots: true,
    smartSpeed: 1000,
    // animateOut: "slideOutUp",
    // animateIn: "slideInDown",
    navText: ["<i class='bi bi-arrow-left'></i>", "<i class='bi bi-arrow-right'></i>"],
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true,
      },
      768: {
        items: 1,
        nav: true,
      },

      992: {
        items: 1,
      }
    }
  });

  //why slider owl
  $(".why-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    items: 4,
    nav: true,
    dots: false,
    rtl: true,
    smartSpeed: 2000,
    margin: 20,
    navText: ["<i class='bi bi-arrow-left'></i>", "<i class='bi bi-arrow-right'></i>"],
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true,
      },
      768: {
        items: 2,
      },

      992: {
        items: 3,
      },
      1200: {
        items: 3,
      }
    }
  });

  //clients slider owl
  $(".clients-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    items: 6,
    nav: false,
    dots: false,
    rtl: true,
    margin: 25,
    navText: ["<i class='bi bi-arrow-left'></i>", "<i class='bi bi-arrow-right'></i>"],
    responsive: {
      0: {
        items: 2,
      },
      575: {
        items: 3,
      },
      768: {
        items: 3,
      },

      992: {
        items: 6,
      }
    }
  });

  //blogs slider owl
  $(".blogs-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    items: 3,
    nav: false,
    dots: true,
    rtl: true,
    smartSpeed: 2000,
    margin: 20,
    navText: ["<i class='bi bi-arrow-left'></i>", "<i class='bi bi-arrow-right'></i>"],
    responsive: {
      0: {
        items: 1,
      },
      575: {
        items: 2,
      },
      768: {
        items: 3,
      },

      992: {
        items: 3,
      }
    }
  });

  //to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 500) {
      $("#toTop").fadeIn(100);
    } else {
      $("#toTop").fadeOut(100);
    }
  });

  $("#toTop").click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 0);
  });

  //validate form
  (function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    let forms = document.querySelectorAll(".needs-validation")

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener("submit", function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          } else {
            event.preventDefault()
          }
          form.classList.add("was-validated")
        }, false)
      })
  })();

  //store theme colors in local storage 
  if (!localStorage.getItem("main_color")) {
    $(":root").css("--main-color", "rgb(192, 159, 31)"); //#C09F1F 
  } else {
    $(":root").css("--main-color", localStorage.getItem("main_color"));
  }

  if (!localStorage.getItem("second_color")) {
    $(":root").css("--second-color", "rgb(11, 25, 66)"); //#0B1942
  } else {
    $(":root").css("--second-color", localStorage.getItem("second_color"));
  }

  if (!localStorage.getItem("dark_color")) {
    $(":root").css("--dark-color", "#0C0D0E");
  } else {
    $(":root").css("--dark-color", localStorage.getItem("dark_color"));
  }

  //lazyload images
  $("img").Lazy({
    scrollDirection: "vertical",
    effect: "fadeIn",
    visibleOnly: false,
  });
});

$(window).on("load", function () {
  $('.loader').delay(500).fadeOut(500);

  //wow animate
  wow = new WOW({
    boxClass: 'wow', // default
    animateClass: 'animated', // default
    offset: 0, // default
    mobile: false, // default
    live: true // default
  })
  // wow.init();

  //counter up
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
    offset: 50,
    beginAt: 100,
  });
});