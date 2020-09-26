const values = require("../../data/week1/prob06");
let sum = 0;

for (value of values) {
  sum += Number(value);
}

console.log(`총합은 ${sum}입니다.`);
