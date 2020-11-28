const express = require("express");
const transactionRouter = express.Router();
const TransactionModel = require("../model/transactionModel");

transactionRouter.get("/", async (req, res, next) => {
  const transactions = await TransactionModel.getAllTransactions();

  if (!transactions) {
    res.status(404).json({ false: "Not Found" });
    return;
  }
  res.json(transactions);
});

transactionRouter.get("/:customerId", (req, res, next) => {
  const transaction = await TransactionModel.getTransactionbyCustomerId(req.params.customerId);
  if (!transaction) {
    res.status(404).json({ false: "Not Found" });
  }
  res.json(transaction);
});

transactionRouter.get("/:menuId", (req, res, next) => {
  const transaction = await TransactionModel.getTransactionbyMenuId(req.params.menuId);
  if (!transaction){
    res.status(404).json({ false: "Not Found" });
  }
  res.json(transaction);

});
