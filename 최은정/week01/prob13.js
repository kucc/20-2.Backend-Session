//수정필요
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("숫자 하나를 입력하세요. ", (answer) => {
  let star = "";
  for (let i = 1; i <= answer; i++) {
    star += "*";
    console.log(star);
  }
  rl.close();
});
