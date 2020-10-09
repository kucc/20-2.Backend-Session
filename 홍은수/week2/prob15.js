// Reject 발생하는 경우 : reject가 발생하면 catch 문으로 에러 핸들링을 해준다
Promise.all([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 7000)),
  new Promise((resolve, reject) => setTimeout(() => reject(2), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 1000)),
])
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log("error");
  });

// Unhandled Error 발생하는 경우 : catch 문으로 안 감싸준 경우 발생
Promise.all([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 7000)),
  new Promise((resolve, reject) => setTimeout(() => reject(2), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 1000)),
]).then((result) => {
  console.log(result);
});
