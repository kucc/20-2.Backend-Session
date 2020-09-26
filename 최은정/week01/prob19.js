const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a string. ", (answer) => {
  let lower = answer.toLowerCase();
  let upper = answer.toUpperCase();
  if (answer == lower) {
    console.log(answer.toUpperCase());
  } else if (answer == upper) {
    console.log(answer.toLowerCase());
  } else {
    console.log("Fix your string and enter again. ");
  }
  rl.close();
});
