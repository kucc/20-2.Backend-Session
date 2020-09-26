const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("숫자 하나를 입력하시오.", (answer) => {
  let n = answer;
  for (let i = 1; i < 10; i++) {
    console.log(`${n} * ${i} = ` + n * i);
  }

  rl.close();
});
