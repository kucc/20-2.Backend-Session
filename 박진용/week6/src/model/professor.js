const { DataTypes } = require("sequelize");
const sequelize = require("../loader/database");

const ProfessorEntity = sequelize.define(
  "Professor",
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
    payment: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 2000000,
    },
  },
  { freezeTableName: true, timestamps: false }
);

module.exports = ProfessorEntity;
