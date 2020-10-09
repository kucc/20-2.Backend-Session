/* Promise 내에서 reject가 발생하는 경우 */

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
  val = "안녕";
  if (isNaN(val)) {
    reject(new Error("이건 숫자가 아니야")); // val에 숫자가 아니라 "안녕"이 들어가 있으므로, reject 된다
  } else {
    setTimeout(() => {
      resolve(val);
    }, 3000);
  }
});

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log(values);
  })
  .catch((e) => {
    console.log(e.message); // 여기에서 "이건 숫자가 아니야"가 출력된다
  }); // 프로미스 3개 중 하나만 reject 되어도 에러가 발생하고, 다른 두 개의 resolve 값은 출력되지 않는다

/* Unhandled Error가 발생하는 경우 */

const promiseA = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});

const promiseB = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 2000);
});

const promiseC = new Promise((resolve, reject) => {
  val = 4; // val 값은 4이므로, unhandled error 상황이 발생
  if (val === 3) {
    setTimeout(() => {
      resolve(val);
    }, 3000);
  }
});

Promise.all([promiseA, promiseB, promiseC])
  .then((values) => {
    console.log(values);
  })
  .catch((e) => {
    console.log(e.message); // 위에서 error 처리가 안 되었기 때문에 아무것도 출력되지 않는다
  }); // 3개 중 하나에서만 error 가 발생했는데도, 다른 두 개의 resolve 값 역시 출력되지 않는다
