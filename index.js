/*document.querySelector("button").addEventListener("click", handleClick);*/

/*function handleClick() {
    alert("I got clicked!");
}*/

/*using anonymous function does the same thing */


/* Do something when any key or button gets clicked */

function sounds(key) {

    switch (key) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "a":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;


        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        default:
            console.log(key);
    }

}

/* select the drum class items and add to an array*/
var drumList = document.querySelectorAll(".drum");

/* Listen for a click of any of the buttons (indicated by the class drum) */
for (i = 0; i <= drumList.length; i++) {
    drumList[i].addEventListener("click", event => {
     
        /* if one of the buttons is clicked, send the innerHTML, 
        which is the letter that was clicked (see the index.html)
        to the sounds function that completes an action for the letter
        clicked*/
        
        sounds(event.target.innerHTML);
        buttonAnimation(event.target.innerHTML);
    
    });

    /* listen for a key that is pressed rather than a button clicked
    and have the sounds function complete an action based on 
    which key was pressed */
    
    drumList[i].addEventListener("keydown", event => {
        sounds(event.key);
        buttonAnimation(event.key);
});

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed") }, 100);
}

};

