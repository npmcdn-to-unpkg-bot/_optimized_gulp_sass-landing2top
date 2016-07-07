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
	$(document).pjax("a.logo, .mnu_left a", ".pjax-container", {
				fragment: ".pjax-container"
	});

	// superfish
	$('.sf-menu').superfish({
		delay: 200,
		speed: 'fast',
		cssArrows: false
	})
	.after("<div id='mobile-menu'>").clone().appendTo("#mobile-menu");
	$("#mobile-menu").children("ul").removeClass("sf-menu");

});
