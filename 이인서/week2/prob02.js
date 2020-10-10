// 정적 메서드는 클래스의 인스턴스 없이 호출이 가능하며 클래스가 인스턴스화되면 호출할 수 없다.
// 동일한 클래스 내의 다른 정적 메서드 내에서 정적 메서드를 호출하는 경우 this 사용
// 비정적 메서드에서 정적 메서드를 호출하려면 클래스명칭.정적메서드로 쓰거나 this.constructor.정적메서드 사용

class 붕어빵 {
  constructor(species, fillWith) {
    this.species = species;
    this.fillWith = fillWith;
  }

  static createInstance = (species, fillWith) => {
    return new 붕어빵(species, fillWith);
  };
}

let 슈크림붕어빵 = 붕어빵.createInstance("붕어", "슈크림");
let 피자잉어빵 = 붕어빵.createInstance("잉어", "피자");

console.log(
  `슈크림붕어빵, 종: ${슈크림붕어빵.species}, 앙금: ${슈크림붕어빵.fillWith}`
);
console.log(
  `피자잉어빵, 종: ${피자잉어빵.species}, 앙금: ${피자잉어빵.fillWith}`
);
