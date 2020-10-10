const datas = require("../../data/week2/prob10");

const valuesUnder50 = datas
  .filter((num) => {
    return num <= 50;
  })
  .map((num) => {
    return num * num;
  });

console.log(valuesUnder50);
