const addNumbers = (n) => {
  let result = 0;
  for (i = 1; i < n + 1; i++) {
    result += i;
  }
  console.log(result);
};

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Write any number.\n ->", function (n) {
  let number = Number(n);
  addNumbers(number);
  rl.close();
});
