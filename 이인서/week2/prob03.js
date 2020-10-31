//객체를 Destruct 하여 일부의 Property 를 추출하는 예시를 작성하시오

let elmo = {
  color: "red",
  annoying: true,
  height: "unknown",
  friends: 10,
};

let { color, height, ...rest } = elmo;
console.log(color);
console.log(height);
console.log(rest);
