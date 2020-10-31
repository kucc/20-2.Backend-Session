const checkError = (value) => {
  return new Promise((resolve, reject) => {
    if (value === 1) resolve("success!");
    else reject("Error!");
  });
};

let promiseArray = [checkError(1), checkError(0), checkError(1)];

function testPromiseAll() {
  let result = Promise.all(promiseArray);
  result.then(
    (message) => {
      console.log(message);
    }
    /* (error) => {
        console.log(error);
      }*/
  );
  // .catch((e) => console.log(e));
}

testPromiseAll();

//then의 두번째 인자나 catch로 오류를 잡지 않으면 UnhandledPromiseRejectionWarning이 발생.
