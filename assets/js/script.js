/* ==========================================================================
   TIQEN THEME — JS
   - Clean, organized, and responsive
   - English comments only
   - Desktop UI preserved
   - SEO/accessibility-minded tweaks
   - Performance-safe patterns
========================================================================== */
(function ($, window, document) {
  'use strict';

  // -----------------------------
  // 0) Feature flags & helpers
  // -----------------------------
  const hasOwl = typeof $.fn.owlCarousel === 'function';
  const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches === true;

  const $win = $(window);
  const $doc = $(document);

  // Cache DOM nodes used more than once
  const $loader = $('#preloadr');
  const $breakingCarousel = $('.breaking-news__carousel');
  const $relatedCarousel = $('#back-blog-slider');
  const $teamCarousel = $('.team-carousel');

  // Reusable nav icons (RTL)
  const owlNavText = [
    '<i class="fas fa-chevron-right" aria-hidden="true"></i>',
    '<i class="fas fa-chevron-left" aria-hidden="true"></i>'
  ];

  // -----------------------------
  // 1) Loader: fade out safely, once
  // -----------------------------
  let loaderHidden = false;

  function hideLoader() {
    if (loaderHidden) return;
    loaderHidden = true;
    // Fade out only if present in DOM
    if ($loader.length) $loader.fadeOut(500);
  }

  // Hide when all assets finish loading (fires on cache too)
  $win.one('load', hideLoader);

  // Fallback: ensure loader is hidden after max 5 seconds
  setTimeout(hideLoader, 5000);

  // Extra safety: hide when page becomes hidden (bfcache / instant nav)
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden') hideLoader();
  });


  (function ($, window, document) {
    'use strict';
    const $win = $(window);
    const $nav = $('.tiqen-navbar');
    function onScroll() { ($win.scrollTop() > 4) ? $nav.addClass('is-scrolled') : $nav.removeClass('is-scrolled'); }
    $win.on('scroll', onScroll); onScroll();
  })(jQuery, window, document);

  // -----------------------------
  // 2) Carousels (guarded init)
  // -----------------------------
  function initCarousels() {
    if (!hasOwl) return;

    // Breaking news
    if ($breakingCarousel.length) {
      $breakingCarousel.owlCarousel({
        rtl: true,
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        navText: owlNavText,
        // Respect reduced motion
        autoplay: !prefersReducedMotion,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        smartSpeed: prefersReducedMotion ? 0 : 600,
        autoplaySpeed: prefersReducedMotion ? 0 : 600,
        fluidSpeed: prefersReducedMotion ? 0 : 600,
        responsive: {
          0: { items: 1 },
          600: { items: 2 },
          1000: { items: 3 }
        }
      });
    }

    // Related posts slider
    if ($relatedCarousel.length) {
      $relatedCarousel.owlCarousel({
        rtl: true,
        loop: true,
        margin: 20,
        nav: false,
        dots: false,
        center: false,
        autoplay: false, // keep manual to preserve desktop UX
        smartSpeed: prefersReducedMotion ? 0 : 300,
        responsive: {
          0: { items: 1, center: false },
          575: { items: 1, center: false },
          767: { items: 2, center: false },
          1200: { items: 3 }
        }
      });
    }

    // Team carousel
    if ($teamCarousel.length) {
      $teamCarousel.owlCarousel({
        rtl: true,
        loop: true,
        margin: 24,
        nav: true,
        dots: false,
        navText: owlNavText,
        smartSpeed: prefersReducedMotion ? 0 : 400,
        responsive: {
          0: { items: 1 },
          576: { items: 2 },
          768: { items: 3 },
          992: { items: 4 }
        }
      });
    }
  }

  // -----------------------------
  // 3) Accessibility / UX niceties
  // -----------------------------
  function enhanceA11y() {
    // Add aria-live to breaking news so screen readers are informed when slides change
    if ($breakingCarousel.length) {
      $breakingCarousel.attr({
        'role': 'region',
        'aria-label': 'Breaking news carousel',
        'aria-live': prefersReducedMotion ? 'off' : 'polite'
      });
    }

    // Add keyboard focusability to Owl nav buttons once rendered
    // (Owl injects buttons after init)
    $doc.on('initialized.owl.carousel', function (e) {
      const $stage = $(e.target);
      $stage.find('.owl-prev, .owl-next')
        .attr({ 'tabindex': '0', 'role': 'button' });
    });
  }

  // -----------------------------
  // 4) Contributors dropdown on touch
  //    - Keep desktop hover behavior intact
  // -----------------------------
  function enableTouchContributors() {
    const isTouch = ('ontouchstart' in window) || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    if (!isTouch) return;

    // Toggle an "expanded" class on tap to show the dropdown
    // Requires CSS rule:
    // .contributors__item.expanded .contributors__dropdown { display: flex; }
    $(document).on('click', '.contributors__item', function (e) {
      const $t = $(e.target);
      // Allow anchor clicks to follow links
      if ($t.is('a') || $t.closest('a').length) return;

      e.preventDefault();
      const $item = $(this);
      $item.toggleClass('expanded')
        .siblings('.contributors__item').removeClass('expanded');
    });

    // Close expanded dropdowns on outside tap
    $(document).on('click', function (e) {
      const $t = $(e.target);
      if (!$t.closest('.contributors__item').length) {
        $('.contributors__item.expanded').removeClass('expanded');
      }
    });
  }

  // -----------------------------
  // 5) Init
  // -----------------------------
  $doc.ready(function () {
    enhanceA11y();
    initCarousels();
    enableTouchContributors();
  });

})(jQuery, window, document);
