const express = require("express");
const app = express();

const menuRouter = require("./route/menu");

app.use(express.json());
app.use(express.urlencoded({ extened: false }));

app.use("/menu", menuRouter);

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
