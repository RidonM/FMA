// 1.

let greet = function (message) {
    console.log(message);
}

greet('Hello World');


// 2.

let string = function (a) {
    console.log(a);
}

string(prompt('Type Something:'));


// 3.

let kilometersToMiles = (kilometers) => {
    let convert = 0.621371;

    let miles = kilometers * convert;

    console.log(miles);
}

kilometersToMiles(parseInt(prompt('Write the number of kilometers:')));


// 4.

let circleRadius = (radius) => {
    let area = Math.PI * radius * radius;

    console.log(area);
}

circleRadius(parseInt(prompt('Type the radius of circle:')));


// 5.

let nameAndSurname = (a, b) => console.log(`Welcome ${a} ${b}`);


nameAndSurname(prompt('Write your name:'), prompt('Write your surname'))


// 6.
let isWorkingCitizen = (age) => {
    if (age >= 18 && age < 65) {
        age = true;
    } else {
        age = false;
    }
    console.log(age);
}

isWorkingCitizen(parseInt(prompt('Write your age:')))


// 7.
let evenOrOdd = (number) => {
    if (number % 2 == 0) {
        number = true;
    } else {
        number = false;
    }

    console.log(number);
}

evenOrOdd(parseInt(prompt('Type a number:')));