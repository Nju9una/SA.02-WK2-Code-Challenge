const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function swapCase(inputString) {
  let swappedString = '';
  for (let i = 0; i < inputString.length; i++) {
    let char = inputString[i];
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

rl.question('Enter a string: ', (input) => {
  const swappedString = swapCase(input);
  console.log('Swapped case string:', swappedString);
  rl.close();
});
