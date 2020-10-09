const studyHater = (activity) =>
  new Promise((resolve, reject) => {
    if (activity === "공부") {
      reject(new Error("하기 싫어"));
    } else {
      resolve(`${activity} 재밌다`);
    }
  });

const studyHaterChain = studyHater("게임")
  .then((message) => {
    console.log(message);
  })
  .then(() => {
    setTimeout(() => console.log("공부는 하기 싫어"), 2000);
  })
  .then(() => {
    setTimeout(() => console.log("더 놀래"), 4000);
  })
  .catch((e) => {
    console.log(e.message);
  });
