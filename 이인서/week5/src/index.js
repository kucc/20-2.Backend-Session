const express = require("express");
const app = express();
const port = 5000;
const menuRouter = require("./route/menu");
const customerRouter = require("./route/customer");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/menu", menuRouter);
app.use("/customer", customerRouter);

app.listen(port, () => {
  console.log("listening in 5000!");
});
