const data = require("../../data/week1/prob06");
const values = data;

let result = 0;
for (let i = 0; i < values.length; i++) {
  result += parseFloat(values[i]);
}
console.log(result);
