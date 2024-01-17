let randomNumber = Math.floor(Math.random() * 6) + 1;
let guessedNumber;
let x = 0;

do {
    guessedNumber = parseInt(prompt("Guess a Number from 1 to 6:"))
    x++

    switch (true) {
        case guessedNumber == randomNumber:

            switch (true) {
                case x === 1:
                    alert(`Congratulations, you guessed the correct number in ${x} try`)
                    break;
                default:
                    alert(`Congratulations, you guessed the correct number in ${x} tries`)
            }
            break;
        default:
            alert("Wrong guess! Try Again!")
    }
} while (guessedNumber !== randomNumber);