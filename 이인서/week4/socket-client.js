const net = require("net");
const readline = require("readline");
const name = "아무무";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const client = net.connect({ port: 5000, host: "localhost" });

let inputLine = () => {
  rl.on("line", function (line) {
    let input = {
      clientName: name,
      contents: line,
    };
    client.write(JSON.stringify(input)); //JSON 객체로 바꿔줌.
    console.log("writed");
  });
};

client.on("connect", () => {
  console.log("connected");
  inputLine();
});

client.on("data", (data) => {
  let temp = JSON.parse(data);
  temp[clientName];
});

client.on("close", () => {
  console.log("채팅 종료");
});
