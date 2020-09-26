const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ").map((el) => parseInt(el));
}).on("close", function () {
  if (input[0] > input[1]) {
    console.log(">");
  } else if (input[0] < input[1]) {
    console.log("<");
  } else {
    console.log("==");
  }
  process.exit();
});
