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
		})/*, $(".pjax-container").on("pjax:success", function() {
				$.pjax({
						url: window.location.href,
						container: ".mnu",
						fragment: ".mnu"
				}),*/
				/*$(document).ready(function(){$(".zoom_gallery").magnificPopup({delegate:"a",type:"image",closeOnContentClick:!1,closeBtnInside:!1,mainClass:"mfp-with-zoom mfp-img-mobile",image:{verticalFit:!0,titleSrc:function(a){}},gallery:{enabled:!0},zoom:{enabled:!0,duration:300,opener:function(a){return a.find("img")}}})});
				$(".popup-with-zoom-anim").magnificPopup({
						type: "inline",
						fixedContentPos: !1,
						fixedBgPos: !0,
						overflowY: "auto",
						closeBtnInside: !0,
						preloader: !1,
						midClick: !0,
						removalDelay: 300,
						mainClass: "my-mfp-zoom-in"
				}),*/
				// imagefill.js
				// $('.img_souvenirs').imagefill(); 

				// Yandex.Metrika counter
				// !function(e,t,a){(t[a]=t[a]||[]).push(function(){try{t.yaCounter35150355=new Ya.Metrika({id:35150355,clickmap:!0,trackLinks:!0,accurateTrackBounce:!0,webvisor:!0,trackHash:!0})}catch(e){}});var c=e.getElementsByTagName("script")[0],n=e.createElement("script"),r=function(){c.parentNode.insertBefore(n,c)};n.type="text/javascript",n.async=!0,n.src="https://mc.yandex.ru/metrika/watch.js","[object Opera]"==t.opera?e.addEventListener("DOMContentLoaded",r,!1):r()}(document,window,"yandex_metrika_callbacks");

				console.log("Good")
		});

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

});
