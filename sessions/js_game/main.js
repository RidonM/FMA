/*

Author : Ridon Maliqi
date: Jan 4, 2024

Title: Guess a number 1 - 10
Tries:3
Results: "Congrats" OR "You lost!"

*/

let guess = Math.floor(Math.random() * 10) + 1;
console.log("The computer guessed" + guess);

let guessNumber = parseInt(prompt("Guess a number 1-10"));

if (guessNumber == guess) {
    console.log("Congrats"); break;
}

else {
    if (guessNumber > guess) {
        guessNumber = parseInt(prompt("Guess lower"));
    }
    else if (guessNumber < guess) {
        guessNumber = parseInt(prompt("Guess higher"));
    }
    else {

    }
}

