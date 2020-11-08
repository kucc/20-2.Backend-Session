const http = require("http");
let menu = require("./menuphan.json");

let is_in_json = (json, search_key) => {
  for (let key in json) {
    if (key === search_key) return 1;
  }
  return 0;
};

const server = http.createServer((req, res) => {
  // 헤더 설정
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.setHeader("charset", "utf-8");
  console.log(req.method);
  decoded_uri = decodeURIComponent(req.url);
  food = decoded_uri.slice(1);

  let body = "";
  req
    .on("data", (data) => {
      body = JSON.parse(data);
      console.log(body);
    })
    .on("end", () => {
      switch (req.method) {
        case "GET":
          if (decoded_uri === "/") {
            // 전체 메뉴 보여주기 (GET/ )
            console.log("미소초밥 메뉴판", menu);
            res.write(JSON.stringify(menu));
            res.end();
          } else {
            if (is_in_json(menu, food)) {
              console.log(food + "의 가격은 " + menu[food]);
              res.write(food + "의 가격은 ");
              res.write(JSON.stringify(menu[food]));
              res.end();
            } else {
              console.log("메뉴판에 없는 메뉴를 보여달라함 ㅋㅋ");
              res.write("그런 메뉴 없습니다 ^_^");
              res.end();
            }
          }
          break;
        case "POST":
          // 메뉴 추가하기 (POST /)
          menu = { ...menu, ...body };
          console.log("새로운 메뉴판", menu);
          res.write(JSON.stringify(menu));
          res.end();
          break;
        // res.end();
        case "PUT":
          // 메뉴 수정하기 (PUT /{메뉴이름})
          for (let key in body) {
            // 메뉴판에 원래 있는 메뉴만 수정
            if (is_in_json(menu, key)) menu[key] = body[key];
            else continue;
          }
          console.log("가격 변경된 메뉴판", menu);
          res.write(JSON.stringify(menu));
          res.end();
          break;
        case "DELETE":
          // 메뉴 삭제하기 (DELETE /{메뉴이름})
          if (is_in_json(menu, food)) {
            delete menu[food];
            console.log("삭제된 메뉴판", menu);
            res.write(JSON.stringify(menu));
            res.end();
          } else {
            console.log("원래부터 메뉴판에 없는 메뉴를 삭제하려함 ㅋㅋ");
            res.write("원래 없는 메뉴거든요 ^_^");
            res.end();
          }
      }
    });
});

server.listen(4000, "localhost", () => {
  console.log(`listening on localhost:4000`);
});
