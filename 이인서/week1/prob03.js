const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  let inputString = line.split(" ");

  for (word of inputString) {
    console.log(word);
  }
  rl.close();
});
