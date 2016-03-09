////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
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

var playerMove;
var computerMove;
getPlayerMove();
getComputerMove();
getWinner();
playToFive();

function getPlayerMove(move) {
    if (move === undefined || null) {
       return getInput();
    }
    else{
        return move;
    }
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    /* Your Expression */
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    /* Your Expression */
    return move || randomPlay()
}

function getWinner(playerMove, computerMove){
    var winner;
    if (computerMove==='scissors'&&playerMove==='paper'){
        console.log("Computer Wins");
        winner='Computer';
    }
    else if (computerMove==='scissors' && playerMove==='scissors'){
        console.log("Tie");
        winner='Tie';
    }
    else if (computerMove==='scissors' && playerMove==='rock'){
        console.log("Player Wins");
        winner='Player';
    }
    else if (computerMove==='paper' && playerMove==='scissors'){
        console.log("Player Wins");
        winner='Player';
    }
    else if (computerMove==='paper' && playerMove==='paper'){
        console.log("tie");
        winner='Tie'
    }
    else if (computerMove==='paper' && playerMove==='rock'){
        console.log("Computer Wins");
        winner='Computer';
    }
    else if (computerMove==='rock' && playerMove==='paper'){
        console.log("Player Wins");
        winner='Player';
    }
    else if (computerMove==='rock' && playerMove==='scissors'){
        console.log("Player Wins");
        winner='Computer';
    }
    else if (computerMove==='rock' && playerMove==='rock'){
        console.log("Tie");
        winner='Tie';
    }
    else {
        console.log("Computer Wins");
        winner='Computer';
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var winner=getWinner(getPlayerMove(), getComputerMove());
        if (winner==='Computer') {
        computerWins += 1;
    }
    else if (winner==='Player') {
        playerWins += 1;
    }
    else if (computerWins===5){
        console.log("Computer Wins");
    }
    else if (playerWins===5){
        console.log("Player Wins");
    }
  
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    console.log('Player chose ' + getPlayerMove() + ' while Computer chose ' + getComputerMove());
    console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
    return [playerWins, computerWins];
}
