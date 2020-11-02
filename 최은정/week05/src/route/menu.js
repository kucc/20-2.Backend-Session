const express = require("express");
const menu = require("../data/menu.json");
const menuRouter = express.Router();
let menus = menu.menus;

menuRouter.get("/", (req, res, next) => {
  res.json(menu);
});

menuRouter.get("/:id", (req, res, next) => {
  for (let m of menus) {
    if (m.id === Number(req.params.id)) {
      res.send(`id: ${m.id}\nname: ${m.name}\nprice: ${m.price}`);
    } else {
      //없을때는 어케?
    }
  }
});

menuRouter.post("/", (req, res, next) => {
  const { name, price } = req.body;
  const newMenu = {
    id: menus.length + 1,
    name: name,
    price: price,
  };
  menus.push(newMenu);
  console.log(menus);
  res.send("Your menu is successfully added👍");
});

menuRouter.put("/:id", (req, res, next) => {
  const { name, price } = req.body;
  const id = Number(req.params.id);
  for (let m of menus) {
    if (m.id === id) {
      m.name = name;
      m.price = price;
      console.log(menus);
      res.send(m);
    } else {
      //없을때는 어케?
    }
  }
});

menuRouter.delete("/:id", (req, res, next) => {
  const id = Number(req.params.id);
  for (let m of menus) {
    if (m.id === id) {
      menus.splice(id - 1, 1);
      console.log(menus);
      res.send("The menu is successfully deleted 👌");
    } else {
      //없을때는 어케?
    }
  }
});

module.exports = menuRouter;
