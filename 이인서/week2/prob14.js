const promise1 = new Promise((resolve) => {
  setTimeout(() => resolve("내가 꼴등인줄 알았는데..."), 2000);
});

const promise2 = new Promise((resolve) => {
  setTimeout(() => resolve("2등"), 1000);
});

const promise3 = new Promise((resolve) => {
  setTimeout(() => resolve("일등인줄 알았는데?"), 500);
});

promiseArray = [promise1, promise2, promise3];

let beforeTime = new Date().getTime();
let result = Promise.all(promiseArray);

result.then(() => {
  console.log(result);
  let afterTime = new Date().getTime();
  console.log(
    `Time difference after all promises fullfill: ${afterTime - beforeTime}`
  ); //대충 2000ms
});
