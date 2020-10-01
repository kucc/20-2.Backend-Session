/*Static Method는 class로 만들어지는 객체에는 할당되지 않는 class만의 메소드로, 
  class로 만들어진 객체들 간에 계산이 필요할 때 유용하게 사용된다. */

class Parent {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static ageDiff(obj1, obj2) {
    const ageDiff = obj1.age - obj2.age;

    return ageDiff;
  }
}

let dad = new Parent("Mr Choi", 35);
let mom = new Parent("Mrs.Choi", 30);

console.log(mom.ageDiff); //undefined
console.log(dad.ageDiff); //undefined
console.log(Parent.ageDiff(dad, mom)); // 5
