Cat(); //undefined
function Cat() {
  console.log(meow);
}

var meow = "meow";

Cat(); //meow

//변수니까 아직 선언 안했다면 var이어야지 실행됨
//선언된 이후로는 작동 그전에는 undefined

Hi();
function Hi() {
  console.log("Hi");
}

//이거는 함수선언식이라서 어디든 동작함
