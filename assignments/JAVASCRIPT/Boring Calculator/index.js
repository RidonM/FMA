let firstNumber = parseFloat(prompt('Write the first number:'));
let secondNumber = parseFloat(prompt('Write the second number:'));
let operator = prompt('What operation do you want to apply').toLowerCase();

let result;

if (isNaN(firstNumber) || isNaN(secondNumber)) {
    throw new error('Please write the valid numbers!');
}

switch (operator) {
    case 'addition':
        result = firstNumber + secondNumber;
        break;
    case 'subtraction':
        result = firstNumber - secondNumber;
        break;
    case 'multiplication':
        result = firstNumber * secondNumber;
        break;
    case 'division':
        switch (true) {
            case secondNumber === 0:
                throw new Error('Can\'t divide by zero!');
            default:
                result = firstNumber / secondNumber;
                break;
        }
        break;
    default: throw new Error('Unknown Operator!');
}

console.log(`The result is ${result}`);
