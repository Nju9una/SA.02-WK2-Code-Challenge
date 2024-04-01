const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// Function to filter prime numbers from an array
function filterPrimes(arr) {
  return arr.filter(num => isPrime(num));
}

rl.question('Enter numbers : ', (input) => {
  const numbers = input.split(',').map(num => parseInt(num.trim()));
  const primeNumbers = filterPrimes(numbers);
  console.log('Prime numbers:', primeNumbers);
  rl.close();
});
