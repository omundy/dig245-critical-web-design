"use strict";

/*******************************************************
1. Start by defining all the data needed for the game
********************************************************/

// array with the bugs in their correct order (alphabetical)
var bugIndexArray = [
	"backswimmer",
	"batbug",
	"bedbug",
	"coreid",
	"lacebug",
	"plantbug",
	"stinkbug",
	"termite",
	"toadbug",
	"waterscorpion",
	"waterstrider"
];

// current highest bug index, which we also use for the score
var currentHighestIndex = 0;

// number of errors the player has made
var numberErrors = 0;

// number of errors allowed before game will reset
var numberErrorsAllowed = 3;


/*******************************************************
2. Create the button listener
********************************************************/

// on mouseover listener called each time player mouses over hidden buttons
$(".hidden-btn").on("mouseover", function() {

	/*******************************************************
	3. Get data from player choice
	********************************************************/

	// get id attribute of mouseover element (the id of "this" element)
	var bugId = $(this).attr("id");

	// store css selector for bug button
	var bugSelector = "#" + bugId;

	// get index number of bug in our bug array
	var bugIndex = bugIndexArray.indexOf(bugId);


	/*******************************************************
	4. Game logic that looks at player action
	********************************************************/

	// if bugIndex is less than their progress
	if (bugIndex < currentHighestIndex) {
		// exit the function early
		return;
	}
	// if bugIndex matches the next highest number they should get
	else if (bugIndex === currentHighestIndex) {
		// increment score by 1
		currentHighestIndex++;
		// play incorrect sound
		playSound('#correctSound');
		// show "correct" class
		$(bugSelector).removeClass("incorrect").addClass("correct");
	}
	// lastly, if none of the above is true, then player made an error
	else {
		// increase errors
		numberErrors++;
		// play incorrect sound
		playSound('#incorrectSound');
		// show "incorrect" class
		$(bugSelector).removeClass("correct").addClass("incorrect");
	}


	/*******************************************************
	5. Show score and check the status of the game
	********************************************************/

	// show score
	$("#currentHighestIndex").html(currentHighestIndex);
	$("#numberErrors").html(numberErrors);

	// did they get to the last one? they win!!
	if (currentHighestIndex >= bugIndexArray.length) {
		console.log("🏆🏆🏆🏆🏆🏆🏆🏆");
		// play win sound
		playSound('#winSound');
	} else if (numberErrors >= numberErrorsAllowed) {
		// they lose, reset everything
		setTimeout(function() {
			resetGame();
		}, 500);
	}

	console.log(bugId, bugIndex, currentHighestIndex);
});


/*******************************************************
6. Listener and function to reset game
********************************************************/

// reset button listener
$("#resetBtn").on("click", resetGame);

// reset game function, called from button or if player gets too many errors
function resetGame() {

	// show it (when page loads the bugs are hidden)
	$(".bug-bg").css({
		"display": "block"
	});

	// reset state vars
	currentHighestIndex = 0;
	numberErrors = 0;

	playSound('#resetSound');

	// reset visuals
	$("#currentHighestIndex").html(currentHighestIndex);
	$("#numberErrors").html(numberErrors);
	// remove all boxes
	$(".hidden-btn").removeClass("correct").removeClass("incorrect");
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
