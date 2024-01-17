let userNumber = parseInt(prompt("Please enter a positive integer from 1 to 100:"));

if (isNaN(userNumber) || userNumber < 1 || userNumber > 100) {
    alert("Please write a number from 1  to 100")
} else {

    let a = "";
    let i = 1;


    while (i <= userNumber) {
        a = a + i;

        if (i < userNumber) {
            a = a + ", ";
        }
        i++;
    }

    console.log(a);
}
