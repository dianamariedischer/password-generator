// Assignment Code
var generateBtn = document.querySelector("#generate");



var givenLength = document.querySelector("#length");
var lower = document.querySelector("#lower");
var upper = document.querySelector("#upper");
var numeric = document.querySelector("#numeric");
var special = document.querySelector("#special");



// character types (whether or not to include lowercase, uppercase, numeric, and/or special characters)
var length = givenLength.valueAsNumber;
var lowerCheck = lower.checked;
var upperCheck = upper.checked;
var numericCheck = numeric.checked;
var specialCheck = special.checked;

//get number input from user length (8-128 characters)
//TO-DO: make sure user inputs an int and its in the range
function changeLength() {
  length = givenLength.valueAsNumber;
}


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

//user must select at least one character type
if (lower || upper || numeric || special) {
  //proceed
} else {
  //tell user to select at least one
}


// character sets
var alphabet = "abcdefghijklmnopqrstuvwxyz";

var lowerSet = alphabet.split("");
var upperSet = alphabet.toUpperCase().split("");
var numericSet = "0123456789".split("");
//" and \
var specialSet = "!'#$%&()*+,-./:;<=>?@[]^_`{|}~".split("");



//DEFINE
 //character set based on which characters were selected

function characterSet() {
  var charset = [];
  for (i = 0; i < 4; i++) {
    if (lowerCheck) {
      //add lower
      for (x = 0; x <lowerSet.length; x++) {
        charset.push(lowerSet[x]);
      }
      lowerCheck = false;
    } else if (upperCheck) {
      //add upper
      for (x = 0; x <upperSet.length; x++) {
        charset.push(upperSet[x]);
      }
      upperCheck = false;
    }  else if (numericCheck) {
      //add numeric
      for (x = 0; x <numericSet.length; x++) {
        charset.push(numericSet[x]);
      }
      numericCheck = false;
    } else if (specialCheck) {
      //add special
      for (x = 0; x <specialSet.length; x++) {
        charset.push(specialSet[x]);
      }
      specialCheck = false;
    } else {
      
    }
  }

  return charset;
}



//Generate the randomized password with selected criteria
function generatePassword() {
  var password = [];
  var charset = characterSet();
  
  //generate random password that meets criteria
  //loop that makes password array one character at a time
  for (i = 0; i < length; i++) {
    
    
    //get a random number to get from charset
    index = Math.floor(Math.random() * charset.length);

    //add character to password array
    password.push(charset[index]);

  }

  // make password array a string with no commas and return the value
  return password.join('');
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
lower.addEventListener("click", changeLower);
upper.addEventListener("click", changeUpper);
numeric.addEventListener("click", changeNumeric);
special.addEventListener("click", changeSpecial);
givenLength.addEventListener("change", changeLength);