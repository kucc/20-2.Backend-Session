const fs = require("fs");
const express = require("express");
const customerRouter = express.Router();
const customer = require("../data/customer.json");

customerRouter.get("/:year/:month/:date/", (req, res, next) => {
  //json 파일에는 날짜가 "YYYY-MM-DD" 형식으로 담겨 있다
  const date = req.params.year.concat(
    "-",
    req.params.month,
    "-",
    req.params.date
  ); // 주어진 url의 params 합쳐서 "YYYY-MM-DD" 형식 만들기
  const customerArr = customer.filter((item) => item.date === date); // 해당 날짜에 온 손님들 데이터 전부 customerArr에 넣기
  const resultArr = [];
  customerArr.map((e) => {
    resultArr.push(JSON.parse(`{"name": "${e.name}", "money": ${e.money}}`)); // 손님과 지출 금액만 JSON 형태로 반환
  });

  if (resultArr.length === 0) {
    res.send("해당 날짜에 방문한 손님이 없습니다");
  } else {
    res.send(resultArr);
  }
});

customerRouter.get("/", (req, res, next) => {
  res.send(customer);
});

customerRouter.get("/:id/", (req, res, next) => {
  const id = Number(req.params.id);
  const person = customer.find((item) => item.id === id);
  if (person === undefined) {
    res.send("존재하지 않는 손님 id 입니다"); // find는 조건에 맞는 요소 없으면 undefined 반환
  } else {
    res.send(
      JSON.parse(`{"name": "${person.name}", "money": ${person.money}}`)
    );
  }
});

customerRouter.post("/", (req, res, next) => {
  const strDate = JSON.stringify(new Date()); // new Date를 문자열로 만든다
  const { name, money } = req.body;
  const newData = {
    id: customer[customer.length - 1].id + 1, // 마지막 customer id 에 1 더해 주자
    name: name,
    date: strDate.substring(1, 11),
    money: money,
  };

  customer.push(newData);

  fs.writeFileSync(
    "./src/data/customer.json",
    JSON.stringify(customer),
    (err) => {
      if (err) {
        console.log("오류 발생");
      }
      console.log("업데이트 완료");
    }
  );

  res.send(customer);
});
module.exports = customerRouter;
