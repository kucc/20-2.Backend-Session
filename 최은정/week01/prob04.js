function tellType(variable) {
  if (typeof variable === "string") {
    console.log("문자입니다");
  } else if (typeof variable === "number") {
    console.log("숫자입니다");
  }
}

tellType("12");
tellType(12);
