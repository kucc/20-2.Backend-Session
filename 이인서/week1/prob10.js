const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  let inputArray = line.split(" ");
  let minute = Number(inputArray[1]);
  let hour = Number(inputArray[0]);

  if (minute - 45 < 0) {
    minute = minute - 45 + 60;
    hour -= 1;
    if (hour < 0) {
      hour = hour + 24;
    }
  } else {
    minute -= 45;
  }
  console.log(`${hour} ${minute}`);

  rl.close();
});
