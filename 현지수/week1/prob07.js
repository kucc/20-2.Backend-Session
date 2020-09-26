const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Write a sentence.\n ->", function (answer) {
  let string = answer;
  let NumberofDot = string.match(/,/g);
  if (NumberofDot != null) {
    console.log(NumberofDot.length);
  } else {
    console.log("입력하신 문장에 쉼표가 없습니다.");
  }

  rl.close();
});
