const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputString;
let checkString = "abcdefghijklmnopqrstuvwxyz";
let array1 = Array.from({ length: checkString.length }, () => -1);

rl.on("line", function (line) {
  inputString = line;
  rl.close();
}).on("close", function () {
  for (let i = 0; i < inputString.length; i++) {
    let index = checkString.indexOf(inputString[i]);
    if (array1[index] === -1) {
      array1[index] = i; //두번째 나오면? array1의 값이 -1이여야만 i값을 넣어줌
    }
  }
  let output = array1.join(" ");
  console.log(output);
});
