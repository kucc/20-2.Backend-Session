const fs = require("fs");
const express = require("express");
const customerRouter = express.Router();

const data = require("../data/customer.json");

customerRouter.get("/:year/:month/:day", (req, res, next) => {
  console.log(req.params);
  const { year, month, day } = req.params;
  const result = data.filter((customer) => {
    const [y, m, d] = customer.date.split("/");
    return y === year && m === month && d === day;
  });
  res.send(result);
});

customerRouter.get("/", (req, res, next) => {
  const result = data.map((customer) => {
    const newJson = {
      id: customer.id,
      name: customer.name,
    };
    return newJson;
  });
  res.send(result);
});

customerRouter.get("/:id", (req, res, next) => {
  const id = Number(req.params.id);
  console.log(id);
  const [result] = data.map((customer) => {
    if (customer.id === id) {
      const newJson = {
        name: customer.name,
        spent: customer.spent,
      };
      return newJson;
    }
  });
  res.send(result);
});

customerRouter.post("/", (req, res, next) => {
  const { name, spent } = req.body;

  const now = new Date();
  let newDate = now.toISOString().slice(0, 10).replace(/-/g, "");
  newDate =
    newDate.slice(0, 4) + "/" + newDate.slice(4, 6) + "/" + newDate.slice(6, 8);
  const newCustomer = {
    id: data.length + 1,
    name: name,
    date: newDate,
    spent: spent,
  };

  data.push(newCustomer);
  fs.writeFile("./src/data/customer.json", JSON.stringify(data), (err) => {
    if (err) {
      res.status(404).send("customer add failed");
    } else {
      res.send("customer added!");
    }
  });

  // console.log(newCustomer);
  // res.send(newCustomer);
});

module.exports = customerRouter;
