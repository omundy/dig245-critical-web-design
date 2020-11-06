"use strict";

// after web page has loaded
$(document).ready(function () {
	try {
		// set initial scroll
		moveParallaxLayer();
		// scroll event listener
		$(window).scroll(moveParallaxLayer);
	} catch (err) {
		console.error(err);
	}
});



// callback to move each parallax layer
function moveParallaxLayer() {
	try {
		// how far we've scrolled from top
		let scrolledFromTop = $(window).scrollTop() || 0;
		// the header that contributes to the offset
		let parallaxOffset = 0;

        // bottom of the page, return early
		if (scrolledFromTop > window.innerHeight) {
			return;
	    }

		$('.parallax-layer').each(function (index, ele) {
			// get id
			var id = $(this).attr('id');
			// get vars from html, as numbers
			var speed = Number($(this).attr('data-speed')) || 0;
			var offset = Number($(this).attr('data-offset')) || 0;
			// math for y pos = -(top * speed) + layer offset + header height + parallaxOffset
			var yPos = -Math.round((scrolledFromTop * (speed / 30))) + offset + parallaxOffset;
			// set position
			$(this).attr('style', 'transform: translateY(' + (yPos) + 'px)');
			// console.log(layer);
		});
	} catch (err) {
		console.error(err);
	}
}
