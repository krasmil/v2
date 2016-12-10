$(document).ready(function() {
    var e = $("[data-tab]");
    $(e.length) && e.on("click", function() {
        var a = $(this),
            t = a.data("tab");
        e.removeClass("active"), a.addClass("active"), $("[data-tab-id]").hide(), $('[data-tab-id="' + t + '"]').show()
    });
    var a, t = $("[data-overlay]");
    $(t.length) && t.on("click", function() {
        var e = $(this),
            t = e.data("overlay");
        a = $('[data-overlay-id="' + t + '"]'), $("[data-overlay-id]").hide(), a.show(), $("body, html").css({
            overflow: "hidden"
        }), a.on("click", function(e) {
            e.target === this && ($(this).fadeOut("fast"), $("body, html").attr("style", ""))
        })
    })
}), $(document).ready(function() {
    var e = $(".js-searchButton"),
        a = $(".js-searchInput");
    e.on("click", function() {
        var e = $(this);
        e.toggleClass("active"), e.hasClass("active") && a.focus()
    }), a.on("focusout", function() {
        a.val(""), e.removeClass("active")
    }).keyup(function(e) {
        27 === e.keyCode && a.is(":focus") && a.focusout()
    });
    var t, i, n = $(".js-headerMenuItem");
    n.on("mouseover", function() {
        i = $(this), t = i.find(".js-headerSubmenu"), t.show(), i.on("mouseleave", function() {
            t.hide()
        }), t.on("mouseleave", function() {
            t.hide()
        })
    });
    var s = $(".js-headerDropD").find("li");
    s.on("click", function() {
        $ddItemContainer = $(this).parents(".js-headerDropD"), $ddItemContainer.hasClass("active") ? ($ddItemContainer.removeClass("active"), $(this).addClass("active").siblings().removeClass("active")) : $ddItemContainer.addClass("active")
    })
}), $(document).ready(function() {
    $overlayRegistration = $(".overlay--registration"), $overlayRegistration.length && $('.overlay--registration_signup input[type="radio"]').on("click", function() {
        $(".js-accountSupporter").is(":checked") ? $(".js-profession").hide() : $(".js-profession").show()
    })
}), $(document).ready(function() {
    var e = $(".js-inputFile");
    e.length && e.each(function() {
        function e(e) {
            if (e.files && e.files[0]) {
                var a = new FileReader;
                a.onload = function(e) {
                    i.prop("src", e.target.result).show()
                }, a.readAsDataURL(e.files[0])
            }
        }
        var a = $(this),
            t = a.parents(".js-inputFileWrapper"),
            i = t.find(".js-inputFileImage"),
            n = t.find(".js-inputFileDelete"),
            s = i.attr("src");
        a.on("change", function() {
            e(this), i.show(), n.fadeIn(350), t.addClass("active")
        }), a.on("click", function() {
            a.val(""), n.hide(), t.removeClass("active")
        }), n.on("click", function() {
            a.val(""), i.attr("src", s), n.hide(), t.removeClass("active")
        })
    })
}), $(document).ready(function() {
    var e = $(".js-inputFileCover");
    e.length && e.each(function() {
        function e(e) {
            if (e.files && e.files[0]) {
                var a = new FileReader;
                a.onload = function(e) {
                    i.prop("src", e.target.result).show()
                }, a.readAsDataURL(e.files[0])
            }
        }
        var a = $(this),
            t = a.parents(".js-inputFileWrapperCover"),
            i = t.find(".js-inputFileImageCover"),
            n = t.find(".js-inputFileDeleteCover"),
            s = i.attr("src");
        a.on("change", function() {
            e(this), i.show(), t.addClass("active")
        }), a.on("click", function() {
            console.log("heheh"), a.val(""), t.removeClass("active")
        }), n.on("click", function() {
            a.val(""), i.attr("src", s), t.removeClass("active")
        })
    })
}), $(document).ready(function() {
    var e = $(".js-sideNavTrigger");
    e.length && (e.on("click", function() {
        $(".js-sideNav").addClass("active"), $("body, html").css({
            overflow: "hidden"
        })
    }), $(".js-sideNavClose").on("click", function() {
        $(".js-sideNav").removeClass("active"), $("body, html").attr("style", "")
    }))
});