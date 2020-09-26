const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  input = line.split(" ");

  let a = Number(input[0]);
  let b = Number(input[1]);

  if (a > b) {
    console.log(">");
  } else if (a < b) {
    console.log("<");
  } else {
    console.log("==");
  }

  rl.close();
});
