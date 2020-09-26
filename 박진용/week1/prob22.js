//인서님 코드 수정
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solver = (num) => {
  const initNum = num;
  let repeatCount = 0;

  while (true) {
    if (num < 10) {
      num = num * 10 + num; // 십의 자리와 일의 자리를 동일하게.
    } else {
      let string = String(num);
      let temp = Number(string[0]) + Number(string[1]); // 십의 자리와 일의 자리를 더해서
      temp = String(temp)[String(temp).length - 1]; // 더한 값의 일의 자리.... 10으로 나눠서 나머지 연산이 더 빠를 듯.
      string = string[1] + temp;
      num = Number(string);
    }
    repeatCount++;

    if (initNum === num) {
      break;
    }
  }
  return repeatCount;
};

rl.on("line", function (line) {
  const inputNumber = Number(line);
  rl.close();
  console.log(solver(inputNumber));
});
