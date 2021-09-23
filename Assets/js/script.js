// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // TODO: Your code to generate a password goes here. Be sure to return a password
  // string. You will need to change the following two lines of code.

  //define array for each character type

  var useLowerCase = [];

  var useUpperCase = [];

  var useNumbers = [];

  var useSpecial = [];

  //define charOptions array

  var charOptions = [];

  // ask user for length of password
  var passLength = prompt(
    "Please enter a number between 8 and 128 to specify password length."
  );

  //validate length input from user - SEPARATE INTO SEPARATE IF STATEMENTS

  if (passLength < 8 || passLength > 128) {
    alert("Your password must be between 8 and 128 characters.");
    return;
  }

  //if use input is correct, continue with prompts: - TAKE THESE OUT OF HERE AND SEPARATE THEM TOGETHER WITH concat

  //add useLowerCase IF user confirms
  if (confirm("Would you like to use lower case letters?")) {
    charOptions = charOptions.concat(useLowerCase);
  }

  // add to big array if user choose upper case
  if (confirm("Would you like to use Upper Case letters?")) {
    charOptions = charOptions.concat(useUpperCase);
  }

  // choose numbers
  var useNumbers = confirm("Would you like to use numbers?");

  // choose special
  var useSpecial = confirm("Would you like to use special characters?");

  // if user input is false, then alert and prompt to do again:

  //Generate Password

  // HOW TO GET ONE OF EACH ARRAY for characters

  //add userSelectedChar to charOptions

  //add other options IF user confirms

  //if 0 items in charOptions array is empty, alert "You must pick at least one character set"

  if (charOptions.length === 0) {
    alert("You must choose at least one character type!");
    return generatePassword();

    //return to start of function
  }

  //if charOptions is not empty, then

  //pick random item from foodOptions - ONE OF EACH

  var pick = charOptions[Math.floor(Math.random() * charOptions.length)];

  //display random pick

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
