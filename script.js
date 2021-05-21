const gestures = ["rock", "paper", "scissors"];

// determine the winner based on the selections
function playRound(humanSelection, computerSelection) {
    if (humanSelection === computerSelection) {
        return "draw";
    }

    if ((humanSelection === "rock" && computerSelection === "scissors")
        || (humanSelection === "paper" && computerSelection === "rock")
        || (humanSelection === "scissors" && computerSelection === "paper")) {
        return "human";
    } else {
        return "computer";
    }
}

// return a valid gesture from prompt
function humanPlay() {
    let selection;

    do {
        selection = prompt("Rock, paper or scissors?")
            .toLowerCase();
    } while (!gestures.includes(selection));

    return selection;
}

// return a random gesture
function computerPlay() {
    let selection = random(0, gestures.length - 1);

    return gestures[selection];
}

// play a game with n rounds
function game(rounds) {
    let humanScore = 0;
    let computerScore = 0;

    let outcome;

    for (let i = 0; i < rounds; i++) {
        console.group(`Round ${i + 1}`);

        humanSelection = humanPlay();
        console.log(`You selected ${humanSelection}`);

        computerSelection = computerPlay();
        console.log(`The computer selected ${computerSelection}`);

        outcome = playRound(humanSelection, computerSelection);

        if (outcome === "human") {
            humanScore++;

            console.log("You won this round!");
        } else if (outcome === "computer") {
            computerScore++;

            console.log("The computer won this round!");
        } else {
            console.log("It's a draw!");
        }

        console.log(`Your score: ${humanScore}`);
        console.log(`The computer's score: ${computerScore}`);

        console.groupEnd(`Round ${i + 1}`)
    }

    console.group("Result");

    if (humanScore > computerScore) {
        console.log("You won! :-)");
    } else if (humanScore < computerScore) {
        console.log("The computer won! :-(");
    } else {
        console.log("It's a draw! :-|");
    }

    console.log(`Your final score: ${humanScore}`);
    console.log(`The computer's final score: ${computerScore}`);

    console.groupEnd("Result");
}

game(5); // play 5 rounds


/* Helper Functions */

/**
 * Returns a random integer between and including min and max
 * 
 * @param {number} min
 * @param {number} max
 * @returns {number}
 *  */
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}