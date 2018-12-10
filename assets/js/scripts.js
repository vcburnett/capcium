function goBack() {
	window.history.back();
}

$( document ).ready(function() {

	var browserWindow = $(window);
	var browserH = browserWindow.height();
	var browserW = browserWindow.width();

	var body = $("body");

	var header = $("header");

	var contactUs = $("#contact-us");
	var btnContact = $("a.contact-btn");
	var btnContactClose = $("a.btn-contact-close");

	var btnBurger = $("#btn-main-menu-mobile");
	var MMWrapper = $("#main-menu-wrapper");
	var MMlinks = $("#main-menu a");

	function menuOff() {
		btnBurger.removeClass("btn-brg-clicked");
		MMWrapper.fadeOut();
	}

	function updateElements() {
		console.log("Working!");

		var browserW = browserWindow.width();

		// Main Menu update
		if (btnBurger.hasClass("btn-brg-clicked") && browserW > 640) {
			btnBurger.removeClass("btn-brg-clicked");
		}
		if (!btnBurger.hasClass("btn-brg-clicked") && browserW <= 640) {
			MMWrapper.css("display", "none");
		} else {
			MMWrapper.css("display", "block");
		}
		
	}

	// ON RESIZE
	browserWindow.on("resize", function() {
		updateElements();
	}).trigger("resize");

	// ON SCROLL
	browserWindow.on("scroll", function() {
		console.log("We are " + $(this).scrollTop() + " from the top.");
		if($(this).scrollTop() >= 125) {
			header.addClass("header-scrolled");
		} else {
			header.removeClass("header-scrolled");
		}
	});

	// ON CLICKS
	btnContact.on("click", function() {
		contactUs.fadeIn(400, function() {
			body.addClass("no-scroll");
		});
	});
	btnContactClose.on("click", function() {
		contactUs.fadeOut(400, function() {
			body.removeClass("no-scroll");
		});
	});
	$(document).keyup(function (e) {
		if (e.key === "Escape") {
			if (contactUs.css("display") == "block") {
				contactUs.fadeOut(400, function() {
					body.removeClass("no-scroll");
				});
			}
		}
	});

	btnBurger.on("click", function() {
		if ($(this).hasClass("btn-brg-clicked")) {
			$(this).removeClass("btn-brg-clicked");
			MMWrapper.fadeOut();
			body.removeClass("no-scroll");
		} else {
			$(this).addClass("btn-brg-clicked");
			MMWrapper.fadeIn("fast");
			body.addClass("no-scroll");
		}
	});
	MMlinks.on("click", function() {
		if (btnBurger.hasClass("btn-brg-clicked")) {
			menuOff()
		}
	});

	// Scroll links
    $(".scroll").click( function(event) {

        //get the full url - like mysitecom/index.htm#home
        var full_url = this.href;
        console.log("Full URL: " + full_url);

        //split the url by # and get the anchor target name - home in mysitecom/index.htm#home
        var parts = full_url.split("#");
        var trgt = "#" + parts[1];

       console.log("Taget anchor: " + trgt);

        //get the top offset of the target anchor
        var trgt_offset = $(trgt).offset();
        var trgt_top = trgt_offset.top - 70;
        console.log("trgt_top " + trgt_top);

        //goto that anchor by setting the body scroll top to anchor top
        
        $('html, body').animate({
			scrollTop:trgt_top},
			1000,
			"easeInOutCubic"
		);
		return false;
    });

});