const values = require("../../data/week1/prob16");

let sum = 0;
let ageOver30 = 0;
for (value of values) {
  if (value.age >= 30 && !isNaN(value.money)) {
    sum += value.money;
    ageOver30 += 1;
  }
}

let mean = sum / ageOver30;
console.log(mean);
