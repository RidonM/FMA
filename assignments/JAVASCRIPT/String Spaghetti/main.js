// 1.First Letter to uppercase:

let string = '     hello, dolly!'
let firstString = string.trim();
let firstLetter = firstString.charAt(0);
let upperCase = firstLetter.toUpperCase();
console.log(upperCase);


// 2.Extracting hours, minutes and PM:

let time = '5:36 PM';

let hour = parseInt(time.substring(0, 1));
let minutes = parseInt(time.substring(2, 4));
let pm = (time.substring(5, 7));

console.log(hour);
console.log(minutes);
console.log(pm);


// 3.Temperature and city:

let cityTemperature = "New York, 15°C";

let city = cityTemperature.split(', ')[0];
let temperature = parseInt(cityTemperature.split(', ')[1]);

console.log(city);
console.log(temperature);