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

});
