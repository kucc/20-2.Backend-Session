const menu = require("./menuphan.json");
const http = require("http");

http
  .createServer((req, res) => {
    let { url, method } = req;

    req
      .on("data", (data) => {
        let food = data.toString().split("=")[0];
        let price = data.toString().split("=")[1]; //버퍼 디코딩 필요.
        menu[food] = price;
      })
      .on("end", () => {
        if (method === "GET") {
          res.writeHead(200, { "Content-Type": "application/json" });
          if (url === "/") {
            res.end(JSON.stringify(menu));
          } else {
            let reqMenu = url.split("/")[1];
            if (menu[reqMenu]) {
              res.end(JSON.stringify(menu[reqMenu]));
            } else {
              res.writeHead(404);
              res.end("Page not found");
            }
          }
        } else if (method === "POST") {
          res.writeHead(200);
          if (url === "/") {
            console.log(menu);
            res.end("Your menu is added!");
          } else {
            res.writeHead(404);
            res.end("Page not found");
          }
        } else if (method === "PUT") {
          res.writeHead(200);
          if (url) {
            //파싱에서 작업해야되나 아님 여기서 해야되나?
            console.log(menu);
            res.end("The price is changed!");
          } else {
            res.writeHead(404);
            res.end("Page not found");
          }
        } else if (method === "DELETE") {
          res.writeHead(200);
          if (url) {
            let deleteMenu = url.split("/")[1];
            delete menu[deleteMenu];
            console.log(menu);
            res.end("The menu is deleted");
          } else {
            res.writeHead(404);
            res.end("Page not found");
          }
        } else {
          res.writeHead(404);
          res.end("Page not found");
        }
      })
      .on("error", (err) => {
        console.log(err);
        res.writeHead(500);
        res.end("Server error");
      });
  })
  .listen(3000, () => {
    console.log("server on : port 3000");
  });
