// Promise Chaining을 이용하여 2초 간격으로 3개의 문장을 출력해주세요- setTimeout 이용할 것!
const hungryMan = (food) =>
  new Promise((resolve, reject) => {
    if (food === "none") {
      reject(new Error("배고파"));
    } else {
      resolve(`${food} 냠냠`);
    }
  });
const hungryChain = hungryMan("라볶이")
  .then((msg) => {
    console.log(msg);
  })
  .then(() => {
    setTimeout(() => console.log("맛있다"), 2000);
  })
  .then(() => {
    setTimeout(() => console.log("한그릇더"), 4000);
  })
  .catch((e) => {
    console.log(e);
    console.log("ㅠㅠ");
  });

// 다른 예시
// const delay = (ms) =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (ms === undefined) reject(new Error("error"));
//       console.log(`${ms}ms 지남`);
//       resolve();
//     }, 2000);
//   });

// const chain = delay(0)
//   .then(() => delay(2000))
//   .then(() => delay(4000))
//   .catch((error) => {
//     console.log(error);
//   });
