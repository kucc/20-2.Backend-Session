const data = require("../../data/week2/prob10");

const underFifty = data
  .filter((number) => {
    return number <= 50;
  })
  .map((number) => number * number);

console.log(underFifty);
