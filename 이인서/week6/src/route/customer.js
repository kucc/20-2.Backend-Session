const express = require("express");
const customerRouter = express.Router();
const CustomerModel = require("../model/customerModel");

customerRouter.get("/:id", async (req, res, next) => {
  const id = parseInt(req.params.id);
  const customer = await CustomerModel.getCustomerById(id);

  if (!customer || customer.length === 0) {
    res.status(404).json({ false: "Not Found" });
    return;
  }
  res.json(customer);
});

customerRouter.get("/", async (req, res, next) => {
  const customers = await CustomerModel.getAllCustomers();

  if (!customers) {
    res.status(404).json({ false: "Not Found" });
    return;
  }
  res.json(customers);
});

customerRouter.get("/date/:day", async (req, res, next) => {
  const date = new Date(req.params.day);
  const customer = await CustomerModel.getCustomerbyDate(date);

  if (!customer || customer.length === 0) {
    res.status(404).json({ false: "Not Found" });
    return;
  }
  res.json(customer);
});

customerRouter.post("/", async (req, res, next) => {
  const body = req.body;
  //요청에 대한 가공
  if (!body["name"] || !body["total"]) {
    res.status(400).json({ false: "Invalid Request" });
    return;
  }
  const newCustomer = await CustomerModel.createCustomer(body);
  if (!newCustomer) {
    res.status(500).json({ false: "error" });
    return;
  }

  res.json(newCustomer);
});

module.exports = customerRouter;
