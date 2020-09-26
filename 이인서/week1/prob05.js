let executeFunction = function (exampleFunction) {
  if (typeof exampleFunction === "function") {
    exampleFunction();
  } else {
    console.log("함수 입력 부탁!");
  }
};

let variableFunc = function () {
  for (let i = 0; i < 5; i++) {
    console.log(`${i + 1}번째 반복입니다`);
  }
};

executeFunction(variableFunc);
