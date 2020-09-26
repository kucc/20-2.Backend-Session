//모든 글자가 소문자면 대문자로, 대문자면 소문자로
// string.length해서,
// array의 모든 문자에 대해서.

let string1 = "THIS IS KOREA UNIVERSITY";
let string2 = "this is korea university";
let string3 = "This is Korea University";

let caseChange = function (string) {
  if (string == string.toLowerCase()) {
    return string.toUpperCase();
  } else if (string == string.toUpperCase()) {
    return string.toLowerCase();
  }
};

console.log(caseChange(string1));
console.log(caseChange(string2));
console.log(caseChange(string3));
