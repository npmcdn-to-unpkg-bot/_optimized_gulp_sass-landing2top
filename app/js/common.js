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
	$("#mobile-menu").children("ul").removeClass("sf-menu"),
	$("#mobile-menu").children("ul").removeClass("mnu")
	.parent().mmenu({
		extensions : [ 'widescreen', 'theme-white', 'effect-menu-slide', 'pagedim-black' ],
		navbar: {
			title: "Меню"
		}
	});

	// Индикатор активной секции
	$(".sf-menu")
	.after("<div id='section-indicator'>").clone().appendTo("#section-indicator");
	$("#section-indicator").children("ul").removeClass("sf-menu"),
	$("#section-indicator").children("ul").removeClass("sf-js-enabled"),
	$("#section-indicator").children("ul").removeClass("mnu"),
	$("#section-indicator").children("ul").children("li").children("div").children("a").unwrap(),
	$("#section-indicator").children("ul").children("li").children("a").unwrap(),
	$("#section-indicator").children("ul").children("a").empty(),
	$("#section-indicator").children("ul").children("a").removeClass("elem"),
	$("#section-indicator").children("ul").children("a[href^='/']").remove(),
	$("#section-indicator").children("ul").children("a").wrap("<li>"),
	$("#section-indicator").children("ul").children("li:first").attr({class: 'active'})
	
	

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

});