// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // TODO: Your code to generate a password goes here. Be sure to return a password
  // string. You will need to change the following two lines of code.

  // ask user for length of password
  var passLength = prompt("Please enter a number between 8 and 128 to specify password length.");

  //validate length input from user

  if (passLength > 8 && passLength < 128) {

    //if use input is correct, continue with prompts:
    
    // choose lower case
    var useLowerCase = confirm("Would you like to use lower case letters?");

    // choose upper case
    var useUpperCase = confirm("Would you like to use Upper Case letters?");
    
    // choose numbers
    var useNumbers = confirm("Would you like to use numbers?");
    
    // choose special
    var useSpecial = confirm ("Would you like to use special characters?");  
    
    // if user input is false, then alert and prompt to do again:
  } else {
   alert ("Your password must be between 8 and 128 characters.")
   return generatePassword();
  }
  
  // 
  
  var password = "password1234";
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
