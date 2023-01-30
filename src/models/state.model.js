const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define("State", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
    country: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
  }),
    { timestamps: false };
  // TimeStamps won't be used
};