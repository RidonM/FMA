let sum = 0;
let number = parseInt(prompt('Write a positive number (Write 0 to finish):'));

while (number !== 0) {
    sum += number;
    number = parseInt(prompt('Write a positive number (Write 0 to finish):'));
}

document.write(`<h1>The sum of numbers you wrote is equal to "${sum}"</h1>`)
