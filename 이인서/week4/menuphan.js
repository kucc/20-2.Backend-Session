let menus = require("./menuphan.json");
const http = require("http");
//fs 사용하면 readfileSync해야.
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.setHeader("charset", "utf-8");
  let body = "";

  req
    .on("data", (data) => {
      body = JSON.parse(data);
    })
    .on("end", () => {
      let menuName = Object.keys(menus); //키값을 가져와서

      switch (req.method) {
        case "GET":
          foodName = req.url.split("/")[1];

          if (req.url === "/") {
            res.write(JSON.stringify(menus));
          } else if (menuName.includes(foodName)) {
            res.write(JSON.stringify(menus[foodName]));
            //메뉴 이름에 대한 가격 반환
          } else {
            res.write("없는 메뉴입니다!"); // statuscode를 설정해야.
          }
          break;
        case "POST":
          for (key of Object.keys(body)) {
            //여러개일 수도 있어서...?
            menus[key] = body[key];
          }
          break;
        case "PUT":
          for (key of Object.keys(body)) {
            if (menuName.includes(key)) {
              menus[key] = body[key];
            } else {
              res.write("없는 메뉴입니다!");
            }
          }
          break;
        case "DELETE":
          for (key of Object.keys(body)) {
            if (menuName.includes(key)) {
              delete menus[key];
            } else {
              res.write("없는 메뉴입니다!");
            }
          }
      }
      res.end();
      //fs.writeFileSync('./menuphan.json, JSON(stringfy(menu)) 비동기라 writefileSync해줘야!
    });
});

server.listen(5000, "localhost", () => {
  console.log(`listening on localhost:5000`);
});
