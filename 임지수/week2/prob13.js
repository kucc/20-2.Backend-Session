const studyHater = async (activity) => {
  if (activity === "공부") {
    throw new Error("안 해");
  }
  return `${activity} 재밌다`;
};

const studyHaterAsync = async () => {
  try {
    const message = await studyHater("게임");
    console.log(message);
    setTimeout(() => console.log("공부는 하기 싫어"), 2000);
    setTimeout(() => console.log("더 놀래"), 4000);
  } catch (e) {
    console.log(e.message);
  }
};

studyHaterAsync();
