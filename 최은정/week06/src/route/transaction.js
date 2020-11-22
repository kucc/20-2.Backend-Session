const express = require("express");
const transactionRouter = express.Router();
const transactionModel = require("../model/transactionModel");

transactionRouter.get("/", async (req, res, next) => {
  const transactions = await transactionModel.getTransactions();
  if (!transactions || transactions.length === 0) {
    res.status(404).json({ false: "Not Found" });
    return;
  }
  res.json(transactions);
});

transactionRouter.get("/customer/:id", async (req, res, next) => {
  const id = req.params.id;
  const transactions = await transactionModel.getTransactionById(id);

  if (!transactions || transactions.length === 0) {
    res.status(404).json({ false: "Not Found" });
    return;
  }
  res.json(transactions);
});

transactionRouter.get("/menu/:id", async (req, res, next) => {
  const id = parseInt(req.params.id);
  const transactions = await transactionModel.getTransactionBymenuId(id);

  if (!transactions || transactions.length === 0) {
    res.status(404).json({ false: "Not Found" });
    return;
  }
  res.json(transactions);
});

module.exports = transactionRouter;
