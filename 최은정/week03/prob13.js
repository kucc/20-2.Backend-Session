const timeOut = (todo, time) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(todo), time);
  });
};

const first = async () => {
  const doFirst = await timeOut("1. Wake up at 8AM.", 2000);
  console.log(doFirst);
};
const second = async () => {
  const doSecond = await timeOut("2. Brush my teeth.", 4000);
  console.log(doSecond);
};
const third = async () => {
  const doThird = await timeOut("3. Go running.", 6000);
  console.log(doThird);
};

console.log("My morning routine : ");
first();
second();
third();
