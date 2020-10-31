const net = require("net");
let pool = [];
const server = net.createServer((socket) => {
  socket.on("data", (data) => {
    let temp = JSON.parse(data);
    pool.push(temp[clientName]);

    socket.write(data); //data는 JSON. clientName: line으로 되어있음. pool에 clientName 저장.

    // 클라이언트가 보낸 데이터를 pool에 저장된 모든 connectioni에 write.
  });

  socket.on("end", () => {
    console.log("채팅 접속 종료!");
  });
});

server.on("listening", () => {
  console.log("Server is listening");
});

server.on("close", () => {
  console.log("Server closed");
});

server.listen(5000, () => {
  console.log("5000번에서 대기중");
});
