const uriZip = async (member) => {
  if (member === "준호") {
    return `우리집 ${member} 너무 좋아`;
  } else if (member === "우영") {
    return `우리집 ${member} 아주 괜찮지`;
  } else throw new Error("나머진 잘몰라 미안");
};

const main = async () => {
  try {
    const message = await uriZip("준호");

    console.log(message);
    setTimeout(() => {
      console.log("다시 봐야겠다");
    }, 2000);
    setTimeout(() => {
      console.log("너는 누구 좋아해?");
    }, 4000);
  } catch (e) {
    console.log(e.message);
  }
};

//console.log(main);
//여기는 왜 그냥 main()이렇게 실행해야되는건가용?
//아 함수군요
main();
