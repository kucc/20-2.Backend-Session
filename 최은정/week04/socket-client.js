const net = require("net");
readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const client = net.connect({ port: 5000, host: "localhost" });

client.on("connect", () => {
  console.log("connected");
  rl.question("name: ", (name) => {
    client.write(
      JSON.stringify({
        name: `${name}`,
      })
    );
    rl.on("line", (chat) => {
      client.write(
        JSON.stringify({
          chat: `${name} : ${chat}`,
        })
      );
    });
  });
});
client.on("data", (data) => {
  console.log(data.toString());
});
