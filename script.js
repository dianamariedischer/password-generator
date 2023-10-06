// Assignment Code
var generateBtn = document.querySelector("#generate");


// Get variables for event listeners
var givenLength = document.querySelector("#length");
var lower = document.querySelector("#lower");
var upper = document.querySelector("#upper");
var numeric = document.querySelector("#numeric");
var special = document.querySelector("#special");


// Get inital values for code
var length = givenLength.valueAsNumber;
var lowerCheck = lower.checked;
var upperCheck = upper.checked;
var numericCheck = numeric.checked;
var specialCheck = special.checked;


// Variables that check if number is between 8-128, and set has been selected
var minRange = false;
var maxRange = false;
var setGuide = false;


// Change values to user input
function changeLength() {
  length = givenLength.valueAsNumber;
  
  // Checks that input is in range
  if (length >= 8) {
    minRange = true; 
  } else {
    minRange = false;
  }

  if (length <= 128) {
    maxRange = true; 
  } else {
    maxRange = false;
  }
}

// Switches the value of the checkbox
function changeLower() {
  lowerCheck = !lowerCheck;
}

function changeUpper() {
  upperCheck = !upperCheck;
}

function changeNumeric() {
  numericCheck = !numericCheck;
}

function changeSpecial() {
  specialCheck = !specialCheck;
}


// Character sets for user to select from
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var lowerSet = alphabet.split("");
var upperSet = alphabet.toUpperCase().split("");
var numericSet = "0123456789".split("");
var specialSet = "!'#$%&()*+,-./:;<=>?@[]^_`{|}~\"\\".split("");



// Create complete character set for password based on input
function characterSet() {
  var charset = [];
  // Loop that checks if character was selected, and adds if true
  // If a set is added, the guidelines for sets becomes true
  for (i = 0; i < 4; i++) {
    if (lowerCheck) {
      //add lower
      charset = charset.concat(lowerSet);
      lowerCheck = false;
      setGuide = true;
    } else if (upperCheck) {
      //add upper
      charset = charset.concat(upperSet);
      upperCheck = false;
      setGuide = true;
    }  else if (numericCheck) {
      //add numeric
      charset = charset.concat(numericSet);
      numericCheck = false;
      setGuide = true;
    } else if (specialCheck) {
      //add special
      charset = charset.concat(specialSet);
      specialCheck = false;
      setGuide = true;
    } else {}
  }
  return charset;
}

// Generate the randomized password with selected criteria
function generatePassword() {
  var password = [];
  var charset = characterSet();
  
  // Loop that creates password array one character at a time
  for (i = 0; i < length; i++) {
    
    // Get a random number pull random character from array
    index = Math.floor(Math.random() * charset.length);

    // Add character to password array
    password.push(charset[index]);

  }

  // make password array a string with no commas and return the value
  return password.join('');
}

// Reset the checkboxes so the generator can run again
function checkboxReset() {
  lower.checked = false;
  upper.checked = false;
  numeric.checked = false;
  special.checked = false;
}

// Write password to the #password input if guidelines are met
// Length must be a number that 8-128 characters and have at least one character set selected
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if(setGuide && minRange && maxRange) {
    passwordText.value = password;

    // Reset checkboxes
    checkboxReset();

  } else {
    passwordText.value = "Please check your inputs, refresh the page, and try again."
  }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
lower.addEventListener("click", changeLower);
upper.addEventListener("click", changeUpper);
numeric.addEventListener("click", changeNumeric);
special.addEventListener("click", changeSpecial);
givenLength.addEventListener("change", changeLength);