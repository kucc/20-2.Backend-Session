const change = (str) => {
  if (str == str.toUpperCase()) {
    console.log(str.toLowerCase());
  } else if (str == str.toLowerCase()) {
    console.log(str.toUpperCase());
  } else {
    console.log("모두 대문자거나 소문자가 아닙니다.");
  }
};

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Write any sentence.\n ->", function (str) {
  change(str);
  rl.close();
});
