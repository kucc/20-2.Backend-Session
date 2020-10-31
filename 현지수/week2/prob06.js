const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Write numbers you want to add \n", (numbers) => {
  const input = numbers.split(" ");
  getSum.apply(this, input);
  //배열을 함수에 input 값으로 받으려면 .apply(this, 어쩌고)
  rl.close();
});

const getSum = (...inputs) => {
  const inputToNumber = inputs.map((input) => Number(input));
  const result = inputToNumber.reduce((acc, input) => (acc += input), 0);
  console.log(result);
};
