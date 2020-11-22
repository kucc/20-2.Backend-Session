const { DataTypes } = require("sequelize");
const sequelize = require("../loader/database");

const DepartmentEntity = sequelize.define(
  "Department",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { freezeTableName: true, timestamps: false }
);

module.exports = DepartmentEntity;
