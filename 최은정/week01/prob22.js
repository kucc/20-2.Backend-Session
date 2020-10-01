const { parse } = require("path");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let tens, ones, newOnes, result;
let cnt = 0;
rl.question("숫자 하나를 입력하시오.", (input) => {
  function loop(num) {
    tens = parseInt(num / 10);
    ones = parseInt(num % 10);
    newOnes = parseInt((tens + ones) % 10);
    result = Number(ones.toString() + newOnes.toString());
    cnt += 1;
    return result;
  }

  loop(input);
  while (result != input) {
    loop(result);
  }

  console.log(cnt);

  rl.close();
});
