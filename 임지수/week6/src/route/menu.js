const express = require("express");
const menuRouter = express.Router();
const MenuModel = require("../model/menuModel");

menuRouter.get("/", async (req, res, next) => {
  const menu = await MenuModel.getMenu();

  if (!menu || menu.length === 0) {
    res.status(404).json({ false: "Not Found" });
    return;
  }
  res.json(menu);
});

menuRouter.get("/:id", async (req, res, next) => {
  const id = parseInt(req.params.id);

  const menu = await MenuModel.getMenuById(id);

  if (!menu || menu.length === 0) {
    res.status(404).json({ false: "Not Found" });
    return;
  }
  res.json(menu);
});

menuRouter.post("/", async (req, res, next) => {
  const body = req.body;

  if (!body["name"] || !body["price"]) {
    res.status(400).json({ false: "invalid request" });
    return;
  }

  const newMenu = await MenuModel.createMenu(body);
  res.json(newMenu);
});

menuRouter.put("/:id", async (req, res, next) => {
  const id = parseInt(req.params.id);
  const body = req.body;

  if (!body["name"] || !body["price"]) {
    res.status(400).json({ false: "invalid request" });
    return;
  }

  const newMenu = await MenuModel.updateMenu(id, body);
  res.json(newMenu);
});

menuRouter.delete("/:id", async (req, res, next) => {
  const id = parseInt(req.params.id);

  const menu = await MenuModel.deleteMenu(id);

  if (!menu) {
    res.status(404).json({ false: "Could not delete" });
    return;
  }

  res.json(menu);
});

module.exports = menuRouter;
