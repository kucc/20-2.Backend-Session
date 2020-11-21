const express = require("express");
const customerRouter = express.Router();
const CustomerModel = require("../model/customerModel");

customerRouter.get("/:date", async (req, res, next) => {
  const dateObj = new Date(req.params.date);
  const date = dateObj.toJSON().slice(0, 10);

  const customer = await CustomerModel.getCustomerByDate(date);
  if (!customer || customer.length === 0) {
    res.status(400).json({ false: "Not Found" });
    return;
  }
  res.json(customer);
});

customerRouter.get("/", async (req, res, next) => {
  const customer = await CustomerModel.getCustomers();

  if (!customer || customer.length === 0) {
    res.status(400).json({ false: "Not Found" });
    return;
  }
  res.json(customer);
});

customerRouter.get("/:id", async (req, res, next) => {
  const id = parseInt(req.params.id);

  const customer = await CustomerModel.getCustomerById(id); //data를 받아온다.

  if (!customer || customer.length === 0) {
    res.status(400).json({ false: "Not Found" });
    return;
  }
  res.json(customer);
});
customerRouter.post("/", async (req, res, next) => {
  const body = req.body;
  if (!body["name"] || !body["spending"]) {
    res.status(400).json({ false: "Invalid request" });
    return;
  }
  const newCustomer = await CustomerModel.createCustomer(body);

  if (!newCustomer || newCustomer.length === 0) {
    res.status(400).json({ false: "Not Found" });
    return;
  }

  res.send("New customer added.");
});

module.exports = customerRouter;
