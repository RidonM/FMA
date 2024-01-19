// 1."Hello World 10 times"
function hello() {
    console.log("Hello World");
}

for (let i = 0; i < 10; i++) {
    hello();
}


// 2.String
function string(a) {
    console.log(`The string is ${a}`);
}

string(prompt("Type something"));


// 3.Kilometers to miles
function kmToMiles(kilometers) {
    let convert = 0.621371;

    let miles = kilometers * convert;

    return miles;
}

let conversion = kmToMiles(parseInt(prompt("Kilometers:")));
console.log(`The number of miles is ${conversion}`);


// 4.Radius of circle to Area
function circleArea(radius) {
    let area = Math.PI * radius * radius;

    return area;
}

let areaOfCircle = circleArea(parseInt(prompt('Type the radius of circle:')));
console.log(`The area of circle is ${areaOfCircle}`);


// 5.Name and Surname
function name(a, b) {
    console.log(`Welcome ${a} ${b}`);
}

name(prompt('Name:'), prompt('Surname:'))


// 6.Checking if the user is working citizen
function isWorkingCitizen(age) {
    if (age >= 18 && age < 65) {
        age = true;
    } else {
        age = false;
    }

    console.log(age);
}

isWorkingCitizen(parseInt(prompt('How old are you?')))


// 7.Even or Odd
function evenOrOdd(number) {
    if (number % 2 == 0) {
        number = true;
    } else {
        number = false;
    }

    console.log(number);
}

evenOrOdd(parseInt(prompt('Type a number:')));