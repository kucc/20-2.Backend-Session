const express = require("express");
const transactionRouter = express.Router();
const TransactionModel = require("../model/transactionModel");

// Get /transaction
transactionRouter.get("/", async (req, res, next) => {
  const transaction = await TransactionModel.getTransaction();
  if (!transaction || transactionRouter.length === 0) {
    res.status(404).json({ false: "Not Found" });
    return;
  }
  res.json(transaction);
});

// Get /transaction/customer/:customer_id
transactionRouter.get("/customer/:id", async (req, res, next) => {
  const id = parseInt(req.params.id);

  const transaction = await TransactionModel.getTransactionByCId(id);
  if (!transaction || transactionRouter.length === 0) {
    res.status(404).json({ false: "Not Found" });
    return;
  }
  res.json(transaction);
});

// Get /transaction/menu/:menu_id
transactionRouter.get("/menu/:id", async (req, res, next) => {
  const id = parseInt(req.params.id);

  const transaction = await TransactionModel.getTransactionByMId(id);
  if (!transaction || transactionRouter.length === 0) {
    res.status(404).json({ false: "Not Found" });
    return;
  }
  res.json(transaction);
});
module.exports = transactionRouter;
