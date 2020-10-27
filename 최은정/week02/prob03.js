let student = {
  name: "Eunjeong Choi",
  age: 23,
  hobby: "Netflix and chill",
  mood: function () {
    console.log(this.hobby + " makes me happy.");
  },
};

let { name, age } = student;

console.log(name); //Eunejong Choi
