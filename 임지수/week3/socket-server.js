const net = require("net");
let pool = []; // pool 배열 선언

const server = net.createServer((socket) => {
  pool.push(socket);
  socket.on("data", (data) => {
    chat = JSON.parse(data);
    for (member of pool) {
      if (chat.userChat === "나가기") {
        // "나가기" 를 입력하면 전체 채팅이 종료
        member.end();
      } else {
        member.write(`${chat.userName} : ${chat.userChat}`);
      }
    }
  });
});

server.listen(6000, () => {
  console.log("-- 채팅이 시작되었습니다 --");
});
