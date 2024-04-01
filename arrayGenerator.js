// Setting up a way for the user to interact with the program.
const rl = require('readline').createInterface({
    input: process.stdin,   // Taking input from the keyboard
    output: process.stdout  // Showing output in the console
  });
  
  // Function to generate an array of numbers between start and end.
  function generateArray(start, end) {
    const array = []; // Creating an empty array
    // Looping through numbers from start to end
    for (let i = start; start <= end ? i <= end : i >= end; start <= end ? i++ : i--) {
      array.push(i); // Adding each number to the array
    }
    return array; // Returning the generated array
  }
  
  // Asking user  to enter the first number.
  rl.question('Enter the first number: ', (firstNum) => {
    // Asking the user to enter the second number.
    rl.question('Enter the second number: ', (secondNum) => {
      // Converting input strings to integers.
      const start = parseInt(firstNum);
      const end = parseInt(secondNum);
      // Generating the array of numbers between 'start' and 'end'.
      const result = generateArray(start, end);
      // Displaying the generated array in the console.
      console.log('Generated array:', result);
      // Closing the interface cause were done with user interaction.
      rl.close();
    });
  });
