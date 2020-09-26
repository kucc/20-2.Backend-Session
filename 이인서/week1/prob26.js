const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputString;
rl.on("line", function (line) {
  inputString = line;
  rl.close();
}).on("close", function () {
  let regexpression = /c\=|c\-|dz\=|d\-|lj|nj|s\=|z\=/g;
  const result = inputString.replace(regexpression, " ");

  console.log(result.length);
});
