// Assignment Code
var generateBtn = document.query

//Password length
var length = 10;Selector("#generate");

//Main function
function writePassword() {


// Write password to the #password input

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

//Defining characters
const lowerCase = "abcdefghijklmnopqrstuvqxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "01234567890";
const specialChars = "!@#$%^&*()-_=+[{]}|;:,<.>?";