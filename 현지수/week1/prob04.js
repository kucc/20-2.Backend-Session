const TypeTeller = function (variable) {
  if (typeof variable == "string") {
    console.log("문자열입니다.");
  } else if (typeof variable == "number") {
    console.log("숫자입니다.");
  } else {
    console.log("모르겠어요");
  }
};

let test1 = "안녕";
let test2 = 3;

TypeTeller(test1);
TypeTeller(test2);
