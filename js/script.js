jQuery(function ($) {
	'use strict';

	/* ----------------------------------------------------------- */
	/*  Fixed header
	/* ----------------------------------------------------------- */
	$(window).on('scroll', function () {

		// fixedHeader on scroll
		function fixedHeader() {
			var headerTopBar = $('.top-bar').outerHeight();
			var headerOneTopSpace = $('.header-one .logo-area').outerHeight();

			var headerOneELement = $('.header-one .site-navigation');
			var headerTwoELement = $('.header-two .site-navigation');

			if ($(window).scrollTop() > headerTopBar + headerOneTopSpace) {
				$(headerOneELement).addClass('navbar-fixed');
				$('.header-one').css('margin-bottom', headerOneELement.outerHeight());
			} else {
				$(headerOneELement).removeClass('navbar-fixed');
				$('.header-one').css('margin-bottom', 0);
			}
			if ($(window).scrollTop() > headerTopBar) {
				$(headerTwoELement).addClass('navbar-fixed');
				$('.header-two').css('margin-bottom', headerTwoELement.outerHeight());
			} else {
				$(headerTwoELement).removeClass('navbar-fixed');
				$('.header-two').css('margin-bottom', 0);
			}
		}
		fixedHeader();


		// Count Up
		function counter() {
			var oTop;
			if ($('.counterUp').length !== 0) {
				oTop = $('.counterUp').offset().top - window.innerHeight;
			}
			if ($(window).scrollTop() > oTop) {
				$('.counterUp').each(function () {
					var $this = $(this),
						countTo = $this.attr('data-count');
					$({
						countNum: $this.text()
					}).animate({
						countNum: countTo
					}, {
						duration: 1000,
						easing: 'swing',
						step: function () {
							$this.text(Math.floor(this.countNum));
						},
						complete: function () {
							$this.text(this.countNum);
						}
					});
				});
			}
		}
		counter();


		// scroll to top btn show/hide
		function scrollTopBtn() {
			var scrollToTop = $('#back-to-top'),
				scroll = $(window).scrollTop();
			if (scroll >= 50) {
				scrollToTop.fadeIn();
			} else {
				scrollToTop.fadeOut();
			}
		}
		scrollTopBtn();
	});


	$(document).ready(function () {

		$(document).ready(function () {
			const products = [
				{ name: "Ford Explorer 2012 XLT", link: "/AutosJireh/FordExplorer2012XLT.html" },
				{ name: "Ford Escape 2012 Limited Negro", link: "/AutosJireh/Ford2012Lim.html" },
				{ name: "Ford Escape 2014 Titanium Azul", link: "/AutosJireh/Ford2014Tita.html" },
				{ name: "Ford Escape 2016 S", link: "/AutosJireh/Ford2016S.html" },
        		{ name: "Ford Escape 2012 Limited Rojo", link: "/AutosJireh/Ford2012Lim2.html" },
        		{ name: "Ford Escape 2018 S", link: "/AutosJireh/Ford2018s.html" },
        		{ name: "Ford Escape 2012 Limited Negro Oscuro", link: "/AutosJireh/Ford2012Lim3.html" },
        		{ name: "Ford Escape 2012 XLT", link: "/AutosJireh/Ford2012XLT.html" },
        		{ name: "Ford Escape 2011 Limited Sport", link: "/AutosJireh/Ford2011LIMSP.html" },
       			{ name: "Ford Escape 2008", link: "/AutosJireh/Ford2008.html" },
        		{ name: "Ford Escape 2017 S", link: "/AutosJireh/Ford2017S.html" },
        		{ name: "Ford Escape 2019 S", link: "/AutosJireh/Ford2019S.html" },
        		{ name: "Ford Escape 2016 Titanium", link: "/AutosJireh/Ford2016tita.html" },
        		{ name: "Ford Escape 2014 Titanium Rojo", link: "/AutosJireh/Ford2014tita2.html" },
				{ name: "Ford Escape 2014 Titanium Plateado", link: "/AutosJireh/Ford2014tita3.html" },
        		{ name: "Ford Escape 2012 Limited Plateado", link: "/AutosJireh/Ford2012Limp.html" },
        		{ name: "Toyota Corolla 2004", link: "/AutosJireh/ToyotaC2004.html" },
        		{ name: "Toyota Corolla 2007", link: "/AutosJireh/ToyotaC2007.html" },
        		{ name: "Toyota Hilux 2.5", link: "/AutosJireh/ToyotaHilux.html" },
        		{ name: "Toyota Corolla 2010 S", link: "/AutosJireh/ToyotaC2010S.html" },
        		{ name: "Toyota Corolla 2009 S", link: "/AutosJireh/ToyotaC2009S.html" },
        		{ name: "Hyundai Elantra 2012 GLS", link: "/AutosJireh/HyundaiE2012GLS.html" },
        		{ name: "Hyundai Elantra 2013 Limited", link: "/AutosJireh/HyundaiE2013L.html" },
        		{ name: "Hyundai Porter II 2015", link: "/AutosJireh/HyundaiP2015.html" },
        		{ name: "Kia Sorento 2011 SX", link: "/AutosJireh/KiaS2011SX.html" },
        		{ name: "Kia Sorento 2011 LX", link: "/AutosJireh/KiaS2011LX.html" },
        		{ name: "Kia Sorento 2015 LX", link: "/AutosJireh/KiaS2015LX.html" },
        		{ name: "Chevrolet Colorado 2021", link: "/AutosJireh/Chevroletcolorado2021.html" },
        		{ name: "Honda CRV 2013 EX", link: "/AutosJireh/HondaCRV2013.html" },
        		{ name: "Honda CRV 2016 SE", link: "/AutosJireh/HondaCRV2016.html" },
        		{ name: "Honda CRV LX 2014", link: "/AutosJireh/HondaCRV2014.html" }
				// Agrega el resto de productos aquí...
			];
		
 // Mostrar la barra de búsqueda
  // Mostrar la barra de búsqueda
  $('.nav-search').on('click', function () {
    $('.search-block').fadeIn(200);
  });

  // Ocultar la barra de búsqueda
  $('.search-close').on('click', function () {
    $('.search-block').fadeOut(200);
  });

  // Debounce para optimizar la entrada de texto
  let debounceTimer;
  $('#search-field').on('input', function () {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(function() {
      const query = $('#search-field').val().toLowerCase();
      const suggestionsList = $('#suggestions-list');
      suggestionsList.empty();

      if (query !== '') {
        const suggestions = products.filter(product => product.name.toLowerCase().includes(query)).slice(0, 10);

        suggestions.forEach(product => {
          suggestionsList.append(`<li class="list-group-item suggestion-item" data-link="${product.link}">${product.name}</li>`);
        });

        // Mostrar lista de sugerencias
        if (suggestions.length > 0) {
          suggestionsList.fadeIn(200);
        } else {
          suggestionsList.fadeOut(200);
        }
      } else {
        // Ocultar lista de sugerencias si el campo está vacío
        suggestionsList.fadeOut(200);
      }
    }, 300); // Cambia el valor según sea necesario
  });

  // Redirigir cuando se selecciona una sugerencia
  $(document).on('click', '.suggestion-item', function () {
    const link = $(this).data('link');
    window.location.href = link; // Redirigir a la página del producto
  });

 
});

		// navSearch show/hide
        function navSearch() {
            $('.nav-search').on('click', function () {
                $('.search-block').fadeIn(350);
            });
            $('.search-close').on('click', function () {
                $('.search-block').fadeOut(350);
            });
        }
        navSearch();

        // navbarDropdown
        function navbarDropdown() {
            if ($(window).width() < 992) {
                $('.site-navigation .dropdown-toggle').on('click', function () {
                    $(this).siblings('.dropdown-menu').animate({
                        height: 'toggle'
                    }, 300);
                });

                var navbarHeight = $('.site-navigation').outerHeight();
                $('.site-navigation .navbar-collapse').css('max-height', 'calc(100vh - ' + navbarHeight + 'px)');
            }
        }
		navbarDropdown();


		// back to top
		function backToTop() {
			$('#back-to-top').on('click', function () {
				$('#back-to-top').tooltip('hide');
				$('body,html').animate({
					scrollTop: 0
				}, 800);
				return false;
			});
		}
		backToTop();


		// banner-carousel
		function bannerCarouselOne() {
			$('.banner-carousel.banner-carousel-1').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				dots: true,
				speed: 600,
				arrows: true,
				prevArrow: '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
				nextArrow: '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>'
			});
			$('.banner-carousel.banner-carousel-1').slickAnimation();
		}
		bannerCarouselOne();


		// banner Carousel Two
		function bannerCarouselTwo() {
			$('.banner-carousel.banner-carousel-2').slick({
				fade: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				dots: false,
				speed: 600,
				arrows: true,
				prevArrow: '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
				nextArrow: '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>'
			});
		}
		bannerCarouselTwo();


		// pageSlider
		function pageSlider() {
			$('.page-slider').slick({
				fade: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				dots: false,
				speed: 600,
				arrows: true,
				prevArrow: '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
				nextArrow: '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>'
			});
		}
		pageSlider();


		// Shuffle js filter and masonry
		function projectShuffle() {
			if ($('.shuffle-wrapper').length !== 0) {
				var Shuffle = window.Shuffle;
				var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
					itemSelector: '.shuffle-item',
					sizer: '.shuffle-sizer',
					buffer: 1
				});
				$('input[name="shuffle-filter"]').on('change', function (evt) {
					var input = evt.currentTarget;
					if (input.checked) {
						myShuffle.filter(input.value);
					}
				});
				$('.shuffle-btn-group label').on('click', function () {
					$('.shuffle-btn-group label').removeClass('active');
					$(this).addClass('active');
				});
			}
		}
		projectShuffle();


		// testimonial carousel
		function testimonialCarousel() {
			$('.testimonial-slide').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
				speed: 600,
				arrows: false
			});
		}
		testimonialCarousel();


		// team carousel
		function teamCarousel() {
			$('.team-slide').slick({
				dots: false,
				infinite: false,
				speed: 300,
				slidesToShow: 4,
				slidesToScroll: 2,
				arrows: true,
				prevArrow: '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
				nextArrow: '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>',
				responsive: [{
						breakpoint: 992,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 3
						}
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2
						}
					},
					{
						breakpoint: 481,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					}
				]
			});
		}
		teamCarousel();


		// media popup
		function mediaPopup() {
			$('.gallery-popup').colorbox({
				rel: 'gallery-popup',
				transition: 'slideshow',
				innerHeight: '500'
			});
			$('.popup').colorbox({
				iframe: true,
				innerWidth: 600,
				innerHeight: 400
			});
		}
		mediaPopup();

	});


});