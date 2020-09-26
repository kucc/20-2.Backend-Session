const multiply = (n) => {
  for (i = 1; i < n + 1; i++) {
    result = n * i;
    message = `${n} * ${i} = ${result}`;
    console.log(message);
  }
};

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Write any number.\n ->", function (n) {
  let num = Number(n);
  multiply(num);

  rl.close();
});
