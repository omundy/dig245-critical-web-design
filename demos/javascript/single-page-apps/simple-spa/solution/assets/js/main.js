"use strict";

/* main.js file for JS single page application */

// object to store our page data
var pages = {
	"home": {
		"title": "This is the home page",
		"content": "This is the content of the home page"
	},
	"about": {
		"title": "This is the about page",
		"content": "This is the content of the about page"
	},
	"contact": {
		"title": "This is the contact page",
		"content": "This is the content of the contact page"
	}
};

// display page function
function displayPage(id){
	// new var to hold html we will display
	var html = '';

	// create title html
	html += '<div class="row">';
	html += '<div class="col-12">';
	html += '<h1>'+ pages[id].title +'</h1>';
	html += '</div>';
	html += '</div>';

	// create content html
	html += '<div class="row">';
	html += '<div class="col-12">';
	html += '<p>'+ pages[id].content +'</p>';
	html += '</div>';
	html += '</div>';

	// testing
	console.log("displayPage()",id);

	// display html
	$('#main').html( html);

    // remove active class from all links
	$('.nav-item a').removeClass('active');
	// add active class to active link
	$('#'+id).addClass('active');
}
// load default page
displayPage('home');


$(document).on('click','.nav-link',function(){
	// store id
    var id = $(this).attr('id');
    // call displayPage function
    displayPage(id);
});
