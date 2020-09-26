const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let condition = [];
let str = [];
let result = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  condition = input[0].split(" ").map((el) => parseInt(el));
  str = input[1].split(" ").map((el) => parseInt(el));

  for (let i = 0; i < condition[0]; i++) {
    if (str[i] < condition[1]) {
      result.push(str[i]);
    }
  }
  // for (let i = 0; i < result.length; i++) {
  //   toString(result[i])
  // }
  console.log(result);
  process.exit();
});
