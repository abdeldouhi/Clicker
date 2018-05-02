console.log('connected');

// var player = require('play-sound')(opts = {})

let soundOnClick = new Audio("/sounds/click.mp3");
let PowerUp = new Audio("/sounds/PowerUp.wav");
let CashIn = new Audio("/sounds/MoneySound.mp3");





function Clicker(){ 
    var scorejoueur = document.getElementById("score").value;
    var bestscorejoueur = document.getElementById("bestscore").value;
    var power = document.getElementById("power").value;
    // var player = require('play-sound')(opts = {})


    scorejoueur = parseInt(scorejoueur)+parseInt(power);

    if(scorejoueur>bestscorejoueur){
        bestscorejoueur=scorejoueur
    }


    document.getElementById("score").value = scorejoueur;
    document.getElementById("bestscore").value = bestscorejoueur;
    console.log('Clicker fonctionne bien');
    soundOnClick.play();
   

}

function Power(){
        var power = document.getElementById("power").value;
        power =  parseInt(power)+1
        document.getElementById("power").value = power;
        console.log('Power fonctionne bien');
        PowerUp.play();
}

function Usine(){

    var autoClick = document.getElementById("auto").value;
    autoClick=parseInt(autoClick)+1;
    document.getElementById("auto").value = autoClick;
    console.log('autoclick fonctionne bien');
};
    