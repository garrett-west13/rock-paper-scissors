const computerChoices = ["Rock", "Paper", "Scissors"];

const getComputerChoice = () => {
  const randomIndex = Math.round(Math.random() * 2);
  computerChoice = computerChoices[randomIndex];
};

getComputerChoice();
