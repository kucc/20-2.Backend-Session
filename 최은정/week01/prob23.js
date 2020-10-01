const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "알파벳이 100개 이하인 영어 소문자로 된 문자열 하나를 입력하세요. ",
  (input) => {
    let alphabet = "abcdefghijklmnopqrstuvwyxz";
    for (let i = 0; i < alphabet.length; i++) {
      console.log(input.indexOf(alphabet[i]));
    }

    rl.close();
  }
);
