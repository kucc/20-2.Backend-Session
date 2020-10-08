const alarm = (number) =>
  new Promise((resolve, reject) => {
    if (typeof number === "number") {
      resolve(`Wake up it's ${number}`);
    } else reject(new Error(`Your alarm is broken`));
  });

alarm(8) //
  .then((message) => {
    console.log(message);
  })
  .catch((e) => {
    console.log("zzz");
  })
  .then(
    new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("I said WAKE UP!!");
      }, 2000);
    })
  )
  .then(
    new Promise((resolve, rejcet) => {
      setTimeout(() => {
        console.log(`WAKEUP!!!!!!!!!!!`);
      }, 4000);
    })
  );
