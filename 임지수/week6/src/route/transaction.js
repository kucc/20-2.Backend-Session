const express = require("express");
const transactionRouter = express.Router();
const TransactionModel = require("../model/transactionModel");

transactionRouter.get("/", async (req, res, next) => {
  const transaction = await TransactionModel.getTransaction();

  if (!transaction || transaction.length === 0) {
    res.status(404).json({ false: "Not Found" });
    return;
  }
  res.json(transaction);
});

transactionRouter.get("/customer/:customerId", async (req, res, next) => {
  const customerId = parseInt(req.params.customerId);

  const transaction = await TransactionModel.getTransactionByCustomerId(
    customerId
  );

  if (!transaction || transaction.length === 0) {
    res.status(404).json({ false: "Not Found" });
    return;
  }
  res.json(transaction);
});

transactionRouter.get("/menu/:menuId", async (req, res, next) => {
  const menuId = parseInt(req.params.menuId);

  const transaction = await TransactionModel.getTransactionByMenuId(menuId);

  if (!transaction || transaction.length === 0) {
    res.status(404).json({ false: "Not Found" });
    return;
  }
  res.json(transaction);
});

module.exports = transactionRouter;
