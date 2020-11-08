const datas = require("../../data/week1/prob16");

let SumMoney = 0;
let count = 0;
let AvgMoney = 0;

for (i = 0; i < datas.length; i++) {
  if (datas[i].age >= 30) {
    SumMoney += datas[i].money;
    count += 1;
  }
}
AvgMoney = SumMoney / count;

console.log(AvgMoney);

//단단히 이상해
