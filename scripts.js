


//console.log(playRound(playerSelection, computerSelection));

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}  



function game() {
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++) {
        let playerSelection = prompt("Round: " + (i + 1) + ": Rock, paper, or scissors?");
        const computerSelection = getComputerChoice();

        function playRound(playerSelection, computerSelection) {
            if (playerSelection.toLowerCase() === "rock") {
                if (computerSelection === "scissors") {
                    return("You Win! Rock beats Scissors.");
                }
                else if (computerSelection === "paper") {
                    return("You Lose! Paper beats Rock.");
                }
                else {
                    return("It is a tie.");
                }
            }
            else if (playerSelection.toLowerCase() === "scissors") {
                if (computerSelection === "rock") {
                    return("You Lose! Rock beats Scissors.");
                }
                else if (computerSelection === "paper") {
                    return("You Win! Scissors beats Paper.");
                }
                else {
                    return("It is a tie.");
                }
            }
            else if (playerSelection.toLowerCase() === "paper") {
                if (computerSelection === "scissors") {
                    return("You Lose! Scissors beats Paper.");
                }
                else if (computerSelection === "rock") {
                    return("You Win! Paper beats Rock.");
                }
                else {
                    return("It is a tie.");
                }
            }
        }

        let roundResult = playRound(playerSelection, computerSelection);
        console.log("Round " + (i + 1) + ": " + roundResult);

        if(roundResult.startsWith("You Win")) {
            playerScore++;
        }
        if(roundResult.startsWith("You Lose")) {
            computerScore++;
        }
    }
    if (playerScore > computerScore) {
        console.log("You won against the computer!");
    }
    else if (playerScore < computerScore) {
        console.log("You lost against the computer!");
    }
    else {
        console.log("You tied!");
    }
}

game();