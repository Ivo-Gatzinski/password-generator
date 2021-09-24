// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // TODO: Your code to generate a password goes here. Be sure to return a password
  // string. You will need to change the following two lines of code.

  //define array for each character type

  var useLowerCase = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  var useUpperCase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  var useNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  var useSpecial = ["!", "@", "#", "$", "%", "^", "&", "*", "+", "_", "-", "~"];

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

  //if use input is correct, continue with prompts and add char types to big array

  //add useLowerCase IF user confirms
  if (confirm("Would you like to use lower case letters?")) {
    charOptions = charOptions.concat(useLowerCase);
  }

  // add to big array if user choose upper case
  if (confirm("Would you like to use Upper Case letters?")) {
    charOptions = charOptions.concat(useUpperCase);
  }

  // add to big array if user choose numbers
  if (confirm("Would you like to use numbers?")) {
    charOptions = charOptions.concat(useNumbers);
  }

  // add to big array if user choose special
  if (confirm("Would you like to use special characters?")) {
    charOptions = charOptions.concat(useSpecial);
  }

  //if 0 items in charOptions array is empty, alert "You must pick at least one character set"

  if (charOptions.length === 0) {
    alert("You must choose at least one character type!");
    //return to start of function
    return;
  }

  //Generate Password - if charOptions is not empty, then
 
  //initialize container for password AS A String
  var password = "";

  //pick random item from charOptions and put it in consecutive digits up to length provided by user:
 var length = passLength;
  for (var i = 0; i < length; ++i) {
    password += charOptions[Math.floor(Math.random() * charOptions.length)];
  }

  var password = password;
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
