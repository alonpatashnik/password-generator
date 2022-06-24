// Assignment code here
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')']
var uppercase = []

// I need to 

for (var i = 0; i<letters.length; i++) {
  var newUpper = letters[i].toUpperCase()
  uppercase.push(newUpper)
}

var totalChar = prompt("How many characters do you want in your password?");
var userNum = prompt(confirm("Do you want numbers in your password?"));
var userletters = prompt(confirm("Do you want lowercase letters in your password?"));
var userUppercase = prompt(confirm("Do you want uppercase numbers in your password?"));
var userSpecial = prompt(confirm("Do you want special characters in your password?"));


var generatePassword = function (total, num, letter, upper, special) {
// I need to take the total number of characters and divide them evenly between each type of selected character
// I need to generate the number of random items from each array that the user specifies
}

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
