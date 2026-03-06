//Check if password is at least 8 characters long
//Check if password contains a number
//Check if password contains an uppercase letter
//Display validation result (valid or invalid)
//Display which requirements are missing (if any)

let userPassword = "myCode1990"
const hasNumber = 0-9
const hasUppercase = "A-Z"
if (userPassword.length >= 8) {
console.log(`Password is valid! ${userPassword.length >= 8}`);
} else {
    console.log("Invalid password!");
}

if (hasNumber && hasUppercase) {
    console.log("Validation successful");
} else {
    console.log("Validation failed!");
}


