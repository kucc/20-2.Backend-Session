const net = require("net");
let pool = [];

const server = net.createServer((socket) => {
  pool.push(socket);
  socket.on("data", (data) => {
    let d = JSON.parse(data);
    console.log(d);
    if (!d.chat) {
      for (let socket of pool) {
        socket.write(`${d.name} has entered the room`);
      }
    } else {
      for (let socket of pool) {
        socket.write(`${d.chat}`);
      }
    }
  });
});

server.listen(5000, () => {
  console.log("5000번에서 대기중");
});
