const data = require("../../data/week2/prob11");

const result = data
  .map((number) => parseInt(number))
  .filter((number) => {
    return number % 6 === 0;
  })
  .reduce((acc, number) => (acc += number), 0);
console.log(result);
