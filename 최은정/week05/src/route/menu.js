const fs = require("fs");
const express = require("express");
const menu = require("../data/menu.json");
const menuRouter = express.Router();

menuRouter.get("/", (req, res, next) => {
  res.json(menu);
});

menuRouter.get("/:id", (req, res, next) => {
  const id = Number(req.params.id);
  for (let m of menu) {
    if (m.id === id) {
      res.send(`id: ${m.id}\nname: ${m.name}\nprice: ${m.price}`);
    }
  }
  //없는 메뉴id 요청했을경우?
});

menuRouter.post("/", (req, res, next) => {
  const { name, price } = req.body;
  const newMenu = {
    id: menu.length + 1,
    name: name,
    price: price,
  };
  menu.push(newMenu);
  fs.writeFile("./src/data/menu.json", JSON.stringify(menu), (err) => {
    console.log("WriteFile didn't work");
  });
  console.log(menu);
  res.send("Your menu is successfully added👍");
});

menuRouter.put("/:id", (req, res, next) => {
  const { name, price } = req.body;
  const id = Number(req.params.id);
  for (let m of menu) {
    if (m.id === id) {
      m.name = name;
      m.price = price;
      console.log(menu);
      //fs.writeFile
      res.send(m);
    }
  }
  //없는 메뉴id 요청했을경우?
});

menuRouter.delete("/:id", (req, res, next) => {
  const id = Number(req.params.id);
  for (let m of menu) {
    if (m.id === id) {
      menu.splice(id - 1, 1);
      console.log(menu);
      //fs.writeFile
      res.send("The menu is successfully deleted 👌");
    }
  }
  //없는 메뉴id 요청했을경우?
});

module.exports = menuRouter;
