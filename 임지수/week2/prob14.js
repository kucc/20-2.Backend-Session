const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("안녕");
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("하이");
  }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("헬로우");
  }, 3000);
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
