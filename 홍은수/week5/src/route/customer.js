const express = require("express");
const customerRouter = express.Router();
const CustomerModel = require("../model/customerModel");

// Get /customer
customerRouter.get("/", async (req, res, next) => {
  const customer = await CustomerModel.getCustomer();
  if (!customer || customerRouter.length === 0) {
    res.status(404).json({ false: "Not Found" });
    return;
  }
  res.json(customer);
});

// Get /customer/:id
customerRouter.get("/:id", async (req, res, next) => {
  const id = parseInt(req.params.id);

  const customer = await CustomerModel.getCustomerById(id);
  if (!customer || customerRouter.length === 0) {
    res.status(404).json({ false: "Not Found" });
    return;
  }
  res.json(customer);
});

// Get /customer/{year}-{month}-{day}
customerRouter.get("/date/:inputDate", async (req, res, next) => {
  const date = req.params.inputDate;

  const customer = await CustomerModel.getCustomerByDate(date);
  if (!customer || customerRouter.length === 0) {
    res.status(404).json({ false: "Not Found" });
    return;
  }
  res.json(customer);
});

// Post /customer
customerRouter.post("/", async (req, res, next) => {
  const body = req.body;
  if (!body["name"] || !body["spent"]) {
    res.status(404).json({ false: "Invalid Request" });
    return;
  }

  const newCustomer = await CustomerModel.createCustomer(body);
  console.log(newCustomer);
  if (!newCustomer) {
    res.status(500).json({ false: "Not Found" });
    return;
  }
  res.json({ result: "True" });
});

module.exports = customerRouter;
