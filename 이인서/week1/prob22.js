const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let repeatCount = 0;
let inputNumber;
let defaultNumber;

rl.on("line", function (line) {
  defaultNumber = inputNumber = Number(line);
  rl.close();
}).on("close", function () {
  while (true) {
    if (inputNumber < 10) {
      inputNumber = inputNumber * 10 + inputNumber; // 십의 자리와 일의 자리를 동일하게.
    } else {
      let string = String(inputNumber);
      let temp = Number(string[0]) + Number(string[1]); // 십의 자리와 일의 자리를 더해서
      temp = String(temp)[String(temp).length - 1]; // 더한 값의 일의 자리.... 10으로 나눠서 나머지 연산이 더 빠를 듯.
      string = string[1] + temp;
      inputNumber = Number(string);
    }
    repeatCount++;

    if (defaultNumber === inputNumber) {
      break;
    }
  }
  console.log(repeatCount);
});
