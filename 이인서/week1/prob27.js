const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputString;
let joiCount = 0;
let ioiCount = 0;

rl.on("line", function (line) {
  inputString = line;
  rl.close();
}).on("close", function () {
  for (let i = 0; i < inputString.length - 2; i++) {
    if (inputString[i] + inputString[i + 1] + inputString[i + 2] === "JOI") {
      joiCount++;
    } else if (
      inputString[i] + inputString[i + 1] + inputString[i + 2] ===
      "IOI"
    ) {
      ioiCount++;
    }
  }

  console.log(joiCount);
  console.log(ioiCount);
});
