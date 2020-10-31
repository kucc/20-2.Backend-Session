const net = require("net");
let pool = [];

const server = net.createServer((socket) => {
  socket.on("data", (data) => {
    console.log(data.toString());
    pool.push(data.toString());
    console.log(pool);
    for (let i = 0; i < pool.length; i++) {
      pool[i];
    }
    socket.write(data.toString()); //다른 모든 클라이언트들에게 뿌려주기. pool 에 있는.
  });
});

server.listen(5000, () => {
  console.log("5000번에서 대기중");
});
