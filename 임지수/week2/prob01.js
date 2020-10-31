// 객체 리터럴 문법 이용
const person = {
  name: "임지수",
  age: 22,
  greet() {
    console.log(`안뇽! 나는 ${this.name}야`);
  },
};

person.greet();

// 클래스의 생성자를 이용
class Dog {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet = () => {
    console.log(`멍멍! 나는 ${this.name}야`);
  };
}

const ppoppi = new Dog("뽀삐", 1);
ppoppi.greet();
