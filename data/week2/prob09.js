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

const coffeeMachine = new Machine("coffeeMachine", function() {
  console.log(`${this.name} is working`);
});

const iceCreamMachine = new Machine("iceCreamMachine", function() {
  console.log(`${this.name} is working`);
});

const starbucksManager = new Manager("starbucks");
starbucksManager.register("coffee", coffeeMachine.work);
starbucksManager.register("iceCream", iceCreamMachine.work);
starbucksManager.do("coffee");
starbucksManager.do("iceCream");
