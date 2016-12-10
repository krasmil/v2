
// ---------- dropdown menu functionality -----------

function dropMenu() {

    var $trigger = $('[trigger]');
    var $drop = $('[dropdown]');
    

    $trigger.on('click', function(e) {
        var $data = $(this).attr("trigger");
        $drop.not('[dropdown= '+ $data +']').removeClass("active");
        
        $(document).find('[dropdown= '+ $data +']').toggleClass("active");
        $(document).find('[dropdown= '+ $data +']').find("input[autofocus]").focus();
		
		console.log($(this).attr('class'));
		// get rid of active styling if already present on click
		if ($(this).hasClass("active")) {
			$(this).removeClass("active")
		}
		else {
			$(this).toggleClass("active");
		}

        return false
    });

    
}


// -------- set up the main slider--------
function initMainSlider() {
    var carousel = $(".main-slider"),
        speed = 800;
    carousel.owlCarousel({
        singleItem:true,
        navigation : false,
        pagination: true,
        navigationText : ["", ""],
        autoPlay: false,
        autoHeight : false,
        stopOnHover: true,
        transitionStyle: "fade",
        slideSpeed : speed,
        paginationSpeed : speed,
        rewindSpeed : speed*2,
        addClassActive: true
    });
}

// ---------- set images as bg of container and fill 100%, hide image--------------

$.fn.bgImage = function () {
    var $element = $(this);
    $element.each(function() {
        var $img = $(this).find('img.hidden-img'),
            $src = $img.attr('src');

        $img.hide();

        if (!$img.length || $src == "" || $src == undefined) {
            $(this).css({'background-image' : 'url("")'});
        }

        else
            $(this).css({'background-image' : 'url("'+ $src +'")'});
    });
};


// ------- call functions on load ---------

$(window).load(function() {

});

$(document).ready(function() {
    initMainSlider();
    dropMenu();
    $('[bg-img]').bgImage();
});

$(window).resize(function() {

});

// --------- open login/registration panel -------------

$(document).ready(function() {
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
});

// ---------- open/close mobile menu --------------

jQuery(document).ready(function() {


jQuery(".navigation_toggle").click(function(e) {
			if (jQuery("#mob_menu").hasClass( "open" )) {
					jQuery("#mob_menu").removeClass("open");
			} else {
				jQuery("#mob_menu").addClass("open");
			}
			e.preventDefault();
		});
});

$( '.main-container' ).scroll(function() {
	$('#mob_menu').removeClass('open', $( '.main-container' ).scrollTop() > 2);
});

// --------- enable smooth scrolling for iphones -------------
$(document).ready(function(){
    var deviceAgent = navigator.userAgent.toLowerCase();
	console.log(deviceAgent);
    var agentID = deviceAgent.match(/(iPad|iPhone|iPod)/i);
    if (agentID) {       
       $('body').css('-webkit-overflow-scrolling', 'touch');
    }
});
