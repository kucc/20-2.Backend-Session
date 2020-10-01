const data = require("../../data/week2/prob11");

const result = data
  .filter((num) => {
    return parseInt(num) % 6 === 0;
  })
  .map((num) => {
    return parseInt(num);
  })
  .reduce((acc, num) => {
    return (acc += num);
  });

console.log(result);

//Math.floor(num) ,0;
