/******* Run functions when document is ready ********/
$(document).ready(function() {
    dropMenu();
    initMainSlider();
    $('[bg-img]').bgImage();
    openRegPanel();
    mobileMenu();
});

/******* Run functions when document resize **********/
$(window).resize(function() {

});


/*****************************************************/
/******************* FUNCTIONS ***********************/
/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

/************ drop menu ******************************/
var dropMenu = function() {
    var $trigger = $('[trigger]');
	var $drop = $('[dropdown]');
	// on click on dropdown icon in header
    $trigger.on('click', function(e) {
	
		// remove active styling of other triggers and dropdowns
        var $data = $(this).attr("trigger");
        $drop.not('[dropdown= ' + $data + ']').removeClass("active");
		$trigger.not($(this)).removeClass("active");
		
        $(document).find('[dropdown= ' + $data + ']').toggleClass("active");
        $(document).find('[dropdown= ' + $data + ']').find("input[autofocus]").focus();
        
        // remove active styling if already present on click (closing the menu)
        if ($(this).hasClass("active")) {
            $(this).removeClass("active")
        } else {
            $(this).toggleClass("active");
        }
        return false
    });
};

/************ setup header slider ***********************/
var initMainSlider = function() {
    var carousel = $(".main-slider"),
        speed = 800;
    carousel.owlCarousel({
        singleItem: true,
        navigation: false,
        pagination: true,
        navigationText: ["", ""],
        autoPlay: false,
        autoHeight: false,
        stopOnHover: true,
        transitionStyle: "fade",
        slideSpeed: speed,
        paginationSpeed: speed,
        rewindSpeed: speed * 2,
        addClassActive: true
    });
};

/*********** set images as bg of container and fill 100%, hide image ****/
$.fn.bgImage = function() {
    var $element = $(this);
    $element.each(function() {
        var $img = $(this).find('img.hidden-img'),
            $src = $img.attr('src');

        $img.hide();

        if (!$img.length || $src == "" || $src == undefined) {
            $(this).css({
                'background-image': 'url("")'
            });
        } else
            $(this).css({
                'background-image': 'url("' + $src + '")'
            });
    });
};

/******** open login/registration panel ******************/
var openRegPanel = function() {
    var e = $("[data-tab]");
    $(e.length) && e.on("click", function() {
        var a = $(this),
            t = a.data("tab");

        a.addClass("active"), $("[data-tab-id]").hide(), $('[data-tab-id="' + t + '"]').show()
        if (t != "register") {

            e.removeClass("active"), a.addClass("active")
        }
    });

    var f = $("#artistButton");
    $(f.length) && f.on("click", function() {

        $("#artistProfession").show();

    });

    var f = $("#supportButton");
    $(f.length) && f.on("click", function() {

        $("#artistProfession").hide();

    });

    var a, t = $("[data-popup]");
    $(t.length) && t.on("click", function() {
        var e = $(this),
            t = e.data("popup");

        a = $('[data-popup-id="' + t + '"]'), $("[data-popup-id]").hide(), a.show(), $("body, html").css({
            overflow: "hidden"
        }), a.on("click", function(e) {
            e.target === this && ($(this).fadeOut("fast"), $("body, html").attr("style", ""))
        })
    })

    var closeIcon = $("#closeLoginPopup");
    closeIcon.on("click", function() {
        $("[data-popup-id]").hide();
    })
};

/************** open/close mobile menu ****************/
var mobileMenu = function() {
    $(".navigation_toggle").click(function(e) {
        if ($("#mob_menu").hasClass("open")) {
            $("#mob_menu").removeClass("open");
        } else {
            $("#mob_menu").addClass("open");
        }
        e.preventDefault();
    });
    
    // hide mobile menu when start scrolling
    $('.main-container').scroll(function() {
        $('#mob_menu').removeClass('open', $('.main-container').scrollTop() > 2);
    });
};