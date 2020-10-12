
// variables to track the page we are on and curtain state
var currentPage = "red",
    redCurtainsOpen = false,
    greenCurtainsOpen = false;


/**
 *  moveCurtains() function - Move curtains
 *  Pass as parameters the id of left / right curtains, and the new left / right positions
 */
function moveCurtains(leftCurtain,rightCurtain,leftPos,rightPos){
    anime({
      targets: leftCurtain, // the id of the left curtain (see below)
      duration: 1000,
      translateX: leftPos,  // the new position of the left curtain (see below)
      easing: 'easeInOutQuad'
    });
    anime({
      targets: rightCurtain, // the id of the right curtain (see below)
      duration: 1000,
      translateX: rightPos,  // the new position of the right curtain (see below)
      easing: 'easeInOutQuad'
    });
}

// red button actions
$('#redCurtonButton').on('click',function(){
    // if curtains are NOT open
    if (redCurtainsOpen == false){
        // call open function, passing ids of left / right curtains and new positions
        moveCurtains('#redCurtainLeft','#redCurtainRight',-150,150);
        // set the state var to true
        redCurtainsOpen = true;
    } else {
        moveCurtains('#redCurtainLeft','#redCurtainRight',0,0);
        redCurtainsOpen = false;
    }
});
$('#redCurtonExitButton').on('click',function(){
    // if we are on red page AND curtains are open
    if (currentPage == "red" && redCurtainsOpen == true){
        // set CSS display prop to none
        $("#redCurtains").css({"display":"none"});
        // change page
        currentPage = "green";
    }
});

// green button actions
$('#greenCurtonButton').on('click',function(){
    if (greenCurtainsOpen == false){
        moveCurtains('#greenCurtainLeft','#greenCurtainRight',-150,150);
        greenCurtainsOpen = true;
    } else {
        moveCurtains('#greenCurtainLeft','#greenCurtainRight',0,0);
        greenCurtainsOpen = false;
    }
});
$('#greenCurtonExitButton').on('click',function(){
    if (currentPage == "green" && greenCurtainsOpen == true){
        $("#greenCurtains").css({"display":"none"});
        currentPage = "final";
    }
});
