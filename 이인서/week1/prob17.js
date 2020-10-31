const datas = require("../../data/week1/prob17");
const president = {};
const vicePresident = {}; // 객체안의 내용은 변경 가능하지만, 객체 자체는 변경 불가능.

for (data of datas) {
  // 배열 돌림..
  if (data.president) {
    // 객체의 president가 있으면
    for (candidate of data.president) {
      // 객체의 모든 프레지던트 값을 가져옴
      if (president[candidate]) {
        //저장해 놨으면
        president[candidate]++; // 숫자 하나 늘림.
      } else {
        president[candidate] = 1; // 없으면 하나 만들어. 키 값은 candidate, value는 1
      }
    }
  }
  if (data.vice_president) {
    // 객체의 vice_president가 있으면
    for (candidate of data.vice_president) {
      // 객체의 모든 vice프레지던트 값을 가져옴
      if (vicePresident[candidate]) {
        //저장해 놨으면
        vicePresident[candidate]++; // 숫자 하나 늘림.
      } else {
        vicePresident[candidate] = 1; // 없으면 하나 만들어.
      }
    }
  }
}

getMaxName = (candidate) => {
  // 객체를 가져와서
  let max = 0;
  let idx = 1;
  let elected = [];
  for (let someone in candidate) {
    // 객체 하나하나. 인덱스 someone으로 받아서 - someone은 키값이 된다고 함.
    console.log(someone);
    if (candidate[someone] > max) {
      // max값보다 candidate["someone"]이 크면
      max = candidate[someone];
      elected = [someone];
    } else if (candidate[someone] === max) {
      // 동점이면.
      elected.push(someone);
    }
    //if (idx === Object.keys(candidate).length) return elected; // name 길이랑 idx랑 같아지면 다 돈거니까 끝
    idx++;
  }
  return elected;
};

console.log(getMaxName(president).toString());
console.log(getMaxName(vicePresident).toString());
