let Password = "12341234";
let guessedPassword;
let x = 3;

do {
    if (x > 1) {
        guessedPassword = prompt(`Enter the password (${x} tries left):`);
    } else {
        guessedPassword = prompt(`Enter the password (${x} try left):`);
    }

    switch (true) {
        case guessedPassword == Password:
            console.log('Welcome to the Page!');
            x = 0;
            break;
        default:
            x--;
            switch (true) {
                case x > 0:
                    alert('Try Again!');
                    break;
                default: alert("You have reached the maximum amount of tries! You can't try anymore!");
            }
    }
} while (x > 0);