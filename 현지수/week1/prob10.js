const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Your Alarm. \n ->", (time) => {
  var Time = time.split(" ");
  var H = Number(Time[0]);
  var M = Number(Time[1]);
  if (H >= 24 || H < 0) {
    console.log("시간을 제대로 입력해주세요.");
  } else if (M >= 60 || M < 0) {
    console.log("시간을 제대로 입력해주세요.");
  } else {
    if (H > 0) {
      if (M >= 45) {
        var M = M - 45;
        console.log(`${H} ${M}`);
      } else {
        var H = H - 1;
        var M = M + 15;
        console.log(`${H} ${M}`);
      }
    } else if (H == 0) {
      if (M >= 45) {
        var M = M - 45;
        console.log(`${H} ${M}`);
      } else {
        var H = 23;
        var M = M + 15;
        console.log(`${H} ${M}`);
      }
    }
  }
  //왜 let H,M을 쓰면 초기화하라하고, 미리 0으로 선언하면 왜 값이 그냥 다 0이 될까용...
  // 오 해결한거같아 왜냐면 조건문안에서 또 let을 쓰는게 이상한거지 그치?

  rl.close();
});
