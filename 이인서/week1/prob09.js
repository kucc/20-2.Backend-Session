const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  let inputNumber = Number(line);

  for (let i = 1; i < 10; i++) {
    console.log(`${inputNumber} * ${i} = ${inputNumber * i}`);
  }

  rl.close();
});
