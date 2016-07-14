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
	$(document).pjax("a.logo, a.mnu", ".pjax-container", {
		fragment: ".pjax-container"
	})

	// superfish
	$(".sf-menu").superfish({
		delay: 200,
		speed: "fast",
		cssArrows: false
	})
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
			var top  = $(el).offset().top-100;
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
	// $(".mnu").on("click","a", function (event) {
	// 	// исключаем стандартную реакцию браузера
	// 	event.preventDefault();

	// 	// получем идентификатор блока из атрибута href
	// 	var id  = $(this).attr('href'),

	// 	// находим высоту, на которой расположен блок
	// 	top = $(id).offset().top;

	// 	// анимируем переход к блоку, время: 800 мс
	// 	$('body,html').animate({scrollTop: top}, 800);
	// });

});