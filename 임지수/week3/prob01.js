const fs = require("fs");
const http = require("http");
let menuphan = require("./menuphan.json");
const menu = JSON.stringify(menuphan);

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.setHeader("charset", "utf-8");
  let body = "";
  const menuNames = Object.getOwnPropertyNames(menuphan); // JSON 데이터의 key 값들 (메뉴 이름) 을 담은 배열 menuNames 생성
  req
    .on("data", (data) => {
      body = JSON.parse(data);
    })
    .on("end", () => {
      const food = decodeURIComponent(req.url).substr(1); // 이스케이핑 된 문자열을 정상적인 문자열로 바꾸고 맨 앞의 "/" 를 제거
      switch (req.method) {
        case "GET":
          if (req.url === "/") {
            res.write(menu);
            console.log("메뉴판 읽어 오기 완료 !");
          } else if (menuNames.includes(food)) {
            res.write(JSON.stringify(menuphan[food])); // menuphan[food]는 food의 가격
            console.log("메뉴판 읽어 오기 완료 !");
          } else {
            res.write("오류 ! 메뉴에 있는 음식의 이름을 입력해 주세요 ...");
          }
          break;
        case "POST":
          menuphan = { ...menuphan, ...body }; // 원래 메뉴판과 body에서 새로 추가된 메뉴 합치기
          console.log("새로운 메뉴 추가 완료 !");
          break;
        case "PUT":
          if (menuNames.includes(food)) {
            menuphan[food] = body[food]; // 메뉴판의 가격을 body의 가격으로 교체
            console.log("메뉴 가격 변경 완료 !");
          } else {
            res.write("오류 ! 메뉴에 있는 음식만 가격 변경이 가능합니다 ...");
          }
          break;
        case "DELETE":
          if (menuNames.includes(food)) {
            delete menuphan[food];
            console.log("메뉴 삭제 완료 !");
          } else {
            res.write("오류 ! 메뉴에 있는 음식만 삭제가 가능합니다 ...");
          }
          break;
      }
      fs.writeFileSync("./menuphan.json", JSON.stringify(menuphan)); // 새로운 메뉴판 업데이트 해 주기
      res.end();
    });
});

server.listen(5000, "localhost", () => {
  console.log(`listening on localhost:5000`);
});
