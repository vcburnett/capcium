function goBack() {
	window.history.back();
}

$( document ).ready(function() {

	var browserWindow = $(window);
	var browserH = browserWindow.height();
	var browserW = browserWindow.width();

	var body = $("body");

	var fullWrap = $(".full-wrap");

	var header = $("header");
	var innerHeader = $(".inner-header");

	var contactUs = $("#contact-us");
	var btnContact = $("a.contact-btn");
	var btnContactClose = $("a.btn-contact-close");

	var btnBurger = $("#btn-main-menu-mobile");
	var MMWrapper = $("#main-menu-wrapper");
	var MMlinks = $("#main-menu a");

	var careerPostingButton = $(".career-job-title");
	var careerSelected = $(".job-selected");
	var applicationTitle;
	var applicationButton = $(".career-job-description a");
	var applicationForm = $("section#job-apply-lightbox");
	var btnApplicationClose = $(".application-close-btn");

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

	// ON RESIZE ------
	browserWindow.on("resize", function() {
		updateElements();
	}).trigger("resize");

	// ON SCROLL ------
	browserWindow.on("scroll", function() {

		var scrolledAmount = $(this).scrollTop();

		// Header codes
		console.log("We are " + $(this).scrollTop() + " from the top.");
		if(scrolledAmount >= 125) {
			header.addClass("header-scrolled");
		} else {
			header.removeClass("header-scrolled");
		}

		// Paralax codes
		console.log("We are (scrolled amount) " + scrolledAmount + " from the top.");
		var paralax = scrolledAmount * .5;
		innerHeader.css("background-position", "center " + paralax + "px");
	});

	// ON CLICKS ------
	// Contact / Application Form trigger and close
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
			if (applicationForm.css("display") == "block") {
				applicationForm.fadeOut(400, function() {
					body.removeClass("no-scroll");
				});
			}
		}
	});

	// Main Menu - Burger Version
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

	// Career
	// Career Description toggle
	careerPostingButton.on("click", function() {
		if ($(this).parent().hasClass("job-selected")) {
			$(this).parent().removeClass("job-selected");
		} else {
			fullWrap.find(".job-selected").removeClass("job-selected");
			$(this).parent().addClass("job-selected");
			var scrollPos = $(this).offset();
			var scrollTo = scrollPos.top - 70;
			$('html, body').animate({
				scrollTop:scrollTo},
				1000,
				"easeInOutCubic"
			);
		}
	});
	applicationButton.on("click", function() {
		console.log("Application button clicked");
		// Getting job title
		applicationTitle = $(this).parent().parent().find("a.career-job-title").text();
		console.log("The title of this post is: " + applicationTitle);

		// Show Form
		applicationForm.fadeIn(400, function() {
			$("p#text-apply-title").html(applicationTitle);
			body.addClass("no-scroll");
		});
	});
	btnApplicationClose.on("click", function() {
		applicationForm.fadeOut(400, function() {
			body.removeClass("no-scroll");
		});
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