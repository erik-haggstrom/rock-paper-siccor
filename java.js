const box = document.querySelector('.box')
const knapp = document.querySelector('.knapp')


function getComputerChoice() {
const computerChoice = ['rock', 'paper', 'scissors']
return computerChoice[Math.floor(Math.random() * 3)];
}

function playRound (playerSelection, computerSelection, scores) {
if (playerSelection === computerSelection){
  console.log('It is a draw')
}
else if(
  (playerSelection === "rock" && computerSelection === "scissors") ||
  (playerSelection === "paper" && computerSelection === "rock") ||
  (playerSelection === "scissors" && computerSelection === "paper")
){
  console.log(`You win ${playerSelection} beats ${computerSelection} `);
  scores.playerWins++;
}
else{
  console.log(`The computer wins ${computerSelection} beats ${playerSelection} `);
  scores.computerWins++;
}
}

function game() {
let scores = {playerWins: 0, computerWins: 0};

for (let i = 0; i < 1000; i++){
  let playerSelection = prompt('Rock paper or scissors?: ').toLowerCase();
  let computerSelection = getComputerChoice();
  playRound (playerSelection, computerSelection, scores);
  console.log(scores.playerWins)

  if (scores.playerWins === 3){
    console.log('You won the game!!');
    break;
  }
  else if (scores.computerWins === 3){
    console.log('The computer won the game!!');
    break;
  }
}
if (scores.playerWins !== 3 && scores.playerWins > scores.computerWins){
  console.log('You got the most wins congrats!!')
}
else if (scores.computerWins !== 3 && scores.computerWins > scores.playerWins){
  console.log('The computer got the most wins YOU LOSE!!')
}
else if (scores.playerWins === scores.computerWins){
  console.log("You and the computer won the same amout of games!")
}

}


