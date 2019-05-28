// Reset function - Player will see computer's generated guess but everything else is clear
// When game restarts after a win/lose, the computer+food-buttons will generate a new number and win/lose/score counter will go to zero

$(document).ready(function() {

    //variables
var winCount = ""; 
var loseCount = "";
var scoreCount = ""; 

// computer will generate random number between 19-120
// var computerNumber = generateComputer();
// $("#button-guess").append(generateComputer);

// // for (var i = 0; i < 3; i++) {
// //     var random = Math.floor(Math.random()*3);  
// })
// function generateComputer(){
//     return Math.floor(Math.random() * 101 ) + 19;

// }

var computerNumber =  Math.floor(Math.random() * 101 ) + 19;
$("#button-guess").append(computerNumber);


//Each food-button will generate a random number that stays consistant until the player wins/loses the game. 
//between 1-12
$(".food").on("click", function() {
    
    console.log('foodNumber > ' + $(this).val());

    // if (foodNumber > computerNumber){
    //     loseCount++ 

    // }
    
    console.log('THIS >>>' + $(this).val());

//foodNumber = parseInt(foodNumber);
})

for(var i=0 ; i<1;i++){
    
    $("#button-1").val(Math.floor(Math.random() * 13 ));
    $("#button-2").val(Math.floor(Math.random() * 13 ));
    $("#button-3").val(Math.floor(Math.random() * 13 ));
    $("#button-4").val(Math.floor(Math.random() * 13 ));
    
}

// function reset(){
    
// } 


//pressing the food-buton, the score will display the first value and keep increasing depending on the button's value 






})