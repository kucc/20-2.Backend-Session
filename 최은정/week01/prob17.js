const data = require("../../data/week1/prob17");
const JibackRyong = data;

//president 득표수 구하기
let presidentBallet = [];
for (let i = 0; i < JibackRyong.length; i++) {
  for (let j = 0; j < JibackRyong[i]["president"].length; j++) {
    presidentBallet.push(JibackRyong[i]["president"][j]);
  }
}
for (let i = 0; i < JibackRyong.length; i++) {
  JibackRyong[i]["presidentCnt"] = 0;
  for (let j = 0; j < presidentBallet.length; j++) {
    if (JibackRyong[i]["name"] === presidentBallet[j]) {
      JibackRyong[i]["presidentCnt"] += 1;
    }
  }
}
//president 최다 득표자
let presidentVoteMax = 0;
for (let i = 0; i < JibackRyong.length; i++) {
  if (JibackRyong[i]["presidentCnt"] > presidentVoteMax) {
    presidentVoteMax = JibackRyong[i]["presidentCnt"];
  }
}
for (let i = 0; i < JibackRyong.length; i++) {
  if (JibackRyong[i]["presidentCnt"] === presidentVoteMax) {
    console.log(JibackRyong[i]["name"]);
  }
}

//vice_president 득표수 구하기
let vicePresidnetBallet = [];
for (let i = 0; i < JibackRyong.length; i++) {
  for (let j = 0; j < JibackRyong[i]["vice_president"].length; j++) {
    vicePresidnetBallet.push(JibackRyong[i]["vice_president"][j]);
  }
}
for (let i = 0; i < JibackRyong.length; i++) {
  JibackRyong[i]["vicePresidentCnt"] = 0;
  for (let j = 0; j < vicePresidnetBallet.length; j++) {
    if (JibackRyong[i]["name"] === vicePresidnetBallet[j]) {
      JibackRyong[i]["vicePresidentCnt"] += 1;
    }
  }
}
//vice_president 최다 득표자
let vicePresidentVoteMax = 0;
for (let i = 0; i < JibackRyong.length; i++) {
  if (JibackRyong[i]["vicePresidentCnt"] > vicePresidentVoteMax) {
    vicePresidentVoteMax = JibackRyong[i]["vicePresidentCnt"];
  }
}

for (let i = 0; i < JibackRyong.length; i++) {
  if (JibackRyong[i]["vicePresidentCnt"] === vicePresidentVoteMax) {
    console.log(JibackRyong[i]["name"]);
  }
}
