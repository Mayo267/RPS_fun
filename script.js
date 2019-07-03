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

//Event listeners that handle the click event for the images
rock.addEventListener("click", function(){
    console.log("Rock worked!");
    generateChoice();
});

paper.addEventListener("click", function(){
    console.log("Paper worked!");
    generateChoice();
});

scissors.addEventListener("click", function(){
    console.log("Scissors worked!");
    generateChoice();
});

