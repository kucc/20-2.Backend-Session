const express = require("express");
const menuRouter = express.Router();
const MenuModel = require("../model/menuModel");

menuRouter.get("/", async (req, res, next) => {
  const menus = await MenuModel.getMenu();

  if (!menus) {
    res.status(404).json({ false: "Not Found" });
    return;
  }
  res.json(menus);
});

menuRouter.get("/:id", (req, res, next) => {
  const menuItem = await MenuModel.getMenuById(req.params.id);
  if (!menuItem) {
    res.status(404).json({ false: "Not Found" });
  }
  res.json(menuItem);
});

menuRouter.post("/", (req, res, next) => {
  const menuItem = await MenuModel.createMenu(req.body);
  if (!menuItem){
    res.status(404).send("업데이트 실패!");
  }
  res.json(menuItem);
});

menuRouter.put("/:id", (req, res, next) => {
  const menuItem = await MenuModel.updateMenu(req.params.id, req.body);

  if (menuItem === null) {
    res.status(404).send("변경 실패!");
  }
  res.json(menuItem);
});

menuRouter.delete("/:id", (req, res, next) => {
  const menuItem = await MenuModel.deleteMenu(req.params.id)
  if (menuItem === null) {
    res.status(404).send("지우려는 item이 존재하지 않습니다.");
  }
});

module.exports = menuRouter;
