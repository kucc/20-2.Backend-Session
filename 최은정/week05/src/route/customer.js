//배열초기값설정?
const express = require("express");
const customerList = require("../data/customer.json");
const customerRouter = express.Router();
let customers = customerList.customers;

customerRouter.get("/:year/:month/:date", (req, res, next) => {
  const { year, month, date } = req.params;
  const lastVisit = year + "-" + month + "-" + date;
  let customersOnthatDay = [];

  for (let c of customers) {
    if (c.lastVisit === lastVisit) {
      let customerOnThatDay = {
        name: c.name,
        spending: c.spending,
      };
      customersOnthatDay.push(customerOnThatDay);
    }
  }
  res.json(customersOnthatDay);
});

customerRouter.get("/", (req, res, next) => {
  let customersInfo = [];
  for (let c of customers) {
    let { id, name } = c;
    let customerInfo = {
      id: id,
      name: name,
    };
    customersInfo.push(customerInfo);
  }
  res.json(customersInfo);
});

customerRouter.get("/:id", (req, res, next) => {
  const id = Number(req.params.id);
  let customersInfo = [];
  for (let c of customers) {
    if (c.id === id) {
      let customerInfo = {
        name: c.name,
        spending: c.spending,
      };
      customersInfo.push(customerInfo);
    }
  }
  res.json(customersInfo);
});

customerRouter.post("/", (req, res, next) => {
  const { name, spending } = req.body;
  const myDate = new Date();
  const year = myDate.getFullYear().toString();
  const month = (myDate.getMonth() + 1).toString();
  const date = myDate.getDate().toString();
  const today = year + "-" + month + "-" + date;

  for (let c of customers) {
    if (c.name === name) {
      c.spending = spending;
      c.lastVisit = today;
    }
  }
  //기존손님이 아니면?
  console.log(customers);
  res.send("Customer data is successfully updated 👍");
});

module.exports = customerRouter;
