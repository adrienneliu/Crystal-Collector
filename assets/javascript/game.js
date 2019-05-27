//variables
var winCount = ""; 
var loseCount = "";
var scoreCount = ""; 






// Reset function - Player will see computer's generated guess but everything else is clear
// When game restarts after a win/lose, the computer+food-buttons will generate a new number and win/lose/score counter will go to zero

$(document).ready(function() {

// computer will generate random number between 19-120
var computerNumber = generateComputer();
$("#button-guess").append(generateComputer);

// for (var i = 0; i < 3; i++) {
//     var random = Math.floor(Math.random()*3);  
})
function generateComputer(){
    return Math.floor(Math.random() * 100 ) + 19;
}

//Each food-button will generate a random number that stays consistant until the player wins/loses the game. 
//between 1-12
//pressing the food-buton, the score will display the first value and keep increasing depending on the button's value 

//function for recognizing if the score is equal to or higher than computer's guess
//

