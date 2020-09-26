const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (inputString) {
  let stringArray = inputString.split(",");
  let numberOfComma = stringArray.length - 1;
  console.log(numberOfComma);

  rl.close();
});
