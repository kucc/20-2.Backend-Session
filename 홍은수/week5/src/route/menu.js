const express = require("express");
const menuRouter = express.Router();
const MenuModel = require("../model/menuModel");

// Get /menu
menuRouter.get("/", async (req, res, next) => {
  const menu = await MenuModel.getMenu();
  if (!menu || menuRouter.length === 0) {
    res.status(404).json({ false: "Not Found" });
    return;
  }
  res.json(menu);
});

// Get /menu/:id
menuRouter.get("/:id", async (req, res, next) => {
  const id = parseInt(req.params.id);

  const menu = await MenuModel.getMenuById(id);
  if (!menu || menuRouter.length === 0) {
    res.status(404).json({ false: "Not Found" });
    return;
  }
  res.json(menu);
});

// Post /menu
menuRouter.post("/", async (req, res, next) => {
  const body = req.body;
  if (!body["name"] || !body["price"]) {
    res.status(404).json({ false: "Invalid Request" });
    return;
  }

  const newMenu = await MenuModel.createMenu(body);
  if (!newMenu) {
    res.status(500).json({ false: "Not Found" });
    return;
  }
  res.json({ result: "Success" });
});

// Put /menu/:id
menuRouter.put("/:id", async (req, res, next) => {
  const id = parseInt(req.params.id);

  const body = req.body;
  if (!body["name"] || !body["price"]) {
    res.status(404).json({ false: "Invalid Request" });
    return;
  }

  const modifiedMenu = await MenuModel.modifyMenu(id, body);
  if (!modifiedMenu) {
    res.status(500).json({ false: "Not Found" });
    return;
  }
  res.json({ result: "Success" });
});

// Delete /menu/:id
menuRouter.delete("/:id", async (req, res, next) => {
  const id = parseInt(req.params.id);

  const deletedMenu = await MenuModel.deleteMenu(id);
  if (!deletedMenu) {
    res.status(500).json({ false: "Not Found" });
    return;
  }
  res.json({ result: "Success" });
});
module.exports = menuRouter;
