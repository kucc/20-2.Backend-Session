const sequelize = require("../loader/database");
const DepartmentEntity = require("./department");
const ProfessorEntity = require("./professor");
const StudentEntity = require("./student");

const initDatabase = () => {
  DepartmentEntity.hasMany(StudentEntity, {
    foreignKey: { name: "departmentId", allowNull: false },
    onDelete: "cascade",
    onUpdate: "cascade",
  });

  DepartmentEntity.hasMany(ProfessorEntity, {
    foreignKey: { name: "departmentId", allowNull: false },
    onDelete: "cascade",
    onUpdate: "cascade",
  });

  sequelize.sync();
};

module.exports = initDatabase;
