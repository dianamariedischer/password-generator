// Assignment Code
var generateBtn = document.querySelector("#generate");


  // prompt user to select password criteria

  // length (8-128 characters)
  var givenLength = 8;

  //make sure user inputs an int

  // character types (whether or not to include lowercase, uppercase, numeric, and/or special characters)
  var lower = true;
  var upper = true;
  var numeric = true;
  var special = true;

//user must select at least one character type
if (lower || upper || numeric || special) {
  //proceed
} else {
  //tell user to select at least one
}

// character sets
// https://stackoverflow.com/questions/24597634/how-to-generate-an-array-of-the-alphabet

var alphabet = "abcdefghijklmnopqrstuvwxyz";

var lowerSet = alphabet.split("");
var upperSet = alphabet.toUpperCase().split("");
var numericSet = "0123456789".split("");
//" and \
var specialSet = "!'#$%&()*+,-./:;<=>?@[]^_`{|}~".split("");



//DEFINE
var givenLength = 8; //length given by user
 //character set based on which characters were selected

function characterSet() {
  var charset = [];
  for (i = 0; i < 4; i++) {
    if (lower) {
      //add lower
      for (x = 0; x <lowerSet.length; x++) {
        charset.push(lowerSet[x]);
      }
      lower = false;
    } else if (upper) {
      //add upper
      for (x = 0; x <upperSet.length; x++) {
        charset.push(upperSet[x]);
      }
      upper = false;
    }  else if (numeric) {
      //add numeric
      for (x = 0; x <numericSet.length; x++) {
        charset.push(numericSet[x]);
      }
      numeric = false;
    } else if (special) {
      //add special
      for (x = 0; x <specialSet.length; x++) {
        charset.push(specialSet[x]);
      }
      special = false;
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
  for (i = 0; i < givenLength; i++) {
    
    
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
