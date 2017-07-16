$('.burger-button').on('click', function() {
	$('.burger-nav').toggleClass('active')
});

$(window).on('resize', function() {
	if (window.innerWidth > 1024) {
		$('.burger-nav').removeClass('active')
	}
});