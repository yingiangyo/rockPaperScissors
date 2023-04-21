function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}  

function game() {
    console.log('Called game()');
    let playerScore = 0;
    let computerScore = 0;

    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const playerSelection = button.id;
            const roundResult = playRound(playerSelection);
            console.log(`Player: ${playerSelection} vs Computer: ${getComputerChoice()} Result: ${roundResult}`);

            if (roundResult === 'win') {
                playerScore++;
            } else if (roundResult === 'lose') {
                computerScore++;
            }

            const scoreDiv = document.querySelector('#score');
            scoreDiv.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;

            if (playerScore === 5 || computerScore === 5) {
                let gameResult;
                if (playerScore > computerScore) {
                    gameResult = 'You win!';
                } else if (computerScore > playerScore) {
                    gameResult = 'You lose!';
                } else {
                    gameResult = 'You tied!';
                }

                const gameResultDiv = document.querySelector('#result');
                gameResultDiv.textContent = `${gameResult} Final score: Player: ${playerScore} | Computer: ${computerScore}`;

                playerScore = 0;
                computerScore = 0;
            }
        });
    });
    
    

    function playRound(playerSelection) {
    const computerSelection = getComputerChoice();

        if (playerSelection.toLowerCase() === "rock") {
            if (computerSelection === "scissors") {
                return("win");
            }
            else if (computerSelection === "paper") {
                return("lose");
            }
            else {
                return("tie");
            }
        }
        else if (playerSelection.toLowerCase() === "scissors") {
            if (computerSelection === "rock") {
                return("lose");
            }
            else if (computerSelection === "paper") {
                return("win");
            }
            else {
                return("tie");
            }
        }
        else if (playerSelection.toLowerCase() === "paper") {
            if (computerSelection === "scissors") {
                return("lose");
            }
            else if (computerSelection === "rock") {
                return("win");
            }
            else {
                return("tie");
            }
        }
        return result;
    }
}

game();