"use strict";

// random "tech" adjectives
var adjectives = [
	"new", "modern", "high", "advanced", "medical", "current", "appropriate", "military", "digital", "nuclear", "available", "latest", "western", "foreign", "industrial", "agricultural", "educational", "sophisticated", "electronic", "based", "improved", "wireless", "innovative", "assistive", "reproductive", "instructional", "superior", "art", "conventional", "complex", "optical", "intensive", "scientific", "proprietary", "related", "underlying", "mechanical", "newer", "contemporary", "integrated", "indigenous", "edge", "laser", "efficient", "genetic", "mobile", "intermediate", "alternative", "expensive", "solar", "interactive", "clean", "mature", "saving", "primitive", "modem", "contraceptive", "oriented", "electrical", "developed", "century", "promising", "ceramic", "multimedia"
];
// random nouns
var nouns= [
	"toothbrush",
	"birth",
	"act",
	"example",
	"fowl",
	"vest",
	"look",
	"cushion",
	"rock",
	"can",
	"toothpaste",
	"relation"
];


// the function called from the submit button callback
function submitButtonCallback(e){
	console.log("submitButtonCallback");
	// get the value from the form
	var maxLengthOfAdjective = $("#maxLengthOfAdjective").val() || 0;
	// store the string we will present to the user
	var result = "";
	// loop through
	for (var i = 0; i < adjectives.length; i++){
		console.log(i,adjectives[i]);
		if (adjectives[i].length <= maxLengthOfAdjective){
			var randomNounIndex = Math.floor(Math.random() * nouns.length);
			result += adjectives[i] + " " + nouns[randomNounIndex]  +  "<br>";
		}
	}
	// if no phrases found
	if (result == "") result = "Length is too short!";

	$(".result").html(result);

	 e.preventDefault();
}
// create a listener for the submit button
$("#submitButton").click(submitButtonCallback);
