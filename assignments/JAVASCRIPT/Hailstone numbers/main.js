let userInput = parseInt(prompt("Enter a positive integer:"))
let a = "";

for (; userInput <= 0 || isNaN(userInput);) {
    alert("Type a positive number!")
    userInput = parseInt(prompt("Enter a positive integer:"))
}

for (; userInput !== 1;) {
    a += userInput;

    if (userInput % 2 == 0) {
        userInput /= 2;
    } else {
        userInput = userInput * 3 + 1;
    }

    if (a != 1) {
        a += ",";
    }
}
a += userInput

console.log(a);
