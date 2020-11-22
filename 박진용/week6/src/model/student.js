const { DataTypes } = require("sequelize");
const sequelize = require("../loader/database");

const StudentEntity = sequelize.define(
  "Student",
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
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sex: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
  },
  { freezeTableName: true, timestamps: false }
);

module.exports = StudentEntity;
