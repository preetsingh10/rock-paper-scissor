// selecting all the dom elements
const rockButton = document.querySelector(".rock-btn");
const paperButton = document.querySelector(".paper-btn");
const scissorButton = document.querySelector(".scissors-btn");
const outputScreen = document.querySelector(".output-screen");

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  let computerChoice =
    randomNumber === 1 ? "rock" : randomNumber === 2 ? "paper" : "scissor";
  return computerChoice;
}

function playGame() {
  // game essential variables

  let humanScore = 0;
  let computerScore = 0;
  let round = 1;
  // create the elements to display rounds , score and winner
  const roundHeading = document.createElement("h2");
  const resultHeading = document.createElement("h3");
  const humanScoreHeading = document.createElement("h4");
  const computerScoreHeading = document.createElement("h4");

  roundHeading.textContent = `Round: 1`;

  outputScreen.appendChild(roundHeading);
  outputScreen.appendChild(resultHeading);
  outputScreen.appendChild(humanScoreHeading);
  outputScreen.appendChild(computerScoreHeading);

  // in every round this code will execute
  function playRound(computerChoice, humanChoice) {
    // the output text variables after every round
    let win = `You win ${humanChoice} beats ${computerChoice}`;
    let lose = `You lose ${computerChoice} beats ${humanChoice}`;

    let result;

    // main game logic

    if (
      (computerChoice === "rock" && humanChoice === "paper") ||
      (computerChoice === "paper" && humanChoice === "scissor") ||
      (computerChoice === "scissor" && humanChoice === "rock")
    ) {
      result = win;
      humanScore += 1;
    } else if (computerChoice === humanChoice) {
      result = "Tie";
    } else {
      result = lose;
      computerScore += 1;
    }

    round += 1;
    roundHeading.textContent = `Round: ${round}`;
    resultHeading.textContent = result;
    humanScoreHeading.textContent = `Score: ${humanScore}`;
    computerScoreHeading.textContent = `Computer: ${computerScore}`;
    // who 'wins' or 'lose' logic
    if (humanScore === 5) {
      resultHeading.textContent = "You Win the game yeahhhhh!";
      humanScore = 0;
      computerScore = 0;
      round = 0;
    } else if (computerScore === 5) {
      resultHeading.textContent = "Computer wins the game yeahhhhh!";
      humanScore = 0;
      computerScore = 0;
      round = 0;
    }
  }

  //assign the click function to the buttons

  rockButton.addEventListener("click", () => {
    playRound(getComputerChoice(), "rock");
  });
  paperButton.addEventListener("click", () => {
    playRound(getComputerChoice(), "paper");
  });
  scissorButton.addEventListener("click", () => {
    playRound(getComputerChoice(), "scissor");
  });

  roundHeading.textContent = `Round: ${round}`;

  result.textContent = output;
}

playGame();
