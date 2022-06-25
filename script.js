// Assignment code here

// creating arrays of numbers, letters, uppercase letters and special characters
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
var uppercase = [];

// adding the uppercase values of [letters] to uppercase array
for (var i = 0; i<letters.length; i++) {
  var newUpper = letters[i].toUpperCase();
  uppercase.push(newUpper);
}

//setting variables to be used in generatePassword fuction
var howManyOfEach = 0;
var remainder = 0;
var arraysUsed = [];
var passwordChars = [];

// generating a random item from each array
var randNum = numbers[Math.floor(Math.random() * numbers.length)];
var randLetter = letters[Math.floor(Math.random() * letters.length)];
var randUpper = uppercase[Math.floor(Math.random() * uppercase.length)];
var randSpecial = specialChar[Math.floor(Math.random() * specialChar.length)];

//getting user input of which 
var totalChar = prompt("How many characters do you want in your password? (must be between 8 and 128)");
var userNum = confirm("Do you want numbers in your password?");
var userletters = confirm("Do you want lowercase letters in your password?");
var userUpper = confirm("Do you want uppercase numbers in your password?");
var userSpecial = confirm("Do you want special characters in your password?");


var generatePassword = function () {
  if (userNum){
    arraysUsed.push(numbers);
  }
  if (userletters){
    arraysUsed.push(letters);
  }
  if (userUpper){
    arraysUsed.push(uppercase);
  }
  if (userSpecial){
    arraysUsed.push(specialChar);
  }
  howManyOfEach = totalChar / arraysUsed.length;
  remainder = totalChar % arraysUsed.length;

  // searching to see if each array listed in arraysUsed is equivalent to one of my original arrays
  for (var i = 0; i < howManyOfEach; i++) {
    for (var i = 0; i < arraysUsed.length; i++) {
      if (arraysUsed[i] == letters) {
        passwordChars.push(letters[randLetter]);
      }
      if (arraysUsed[i] == numbers){
        passwordChars.push(numbers[randNum]);
      }
      if (arraysUsed[i] == uppercase){
        passwordChars.push(uppercase[randUpper]);
      }
      if (arraysUsed[i] == specialChar){
        passwordChars.push(specialChar[randSpecial]);
      } 
    }
  }
  console.log(passwordChars)
}
// I need to generate the number of random items from each array that the user specifies
// I need to randomize all password characters into one cohesive password


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
