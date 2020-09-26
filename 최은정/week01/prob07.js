const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("문자열 하나를 입력하세요. ", (answer) => {
  let words = [];
  words = answer.split(",");
  console.log(words.length - 1);

  rl.close();
});
