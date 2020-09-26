const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let size;
let criteria;
let output = "";

rl.on("line", function (line) {
  input.push(line);
  let inputArray = input[0].split(" ");
  size = Number(inputArray[0]);
  criteria = Number(inputArray[1]);

  if (input.length >= 2) {
    rl.close();
  }
}).on("close", function () {
  let numbers = input[1].split(" ");

  for (let i = 0; i < size; i++) {
    if (Number(numbers[i]) < criteria) {
      output += numbers[i] + " ";
    }
  }

  console.log(output);
});
