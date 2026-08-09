/* ==========================================================================
   jQuery plugin settings and other scripts
   ========================================================================== */

$(document).ready(function(){
  // Sticky footer
  var bumpIt = function() {
      $("body").css("margin-bottom", $(".page__footer").outerHeight(true));
    },
    didResize = false;

  bumpIt();

  $(window).resize(function() {
    didResize = true;
  });
  setInterval(function() {
    if (didResize) {
      didResize = false;
      bumpIt();
    }
  }, 250);
  // FitVids init
  $("#main").fitVids();

  // init sticky sidebar
  $(".sticky").Stickyfill();

  var stickySideBar = function(){
    const MINIMUM_WIDTH = 1024;

    // Adjust if the follow button is shown based upon screen size
    var width = $(window).width();
    var show = $(".author__urls-wrapper button").length === 0 ? width > MINIMUM_WIDTH : !$(".author__urls-wrapper button").is(":visible");

    // Don't show the follow button if there is no content for it
    var count = $('.author__urls.social-icons li').length - $('li[class="author__desktop"]').length;
    if (width <= MINIMUM_WIDTH && count === 0) {
      $(".author__urls-wrapper button").hide();
      show = false;
    }

    if (show) {
      // fix
      Stickyfill.rebuild();
      Stickyfill.init();
      $(".author__urls").show();
    } else {
      // unfix
      Stickyfill.stop();
      $(".author__urls").hide();
    }
  };

  stickySideBar();

  $(window).resize(function(){
    stickySideBar();
  });

  // Follow menu drop down
  $(".author__urls-wrapper button").on("click", function() {
    $(".author__urls").fadeToggle("fast", function() {});
    $(".author__urls-wrapper button").toggleClass("open");
  });

  // init smooth scroll, this needs to be slightly more than then fixed masthead height
  $("a").smoothScroll({offset: -65});

  // add lightbox class to all image links
  $("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']").addClass("image-popup");

  // Magnific-Popup options
  $(".image-popup").magnificPopup({
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">Image #%curr%</a> could not be loaded.',
    },
    removalDelay: 500, // Delay in milliseconds before popup is removed
    // Class that is added to body when popup is open.
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: 'mfp-zoom-in',
    callbacks: {
      beforeOpen: function() {
        // just a hack that adds mfp-anim class to markup
        this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
      }
    },
    closeOnContentClick: true,
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  });

  // Publication tabs functionality
  var pubTabs = {
    init: function() {
      if ($('.pub-tabs').length === 0) return;

      // Tab button click handlers
      $('.pub-tabs__btn').on('click', function(e) {
        e.preventDefault();
        var tabId = $(this).data('tab');

        if (!tabId) return;

        // Update active tab button
        $('.pub-tabs__btn').removeClass('pub-tabs__btn--active');
        $(this).addClass('pub-tabs__btn--active');

        // Update active tab panel
        $('.pub-tab-panel').removeClass('pub-tab-panel--active');
        $('#' + tabId).addClass('pub-tab-panel--active');

        // Update mobile select
        if ($('#pub-tab-mobile').length) {
          $('#pub-tab-mobile').val(tabId);
        }

        // Scroll to top of content
        $('.pub-tabs__content').scrollIntoView({ behavior: 'smooth', block: 'start' });
      });

      // Mobile select change handler
      $('#pub-tab-mobile').on('change', function() {
        var tabId = $(this).val();
        if (!tabId) return;

        // Find the corresponding tab button and click it
        var $button = $('.pub-tabs__btn[data-tab="' + tabId + '"]');
        if ($button.length) {
          $button.click();
        }
      });
    }
  };

  // Initialize publication tabs
  pubTabs.init();

  // Scale up pub-badges dramatically using JavaScript
  var scalePubBadges = function() {
    if ($('.pub-badges img').length === 0) return;

    $('.pub-badges img').each(function() {
      var $img = $(this);
      $img.css({
        'height': '800px',
        'width': 'auto',
        'max-width': 'none',
        'transform': 'scale(20)',
        'transform-origin': 'top left',
        '-webkit-transform': 'scale(20)',
        '-webkit-transform-origin': 'top left'
      });
    });
  };

  // Scale badges after page load
  setTimeout(scalePubBadges, 500);

});
