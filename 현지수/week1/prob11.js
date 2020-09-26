const FindQuadrant = (a, b) => {
  if (a == 0 || b == 0) {
    console.log("다른 점을 입력하세요.");
  } else if (a > 0 && b > 0) {
    console.log("Quadrant 1");
  } else if (a > 0 && b < 0) {
    console.log("Quadrant 4");
  } else if (a < 0 && b > 0) {
    console.log("Quadrant 2");
  } else {
    console.log("Quadrant 3");
  }
};

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
  if (input.length == 2) {
    rl.close();
  }
}).on("close", function () {
  let x = Number(input[0]);
  let y = Number(input[1]);

  FindQuadrant(x, y);
  process.exit();
});
