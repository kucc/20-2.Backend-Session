const express = require("express");
const app = express();
const port = 4000;

const menuRouter = require("./route/menu");
const customerRouter = require("./route/customer");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/menu", menuRouter);
app.use("/customer", customerRouter);

app.use("/", (req, res, next) => {
  res.send("hello!");
});
app.listen(port, () => {
  console.log("listening in 4000!");
});
