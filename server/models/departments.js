"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Departments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Departments.hasMany(models.Students, { foreignKey: "department_id" });
    }
  }
  Departments.init(
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        default: new Date(),
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        default: new Date(),
      },
    },
    {
      sequelize,
      modelName: "Departments",
    }
  );
  return Departments;
};
