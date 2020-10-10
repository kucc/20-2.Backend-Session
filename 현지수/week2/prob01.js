//객체 리터럴
let person = {
  name: "지수",
  age: 25,
  say: function () {
    console.log(this.name + "짱이다");
  },
};

console.log(person);
person.say();

//클래스 생성자
class introduce {
  constructor(Name) {
    this.Name = Name;
  }
  Hi() {
    console.log(`안녕! 나는 ${this.Name}야`);
  }
}

const Jisooinstance = new introduce("지수");
Jisooinstance.Hi();
