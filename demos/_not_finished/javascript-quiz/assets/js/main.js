"use strict";


$(document).ready(function() {
	$('.carousel').carousel('pause');
});
// // $("button").click(() => $(".carousel").carousel("next"));


$.getJSON("assets/js/quiz.json", function(json) {
	console.log(json);

	buildQuiz(json);
});

let questions = {},
	answers = {};




function updateIndicators(json) {
	let str = "";
	// first slide
	str += '<li data-target="#carousel" data-slide-to="0" class="active"></li>';
	for (let i = 0; i < json.questions.length; i++) {
		str += '<li data-target="#carousel" data-slide-to="' + (i+1) + '"></li>';
	}
	// last slide
	str += '<li data-target="#carousel" data-slide-to="' + (json.questions.length + 1) + '"></li>';
	$(".carousel-indicators").html(str);
}


function buildQuiz(json) {

	updateIndicators(json);

	// add title-slide
	$(".title-slide-image").attr("src", json["title-slide"].image);
	$(".title-slide-title").html(json["title-slide"].title);
	$(".title-slide-subtitle").html(json["title-slide"].subtitle);
	$(".title-slide-description").html(json["title-slide"].description);

	// build questions
	if (json.questions) {
		let qStr = "";

		// loop through and add the text
		for (let i = 0; i < json.questions.length; i++) {

			let q = json.questions[i],
				options = {};

			questions["q" + i] = {
				"id": "q" + i,
				"correct": 0
			};









			qStr += "<div class='carousel-item'><div class='row'>";
			// column 1
			qStr += "<div class='col-6'>";
			if (q.image) {
				qStr += "<img class='quiz-title-image img-fluid' src='" + q.image + "'>";
			}
			qStr += "</div>";
			// column 2
			qStr += "<div class='col-6'>";
			qStr += "<div class='form-group question'>";

			qStr += "<div class='question-title'>" + q.title + "</div>";
			qStr += "<div class='question-subtitle'>" + q.subtitle + "</div>";
			qStr += "<div class='question-description'>" + q.description + "</div>";

			qStr += "<div class='question-options'>";

			if (q.type === "true-false") {
				for (let j = 0; j < q.options.length; j++) {
					qStr += "<div>";
					qStr += "<input type='radio' id='huey' name='drone' value='huey'>";
					qStr += "<label for='huey'>" + q.options[j].answer + "</label>";
					qStr += "</div>";
				}
			} else if (q.type === "multiple-choice") {
				for (let j = 0; j < q.options.length; j++) {
					qStr += "<div>";
					qStr += "<input type='checkbox' id='scales' name='scales'>";
					qStr += "<label for='scales'>" + q.options[j].answer + "</label>";
					qStr += "</div>";
				}
			}


			qStr += '<a class="btn btn-primary mr-2" href="#carousel" data-slide="prev">Previous</a>';
			qStr += '<a class="btn btn-primary" href="#carousel" data-slide="next">Next</a>';

			qStr += "</div>";
			qStr += "</div>";
			qStr += "</div>";
			qStr += "</div></div>";
		}

		$(".questions-placeholder").replaceWith(qStr);
		console.log("add questions")
	}


	// add title-slide
	$(".final-slide-image").attr("src", json["final-slide"].image);
	$(".final-slide-title").html(json["final-slide"].title);
	$(".final-slide-subtitle").html(json["final-slide"].subtitle);
	$(".final-slide-description").html(json["final-slide"].description);
	console.log("add final")


}
