class Manager {
  constructor(name) {
    this.name = name;
    this.machines = {};
  }

  register(workName, handler) {
    this.machines[workName] = handler;
  }

  do(workName) {
    this.machines[workName]();
  }
}

class Machine {
  constructor(name) {
    this.name = name;
    this.work = function () {
      console.log(`${name} is working`);
    };
  }
}

const coffeeMachine = new Machine("coffeeMachine");

const iceCreamMachine = new Machine("iceCreamMachine");

const starbucksManager = new Manager("starbucks");
starbucksManager.register("coffee", coffeeMachine.work);
starbucksManager.register("iceCream", iceCreamMachine.work);
starbucksManager.do("coffee");
starbucksManager.do("iceCream");

//저는 이렇게말고 this bind는 아직 잘 못하겠습니다 ㅠㅠ
