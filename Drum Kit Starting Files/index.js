

// not writing handleClick() because it straighly called without event happens, so write handleClick only and passed function as input 
/*
document.querySelector("button").addEventListener("click", handleClick);

function handleClick(){
    alert("i got clicked");
}
*/

/* ***** or simply ******** write ===>
 document.querySelector("button").addEventListener("click", function { alert("i got clicked"); });
*/




// ** This code work whether we press on button or pressing relevant key on keyboard ******

// *********** Detecting button press ****************
var numberOfButtons = document.querySelectorAll(".drum").length;

for(var i=0; i < numberOfButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHtml = this.innerHTML;

        makeSound(buttonInnerHtml);
    });
}

// ***************** Detecting keyboard press ***********
document.addEventListener("keypress", function(event){
    makeSound(event.key);
});

function makeSound(key) {

    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

        case "a":
            var tom_2 = new Audio('sounds/tom-2.mp3');
            tom_2.play();
            break;
        case "s":
            var tom_3 = new Audio('sounds/tom-3.mp3');
            tom_3.play();
            break;

        case "d":
            var tom_4 = new Audio('sounds/tom-4.mp3');
            tom_4.play();
            break;
        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "l":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
     
        default:
            console.log(key + " Wrong key press \n");
     }
}