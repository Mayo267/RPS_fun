var userScore = 0;
var compScore = 0;

//Assinging the id to a variable for the scores
var userScoreId = document.getElementById("pScore");
var compScoreId = document.getElementById("cScore");

//Assigning the id to a vaiable for the lower description and result divs
var descH1 = document.getElementById("desc");
var resultH2 = document.getElementById("result");

//Assigning the images to a variable
var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");

//Grabs the table in the HTML without using a class or id
var table = document.querySelector("table");

//Change the color of the border depending on who is winning
function updateColor() {
    if( userScore > compScore ) {
        //Player is winning
        table.style.border = "5px solid #38d020"
    } else if ( compScore > userScore ) {
        //Computer is winnning
        table.style.border = "5px solid #d21f1f"
    } else {
        //If there is a draw
        table.style.border = "5px solid #363636"
    }
}

//Computer function for generating random choice
function generateChoice() {
    //Rock is 0, Paper is 1, Scissors is 2
    var number = Math.floor(Math.random() * 3);
    //A switch case for the computer's random choice
    switch( number ) {
        case 0:
            descH1.innerHTML = "Computer picked Rock";
            return 'r';
        case 1:
            descH1.innerHTML = "Computer picked Paper";
            return 'p';
        case 2:
            descH1.innerHTML = "Computer picked Scissors";
            return 's';
    }
};

//Updating the score of the game
function updateScore() {
    userScoreId.innerHTML = userScore;
    compScoreId.innerHTML = compScore;
};

//A function to determine the win, lose or draw cases
function play( choice ) {
    var choice2 = generateChoice();
    var matchup = choice + choice2
    console.log(matchup);

    switch( matchup ){
        case "rr":
        case "pp":
        case "ss":
            resultH2.innerHTML = "It's a DRAW";
            break;
        case "rs":
        case "pr":
        case "sp":
            resultH2.innerHTML = "You WON this round";
            userScore++;
            break;
        case "rp":
        case "ps":
        case "sr":
            resultH2.innerHTML = "You LOST this round";
            compScore++;
            break;
        
    }
    updateScore();
    updateColor();
};

//Event listeners that handle the click event for the images
rock.addEventListener("click", function(){
    console.log("Rock worked!");
    play("r");
});

paper.addEventListener("click", function(){
    console.log("Paper worked!");
    play("p");
});

scissors.addEventListener("click", function(){
    console.log("Scissors worked!");
    play("s");
});

