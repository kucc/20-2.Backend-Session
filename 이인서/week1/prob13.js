const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputNumber;

rl.on("line", function (line) {
  inputNumber = Number(line);

  rl.close();
}).on("close", function () {
  let gap = " ";
  let star = "*";

  for (let i = 1; i <= inputNumber; i++) {
    let output = [];
    // inputNum - i 만큼 공백,
    // i 만큼 별 추가
    for (let j = inputNumber - i; j >= 1; j--) {
      // 공백 추가 부분.
      output += gap;
    }
    for (let k = 1; k <= i; k++) {
      // 별 추가 부분
      output += star;
    }

    console.log(output);
  }
});
