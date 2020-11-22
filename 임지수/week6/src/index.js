const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

dotenv.config();

const app = express();
const port = 4000;

app.use(bodyParser.json());

const menuRouter = require("./route/menu");
const customerRouter = require("./route/customer");
const transactionRouter = require("./route/transaction");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/menu", menuRouter);
app.use("/customer", customerRouter);
app.use("/transaction", transactionRouter);

app.use("/", (req, res, next) => {
  res.send("hello!");
});

app.listen(port, () => {
  console.log("listening in 4000!");
});
