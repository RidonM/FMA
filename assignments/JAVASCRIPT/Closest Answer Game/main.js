let answer = Math.floor(Math.random() * 20) + 1;

let playerOne = parseInt(prompt('Player One:'));
let playerTwo = parseInt(prompt('Player Two:'));

if (isNaN(playerOne) || isNaN(playerTwo)) {
    throw new Error('Please write only numbers');
}

if ((playerOne < 0 || playerOne > 20) || (playerTwo < 0 || playerTwo > 20)) {
    throw new Error('Only select numbers from 0-20');
}

let playerOneDistance = Math.abs(answer - playerOne);
let playerTwoDistance = Math.abs(answer - playerTwo);

let winner;
if (playerOneDistance < playerTwoDistance) {
    winner = playerOneDistance;
}

else if (playerTwoDistance < playerOneDistance) {
    winner = playerTwoDistance;
}

else {
    winner = isNaN;
}

let bckColorOne = document.getElementById("p-one");
let bckColorTwo = document.getElementById("p-two");


document.getElementById("answer1").innerHTML = `The correct answer is ${answer}`;
document.getElementById("p-one-answer").innerHTML = `${playerOne}`;
document.getElementById("p-two-answer").innerHTML = `${playerTwo}`;



if (winner == playerOneDistance) {
    bckColorOne.style.backgroundColor = "green";
    bckColorTwo.style.backgroundColor = "red";
}

else if (winner == playerTwoDistance) {
    bckColorTwo.style.backgroundColor = "green";
    bckColorOne.style.backgroundColor = "red";
}

else {
    bckColorOne.style.backgroundColor = "orange";
    bckColorTwo.style.backgroundColor = "orange";
}