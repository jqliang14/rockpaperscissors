// let randomNumber = Math.random(1,2,3);
let userChoice;
// rock = 1;
// scissor = 2;
// paper = 3;
let userChoiceNum;
// In your click handler, generate a random number and assign it to the randomNumber variable

function getRandomComputerChoice() {
  let randomNumber = Math.ceil(Math.random() * 3);
  if (randomNumber === 1) {
    return "rock";
  } else if (randomNumber === 2) {
    return "scissor";
  } else if (randomNumber === 3) {
    return "paper";
  }
}

function getWinner(userInput, computerChoice) {
  if (userInput === computerChoice) {
    return 'Draw';
  } else if (userInput === "scissor" && computerChoice === "paper") {
    return "User Wins";
  } else if (userInput === "rock" && computerChoice === "scissor") {
    return "User Wins";
  } else if (userInput === "paper" && computerChoice === "rock") {
    return "User Wins";
  } else if (userInput === "scissor" && computerChoice === "rock") {
    return "Computer Wins";
  } else if (userInput === "rock" && computerChoice === "paper") {
    return "Computer Wins";
  } else if (userInput === "paper" && computerChoice === "scissor") {
    return "Computer Wins";
  }
}

$(".play").click(function () {
  let userInput = $("input").val().toLowerCase();
  $(".userChoice").text(userInput);
  let computerChoice = getRandomComputerChoice();
  $(".computerChoice").text(computerChoice);
  let winner = getWinner(userInput, computerChoice);
    $(".result").text(winner);

});
