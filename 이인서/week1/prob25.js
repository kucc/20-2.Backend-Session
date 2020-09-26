const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  wordArray = line.trim().split(" ");
  rl.close();
}).on("close", function () {
  if (wordArray[0] === "") {
    console.log(0);
  } else {
    console.log(wordArray.length);
  }
});
