function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let choice = getRandomInt(3);
    if (choice == 1) return "rock";
    else if (choice == 2) return "paper";
    else return "scissors";
}

function getHumanChoice() {
    let choice = prompt("What is your choice? rock / paper / scissors");
    return choice;
}

function playGame(n) {
    let humanScore = 0, computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice == computerChoice) return;
        if (humanChoice == "rock" && computerChoice == "scissors") humanScore++;
        else if (humanChoice == "scissors" && computerChoice == "paper") humanScore++;
        else if (humanChoice == "paper" && computerChoice == "rock") humanScore++;
        else computerScore++;
    }

    for (let i = 0; i < n; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log("Human choose " + humanSelection + ", computer choose " + computerSelection);
        console.log("Human points " + humanScore + ", computer points " + computerScore);
    }

    if (humanScore == computerScore) return "Tie";
    else if (humanScore < computerScore) return "Computer Wins!";
    else return "Human Wins!";
}

console.log(playGame(5));