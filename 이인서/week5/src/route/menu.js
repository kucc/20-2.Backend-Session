const express = require("express");
const menuRouter = express.Router();
const menu = require("../menuphan.json");
const fs = require("fs");

let menuLength = menu.length;

menuRouter.get("/", (req, res, next) => {
  res.send(menu);
});

menuRouter.get("/:id", (req, res, next) => {
  const menuItem = getMenuItem();
  if (menuItem === null) {
    res.send("그런 메뉴 없습니다.");
  } else {
    res.send(menuItem);
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
  customWriteFile();
});

menuRouter.put("/:id", (req, res, next) => {
  const menuItem = getMenuItem();

  if (menuItem === null) {
    res.send("그런 id 없습니다.");
  } else {
    menuItem.menuName = req.body.menuName;
    menuItem.menuPrice = req.body.menuPrice;
    res.send(menuItem);
  }
  customWriteFile();
});

menuRouter.delete("/:id", (req, res, next) => {
  const menuItem = getMenuItem();

  if (menuItem === null) {
    res.send("그런 id 없습니다.");
  } else {
    delete menuItem;
  }
  customWriteFile();
});

const customWriteFile = function () {
  fs.writeFileSync("./src/menuphan.json", JSON.stringify(menu), (err) => {
    console.log(`${err}: 저장 실패!`);
    res.send(`${err}: 저장 실패!`);
  });
};

const getMenuItem = function () {
  menu.filter((item) => {
    return item.id === req.params.id;
  });
};

module.exports = menuRouter;
