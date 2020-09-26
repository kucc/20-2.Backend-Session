//인서님 코드
const gcd = function (a, b) {
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

const lcm = (a, b) => {
  const GCD = gcd(a, b);
  return GCD * (a / GCD) * (b / GCD);
};
