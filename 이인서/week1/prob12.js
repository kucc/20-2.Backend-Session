const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (input) {
  let sum = 0;
  let inputNumber = Number(input);

  for (let i = 1; i <= inputNumber; i++) {
    sum += i;
  }

  console.log(sum);

  rl.close();
});
