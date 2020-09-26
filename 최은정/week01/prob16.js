const data = require("../../data/week1/prob16");
const Jiseongs = data;

let totalMoney = 0;
for (let i = 0; i < Jiseongs.length; i++) {
  if (Jiseongs[i]["age"] >= 30) {
    totalMoney += Jiseongs[i]["money"];
  }
}
console.log(totalMoney / 100);
