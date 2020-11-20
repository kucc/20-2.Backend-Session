const fs = require("fs");
const express = require("express");
const menu = require("../data/menu.json");
const menuRouter = express.Router();

menuRouter.get("/", (req, res, next) => {
  res.json(menu);
});

menuRouter.get("/:id", (req, res, next) => {
  const id = Number(req.params.id);
  const result = menu.filter((m) => m.id === id);
  if (result.length !== 0) {
    res.json(result);
  } else {
    res.status(404).send(`Check your id again!`);
  }
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
    if (err) {
      res.status(500).send("There was an error while updating the data.");
    } else {
      res.send("Your menu is successfully added👍");
      console.log(menu);
    }
  });
});

menuRouter.put("/:id", (req, res, next) => {
  const { name, price } = req.body;
  const id = Number(req.params.id);
  const modifiedMenu = menu.map((m) => {
    if (m.id === id) {
      m.name = name;
      m.price = price;
    }
    return m;
  });
  fs.writeFile("./src/data/menu.json", JSON.stringify(modifiedMenu), (err) => {
    if (err) {
      res.status(500).send("There was an error while updating the data.");
    } else {
      res.send("Your menu is successfully updated👍");
      console.log(modifiedMenu);
    }
  });
});

menuRouter.delete("/:id", (req, res, next) => {
  const id = Number(req.params.id);
  const newMenu = menu.filter((m) => m.id !== id);

  fs.writeFile("./src/data/menu.json", JSON.stringify(newMenu), (err) => {
    if (err) {
      res.status(500).send("There was an error while updating the data.");
    } else {
      res.send("Your menu is successfully deleted👍");
      console.log(newMenu);
    }
  });
});

module.exports = menuRouter;
