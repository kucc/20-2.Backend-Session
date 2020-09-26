const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("비교할 숫자를 공백을 띄고 입력해주세요.\n ->", function (input) {
  let numbers = input.split(" ");
  let a = numbers[0];
  let b = numbers[1];
  let num1 = Number(a);
  let num2 = Number(b);

  if (num1 > 10000 || num1 < -10000) {
    console.log("숫자를 +-10000 안쪽으로 입력해주세요");
  } else if (num2 > 10000 || num2 < -10000) {
    console.log("숫자를 +-10000 안쪽으로 입력해주세요");
  } else {
    if (num1 > num2) {
      console.log(">");
    } else if (num1 < num2) {
      console.log("<");
    } else {
      console.log("=");
    }
  }

  rl.close();
});
