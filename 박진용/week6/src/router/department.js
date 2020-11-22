const express = require("express");
const { DepartmentService } = require("../service/department");

const DepartmentRouter = express.Router();

DepartmentRouter.post("/", async (req, res) => {
  const { name } = req.body;
  const newDepartmentRouer = await DepartmentService.createDepartment(name);
  res.json(newDepartmentRouer);
});

DepartmentRouter.get("/:departmentId", async (req, res) => {
  const { departmentId } = req.params;

  const department = await DepartmentService.getDepartmentById(departmentId);
  if (!department) {
    res.status(404).json({ message: "존재하지 않는 학과입니다" });
  }

  res.json(department);
});

module.exports = { DepartmentRouter };
