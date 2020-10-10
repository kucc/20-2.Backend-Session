const Thief = (speed) =>
  new Promise((escape, caught) => {
    if (speed === "fast") {
      escape(`${speed}도둑 : 난 안잡히지 난 ${speed} 하거든`);
    } else caught(new Error(`${speed} 도둑 : 난 잡혀따`));
  });

const Police = (status) =>
  new Promise((success, fail) => {
    if (status === "busy") {
      fail(
        new Error(`${status} 경찰 : 오마이갓 나 너무 ${status}해서 못잡음 `)
      );
    } else success(`${status}경찰 : 잡았군 역시 난 최고의 경찰이야`);
  });

console.log("도둑이다!!!");
const fastThief = Thief("fast").then((message) =>
  setTimeout(() => {
    console.log(message);
  }, 4000)
);
const slowThief = Thief("slow").catch((e) =>
  setTimeout(() => {
    console.log(e.message);
  }, 2000)
);

const freePolice = Police("free").then((message) =>
  setTimeout(() => {
    console.log(message);
  }, 3000)
);

const busyPolice = Police("busy").catch((e) =>
  setTimeout(() => {
    console.log(e.message);
  }, 5000)
);

Promise.all([fastThief, slowThief, freePolice, busyPolice]).then(() => {
  console.log("사건시작");
  setTimeout(() => {
    console.log("사건끝이다");
  }, 6000);
});
