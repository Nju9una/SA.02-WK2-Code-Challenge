// Importing the readline for handling user input/output
const readline = require('readline');

// Creating interface for reading input and displaying output
const rl = readline.createInterface({
  input: process.stdin,   
  output: process.stdout  
});

// Function to change uppercase to lowercase and vice versa
function swapCase(inputString) {
  let swappedString = ''; 

  // Go through each letter in message
  for (let i = 0; i < inputString.length; i++) {
    let char = inputString[i]; 

    // If it's uppercase,make it lowercase;if it's lowercase,make it uppercase
    if (char >= 'A' && char <= 'Z') {
      swappedString += char.toLowerCase(); 
    } else if (char >= 'a' && char <= 'z') {
      swappedString += char.toUpperCase(); 
    } else {
      swappedString += char; 
    } 
  }

  return swappedString; 
}

// Asking user to type a message
rl.question('Type something: ', (input) => {
  // Changing the case of the message 
  const swappedString = swapCase(input);
  // Showing changed message in the console
  console.log('Changed message:', swappedString);
  // Closing readline
  rl.close();
});

