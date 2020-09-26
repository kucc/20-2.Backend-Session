const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ").map((el) => parseInt(el));
}).on("close", function () {
  if (input[1] < 45) {
    if (input[0] == 0) {
      input[0] = 23;
    } else {
      input[0] = input[0] - 1;
    }
    console.log(`${input[0]} ${input[1] + 15}`);
  } else {
    console.log(`${input[0]} ${input[1] - 45}`);
  }
  process.exit();
});
