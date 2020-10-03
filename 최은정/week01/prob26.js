//still working on  it.
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let croatian = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
rl.question("영어 문자열 하나를 입력하세요. ", (input) => {
  for (let i = 0; i < croatian.length; i++) {
    console.log(input.indexOf(croatian[i]));
  }

  rl.close();
});
