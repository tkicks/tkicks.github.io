var resizeTimer;

$(document).ready(function() {
	$(".video-description").css("height", $(".video-content").height());
	$("#topbar-logo").css("width", $(".content-wrapper").width());
});


// call resize function when screen size changes
$(window).resize(function() {
	clearTimeout(resizeTimer);
	resizeTimer = setTimeout(Resized, 1);
});


// resize video and logo when screen size changes
function Resized() {
	$(".video-description").css("height", $(".video-content").height());
	$("#topbar-logo").css("width", $(".content-wrapper").width());
};

// no use yet....look when a menu button gets added
$(function() {
	$(".menu-button").click(function() {
		$(".submenu").slideToggle();
	});
});