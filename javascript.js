let computerScore = 0, playerScore = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    return ["rock", "paper", "scissors"][getRandomInt(3)];
}

function displayScore() {
    document.querySelector("#playerScore").textContent = playerScore;
    document.querySelector("#computerScore").textContent = computerScore;
}

function playRound(playerChoice, playerElement) {
    let computerChoice = getComputerChoice();
    let idName = "#computer" + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
    const computerChoiceElement = document.querySelector(idName);

    if (playerChoice === computerChoice) {
        computerChoiceElement.classList.add("tie");
        playerElement.classList.add("tie");
        computerScore++, playerScore++;
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        computerChoiceElement.classList.add("loser");
        playerElement.classList.add("winner");
        playerScore++;
    } else {
        computerChoiceElement.classList.add("winner");
        playerElement.classList.add("loser");
        computerScore++;
    }

    setTimeout(function() {
        displayScore();
        computerChoiceElement.setAttribute("class", "");
        playerElement.setAttribute("class", "");
    }, 500);
}

const choices = [
    { id: "#playerRock", choice: "rock" },
    { id: "#playerPaper", choice: "paper" },
    { id: "#playerScissors", choice: "scissors" }
];

choices.forEach(({ id, choice }) => {
    const playerElement = document.querySelector(id);
    playerElement.addEventListener("click", () => playRound(choice, playerElement));
});
