
$(".projects-menu-icon").click(function() {
	$("html").toggleClass("no-scroll"),
	$(this).toggleClass("active"),
	$(".project-overlay").toggleClass("show")
})
