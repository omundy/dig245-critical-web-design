

// // once the document is done loading
// $(document).ready(function(){

// 	// store reference to window object
// 	$window = $(window);

// 	// loop through all html elements with data-type=parallax
// 	$('div[data-type="parallax"]').each(function(){

// 		// store reference to this object
// 		var $bgobj = $(this);

// 		// jquery scroll event
// 		$(window).scroll(function() {

// 			// Scroll the background at var speed
// 			// the yPos is a negative value because we're scrolling it UP!								
// 			var yPos = -($window.scrollTop() / $bgobj.data('speed')); 

// 			// Put together our final background position
// 			var coords = '50% '+ yPos + 'px';

// 			// Move the background
// 			$bgobj.css({ backgroundPosition: coords });


// 			console.log($bgobj, yPos, coords)

// 		});

// 	});	

// }); 


// Create cross browser requestAnimationFrame method:
window.requestAnimationFrame = window.requestAnimationFrame
	|| window.mozRequestAnimationFrame
	|| window.webkitRequestAnimationFrame
	|| window.msRequestAnimationFrame
	|| function(f){setTimeout(f, 1000/60)}
 
var sky_cloud = document.getElementById('sky_cloud')
var sky_jet = document.getElementById('sky_jet')
$window = $(window);


function setParallax(){

	// get number of pixels document has scrolled vertically 
	var scrolltop = $window.scrollTop();
	

	// set positions of all divs
	// .2 = 20% of scroll rate
	// .5 = 50% of scroll rate
	// sky_cloud.style.top = -scrolltop * .2 + 'px' 
	// sky_jet.style.top = -scrolltop * .5 + 'px' 


	// loop through all html elements with data-type=parallax
	$('div[class="parallax"]').each(function(){

		// store reference to current element
		var $bgobj = $(this);
		
		// get offset of current element
		var offset = $bgobj.data('top');

		var speed = $bgobj.data('speed');

		// Scroll the background at var speed
		// the yPos is a negative value because we're scrolling it UP!								
		var yPos = (-scrolltop * (speed * .1 )) + offset + 'px' ; 



		// change the position
		$bgobj.css({ top: yPos })


		console.log($bgobj, scrolltop, offset, speed, yPos)



	});

	console.log("scrolltop",scrolltop)
}
setParallax()

// jquery scroll event
$(window).scroll(function() {
	requestAnimationFrame(setParallax);
});

// window.addEventListener('scroll', function(){ // on page scroll
// 	// call parallaxbubbles() on next available screen paint
// 	requestAnimationFrame(setParallax) 
// }, false);









 