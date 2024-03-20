let emailFinal = "";
let passwordFinal = "";

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let email_check = 0;

function getEmail() {
    readline.question("Email: ", function(email) {
        if (email.endsWith("@gmail.com") || email.endsWith("@outlook.com") || email.endsWith("@nku.edu")) {
            email_check = 1;
            emailFinal = email; // Assign value to outer scope variable
            getPassword();
        } else {
            console.log("Invalid email. Please try again.");
            getEmail();
        }
    });
}


function getPassword() {
    let passwrd_check = 0;
    readline.question("Password: ", function(password) {
        if (password.length > 5 && (password.includes('@') || password.includes('#') || password.includes('$') || password.includes('%') || password.includes('&'))) {
            passwrd_check = 1;
            passwordFinal = password; // Assign value to outer scope variable
            if (email_check === 1 && passwrd_check === 1) {
                console.log("Confirmed Sign Up");
                readline.close();
            }
        } else {
            console.log("Invalid password. Please try again.");
            getPassword();
        }
    });
}

getEmail();

