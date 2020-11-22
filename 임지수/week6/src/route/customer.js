const express = require("express");
const customerRouter = express.Router();
const CustomerModel = require("../model/customerModel");

customerRouter.get("/date/:date", async (req, res, next) => {
  const date = req.params.date;

  const customer = await CustomerModel.getCustomerByDate(date);
  if (!customer || customer.length === 0) {
    res.status(404).json({ false: "Not Found" });
    return;
  }
  res.json(customer);
});

customerRouter.get("/", async (req, res, next) => {
  const customer = await CustomerModel.getCustomer();
  if (!customer || customer.length === 0) {
    res.status(404).json({ false: "Not Found" });
    return;
  }
  res.json(customer);
});

customerRouter.get("/:id", async (req, res, next) => {
  const id = parseInt(req.params.id);

  const customer = await CustomerModel.getCustomerById(id);
  if (!customer || customer.length === 0) {
    res.status(404).json({ false: "Not Found" });
    return;
  }
  res.json(customer);
});

customerRouter.post("/", async (req, res, next) => {
  const body = req.body;

  if (!body["name"] || !body["total"]) {
    res.status(400).json({ false: "invalid request" });
    return;
  }

  const newCustomer = await CustomerModel.createCustomer(body);
  res.json(newCustomer);
});

module.exports = customerRouter;
