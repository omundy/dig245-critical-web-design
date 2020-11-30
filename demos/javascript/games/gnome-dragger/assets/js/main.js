"use strict";

/*******************************************************
 Start by defining all the data needed for the game
********************************************************/

var numberCorrect = 0,
	numberErrors = 0,
	dragZ = 10;



/*******************************************************
 Add draggable / droppable functions
********************************************************/

$(".gnome1").draggable({
	// always show dragging on top
	drag: function(){
		$(".gnome1").css({
			"z-index": ++dragZ
		});
	},
	// if draggable was dropped on an accepting droppable elem
	revert: function(dropElem) {
		// if draggable was released over correct droppable
		if (dropElem && dropElem.hasClass("gnome1-target")) {
			console.log("correct!", dropElem);
			// update style
			$(".gnome1-target").css({
				"background-color": "green"
			});
			// disable dragging this
			$(".gnome1").draggable("disable");
			numberCorrect++;
		} else {
			console.log("wrong!", dropElem);
			numberErrors++;
		}
		updateScore();
	},
	revertDuration: 200
});
$(".gnome2").draggable({
	// always show dragging on top
	drag: function(){
		$(".gnome2").css({
			"z-index": ++dragZ
		});
	},
	// if draggable was dropped on an accepting droppable elem
	revert: function(dropElem) {
		// if draggable was released over correct droppable
		if (dropElem && dropElem.hasClass("gnome2-target")) {
			console.log("correct!", dropElem);
			// update style
			$(".gnome2-target").css({
				"background-color": "green"
			});
			// disable dragging this
			$(".gnome2").draggable("disable");
			numberCorrect++;
		} else {
			console.log("wrong!", dropElem);
			numberErrors++;
		}
		updateScore();
	},
	revertDuration: 200
});
// set which draggables the droppables accept
$(".gnome1-target").droppable({
	accept: ".gnome1"
});
$(".gnome2-target").droppable({
	accept: ".gnome2"
});

/*******************************************************
 Single Page App functions
********************************************************/

// all others hidden on load
gameStart();

function gameStart() {
	console.log("gameStart");
	// hide / show sections
	$(".game-start").show();
	$(".game-play").hide();
	$(".game-end").hide();
}

function gamePlay() {
	// hide / show sections
	$(".game-start").hide();
	$(".game-play").show();
	$(".game-end").hide();
}

function gameEnd() {
	// hide / show sections
	$(".game-start").hide();
	$(".game-play").hide();
	$(".game-end").show();
}
$(document).on("click", ".game-start-btn", gameStart);
$(document).on("click", ".game-play-btn", gamePlay);
$(document).on("click", ".game-end-btn", gameEnd);







/*******************************************************
 Other functions
********************************************************/

function updateScore() {
	$("#numberCorrect").html(numberCorrect);
	$("#numberErrors").html(numberErrors);
}


// play sound function
function playSound(selector) {
	// get reference
	var audio = $(selector)[0];
	// if muted (required for Chrome) then unmute
	if (audio.muted)
		audio.muted = false;
	// if already playing then reset
	audio.currentTime = 0;
	// finally, play
	audio.play();
}
