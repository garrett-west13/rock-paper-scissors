const computerChoices = ["rock", "paper", "scissors"];

let wins = 0;
let losses = 0;
let ties = 0;

const getComputerChoice = () => {
  const randomIndex = Math.round(Math.random() * 2);
  return computerChoices[randomIndex];
};

const playRound = () => {
  const computerSelection = getComputerChoice();

  const playerSelection = prompt(
    "What do you choose (rock, paper or scissors)? ",
    "rock"
  );
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    console.log(
      "You won! You chose",
      playerSelection,
      "and the computer chose",
      computerSelection
    );
    wins++;
  } else if (computerSelection === playerSelection) {
    console.log(
      "It's a Draw! You chose",
      playerSelection,
      "and the computer chose",
      computerSelection
    );
    ties++;
  } else {
    console.log(
      "You Lost! You chose",
      playerSelection,
      "and the computer chose",
      computerSelection
    );
    losses++;
  }
};
const game = () => {
  while (true) {
    for (i = 0; i < 5; i++) {
      playRound();
    }
    if (wins > losses) {
      console.log(
        "You Won the Game! Wins:",
        wins,
        "Ties",
        ties,
        "Losses",
        losses
      );
    } else {
      console.log("You Lost! Wins:", wins, "Ties", ties, "Losses", losses);
    }
    const playAgain = prompt("Would you like to play again (y/n)? ", "y");
    if (playAgain === "y") {
      continue;
    } else {
      console.log("Thanks for playing!");
      break;
    }
  }
};

game();
