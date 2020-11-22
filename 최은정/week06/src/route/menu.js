const express = require("express");
const menuRouter = express.Router();
const menuModel = require("../model/menuModel");

menuRouter.get("/", async (req, res, next) => {
  const menus = await menuModel.getMenus();

  if (!menus || menus.length === 0) {
    res.status(404).json({ false: "Not Found" });
    return;
  }
  res.json(menus);
});

menuRouter.get("/:id", async (req, res, next) => {
  const id = parseInt(req.params.id);

  const menus = await menuModel.getMenuById(id);

  if (!menus || menus.length === 0) {
    res.status(404).json({ false: "Not Found" });
    return;
  }
  res.json(menus);
});
menuRouter.post("/", async (req, res, next) => {
  const body = req.body;
  if (!body["menuName"] || !body["price"]) {
    res.status(400).json({ false: "Invalid request" });
    return;
  }
  const newMenu = await menuModel.createMenu(body);

  if (newMenu.affectedRows === 0) {
    res.status(404).json({ false: "Not Found" });
    return;
  }

  res.send("New menu added.");
});
menuRouter.put("/:id", async (req, res, next) => {
  const id = parseInt(req.params.id);
  const body = req.body;

  if (!body["menuName"] || !body["price"]) {
    res.status(400).json({ false: "Invalid request" });
    return;
  }
  const updatedMenu = await menuModel.updateMenu(id, body);

  if (updatedMenu.changedRows === 0) {
    res.status(404).json({ false: "Not Found" });
    return;
  }
  res.send("Menu is updated.");
});
menuRouter.delete("/:id", async (req, res, next) => {
  const id = parseInt(req.params.id);

  const menu = await menuModel.deleteMenu(id);

  if (menu.affectedRows === 0) {
    res.status(404).json({ false: "Not Found" });
    return;
  }
  res.send("Menu is deleted");
});
module.exports = menuRouter;
