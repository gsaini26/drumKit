
/*document.querySelector("button").addEventListener("click", handleClick);

function handleClick() {
    alert("I got clicked!");
}*/

/*using anonymous function does the same thing */

/* Do something when any button gets clicked */

var drumList= document.querySelectorAll(".drum");


for (i=0; i<=drumList.length; i++) {
    drumList[i].addEventListener("click", function() {
        this.style.color='white';
    });
};

/*var audio=new Audio("sounds/snare.mp3");
audio.play();*/