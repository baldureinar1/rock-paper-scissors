const ps = require("prompt-sync");
const prompt = ps();

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const getComputerChoice = () => {
  const math = getRandomInt(3);
  if (math <= 1) {
    return "rock";
  } else if (math <= 2) {
    return "scissors";
  } else {
    return "paper";
  }
};

const getHumanChoice = () => {
  const input = prompt("Rock, paper or scissors? ");
  return input.toLowerCase();
};

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    const playRound = (humanSelection, computerSelection) => {
      if (humanSelection === computerSelection) {
        console.log(`It's a tie! Both chose ${humanSelection}`);
        return 0; // Tie
      } else if (
        (humanSelection === "rock" && computerSelection === "scissors") ||
        (humanSelection === "scissors" && computerSelection === "paper") ||
        (humanSelection === "paper" && computerSelection === "rock")
      ) {
        console.log(`You win! ${humanSelection} beats ${computerSelection}`);
        return 1; // Human wins
      } else {
        console.log(`You lose! ${computerSelection} beats ${humanSelection}`);
        return -1; // Computer wins
      }
    };

    const result = playRound(humanSelection, computerSelection);

    if (result === 1) {
      humanScore++;
    } else if (result === -1) {
      computerScore++;
    }

    console.log(`Score: You ${humanScore} - ${computerScore} Computer`);
  }

  if (humanScore > computerScore) {
    console.log("Congratulations! You won the game!");
  } else if (humanScore < computerScore) {
    console.log("You lost the game!");
  } else {
    console.log("It's a tie!");
  }
}

playGame();
