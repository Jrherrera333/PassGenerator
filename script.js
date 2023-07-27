// Assignment Code
var generateBtn = document.querySelector("#generate");

let lowerAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let upperAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let number = [0,1,2,3,4,5,6,7,8,9];
let cymbols = ['!', '@', '#', '$', '%', '^', '&', '*', '~']

let builtArray = []

function generatePassword() {

if(confirm("Do you want your password to contain lowercase letters?")) {
    builtArray = [...builtArray, ...lowerAlphabet];
}

if(confirm("Do you want your password to contain uppercase letters?")) {
    builtArray = [...builtArray, ...upperAlphabet];
}

if(confirm("Do you want your password to contain numbers?")) {
    builtArray = [...builtArray, ...number];
}  

if(confirm("Do you want your password to contain cymbols?")) {
    builtArray = [...builtArray, ...cymbols];
}
let password = "";

// let passwordLength = Math.max(8, Math.min(128, Number(passwordLength)));
let passwordLength = Number(prompt("How long do you want your password?"));

passwordLength = Math.max(8, Math.min(128, passwordLength));

for (let i = 0; i < passwordLength; i++) {
  const randomIndex = Math.floor(Math.random() *builtArray.length);
  password += builtArray[randomIndex];
}
console.log("Password: "+ password)
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
