// Assignment code here
var generatePassword = function () {
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


//getting user input of which 




  //prompting user for password parameters
  var totalChar = prompt("How many characters do you want in your password? (must be between 8 and 128)");
  if (totalChar < 8 || totalChar > 128) {
    alert('invalid input: please try again');
    return "";
  }
  //checks to see if user input is non numeric
  if (isNaN(totalChar)) {
    alert('invalid input: please try again');
    return "";
  }
  
  var userNum = confirm("Do you want numbers in your password?");
  var userletters = confirm("Do you want lowercase letters in your password?");
  var userUpper = confirm("Do you want uppercase numbers in your password?");
  var userSpecial = confirm("Do you want special characters in your password?");

  //takes users input and adds the existing arrays to the new array
  if (userNum || userletters || userUpper || userSpecial) {
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
  } else {
      alert('invalid input: please try again');
      return "";
  }
  
  // defines how many random items from each array we're using
  howManyOfEach = Math.floor(totalChar / arraysUsed.length);
  //defines how many leftover chracters we need to ads
  remainder = totalChar % arraysUsed.length;
  
  //adds a random number to a new array for each selector picked by the user and runs that loop
  //however many times each array needs to be used
  for (var j = 0; j<howManyOfEach;j++) {
    var randNum = numbers[Math.floor(Math.random() * numbers.length)];
    var randLetter = letters[Math.floor(Math.random() * letters.length)];
    var randUpper = uppercase[Math.floor(Math.random() * uppercase.length)];
    var randSpecial = specialChar[Math.floor(Math.random() * specialChar.length)];
    for (var i = 0; i < arraysUsed.length; i++) {
      if (arraysUsed[i] === letters) {
        passwordChars.push(randLetter);
      } else if (arraysUsed[i] === numbers){
        passwordChars.push(randNum);
      } else if (arraysUsed[i] === uppercase){
        passwordChars.push(randUpper);
      } else {
        passwordChars.push(randSpecial);
      }
    }
  }
  var passString = "";
  //adds the remaining number of characters
  for (var i = 0; i < remainder; i++) {
    var randNum1 = numbers[Math.floor(Math.random() * numbers.length)];
    var randLetter1 = letters[Math.floor(Math.random() * letters.length)];
    var randUpper1 = uppercase[Math.floor(Math.random() * uppercase.length)];
    var randSpecial1 = specialChar[Math.floor(Math.random() * specialChar.length)];
    if (arraysUsed[i] === letters) {
      passwordChars.push(randLetter1);
    } else if (arraysUsed[i] === numbers){
      passwordChars.push(randNum1);
    } else if (arraysUsed[i] === uppercase){
      passwordChars.push(randUpper1);
    } else {
      passwordChars.push(randSpecial1);
    }
  }
  console.log(passwordChars);

  //converts our password array to a string
  passString = passwordChars.join("");
  return passString;
}
// I need to generate the number of random items from each array that the user specifies
// I need to randomize all password characters into one cohesive password


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var clearBtn = document.querySelector('#generate2');
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function clearPassword() {
  document.querySelector('#password').value = "";
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
clearBtn.addEventListener('click', clearPassword);
