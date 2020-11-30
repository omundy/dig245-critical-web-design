"use strict";

/* main.js file for JS single page application */

// variables to store each answer
var answers = {
	"red":0,
	"green":0,
	"blue":0
};

// to remember the previous choice
var lastColorVote;

// load intro page by default
$("#main").load('views/intro.html');

// click event to display voting page
$(document).on('click','.displayVotingPage',function(){
    $("#main").load('views/vote.html');
});

// display the results page
$(document).on('submit',"#colorVote",function(){

    // tally results
    var answer = $('input[name=color]:checked').val();
	// store it the answer to show in case they go back
	lastColorVote = answer; 
    // testing
    console.log("vote was",answer);

    // determine which answer should be incremented
    if (answer == "red"){
    	answers.red ++;
    } else if (answer == "green"){
    	answers.green ++;
    } else if (answer == "blue"){
    	answers.blue ++;
    }
    // testing
    console.log("answers",answers);

	// once page is loaded then its data can be updated
	$("#main").load('views/results.html',function(){

		// get a reference to the canvas where the chart will appear
		var ctx = document.getElementById("myChart").getContext('2d');

		// create a new chart and supply the appropriate settings
		var myChart = new Chart(ctx, {
		    type: 'horizontalBar',
		    data: {
		        labels: ["Red", "Green", "Blue"],
		        datasets: [{
		            label: '# of Votes',
		            data: [
		            	answers.red,
		            	answers.green,
		            	answers.blue
		            ],
		            backgroundColor: [
		                'rgba(255, 0, 0, 0.3)',
		                'rgba(0, 255, 0, 0.3)',
		                'rgba(0, 0, 255, 0.3)'
		            ],
		            borderColor: [
		                'rgba(255, 0, 0, 1)',
		                'rgba(0, 255, 0, 1)',
		                'rgba(0, 0, 255, 1)'
		            ],
		            borderWidth: 1
		        }]
		    },
		    options: {
		        scales: {
		            xAxes: [{
		                ticks: {
		                    beginAtZero:true
		                }
		            }]
		        }
		    }
		});
	});

	// don't perform default form behavior
    return false;
});
