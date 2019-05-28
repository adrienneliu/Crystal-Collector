$(document).ready(function () {

    var winCount = "";
    var loseCount = "";
    var scoreCount = 0;

//Each food-button will generate a random number between 1-12 that stays consistant until the player wins/loses the game. Win/lose count will go up depending on whether or not player matches the number. 

    var computerNumber = reset();

    $(".food").on("click", function () {
        scoreCount += parseInt($(this).val());
        $("#button-score").text(scoreCount);

        if (scoreCount === computerNumber) {
            winCount++;
            $("#button-win").text(winCount);
            scoreCount = 0;
            $("#button-score").text(scoreCount);
            computerNumber = reset();
        }
        if (scoreCount > computerNumber) {
            loseCount++;
            $("#button-lose").text(loseCount);
            scoreCount = 0;
            $("#button-score").text(scoreCount);
            computerNumber = reset();
        }

    })

})

// When game restarts after a win/lose, the computer+food-buttons will generate a new number.
function reset() {
    var computerGenerate = Math.floor(Math.random() * 101) + 19;
    $("#button-guess").text(computerGenerate);

    for (var i = 0; i < 1; i++) {

        $("#button-1").val(Math.floor(Math.random() * 13));
        $("#button-2").val(Math.floor(Math.random() * 13));
        $("#button-3").val(Math.floor(Math.random() * 13));
        $("#button-4").val(Math.floor(Math.random() * 13));
    }

//As often as function reset needs to be called, the value of computerGenerate is assigned to computerNumber as the value of reset(); 
    return computerGenerate;
}