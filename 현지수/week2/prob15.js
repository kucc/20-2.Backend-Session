//reject
const imSick = (food) =>
  new Promise((resolve, reject) => {
    if (food === "죽") {
      resolve(`${food} 질리지만 잘먹었다`);
    } else reject(new Error(`${food}안먹어`));
  });

const iDontwannaSick = imSick("떡볶이")
  .then((message) => {
    console.log(message);
  })
  .catch((e) => {
    console.log(e.message);
  });

console.log(iDontwannaSick);

//unhandled
//어케하지
