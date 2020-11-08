const fs = require("fs");
const express = require("express");
const menuRouter = express.Router();

const data = require("../data/menuphan.json");

menuRouter.get("/:id", (req, res, next) => {
  const id = Number(req.params.id);
  const result = data.filter((menu) => menu.id === id);
  if (result === []) {
    res.status(404).send("존재하지 않는 id입니다.");
  } else {
    res.send(result);
  }
});

menuRouter.get("/", (req, res, next) => {
  res.send(data);
});

menuRouter.post("/", (req, res, next) => {
  const { name, price } = req.body;
  const newMenu = {
    id: data.length + 1,
    name: name,
    price: price,
  };
  data.push(newMenu);
  fs.writeFile("./src/data/menuphan.json", JSON.stringify(data), (err) => {
    if (err) {
      res.status(404).send("menu update failed");
    } else {
      res.send("menu updated!");
    }
  });
});

menuRouter.put("/:id", (req, res, next) => {
  const id = Number(req.params.id);

  const { name, price } = req.body;
  const modifiedMenu = data.map((cur) => {
    if (cur.id === id) {
      cur.name = name;
      cur.price = price;
    }
    return cur;
  });
  console.log(modifiedMenu);
  fs.writeFile(
    "./src/data/menuphan.json",
    JSON.stringify(modifiedMenu),
    (err) => {
      if (err) {
        res.status(404).send("modify failed");
      } else {
        res.send("modified");
      }
    }
  );
});

menuRouter.delete("/:id", (req, res, next) => {
  const id = Number(req.params.id);
  const deletedMenu = data.filter((menu) => menu.id !== id);
  console.log(deletedMenu);
  fs.writeFile(
    "./src/data/menuphan.json",
    JSON.stringify(deletedMenu),
    (err) => {
      if (err) {
        res.status(404).send("delete failed");
      } else {
        res.send("deleted");
      }
    }
  );
});
module.exports = menuRouter;
