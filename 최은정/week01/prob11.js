const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(parseInt(line));
}).on("close", function () {
  if (input[0] > 0 && input[1] > 0) {
    console.log("1");
  } else if (input[0] < 0 && input[1] > 0) {
    console.log("2");
  } else if (input[0] < 0 && input[1] < 0) {
    console.log("3");
  } else if (input[0] > 0 && input[1] < 0) {
    console.log("4");
  } else {
    console.log("숫자를 제대로 입력해주세요.");
  }
  process.exit();
});
