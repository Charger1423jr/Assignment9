const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let email_check = 0;

function getEmail() {
    readline.question("Email (Case Sensitive): ", function(email) {
        if (email === emailTest) {
            email_check = 1;
            getPassword();
        } else {
            console.log("Invalid email. Please try again.");
            getEmail();
        }
    });
}

function getPassword() {
    let passwrd_check = 0;
    readline.question("Password (Case Sensitive): ", function(password) {
        if (password === passTest) {
            passwrd_check = 1;
        }
        if (email_check === 1 && passwrd_check === 1) {
            console.log("Confirmed Sign In");
            readline.close();
        } else {
            console.log("Invalid password. Please try again.");
            getPassword();
        }
    });
}

getEmail();
