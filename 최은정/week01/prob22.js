//수정필요 ㅠㅜ
const { parse } = require("path");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let tens, ones, addNum, addStr, cnt;
rl.question("숫자 하나를 입력하시오.", (input) => {
  function cycle(input) {
    if (input === loop(input)) {
      console.log(`사이클 길이: ${cnt}`);
    } else {
      cnt += 1;
      loop(loop(input));
    }
  }

  function loop(num) {
    tens = parseInt(num / 10);
    ones = parseInt(num % 10);
    addNum = parseInt((tens + ones) % 10);
    addStr = ones.toString() + addNum.toString();
    return parseInt(addStr);
    cycle(input);
  }

  rl.close();
});
