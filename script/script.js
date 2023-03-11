// Assignment code here
var password = document.getElementById("password");

var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowercase = [
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
var uppercase = [
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
var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

let combinedChars = [].concat(nums, lowercase, uppercase, specialChars);

function randomPass(length) {
  let str = combinedChars;
  let password = "";
  for (let i = 0; i < 28; i++) {
    let index = Math.floor(Math.random() * combinedChars.length) + 1;
    password += str[index];
  }
  return password;
}
// console.log(randomPass());

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", (e) => {
  const password = randomPass();
  console.log(password);
});

function writePassword() {
  var password = randomPass();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

// Get references to the #generate element
// Write password to the #password input
// Add event listener to generate button
