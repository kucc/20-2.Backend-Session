const DepartmentEntity = require("../model/department");

const DepartmentService = {
  createDepartment: async (name) => {
    return await DepartmentEntity.create({ name });
  },

  getDepartmentById: async (id) => {
    return await DepartmentEntity.findOne({ where: { id } });
  },

  deleteDepartment: async (id) => {
    await DepartmentEntity.destroy({ where: { id } });
  },
};

module.exports = { DepartmentService };
