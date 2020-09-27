const splitNum = (num) => {
  if (num.length == 2) {
    let splits = num.split("");
    let split1 = Number(splits[0]);
    let split2 = Number(splits[1]);
    return [split1, split2];
  } else if (num.length == 1) {
    num = "0" + num;
    let splits = num.split("");
    let split1 = Number(splits[0]);
    let split2 = Number(splits[1]);
    let sum = split1 + split2;
    return [split1, split2];
  } else {
    console.log("0~99사이로 입력하세요.");
    process.exit(1);
  }
};

const countCycle = (num) => {
  let originNum = num;
  if (num.length == 2) {
    originNum = num;
  } else if (num.length == 1) {
    originNum = "0" + num;
  } else {
    console.log("0~99사이로 입력하세요.");
    process.exit(1);
  }

  //let number = Number(num);
  let cycle = 1;

  while (cycle >= 1) {
    let splits = splitNum(num);
    let sum = splits[0] + splits[1];
    let sumsplits = splitNum(String(sum));
    let newnum = String(splits[1]) + String(sumsplits[1]);

    if (newnum == originNum) {
      console.log(cycle);
      break;
    } else {
      cycle += 1;
      num = newnum;
    }
  }
};

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Write number 0~99.\n ->", function (number) {
  countCycle(number);

  rl.close();
});
