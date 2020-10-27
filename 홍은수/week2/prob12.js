const eater = (food) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (food === "salad") reject("샐러드 맛없어 우웩");
      resolve(`${food} 다 먹음..! 냠 ><`);
    }, 2000);
  });
};

eater("스테이크")
  .then((message) => {
    console.log(message);
    return eater("치킨");
  })
  .then((message) => {
    console.log(message);
    return eater("피자");
  })
  .then((message) => {
    console.log(message);
  })
  .catch((e) => {
    console.log(e);
  });
