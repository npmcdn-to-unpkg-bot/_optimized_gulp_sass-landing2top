$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	// pjax
	$(document).pjax("a", ".pjax-container");

	// superfish
	$(".sf-menu").superfish({
		delay: 200,
		speed: "fast",
		cssArrows: false
	})
	// мобильное меню
	.after("<div id='mobile-menu'>").clone().appendTo("#mobile-menu");
	$("#mobile-menu").find("*").attr("style", "");
	$("#mobile-menu ul").removeClass("sf-menu").removeClass("mnu")
	.parent().mmenu({
		extensions : [ 'widescreen', 'theme-white', 'effect-menu-slide', 'pagedim-black' ],
		navbar: {
			title: "Меню"
		}
	});

	// Индикатор активной секции
	$(".mnu")
	.after("<div id='section-indicator'>").clone().appendTo("#section-indicator");
	$("#section-indicator ul").removeClass("sf-menu", "sf-js-enabled", "mnu"),
	$("#section-indicator ul li").removeClass("hidden"),
	$("#section-indicator ul li div a").unwrap(),
	$("#section-indicator ul li a").unwrap(),
	$("#section-indicator ul a").empty().removeClass("elem"),
	$("#section-indicator ul a[href^='/']").remove(),
	$("#section-indicator ul a").wrap("<li>"),
	$("#section-indicator ul li:first").attr({class: 'active'})
	

	// toggle-mnu
	$(".toggle-mnu").click(function() {
		$(this).addClass("on");
	});

	var api = $("#mobile-menu").data("mmenu");
	api.bind("closed", function () {
		$(".toggle-mnu").removeClass("on");
	});

	// Выделение активного меню
	jQuery(window).scroll(function(){
		var $sections = $('.section, .header');
		$sections.each(function(i,el){
			var top  = $(el).offset().top-200;
			var bottom = top +$(el).height();
			var scroll = $(window).scrollTop();
			var id = $(el).attr('id');
			if( scroll > top && scroll < bottom){
				$('li.active').removeClass('active');
				$('a.active').removeClass('active');
				$('a[href="#'+id+'"]').parent('li').addClass('active');
				$('a[href="#'+id+'"]').addClass('active');

			}
		})
	});

	// Плавная прокрутка
	$(".mnu, #section-indicator").on("click","a[href^='#']", function (event) {
		// исключаем стандартную реакцию браузера
		event.preventDefault();

		// получем идентификатор блока из атрибута href
		var id  = $(this).attr('href'),

		// находим высоту, на которой расположен блок
		top = $(id).offset().top;

		// анимируем переход к блоку, время: 800 мс
		$('body,html').animate({scrollTop: top}, 800);
	});

	// popup videos
	$('.popup-youtube').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

	var $container = $(".gallery__elem");
	$container.imagesLoaded(function () {
		$container.imagefill();
		$('.zoom-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,/*
			titleSrc: function(item) {
				return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
			}*/
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		
	});
	});

	// imagefill
	// $('.gallery__elem').imagefill();

});