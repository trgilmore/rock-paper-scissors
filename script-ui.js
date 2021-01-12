let winScore = 0;
let loseScore = 0;
let drawScore = 0;
let computerSelection;
let playerSelection;
let results;
const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")

rock.addEventListener("click", function() { 
    results = document.querySelector("#results").textContent = playRound("rock", computerSelection)
});
paper.addEventListener("click", function() { 
    results = document.querySelector("#results").textContent = playRound("paper", computerSelection)
 });
 scissors.addEventListener("click", function() { 
    results = document.querySelector("#results").textContent = playRound("scissors", computerSelection)
 });

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

    const throwdown = ("Player throws " + playerSelection + "\r\n\r\nComputer throws " + computerSelection)
    const win = "\r\nCongratulations! " + playerSelection.toUpperCase() + " beats " + computerSelection;
    const lose = "\r\nSorry " + computerSelection.toUpperCase() + " beats " + playerSelection;
    const draw = "\r\nDraw, please try again."; 
    if (!(playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors")) {
        console.log("Please play by the rules.")
        return;
    }else if (playerSelection == "rock" && computerSelection == "rock") {
        ++drawScore;
        return throwdown + "\r\n\r\n" + draw;
    }else if (playerSelection == "rock" && computerSelection == "paper"){
        ++loseScore;
        return throwdown + "\r\n\r\n" + lose;
    }else if (playerSelection == "rock" && computerSelection == "scissors"){
        ++winScore;
        return throwdown + "\r\n\r\n" + win;
    }else if (playerSelection == "paper" && computerSelection == "rock") {
        ++winScore;
        return throwdown + "\r\n\r\n" + win;
    }else if (playerSelection == "paper" && computerSelection == "paper"){
        ++drawScore;
        return throwdown + "\r\n\r\n" + draw;
    }else if (playerSelection == "paper" && computerSelection == "scissors"){
        ++loseScore;
        return throwdown + "\r\n\r\n" + lose;
    }else if (playerSelection == "scissors" && computerSelection == "rock") {
        ++loseScore;
        return throwdown + "\r\n\r\n" + lose;
    }else if (playerSelection == "scissors" && computerSelection == "paper"){
        ++winScore;
        return throwdown + "\r\n\r\n" + win;
    }else if (playerSelection == "scissors" && computerSelection == "scissors"){
        ++drawScore;
        return throwdown + "\r\n\r\n" + draw;
    }
}
window.addEventListener("click", function () {
    if (winScore < 5 && loseScore < 5) {
        document.querySelector("#humanscore").textContent = winScore
        document.querySelector("#humanloss").textContent = loseScore
        document.querySelector("#humandraw").textContent = drawScore
        document.querySelector("#computerscore").textContent = loseScore
        document.querySelector("#computerloss").textContent = winScore
        document.querySelector("#computerdraw").textContent = drawScore
    }else if (loseScore == 5) {
        document.querySelector("#computerscore").textContent = loseScore
        document.querySelector("#humanloss").textContent = loseScore
        document.querySelector("#marquee").textContent = "Binary Solo: 0101010001101000011001010010000001101000011\r\n1010101101101011000010110111001110011001000000110000101110010011001010010000\r\n00110010001100101011000010110010000100001"
        window.removeEventListener("click", ()=>{})
    } else {
        document.querySelector("#humanscore").textContent = winScore
        document.querySelector("#marquee").textContent = "Suck it Watson"
        window.removeEventListener("click", ()=>{})
    }
    
});
function game(number) {
    for (let index = 0; index < number; index++) {
        console.log(playRound(playerSelection, computerSelection))
    }
    console.log("\nWins: " + winScore + "\nLosses: " + loseScore + "\nDraws: " + drawScore)  
}
//game(5);