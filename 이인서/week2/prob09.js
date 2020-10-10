//매니저가 기계를 구매했는데 , 어떤 기계가 돌아가는지 제대로 명시가 안되는 것으로 보이네요 . 이 기계좀 고쳐주세요
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
  constructor(name, work) {
    this.name = name;
    this.work = work;
  }
}

const coffeeMachine = new Machine("coffeeMachine", function () {
  console.log(`${this.name} is working`);
});

const iceCreamMachine = new Machine("iceCreamMachine", function () {
  console.log(`${this.name} is working`);
});

const starbucksManager = new Manager("starbucks");
starbucksManager.register("coffee", coffeeMachine.work.bind(coffeeMachine));
starbucksManager.register(
  "iceCream",
  iceCreamMachine.work.bind(iceCreamMachine)
);
starbucksManager.do("coffee");
starbucksManager.do("iceCream");
