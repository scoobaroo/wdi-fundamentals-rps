////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

var getPlayerMove = function(move) {
    return playerMove;
}

function getPlayerMove(move) {
    var move;
    if (move== undefined || null){
        getInput()
   }
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return PlayerMove/* Your Expression */;
}

var getComputerMove = function(move){
    return computerMove;
}

function getComputerMove(move) {
    var move;
    if (move== undefined || null){
        randomPlay()
   }
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return ComputerMove/* Your Expression */;
}

var getWinner  = function(playerMove, computerMove){

    if (computerMove>0.66 && (playerMove<0.66 && playerMove>0.33)){
        console.log("Computer Wins");
    }
    else if (computerMove>0.66 && playerMove>0.66){
        console.log("Tie");
    }
    else if (computerMove>0.66 && playerMove<0.66){
        console.log("Player Wins");
    }
    else if ((computerMove<0.66 && computerMove>0.33) && playerMove>0.66){
        console.log("Player Wins");
    }
    else if (computerMove>0.33 && playerMove>0.33){
        console.log("tie");
    }
    else if (computerMove<0.33 && (playerMove<0.66 && playerMove>0.33)){
        console.log("Player Wins");
    }
    else if (computerMove<0.33 && playerMove<9.33){
        console.log("tie");
    }
    else {
        console.log("Computer Wins");
    }
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (computerMove>playerMove)
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    if (winner==computer) {
        var computerWins += 1
    }
    if (winner==player) {
        var playerWins += 1
    }
    if (computerWins==5){
        console.log("Computer Wins")
    }
    if (playerWins==5){
        console.log("Player Wins")
    }
    return [playerWins, computerWins];
}

