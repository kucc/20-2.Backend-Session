const net = require("net");
readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const client = net.connect({ port: 5000, host: "localhost" });

let readChat = () => {
  rl.on("line", (chat) => client.write(JSON.stringify(chat)));
  client.on("data", (data) => {
    console.log(data.toString());
  });
  return readChat;
};
client.on("connect", () => {
  console.log("connected");
  readChat();
});
