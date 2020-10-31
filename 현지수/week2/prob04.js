const Pizza = {
  Bread: true,
  Cheese: true,
};

const HawaiianPizza = {
  ...Pizza,
  Pineapple: true,
};

console.log(HawaiianPizza);
