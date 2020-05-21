$(document).ready(function() {

	// Activate menu button
    $('.skip-nav').click(function() {
        $(".m-primary-nav.mobile").toggleClass("show");
        $(".mbody").toggleClass("mbody-push-toright");
        $("ul.m-secondary-nav").removeClass("show");
        $("ul.m-tertiary-nav").removeClass("show");
    });

    // m-secondary-nav items open / close
    $(".m-primary-nav>.has-children>a").click(function() {
    	$(this).next("ul.m-secondary-nav").toggleClass("show");
    });

    $(".m-secondary-nav>.menu-back a").click(function() {
    	$(this).parents().find("ul.m-secondary-nav").removeClass("show");
    });

    $(".m-tertiary-nav>.menu-back a").click(function() {
    	$(this).parents().find("ul.m-tertiary-nav").removeClass("show");
    });

    // m-tertiary-nav items open / close
    $(".m-secondary-nav .has-children a").click(function() {
    	$(this).next("ul.m-tertiary-nav").toggleClass("show");
    });

});

function myFunction(x) {
    x.classList.toggle("change");
};