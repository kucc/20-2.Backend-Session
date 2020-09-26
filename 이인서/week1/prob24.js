const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputString;
let checkString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let countArray = Array.from({ length: checkString.length }, () => 0);

rl.on("line", function (line) {
  inputString = line;
  rl.close();
}).on("close", function () {
  let highestCount = 0;
  let isDuplicated = false;
  let highestCountIndex = 0;
  let upperCaseString = inputString.toUpperCase(); // 대소문자 구별이 없으므로 변환

  for (let i = 0; i < upperCaseString.length; i++) {
    let index = checkString.indexOf(upperCaseString[i]); // 특정 문자의 인덱스 구해서
    countArray[index]++; // 카운트 해주는 배열에 더해줌
  }

  for (let i = 0; i < countArray.length; i++) {
    if (countArray[i] > highestCount) {
      highestCount = countArray[i];
      isDuplicated = false;
      highestCountIndex = i;
    } else if (countArray[i] === highestCount) {
      isDuplicated = true; // 최고 카운트값과 동일하면 여러개의 문자가 가장 많이 사용되었으므로 중복 체크
    }
  }

  if (isDuplicated === true) {
    console.log("?");
  } else {
    console.log(checkString[highestCountIndex]);
  }
});
