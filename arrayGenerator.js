const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function generateArray(start, end) {
  const array = [];
  if (start <= end) {
    for (let i = start; i <= end; i++) {
      array.push(i);
    }
  } else {
    for (let i = start; i >= end; i--) {
      array.push(i);
    }
  }
  return array;
}

rl.question('Enter the first number: ', (firstNum) => {
  rl.question('Enter the second number: ', (secondNum) => {
    const start = parseInt(firstNum);
    const end = parseInt(secondNum);
    const result = generateArray(start, end);
    console.log('Generated array:', result);
    rl.close();
  });
});
