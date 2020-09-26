const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let wordArray = [];
let result = 0;

rl.on("line", function (line) {
  wordArray = line.split("");
  rl.close();
}).on("close", function () {
  let length = wordArray.length;
  for (let i = 0; i < length; i++) {
    if (
      wordArray[i] === "a" ||
      wordArray[i] === "e" ||
      wordArray[i] === "i" ||
      wordArray[i] === "o" ||
      wordArray[i] === "u"
    ) {
      result += 1;
    }
  }
  console.log(result);
});
