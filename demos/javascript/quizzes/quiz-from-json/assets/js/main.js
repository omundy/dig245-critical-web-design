"use strict";

/*******************************************************
1. Start by defining all the data needed
********************************************************/

var currentQuestion = 0;

// QUESTION 1

var questions = [
	{
		text: "Which one of the following is the answer to question 1?",
		answers: [
			{
				text: "This is answer 1",
				isCorrect: true,
				selected: false
			},
			{
				text: "This is answer 2",
				isCorrect: false,
				selected: false
			},
			{
				text: "This is answer 3",
				isCorrect: false,
				selected: false
			}
		]
	},
	{
		text: "Another question, which is the answer to number 2?",
		answers: [
			{
				text: "This is answer 1",
				isCorrect: false,
				selected: false
			},
			{
				text: "This is answer 2",
				isCorrect: false,
				selected: false
			},
			{
				text: "This is answer 3",
				isCorrect: true,
				selected: false
			}
		]
	}
];


// show the current question
function showQuestion(num){
	// set the value of currentQuestion using the param
	currentQuestion = num;

	// display the question and answers
	
}
