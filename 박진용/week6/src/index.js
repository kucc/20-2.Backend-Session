const express = require("express");
const initDatabase = require("./model/relation");
const { DepartmentRouter } = require("./router/department");
const { StudentRouter } = require("./router/student");
const app = express();

const init = async () => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  await initDatabase();

  app.use("/department", DepartmentRouter);
  app.use("/student", StudentRouter);
  app.use("/", (req, res, next) => {
    res.send("hi");
  });

  app.listen(4000, () => {
    console.log("4000번에서 열림");
  });
};

init();
