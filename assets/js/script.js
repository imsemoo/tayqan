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
});
