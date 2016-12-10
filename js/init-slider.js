/******* Run functions when document is ready ********/
$(document).ready(function() {
    initMainSlider();
});

/*****************************************************/
/******************* FUNCTIONS ***********************/
/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

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
