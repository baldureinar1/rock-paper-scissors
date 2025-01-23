// Dom elements
const rockEl = document.querySelector(".rock-btn");
const paperEl = document.querySelector(".paper-btn");
const scissorsEl = document.querySelector(".scissors-btn");
const resultEl = document.querySelector(".result-round");
const scoreEl = document.querySelector(".score-text");

// Initialize game states
let humanScore = 0;
let computerScore = 0;
const WIN = 5;

// computer's choice
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const getComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  return choices[getRandomInt(3)];
};

function playRound(humanSelection, computerSelection) {
  if (humanSelection === computerSelection) {
    return {
      message: `It's a tie! Both chose ${humanSelection}`,
      result: 0
    };
  }

  const winConditions = {
    rock: "scissors",
    scissors: "paper",
    paper: "rock"
  };

  if (winConditions[humanSelection] === computerSelection) {
    return {
      message: `You win! ${humanSelection} beats ${computerSelection}`,
      result: 1
    };
  } else {
    return {
      message: `You lose! ${computerSelection} beats ${humanSelection}`,
      result: -1
    };
  }
}

function handleRound(humanSelection) {
  const computerSelection = getComputerChoice();
  const { message, result } = playRound(humanSelection, computerSelection)

  if (result === 1) humanScore++;
  else if (result == -1) computerScore++

  // update display
  resultEl.textContent = message;
  scoreEl.textContent = `Score: You ${humanScore} - ${computerScore} Computer`;

  if (humanScore === WIN || computerScore === WIN) {
    setTimeout(() => {
      announceWinner();
    }, 1000);
  }

  return;
}


function resetGame() {
  humanScore = 0;
  computerScore = 0;
  scoreEl.textContent = "Score: 0 - 0";
  resultEl.textContent = "New game! Make your choice...";
}

function announceWinner() {
  let message;
  if (humanScore > computerScore) {
    message = "Game Over - You win the game!";
  } else if (humanScore < computerScore) {
    message = "Game Over - Computer wins the game!";
  } else {
    message = "Game Over - It's a tie!";
  }
  resultEl.textContent = message;
  setTimeout(() => {
    resetGame();
  }, 2000);
}

// Add event listeners
rockEl.addEventListener("click", () => handleRound("rock"));
paperEl.addEventListener("click", () => handleRound("paper"));
scissorsEl.addEventListener("click", () => handleRound("scissors"));

