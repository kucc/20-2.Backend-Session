const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let word = {};
let result = "";
let max = 0;
let cnt = 0;
rl.question("영어 문자열 하나를 입력하세요. ", (input) => {
  input = input.toUpperCase();

  for (let i = 0; i < input.length; i++) {
    if (word[input[i]]) {
      word[input[i]] += 1;
    } else {
      word[input[i]] = 1;
    }
  }

  for (let alphabet in word) {
    if (max < word[alphabet]) {
      max = word[alphabet];
      result = alphabet;
    }
  }

  for (let alphabet in word) {
    if (word[alphabet] === max) {
      cnt += 1;
    }
  }

  if (cnt > 1) {
    console.log("?");
  } else {
    console.log(result);
  }

  rl.close();
});
