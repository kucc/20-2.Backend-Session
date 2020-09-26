const StringSplit = function (string) {
  let input = string;
  let output = string.split(" ");

  console.log(output);
};

StringSplit("Jisoo is so busy.");

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Write a sentence you want to split.\n ->", function (answer) {
  StringSplit(answer);
  rl.close();
});
