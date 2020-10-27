const data = require("../../data/week2/prob10");

const result = data
  .filter((num) => {
    return num <= 50;
  })
  .map((num) => {
    return (num *= num);
  });

console.log(result);
