const promise1 = new Promise((res, rej) => {
  setTimeout(function () {
    console.log("first promise");
  }, 6000);
});

const promise2 = new Promise((res, rej) => {
  setTimeout(function () {
    console.log("second promise");
  }, 2000);
});

const promise3 = new Promise((res, rej) => {
  setTimeout(function () {
    console.log("third promise");
  }, 1000);
});

Promise.all([promise1, promise2, promise3])
  .then(() => {
    console.log("finished");
  })
  .catch((e) => console.log(e.message));
