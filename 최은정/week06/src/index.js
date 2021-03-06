const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

const menuRouter = require("./route/menu");
const customerRouter = require("./route/customer");
const transactionRouter = require("./route/transaction");

app.use(express.json());
app.use(express.urlencoded({ extened: false }));

app.use("/menu", menuRouter);
app.use("/customer", customerRouter);
app.use("/transaction", transactionRouter);

app.use((req, res, next) => {
  res.status(404).send("Page not found");
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send(err);
});

app.listen(4000, () => {
  console.log("listening in 4000");
});
