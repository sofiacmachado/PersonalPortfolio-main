// Insert Navbar and Carousel

  $(".owl-carousel").owlCarousel();
  $("#topPage").append(
      `<nav id='navbar' class='mainPage navbar navbar-trans navbar-expand-md fixed-top header-transparent'>
          <div class='container'>
              <a class='portfolioName navbar-brand active' href='index.html' id='portfolioName'>Sofia Carneiro Machado</a>
              <button class='navbar-toggler collapsed' type='button' data-toggle='collapse' data-target='#navbarMenu' aria-controls='navbarMenu' aria-expanded='false' aria-label='Toggle navigation'>
              </button>
              <div id='navbarMenu' class='navbarMenu navbar-collapse collapse justify-content-end'>
                  <ul class='navbar-nav'>
                      <li class='nav-item'>
                      <a class='nav-link' href='#about'>About</a>
                      </li>
                      <li class='nav-item'>
                      <a class='nav-link' href='#resume'>Resume</a>
                      </li>
                      <li class='nav-item'>
                      <a class='nav-link' href='#portfolio'>Portfolio</a>
                      </li>
                      <li class='nav-item dropdown'>
                      <a id='navbarDropdown' class='nav-link dropdown' href='#' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                          <span>Services</span><i class='ml-2 fas fa-chevron-down'></i>
                      </a>
                      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                          <a class="dropdownMenu dropdown-item" href="#portfolio">Photography</a>
                          <a class="dropdownMenu dropdown-item" href="#portfolio">Video Editing</a>
                          <a class="dropdownMenu dropdown-item" href="#portfolio">Front-End Development</a>
                      </div>
                      </li>
                      <li class='nav-item'>
                      <a class='nav-link' href='#contact'>Contact</a>
                      </li>
                  </ul>
              </div>
          </div>

          <button class='navbar-toggler navbar-brand py-0 pr-0 pl-0 border-0 position-relative collapsed ' role='button' data-toggle='collapse' data-target='#collapseMenu' aria-controls='collapseMenu' aria-expanded='false' aria-label='Toggle navigation'>
          <i id='navbarIcon' class="fas fa-align-justify"></i>
          </button>
          <div class='collapse navbar-collapse pb-6 font-weight-light bg-white position-relative' id ='collapseMenu'>
              <form class= >
                  <div class ='form-group mb-4'>
                      <ul class='navbar-nav pt-4'>
                          <li class='nav-item'>
                              <a class='nav-link' href='#about'>About</a>
                          </li>
                          <li class='nav-item'>
                              <a class='nav-link' href='#resume'>Resume</a>
                          </li>
                          <li class='nav-item'>
                              <a class='nav-link' href='#portfolio'>Portfolio</a>
                          </li>
                          <label for="exampleFormControlSelect1"></label>
                          <select class="form-control mb-2" id="langDropdown">
                              <option>Photography</option>
                              <option>Video Editing</option>
                              <option>Web Development</option>
                              <option>Bookselling</option>
                          </select>
                          <li class='nav-item'>
                              <a class='nav-link' href='#contact'>Contact</a>
                          </li>
                      </ul>
                  </div>
               </form>
          </div>
    </nav>`
  );

(function($) {
  "use strict";

  var nav = $('nav');
  var navHeight = nav.outerHeight();

  $('.navbar-toggler').on('click', function() {
    if (!$('#mainNav').hasClass('navbar-reduce')) {
      $('#mainNav').addClass('navbar-reduce');
    }
  })

  // Preloader
  $(window).on('load', function() {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function() {
        $(this).remove();
      });
    }
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  /*--/ Star ScrollTop /--*/
  $('.scrolltop-mf').on("click", function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1000);
  });

  /*--/ Star Counter /--*/
  $('.counter').counterUp({
    delay: 15,
    time: 2000
  });

  /*--/ Star Scrolling nav /--*/
  var mainNav_height = $('#mainNav').outerHeight() - 22;
  $('a.js-scroll[href*="#"]:not([href="#"])').on("click", function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        var scrollto = target.offset().top - mainNav_height;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Scroll to sections on load with hash links
  if (window.location.hash) {
    var initial_nav = window.location.hash;
    if ($(initial_nav).length) {
      var scrollto_initial = $(initial_nav).offset().top - mainNav_height;
      $('html, body').animate({
        scrollTop: scrollto_initial
      }, 1000, "easeInOutExpo");
    }
  }

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll').on("click", function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: navHeight
  });
  /*--/ End Scrolling nav /--*/

  /*--/ Navbar Menu Reduce /--*/
  $(window).trigger('scroll');
  $(window).on('scroll', function() {
    var pixels = 50;
    var top = 1200;
    if ($(window).scrollTop() > pixels) {
      $('.navbar-expand-md').addClass('navbar-reduce');
      $('.navbar-expand-md').removeClass('navbar-trans');
    } else {
      if (!$('#navbarDefault').hasClass('show')) {
        $('.navbar-expand-md').removeClass('navbar-reduce');
      }
      $('.navbar-expand-md').addClass('navbar-trans');
    }
    if ($(window).scrollTop() > top) {
      $('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
    } else {
      $('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
    }
  });

  /*--/ Star Typed /--*/
  if ($('.text-slider').length == 1) {
    var typed_strings = $('.text-slider-items').text();
    var typed = new Typed('.text-slider', {
      strings: typed_strings.split(','),
      typeSpeed: 80,
      loop: true,
      backDelay: 1100,
      backSpeed: 30
    });
  }

  /*--/ Testimonials owl /--*/
  $('#testimonial-mf').owlCarousel({
    margin: 20,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      }
    }
  });

  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

  // Initiate venobox (lightbox feature used in portofilo)
  $(document).ready(function() {
    $('.venobox').venobox({
      'share': false
    });
  });

})(jQuery);