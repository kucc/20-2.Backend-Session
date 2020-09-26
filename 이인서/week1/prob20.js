let gcd = function (a, b) {
  let temp, n;

  if (a < b) {
    temp = a;
    a = b;
    b = temp;
  }

  while (b != 0) {
    n = a % b;
    a = b;
    b = n;
  }
  return a;
};

console.log(gcd(10, 25));
