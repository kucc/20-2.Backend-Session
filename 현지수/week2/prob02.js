//먼저말이지, static method라는 것은 다른 것과는 다르게
//다른 것들은 클래스로 부터 만들어진 객체를 통해서 method를 실행한다면
//static method는 객체를 통하지 않고도 그냥 클래스의 이름으로 호출가능한거지
//그리고 static method는 인스턴스 객체에는 undefined 된당

class Multiply {
  static twice(n) {
    n = n;
    let result = n * 2;
    return { Number: n, Result: result };
  }
  static triple(n) {
    n = n;
    return n * 3;
  }
}

console.log(Multiply.twice(2));
console.log(Multiply.triple(3));

let MultiplyTwo = Multiply.twice(2);
console.log(MultiplyTwo);
