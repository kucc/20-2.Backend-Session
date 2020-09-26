const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
  if (input.length >= 2) {
    rl.close();
  }
}).on("close", function () {
  let xCoordinate = Number(input[0]);
  let yCoordinate = Number(input[1]);

  if (xCoordinate > 0) {
    if (yCoordinate > 0) {
      console.log(1);
    } else if (yCoordinate < 0) {
      console.log(4);
    }
  } else if (xCoordinate < 0) {
    if (yCoordinate > 0) {
      console.log(2);
    } else if (yCoordinate < 0) {
      console.log(3);
    }
  }
});
