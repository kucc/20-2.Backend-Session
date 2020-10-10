const data = require("../../data/week2/prob11.js");

const result = data
  .filter((num) => {
    return parseInt(num) % 6 === 0;
  })
  .reduce((acc, num) => {
    //initial value가 주어지지 않으면 인덱스 1부터 시작.
    return (acc += num);
  }, 0); // initialvalue가 주어지면 currentIndex = 0, 아니면 1

console.log(result);

// 결론: intial value가 주어지면 accumulator에는 initialvalue 값이 들어가고, 인덱스 0부터 시작
//      intial value가 주어지지 않으면 accumulator에는 배열[0]값이 들어가고, 인덱스 1부터 시작
// 저번 시간에 initial value를 0으로 하지 않아서 acc에 360.2552...값이 들어가서 parseInt를 해주었는데도 result가 이상하게 나온것...
