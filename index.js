function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  let computerChoice =
    randomNumber === 1 ? "rock" : randomNumber === 2 ? "paper" : "scissor";
  return computerChoice;
}

function getHumanChoice() {
  let humanInput = prompt("Enter Your Choice: ").toLowerCase().trim();
  let humanChoice;
  if (humanInput === "rock") {
    humanChoice = "rock";
  } else if (humanInput === "paper") {
    humanChoice = "paper";
  } else if (humanInput === "scissor") {
    humanChoice = "scissor";
  }else{
    humanChoice = getHumanChoice();
  }

  return humanChoice;
}

function playGame() {
  function playRound(computerChoice, humanChoice) {
    let win = `You win ${humanChoice} beats ${computerChoice}`;
    let lose = `You lose ${computerChoice} beats ${humanChoice}`;
    let result;

    if (
      (computerChoice === "rock" && humanChoice === "paper") ||
      (computerChoice === "paper" && humanChoice === "scissor") ||
      (computerChoice === "scissor" && humanChoice === "rock")
    ) {
      result = win;
      humanScore += 1;
      
    } else if (computerChoice === humanChoice) {
      result = "Tie";
   
    }  else {
      result = lose;
      computerScore += 1;
      
    }
    round += 1;
    return result;
  }

  let humanScore = 0;
  let computerScore = 0;
  let round = 1;

  for (i = 0; i < 5; i++) {
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();

    console.log(`Round: ${round}`);

    let output = playRound(computerChoice, humanChoice);
    console.log(output);

    console.log(`Your Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);
    console.log("---------------------------");
  }

  if (humanScore > computerScore) {
    console.log("You Win");
  } else if (humanScore === computerScore) {
    console.log("The match was tie!");
  } else {
    console.log("You Lose");
  }
}

playGame();
