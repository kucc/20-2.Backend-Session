const fs = require("fs");
const express = require("express");
const customerList = require("../data/customer.json");
const customerRouter = express.Router();
let customers = customerList.customers;

customerRouter.get("/:year/:month/:date", (req, res, next) => {
  const { year, month, date } = req.params;
  const lastVisit = year + "-" + month + "-" + date;

  const customersOnthatDay = customers
    .filter((c) => c.lastVisit === lastVisit)
    .map((c) => {
      return {
        name: c.name,
        spending: c.spending,
      };
    });

  res.json(customersOnthatDay);
});

customerRouter.get("/", (req, res, next) => {
  const allCustomers = customers.map((c) => {
    return {
      id: c.id,
      name: c.name,
    };
  });

  res.json(allCustomers);
});

customerRouter.get("/:id", (req, res, next) => {
  const id = Number(req.params.id);

  const idMatchedCustomer = customers
    .filter((c) => {
      return c.id === id;
    })
    .map((c) => {
      return {
        name: c.name,
        spending: c.spending,
      };
    });

  res.json(idMatchedCustomer);
});

customerRouter.post("/", (req, res, next) => {
  const { name, spending } = req.body;

  const myDate = new Date();
  const year = myDate.getFullYear().toString();
  const month = (myDate.getMonth() + 1).toString();
  const date = myDate.getDate().toString();
  const today = year + "-" + month + "-" + date;

  const checkCustomers = customers.filter((c) => {
    return c.name === name;
  });

  if (checkCustomers.length === 0) {
    customers.push({
      id: customers.length + 1,
      name: name,
      spending: spending,
      lastVisit: today,
    });
    //file에 넣기
    fs.writeFile(
      "./src/data/customer.json",
      JSON.stringify(customers),
      (err) => {
        if (err) {
          res.send("There was an error while updating the data.");
        }
        console.log("WriteFile didn't work");
      }
    );
  } else {
    for (let c of customers) {
      if (c.name === name) {
        c.spending = spending;
        c.lastVisit = today;
      }
    }
    //file에 넣기
  }

  console.log(customers);
  res.send("Customer data is successfully updated 👍");
});

module.exports = customerRouter;
