const express = require("express");
const menuRouter = express.Router();
const menu = require("../menuphan.json");
const fs = require("fs");

let menuLength = menu.length;

menuRouter.get("/", (req, res, next) => {
  res.send(menu);
});

menuRouter.get("/:id", (req, res, next) => {
  let isChanged = false;
  for (let menuItem of menu) {
    if (menuItem.id === Number(req.params.id)) {
      res.send(`id: ${menuItem.id}\n
      menuName: ${menuItem.menuName}\n
      menuPrice: ${menuItem.menuPrice}`);
      isChanged = true;
    }
  }
  if (isChanged === false) {
    res.send("그런 id 없습니다!");
  }
});

menuRouter.post("/", (req, res, next) => {
  menuLength += 1;
  const menuItem = {
    id: String(menuLength),
    menuName: req.body.menuName,
    menuPrice: req.body.menuPrice,
  };

  menu.push(menuItem);
  fs.writeFileSync("./src/menuphan.json", JSON.stringify(menu));
});

menuRouter.put("/:id", (req, res, next) => {
  let isChanged = false;
  for (let menuItem of menu) {
    if (menuItem.id === Number(req.params.id)) {
      menuItem.menuName = req.body.menuName;
      menuItem.menuPrice = req.body.menuPrice;
      isChanged = true;
      res.send(menuItem);
    }
  }
  if (isChanged === false) {
    res.send("그런 id 없습니다");
  }
  fs.writeFileSync("./src/menuphan.json", JSON.stringify(menu));
});

menuRouter.delete("/:id", (req, res, next) => {
  for (let menuItem of menu) {
    if (menuItem.id === Number(req.params.id)) {
      delete menuItem; //id 값은 재사용해야하나?
    }
  }
});

module.exports = menuRouter;
