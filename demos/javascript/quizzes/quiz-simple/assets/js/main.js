"use strict";

/*******************************************************
1. Start by defining all the data needed
********************************************************/


// QUESTION 1

var q1Answer = "marbles";

$("#checkAnswers").click(function(){
	console.log("checking answers...");

	// to show color
	var bgColor = "white";

	// get the value of the selected radio button
	var selectedOption = $('input[name="q1"]:checked').val();
	console.log(selectedOption);

	// if correct
	if (selectedOption == q1Answer){
		// set bgColor
		bgColor = "#66FF66";
		// update result
		$(".caption").html("That is right!");
	} else {
		// set bgColor
		bgColor = "#FF3300";
		// update result
		$(".caption").html("Sorry, that is not the answer.");
	}



	// set the background color
	$("body").css({
		"background-color": bgColor
	});

});

$("form").submit(function(e){
        e.preventDefault();
    });
