const timeout = (ms) => {
  return new Promise((res) => setTimeout(res, ms));
};

const eater = async (food) => {
  await timeout(2000);
  if (food === "salad") {
    throw new Error("샐러드 맛없어 우웩");
  } else {
    return `${food} 다 먹음..! 냠 ><`;
  }
};

const main = async () => {
  try {
    console.log(await eater("스테이크"));
    console.log(await eater("치킨"));
    console.log(await eater("피자"));
  } catch (error) {
    console.log(error.message);
  }
};

main();
