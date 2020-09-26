const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ").map((el) => parseInt(el));
}).on("close", function () {
  let big = 0;
  let small = 0;
  let remainder = 0; //나머지
  let gcd = 0; //최대공약수

  if (input[0] > input[1]) {
    big = input[0];
    small = input[1];
  } else {
    big = input[1];
    small = input[0];
  }
  while (true) {
    remainder = big % small;
    if (remainder === 0) {
      gcd = small;
      console.log(`최대공약수는 ${gcd}`);
      return;
    } else {
      big = small;
      small = remainder;
    }
  }
  process.exit();
});
