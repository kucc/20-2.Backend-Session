//4. Spread Operator 를 이용하여 객체의 Property 를 다른 객체로 전달하는 예시를 작성하시오
let 자동차 = {
  속도: "빠름",
  교통수단: true,
  운전면허: true,
};

let 전기차 = {
  fuel: "전기",
  ...자동차,
};

console.log(전기차);
