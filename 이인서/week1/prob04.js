const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (input) {
  let numberInput = Number(input);
  if (isNaN(numberInput)) {
    console.log("문자입니다");
  } else {
    console.log("숫자입니다");
  }

  rl.close();
});
