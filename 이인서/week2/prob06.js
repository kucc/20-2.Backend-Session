const addNumber = (...numbers) => {
  let sum = 0;
  for (number of numbers) {
    if (!isNaN(number)) {
      sum += number;
    }
  }
  return sum;
};

console.log(addNumber(1, 2, 3, 4, 5, "둘리"));
