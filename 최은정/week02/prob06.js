const Ryan = 20;
const Apeach = 30;
const Muzi = 40;
const Frodo = 50;

const groupTotalAge = (person1, person2, ...others) => {
  let add = 0;
  for (let person of others) {
    add += person;
  }
  console.log(person1 + person2 + add);
};

groupTotalAge(Ryan, Apeach, Muzi, Frodo);
