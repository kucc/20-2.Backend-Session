let 로봇 = {
  name: "R2D2",
  age: 1,
  sound: "삐용삐용",
  hasWheel: true,
};

console.log(`이름은? ${로봇.name}, 나이는? ${로봇.age}`);

class OverWatch {
  constructor(name, position) {
    this.name = name;
    this.position = position;
  }

  introduce = () => {
    console.log(`내 이름은 ${this.name}, 내 포지션은 ${this.position}`);
  };
}

let genji = new OverWatch("겐지", "공격");

genji.introduce();
