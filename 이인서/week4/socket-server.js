//지수님 코드
const net = require("net");
let pool = []; // pool 배열 선언

const server = net.createServer((socket) => {
  pool.push(socket);
  socket.on("data", (data) => {
    chat = JSON.parse(data);
    if (chat.userChat === "나가기") {
      // "나가기" 를 입력하면 전체 채팅이 종료
      socket.end(); //한 소켓이 끊어지면 다른 client도 사용 못함. 해결은?
    } else {
      for (member of pool) {
        member.write(`${chat.userName} : ${chat.userChat}`);
      }
    }
  });
});

server.listen(6000, () => {
  console.log("-- 채팅이 시작되었습니다 --");
});
