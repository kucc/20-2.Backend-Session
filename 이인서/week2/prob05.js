//Spread Operator를 이용하여 두 배열을 합치는 예시를 작성하시오

let 월요일시간표 = ["자료구조", "이산수학", "기계학습", "교양스페인어"];
let 화요일시간표 = ["소프트웨어공학", "범죄와사회"];

let 시간표 = [...월요일시간표, ...화요일시간표];

console.log(시간표);
