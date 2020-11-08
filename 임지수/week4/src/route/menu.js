const fs = require("fs");
const express = require("express");
const menuRouter = express.Router();
const menu = require("../data/menu.json");

menuRouter.get("/", (req, res, next) => {
  res.send(menu);
});

menuRouter.get("/:id/", (req, res, next) => {
  const id = Number(req.params.id); // req.params.id 를 숫자로 바꿔 준다
  const food = menu.find((item) => item.id === id);
  if (food === undefined) {
    res.send("존재하지 않는 메뉴 id 입니다"); // find는 조건에 맞는 요소 없으면 undefined 반환
  } else {
    res.send(food);
  }
});

menuRouter.post("/", (req, res, next) => {
  const { name, cost } = req.body;
  const newData = {
    // id: menu.length + 1, 이렇게 하면 다른 메뉴 delete 후 post 할 때 중복 id 값 발생 가능
    id: menu[menu.length - 1].id + 1, // 그냥 마지막 메뉴 id 에 1 더해 주자
    name: name,
    cost: cost,
  };

  menu.push(newData);

  fs.writeFileSync("./src/data/menu.json", JSON.stringify(menu), (err) => {
    if (err) {
      console.log("오류 발생");
    }
    console.log("업데이트 완료");
  });

  res.send(menu);
});

menuRouter.put("/:id/", (req, res, next) => {
  const id = Number(req.params.id);
  const food = menu.find((item) => item.id === id);
  if (food === undefined) {
    res.send("존재하지 않는 메뉴 id 입니다");
  } else {
    food.name = req.body.name; // 메뉴 이름과 가격 변경
    food.cost = req.body.cost;
    res.send(food);
  }

  fs.writeFileSync("./src/data/menu.json", JSON.stringify(menu), (err) => {
    if (err) {
      console.log("오류 발생");
    }
    console.log("업데이트 완료");
  });
});

menuRouter.delete("/:id/", (req, res, next) => {
  const id = Number(req.params.id);
  const food = menu.find((item) => item.id === id);
  const idx = menu.indexOf(food); // idx = 삭제할 메뉴의 인덱스 값
  if (food === undefined) {
    res.send("존재하지 않는 메뉴 id 입니다");
  } else {
    menu.splice(idx, 1); // idx 위치에 있는 음식 삭제
    res.send(menu);
  }

  fs.writeFileSync("./src/data/menu.json", JSON.stringify(menu), (err) => {
    if (err) {
      console.log("오류 발생");
    }
    console.log("업데이트 완료");
  });
});

module.exports = menuRouter;
