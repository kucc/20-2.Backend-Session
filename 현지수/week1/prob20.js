const GCD = (a, b) => {
  let max = 1;
  if (a >= b) {
    max = a;
    another = b;
  } else {
    max = b;
    another = a;
  }

  i = 0;
  while (i < max + 1) {
    i++;
    if (max % i == 0 && another % i == 0) {
      gcd = i;
    }
  }

  console.log(gcd);
};

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Write two numbers.\n ->", function (numbers) {
  let number = numbers.split(" ");
  let num1 = Number(number[0]);
  let num2 = Number(number[1]);

  GCD(num1, num2);
  rl.close();
});
