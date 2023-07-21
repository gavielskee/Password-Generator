// Assignment Code
var generateBtn = document.querySelector("#generate");

//Password Generator
function generatePassword() {
    password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numberChars[Math.floor(Math.random() * numberChars.length)];
    password += specialChars[Math.floor(Math.random() * specialChars.length)];

    for(i = 0; i < length; i++) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
       
    }
    generateBtn = password; 
    console.log(password);
}
//Password length
var length = 10;

//Main function
function writePassword() {

    // Write password to the #password input

    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", function () {
    // var generatePassword = generatePassword();
    window.alert(`Your new password is: ${password}`)
});


//Defining characters
const lowerCase = "abcdefghijklmnopqrstuvqxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "01234567890";
const specialChars = "!@#$%^&*()-_=+[{]}|;:,<.>?";

const allChars = upperCase + lowerCase + numberChars + specialChars;
