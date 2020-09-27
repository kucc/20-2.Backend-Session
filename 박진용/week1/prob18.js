const datas = require("../../data/week1/prob17");

let selfPresident = [];
let selfVicePresident = [];

for (data of datas) {
  if (data.president) {
    if (data.president.includes(data.name)) {
      selfPresident.push(data.name);
    }
  }

  if (data.vice_president) {
    if (data.vice_president.includes(data.name)) {
      selfVicePresident.push(data.name);
    }
  }
}

console.log("회장 야망꾼들", selfPresident);
console.log("부회장 야망꾼들", selfVicePresident);
