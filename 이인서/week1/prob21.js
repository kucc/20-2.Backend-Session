let lcm = function (a, b) {
  let lcm = 1;

  while (true) {
    if (lcm % a == 0 && lcm % b == 0) {
      break;
    }
    lcm++;
  }
  return lcm;
};

console.log(lcm(21, 14));
