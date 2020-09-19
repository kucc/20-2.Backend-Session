function Student(name, age) {
  this.name = name;
  this.age = age;
  this.sayHI = () => {
    console.log(`안녕하세요 저는 ${this.name} 에요. ${this.age}살입니다 `);
  };
}

const hyunjisu = new Student("jisu", 25);
const jinyong = new Student("jinyong", 24);

jinyong.sayHI();
hyunjisu.sayHI();

class ClassStudent {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHI() {
    console.log(`안녕하세요 저는 ${this.name} 에요. ${this.age}살입니다 `);
  }
}

const sa = new ClassStudent("jin", 24);
sa.sayHI();

const fs = require("fs");

let result;
fs.readFile("hello.txt", "utf8", (err, data) => {
  result = data;
  console.log(data);
});

const writeMessage = "나는 파일에 입력될 메세지야.";
fs.writeFile("message.txt", writeMessage, "utf8", () => {
  console.log("done");
});

console.log(data);
