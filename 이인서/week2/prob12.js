const sentenceMaker = () =>
  new Promise((resolve) => {
    setTimeout(resolve, 2000);
  })
    .then(() => {
      console.log("첫번째 문장");

      return new Promise((resolve) => {
        setTimeout(resolve, 2000);
      });
    })
    .then(() => {
      console.log("두번째 문장");

      return new Promise((resolve) => {
        setTimeout(resolve, 2000);
      });
    })
    .then(() => {
      console.log("세번째 문장");
    });

sentenceMaker();
