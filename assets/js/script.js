$(document).ready(function () {



  // Cache the loader element and a flag to prevent double-hide
  var $loader = $('#preloadr');
  var isHidden = false;

  /**
   * Fade out the loader, only once.
   */
  function hideLoader() {
    if (isHidden) return;
    isHidden = true;
    $loader.fadeOut(500);
  }

  // Hide loader when all assets finish loading
  $(window).on('load', hideLoader);

  // Fallback: ensure loader is hidden after 5 seconds max
  setTimeout(hideLoader, 5000);


  $('.breaking-news__carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    rtl: true,
    navText: [
      '<i class="fas fa-chevron-right"></i>',
      '<i class="fas fa-chevron-left"></i>'
    ],
    autoplay: true,             // enable autoplay
    autoplayTimeout: 2000,      // delay between slides (in ms)
    autoplayHoverPause: true,   // pause on hover

    smartSpeed: 600,            // slide transition speed (ms)
    autoplaySpeed: 600,         // autoplay animation speed (ms)
    fluidSpeed: 600,            // speed when dragging (ms)

    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 }
    }
  });

  $('#back-blog-slider').owlCarousel({
    loop: true,
    items: 3,
    rtl: true,

    margin: 20,
    autoplay: false,
    slideSpeed: 300,
    nav: false,
    dots: false,
    center: false,
    responsive: {
      0: {
        items: 1,
        center: false,
      },
      575: {
        items: 1,
        center: false,
      },
      767: {
        items: 2,
        center: false,
      },
      1200: {
        items: 3,
      },
    }
  })
  $('.team-carousel').owlCarousel({
    loop: true,
    rtl: true,
    margin: 24,
    nav: true,
    dots: false,
    navText: [
      '<i class="fas fa-chevron-right"></i>',
      '<i class="fas fa-chevron-left"></i>'
    ],
    responsive: {
      0: { items: 1 },
      576: { items: 2 },
      768: { items: 3 },
      992: { items: 4 }
    }
  });



});
