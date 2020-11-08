const CountVowels = (sentence) => {
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let count = 0;

  for (let char of sentence) {
    if (vowels.includes(char)) {
      count += 1;
    }
  }

  console.log(count);
};

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Write a sentence in English.\n ->", function (sentence) {
  CountVowels(sentence);
  rl.close();
});
