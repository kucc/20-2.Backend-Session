const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let result = 0;
rl.question("숫자 하나를 입력하세요. ", (answer) => {
  for (let i = 1; i <= answer; i++) {
    result += i;
  }
  console.log(result);

  rl.close();
});
