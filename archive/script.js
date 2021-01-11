let winScore = 0;
let loseScore = 0;
let drawScore = 0;
let computerSelection;
let playerSelection;
function computerPlay() {
    let selector = Math.random()
    let selection;
    if (selector <= .33) {
        selection = "rock";
    } else if (selector > .33 && selector <= .66){
        selection = "paper"
    } else {
        selection = "scissors"
    }   
      return selection;
    }
function playRound (playerSelection, computerSelection){
    computerSelection = computerPlay();
    playerSelection = prompt("Please select: Rock, Paper, or Scissors");
    playerSelection = playerSelection.toLowerCase();
    console.log("Player throws " + playerSelection) 
    console.log("Computer throws " + computerSelection)
    const win = "Congratulations! " + playerSelection.toUpperCase() + " beats " + computerSelection;
    const lose = "Sorry " + computerSelection.toUpperCase() + " beats " + playerSelection;
    const draw = "Draw, please try again."; 
    if (!(playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors")) {
        console.log("Please play by the rules.")
        return;
    }else if (playerSelection == "rock" && computerSelection == "rock") {
        ++drawScore;
        return draw;
    }else if (playerSelection == "rock" && computerSelection == "paper"){
        ++loseScore;
        return lose;
    }else if (playerSelection == "rock" && computerSelection == "scissors"){
        ++winScore;
        return win;
    }else if (playerSelection == "paper" && computerSelection == "rock") {
        ++winScore;
        return win;
    }else if (playerSelection == "paper" && computerSelection == "paper"){
        ++drawScore;
        return draw;
    }else if (playerSelection == "paper" && computerSelection == "scissors"){
        ++loseScore;
        return lose;
    }else if (playerSelection == "scissors" && computerSelection == "rock") {
        ++loseScore;
        return lose;
    }else if (playerSelection == "scissors" && computerSelection == "paper"){
        ++winScore;
        return win;
    }else if (playerSelection == "scissors" && computerSelection == "scissors"){
        ++drawScore;
        return draw;
    }
}
function game(number) {
    for (let index = 0; index < number; index++) {
        console.log(playRound(playerSelection, computerSelection))
    }
    console.log("\nWins: " + winScore + "\nLosses: " + loseScore + "\nDraws: " + drawScore)  
}
game(5);