const knappRock = document.querySelector('.rock');
const knappPaper = document.querySelector('.paper');
const knappScissors = document.querySelector('.scissors');
const resultat = document.querySelector('.resultat');
const spelare = document.querySelector('.spelare')
const dator = document.querySelector('.dator')

let scores = {playerWins: 0, computerWins: 0};

function rock() {
  let playerSelection = "rock";
  let computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection, scores);
  dator.textContent = scores.computerWins;
  spelare.textContent = scores.playerWins;

  if (scores.playerWins == 5){
    resultat.textContent = 'You won!'
    knappRock.removeEventListener('click', rock);
    knappPaper.removeEventListener('click', paper);
    knappScissors.removeEventListener('click', scissors);
  }
  else if (scores.computerWins == 5){
    resultat.textContent = 'The computer won'
    knappRock.removeEventListener('click', rock);
    knappPaper.removeEventListener('click', paper);
    knappScissors.removeEventListener('click', scissors);
  }
}

function paper() {
  let playerSelection = "paper";
  let computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection, scores);
  spelare.textContent = scores.playerWins;
  dator.textContent = scores.computerWins;

  if (scores.playerWins == 5){
    resultat.textContent = 'You won!'
    knappRock.removeEventListener('click', rock);
    knappPaper.removeEventListener('click', paper);
    knappScissors.removeEventListener('click', scissors);
  }
  else if (scores.computerWins == 5){
    resultat.textContent = 'The computer won'
    knappRock.removeEventListener('click', rock);
    knappPaper.removeEventListener('click', paper);
    knappScissors.removeEventListener('click', scissors);
  }
}

function scissors() {
  let playerSelection = "scissors";
  let computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection, scores);
  dator.textContent = scores.computerWins;
  spelare.textContent = scores.playerWins;

  if (scores.playerWins == 5){
    resultat.textContent = 'You won!'
    knappRock.removeEventListener('click', rock);
    knappPaper.removeEventListener('click', paper);
    knappScissors.removeEventListener('click', scissors);
  }
  else if (scores.computerWins == 5){
    resultat.textContent = 'The computer won'
    knappRock.removeEventListener('click', rock);
    knappPaper.removeEventListener('click', paper);
    knappScissors.removeEventListener('click', scissors);
  }
}

knappRock.addEventListener('click', rock)
  

knappPaper.addEventListener('click', paper)
  

knappScissors.addEventListener('click', scissors)


function getComputerChoice() {
const computerChoice = ['rock', 'paper', 'scissors']
return computerChoice[Math.floor(Math.random() * 3)];
}

function playRound (playerSelection, computerSelection, scores) {
if (playerSelection === computerSelection){
  resultat.textContent = 'It is a draw'
}
else if(
  (playerSelection === "rock" && computerSelection === "scissors") ||
  (playerSelection === "paper" && computerSelection === "rock") ||
  (playerSelection === "scissors" && computerSelection === "paper")
){
  resultat.textContent = `You win ${playerSelection} beats ${computerSelection} `;
  scores.playerWins++;
}
else{
  resultat.textContent = `The computer wins ${computerSelection} beats ${playerSelection} `;
  scores.computerWins++;
}

}



