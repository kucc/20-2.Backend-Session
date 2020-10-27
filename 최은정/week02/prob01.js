//객체 리터럴로 객체 선언
let student = {
  name: "Eunjeong Choi",
  age: 23,
  hobby: "Netflix and chill",
  mood: function () {
    console.log(this.hobby + " makes me happy.");
  },
};

console.log(student);
student.mood();

//클래스의 생성자로 객체 선언
class Students {
  constructor(name) {
    this.name = name;
  }
  intro() {
    console.log(`Hi! My name is ${this.name}`);
  }
}

const Eunjeong = new Students("Eunjeong Choi");

console.log(Eunjeong);
Eunjeong.intro();
