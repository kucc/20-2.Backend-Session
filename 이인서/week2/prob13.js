//13. Async await을 이용하여 2 초 간격으로 3 개의 문장을 출력해주세요

function sentence1() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("성공!"), 2000);
  });
}

function sentence2() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("두 번째 문장이다!"), 2000);
  });
}

function sentence3() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("마지막 문장이다!"), 2000);
  });
}
async function showSentence() {
  console.log(await sentence1());
  console.log(await sentence2());
  console.log(await sentence3());
}

showSentence();
