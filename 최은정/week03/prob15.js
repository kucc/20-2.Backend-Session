const callMyName = (name) =>
  new Promise((resolve, reject) => {
    if (name === "Eunjeong Choi") {
      resolve("Correct!");
    } else {
      reject(new Error("Wrong!"));
    }
  });

//Promise-reject : catch 가 reject 함수의 인자를 받는다.
callMyName("Eunjeong Kim")
  .then(console.log)
  .catch((e) => console.log(e.message));

//Promise-unhandled Error : catch가 없으면 unhandled error 를 날린다.
callMyName("Eunjeong Kim").then(console.log);
