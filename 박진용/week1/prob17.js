const datas = require("../../data/week1/prob17");
const president = {};
const vicePresident = {};

for (data of datas) {
  if (data.president) {
    for (candidate of data.president) {
      if (president[candidate]) {
        president[candidate]++;
      } else {
        president[candidate] = 1;
      }
    }
  }
  if (data.vice_president) {
    for (candidate of data.vice_president) {
      if (vicePresident[candidate]) {
        vicePresident[candidate]++;
      } else {
        vicePresident[candidate] = 1;
      }
    }
  }
}

getMaxName = (candidate) => {
  let max = 0;
  let idx = 1;
  let elected = [];
  for (let someone in candidate) {
    if (candidate[someone] > max) {
      max = candidate[someone];
      elected = [someone];
    } else if (candidate[someone] === max) {
      elected.push(someone);
    }

    if (idx === Object.keys(candidate).length) return elected;
    idx++;
  }
};

console.log("회장", getMaxName(president).toString());
console.log("부회장", getMaxName(vicePresident).toString());
