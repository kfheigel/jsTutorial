let playGame = confirm ("shall we play?");

if (playGame) {
    let playerChoice = prompt("please enter rock, paper or scissors.")
    if (playerChoice) {
        let playerOne = playerChoice.trim().toLowerCase();
        if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors") {
            let computerChoice = Math.floor(Math.random() * 3 + 1)
            let computer = computerChoice === 1 ? "rock"
                : computerChoice === 2 ? "paper"
                : "scissors";
                let result = 
                    playerOne === computer ? "Tie game"
                    : playerOne === "rock" && computer === "paper"
                    ? `playerOne: ${playerOne}\nComputer: ${computer} \nComputer wins!`
                    : playerOne === "paper" && computer === "scissors"
                    ? `playerOne: ${playerOne}\nComputer: ${computer} \nComputer wins!`
                    : playerOne === "scissors" && computer === "rock"
                    ? `playerOne: ${playerOne}\nComputer: ${computer} \nComputer wins!`
                    : `playerOne: ${playerOne}\nComputer: ${computer} \nPlayer wins!`;

                alert(result)

                let playAgain = confirm("play again?");
                playAgain ? location.reload() : alert("Ok, thanks for playing");
        } else {    
            alert("You didnt't enter rock, paper, scissors");
        }

    } else {
        alert ("I guess you changed your mind.");
    }
} else {
    alert("Ok, maybe next time");
}