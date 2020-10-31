const imSick = (food) =>
  new Promise((resolve, reject) => {
    if (food === "죽") {
      resolve(`${food} 질리지만 잘먹었다`);
    } else reject(new Error(`나 아프다니까 ${food}를 주냐`));
  });

const jisooSick = imSick("죽")
  .then((message) => {
    setTimeout(() => {
      console.log(message);
    }, 2000);
  })
  .then((message) => {
    setTimeout(() => {
      console.log("제발 낫게해주라");
    }, 4000);
  })
  .then((message) => {
    setTimeout(() => {
      console.log("이제 떡볶이 줄일게");
    }, 6000);
  })
  .catch((e) => {
    console.log(e.message);
  });

console.log(jisooSick);
