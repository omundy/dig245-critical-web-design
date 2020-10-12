
// variables to track the page we are on
var currentPageNumber = 0;

// after document has loaded
$(document).ready(function(){
    // load a default page
    $("#page").load( "views/page" + 1 + ".html" );
    // open curtains
    openCurtains();
});


/**
 *  changePage() function
 */
function changePage(newPageNumber){
    console.log("changePage(",newPageNumber,")");

    // store page newPageNumber
    currentPageNumber = newPageNumber;

    // 1. close curtains
    closeCurtains();

    // 2. now that the curtains are closed call setTimeout
    // so after n seconds we know it is safe to...
    setTimeout(function(){

        // 3. change the page
        $("#page").load( "views/page" + newPageNumber + ".html" );

        // 4. open curtains
        openCurtains();

    }, 1200);
}

function openCurtains(){
    anime({
      targets: '#redCurtainLeft',
      duration: 1000,
      translateX: -300,
      easing: 'easeInOutQuad'
    });
    anime({
      targets: '#redCurtainRight',
      duration: 1000,
      translateX: 300,
      easing: 'easeInOutQuad'
    });
}
function closeCurtains(){
    anime({
      targets: '#redCurtainLeft',
      duration: 1000,
      translateX: 0,
      easing: 'easeInOutQuad'
    });
    anime({
      targets: '#redCurtainRight',
      duration: 1000,
      translateX: 0,
      easing: 'easeInOutQuad'
    });
}


// buttons
$('#button1').on('click',function(){
    changePage(1);
});
$('#button2').on('click',function(){
    changePage(2);
});
$('#button3').on('click',function(){
    changePage(3);
});
