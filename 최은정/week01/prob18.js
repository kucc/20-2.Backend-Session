const data = require("../../data/week1/prob17");
const JibackRyong = data;

let selfPresident = [];
let selfVicePresident = [];

//자기자신을 회장으로 뽑은 사람들
for (let i = 0; i < JibackRyong.length; i++) {
  for (let j = 0; j < JibackRyong[i]["president"].length; j++) {
    if (JibackRyong[i]["president"][j] === JibackRyong[i]["name"]) {
      selfPresident.push(JibackRyong[i]["name"]);
    }
  }
}
//자기자신을 부회장으로 뽑은 사람들
for (let i = 0; i < JibackRyong.length; i++) {
  for (let j = 0; j < JibackRyong[i]["vice_president"].length; j++) {
    if (JibackRyong[i]["vice_president"][j] === JibackRyong[i]["name"]) {
      selfVicePresident.push(JibackRyong[i]["name"]);
    }
  }
}
console.log(selfPresident, selfVicePresident);
