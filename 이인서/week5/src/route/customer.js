const express = require("express");
const fs = require("fs");
const customerRouter = express.Router();
const customers = require("../customer.json");
let customerLength = customers.length;

customerRouter.get("/", (req, res, next) => {
  res.send(customers);
});

customerRouter.get("/:year/:month/:day", (req, res, next) => {
  res.send(customers);
});

customerRouter.get("/:id", (req, res, next) => {
  let isChekced = false;
  for (customer of customers) {
    if (Number(customer.id) === Number(req.params.id)) {
      res.send(`id: ${customer.id}\n
      spending: ${customer.customerSpending}`);
      isChekced = true;
    }
  }
  if (isChekced === false) {
    res.send("그런 id 없습니다!");
  }
});

customerRouter.post("/", (req, res, next) => {
  customerLength += 1;
  let currentDate = new Date();
  const customerItem = {
    id: `${customerLength}`,
    customerName: req.body.customerName,
    customerSpending: req.body.customerSpending,
    visitDate: currentDate.toJSON(),
  };
  customers.push(customerItem);
  fs.writeFileSync("./src/customer.json", JSON.stringify(customers));
});

module.exports = customerRouter;
