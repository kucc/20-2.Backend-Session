//지수님 코드

const net = require("net");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const sendMessage = (name) => {
  rl.question("", (chat) => {
    client.write(JSON.stringify({ userName: `${name}`, userChat: `${chat}` }));
    sendMessage(name); // 재귀적으로 콘솔 입력 무한대로 받기.
  });
};

const client = net.connect({ port: 6000, host: "localhost" });

client.on("connect", () => {
  let name;
  rl.question("당신의 이름을 입력하세요: ", (inputName) => {
    name = inputName;
    sendMessage(name);
  });
});

client.on("data", (data) => {
  console.log(data.toString());
});

client.on("close", () => {
  console.log(" -- 채팅이 종료되었습니다 -- ");
});
