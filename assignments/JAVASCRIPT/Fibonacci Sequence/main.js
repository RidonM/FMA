let x = parseInt(prompt("Enter the number of Fibonacci numbers to generate:"));

if (isNaN(x) || x <= 0) {
    alert('Enter a positive integer!')
} else {
    let fibonacciSequence = [1, 1];

    for (let i = 2; i < x; i++) {
        fibonacciSequence[i] = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
    }

    console.log(`${fibonacciSequence.join(', ')}`);
}
