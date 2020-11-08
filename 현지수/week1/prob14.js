const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
  if (input.length == 2) {
    rl.close();
  }
}).on("close", function () {
  let Input1 = input[0].split(" ");
  let Input2 = input[1].split(" ");

  let max = Number(Input1[0]);
  let limit = Number(Input1[1]);
  let result = "";
  if (Input2.length > max) {
    console.log("N개의 수열을 입력해주세요");
  } else {
    for (i = 0; i < max; i++) {
      if (Number(Input2[i] < limit)) {
        result += Input2[i] + " ";
      }
    }
    console.log(result);
  }

  process.exit();
});
