//Create a function `checkGuess` that takes a guess as parameter
//Compare guess to a secret number (1-100)
//Return feedback: "Too high", "Too low", or "Correct!"
//Test the function with multiple guesses
//Display all results

const readline = require("readline");

function checkGuess() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const secretNumber = 9;
    rl.question("Guess a number between 1 and 10: ", (answer) => {
        const userGuess = Number(answer);
        if (userGuess === secretNumber) {
            console.log("🎉 Correct! You guessed the number!");
        } else if (userGuess > secretNumber) {
            console.log("Too high! The number was " + secretNumber);
        } else {
            console.log("Too low! The number was " + secretNumber);
        }

        rl.close();
    });
}
checkGuess();