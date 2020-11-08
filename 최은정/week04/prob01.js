const menu = require("./menuphan.json");
const http = require("http");

http
  .createServer((req, res) => {
    let { url, method } = req;

    req
      .on("data", (data) => {
        let food = decodeURIComponent(data.toString().split("=")[0]);
        let price = decodeURIComponent(data.toString().split("=")[1]);
        menu[food] = price;
      })
      .on("end", () => {
        switch (method) {
          case "GET":
            res.writeHead(200, { "Content-Type": "application/json" });
            if (url === "/") {
              res.end(JSON.stringify(menu));
            } else {
              let reqMenu = decodeURIComponent(url.split("/")[1]);
              if (menu[reqMenu]) {
                res.end(JSON.stringify(menu[reqMenu]));
              } else {
                res.writeHead(404);
                res.end("Page not found");
              }
            }
            break;

          case "POST":
            res.writeHead(200);
            if (url === "/") {
              console.log(menu);
              res.end("Your menu is added!");
            } else {
              res.writeHead(404);
              res.end("Page not found");
            }
            break;

          case "PUT":
            res.writeHead(200);
            if (url) {
              console.log(menu);
              res.end("The price is changed!");
            } else {
              res.writeHead(404);
              res.end("Page not found");
            }
            break;

          case "DELETE":
            res.writeHead(200);
            if (url) {
              let deleteMenu = decodeURIComponent(url.split("/")[1]);
              console.log(deleteMenu);
              delete menu[deleteMenu];
              console.log(menu);
              res.end("The menu is deleted");
            } else {
              res.writeHead(404);
              res.end("Page not found");
            }
            break;

          default:
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
