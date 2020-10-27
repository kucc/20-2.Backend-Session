const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let words = [];
rl.question("영어 문자열 하나를 입력하세요. ", (input) => {
  input = input.trim();
  words = input.split(" ");
  console.log(words.length);
  rl.close();
});
